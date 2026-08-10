#!/usr/bin/env node
// Checks reader-facing prose against the banned constructions in STYLE.md.
//
//   node build/style.js                 -> every sheet
//   node build/style.js <sheet-slug>    -> one sheet
//
// Run in CI by .github/workflows/style.yml. The point is that a later writing
// pass cannot quietly put the AI tics back: they were removed by hand once and
// nothing but a check keeps them out.
//
// Every rule here is high precision and currently matches nothing. That was the
// design constraint, not an accident — a linter that fires on prose which is
// actually fine gets muted, and then it protects nothing. Several plausible
// rules were tried against the corpus and dropped for exactly that reason:
//
//   em dashes per paragraph  STYLE.md says roughly one, but 203 paragraphs use a
//                            matched pair for an aside, which is fine, and the
//                            worst offenders were guide/h2h table rows that only
//                            look like paragraphs once the tags are stripped.
//   bare "not just X"        16 uses, all ordinary contrast ("not just the
//                            cells"). Only the aphoristic completions are banned,
//                            so the rules below require the dash or the "it's Y".
//   "seismic", "unlock"      both real technical vocabulary here — seismic risk in
//                            geothermal, "unlocks sites that permitting would
//                            kill". Dramatic only out of context.
//
// If a rule below ever fires on prose that reads fine, fix the rule. Do not add
// an exemption comment to the entry; the wordlist is the place to be honest.
'use strict';
const fs = require('fs');
const path = require('path');

// Publication names are not ours to rewrite, so their sections are never linted.
const SKIP_SECTIONS = new Set(['further reading', 'videos']);

const RULES = [
  // --- the aphorism shapes, which are the tic this repo actually had ---
  { id: 'not-X-but-Y', re: /\bnot\s+[^.\n]{1,60}[—–]\s*but\b/gi,
    say: '"not X — but Y". Say the thing directly.' },
  // The negation before the dash is what separates the aphorism from an ordinary
  // aside. "Xenon supply is a real constraint — it is a byproduct of air
  // separation — which has pushed…" is a matched pair and fine; "the constraint
  // is not geology at all — it is which refineries bother" is the tic. Without
  // requiring the "not", this rule fires on both.
  { id: 'dash-restatement', re: /\b(?:is|are|was|were)\s+not\b[^.\n]{0,60}[—–]\s*(?:it|they)(?:'s| is| are)\b/gi,
    say: 'aphoristic "X is not Y — it is Z". Split into two plain sentences.' },
  // "only", or a copula restating the subject. An action verb after the dash is
  // an explanation and stays: "There is no remote attack on an inertial unit —
  // it senses only its own motion" earns its dash; "— it is netting and labor"
  // is the aphorism.
  { id: 'no-X-dash', re: /\bthere(?:'s| is| are)\s+no\b[^.\n]{0,60}[—–]\s*(?:only\b|(?:it|they)(?:'s| is| are)\b)/gi,
    say: '"there is no X — only Y". State the trade-off plainly.' },
  { id: 'not-just-its', re: /\bnot\s+(?:just|only|merely|simply)\b[^.\n]{0,60}[,;][^.\n]{0,15}\b(?:it|they)(?:'s| is| are)\b/gi,
    say: '"not just X, it\'s Y". Make the direct claim instead.' },

  // --- dramatic vocabulary. Domain terms are deliberately absent: "seismic" and
  //     "unlock" both earn their place in these sheets. ---
  { id: 'dramatic', re: /\b(?:ferocious|brutal|razor-thin|staggering|breathtaking|game[- ]changers?|holy grail|silver bullet|no-brainer|sea change|double-edged sword|achilles heel|perfect storm|paradigm shift|supercharges?|revolutioni[sz]e[sd]?)\b/gi,
    say: 'dramatic vocabulary. Use the neutral word.' },
  { id: 'is-fiction', re: /\bis fiction\b/gi,
    say: 'rhetorical dismissal. Say what is wrong with it.' },
  { id: 'seam', re: /\b(?:attacks?|exploits?) the seam\b/gi,
    say: 'metaphor. Name the weakness.' },
  { id: 'cost-curve-riding', re: /\briding down\b/gi,
    say: 'cliché. "costs keep falling" says it.' },

  // --- filler that adds words and no information ---
  { id: 'filler', re: /\b(?:it(?:'s| is) worth noting|it(?:'s| is) important to (?:note|remember)|when it comes to|the reality is|make no mistake|a testament to|cannot be overstated|the bottom line|plain and simple|in an era (?:of|where)|in today(?:'s)? world|in the modern era)\b/gi,
    say: 'filler. Delete it and state the fact.' },
  { id: 'thesaurus', re: /\b(?:delve|myriad|plethora)\b/gi,
    say: 'not the plain word. Use the plain word.' },
  { id: 'is-king', re: /\bis king\b/gi,
    say: 'cliché. Say what dominates and why.' },
  { id: 'serves-as', re: /\b(?:stands|serves) as (?:a|the)\b/gi,
    say: 'padding. "is" is the verb.' },
];

// ---- collect prose, with line numbers so a hit can be opened ----
function units(only) {
  const dir = path.join(__dirname, '..', 'sheets');
  const out = [];
  for (const slug of fs.readdirSync(dir).sort()) {
    if (only && slug !== only) continue;
    const sheetDir = path.join(dir, slug);
    if (!fs.existsSync(path.join(sheetDir, 'sheet.json'))) continue;

    const edir = path.join(sheetDir, 'entries');
    if (fs.existsSync(edir)) {
      for (const f of fs.readdirSync(edir).sort()) {
        const src = fs.readFileSync(path.join(edir, f), 'utf8');
        const lines = src.split('\n');
        let section = '';
        lines.forEach((line, i) => {
          const h = line.match(/^## (.+)$/);
          if (h) { section = h[1].trim().toLowerCase(); return; }
          if (!section || SKIP_SECTIONS.has(section)) return;
          if (line.startsWith('---')) return;
          out.push({ file: 'sheets/' + slug + '/entries/' + f, line: i + 1, text: line });
        });
      }
    }
    // guide and h2h are HTML; lint the text, not the markup, but keep the line
    // number so the hit points at something openable.
    for (const f of ['guide.html', 'h2h.html']) {
      const p = path.join(sheetDir, f);
      if (!fs.existsSync(p)) continue;
      fs.readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
        out.push({ file: 'sheets/' + slug + '/' + f, line: i + 1, text: line.replace(/<[^>]+>/g, ' ') });
      });
    }
    // sheet.json prose: every string a reader sees, per STYLE.md's scope notes.
    const sj = path.join(sheetDir, 'sheet.json');
    const raw = fs.readFileSync(sj, 'utf8');
    const j = JSON.parse(raw);
    const strings = [j.lede, j.blurb, j.question, j.title,
      ...(j.parts || []).map(p => p.blurb),
      ...Object.values(j.groupBlurbs || {}),
      ...(j.facets || []).map(f => f.tip)].filter(Boolean);
    for (const s of strings) {
      const at = raw.split('\n').findIndex(l => l.includes(s.slice(0, 40)));
      out.push({ file: 'sheets/' + slug + '/sheet.json', line: at >= 0 ? at + 1 : 1, text: s });
    }
  }
  return out;
}

const only = process.argv[2];
const rows = units(only);
const hits = [];
for (const row of rows) {
  for (const rule of RULES) {
    rule.re.lastIndex = 0;
    for (const m of row.text.matchAll(rule.re)) {
      hits.push({ ...row, rule: rule.id, say: rule.say, match: m[0].replace(/\s+/g, ' ').trim() });
    }
  }
}
hits.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);
for (const h of hits) {
  console.log(h.file + ':' + h.line + '  [' + h.rule + ']  "' + h.match + '"\n    ' + h.say);
}
console.log('\n' + rows.length + ' lines of prose checked against ' + RULES.length +
  ' rules, ' + hits.length + ' problem' + (hits.length === 1 ? '' : 's'));
if (hits.length) {
  console.log('See STYLE.md. If a rule fired on prose that reads fine, fix the rule in build/style.js.');
  process.exit(1);
}
