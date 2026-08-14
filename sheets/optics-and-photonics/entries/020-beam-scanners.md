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

## Economic profile
In an industrial system the scanner is rarely the expensive part. A galvo pair and an F-theta lens sit in the low thousands next to a fiber laser at $10k–500k, so the head is a small share of a marking or cutting machine and the decision is about throughput rather than purchase price: a few kilohertz of bandwidth and step-and-settle in the hundreds of microseconds set parts per hour on a machine whose capital cost is mostly the laser. For a job shop, that usually makes the faster head worth buying. Within galvos, price climbs with aperture, since a bigger mirror needs a bigger motor and a stiffer servo to hold the same bandwidth, so specifying a beam larger than the process needs raises the cost of the head and the F-theta lens together. MEMS mirrors are the opposite case, made lithographically in wafer volume and cheap enough for a consumer product, which is the only reason pico-projectors and low-cost automotive LiDAR exist. That cheapness has a price elsewhere in the system: a 1–5 mm aperture caps how much return light the receiver collects, so the saving comes back as shorter range or as a more sensitive detector.

## Videos

- https://www.youtube.com/watch?v=IigmZflvvRc — Laser Beam Stabilization with Fast Steering Mirrors (Newport Corp by MKS, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=xw8wyKWAkMo — M3-RS-U Developer's Kits for Beam Steering and Mirror Positioning (New Scale Technologies Inc, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=KxaTGlKqiEQ — Fast Steering Mirror Setup (Don Henderson, 3 minutes, 1k+ views)

## Further reading

[MEMS Micromirror Actuation Techniques: A Comprehensive Review of Trends, Innovations, and Future Prospects (Micromachines)](https://doi.org/10.3390/mi15101233) · [MEMS Mirrors for LiDAR: A Review (Micromachines via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7281653/)
