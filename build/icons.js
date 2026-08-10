// Favicon generation. Run from build.js; writes site/favicon.svg, site/favicon.ico
// and site/apple-touch-icon.png.
//
// The mark is three bars on an accent-blue tile: a reference sheet reduced to the
// point where it still reads at 16px. Accent blue rather than the site's near-black
// because a dark tile disappears into a dark browser tab bar, and this palette has
// to survive both.
//
// Everything here is hand-rolled because the repo has no dependencies and is not
// going to grow one for an icon. Node ships zlib, which is the only hard part of a
// PNG; the rest is a header and a CRC. Shapes are pure geometry, so no font is
// needed — which is also why there is no OpenGraph card image, since that would
// need real text rendering.
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const TILE = [0x33, 0x59, 0x7f];   // --accent, light theme
const BAR = [0xf4, 0xf5, 0xf3];   // --bg, light theme, as the ink on the tile

// Bars in unit coordinates: x, y, width, height as fractions of the tile.
const BARS = [
  [0.22, 0.28, 0.50, 0.105],
  [0.22, 0.4475, 0.34, 0.105],
  [0.22, 0.615, 0.44, 0.105],
];
const RADIUS = 0.22;   // corner radius, also a fraction of the tile

// Is (x, y) inside a rounded rect? Clamp to the rect the corner centres live on,
// then it is a plain distance test. One helper for the tile and the bars, so the
// raster and the SVG below describe the same shape rather than drifting apart.
function inRound(x, y, rx, ry, w, h, r) {
  const cx = Math.min(Math.max(x, rx + r), rx + w - r);
  const cy = Math.min(Math.max(y, ry + r), ry + h - r);
  const dx = x - cx, dy = y - cy;
  return dx * dx + dy * dy <= r * r;
}
const inTile = (x, y) => inRound(x, y, 0, 0, 1, 1, RADIUS);
const inBar = (x, y) => BARS.some(([bx, by, bw, bh]) => inRound(x, y, bx, by, bw, bh, bh / 2));

// Supersample 4x4 and average, which is the whole anti-aliasing story. Returns
// straight RGBA; the tile is opaque, everything outside it is fully transparent.
function raster(size) {
  const SS = 4, buf = Buffer.alloc(size * size * 4);
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const x = (px + (sx + 0.5) / SS) / size;
          const y = (py + (sy + 0.5) / SS) / size;
          if (!inTile(x, y)) continue;
          const c = inBar(x, y) ? BAR : TILE;
          r += c[0]; g += c[1]; b += c[2]; a += 255;
        }
      }
      const n = SS * SS, i = (py * size + px) * 4;
      // Average over covered samples only, so the edge fades in alpha rather than
      // toward black. Fully transparent pixels keep an arbitrary colour.
      const cov = a / 255;
      if (cov) { buf[i] = Math.round(r / cov); buf[i + 1] = Math.round(g / cov); buf[i + 2] = Math.round(b / cov); }
      buf[i + 3] = Math.round(a / n);
    }
  }
  return buf;
}

// ---- PNG ----
const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}
function png(size) {
  const rgba = raster(size);
  // One filter byte (0 = None) in front of every scanline, then deflate the lot.
  const stride = size * 4;
  const raw = Buffer.alloc((stride + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (stride + 1)] = 0;
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;    // bit depth
  ihdr[9] = 6;    // colour type 6 = RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// ---- ICO ----
// An .ico is a directory of images; since Vista each entry may be a whole PNG
// rather than a BMP, which is what every browser in use reads.
function ico(sizes) {
  const images = sizes.map(png);
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);            // reserved
  header.writeUInt16LE(1, 2);            // 1 = icon
  header.writeUInt16LE(sizes.length, 4);
  let offset = 6 + 16 * sizes.length;
  const entries = sizes.map((s, i) => {
    const e = Buffer.alloc(16);
    e[0] = s >= 256 ? 0 : s;             // 0 means 256
    e[1] = s >= 256 ? 0 : s;
    e[4] = 1; e[5] = 0;                  // colour planes
    e.writeUInt16LE(32, 6);              // bits per pixel
    e.writeUInt32LE(images[i].length, 8);
    e.writeUInt32LE(offset, 12);
    offset += images[i].length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images]);
}

// ---- SVG ----
// What modern browsers actually use, and the only one that stays sharp on a
// high-DPI tab. Same geometry, expressed once.
function svg() {
  const hex = c => '#' + c.map(v => v.toString(16).padStart(2, '0')).join('');
  const bars = BARS.map(([x, y, w, h]) =>
    '  <rect x="' + (x * 64) + '" y="' + (y * 64) + '" width="' + (w * 64) +
    '" height="' + (h * 64) + '" rx="' + (h * 64 / 2) + '" fill="' + hex(BAR) + '"/>').join('\n');
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">\n' +
    '  <rect width="64" height="64" rx="' + (RADIUS * 64) + '" fill="' + hex(TILE) + '"/>\n' +
    bars + '\n</svg>\n';
}

function writeIcons(dir) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'favicon.svg'), svg());
  fs.writeFileSync(path.join(dir, 'favicon.ico'), ico([16, 32, 48]));
  fs.writeFileSync(path.join(dir, 'apple-touch-icon.png'), png(180));
}

module.exports = { writeIcons, png, svg };
