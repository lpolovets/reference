#!/usr/bin/env node
// Builds every reference sheet under sheets/*/ (driven by each sheet's sheet.json)
// plus a landing page indexing them.
//   node build/build.js                     -> site/<slug>/ for every sheet + site/index.html
//   node build/build.js --artifact <slug>   -> dist/<slug>.artifact.html (fragment, ASCII-escaped,
//                                              for claude.ai Artifact republish)
//   node build/build.js --check             -> parse and validate every sheet, write nothing
'use strict';
const fs = require('fs');
const path = require('path');
const { writeIcons } = require('./icons.js');
const { glyph } = require('./glyphs.js');

const ROOT = path.join(__dirname, '..');
const SHARED = path.join(ROOT, 'shared');
const CHECK_ONLY = process.argv.includes('--check');
const ALLOW_INCOMPLETE = process.argv.includes('--allow-incomplete');
const ai = process.argv.indexOf('--artifact');
const ARTIFACT_SLUG = ai !== -1 ? process.argv[ai + 1] : null;
if (ai !== -1 && !ARTIFACT_SLUG) {
  console.error('usage: node build/build.js --artifact <sheet-slug>');
  process.exit(1);
}

// ---- markdown parsing ----
function parseFrontmatter(block, file) {
  const out = {};
  for (const line of block.split('\n')) {
    if (!line.trim()) continue;
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) throw new Error(file + ': bad frontmatter line: ' + line);
    let [, key, val] = m;
    val = val.trim();
    if (val.startsWith('[')) {
      out[key] = val.replace(/^\[|\]$/g, '').split(',').map(s => s.trim()).filter(Boolean);
    } else if (/^"(.*)"$/.test(val)) {
      out[key] = val.slice(1, -1).replace(/\\"/g, '"');
    } else if (/^\d+$/.test(val)) {
      out[key] = parseInt(val, 10);
    } else {
      out[key] = val;
    }
  }
  return out;
}

// Video lines read "Title (Channel, N minutes, band+ views)", and both the title
// and the channel may contain their own parentheses — "JoVE (Journal of Visualized
// Experiments)", "Sumitomo (SHI) Demag", "Tesla 4680 Teardown (Part 2)". Matching
// on " (" is ambiguous in both directions: greedy splits the Sumitomo case wrong,
// lazy splits the Part 2 case wrong. Scan back from the end for the balanced group
// that closes the line instead, which is unambiguous. Returns the title alone when
// there is no metadata to split off, so an unadorned line still renders.
function splitVideoMeta(s) {
  if (s.endsWith(')')) {
    let depth = 0, open = -1;
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ')') depth++;
      else if (s[i] === '(') { depth--; if (depth === 0) { open = i; break; } }
    }
    if (open > 0 && s[open - 1] === ' ') {
      const m = s.slice(open + 1, -1).match(/^(.*), (\d+ minutes?), ((?:under 1k|[\d.]+[km]?\+) views)$/);
      // dur is stored already shortened; it renders as a badge over the thumbnail
      // where "19 minutes" does not fit.
      if (m) return { t: s.slice(0, open - 1), c: m[1], dur: m[2].replace(' minutes', ' min').replace(' minute', ' min'), vw: m[3] };
    }
  }
  return { t: s };
}

function parseEntry(sheet, file, src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(file + ': missing frontmatter (--- ... ---)');
  const fm = parseFrontmatter(m[1], file);
  const body = m[2];

  const sections = {};
  const chunks = body.split(/^## /m).slice(1);
  for (const chunk of chunks) {
    const nl = chunk.indexOf('\n');
    const title = chunk.slice(0, nl).trim().toLowerCase();
    sections[title] = chunk.slice(nl + 1).trim();
  }

  // validation with contributor-friendly errors
  const fail = msg => { throw new Error(file + ': ' + msg); };
  const partIds = new Set(sheet.parts.map(p => p.id));
  if (typeof fm.number !== 'number') fail('frontmatter needs a numeric "number"');
  if (!fm.name) fail('frontmatter needs "name"');
  if (!partIds.has(fm.part)) fail('"part" must be one of: ' + [...partIds].join(', '));
  if (!fm.group) fail('frontmatter needs "group"');

  const f = {};
  for (const facet of sheet.facets) {
    const keys = new Set(Object.keys(facet.options));
    let val = fm[facet.key];
    if (facet.type === 'single') {
      if (val === undefined || val === '' || (val === 'none' && !keys.has('none'))) val = null;
      if (val !== null && !keys.has(val)) fail('unknown ' + facet.key + ' "' + val + '" (see sheet.json)');
      if (facet.required && val === null) fail('frontmatter needs "' + facet.key + '"');
    } else {
      val = val || [];
      if (facet.required && !val.length) fail('frontmatter needs a non-empty "' + facet.key + '" list');
      for (const k of val) if (!keys.has(k)) fail('unknown ' + facet.key + ' "' + k + '" (see sheet.json)');
    }
    f[facet.id] = val;
  }

  if (!sections['description']) fail('missing "## Description" section');
  if (!sections['strengths and weaknesses']) fail('missing "## Strengths and weaknesses" section');

  const entry = {
    n: fm.number, p: fm.part, g: fm.group, name: fm.name,
    d: sections['description'],
    sw: sections['strengths and weaknesses'],
    f: f,
  };
  if (sections['videos']) {
    entry.vid = sections['videos'].split('\n').map(s => s.trim()).filter(s => s.startsWith('-')).map(line => {
      const lm = line.match(/^-\s*(\S+)(?:\s+[—–-]\s+(.*))?$/);
      if (!lm) fail('bad Videos line: ' + line);
      const idm = lm[1].match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
      if (!idm) fail('Videos line is not a YouTube watch URL: ' + line);
      const v = { id: idm[1] };
      if (lm[2]) Object.assign(v, splitVideoMeta(lm[2].trim()));
      return v;
    });
    if (entry.vid.length > 3) fail('at most 3 videos per entry');
    if (!entry.vid.length) delete entry.vid;
  }
  if (sections['variants']) {
    entry.v = sections['variants'].split(/^### /m).filter(s => s.trim()).map(chunk => {
      const nl = chunk.indexOf('\n');
      return { t: chunk.slice(0, nl).trim(), d: chunk.slice(nl + 1).trim() };
    });
  }
  const extra = [];
  for (const [key, label] of sheet.extraSections || []) {
    if (sections[key]) extra.push([label, sections[key]]);
  }
  if (extra.length) entry.extra = extra;
  return entry;
}

// A data-match form has to survive two steps to actually mark anything: the
// combined alternation has to match it, and render.js then has to find the word
// it matched in a map keyed by the literal forms. A regex-y form like
// `carburiz\w+` passes the first and silently fails the second — it matches
// "carburizing", looks up "carburizing", finds nothing, and leaves the word
// plain. Nothing about that is visible in the output, so drive both steps here
// and fail the build instead of shipping a pattern that does nothing.
function checkGlossaryTerms(terms, slug) {
  if (!terms.length) return;
  // Same longest-first ordering render.js uses, or this would clear forms the
  // shipped page actually mangles.
  const forms = terms.reduce((a, t) => a.concat(t.m.split('|')), []).sort((a, b) => b.length - a.length);
  const re = new RegExp('\\b(?:' + forms.join('|') + ')\\b', 'gi');
  const byWord = {};
  for (const t of terms) for (const w of t.m.split('|')) byWord[w.toLowerCase()] = t.k;
  const bad = [];
  for (const t of terms) {
    for (const form of t.m.split('|')) {
      re.lastIndex = 0;
      const m = re.exec(form);
      if (!m || m[0] !== form) { bad.push([t.t, form, m ? 'matches as "' + m[0] + '"' : 'never matches']); continue; }
      if (byWord[form.toLowerCase()] !== t.k) bad.push([t.t, form, 'claimed by "' + byWord[form.toLowerCase()] + '"']);
    }
  }
  if (bad.length) {
    throw new Error(slug + '/glossary.html: ' + bad.length + ' data-match form(s) cannot mark anything:\n' +
      bad.map(([t, f, why]) => '  ' + t + ' -> "' + f + '" (' + why + ')').join('\n') +
      '\nForms must be literal words: no regex metacharacters, and they must start and end on a word character.');
  }
}

function loadSheet(dir) {
  const sheet = JSON.parse(fs.readFileSync(path.join(dir, 'sheet.json'), 'utf8'));
  const edir = path.join(dir, 'entries');
  const files = (fs.existsSync(edir) ? fs.readdirSync(edir) : []).filter(f => f.endsWith('.md') && !f.startsWith('_'));
  const rel = path.relative(ROOT, edir);
  const entries = files.map(f => parseEntry(sheet, rel + '/' + f, fs.readFileSync(path.join(edir, f), 'utf8')));
  // optional per-entry illustration: sheets/<slug>/images/<zero-padded number>.<ext>
  // optional per-class illustration: sheets/<slug>/images/part-<part id>.<ext>
  // Both are opt-in per file, so a sheet can illustrate the classes it has a good
  // image for and leave the rest plain — an omitted class simply renders as before.
  const idir = path.join(dir, 'images');
  if (fs.existsSync(idir)) {
    for (const e of entries) {
      for (const ext of ['jpg', 'png', 'webp']) {
        const img = String(e.n).padStart(3, '0') + '.' + ext;
        if (fs.existsSync(path.join(idir, img))) { e.img = 'images/' + img; break; }
      }
    }
    for (const p of sheet.parts) {
      for (const ext of ['jpg', 'png', 'webp']) {
        const img = 'part-' + p.id + '.' + ext;
        if (fs.existsSync(path.join(idir, img))) { p.img = 'images/' + img; break; }
      }
    }
  }
  entries.sort((a, b) => a.n - b.n);
  const seen = new Set();
  for (const x of entries) {
    if (seen.has(x.n)) throw new Error(sheet.slug + ': duplicate entry number: ' + x.n);
    seen.add(x.n);
  }
  // A sheet whose entries are still being written fails every cross-check below.
  // Flag it instead: --check reports it as pending, a real build refuses to ship it.
  const incomplete = entries.length === 0;
  const partial = [];
  if (sheet.groupBlurbs && !incomplete) {
    const groups = new Set(entries.map(x => x.g));
    for (const g of Object.keys(sheet.groupBlurbs)) {
      if (groups.has(g)) continue;
      // Mid-write this just means the entries for that group aren't there yet, so
      // --check reports it rather than failing and burying everyone else's status.
      if (!CHECK_ONLY && !ALLOW_INCOMPLETE) throw new Error(sheet.slug + ': groupBlurbs names unknown group "' + g + '"');
      partial.push(g);
    }
    // The other direction is always an authoring error: an entry named a group
    // that has no blurb, which the writer can fix without waiting for anyone.
    for (const g of groups)
      if (!sheet.groupBlurbs[g]) throw new Error(sheet.slug + ': groupBlurbs missing group "' + g + '"');
  }
  if (sheet.videosAfter) {
    const labels = (sheet.extraSections || []).map(e => e[1]);
    if (!labels.includes(sheet.videosAfter))
      throw new Error(sheet.slug + ': videosAfter "' + sheet.videosAfter + '" is not an extraSections label (have: ' + labels.join(', ') + ')');
  }
  sheet.guide = fs.readFileSync(path.join(dir, 'guide.html'), 'utf8');
  const h2hPath = path.join(dir, 'h2h.html');
  sheet.h2h = fs.existsSync(h2hPath) ? fs.readFileSync(h2hPath, 'utf8') : null;
  // Optional, like h2h: no file, no tab.
  const glosPath = path.join(dir, 'glossary.html');
  sheet.glossary = fs.existsSync(glosPath) ? fs.readFileSync(glosPath, 'utf8') : null;
  // Rows may declare the word forms they should be recognised by in entry prose:
  //   <tr data-match="sinter|sinters|sintered|sintering">
  // Opt-in on purpose. Plenty of glossary terms are ordinary words in another
  // sense — die, green, draft, flash, blank — and inferring matches would
  // underline half the page wrongly. No data-match, no underline.
  sheet.glossaryTerms = [];
  // Every term, including the handful that deliberately declare no data-match
  // (too common a word to underline, or a form \b cannot bound). Those are still
  // real vocabulary, so they belong in the page's DefinedTermSet even though
  // nothing in the prose links to them.
  sheet.glossaryAll = [];
  if (sheet.glossary) {
    for (const m of sheet.glossary.matchAll(/<tr(?:\s+data-match="([^"]*)")?><td>([^<]+)<\/td><td>([\s\S]*?)<\/td><\/tr>/g)) {
      sheet.glossaryAll.push(m[2]);
      if (!m[1]) continue;
      const key = m[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      sheet.glossaryTerms.push({
        k: key,
        t: m[2],
        // Definitions carry markup (nothing but text so far); strip it for the tooltip.
        d: m[3].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
        m: m[1],
      });
    }
    checkGlossaryTerms(sheet.glossaryTerms, path.basename(dir));
  }
  return { sheet, entries, incomplete, partial };
}

// ---- page composition ----
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const THEME = fs.readFileSync(path.join(SHARED, 'theme.css'), 'utf8');
const LOGO = fs.readFileSync(path.join(SHARED, 'logo.html'), 'utf8');
const CATEGORY_DATA = JSON.parse(fs.readFileSync(path.join(SHARED, 'categories.json'), 'utf8'));
// The logo links to the reference-sheets landing page; the href depends on where
// the page lives (sheet pages sit one level below the landing, the artifact is
// off-site so it gets the absolute URL in a new tab).
const logoFor = ctx => LOGO.replace(/\n$/, '')
  .replace('{{HOME_HREF}}', ctx === 'artifact' ? 'https://humbaventures.com/reference/' : ctx === 'sheet' ? '../' : './')
  .replace('{{HOME_EXTRA}}', ctx === 'artifact' ? ' target="_blank" rel="noopener"' : '');
// How picking more than one tag in a row behaves, appended to every facet's
// tooltip so the reader never has to infer it. It follows from the data rather
// than being a choice: a multi facet is a set of independent tags, while single
// and range facets hold one value and one span, where "all of them" is empty.
const COMBINE_NOTE = {
  multi: 'Pick several tags and an entry has to carry all of them, so each one narrows the results.',
  single: 'Each entry sits in exactly one band, so picking several widens the results.',
  range: 'Each entry covers a span of bands, and picking several widens the results.',
};
const APP = fs.readFileSync(path.join(SHARED, 'app.js'), 'utf8');
const RENDER = fs.readFileSync(path.join(SHARED, 'render.js'), 'utf8');
const { makeRenderer } = require(path.join(SHARED, 'render.js'));
const PAGE = fs.readFileSync(path.join(SHARED, 'page.html'), 'utf8');
const YEAR = String(new Date().getFullYear());
const PREPAINT = '<script>(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}' +
  'document.documentElement.setAttribute("data-theme",t||"dark");})();</' + 'script>\n';

// ---- document head ----
// Where the site actually lives, needed absolute for canonical and og:url.
const SITE = 'https://humbaventures.com/reference/';
const SITE_NAME = 'Humba Ventures Reference Sheets';
const escAttr = s => esc(s).replace(/"/g, '&quot;');
// path is the page's location under SITE ('' for the landing page); up is the
// prefix back to the site root, since sheet and about pages sit one level below
// it and Pages serves the whole thing from /reference/, not from the domain root.
// No og:image: a useful card would have to render the sheet's title as text, and
// nothing in this repo can rasterize a font. A titled, described unfurl without
// a picture beats a generic picture on all 18 sheets.
function head({ title, description, path: p, up, ld }) {
  const t = escAttr(title), d = escAttr(description), url = SITE + p;
  return '<meta charset="utf-8">\n' + PREPAINT +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>' + esc(title) + '</title>\n' +
    '<meta name="description" content="' + d + '">\n' +
    '<link rel="canonical" href="' + url + '">\n' +
    // The .ico actually carries 16, 32 and 48; declaring only 32x32 is deliberate,
    // because an unqualified .ico outranks the SVG in Chrome and the SVG is the
    // one that stays sharp on a high-DPI tab. The .ico is the fallback.
    '<link rel="icon" href="' + up + 'favicon.ico" sizes="32x32">\n' +
    '<link rel="icon" href="' + up + 'favicon.svg" type="image/svg+xml">\n' +
    '<link rel="apple-touch-icon" href="' + up + 'apple-touch-icon.png">\n' +
    '<meta property="og:type" content="website">\n' +
    '<meta property="og:site_name" content="' + SITE_NAME + '">\n' +
    '<meta property="og:title" content="' + t + '">\n' +
    '<meta property="og:description" content="' + d + '">\n' +
    '<meta property="og:url" content="' + url + '">\n' +
    '<meta name="twitter:card" content="summary">\n' +
    '<meta name="twitter:title" content="' + t + '">\n' +
    '<meta name="twitter:description" content="' + d + '">\n' +
    (ld ? ldScript(ld) : '');
}

// ---- structured data ----
// JSON-LD, website flavor only — the artifact has no head at all, so it is
// excluded by construction. What this adds that the page did not already say:
// every entry is addressable at #slug and nothing in the markup tells a crawler
// those anchors are a list of named things, so the titles were the only surface.
//
// Escaping "<" is load-bearing. JSON.stringify does not escape it, and one
// glossary definition or entry name containing "</script" would close the block
// early and spill JSON into the document. < is valid inside a JSON string,
// so the parsed value is unchanged.
const ldScript = graph => '<script type="application/ld+json">' +
  JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') +
  '</script>\n';

const WEBSITE_ID = SITE + '#website';
const LD_SITE = {
  '@type': 'WebSite', '@id': WEBSITE_ID, url: SITE, name: SITE_NAME,
  publisher: { '@type': 'Organization', name: 'Humba Ventures', url: 'https://humbaventures.com/' },
};
const ldCrumbs = items => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, item: x.url })),
});

// The anchor slug comes from the renderer rather than a second copy of the same
// one-liner: these URLs are only useful if they match the ids the cards actually
// carry, and two implementations would drift silently. makeRenderer needs no
// sheet for this — slug closes over nothing.
const anchorSlug = makeRenderer({}, false).slug;

function sheetLD({ sheet, entries }) {
  const url = SITE + sheet.slug + '/';
  const graph = [
    LD_SITE,
    {
      '@type': 'CollectionPage', '@id': url, url, inLanguage: 'en',
      name: sheet.docTitle, description: sheet.blurb, isPartOf: { '@id': WEBSITE_ID },
    },
    ldCrumbs([{ name: 'Reference Sheets', url: SITE },
      { name: sheet.shortTitle || sheet.docTitle, url }]),
    {
      '@type': 'ItemList', name: sheet.docTitle, numberOfItems: entries.length,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: entries.map((e, i) => ({
        '@type': 'ListItem', position: i + 1, name: e.name,
        url: url + '#' + anchorSlug(e.name),
      })),
    },
  ];
  // Glossary terms are named but not defined here, deliberately. The definitions
  // are already in the page as visible text in the glossary tab, so repeating
  // them in JSON-LD would roughly double the largest text block on the page to
  // tell a crawler something it can already read. Naming the vocabulary is the
  // part the markup does not convey.
  if (sheet.glossaryAll && sheet.glossaryAll.length) graph.push({
    '@type': 'DefinedTermSet', '@id': url + '#glossary',
    name: (sheet.shortTitle || sheet.docTitle) + ' glossary',
    hasDefinedTerm: sheet.glossaryAll.map(t => ({ '@type': 'DefinedTerm', name: t })),
  });
  return graph;
}

function composeBody(sheetData, artifact) {
  const { sheet, entries } = sheetData;
  const groups = new Set(entries.map(x => x.p + '|' + x.g));
  const counts = { entries: entries.length, parts: sheet.parts.length, groups: groups.size };

  const stats = sheet.stats.map(s =>
    '      <div><b>' + counts[s.count] + '</b>' + s.label + '</div>').join('\n');
  const facetRows = sheet.facets.map(f => {
    const combine = '<span class="tipcomb">' + esc(COMBINE_NOTE[f.type]) + '</span>';
    const tip = f.tip
      ? '<span class="tipwrap"><button type="button" class="tip" aria-label="About these tags">i</button>' +
        '<span class="tipbody" role="tooltip">' + esc(f.tip) + combine + '</span></span>'
      : '';
    return '        <div class="facet" style="--fcol:var(' + f.color + ')">' +
      '<span class="flabel">' + esc(f.label) + tip + '</span>' +
      '<span class="fchips" id="facet-' + f.id + '"></span></div>';
  }).join('\n');

  const clientSheet = {
    unit: sheet.unit, groupLabel: sheet.groupLabel,
    // The artifact blocks external requests, so it never renders class images. Strip the
    // paths rather than shipping dead references that a later change might try to fetch.
    parts: artifact ? sheet.parts.map(({ img, ...p }) => p) : sheet.parts,
    groupBlurbs: sheet.groupBlurbs,
    facets: sheet.facets.map(f => {
      const cf = { id: f.id, label: f.label, type: f.type, color: f.color, order: f.order, options: f.options };
      if (f.tagPrefix) cf.tagPrefix = f.tagPrefix;
      if (f.chipLabels) cf.chipLabels = f.chipLabels;
      if (f.tagRow) cf.tagRow = f.tagRow;
      return cf;
    }),
  };
  if (sheet.videosAfter) {
    clientSheet.videosAfter = sheet.videosAfter;
    clientSheet.extraOrder = (sheet.extraSections || []).map(e => e[1]);
  }
  // Only sheets whose glossary rows opted in carry this, so every other sheet's
  // output is byte-for-byte what it was.
  if (sheet.glossaryTerms && sheet.glossaryTerms.length) clientSheet.terms = sheet.glossaryTerms;

  // Prerender the whole list into the page so a reader without JavaScript, and
  // any crawler that does not run it, gets the entries rather than an empty div.
  // Not done for the artifact: it always runs JS, nothing crawls it, and the
  // entries are already in the page once as JSON — prerendering doubles the file
  // for no reader who benefits. The client is told which it got, because a page
  // built without it must render on load or the list stays empty.
  const listHTML = artifact ? '' : makeRenderer(clientSheet, !artifact).listHTML(entries, true);

  // Every value goes in through a function replacer. String.prototype.replace
  // substitutes $$, $& and $' even when the search pattern is a plain string, so
  // a price like "$$" or a stray $' in authored prose would silently mangle the
  // page. A function replacer is exempt from that rewriting. Nothing trips it
  // today; {{LIST}} alone now injects ~900KB of entry text, so it is a matter of
  // time rather than a hypothetical.
  const page = PAGE
    .replace('{{STYLE}}', () => THEME)
    .replace('{{LIST}}', () => listHTML)
    .replace('{{LOGO}}', () => logoFor(artifact ? 'artifact' : 'sheet'))
    .replace('{{TITLE}}', () => esc(sheet.title))
    .replace('{{LEDE}}', () => esc(sheet.lede).replace('{{N_ENTRIES}}', String(counts.entries)))
    .replace('{{STATS}}', () => stats)
    .replace('{{EXPLORER_TAB}}', () => esc(sheet.explorerTab))
    .replace('{{GUIDE_TAB}}', () => esc(sheet.guideTab))
    .replace('{{SEARCH_PLACEHOLDER}}', () => esc(sheet.searchPlaceholder))
    .replace('{{FACETS}}', () => facetRows)
    .replace('{{UNIT_PLURAL}}', () => esc(sheet.unit[1]))
    .replace('{{GUIDE}}', () => sheet.guide)
    .replace('{{GLOSSARY_TAB_BTN}}', () => sheet.glossary
      ? '<button role="tab" id="tab-glossary" aria-selected="false" aria-controls="view-glossary">' + esc(sheet.glossaryTab || 'Glossary') + '</button>'
      : '')
    .replace('{{GLOSSARY_VIEW}}', () => sheet.glossary
      ? '<section id="view-glossary" class="guide" role="tabpanel" aria-labelledby="tab-glossary">\n' + sheet.glossary + '\n  </section>'
      : '')
    .replace('{{H2H_TAB_BTN}}', () => sheet.h2h
      ? '<button role="tab" id="tab-h2h" aria-selected="false" aria-controls="view-h2h">' + esc(sheet.h2hTab || 'Head-to-head') + '</button>'
      : '')
    .replace('{{H2H_VIEW}}', () => sheet.h2h
      ? '<section id="view-h2h" class="guide" role="tabpanel" aria-labelledby="tab-h2h">\n' + sheet.h2h + '\n  </section>'
      : '')
    .replace('{{YEAR}}', () => YEAR);

  const dataJs = [
    'const EMBED_OK = ' + String(!artifact) + ';',
    'const PRERENDERED = ' + String(!artifact) + ';',
    'const SHEET = ' + JSON.stringify(clientSheet) + ';',
    'const P = ' + JSON.stringify(entries) + ';',
  ].join('\n');

  // RENDER before APP: app.js calls makeRenderer at the top level.
  return page + '<script>\n' + dataJs + '\n' + RENDER + '\n' + APP + '</script>\n';
}

// ---- load all sheets ----
const sheetsDir = path.join(ROOT, 'sheets');
const slugs = fs.readdirSync(sheetsDir).filter(d => fs.existsSync(path.join(sheetsDir, d, 'sheet.json'))).sort();

if (CHECK_ONLY) {
  // Validation pass for parallel editors. Each sheet is isolated so one agent's
  // broken file doesn't mask everyone else's status, and sheets with no entries
  // yet report as pending rather than failing.
  let bad = 0, ok = 0, pending = 0, n = 0;
  for (const slug of slugs) {
    try {
      const s = loadSheet(path.join(sheetsDir, slug));
      if (s.incomplete) { pending++; console.log('pending  ' + slug + ' (no entries yet)'); }
      else if (s.partial.length) {
        pending++; n += s.entries.length;
        console.log('partial  ' + slug + ' (' + s.entries.length + ' entries; no entries yet for: ' + s.partial.join(', ') + ')');
      } else { ok++; n += s.entries.length; console.log('ok       ' + slug + ' (' + s.entries.length + ')'); }
    } catch (e) {
      bad++;
      console.log('FAIL     ' + slug + ': ' + e.message);
    }
  }
  console.log(ok + ' sheets ok, ' + n + ' entries' +
    (pending ? ', ' + pending + ' pending' : '') + (bad ? ', ' + bad + ' FAILING' : ''));
  if (bad) process.exit(1);
  return;
}

// A sheet with no entries would publish as an empty page, so a real build refuses
// to ship one. --allow-incomplete drops it from the build instead, which is how to
// preview the site while a new sheet is still being written.
const all = slugs.map(slug => loadSheet(path.join(sheetsDir, slug))).filter(s => {
  if (!s.incomplete && !s.partial.length) return true;
  if (!ALLOW_INCOMPLETE)
    throw new Error(s.sheet.slug + ' is still being written, refusing to build. Use --check to' +
      ' validate while it is, or --allow-incomplete to preview without it.');
  console.log('SKIPPING ' + s.sheet.slug + (s.incomplete ? ' (no entries yet)'
    : ' (' + s.entries.length + ' entries so far, groups still empty: ' + s.partial.join(', ') + ')'));
  return false;
});

if (ARTIFACT_SLUG) {
  // Fragment for the Artifact tool (it supplies doctype/head/body). ASCII-escape
  // everything because the artifact host serves no charset declaration.
  const sheetData = all.find(s => s.sheet.slug === ARTIFACT_SLUG);
  if (!sheetData) throw new Error('no sheet named "' + ARTIFACT_SLUG + '" (have: ' + slugs.join(', ') + ')');
  let frag = '<title>' + sheetData.sheet.docTitle + '</title>\n' + composeBody(sheetData, true);
  const re = new RegExp('[' + String.fromCharCode(128) + '-' + String.fromCharCode(65535) + ']', 'g');
  const idx = frag.indexOf('<script>');
  const escChar = (s, js) => s.replace(re, c => js
    ? '\\u' + c.codePointAt(0).toString(16).padStart(4, '0')
    : '&#x' + c.codePointAt(0).toString(16) + ';');
  frag = escChar(frag.slice(0, idx), false) + escChar(frag.slice(idx), true);
  fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
  const out = path.join(ROOT, 'dist', ARTIFACT_SLUG + '.artifact.html');
  fs.writeFileSync(out, frag);
  console.log('dist/' + ARTIFACT_SLUG + '.artifact.html:', sheetData.entries.length, 'entries,', frag.length, 'bytes');
} else {
  // The repo is named "reference", so Pages mounts at /reference/; each sheet
  // builds into its own subdirectory and the root page indexes them all.
  writeIcons(path.join(ROOT, 'site'));
  for (const sheetData of all) {
    const { sheet, entries } = sheetData;
    const html = '<!doctype html>\n<html lang="en">\n<head>\n' +
      head({ title: sheet.docTitle, description: sheet.blurb, path: sheet.slug + '/', up: '../',
        ld: sheetLD(sheetData) }) +
      '</head>\n<body>\n' + composeBody(sheetData, false) +
      '</body>\n</html>\n';
    const out = path.join(ROOT, 'site', sheet.slug);
    fs.mkdirSync(out, { recursive: true });
    fs.writeFileSync(path.join(out, 'index.html'), html);
    // Images only: the directory also holds prompts.json, which is a build input.
    const idir = path.join(sheetsDir, sheet.slug, 'images');
    if (fs.existsSync(idir)) fs.cpSync(idir, path.join(out, 'images'), {
      recursive: true,
      filter: src => fs.statSync(src).isDirectory() || /\.(jpg|png|webp)$/i.test(src),
    });
    fs.writeFileSync(path.join(out, 'data.json'), JSON.stringify({ sheet: { ...sheet, guide: undefined }, entries }, null, 1));
    console.log('site/' + sheet.slug + '/index.html:', entries.length, 'entries,', html.length, 'bytes (+ data.json)');
  }

  // The glyph rides inside the title line rather than above it, so a card with
  // no glyph (a new sheet before one is drawn) loses the icon and nothing else —
  // no reserved gap, no shifted baseline.
  const card = ({ sheet, entries }) =>
    '    <a class="sheetcard" href="' + sheet.slug + '/">' +
    // No inline display here, unlike its siblings: an inline style outranks the
    // stylesheet, so style="display:block" would silently beat .sh{display:flex}
    // and drop the icon back inline against the title.
    '<span class="sh">' + glyph(sheet.slug) +
    '<span class="st">' + esc(sheet.shortTitle || sheet.docTitle) + '</span></span>' +
    (sheet.question ? '<span class="sq" style="display:block">' + esc(sheet.question) + '</span>' : '') +
    '<span class="sd" style="display:block">' + esc(sheet.blurb || '') + '</span>' +
    '<span class="sc" style="display:block">' + entries.length + ' ' + esc(sheet.unit[1]) + '</span></a>';
  // Sheets group into high-level categories (sheet.json "category"). The order
  // and the one-line intros live in shared/categories.json, not here: the intros
  // are reader-facing prose, and prose sitting in a .js file is prose build/style.js
  // never sees. Order is biggest and most-linked first; anything not listed falls
  // in after them in order of first appearance, with no intro.
  const CATEGORIES = CATEGORY_DATA.map(c => c.name);
  const CATEGORY_INTRO = new Map(CATEGORY_DATA.map(c => [c.name, c.intro]));
  const catOrder = [];
  const byCat = new Map();
  for (const s of all) {
    const cat = s.sheet.category || 'Other';
    if (!byCat.has(cat)) { byCat.set(cat, []); catOrder.push(cat); }
    byCat.get(cat).push(s);
  }
  // Rank unlisted categories by where they first appeared, captured before the
  // sort — reading indexOf() on the array being sorted would shift underfoot.
  const seenAt = new Map(catOrder.map((c, i) => [c, i]));
  const rank = c => CATEGORIES.includes(c) ? CATEGORIES.indexOf(c) : CATEGORIES.length + seenAt.get(c);
  catOrder.sort((a, b) => rank(a) - rank(b));
  // A listed category must carry an intro. Same reasoning as groupBlurbs: the
  // failure is silent otherwise, and one category quietly missing its line looks
  // like a rendering bug rather than a missing string.
  const missingIntro = CATEGORY_DATA.filter(c => !c.intro || !c.intro.trim()).map(c => c.name);
  if (missingIntro.length)
    throw new Error('shared/categories.json: no intro for ' + missingIntro.join(', '));
  const sections = catOrder.map(cat =>
    '<h2 class="cathdr">' + esc(cat) + '</h2>\n' +
    (CATEGORY_INTRO.has(cat) ? '<p class="catlede">' + esc(CATEGORY_INTRO.get(cat)) + '</p>\n' : '') +
    '<div class="sheets">\n' +
    byCat.get(cat).map(card).join('\n') + '\n</div>').join('\n');
  const totalEntries = all.reduce((n, s) => n + s.entries.length, 0);
  const LANDING_JS = fs.readFileSync(path.join(SHARED, 'landing.js'), 'utf8');
  const lsheets = all.map(({ sheet }) => ({ slug: sheet.slug, title: sheet.shortTitle || sheet.docTitle }));
  const gsearch =
    '<div class="filters gsearch"><div class="frow"><label class="search">' +
    '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.6"/><path d="M11 11l3.6 3.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>' +
    '<input id="gq" type="search" placeholder="Search all ' + totalEntries + ' entries across ' + all.length + ' sheets…" aria-label="Search all sheets"></label>' +
    '<span class="rescount" id="gcount"></span></div></div>\n<div id="ghits" class="ghits" hidden></div>';
  // The counts are appended at build time rather than written into the string, so
  // the description a shared link unfurls with cannot drift as sheets are added.
  const LANDING_LEDE = 'Practical, searchable references for deep-tech diligence and engineering decisions.';
  const landing = '<!doctype html>\n<html lang="en">\n<head>\n' +
    head({
      title: 'Reference Sheets',
      description: LANDING_LEDE + ' ' + totalEntries + ' entries across ' + all.length +
        // Serial comma, because category names contain "and" themselves and
        // "defense and aerospace and bioprocessing" reads as one thing.
        ' sheets, covering ' + catOrder.map(c => c.toLowerCase())
          .reduce((s, c, i, a) => s + (i === 0 ? '' : i < a.length - 1 ? ', '
            : a.length === 2 ? ' and ' : ', and ') + c, '') + '.',
      path: '', up: './',
      ld: [
        LD_SITE,
        {
          '@type': 'CollectionPage', '@id': SITE, url: SITE, inLanguage: 'en',
          name: 'Reference Sheets', description: LANDING_LEDE, isPartOf: { '@id': WEBSITE_ID },
        },
        {
          '@type': 'ItemList', name: 'Reference Sheets', numberOfItems: all.length,
          itemListElement: all.map(({ sheet }, i) => ({
            '@type': 'ListItem', position: i + 1,
            name: sheet.shortTitle || sheet.docTitle, url: SITE + sheet.slug + '/',
          })),
        },
      ],
    }) +
    '<style>\n' + THEME + '</style>\n</head>\n<body>\n' +
    '<div class="wrap">\n<header class="site">\n<div class="hdr-top">\n' + logoFor('landing') + '</div>\n' +
    '<h1>Reference Sheets</h1>\n' +
    '<p class="lede">' + LANDING_LEDE + '</p>\n' +
    '</header>\n' + gsearch + '\n' + sections + '\n' +
    '<footer class="site">&copy; ' + YEAR + ' HUMBA VENTURES &middot; <a href="about/">How these sheets are made</a></footer>\n</div>\n' +
    '<script>\nconst LSHEETS = ' + JSON.stringify(lsheets) + ';\n' + LANDING_JS + '</script>\n</body>\n</html>\n';
  fs.writeFileSync(path.join(ROOT, 'site', 'index.html'), landing);
  console.log('site/index.html: landing page,', all.length, 'sheets');

  // Methodology page. Shares the landing shell and the .guide typography, so it
  // gets the same tables and callouts the selection guides use. The counts are
  // computed here rather than written into the prose, which would go stale.
  // Reader-facing prose, so the counts get thousands separators.
  const num = n => n.toLocaleString('en-US');
  const about = fs.readFileSync(path.join(SHARED, 'about.html'), 'utf8')
    .replace(/{{N_ENTRIES}}/g, num(totalEntries))
    .replace(/{{N_SHEETS}}/g, num(all.length))
    .replace(/{{N_VIDEOS}}/g, num(all.reduce((n, s) =>
      n + s.entries.reduce((m, e) => m + (e.vid ? e.vid.length : 0), 0), 0)))
    .replace(/{{YEAR}}/g, YEAR);
  const ABOUT_LEDE = 'What is in the reference sheets, where the numbers come from, and how the links and videos get checked.';
  const aboutPage = '<!doctype html>\n<html lang="en">\n<head>\n' +
    head({
      title: 'How these sheets are made', description: ABOUT_LEDE, path: 'about/', up: '../',
      ld: [
        LD_SITE,
        {
          '@type': 'WebPage', '@id': SITE + 'about/', url: SITE + 'about/', inLanguage: 'en',
          name: 'How these sheets are made', description: ABOUT_LEDE, isPartOf: { '@id': WEBSITE_ID },
        },
        ldCrumbs([{ name: 'Reference Sheets', url: SITE },
          { name: 'How these sheets are made', url: SITE + 'about/' }]),
      ],
    }) +
    '<style>\n' + THEME + '</style>\n</head>\n<body>\n' +
    '<div class="wrap">\n<header class="site">\n<div class="hdr-top">\n' + logoFor('sheet') + '</div>\n' +
    '<h1>How these sheets are made</h1>\n' +
    '<p class="lede">' + ABOUT_LEDE + '</p>\n' +
    '</header>\n<section class="guide active">\n' + about + '\n</section>\n' +
    '<footer class="site">&copy; ' + YEAR + ' HUMBA VENTURES &middot; <a href="../">All reference sheets</a></footer>\n' +
    '</div>\n</body>\n</html>\n';
  fs.mkdirSync(path.join(ROOT, 'site', 'about'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'site', 'about', 'index.html'), aboutPage);
  console.log('site/about/index.html: methodology page');

  // Sitemap. Only real pages go in it — entry anchors are fragments, and a
  // sitemap entry ending in #slug is the same URL to every crawler, so listing
  // 952 of them would submit 24 URLs 952 times. The anchors are exposed through
  // the ItemList in each sheet's JSON-LD instead.
  //
  // No <lastmod>, deliberately. The honest value is when the sheet's content
  // last changed, and nothing here knows that: file mtimes are checkout time in
  // CI, so every URL would claim it changed on every deploy. An absent lastmod
  // is ignored; a wrong one trains crawlers to ignore the real ones.
  //
  // This lives at /reference/sitemap.xml, which is fine (a sitemap may cover any
  // URL at or below its own path) but is NOT auto-discovered: robots.txt is read
  // only from the domain root, which this repo does not serve. Submit it in
  // Search Console, or add a Sitemap: line to humbaventures.com/robots.txt.
  const urls = [SITE, ...all.map(s => SITE + s.sheet.slug + '/'), SITE + 'about/'];
  fs.writeFileSync(path.join(ROOT, 'site', 'sitemap.xml'),
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map(u => '  <url><loc>' + esc(u) + '</loc></url>\n').join('') +
    '</urlset>\n');
  console.log('site/sitemap.xml:', urls.length, 'urls');
}
