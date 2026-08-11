#!/usr/bin/env node
// Generates AI illustrations for sheet entries via the Gemini image API.
// The API key is NEVER stored in this repo: it is read from $GEMINI_API_KEY
// or from ../.gemini_api_key (one level above the repo root, gitignored by absence).
//
//   node build/generate-images.js anchor <slug>       -> generate the style-anchor image
//   node build/generate-images.js parts <slug> [n]    -> n candidates per class, from
//                                                        "partPrompts", written as part-<id>-<a..>.png
//   node build/generate-images.js batch <slug> [n]    -> n candidates per entry (default 2),
//                                                        style-conditioned on the anchor
//   node build/generate-images.js edit <png> "<instruction>"  -> targeted edit of an existing
//                                                        image, written alongside as <png>-edit.png
//
// Per-sheet prompts live in sheets/<slug>/images/prompts.json:
//   { "anchor": 1, "style": "<optional override>", "prompts": { "1": "...", "2": "..." } }
// The prompt keys are entry numbers. Output goes to a scratch directory (printed on
// start, override with $IMG_OUT) for human review; picked images are copied into
// sheets/<slug>/images/<zero-padded number>.jpg by hand afterwards. Nothing this
// script writes lands in the repo automatically - every image gets eyes on it first.
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MODEL = 'gemini-2.5-flash-image';

const KEY = process.env.GEMINI_API_KEY ||
  fs.readFileSync(path.join(ROOT, '..', '.gemini_api_key'), 'utf8').trim();

// Shared house style. Every sheet uses it unless its prompts.json overrides
// "style", so illustrations stay consistent across the whole site.
const STYLE = 'Minimalist technical illustration, the style of a precise patent drawing ' +
  'crossed with an isometric product sketch. Uniform-weight dark slate-gray ink linework ' +
  'with sparse, muted steel-blue accent shading (hex 4E7AA8) on a plain very light warm-gray ' +
  'background (hex F2F3F1). Three-quarter isometric view, single centered subject, generous ' +
  'margins. No text, no labels, no callouts, no logos, no humans, no background scenery, ' +
  'no drop shadows. Clean, engineered, calm. ' +
  // The next two sentences were added after the first big run. The model infers material
  // color from function, so "wound" produces copper however carefully the prompt avoids
  // the word; the palette has to be stated as a prohibition. It also drifts toward heavy
  // solid fills unless told the drawing should read as line art.
  'Strictly two colors plus the background: dark slate-gray line and muted steel-blue fill. ' +
  'Every material is drawn in that same palette. Absolutely no copper, brass, bronze, gold, ' +
  'orange, red, yellow or green anywhere, even where the real object would be that color. ' +
  'Favor open, airy linework with large unfilled light areas over heavy solid gray shading; ' +
  'the drawing should read as line art, not as a rendered solid model.';

function loadPrompts(slug) {
  if (!slug) throw new Error('which sheet? usage: ... anchor|batch <slug>');
  const f = path.join(ROOT, 'sheets', slug, 'images', 'prompts.json');
  if (!fs.existsSync(f)) throw new Error('no prompt file at ' + path.relative(ROOT, f));
  const cfg = JSON.parse(fs.readFileSync(f, 'utf8'));
  const hasEntry = cfg.prompts && Object.keys(cfg.prompts).length;
  const hasParts = cfg.partPrompts && Object.keys(cfg.partPrompts).length;
  // Most sheets illustrate only their classes, so "prompts" is optional — a file with
  // just "partPrompts" is valid and is the common case.
  if (!hasEntry && !hasParts) throw new Error(f + ': needs "prompts" or "partPrompts"');
  return {
    style: cfg.style || STYLE,
    anchor: hasEntry ? String(cfg.anchor || Object.keys(cfg.prompts)[0]) : null,
    prompts: cfg.prompts || {},
    // Per-class images are a separate, much smaller set keyed by part id. They are
    // deliberately allowed to be sparse: a class with no prompt here just stays plain.
    parts: cfg.partPrompts || null,
  };
}

const outDir = slug => process.env.IMG_OUT || path.join(os.tmpdir(), 'refsheets-images', slug);

async function generate(prompt, style, anchorB64, outfile) {
  const parts = [];
  if (anchorB64) {
    parts.push({ inline_data: { mime_type: 'image/png', data: anchorB64 } });
    parts.push({ text: 'Match the exact visual style, line weight, palette, background color, and rendering approach of this reference illustration. New subject: ' + prompt + ' ' + style });
  } else {
    parts.push({ text: prompt + ' ' + style });
  }
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
      body: JSON.stringify({
        contents: [{ parts }],
        generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '4:3' } },
      }),
    });
  if (!res.ok) throw new Error(path.basename(outfile) + ': HTTP ' + res.status + ' ' + (await res.text()).slice(0, 300));
  const data = await res.json();
  const img = (data.candidates?.[0]?.content?.parts || []).find(p => p.inlineData || p.inline_data);
  if (!img) throw new Error(path.basename(outfile) + ': no image in response: ' + JSON.stringify(data).slice(0, 300));
  fs.writeFileSync(outfile, Buffer.from((img.inlineData || img.inline_data).data, 'base64'));
  console.log('wrote', outfile);
}

(async () => {
  const mode = process.argv[2];
  if (mode === 'anchor' || mode === 'batch' || mode === 'parts') {
    const slug = process.argv[3];
    const { style, anchor, prompts, parts } = loadPrompts(slug);
    const OUT = outDir(slug);
    fs.mkdirSync(OUT, { recursive: true });
    console.log('output dir:', OUT);
    const anchorFile = path.join(OUT, 'anchor.png');

    if (mode === 'anchor') {
      if (!anchor) throw new Error(slug + ' has no entry "prompts" to anchor on; copy a shared anchor.png into ' + OUT + ' instead');
      return generate(prompts[anchor], style, null, anchorFile);
    }

    // Class images across sheets are anchored on one shared reference so all 18 sheets
    // look like the same set; copy that anchor.png in rather than generating a new one.
    if (!fs.existsSync(anchorFile)) throw new Error('no anchor at ' + anchorFile + ' - generate one, or copy a shared anchor.png in');
    const per = parseInt(process.argv[4] || '2', 10);
    const anchorB64 = fs.readFileSync(anchorFile).toString('base64');
    const jobs = [];
    const set = mode === 'parts' ? parts : prompts;
    if (mode === 'parts' && !set) throw new Error('no "partPrompts" in ' + slug + '/images/prompts.json');
    for (const [n, prompt] of Object.entries(set))
      for (let c = 0; c < per; c++) jobs.push({ n, c, prompt, pre: mode === 'parts' ? 'part-' : '' });

    let failed = 0;
    const workers = Array.from({ length: 3 }, async () => {
      while (jobs.length) {
        const { n, c, prompt, pre } = jobs.shift();
        const stem = pre ? pre + n : String(n).padStart(3, '0');
        const f = path.join(OUT, stem + '-' + String.fromCharCode(97 + c) + '.png');
        if (fs.existsSync(f)) continue; // resumable: skip already-generated candidates
        try { await generate(prompt, style, anchorB64, f); }
        catch (e) { failed++; console.error(e.message); }
      }
    });
    await Promise.all(workers);
    console.log(failed ? failed + ' FAILED' : 'all done');
  } else if (mode === 'edit') {
    const src = process.argv[3], instruction = process.argv[4];
    if (!src || !instruction) { console.error('usage: ... edit <png> "<instruction>"'); process.exit(1); }
    const b64 = fs.readFileSync(src).toString('base64');
    const out = src.replace(/\.png$/, '') + '-edit.png';
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
        body: JSON.stringify({
          contents: [{ parts: [
            { inline_data: { mime_type: 'image/png', data: b64 } },
            { text: instruction + ' Change nothing else about the image: keep the exact same composition, style, line work, colors, and background.' },
          ] }],
          generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '4:3' } },
        }),
      });
    if (!res.ok) throw new Error('edit: HTTP ' + res.status + ' ' + (await res.text()).slice(0, 300));
    const data = await res.json();
    const img = (data.candidates?.[0]?.content?.parts || []).find(p => p.inlineData || p.inline_data);
    if (!img) throw new Error('edit: no image in response');
    fs.writeFileSync(out, Buffer.from((img.inlineData || img.inline_data).data, 'base64'));
    console.log('wrote', out);
  } else {
    console.error('usage:\n  node build/generate-images.js anchor <slug>\n' +
      '  node build/generate-images.js batch <slug> [candidates-per-entry]\n' +
      '  node build/generate-images.js edit <png> "<instruction>"');
    process.exit(1);
  }
})().catch(e => { console.error(String(e.message || e)); process.exit(1); });
