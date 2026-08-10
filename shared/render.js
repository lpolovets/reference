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
  // escape, then render markdown links: [label](https://...)
  const fmt = s => esc(s).replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener">$1</a>');
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

  function videosHTML(vid) {
    let h = '<span class="lab">Videos</span>';
    if (EMBED_OK) {
      h += '<div class="vids">' + vid.map(v =>
        '<div class="vid"><button class="vplay" data-vid="' + v.id + '" aria-label="Play video' + (v.t ? ': ' + esc(v.t) : '') + '">' +
        '<img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="" loading="lazy">' +
        '<span class="vbtn" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5.5 3.5v11l9-5.5z" fill="currentColor"/></svg></span>' +
        '</button>' + (v.t ? '<span class="vt">' + esc(v.t) + '</span>' : '') + '</div>').join('') + '</div>';
    } else {
      h += '<p class="ex" style="margin-top:2px">' + vid.map(v =>
        '<a href="https://www.youtube.com/watch?v=' + v.id + '" target="_blank" rel="noopener">&#9656; ' +
        (v.t ? esc(v.t) : 'Watch on YouTube') + '</a>').join(' &nbsp;&middot;&nbsp; ') + '</p>';
    }
    return h;
  }

  function cardHTML(x) {
    const part = SHEET.parts[x.p - 1];
    let body = '';
    if (x.img && EMBED_OK) body += '<img class="cimg" src="' + x.img + '" alt="' + esc(x.name) + ' illustration" loading="lazy">';
    body += '<p>' + fmt(x.d) + '</p>';
    body += '<span class="lab">Strengths &amp; weaknesses</span><p style="margin-top:2px">' + fmt(x.sw) + '</p>';
    if (x.v) {
      body += '<span class="lab">Variants</span><div class="variants">' +
        x.v.map(v => '<div class="variant"><b>' + esc(v.t) + '</b><p>' + fmt(v.d) + '</p></div>').join("") + '</div>';
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
      body += '<span class="lab">' + esc(e[0]) + '</span><p class="ex" style="margin-top:2px">' + fmt(e[1]) + '</p>';
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
