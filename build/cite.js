// Citation tooling: find sources, check that a URL is what it claims to be, and
// verify every Further reading link already in the sheets.
//
//   node build/cite.js search "<query>" [n]   candidate PMC articles, with real titles
//   node build/cite.js check <url>...         status, content type and title of each URL
//   node build/cite.js verify [sheet-slug]    re-check every citation in the sheets
//
// The rule this exists to enforce is CLAUDE.md's: a guessed identifier lands on
// a real document about something else and reads as correct, so nothing may be
// written from memory. `search` returns ids the API actually holds, and `verify`
// reads them back and compares the title against what the sheet claims.
//
// No dependencies, same as the rest of build/.

const fs = require('fs');
const path = require('path');

const EUTILS = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
// PMC and several other good sources refuse anything that looks automated.
// A browser UA is what fda.gov, pubs.usgs.gov and nlr.gov need to answer at all.
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const sleep = ms => new Promise(r => setTimeout(r, ms));

// E-utilities allows 3 requests a second unauthenticated, and answers 429 rather
// than queuing. One retry with a longer pause covers the transient case without
// turning a real outage into a long hang.
async function eutils(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'refsheets-cite/1.0' } });
      if (r.status === 429) throw new Error('rate limited');
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return await r.json();
    } catch (e) {
      if (i === tries - 1) throw e;
      await sleep(1500 * (i + 1));
    }
  }
}

// Titles come back with HTML entities and occasional inline markup, because PMC
// stores them as they appeared in the journal.
const clean = s => (s || '')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ').trim();

async function summarize(ids) {
  const out = [];
  // esummary takes a comma-joined list, so 50 ids cost one request rather than 50.
  for (let i = 0; i < ids.length; i += 50) {
    const chunk = ids.slice(i, i + 50).map(x => String(x).replace(/^PMC/, ''));
    const d = await eutils(EUTILS + 'esummary.fcgi?' +
      new URLSearchParams({ db: 'pmc', id: chunk.join(','), retmode: 'json' }));
    for (const uid of d.result.uids || []) {
      const r = d.result[uid];
      out.push({
        id: 'PMC' + uid,
        year: (r.pubdate || '').slice(0, 4),
        journal: r.fulljournalname || r.source || '',
        title: clean(r.title),
      });
    }
    if (i + 50 < ids.length) await sleep(400);
  }
  return out;
}

// Relevance sort on a bare query returns narrow primary research. Restricting
// terms to [Title] and adding the review filter is what surfaces the canonical
// reviews the Further reading policy asks for — worth doing in the query rather
// than reading past six wrong answers.
async function search(query, n) {
  const d = await eutils(EUTILS + 'esearch.fcgi?' + new URLSearchParams({
    db: 'pmc', term: query, retmax: String(n), retmode: 'json', sort: 'relevance',
  }));
  const ids = d.esearchresult.idlist || [];
  if (!ids.length) return console.log('  (no hits)');
  await sleep(400);
  for (const r of await summarize(ids)) {
    console.log(`${r.id}\t${r.year}\t${r.journal.slice(0, 38)}\t${r.title}`);
  }
}

// A status code is not verification: several hosts answer 200 with a shell, and
// others serve a real document that is the wrong document. Print the title so a
// human can see what actually came back.
async function check(urls) {
  for (const url of urls) {
    let res, body = '';
    try {
      res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
      body = await res.text();
    } catch (e) {
      console.log(`ERR  ---  ${url}\n     ${String(e.message).slice(0, 90)}`);
      continue;
    }
    const type = (res.headers.get('content-type') || '').split(';')[0];
    const m = /<title[^>]*>([\s\S]{0,300}?)<\/title>/i.exec(body);
    const flag = res.ok ? 'OK ' : 'BAD';
    console.log(`${flag} ${res.status}  ${type.padEnd(26)} ${String(body.length).padStart(8)}B  ${url}`);
    if (m) console.log(`            title: ${clean(m[1]).slice(0, 140)}`);
    if (res.url && res.url.replace(/\/$/, '') !== url.replace(/\/$/, '')) {
      console.log(`            -> ${res.url}`);
    }
    // A .pdf URL answered as HTML is a bot wall handing back a page, and an
    // HTML-sized "PDF" is a lying server. Both are in CLAUDE.md's trap list.
    if (/\.pdf($|\?)/i.test(url) && type.includes('html')) {
      console.log('            NOTE: .pdf served as HTML — likely a bot wall, not the file');
    }
  }
}

// E-utilities renders subscripts as parenthesized digits, so a paper titled with
// CO₂ comes back as "CO(2)" and LiNi₀.₅Mn₁.₅O₄ as "LiNi(0.5)Mn(1.5)O(4)". Undo
// that before comparing, or every chemistry citation reports a false mismatch.
// The leading \s* matters: the spacing is inconsistent upstream, and "CO (2)"
// against a correct "CO2" was still reported as a mismatch until it was added.
const norm = s => (s || '')
  .replace(/\s*\((\d[\d.]*)\)/g, '$1')
  .toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

// Reads every citation back out of the sheets and confirms the id exists and the
// title matches. This is the step that catches a transposed digit, which is
// otherwise invisible because the wrong article is still a real article.
//
// Deliberately does NOT fetch the non-PMC links: links.js already checks those
// every month and grades them properly, distinguishing a dead page from a bot
// wall, which this would not. Re-fetching ~950 further-reading URLs here would
// take minutes and report worse answers. Pass --fetch-others to do it anyway.
async function verify(only, fetchOthers) {
  const dir = path.join(__dirname, '..', 'sheets');
  const slugs = fs.readdirSync(dir).filter(s =>
    fs.existsSync(path.join(dir, s, 'sheet.json')) && (!only || s === only));
  const cites = [], missing = [];

  for (const slug of slugs) {
    const edir = path.join(dir, slug, 'entries');
    if (!fs.existsSync(edir)) continue;
    for (const f of fs.readdirSync(edir).filter(x => x.endsWith('.md')).sort()) {
      const rel = `sheets/${slug}/entries/${f}`;
      const body = fs.readFileSync(path.join(edir, f), 'utf8');
      const sec = /## Further reading\s*\n+(.+)/.exec(body);
      if (!sec) { missing.push(rel); continue; }
      for (const m of sec[1].matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
        cites.push({ file: rel, title: m[1], url: m[2] });
      }
    }
  }

  const pmc = cites.filter(c => c.url.includes('pmc.ncbi.nlm.nih.gov'));
  const other = cites.filter(c => !c.url.includes('pmc.ncbi.nlm.nih.gov'));
  console.log(`${cites.length} citations across ${slugs.length} sheets: ${pmc.length} PMC, ${other.length} other`);
  if (missing.length) console.log(`${missing.length} entries with no Further reading section`);

  let bad = 0;
  if (pmc.length) {
    const ids = pmc.map(c => (/PMC(\d+)/.exec(c.url) || [])[1]);
    const got = new Map((await summarize(ids.filter(Boolean))).map(r => [r.id, r.title]));
    pmc.forEach((c, i) => {
      const real = got.get('PMC' + ids[i]);
      if (!real) { console.log(`\nMISSING  PMC${ids[i]}  ${c.file}`); bad++; return; }
      // Compare the title without the "(Publisher)" suffix the sheets append.
      const w = norm(c.title.replace(/\s*\([^)]*\)\s*$/, '')), r = norm(real);
      if (w && r && (r.includes(w) || w.includes(r) || w.slice(0, 60) === r.slice(0, 60))) return;
      console.log(`\nTITLE MISMATCH  PMC${ids[i]}  ${c.file}`);
      console.log(`   sheet: ${c.title}`);
      console.log(`   real : ${real}`);
      bad++;
    });
    console.log(`\nPMC: ${pmc.length - bad} verified, ${bad} problems`);
  }

  if (other.length && !fetchOthers) {
    console.log(`\n${other.length} non-PMC links not fetched — that is links.js's job, which grades them.`);
    console.log('Pass --fetch-others to check them here anyway.');
  } else if (other.length) {
    console.log('\nnon-PMC links:');
    for (const c of other) {
      let status = 'ERR';
      try {
        const r = await fetch(c.url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
        status = String(r.status);
        if (!r.ok) bad++;
      } catch { bad++; }
      console.log(`  ${status}  ${c.url}\n        ${c.title}`);
    }
  }

  if (bad) process.exitCode = 1;
}

const argv = process.argv.slice(2);
const fetchOthers = argv.includes('--fetch-others');
const [mode, ...rest] = argv.filter(a => a !== '--fetch-others');
const usage = 'usage: cite.js search "<query>" [n] | check <url>... | ' +
  'verify [sheet-slug] [--fetch-others]';
(async () => {
  if (mode === 'search') await search(rest[0], Number(rest[1]) || 6);
  else if (mode === 'check') await check(rest);
  else if (mode === 'verify') await verify(rest[0], fetchOthers);
  else { console.error(usage); process.exitCode = 2; }
})();
