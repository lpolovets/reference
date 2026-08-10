# Reference Sheets

Markdown-driven reference dashboards (energy, robotics and manufacturing, defense and aerospace) rendered as searchable, filterable static sites from a shared engine.

- **Live site**: https://humbaventures.com/reference/ — GitHub Pages, redeploys automatically on every push to `main` (repo is `lpolovets/reference`; Pages mounts at `/reference/`). Each sheet builds into its own subdirectory (`/reference/manufacturing-processes/`, `/reference/battery-chemistries/`); the root is a landing page indexing all sheets.
- **claude.ai artifact**: a copy of the manufacturing sheet at https://claude.ai/code/artifact/af9b8583-110f-42ce-b2dc-29326b27b24d. It never updates automatically — rebuild with `--artifact manufacturing-processes` and republish `dist/manufacturing-processes.artifact.html` via the Artifact tool (pass this URL as `url` from a session that didn't originally publish it).

## Writing style (important)

All prose (entry sections, guide.html, h2h.html, blurbs, ledes) must follow **STYLE.md** — Leo's plain, engineer-explaining-to-a-friend voice, not default AI style. Read STYLE.md before writing or editing any prose. Quick version: plain declarative sentences, concrete numbers, if/then advice, honest hedging ("usually", "roughly"); no aphoristic em-dash flourishes, dramatic vocabulary, or "not X — but Y" constructions.

## Workflow rule (important)

**Review-then-push.** Make changes locally, demonstrate them (screenshot or local preview), and only commit/push/republish after Leo explicitly approves. A request to change something is not approval to publish it. One approval covers one push.

## Layout

- `sheets/<slug>/` — one directory per reference sheet:
  - `sheet.json` — all sheet config: titles, lede, unit words, group label, the seven parts/classes (each part takes an optional `blurb` — a short lowercase purpose phrase, under ~55 chars, shown on its explorer tile; avoid raw `&`, it's injected unescaped), and **facet definitions** (`id`, frontmatter `key`, `label`, `type` multi|range|single, `color` var, `options`, `order`, optional `chipLabels`/`tagPrefix`/`tip`/`required`/`tagRow`), plus `extraSections` mapping optional markdown sections to card labels.
  - `entries/NNN-slug.md` — one file per entry. Frontmatter: `number`, `name`, `part`, `group`, plus one key per facet (keys validated against sheet.json). Sections: `## Description`, `## Strengths and weaknesses`, `## When to use` (prescriptive: when to pick it, when to avoid it, and the usual alternative; present on all entries since 2026-07-25), then optional `## Variants` (with `###` entries), `## Videos`, and the sheet's remaining extra sections (`## Examples`, `## Economic profile`).
  - `guide.html` — the sheet's guide-tab content (raw HTML fragment using shared classes: `.tblwrap`, `.bands`, `.callout`, `.qlist`). Ends with a **Glossary**: a `.tblwrap` table of 12–18 alphabetical terms drawn from the sheet's own entries, each defined in 1–3 plain sentences.
  - `h2h.html` — the "Head-to-head" tab. Opens with one comparison table of the 5–8 high-level options that actually compete, then **2–3 further tables covering the sub-decisions within a class** (a single top-level table is too coarse on its own). Every table ends with a "Pick it when" column (last `<td>` renders muted; first `<td>` is bold/nowrap so keep row names short) and carries real numbers in the middle columns. Optional file: if absent the tab is omitted (tab label via `h2hTab` in sheet.json, default "Head-to-head"). Uses the same shared classes as guide.html — the view reuses `class="guide"` styling.
  - `images/NNN.jpg` (optional) — per-entry illustration keyed by zero-padded entry number (.jpg/.png/.webp); rendered at the top of the card body on the website flavor only (the artifact blocks external requests).
  - `images/prompts.json` (optional) — the generation prompts for that sheet's illustrations, so the set is reproducible: `{"anchor": <entry number>, "style": "<optional override>", "prompts": {"1": "...", ...}}`. Consumed by `build/generate-images.js`; the build copies only image files out of `images/`, never this.
- `shared/` — everything common: `theme.css` (all styling, inlined into every page at build), `page.html` (skeleton with `{{...}}` placeholders), `app.js` (the generic explorer engine, driven by an injected `SHEET` config), `logo.html`.
- `build/build.js` — plain-Node build; auto-discovers `sheets/*/sheet.json`.
- `.github/workflows/pages.yml` — build + deploy on push.

## Build

```bash
node build/build.js                    # -> site/<slug>/ per sheet (page + data.json) + site/index.html landing
node build/build.js --artifact <slug>  # -> dist/<slug>.artifact.html (fragment for the claude.ai artifact)
node build/build.js --check            # validate every sheet, write nothing
```

No dependencies. The build validates frontmatter and video lines and fails naming the offending file. `--check` runs exactly those validations and writes nothing, which is what to use when several agents are editing entries in parallel (a full build would have them racing on `site/`). Verify UI changes by serving `site/` locally (there's a `.claude/launch.json` "site" config on port 8741) and loading `/<slug>/` (add a throwaway `?v=` query when re-testing — the preview browser caches hard).

## Conventions and gotchas

- **Adding a sheet**: create `sheets/<slug>/{sheet.json,guide.html,entries/}`; the build and landing page pick it up automatically. Reuse `--p1..--p7` for part colors and `--fa..--fe` for facet colors (blue/gold/red/green/purple — all defined once in `shared/theme.css` for both themes; add a new var there if a sheet needs a sixth facet).
- **Facet types**: `multi` = array field, one tag per value; `range` = ordered array collapsed to a "Prefix: First–Last" tag (labels must be single words or the dash collapse reads badly); `single` = scalar, `none`/omitted allowed unless `required` (no tag rendered when absent, and entries without it match only when that facet filter is empty).
- **`tagRow: 2`** on a facet puts its card tags on their own second line under the others, right-aligned to match (battery-chemistries uses it for applications). Facets without it share the first row with the expand caret.
- **Shared style**: all styling lives in `shared/theme.css` and is inlined into every page at build — edit it once and every sheet (and the landing page) changes together. Keep the label column (`.facet .flabel`, 108px) wide enough for the longest facet label across all sheets; long labels wrap badly otherwise.
- **Further reading**: 1–2 links per entry in a `## Further reading` section (last extra section), one line, links `[Title (Publisher)](url)` separated by " · ". Policy: canonical sources only — institutional reports, trade-association primers, vendor *educational* content, open-access reviews; one practical + one deep link where both exist; **every URL must be fetch-verified live before inclusion**; skip the section rather than pad (deliberately empty as of 2026-08-09: manufacturing 025 slush casting only — the other three long-standing gaps were filled that day from NPTEL lecture PDFs, an EPA AP-42 section, American Machinist, IIBEC, and The Fabricator; slush casting still has no canonical source, only anonymous reference sites, a paywalled ASTM ingot spec, and a `vlabs.ac.in` page whose TLS certificate has expired). Known bot-blockers that still work in browsers: ASM Digital Library, Edmund Optics, COBOD, Panasonic PDFs, **The Fabricator** (Cloudflare interstitial to every fetcher; verify its articles by loading them in the browser pane). Sites that block fetchers entirely (avoid): ScienceDirect, Wiley, MDPI direct (use PMC mirrors), ACS, RSC, NRC, IAEA PDFs, SemiEngineering, NDE-Ed.org, automate.org, Festo, `crsreports.congress.gov`, `sto.nato.int`, `dosits.org`, `analog.com`, `defence.gov.au`, and most `.mil` hosts (`af.mil`, `army.mil`, `navair.navy.mil`, `navsea.navy.mil`, `defense.gov`).
- **Verifying a link is not the same as verifying a status code.** Two traps found on 2026-07-26 while building the defense sheets:
  - `ntrs.nasa.gov/citations/<id>` returns HTTP 200 for *any* id, because the page is a client-rendered shell. Check the id against the JSON API instead: `curl https://ntrs.nasa.gov/api/citations/<id>` returns `{"statusCode":404}` for a bad id and a document with a `title` for a good one. Find real citations with `https://ntrs.nasa.gov/api/citations/search?q=<terms>&size=5` and copy the returned title verbatim.
  - `apps.dtic.mil` has been serving an "Under Maintenance" page, so DTIC accession numbers cannot be verified at all right now. Don't cite DTIC until it is back.
  - Titles matter as much as URLs. After fixing URLs, fetch each page's `<title>` and make sure the link text matches what the page actually is — a generic index page must be labelled as one ("Research publications (RUSI)"), not as a specific paper.
- **CRS reports**: cite them through `https://www.everycrsreport.com/reports/<NUM>.html`, which is fetchable and carries the report title in `<title>`. `crsreports.congress.gov` returns 403 to every fetcher, so a link there can never be verified — and report numbers are easy to guess wrong (several plausible-looking `IF#####` numbers turned out to be reports about unrelated subjects).
- **Key numbers**: every entry carries a `## Key numbers` section right after `## When to use` — one line, 4–7 quantities separated by ` · `, no prose sentences. It should restate the numbers already in the entry's other sections rather than introduce new claims, so it never contradicts them. Which quantities suit which sheet is a per-sheet decision (tolerance/finish/lot size/tooling cost for manufacturing; Wh/kg, cycle life, $/kWh for batteries; endurance/range/payload/unit cost for uncrewed systems).
- **Videos**: max 3 per entry, format `- <YouTube watch URL> — Title (Channel, N minutes, band+ views)`. Policy: embeddable, playable, not live, ~1.5–20 min (≥1 min for popular animations), prefer popular/maker-community explainers; leave the section out if nothing good exists. View bands: 1k/5k/10k/50k/100k/500k/1m/5m, or "under 1k views".
- **Fetching YouTube metadata**: use `build/yt.js`, never a hand-written line.
  ```bash
  node build/yt.js search "how a molten salt reactor works" --n 12   # candidates, duration-filtered
  node build/yt.js line 6v35VrNMfaU                                  # verified markdown line, or REJECT
  ```
  `line` re-reads the title, channel, duration, and view count from YouTube and prints the exact line to paste, so a hallucinated or mistyped id fails loudly. It appends `# check length` when a video sits outside the comfortable duration band — decide, then delete the comment.
- **Video link rot**: `node build/yt.js audit [sheet-slug]` re-checks every video already stored in the entries and reports `GONE` (deleted, private, or embedding switched off) and `RETITLED` (the stored title no longer matches the live one). Exits non-zero when anything is gone, so the monthly link-rot routine can run it alongside the further-reading check.
- **The YouTube endpoints each answer half the question.** Watch pages captcha-block curl. The innertube `search` endpoint works fine. The `player` endpoint now returns `playabilityStatus: UNPLAYABLE` for *every* anonymous caller because the streaming URLs are bot-gated, so **its status field is useless** — but the `videoDetails` it returns (duration, view count, live flag) are still correct. Availability and embeddability come from oEmbed instead, which 400s on a dead, private, or embed-disabled id. `yt.js` combines the two; if YouTube tightens further, that function is the thing to fix.
- **Illustrations**: `build/generate-images.js` is sheet-driven off `sheets/<slug>/images/prompts.json`.
  ```bash
  node build/generate-images.js anchor nuclear-reactors    # the style-anchor image
  node build/generate-images.js batch nuclear-reactors 2   # 2 candidates per entry, conditioned on the anchor
  node build/generate-images.js edit <png> "<instruction>"  # cheap targeted iteration
  ```
  Output goes to a scratch dir (printed on start, override with `$IMG_OUT`), never straight into the repo — **every image gets human eyes before it is copied to `sheets/<slug>/images/NNN.jpg`**. The Gemini key is read from `../.gemini_api_key`, one level ABOVE the repo root; never commit it. All sheets share one house style so the illustrations look like a set; a sheet can override it via `"style"` in its prompts.json. Image-edit mode is much cheaper than regenerating. Prompt-writing lesson from robot-end-effectors: name the one piece of geometry that identifies the subject, and for anything gripping or holding, ask explicitly for a side view with the object clearly lifted, or the model draws it resting on a surface.
- **Artifact flavor must stay pure ASCII** (the artifact host serves no charset header); the build escapes this automatically. The artifact also blocks all external requests — video embeds degrade to links there (`EMBED_OK` flag).
- **Theme**: site defaults to dark via a pre-paint inline script + localStorage; the Light/Dark chip is website-only (the artifact viewer has its own theme control).
- **CSS trap**: `nav.tabs button` styles bleed into any button added to the tab bar — exclude additions via `:not()`.
- **Anchors**: each card's `id` is its name slugified (same slug as its filename); `#slug` deep links open and scroll to the card. Renaming an entry changes its slug and breaks old links.
- Header stats (entry/part/group counts) and the copyright year are computed at build time.
- **Landing page**: sheets group under `category` headings from sheet.json (order = first appearance across the alphabetized sheet list; current categories are Energy, Defense and Aerospace, Robotics and Manufacturing); cards show `question` (italic accent line), `blurb`, and entry count. A global search box (shared/landing.js, inlined at build) lazily fetches every sheet's `data.json` on first focus and searches names/groups/parts/card text across all sheets, linking to `<slug>/#<anchor>`.
- **Filter-state URLs**: the explorer mirrors its state into the query string (`p` = part ids, one param per facet id with comma-joined option keys, `q` = search, `sort` = sort id, `dir=desc`) via history.replaceState, and restores it on load — filtered views are shareable links. "Reset filters" clears filters but deliberately keeps the sort.
- **Sorting**: the sort dropdown offers Catalog order, Name, and every ordered non-multi facet (auto-derived per sheet); an asc/desc toggle appears when sorting. Sorted views render flat (no group headers); entries lacking the facet always sort last. Range facets sort by their highest band.
- **Group blurbs**: sheet.json `groupBlurbs` maps every group name to a short purpose phrase shown in the list group headers (hidden on mobile); the build fails if the map and the entries' group names don't match exactly. Class-level `blurb`s appear on the part tiles only.
- **Logo link**: the Humba logo links to the reference-sheets landing page, not humbaventures.com. `shared/logo.html` carries `{{HOME_HREF}}`/`{{HOME_EXTRA}}` placeholders filled per flavor by `logoFor()` in build.js: sheet pages `../`, landing `./`, artifact absolute URL with `target="_blank"`.
