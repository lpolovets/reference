// One small line glyph per sheet, for the landing-page cards.
//
// Hand-authored SVG rather than generated raster, for the same reason
// build/icons.js hand-rolls the favicons: these are pure geometry at 22px, and
// a raster generator cannot hit a 1.5px stroke reliably or reproduce it when a
// sheet is renamed. They also have to be one file rather than a field in each
// sheet.json, because the set only works if it reads as a set — same viewBox,
// same stroke weight, same visual density. Twenty-four separate files would
// drift on all three.
//
// Rules that make one readable at 22px, learned by looking at them at 22px:
//   - one shape that carries the whole idea, no second subject
//   - nothing thinner than about 2 units of the 24-unit box
//   - no text, no fill except deliberate dots
//   - distinct SILHOUETTE, not distinct detail. Two circles and two rounded
//     rectangles all read as "blob" at this size, so neighbors in the same
//     category are deliberately pushed apart in outline.
'use strict';

// Everything inherits stroke from the wrapper, so a glyph is just its geometry.
// A dot has to opt out of that with its own fill/stroke.
const DOT = 'fill="currentColor" stroke="none"';

const GLYPHS = {
  // ---- Energy ----
  'battery-chemistries':
    '<rect x="2.5" y="8" width="15.5" height="9" rx="2"/>' +
    '<rect x="19" y="10.5" width="2.5" height="4" rx="1"/>' +
    '<path d="M5.5 12.5h5"/>',
  'carbon-capture-and-removal':
    '<path d="M3 19h18"/>' +
    '<path d="M12 3.5v10"/><path d="M8.5 10 12 13.5 15.5 10"/>' +
    '<path d="M5 6.5h2.5M16.5 6.5H19"/>',
  'energy-storage':
    '<rect x="3.5" y="3.5" width="17" height="17" rx="3.5"/>' +
    '<path d="M13.2 7.5 9 12.8h3l-1.2 3.7 4.2-5.3h-3z"/>',
  'grid-and-transmission':
    '<path d="M5.5 21 12 3l6.5 18"/>' +
    '<path d="M8.7 12.2h6.6"/><path d="M7.2 16.5h9.6"/>' +
    '<path d="M9.5 7.5h5"/>',
  // Two touching circles read as an infinity symbol at this size. Shrinking them
  // and lengthening the bond is what makes it a diatomic molecule instead.
  'hydrogen-and-efuels':
    '<circle cx="6.6" cy="12" r="2.9"/><circle cx="17.4" cy="12" r="2.9"/>' +
    '<path d="M9.5 12h5"/>',
  // Three orbits, not two. Two rotated ellipses overlap into a single almond
  // and the nucleus disappears inside it; the third crossing is what makes the
  // shape read as orbits around a center.
  'nuclear-reactors':
    '<ellipse cx="12" cy="12" rx="9.2" ry="3.4"/>' +
    '<ellipse cx="12" cy="12" rx="9.2" ry="3.4" transform="rotate(60 12 12)"/>' +
    '<ellipse cx="12" cy="12" rx="9.2" ry="3.4" transform="rotate(120 12 12)"/>' +
    '<circle cx="12" cy="12" r="2" ' + DOT + '/>',
  // A hub with three spokes is just a Y at 22px. The cooling tower's pinched
  // waist is the one silhouette nothing else in the set has, and it reads as a
  // power station immediately.
  'power-generation':
    '<path d="M7 20.5c0-6 2.2-8 2.8-13h4.4c.6 5 2.8 7 2.8 13z"/>' +
    '<path d="M9.8 7.5h4.4"/>' +
    '<path d="M9.5 4.2c1-1.4 4-1.4 5 0"/>',
  // A switching waveform. Nothing else in the set is an orthogonal stepped line,
  // so it stays distinct next to the battery rectangle and the grid pylon even
  // though all three sit in the Energy group. Drawn as one path with square
  // corners rather than a sine, because a sine at 22px is a wobble.
  'power-electronics':
    '<path d="M2.5 16.5v-9h5v9h5v-9h5v9h4"/>',

  // ---- Robotics and Manufacturing ----
  'manufacturing-processes':
    '<circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.8"/>' +
    '<path d="M12 7V3.5M12 17v3.5M17 12h3.5M7 12H3.5' +
    'M15.5 8.5 18 6M8.5 15.5 6 18M15.5 15.5 18 18M8.5 8.5 6 6"/>',
  'robot-actuators':
    '<rect x="2.5" y="9" width="10" height="6" rx="1.5"/>' +
    '<path d="M12.5 12h6"/><path d="M18.5 9.5v5"/>' +
    '<path d="M5.5 9v6"/>',
  // Fingers that end in horizontal stubs read as an anvil or a table. Angling
  // the tips inward is what makes the shape read as pinching something.
  'robot-end-effectors':
    '<path d="M12 3.2v3.3"/><path d="M6.8 6.5h10.4"/>' +
    '<path d="M8.6 6.5v6l2.2 1.8"/><path d="M15.4 6.5v6l-2.2 1.8"/>' +
    '<circle cx="12" cy="17.5" r="2.4"/>',
  'robot-sensors':
    '<rect x="9.5" y="16" width="5" height="4.5" rx="1"/>' +
    '<path d="M7.6 13.4a6.2 6.2 0 0 1 8.8 0"/>' +
    '<path d="M4.6 10.2a10.5 10.5 0 0 1 14.8 0"/>',

  // ---- Materials ----
  'critical-minerals':
    '<path d="M12 3 4.5 9.5 12 21l7.5-11.5z"/>' +
    '<path d="M4.5 9.5h15"/>' +
    '<path d="M9.2 9.5 12 21l2.8-11.5"/>',
  'engineering-materials':
    '<path d="M4.5 4.5h15"/><path d="M4.5 19.5h15"/><path d="M12 4.5v15"/>',
  'mining-and-mineral-processing':
    '<path d="M2.5 6.5h19L14.5 20h-5z"/>' +
    '<path d="M6.2 11h11.6"/><path d="M8.9 15.5h6.2"/>',
  // Two arcs with a gap at each side rather than the three-arrow Mobius triangle,
  // which turns into a filled blob once the arrowheads are big enough to see.
  // A broken ring is a silhouette nothing else in the set has; the full circles
  // (manufacturing, counter-UAS) all close.
  'recycling-and-circularity':
    '<path d="M4.5 9.3A8 8 0 0 1 19.5 9.3"/>' +
    '<path d="M16.8 7.5 19.5 9.3 20.4 6.2"/>' +
    '<path d="M19.5 14.7A8 8 0 0 1 4.5 14.7"/>' +
    '<path d="M7.2 16.5 4.5 14.7 3.6 17.8"/>',

  // ---- Semiconductors ----
  // Arc closed with a straight chord: that flat is what makes it a wafer and
  // not a circle, which the data-center rack and the reticle would both blur into.
  // A wafer was the first choice and it does not survive the size. Its flat is a
  // 2.4-unit bite out of an 18-unit disc, which is invisible at 22px, so the
  // shape reads as a plain circle; putting a die inside it to say "wafer" turned
  // it into a record button. Pins give the chip a spiky outline no other glyph
  // here has, which is the thing that actually survives being small.
  'semiconductor-manufacturing':
    '<rect x="7.5" y="7.5" width="9" height="9" rx="1.5"/>' +
    '<rect x="10.5" y="10.5" width="3" height="3" rx="0.6"/>' +
    '<path d="M10 7.5V4.4M14 7.5V4.4M10 16.5v3.1M14 16.5v3.1' +
    'M7.5 10H4.4M7.5 14H4.4M16.5 10h3.1M16.5 14h3.1"/>',

  // ---- Computing and Photonics ----
  'data-center-infrastructure':
    '<rect x="5" y="2.5" width="14" height="19" rx="2"/>' +
    '<path d="M8 6.5h8M8 10.5h8M8 14.5h8"/>' +
    '<circle cx="9" cy="18.3" r="0.9" ' + DOT + '/>',
  'optics-and-photonics':
    '<path d="M12 4c3.2 3 3.2 13 0 16-3.2-3-3.2-13 0-16z"/>' +
    '<path d="M2 12h5.2M16.8 12H22"/>',
  'quantum-technologies':
    '<circle cx="12" cy="12" r="8.5"/>' +
    '<ellipse cx="12" cy="12" rx="8.5" ry="3.3"/>' +
    '<path d="M12 12 17 7"/><circle cx="17" cy="7" r="1.5" ' + DOT + '/>',
  // Broadcast arcs anchored at a corner, not centered. Centered arcs over a box
  // are already the robot-sensors glyph, and at 22px the two would be the same
  // picture; hanging them off one corner with the source dot there changes the
  // silhouette from a dome to a quarter fan.
  'communications-systems':
    '<circle cx="5" cy="19" r="1.4" ' + DOT + '/>' +
    '<path d="M5 13.5A5.5 5.5 0 0 1 10.5 19"/>' +
    '<path d="M5 8.5A10.5 10.5 0 0 1 15.5 19"/>' +
    '<path d="M5 3.5A15.5 15.5 0 0 1 20.5 19"/>',

  // ---- Infrastructure and Transport ----
  // A tower crane. The counter-jib on the short side is what stops it reading as
  // a plain letter L, and the hook line hanging off the long jib is what says
  // crane rather than bracket.
  'construction-tech':
    '<path d="M7.5 21.5V4.5"/>' +
    '<path d="M3.5 4.5h16"/>' +
    '<path d="M16 4.5v5.5"/>' +
    '<path d="M4.5 21.5h6"/>',
  // Hull, deckhouse, and two waves. The hull alone is a wide trapezoid, which is
  // the mining glyph upside down; the waterline underneath is what makes it a
  // ship, so keep it if this is ever redrawn.
  'maritime-and-shipping':
    '<path d="M2.5 12.5h19l-3 6H5.5z"/>' +
    '<path d="M9 12.5V8h4.5v4.5"/>' +
    '<path d="M3 21c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0"/>',

  // ---- Defense and Aerospace ----
  'counter-uas-and-ew':
    '<circle cx="12" cy="12" r="6.5"/>' +
    '<path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22"/>' +
    '<circle cx="12" cy="12" r="1.6" ' + DOT + '/>',
  // A jointed arm off a base. The satellite glyph next door is already a body
  // with two panels, so this sheet cannot also be a spacecraft; the arm is what
  // it does rather than what it is, and no other glyph in the set is a bent line
  // with a joint on it.
  'in-space-systems':
    '<rect x="2.5" y="18.5" width="5.5" height="3" rx="1"/>' +
    '<path d="M5.2 18.5 10 11.5 18.5 8"/>' +
    '<circle cx="10" cy="11.5" r="1.3" ' + DOT + '/>' +
    '<path d="M17.3 5.3 20.5 6.8 19.3 10.2"/>',
  'propulsion-systems':
    '<path d="M9.8 2.5h4.4L18 15.5H6z"/>' +
    '<path d="M9.2 6.8h5.6"/>' +
    '<path d="M8.8 17.5v3.8M12 18v4M15.2 17.5v3.8"/>',
  'sensing-and-navigation':
    '<circle cx="12" cy="12" r="8.5"/>' +
    '<path d="M15.8 8.2 13.1 13.1 8.2 15.8l2.7-4.9z"/>',
  'space-launch-and-satellites':
    '<rect x="9.5" y="9.5" width="5" height="5" rx="1"/>' +
    '<rect x="1.5" y="10.2" width="6" height="3.6" rx="0.8"/>' +
    '<rect x="16.5" y="10.2" width="6" height="3.6" rx="0.8"/>' +
    '<path d="M12 9.5V5.5"/><path d="M9.5 4 12 5.5 14.5 4"/>',
  'uncrewed-systems':
    '<path d="M7.2 7.2 16.8 16.8M16.8 7.2 7.2 16.8"/>' +
    '<circle cx="5.4" cy="5.4" r="2.6"/><circle cx="18.6" cy="5.4" r="2.6"/>' +
    '<circle cx="5.4" cy="18.6" r="2.6"/><circle cx="18.6" cy="18.6" r="2.6"/>' +
    '<rect x="9.8" y="9.8" width="4.4" height="4.4" rx="1"/>',

  // ---- Biotechnology ----
  // Two impellers, not one. A single blade on a vertical shaft reads as an
  // exclamation mark inside a bag; the second one makes it a stirred tank.
  bioprocessing:
    '<path d="M5.5 3.5h13v10a6.5 6.5 0 0 1-13 0z"/>' +
    '<path d="M12 3.5v9.5"/><path d="M9.2 9h5.6"/><path d="M9.2 13h5.6"/>' +
    '<circle cx="8.8" cy="16.8" r="0.95" ' + DOT + '/>' +
    '<circle cx="14.8" cy="17.8" r="0.8" ' + DOT + '/>',

  // A capsule stood upright with the lower half filled. The first attempt put
  // the same capsule on a 45-degree diagonal, and at 22px a rounded bar with a
  // break across the middle is the standard hyperlink glyph — it read as "this
  // card is a link", not as a drug. Vertical plus a solid half is a silhouette
  // nothing else in the set has, and it cannot be confused with the battery,
  // which is a horizontal rect with a terminal on the end.
  'therapeutic-modalities':
    '<rect x="8.5" y="2.5" width="7" height="19" rx="3.5"/>' +
    '<path d="M8.5 12h7v6a3.5 3.5 0 0 1-7 0z" ' + DOT + '/>',

  // Two strands that cross, plus two rungs. Straight rails read as the
  // transmission pylon, which is also two uprights with crossbars. Curving them
  // fixed that and introduced a worse problem: strands that merely pinch in the
  // middle read as an hourglass, which at this size says "loading". The control
  // points are pushed far enough out that the strands actually cross, and the
  // crossing is what makes it a helix rather than a waist.
  'gene-editing-and-delivery':
    '<path d="M8.5 3C17 8 17 16 8.5 21"/>' +
    '<path d="M15.5 3C7 8 7 16 15.5 21"/>' +
    '<path d="M10.6 5.6h2.8"/><path d="M10.6 18.4h2.8"/>',

  // Short reads stacked over a reference line: an alignment pileup. The reads
  // have to start at different x positions or the glyph is the standard
  // "lines of text" icon. Staggering is the whole difference, so keep the
  // left edges ragged if this is ever redrawn, and keep the baseline, which
  // is what says the bars are aligned to something.
  'sequencing-and-synthesis':
    '<path d="M5 5h6.5"/><path d="M13.5 5h5.5"/>' +
    '<path d="M3 9.5h5"/><path d="M10 9.5h8.5"/>' +
    '<path d="M6.5 14h9"/>' +
    '<path d="M2.5 19.5h19"/>',

  // A lateral flow strip: a rounded window with a filled test line and an open
  // control line. A plain rectangle with two bars reads as a form field or a
  // battery, so one line is filled and one is not — the asymmetry is what says
  // "a result", and it is also what the strip actually looks like when positive.
  'diagnostics-and-assays':
    '<rect x="7.5" y="2.5" width="9" height="19" rx="2"/>' +
    '<path d="M9.6 9h4.8v1.7H9.6z" ' + DOT + '/>' +
    '<path d="M9.6 14.5h4.8"/>',

  // A scanner gantry seen head on: the bore inside the housing, with the couch
  // crossing it. Nothing else in the set nests a circle inside a square, which
  // is what keeps it apart from the assay strip and the bioreactor beside it.
  // The couch line is load-bearing — without it the shape is a camera lens.
  'medical-imaging-and-devices':
    '<rect x="2.8" y="2.8" width="18.4" height="18.4" rx="3.5"/>' +
    '<circle cx="12" cy="12" r="5.4"/>' +
    '<path d="M7.6 15.6h8.8"/>',
};

// aria-hidden because the sheet title sits right beside it and already says what
// the card is; a screen reader announcing "battery icon, Battery Chemistries"
// is noise, not information.
function glyph(slug) {
  const g = GLYPHS[slug];
  if (!g) return '';
  return '<svg class="sg" viewBox="0 0 24 24" width="22" height="22" fill="none" ' +
    'stroke="currentColor" stroke-width="1.5" stroke-linecap="round" ' +
    'stroke-linejoin="round" aria-hidden="true">' + g + '</svg>';
}

module.exports = { GLYPHS, glyph };
