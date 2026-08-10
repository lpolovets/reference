// ---------------- APP ----------------
// Generic explorer engine. The build injects:
//   SHEET    - config: unit, groupLabel, parts, facets
//   P        - entries: {n, p, g, name, d, sw, f:{facetId: value|[values]}, v?, vid?, extra?}
//   EMBED_OK - false in the claude.ai artifact flavor (no external requests)
const state = { q:"", parts:new Set(), f:{}, sort:"", dir:1 };
SHEET.facets.forEach(f => state.f[f.id] = new Set());
// Sortable dimensions: catalog order, name, and any ordered non-multi facet.
const SORTS = [["","Catalog order"],["name","Name"]]
  .concat(SHEET.facets.filter(f=>f.order && f.type!=="multi").map(f=>[f.id, f.label]));
const $ = id => document.getElementById(id);
// Card markup lives in render.js, which the build also uses to prerender the
// list into the page. Same code both sides, so a re-render cannot disagree with
// what shipped in the HTML.
const R = makeRenderer(SHEET, EMBED_OK);
const esc = R.esc, slug = R.slug;

// Precompute search haystack
P.forEach(x => {
  x._hay = (x.n+" "+x.name+" "+x.g+" "+x.d+" "+x.sw+" "+
    (x.extra ? x.extra.map(e=>e[1]).join(" ") : "")+" "+
    (x.v ? x.v.map(v=>v.t+" "+v.d).join(" ") : "")).toLowerCase();
});

// How options inside one facet combine is decided by the facet's type, because
// the data decides it: a multi facet is a set of independent tags an entry can
// carry several of, so picking two means "carries both" and each pick narrows.
// A single facet holds one scalar and a range facet holds one span, so there
// picking two can only ever mean "either", and each pick widens.
// skip drops a facet from the test, which the chip counts need for the widening
// kind — see updateChipCounts.
function matchesExcept(x, skip){
  if(state.parts.size && !state.parts.has(x.p)) return false;
  for(const facet of SHEET.facets){
    if(facet.id===skip) continue;
    const set = state.f[facet.id];
    if(!set.size) continue;
    const val = x.f[facet.id];
    if(facet.type==="single"){ if(!(val && set.has(val))) return false; }
    else if(facet.type==="multi"){
      for(const k of set) if(!(val && val.indexOf(k)>-1)) return false;
    }
    else if(!(val && val.some(v=>set.has(v)))) return false;
  }
  if(state.q && !x._hay.includes(state.q)) return false;
  return true;
}
const narrows = facet => facet.type==="multi";
const matches = x => matchesExcept(x, null);
// Sort is deliberately excluded: "Reset filters" keeps it, so it isn't a filter.
const filtered = () => !!state.q || state.parts.size > 0 ||
  SHEET.facets.some(f=>state.f[f.id].size > 0);
function hasOption(x, facet, k){
  const val = x.f[facet.id];
  return facet.type==="single" ? val===k : !!(val && val.indexOf(k)>-1);
}

// ----- filter-state URLs: the query string mirrors filters, search, and sort -----
function syncURL(){
  try{
    const sp = new URLSearchParams();
    if(state.parts.size) sp.set("p", [...state.parts].sort((a,b)=>a-b).join(","));
    SHEET.facets.forEach(f=>{
      const set = state.f[f.id];
      if(set.size) sp.set(f.id, (f.order||Object.keys(f.options)).filter(k=>set.has(k)).join(","));
    });
    if(state.q) sp.set("q", state.q);
    if(state.sort){ sp.set("sort", state.sort); if(state.dir<0) sp.set("dir","desc"); }
    const qs = sp.toString().replace(/%2C/g, ",");  // literal commas read better in shared links
    history.replaceState(null,"", location.pathname+(qs?"?"+qs:"")+location.hash);
  }catch(e){}
}
function readURL(){
  try{
    const sp = new URLSearchParams(location.search);
    (sp.get("p")||"").split(",").forEach(v=>{
      const id = +v; if(SHEET.parts.some(pt=>pt.id===id)) state.parts.add(id);
    });
    SHEET.facets.forEach(f=>{
      (sp.get(f.id)||"").split(",").forEach(k=>{ if(f.options[k]) state.f[f.id].add(k); });
    });
    state.q = (sp.get("q")||"").trim().toLowerCase();
    const srt = sp.get("sort")||"";
    if(SORTS.some(([id])=>id===srt)) state.sort = srt;
    if(sp.get("dir")==="desc") state.dir = -1;
  }catch(e){}
}
readURL();

// ----- sorting -----
function sortVal(x, fid){
  const facet = SHEET.facets.find(f=>f.id===fid);
  const v = x.f[fid];
  if(v==null || (Array.isArray(v) && !v.length)) return null;
  return Array.isArray(v) ? Math.max.apply(null, v.map(k=>facet.order.indexOf(k))) : facet.order.indexOf(v);
}
function sorted(hits){
  if(state.sort==="name")
    return hits.slice().sort((a,b)=>a.name.localeCompare(b.name)*state.dir || a.n-b.n);
  return hits.slice().sort((a,b)=>{
    const ka = sortVal(a, state.sort), kb = sortVal(b, state.sort);
    if(ka===null && kb===null) return a.n-b.n;
    if(ka===null) return 1;            // entries without the facet always sink
    if(kb===null) return -1;
    return (ka-kb)*state.dir || a.n-b.n;
  });
}

// Every chip carries the number of entries it would leave visible, so narrowing a
// long sheet stops being trial and error. Cheap enough to redo on every render:
// one pass over the entries per facet, and no sheet is near a size where that shows.
//
// The base set depends on how the facet combines. A narrowing facet keeps its own
// selection applied, because each further pick is another constraint and the count
// is then literally "click me and you will have N left". A widening facet has to
// drop its own selection, or picking one band would read every unselected sibling
// as zero when in fact they would each add entries back.
function updateChipCounts(){
  SHEET.facets.forEach(facet=>{
    const base = P.filter(x=>matchesExcept(x, narrows(facet) ? null : facet.id));
    document.querySelectorAll("#facet-"+facet.id+" .fchip").forEach(chip=>{
      const n = base.reduce((a,x)=>a+(hasOption(x, facet, chip.dataset.k)?1:0), 0);
      chip.querySelector(".fn").textContent = n;
      chip.classList.toggle("zero", n===0);
      chip.setAttribute("aria-label", chip._label+", "+n+" matching");
    });
  });
}

// The website build ships #list already rendered, in catalog order with nothing
// filtered, so the first render can leave the DOM alone unless the URL asked for
// a different view. That saves rebuilding every card on load and, more visibly,
// avoids throwing away markup the reader is already looking at. The artifact
// flavor is not prerendered, and says so, or its list would never be drawn.
let prerendered = PRERENDERED;

function render(){
  let hits = P.filter(matches);
  if(state.sort) hits = sorted(hits);
  const keepPrerendered = prerendered && !state.sort && hits.length === P.length;
  prerendered = false;
  if(!keepPrerendered) $("list").innerHTML = R.listHTML(hits, !state.sort);
  $("empty").hidden = hits.length>0;
  $("resCount").textContent = $("rbCount").textContent = hits.length+" / "+P.length;
  $("rbReset").hidden = !filtered();
  updateChipCounts();
  syncURL();
  // part tile counts + pressed state
  SHEET.parts.forEach(part=>{
    const t = document.querySelector('.ptile[data-p="'+part.id+'"]');
    if(!t) return;
    const c = hits.filter(h=>h.p===part.id).length;
    t.querySelector(".pc").textContent = c+" of "+P.filter(h=>h.p===part.id).length;
    t.setAttribute("aria-pressed", state.parts.has(part.id) ? "true" : "false");
  });
}

// ----- build part tiles -----
$("partTiles").innerHTML = SHEET.parts.map(part=>
  '<button class="ptile" data-p="'+part.id+'" style="--pc:'+part.color+'" aria-pressed="false">'+
  '<span class="pn">'+SHEET.groupLabel+' '+part.roman+'</span>'+
  '<span class="pt" style="display:block">'+part.name+'</span>'+
  (part.blurb ? '<span class="pb" style="display:block">'+part.blurb+'</span>' : '')+
  '<span class="pc"></span></button>').join("");
$("partTiles").addEventListener("click", e=>{
  const t = e.target.closest(".ptile"); if(!t) return;
  const id = +t.dataset.p;
  state.parts.has(id) ? state.parts.delete(id) : state.parts.add(id);
  render();
});

// ----- build facet chips -----
SHEET.facets.forEach(facet=>{
  const el = $("facet-"+facet.id);
  const keys = facet.order || Object.keys(facet.options);
  const labels = facet.chipLabels || facet.options;
  const set = state.f[facet.id];
  el.innerHTML = keys.map(k=>
    '<button class="fchip" data-k="'+k+'" aria-pressed="'+(set.has(k)?"true":"false")+'">'+labels[k]+
    '<span class="fn" aria-hidden="true"></span></button>').join(" ");
  // Stash the plain label so the count can be folded into an aria-label later
  // without re-reading the chip's markup.
  el.querySelectorAll(".fchip").forEach(c=>{ c._label = labels[c.dataset.k]; });
  el.addEventListener("click", e=>{
    const c = e.target.closest(".fchip"); if(!c) return;
    const k = c.dataset.k;
    set.has(k) ? set.delete(k) : set.add(k);
    c.setAttribute("aria-pressed", set.has(k) ? "true" : "false");
    render();
  });
});

// ----- facet tooltips: open upward when there is no room below -----
// The longest tips run past 300px, and the filter panel sits low enough on a
// laptop that the bottom rows would otherwise open off the screen. CSS cannot
// ask whether a box fits, so measure on the way in — display is toggled rather
// than read, because the hover rule may not have applied yet.
document.querySelectorAll(".tipwrap").forEach(w=>{
  const place = ()=>{
    const body = w.querySelector(".tipbody");
    w.classList.remove("up");
    const prev = body.style.display;
    body.style.display = "block";
    const h = body.offsetHeight;
    body.style.display = prev;
    const r = w.getBoundingClientRect();
    // Only flip when there is actually room above; overflowing the bottom of a
    // scrollable page beats overflowing the top of it.
    if(h > innerHeight - r.bottom - 16 && r.top > h + 16) w.classList.add("up");
  };
  w.addEventListener("mouseenter", place);
  w.addEventListener("focusin", place);
});

// ----- search -----
$("q").value = state.q;
let qt;
$("q").addEventListener("input", e=>{
  clearTimeout(qt);
  qt = setTimeout(()=>{ state.q = e.target.value.trim().toLowerCase(); render(); }, 120);
});
// The box is a plain div rather than a label, because the "/" badge is a button
// and a label would swallow its clicks. Clicking the padding still focuses.
document.querySelector(".search").addEventListener("click", e=>{
  if(!e.target.closest("#kbdHint")) $("q").focus();
});

// ----- sort control -----
const sortSel = $("sortSel"), sortDir = $("sortDir");
sortSel.innerHTML = SORTS.map(([id,label])=>
  '<option value="'+id+'"'+(state.sort===id?" selected":"")+'>'+esc(label)+'</option>').join("");
function updDir(){
  sortDir.hidden = !state.sort;
  sortDir.textContent = state.dir>0 ? "↑ asc" : "↓ desc";
}
updDir();
sortSel.addEventListener("change", ()=>{ state.sort = sortSel.value; state.dir = 1; updDir(); render(); });
sortDir.addEventListener("click", ()=>{ state.dir *= -1; updDir(); render(); });

// ----- clear -----
function clearFilters(){
  state.q=""; $("q").value="";
  state.parts.clear();
  Object.values(state.f).forEach(s=>s.clear());
  document.querySelectorAll(".fchip[aria-pressed='true']").forEach(c=>c.setAttribute("aria-pressed","false"));
  render();
}
$("clearAll").addEventListener("click", clearFilters);

// ----- sticky results bar -----
// Once the filter panel is off the top of the screen the count and the reset go
// with it, which is exactly when a reader 150 entries down wants them.
const resBar = $("resBar"), filterPanel = document.querySelector(".filters");
function updBar(){
  const show = $("view-explorer").classList.contains("active") &&
    filterPanel.getBoundingClientRect().bottom < 4;
  resBar.classList.toggle("show", show);
  resBar.setAttribute("aria-hidden", show ? "false" : "true");
}
let barPending = 0;
addEventListener("scroll", ()=>{
  if(barPending) return;
  barPending = requestAnimationFrame(()=>{ barPending = 0; updBar(); });
}, {passive:true});
addEventListener("resize", updBar);
$("rbReset").addEventListener("click", clearFilters);
$("rbTop").addEventListener("click", ()=>window.scrollTo({top:0, behavior:"smooth"}));

// ----- single-player policy: pause every other video when one plays -----
function pauseOtherVideos(except){
  document.querySelectorAll(".vid iframe").forEach(f=>{
    if(f===except || !f.contentWindow) return;
    try{ f.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo",args:[]}),"*"); }catch(err){}
  });
}
window.addEventListener("message", e=>{
  if(e.origin!=="https://www.youtube-nocookie.com" && e.origin!=="https://www.youtube.com") return;
  let d; try{ d = JSON.parse(e.data); }catch(err){ return; }
  if(d && d.info && d.info.playerState===1){ // 1 = playing
    const frames = document.querySelectorAll(".vid iframe");
    for(const f of frames){
      if(f.contentWindow===e.source){ pauseOtherVideos(f); break; }
    }
  }
});

// ----- expand / collapse -----
$("list").addEventListener("click", e=>{
  const shot = e.target.closest(".cimglink");
  if(shot){
    // The link points at the image file, which is what happens without JS.
    // With JS, show it in place instead of navigating away from the card.
    e.preventDefault();
    openLightbox(shot.getAttribute("href"), shot.querySelector("img").getAttribute("alt"), shot);
    return;
  }
  const play = e.target.closest(".vplay");
  if(play){
    const id = play.dataset.vid;
    pauseOtherVideos(null);
    const frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&enablejsapi=1";
    frame.allow = "autoplay; encrypted-media; picture-in-picture";
    frame.allowFullscreen = true;
    frame.addEventListener("load", ()=>{
      try{ frame.contentWindow.postMessage(JSON.stringify({event:"listening",id:id,channel:"widget"}),"*"); }catch(err){}
    });
    play.replaceWith(frame);
    return;
  }
  const h = e.target.closest(".chead"); if(!h) return;
  const card = h.parentElement;
  const open = card.classList.toggle("open");
  h.setAttribute("aria-expanded", open ? "true" : "false");
  try{
    if(open) history.replaceState(null,"","#"+card.id);
    else if(location.hash==="#"+card.id) history.replaceState(null,"",location.pathname+location.search);
  }catch(err){}
});
$("expandAll").addEventListener("click", ()=>{
  document.querySelectorAll("#list .card").forEach(c=>{c.classList.add("open");c.querySelector(".chead").setAttribute("aria-expanded","true");});
});
$("collapseAll").addEventListener("click", ()=>{
  document.querySelectorAll("#list .card").forEach(c=>{c.classList.remove("open");c.querySelector(".chead").setAttribute("aria-expanded","false");});
});

// ----- theme toggle (website flavor only; the artifact viewer has its own) -----
if(EMBED_OK){
  const nav = document.querySelector("nav.tabs");
  const tb = document.createElement("button");
  tb.className = "themebtn";
  tb.setAttribute("aria-label", "Toggle light/dark theme");
  tb.innerHTML = '<svg class="i-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg>'+
    '<svg class="i-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"/></svg>'+
    '<span class="tl-light">Light</span><span class="tl-dark">Dark</span>';
  tb.addEventListener("click", ()=>{
    const next = document.documentElement.getAttribute("data-theme")==="dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try{ localStorage.setItem("theme", next); }catch(e){}
  });
  nav.appendChild(tb);
}

// ----- tabs -----
// Each tab is bookmarkable as #tab-<slugified label>, e.g. #tab-process-explorer.
// The "tab-" prefix keeps these out of the way of card anchors, which are bare
// name slugs (#sand-casting) and could otherwise collide with a tab label.
const tabs = [["tab-explorer","view-explorer"],["tab-guide","view-guide"],["tab-h2h","view-h2h"]]
  .filter(([tid])=>$(tid))
  .map(([tid,vid])=>[tid,vid,"tab-"+slug($(tid).textContent)]);
function showTab(tid, setHash){
  const tab = tabs.find(([t])=>t===tid);
  tabs.forEach(([t2,v2])=>{
    $(t2).setAttribute("aria-selected", t2===tid ? "true" : "false");
    $(v2).classList.toggle("active", t2===tid);
  });
  if(setHash){
    try{ history.replaceState(null,"",location.pathname+location.search+"#"+tab[2]); }catch(e){}
  }
  window.scrollTo({top:0});
  updBar();
}
tabs.forEach(([tid])=>{
  $(tid).addEventListener("click", ()=>showTab(tid, true));
});
// Returns true when the hash named a tab, so the card deep-link handler can skip it.
function openTabFromHash(){
  const h = decodeURIComponent(location.hash.slice(1));
  if(!h) return false;
  const tab = tabs.find(([,,hash])=>hash===h);
  if(!tab) return false;
  showTab(tab[0], false);
  return true;
}

// ----- illustration lightbox -----
const lightbox = $("lightbox");
let lbReturn = null;
function openLightbox(src, alt, from){
  $("lbImg").src = src;
  $("lbImg").alt = alt || "";
  $("lbCap").textContent = (alt || "").replace(/ illustration$/, "");
  lbReturn = from || document.activeElement;
  lightbox.hidden = false;
  $("lbClose").focus();
}
function closeLightbox(){
  if(lightbox.hidden) return;
  lightbox.hidden = true;
  // Drop the source so a big image is not held decoded behind a hidden element.
  $("lbImg").removeAttribute("src");
  if(lbReturn && lbReturn.focus) lbReturn.focus();
  lbReturn = null;
}
$("lbClose").addEventListener("click", closeLightbox);
// Anywhere outside the image closes, which is what the zoom-out cursor promises.
lightbox.addEventListener("click", e=>{ if(!e.target.closest(".lbinner") || e.target === $("lbClose")) closeLightbox(); });

// ----- keyboard shortcuts -----
// The card headers are already buttons, so Tab, Enter and Space work without any
// help. What this adds is a list cursor: j/k step between headers from anywhere,
// and the arrow keys join in only once a header holds focus, so they keep
// scrolling the page the rest of the time.
const kbdModal = $("kbdModal");
let kbdReturn = null;
function showHelp(on){
  if(on){
    kbdReturn = document.activeElement;
    kbdModal.hidden = false;
    $("kbdClose").focus();
  } else {
    kbdModal.hidden = true;
    if(kbdReturn && kbdReturn.focus) kbdReturn.focus();
    kbdReturn = null;
  }
}
$("kbdHint").addEventListener("click", ()=>showHelp(true));
$("kbdClose").addEventListener("click", ()=>showHelp(false));
kbdModal.addEventListener("click", e=>{ if(e.target===kbdModal) showHelp(false); });

function moveCard(step){
  if(!$("view-explorer").classList.contains("active")) return;
  const heads = [].slice.call(document.querySelectorAll("#list .card > .chead"));
  if(!heads.length) return;
  const cur = document.activeElement && document.activeElement.closest
    ? document.activeElement.closest(".chead") : null;
  const at = cur ? heads.indexOf(cur) : -1;
  const i = at < 0 ? (step > 0 ? 0 : heads.length-1)
    : Math.min(heads.length-1, Math.max(0, at+step));
  heads[i].focus({preventScroll:true});
  heads[i].parentElement.scrollIntoView({block:"nearest"});
}

const editing = el => !!el && (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable);
document.addEventListener("keydown", e=>{
  if(e.metaKey || e.ctrlKey || e.altKey) return;
  if(e.key==="Escape"){
    // Topmost first: the lightbox sits above the shortcuts panel.
    if(!lightbox.hidden){ e.preventDefault(); closeLightbox(); }
    else if(!kbdModal.hidden){ e.preventDefault(); showHelp(false); }
    else if(document.activeElement===$("q")){
      e.preventDefault();
      if($("q").value){ $("q").value=""; state.q=""; render(); }
      else $("q").blur();
    }
    return;
  }
  // Either overlay swallows the shortcuts: / and j/k would act on a list the
  // reader cannot see.
  if(!kbdModal.hidden || !lightbox.hidden || editing(e.target)) return;
  if(e.key==="/"){ e.preventDefault(); showTab("tab-explorer", true); $("q").focus(); $("q").select(); return; }
  if(e.key==="?"){ e.preventDefault(); showHelp(true); return; }
  const onHead = e.target.closest && e.target.closest(".chead");
  if(e.key==="j" || (e.key==="ArrowDown" && onHead)){ e.preventDefault(); moveCard(1); }
  else if(e.key==="k" || (e.key==="ArrowUp" && onHead)){ e.preventDefault(); moveCard(-1); }
});

render();
updBar();

// ----- deep links: open the entry named in the URL hash -----
try{
  if(location.pathname.endsWith("/index.html"))
    history.replaceState(null,"",location.pathname.slice(0,-10)+location.search+location.hash);
}catch(e){}
function openFromHash(){
  if(openTabFromHash()) return;
  const id = decodeURIComponent(location.hash.slice(1));
  if(!id) return;
  const card = document.getElementById(id);
  if(!card || !card.classList.contains("card")) return;
  // A card anchor can arrive while a different tab is showing (back/forward, or a
  // link followed from the guide), so switch to the explorer or the card stays hidden.
  showTab("tab-explorer", false);
  card.classList.add("open");
  card.querySelector(".chead").setAttribute("aria-expanded","true");
  card.scrollIntoView({block:"start"});
}
openFromHash();
window.addEventListener("hashchange", openFromHash);
