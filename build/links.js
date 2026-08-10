#!/usr/bin/env node
// Re-checks every "## Further reading" URL in the entry files.
//
//   node build/links.js                 -> check every sheet
//   node build/links.js <sheet-slug>    -> one sheet
//
// Companion to `yt.js audit`, which does the same job for the video links. Both
// run from .github/workflows/linkcheck.yml once a month.
//
// The hard part is not fetching, it is not crying wolf. A checker that reports
// every refused request as a dead link gets ignored by the second month, and most
// of the interesting sources here — USGS, GAO, the standards bodies, half the
// trade associations — refuse automated clients while serving browsers fine. So
// results are graded rather than pass/fail:
//
//   DEAD     404, 410, or the host does not resolve. Real rot. Fails the run.
//   SUSPECT  200, but the response shape lies: a PDF that is not a PDF, a body
//            too small to be the document, a challenge page in the <title>.
//   BLOCKED  403/429/503, or a host known to refuse fetchers. Not checkable from
//            a script and never was; listed so it can be spot-checked by hand.
//
// Only DEAD exits non-zero. A refusal is not a missing page, and that distinction
// matters more from a CI runner than from a laptop, because datacenter IPs get
// blocked far more aggressively than home ones.
//
// Two hosts need their APIs instead of their pages, and they are the two biggest:
//   pmc.ncbi.nlm.nih.gov  serves a CAPTCHA shell to fetchers; ask E-utilities.
//   ntrs.nasa.gov         /citations/<id> is a client-rendered shell that returns
//                         200 for any id at all, so a fetch proves nothing.
'use strict';
const fs = require('fs');
const path = require('path');

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const TIMEOUT = 25000;
const CONCURRENCY = 8;

// Hosts documented in CLAUDE.md as refusing automated clients while working in a
// browser. Their failures carry no information, so they are graded BLOCKED before
// a request is even made rather than being retried and reported every month.
const BLOCKS = [
  'sciencedirect.com', 'onlinelibrary.wiley.com', 'mdpi.com', 'pubs.acs.org', 'pubs.rsc.org',
  'nrc.gov', 'iaea.org', 'semiengineering.com', 'nde-ed.org', 'automate.org', 'festo.com',
  'semi.org', 'pubs.aip.org', 'spectrum.ieee.org', 'crsreports.congress.gov', 'sto.nato.int',
  'dosits.org', 'analog.com', 'defence.gov.au', 'jedec.org', 'emp.lbl.gov', 'unido.org',
  'epj-pv.org', 'ember-energy.org', 'turbomachinerymag.com', 'aerospace.org',
  'satelliteconfers.org', 'asmdigitalcollection.asm.org', 'edmundoptics.com', 'cobod.com',
  'thefabricator.com', 'nickelinstitute.org', 'intlmag.org', 'tms.org', 'icao.int',
  'sigmaaldrich.com', 'merckmillipore.com', 'uspnf.com', 'cytiva.com', 'apps.dtic.mil',
  'inst.eecs.berkeley.edu', 'scis.scichina.com',
];
const isBlockedHost = h => BLOCKS.some(b => h === b || h.endsWith('.' + b));

// ---- URL extraction ----
function collect(only) {
  const dir = path.join(__dirname, '..', 'sheets');
  const out = [];
  for (const slug of fs.readdirSync(dir).sort()) {
    if (only && slug !== only) continue;
    const edir = path.join(dir, slug, 'entries');
    if (!fs.existsSync(edir)) continue;
    for (const f of fs.readdirSync(edir).sort()) {
      const text = fs.readFileSync(path.join(edir, f), 'utf8');
      const sec = text.split(/^## /m).find(c => c.startsWith('Further reading\n'));
      if (!sec) continue;
      for (const m of sec.matchAll(/\((https?:\/\/[^)\s]+)\)/g)) {
        out.push({ where: slug + '/' + f, url: m[1] });
      }
    }
  }
  return out;
}

// ---- graded check for one ordinary URL ----
// Reads only the first few KB: enough to sniff a PDF header and read a <title>,
// without pulling 200 whole PDFs over the wire every month.
async function probe(url) {
  let res;
  try {
    res = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': UA, accept: '*/*', 'accept-language': 'en-US,en;q=0.9' },
      signal: AbortSignal.timeout(TIMEOUT),
    });
  } catch (e) {
    // undici hides the real reason one level down, and the distinctions matter:
    // a name that does not resolve is rot, a certificate Node will not chain is
    // not. NASA and .mil hosts here are signed by roots Node does not carry but
    // browsers and curl do, and calling those "no response" every month buries
    // the one line that is actually a dead link.
    const code = (e && e.cause && e.cause.code) || (e && e.code) || '';
    const msg = String(e && e.message || e);
    if (/ENOTFOUND|EAI_AGAIN|getaddrinfo/i.test(code + msg)) return { grade: 'DEAD', why: 'host does not resolve' };
    // OpenSSL's names do not all contain "CERT": the common one here is
    // UNABLE_TO_VERIFY_LEAF_SIGNATURE, which matches on SIGNATURE alone.
    if (/CERT|TLS|SSL|SIGNATURE|ISSUER/i.test(code)) {
      return { grade: 'BLOCKED', why: 'TLS chain Node will not verify (' + code + '); browsers accept it' };
    }
    if (/timeout/i.test(msg)) return { grade: 'BLOCKED', why: 'timed out after ' + (TIMEOUT / 1000) + 's' };
    return { grade: 'BLOCKED', why: 'no response (' + (code || msg.slice(0, 50)) + ')' };
  }
  if (res.status === 404 || res.status === 410) return { grade: 'DEAD', why: 'HTTP ' + res.status };
  if (!res.ok) return { grade: 'BLOCKED', why: 'HTTP ' + res.status };

  // Judge where we landed, not where we asked. Plenty of these are DOIs and
  // shorteners, so the host that decides how to read the response is the one at
  // the end of the redirect chain.
  const landed = (() => { try { return new URL(res.url).hostname.replace(/^www\./, ''); } catch (e) { return ''; } })();
  if (landed === 'openknowledge.fao.org') return checkFAO(res.url);
  if (landed && isBlockedHost(landed)) return { grade: 'BLOCKED', why: 'redirects to ' + landed + ', which refuses automated clients' };

  const type = (res.headers.get('content-type') || '').toLowerCase();
  let head = Buffer.alloc(0);
  try {
    const reader = res.body.getReader();
    while (head.length < 4096) {
      const { done, value } = await reader.read();
      if (done) break;
      head = Buffer.concat([head, Buffer.from(value)]);
    }
    reader.cancel().catch(() => {});
  } catch (e) { /* body unreadable; fall through on what we have */ }

  const text = head.toString('latin1');
  const isPdfBytes = text.startsWith('%PDF');

  // Bot walls answer 200 with an HTML shell. Two signatures cover the ones in
  // this corpus: the noindex interstitial Imperva-style filters return, and the
  // no-cache meta refresh challenge in front of docs.nlr.gov. Node's fetch trips
  // these where curl does not — same headers, different TLS fingerprint — so
  // they say nothing about whether the link works in a browser.
  const interstitial = /NAME=["']?ROBOTS["']?\s+CONTENT=["']?NOINDEX/i.test(text) ||
    /<meta http-equiv="Pragma" content="no-cache"/i.test(text) ||
    // SiteGround and friends answer 202 with a meta refresh into a captcha path.
    /http-equiv=["']?refresh["']?[^>]*captcha/i.test(text);
  const title = (text.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || '';
  if (interstitial) return { grade: 'BLOCKED', why: 'bot-wall interstitial, not the document' };
  if (/access blocked|just a moment|are you a robot|attention required|captcha|forbidden|page not found/i.test(title)) {
    return { grade: 'BLOCKED', why: 'challenge page: ' + title.trim().slice(0, 50) };
  }

  // Two different failures wear the same disguise, so keep them apart:
  //   content-type says PDF, bytes are not  -> the server is lying (Thermo, Cytiva)
  //   URL says .pdf, content-type says HTML -> we were handed a page instead of
  //                                            the file, which is a wall, not rot
  if (type.includes('pdf') && !isPdfBytes) return { grade: 'SUSPECT', why: 'declared application/pdf but the body is not a PDF' };
  if (/\.pdf($|\?)/i.test(url) && !isPdfBytes) return { grade: 'BLOCKED', why: 'a .pdf URL served ' + (type.split(';')[0] || 'no type') + ' instead of the file' };

  if (!isPdfBytes) {
    // A body this small is a shell or an error page, not a document. Only trust
    // content-length, which is a real total, rather than what one read returned.
    const len = Number(res.headers.get('content-length') || 0);
    if (len && len < 1200) return { grade: 'SUSPECT', why: 'body is only ' + len + ' bytes' };
  }
  return { grade: 'OK' };
}

// openknowledge.fao.org serves a ~945-byte client-rendered shell for every item,
// so fetching one proves nothing. Its DSpace API answers for a real handle and
// 404s for an invented one, which is the check that means something.
async function checkFAO(url) {
  const m = url.match(/handle\/([\d.]+\/\d+\/[^/?#]+)/) || url.match(/handle\/([^?#]+)/);
  if (!m) return { grade: 'SUSPECT', why: 'not a /handle/ URL' };
  try {
    const r = await fetch('https://openknowledge.fao.org/server/api/pid/find?id=hdl:' + m[1],
      { headers: { 'user-agent': UA, accept: 'application/json' }, signal: AbortSignal.timeout(TIMEOUT) });
    if (r.status === 404) return { grade: 'DEAD', why: 'no such FAO handle' };
    if (!r.ok) return { grade: 'BLOCKED', why: 'FAO DSpace API returned ' + r.status };
    return { grade: 'OK' };
  } catch (e) {
    return { grade: 'BLOCKED', why: 'FAO DSpace API did not answer' };
  }
}

// ---- the two hosts that need their API ----
// E-utilities takes a comma-joined id list, so 137 PMC links cost two requests
// rather than 137, and no rate limiting to worry about.
async function checkPMC(jobs) {
  const ids = jobs.map(j => (j.url.match(/PMC\d+/i) || [''])[0].toUpperCase()).map(s => s.replace(/^PMC/, ''));
  const results = new Map();
  for (let i = 0; i < jobs.length; i += 100) {
    const slice = ids.slice(i, i + 100).filter(Boolean);
    if (!slice.length) continue;
    const u = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pmc&retmode=json&id=' + slice.join(',');
    let j = null;
    try {
      const r = await fetch(u, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(TIMEOUT) });
      j = await r.json();
    } catch (e) { /* leave unresolved below */ }
    const uids = (j && j.result && j.result.uids) || null;
    for (let k = 0; k < slice.length; k++) {
      const id = slice[k];
      if (!uids) results.set(id, { grade: 'BLOCKED', why: 'E-utilities did not answer' });
      else if (!uids.includes(id)) results.set(id, { grade: 'DEAD', why: 'no such PMC id' });
      else results.set(id, { grade: 'OK' });
    }
    await new Promise(r => setTimeout(r, 400));   // NCBI asks for <3 req/sec
  }
  return jobs.map((j, i) => results.get(ids[i]) || { grade: 'SUSPECT', why: 'no PMC id in the URL' });
}

async function checkNTRS(url) {
  const m = url.match(/citations\/(\d+)/);
  if (!m) return { grade: 'SUSPECT', why: 'not a /citations/<id> URL' };
  try {
    const r = await fetch('https://ntrs.nasa.gov/api/citations/' + m[1],
      { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(TIMEOUT) });
    const j = await r.json();
    if (!j || j.statusCode === 404 || !j.title) return { grade: 'DEAD', why: 'no such NTRS citation' };
    return { grade: 'OK' };
  } catch (e) {
    return { grade: 'BLOCKED', why: 'NTRS API did not answer' };
  }
}

// ---- run ----
(async () => {
  const only = process.argv[2];
  const jobs = collect(only);
  if (!jobs.length) {
    console.log('no Further reading URLs found' + (only ? ' for ' + only : ''));
    process.exit(0);
  }
  const host = u => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; } };
  const pmc = jobs.filter(j => host(j.url) === 'pmc.ncbi.nlm.nih.gov');
  const rest = jobs.filter(j => host(j.url) !== 'pmc.ncbi.nlm.nih.gov');
  console.log('checking ' + jobs.length + ' further-reading URLs (' + pmc.length + ' via the PMC API)...');

  const graded = [];
  const pmcResults = pmc.length ? await checkPMC(pmc) : [];
  pmc.forEach((j, i) => graded.push({ ...j, ...pmcResults[i] }));

  const gradeOnce = async (url) => {
    const h = host(url);
    if (isBlockedHost(h)) return { grade: 'BLOCKED', why: 'host refuses automated clients (see CLAUDE.md)' };
    if (h === 'ntrs.nasa.gov') return checkNTRS(url);
    if (h === 'openknowledge.fao.org') return checkFAO(url);
    return probe(url);
  };

  const queue = rest.slice();
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const j = queue.shift();
      let r = await gradeOnce(j.url);
      // Rate limits come and go; real rot does not. Anything that fails gets one
      // second look after a pause, and only a repeat verdict is reported. This is
      // what stops a monthly run from a datacenter IP filing an issue full of
      // hosts that were merely annoyed — it costs nothing, since it only applies
      // to the handful that failed.
      if (r.grade === 'DEAD' || r.grade === 'SUSPECT') {
        await new Promise(s => setTimeout(s, 4000));
        r = await gradeOnce(j.url);
      }
      graded.push({ ...j, ...r });
    }
  }));

  const by = g => graded.filter(x => x.grade === g).sort((a, b) => a.where.localeCompare(b.where));
  const dead = by('DEAD'), suspect = by('SUSPECT'), blocked = by('BLOCKED');
  const line = x => '  ' + x.where + '\n    ' + x.url + '\n    ' + x.why;

  if (dead.length) { console.log('\nDEAD (' + dead.length + ') — these are gone:'); dead.forEach(x => console.log(line(x))); }
  if (suspect.length) { console.log('\nSUSPECT (' + suspect.length + ') — 200 but the response looks wrong:'); suspect.forEach(x => console.log(line(x))); }
  if (blocked.length) {
    console.log('\nBLOCKED (' + blocked.length + ') — not checkable from a script, verify by hand if in doubt:');
    blocked.forEach(x => console.log('  ' + x.where + '  ' + x.url + '  (' + x.why + ')'));
  }
  console.log('\n' + graded.filter(x => x.grade === 'OK').length + ' OK, ' + dead.length + ' dead, ' +
    suspect.length + ' suspect, ' + blocked.length + ' unverifiable, of ' + graded.length);
  if (dead.length) process.exit(1);
})();
