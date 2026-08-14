#!/usr/bin/env node
// YouTube search + verification for the "## Videos" sections.
//
//   node build/yt.js search "how a molten salt reactor works"     -> candidate list
//   node build/yt.js line VIDEOID [VIDEOID...]                    -> verified markdown lines
//   node build/yt.js audit [sheet-slug]                           -> re-check every stored video
//
// Watch pages captcha-block curl, so both commands go through the innertube API
// (the public WEB-client key below is the one youtube.com itself ships). `line`
// is the gate that matters: it re-reads title, channel, duration, and view count
// from YouTube itself, so a hallucinated or mistyped id fails loudly instead of
// landing in an entry. Never hand-write a Videos line - paste what `line` prints.
//
// Two endpoints, because neither is sufficient alone:
//   oEmbed  - existence and embeddability, plus the canonical title and channel.
//             It 400s on a dead or embed-disabled id, which is the check we want.
//   player  - duration, view count, live flag. Its playabilityStatus now reads
//             UNPLAYABLE for every anonymous caller (the streaming URLs are
//             bot-gated), so read the metadata and ignore the status.
'use strict';
const fs = require('fs');
const path = require('path');

const KEY = 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const CTX = { client: { clientName: 'WEB', clientVersion: '2.20250101.00.00', hl: 'en', gl: 'US' } };

// Policy (see CLAUDE.md): embeddable, playable, not live, roughly 1.5-20 minutes.
// Hard-reject well outside that; warn inside the margins and let the curator judge.
const HARD_MIN = 45, HARD_MAX = 2400, SOFT_MIN = 80, SOFT_MAX = 1500;
const BANDS = [5e6, 1e6, 5e5, 1e5, 5e4, 1e4, 5e3, 1e3];
const bandLabel = n => {
  const b = BANDS.find(x => n >= x);
  if (!b) return 'under 1k views';
  return (b >= 1e6 ? b / 1e6 + 'm' : b / 1e3 + 'k') + '+ views';
};
const MAX_TITLE = 130;   // matches the existing manufacturing lines

async function api(endpoint, body) {
  const res = await fetch('https://www.youtube.com/youtubei/v1/' + endpoint + '?key=' + KEY + '&prettyPrint=false', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': UA,
      'Origin': 'https://www.youtube.com',
      'Referer': 'https://www.youtube.com/',
      'X-Youtube-Client-Name': '1',
      'X-Youtube-Client-Version': CTX.client.clientVersion,
    },
    body: JSON.stringify({ context: CTX, ...body }),
  });
  if (!res.ok) throw new Error(endpoint + ' HTTP ' + res.status);
  return res.json();
}

// Existence + embeddability + canonical title/channel. Returns null when YouTube
// refuses the id, which covers deleted, private, and embed-disabled videos alike.
// null means the video is really unavailable: deleted, private, or with embedding
// switched off, which are the states worth reporting. Anything else — a rate
// limit, a 5xx, a socket error — throws, so a caller can tell "gone" apart from
// "YouTube would not talk to us just now". That distinction is the difference
// between a useful monthly report and one claiming every video died at once,
// which is what a datacenter IP invites.
async function oembed(id) {
  let res;
  try {
    res = await fetch('https://www.youtube.com/oembed?format=json&url=' +
      encodeURIComponent('https://www.youtube.com/watch?v=' + id), { headers: { 'User-Agent': UA } });
  } catch (e) {
    throw Object.assign(new Error('network: ' + (e && e.message || e)), { transient: true });
  }
  if (res.ok) return res.json();
  if (res.status === 400 || res.status === 401 || res.status === 403 || res.status === 404) return null;
  throw Object.assign(new Error('oEmbed HTTP ' + res.status), { transient: true });
}

function walk(node, out) {
  if (!node || typeof node !== 'object') return out;
  if (Array.isArray(node)) { for (const n of node) walk(n, out); return out; }
  if (node.videoRenderer) out.push(node.videoRenderer);
  for (const k of Object.keys(node)) walk(node[k], out);
  return out;
}

async function search(query, want) {
  const data = await api('search', { query });
  const rows = [];
  for (const v of walk(data, [])) {
    const len = (v.lengthText || {}).simpleText;
    if (!len) continue;                                   // live streams carry no length
    const parts = len.split(':').map(Number);
    const secs = parts.reduce((a, b) => a * 60 + b, 0);
    if (secs < HARD_MIN || secs > HARD_MAX) continue;
    const views = parseInt(((v.viewCountText || {}).simpleText || '0').replace(/\D/g, ''), 10) || 0;
    rows.push({
      id: v.videoId,
      title: ((v.title || {}).runs || [{}])[0].text || '',
      channel: (((v.ownerText || {}).runs || [{}])[0] || {}).text || '',
      len, secs, views,
    });
  }
  const seen = new Set();
  const uniq = rows.filter(r => !seen.has(r.id) && seen.add(r.id));
  console.log(['ID', 'LEN', 'VIEWS', 'CHANNEL', 'TITLE'].join('\t'));
  for (const r of uniq.slice(0, want)) {
    const flag = (r.secs < SOFT_MIN || r.secs > SOFT_MAX) ? ' [len?]' : '';
    console.log([r.id, r.len, r.views.toLocaleString('en-US'), r.channel, r.title + flag].join('\t'));
  }
  if (!uniq.length) console.log('(no candidates within the duration policy)');
}

async function line(id) {
  if (!/^[\w-]{11}$/.test(id)) return console.log('REJECT ' + id + ': not an 11-character video id');

  const oe = await oembed(id);
  if (!oe) return console.log('REJECT ' + id + ': unavailable, private, or embedding disabled');

  let d;
  try { d = (await api('player', { videoId: id, contentCheckOk: true, racyCheckOk: true })).videoDetails; }
  catch (e) { return console.log('REJECT ' + id + ': ' + e.message); }
  if (!d) return console.log('REJECT ' + id + ': no metadata returned');
  if (d.isLive || d.isUpcoming) return console.log('REJECT ' + id + ': live or upcoming stream');

  const secs = parseInt(d.lengthSeconds, 10);
  if (!secs) return console.log('REJECT ' + id + ': no duration (live stream?)');
  if (secs < HARD_MIN || secs > HARD_MAX)
    return console.log('REJECT ' + id + ': ' + Math.round(secs / 60) + ' min is outside the duration policy');

  const views = parseInt(d.viewCount, 10) || 0;
  const mins = Math.max(1, Math.round(secs / 60));
  // oEmbed carries the display title and channel name; videoDetails can lag on renames.
  let title = String(oe.title).replace(/\s+/g, ' ').trim();
  if (title.length > MAX_TITLE) title = title.slice(0, MAX_TITLE - 1).trimEnd() + '…';
  // Channel names get the same whitespace normalization as titles. Some channels
  // carry a trailing space in YouTube's own metadata ("Luminex ", "Anduril Industries "),
  // which renders as a space before the comma in the caption and reads as a typo.
  // Collapsing whitespace is not paraphrasing, so it does not break the paste-verbatim
  // rule; audit compares titles only, so normalizing here cannot report a false rename.
  const chan = String(oe.author_name).replace(/\s+/g, ' ').trim();
  const warn = (secs < SOFT_MIN || secs > SOFT_MAX) ? '   # check length' : '';
  console.log('- https://www.youtube.com/watch?v=' + id + ' — ' + title +
    ' (' + chan + ', ' + mins + (mins === 1 ? ' minute, ' : ' minutes, ') + bandLabel(views) + ')' + warn);
}

// Re-checks every video already stored in the entry files. Videos rot: channels
// delete them, go private, or switch off embedding, and none of that shows up in
// the build. Run it periodically (the monthly link-rot routine is the natural home).
async function audit(only) {
  const sheetsDir = path.join(__dirname, '..', 'sheets');
  const jobs = [];
  for (const slug of fs.readdirSync(sheetsDir).sort()) {
    if (only && slug !== only) continue;
    const edir = path.join(sheetsDir, slug, 'entries');
    if (!fs.existsSync(edir)) continue;
    for (const f of fs.readdirSync(edir).sort()) {
      const text = fs.readFileSync(path.join(edir, f), 'utf8');
      const sec = text.split(/^## /m).find(c => c.startsWith('Videos\n'));
      if (!sec) continue;
      for (const line of sec.split('\n')) {
        if (!line.startsWith('- http')) continue;
        // Split the title from the trailing "(Channel, N minutes, band views)".
        // Both halves can contain parentheses - channels like "Sumitomo (SHI)
        // Demag" and "ADH Machine Tool (Official)" are common - so the metadata
        // pattern allows balanced nesting in the channel and the title is lazy.
        // That combination puts the split at the real metadata paren rather than
        // at whichever one happens to be last.
        const m = line.match(/watch\?v=([\w-]{11})\s+—\s+(.*?) \([^()]*(?:\([^()]*\)[^()]*)*, \d+ minutes?, [^()]*views\)\s*$/);
        if (m) jobs.push({ where: slug + '/' + f, id: m[1], title: m[2] });
        else console.log('UNPARSED  ' + slug + '/' + f + '\n    ' + line.trim());
      }
    }
  }
  console.log('checking ' + jobs.length + ' videos...');
  const bad = [];
  const unchecked = [];
  const queue = jobs.slice();
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const j = queue.shift();
      let oe = null, err = null;
      // One retry after a pause, then give up and say so. A video that is really
      // gone answers the same way twice; a rate limit usually does not.
      for (let attempt = 0; attempt < 2; attempt++) {
        err = null;
        try { oe = await oembed(j.id); break; }
        catch (e) { err = e; if (attempt === 0) await new Promise(s => setTimeout(s, 4000)); }
      }
      if (err) { unchecked.push('UNCHECKED ' + j.where + '  ' + j.id + '  (' + err.message + ')'); continue; }
      if (!oe) { bad.push('GONE      ' + j.where + '  ' + j.id + '  "' + j.title + '"'); continue; }
      // Stored titles are truncated at MAX_TITLE, so compare only the kept prefix.
      // Collapse whitespace on BOTH sides: publishers put double spaces in titles,
      // and comparing a normalized live title against a raw stored one reports a
      // rename that never happened.
      const live = String(oe.title).replace(/\s+/g, ' ').trim();
      const stored = j.title.replace(/…$/, '').replace(/\s+/g, ' ').trim();
      if (!live.startsWith(stored)) bad.push('RETITLED  ' + j.where + '  ' + j.id + '\n    stored: ' + j.title + '\n    now:    ' + live);
    }
  }));
  bad.sort();
  bad.forEach(b => console.log(b));
  if (unchecked.length) {
    // Listed but not failed: YouTube declining to answer says nothing about the
    // video, and treating it as rot would make the report worthless.
    unchecked.sort();
    console.log('\n' + unchecked.length + ' could not be checked (YouTube did not answer, not evidence of rot):');
    unchecked.forEach(u => console.log('  ' + u));
  }
  console.log('\n' + (jobs.length - bad.length - unchecked.length) + ' OK, ' +
    bad.filter(b => b.startsWith('GONE')).length + ' gone, ' +
    bad.filter(b => b.startsWith('RETITLED')).length + ' retitled, ' +
    unchecked.length + ' unchecked, of ' + jobs.length);
  if (bad.some(b => b.startsWith('GONE'))) process.exitCode = 1;
}

(async () => {
  const [cmd, ...rest] = process.argv.slice(2);
  if (cmd === 'audit') {
    await audit(rest[0]);
  } else if (cmd === 'search') {
    const ni = rest.indexOf('--n');
    const want = ni === -1 ? 12 : parseInt(rest[ni + 1], 10);
    const query = (ni === -1 ? rest : rest.slice(0, ni)).join(' ');
    if (!query) throw new Error('usage: node build/yt.js search "<query>" [--n 12]');
    await search(query, want);
  } else if (cmd === 'line') {
    if (!rest.length) throw new Error('usage: node build/yt.js line <videoId> [<videoId>...]');
    for (const id of rest) await line(id);
  } else {
    console.error('usage:\n  node build/yt.js search "<query>" [--n 12]\n  node build/yt.js line <videoId> [...]');
    process.exit(1);
  }
})().catch(e => { console.error(String(e.message || e)); process.exit(1); });
