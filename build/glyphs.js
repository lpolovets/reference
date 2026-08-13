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

  // ---- Defense and Aerospace ----
  'counter-uas-and-ew':
    '<circle cx="12" cy="12" r="6.5"/>' +
    '<path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22"/>' +
    '<circle cx="12" cy="12" r="1.6" ' + DOT + '/>',
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

  // ---- Bioprocessing ----
  // Two impellers, not one. A single blade on a vertical shaft reads as an
  // exclamation mark inside a bag; the second one makes it a stirred tank.
  bioprocessing:
    '<path d="M5.5 3.5h13v10a6.5 6.5 0 0 1-13 0z"/>' +
    '<path d="M12 3.5v9.5"/><path d="M9.2 9h5.6"/><path d="M9.2 13h5.6"/>' +
    '<circle cx="8.8" cy="16.8" r="0.95" ' + DOT + '/>' +
    '<circle cx="14.8" cy="17.8" r="0.8" ' + DOT + '/>',
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
