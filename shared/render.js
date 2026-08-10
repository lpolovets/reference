// ---------------- CARD MARKUP ----------------
// The one copy of the entry-card HTML. The build calls it to prerender the list
// into the page, and the client calls it again whenever a filter changes, so the
// two must agree exactly — a second implementation in build.js would drift within
// a week and show up as a flash of different content on first paint.
//
// Written as a factory rather than a module of free functions because both sides
// need the same two ambient values: SHEET (the client-facing sheet config, not
// the raw sheet.json) and EMBED_OK (false in the artifact flavor, which may not
// make external requests).
//
// Loaded as a plain script in the browser, ahead of app.js, and require()d by
// build.js. The export line is guarded because `module` does not exist in a page.
function makeRenderer(SHEET, EMBED_OK) {

  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // ---- glossary term marking ----
  // SHEET.terms is present only when a sheet's glossary rows declared data-match.
  // One combined case-insensitive alternation rather than one regex per term:
  // measured on the 212-entry manufacturing sheet, per-term regexes cost 7.4 ms
  // per re-render against 0.7 ms combined, and the client re-renders on every
  // filter, sort and search keystroke.
  // Longest form first, because alternation takes the first branch that matches
  // at a given position rather than the longest. Declared order would mark
  // "redox" inside "redox flow" and "prussian blue" inside "prussian blue
  // analog", both of which are separate glossary rows in the battery sheet.
  const TERMS = SHEET.terms || null;
  const TERM_FORMS = TERMS ? TERMS.reduce((a, t) => a.concat(t.m.split("|")), []).sort((a, b) => b.length - a.length) : null;
  const TERM_RE = TERM_FORMS && TERM_FORMS.length
    ? new RegExp("\\b(?:" + TERM_FORMS.join("|") + ")\\b", "gi") : null;
  // Which alternative matched is not something the regex tells us, so map every
  // declared form back to its term key once, up front.
  //
  // A form written in all caps carries its own casing as `cs` and only marks an
  // exact-case hit. Matching is case-insensitive because prose capitalizes at
  // the start of a sentence, but an acronym is a different word from the
  // ordinary one that shares its letters: LEO is low Earth orbit and "Amazon
  // Leo" is a product, FOG is a fiber-optic gyro and fog is weather, INS is an
  // inertial unit and "design-ins" are sales. Deriving the rule from the
  // declared casing keeps it automatic — no row has to opt in — and leaves
  // mixed-case forms like Ra, mAh and CubeSat matching either way.
  const TERM_BY_WORD = {};
  if (TERMS) for (const t of TERMS) for (const w of t.m.split("|")) {
    TERM_BY_WORD[w.toLowerCase()] = { k: t.k, cs: /[A-Z]/.test(w) && !/[a-z]/.test(w) ? w : null };
  }

  // Marks the first occurrence of each term, per card. seen is the card's set, so
  // a term that appears in Description and again in Examples is marked once.
  function markTerms(html, seen) {
    if (!TERM_RE || !seen) return html;
    TERM_RE.lastIndex = 0;
    return html.replace(TERM_RE, word => {
      const e = TERM_BY_WORD[word.toLowerCase()];
      if (!e || seen.has(e.k)) return word;
      // Wrong casing for an acronym: leave it plain, but do not consume the
      // term, so a properly capitalized use later in the card still marks.
      if (e.cs && word !== e.cs) return word;
      seen.add(e.k);
      return '<span class="gt" data-g="' + e.k + '" tabindex="0">' + word + "</span>";
    });
  }

  // escape, then mark glossary terms, then render markdown links.
  // Order matters. Marking runs on escaped text with the link syntax still in its
  // markdown form, so a term inside a URL is impossible to hit — the URL is not
  // text yet. Doing it after link conversion would let "die" inside an href
  // rewrite the link. Link *labels* are left alone for the same reason: they are
  // citation titles, and a tooltip hanging off one reads as a broken link.
  function fmt(s, seen) {
    const parts = esc(s).split(/(\[[^\]]+\]\((?:https?:\/\/[^)\s]+)\))/g);
    return parts.map((p, i) => i % 2
      ? p.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      : markTerms(p, seen)).join("");
  }
  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  function rangeLabel(facet, vals) {
    if (!vals || !vals.length) return null;
    const idx = vals.map(v => facet.order.indexOf(v)).sort((a, b) => a - b);
    const first = facet.options[facet.order[idx[0]]], last = facet.options[facet.order[idx[idx.length - 1]]];
    return first === last ? first : first + "–" + last;
  }

  function facetTags(x) {
    const rows = { 1: [], 2: [] };
    for (const facet of SHEET.facets) {
      const val = x.f[facet.id];
      if (val == null || (Array.isArray(val) && !val.length)) continue;
      const tags = rows[facet.tagRow === 2 ? 2 : 1];
      const style = ' style="--tc:var(' + facet.color + ')"';
      const pre = facet.tagPrefix ? facet.tagPrefix + ": " : "";
      if (facet.type === "multi") {
        val.forEach(v => tags.push('<span class="tag"' + style + '>' + pre + esc(facet.options[v]) + '</span>'));
      } else if (facet.type === "range") {
        tags.push('<span class="tag"' + style + '>' + pre + rangeLabel(facet, val) + '</span>');
      } else {
        tags.push('<span class="tag"' + style + '>' + pre + esc(facet.options[val]) + '</span>');
      }
    }
    return rows;
  }

  // Channel and view count sit under the title; runtime goes on the thumbnail,
  // where a reader expects it. All three were curated by hand into the markdown
  // and used to be crammed into the title as a trailing parenthetical.
  const videoMeta = v => [v.c, v.vw].filter(Boolean).join(" · ");

  function videosHTML(vid) {
    let h = '<span class="lab">Videos</span>';
    if (EMBED_OK) {
      h += '<div class="vids">' + vid.map(v => {
        const meta = videoMeta(v);
        // The label carries the runtime too, since the badge is aria-hidden and a
        // screen-reader user picking a video wants to know how long it is.
        const label = 'Play video' + (v.t ? ': ' + esc(v.t) : '') +
          (v.dur ? ', ' + esc(v.dur) : '') + (v.c ? ', from ' + esc(v.c) : '');
        return '<div class="vid"><button class="vplay" data-vid="' + v.id + '" aria-label="' + label + '">' +
          '<img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="" loading="lazy">' +
          '<span class="vbtn" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5.5 3.5v11l9-5.5z" fill="currentColor"/></svg></span>' +
          (v.dur ? '<span class="vdur" aria-hidden="true">' + esc(v.dur) + '</span>' : '') +
          '</button>' + (v.t ? '<span class="vt">' + esc(v.t) + '</span>' : '') +
          (meta ? '<span class="vmeta">' + esc(meta) + '</span>' : '') + '</div>';
      }).join('') + '</div>';
    } else {
      // One per line rather than separated by a middot, now that each carries a
      // middot-joined caption of its own — run together they read as one string.
      // Duration joins the caption here because there is no thumbnail to badge.
      h += '<p class="ex" style="margin-top:2px">' + vid.map(v => {
        const meta = [v.c, v.dur, v.vw].filter(Boolean).join(" · ");
        return '<a href="https://www.youtube.com/watch?v=' + v.id + '" target="_blank" rel="noopener">&#9656; ' +
          (v.t ? esc(v.t) : 'Watch on YouTube') + '</a>' +
          (meta ? ' <span class="vmeta">' + esc(meta) + '</span>' : '');
      }).join('<br>') + '</p>';
    }
    return h;
  }

  function cardHTML(x) {
    const part = SHEET.parts[x.p - 1];
    // One set per card: a term is marked the first time it appears in this entry
    // and left plain afterwards, so a card reads as prose rather than as a page
    // of underlines.
    const seen = TERM_RE ? new Set() : null;
    let body = '';
    // Wrapped in a link to the file itself, not a button: with JS the click is
    // intercepted and opens the lightbox, and without it the link still does the
    // useful thing and shows the full-size image. A button would be dead there,
    // and a bare img is not reachable by keyboard at all.
    if (x.img && EMBED_OK) {
      body += '<a class="cimglink" href="' + x.img + '" aria-label="View ' + esc(x.name) + ' illustration full size">' +
        '<img class="cimg" src="' + x.img + '" alt="' + esc(x.name) + ' illustration" loading="lazy"></a>';
    }
    body += '<p>' + fmt(x.d, seen) + '</p>';
    body += '<span class="lab">Strengths &amp; weaknesses</span><p style="margin-top:2px">' + fmt(x.sw, seen) + '</p>';
    if (x.v) {
      body += '<span class="lab">Variants</span><div class="variants">' +
        x.v.map(v => '<div class="variant"><b>' + esc(v.t) + '</b><p>' + fmt(v.d, seen) + '</p></div>').join("") + '</div>';
    }
    // Videos render before the extra sections by default; a sheet can set
    // videosAfter to an extraSections label to place them later instead. Entries
    // often omit sections, so the slot is resolved by position in the sheet's
    // extraSections order rather than by an exact label match — videos land after
    // the last section the entry actually has at or before that label.
    const vids = x.vid ? videosHTML(x.vid) : '';
    const extra = x.extra || [];
    let vidPos = -1;
    if (vids && SHEET.videosAfter) {
      const target = SHEET.extraOrder.indexOf(SHEET.videosAfter);
      extra.forEach((e, i) => { const p = SHEET.extraOrder.indexOf(e[0]); if (p > -1 && p <= target) vidPos = i; });
    }
    if (vids && vidPos === -1) body += vids;
    extra.forEach((e, i) => {
      body += '<span class="lab">' + esc(e[0]) + '</span><p class="ex" style="margin-top:2px">' + fmt(e[1], seen) + '</p>';
      if (vids && i === vidPos) body += vids;
    });
    const tags = facetTags(x);
    return '<div class="card" id="' + slug(x.name) + '" style="--pc:' + part.color + '" data-n="' + x.n + '">' +
      '<button class="chead" aria-expanded="false">' +
        '<span class="cnum">' + String(x.n).padStart(3, "0") + '</span>' +
        '<span class="cname">' + esc(x.name) + '</span>' +
        '<span class="ctags">' + tags[1].join("") +
        '<svg class="caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M3 1.5L7 5L3 8.5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' +
        (tags[2].length ? '<span class="ctags2">' + tags[2].join("") + '</span>' : '') +
      '</button><div class="cbody">' + body + '</div></div>';
  }

  // The whole #list body. grouped is false for a sorted view, which renders flat
  // because the group headers would be meaningless once the order ignores them.
  function listHTML(hits, grouped) {
    const [unit, units] = SHEET.unit;
    let html = "", lastKey = "";
    hits.forEach(x => {
      const part = SHEET.parts[x.p - 1];
      const key = x.p + "|" + x.g;
      if (grouped && key !== lastKey) {
        lastKey = key;
        const count = hits.filter(h => h.p === x.p && h.g === x.g).length;
        html += '<div class="grouphdr" style="--pc:' + part.color + '">' +
          '<span class="gp">' + SHEET.groupLabel + ' ' + part.roman + '</span><h2>' + esc(x.g) + '</h2>' +
          (SHEET.groupBlurbs && SHEET.groupBlurbs[x.g] ? '<span class="gb">' + SHEET.groupBlurbs[x.g] + '</span>' : '') +
          '<span class="gc">' + count + ' ' + (count === 1 ? unit : units) + '</span></div>';
      }
      html += cardHTML(x);
    });
    return html;
  }

  return { esc, fmt, slug, rangeLabel, facetTags, videosHTML, cardHTML, listHTML };
}

if (typeof module === "object" && module.exports) module.exports = { makeRenderer };
