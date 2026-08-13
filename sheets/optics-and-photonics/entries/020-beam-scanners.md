---
number: 20
name: Beam Scanners
part: 4
group: Modulation & scanning
band: [uv, lwir]
apps: [mfg, sense, med, def]
form: mod
cost: u10k
maturity: mature
---

## Description
A beam scanner points a beam somewhere. Galvanometer scanners mount a mirror on a limited-rotation motor with a position sensor and a servo loop; two of them in series give X and Y, and an F-theta lens turns angle into a flat focal plane. Polygon scanners spin a many-faceted mirror continuously for very fast unidirectional sweeps. MEMS mirrors do the same job on a chip, electrostatically or magnetically actuated, in a package small enough for a consumer device. Fast steering mirrors trade range for precision and stabilize a beam rather than sweeping it.

## Strengths and weaknesses
Galvos are the workhorse: several kilohertz small-signal bandwidth, microradian repeatability, and enough aperture for kilowatt beams. Polygons reach far higher line rates. MEMS mirrors are tiny and cheap, which is what makes automotive LiDAR and pico-projectors possible. The trade-offs run along the same axis in each case: aperture against speed. A large mirror handles a big beam and moves slowly; a small one moves fast and clips a large beam. MEMS devices in particular have apertures of a few millimeters, which caps the range of a LiDAR built around them.

## When to use
Use galvo scanners for laser marking, cutting, welding, and confocal microscopy, where a few kilohertz and a centimeter-scale aperture suit the job. Use a polygon when line rate dominates, as in high-speed printing and some inspection. Use MEMS where size and cost dominate and the beam is small. Use a fast steering mirror when the task is holding a beam still against disturbance rather than moving it. If neither speed nor aperture can be compromised, consider splitting the beam and using several scanners.

## Key numbers
Galvo small-signal bandwidth of a few kHz, with step-and-settle in the hundreds of microseconds · repeatability in microradians · aperture from about 3 to 50 mm, trading against speed · MEMS mirrors typically 1–5 mm aperture with resonant scan rates of tens of kHz · polygon scanners reach line rates far above galvos in one direction only.

## Examples
Galvo heads on every laser marking and cutting system; polygon scanners in laser printers and web inspection; MEMS mirrors in automotive LiDAR and pico-projectors; fast steering mirrors stabilizing beams in free-space optical links and telescopes.

## Videos

- https://www.youtube.com/watch?v=IigmZflvvRc — Laser Beam Stabilization with Fast Steering Mirrors (Newport Corp by MKS, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=xw8wyKWAkMo — M3-RS-U Developer's Kits for Beam Steering and Mirror Positioning (New Scale Technologies Inc, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=KxaTGlKqiEQ — Fast Steering Mirror Setup (Don Henderson, 3 minutes, 1k+ views)

## Further reading

[Lasers & Sources (Laser Focus World)](https://www.laserfocusworld.com/lasers-sources)
