---
number: 2
name: VCSELs
part: 1
group: Semiconductor lasers
band: [nir, swir]
apps: [sense, comms, cons]
form: chip
cost: u10
maturity: mature
---

## Description
A vertical-cavity surface-emitting laser puts the resonator perpendicular to the wafer instead of along it. Two stacks of quarter-wave layers form mirrors above and below a very thin active region, and light leaves through the top surface as a round, low-divergence beam. Because the cavity is short, a VCSEL naturally runs on a single longitudinal mode, and because it emits upward it can be tested on the wafer before dicing, which changes the manufacturing economics entirely.

## Strengths and weaknesses
Wafer-level test and a circular beam are the two properties that made VCSELs the sensing laser of choice: they cost cents at volume, need no beam-shaping optic, and can be built as two-dimensional arrays with thousands of emitters on one die. Threshold current is low, so power consumption is modest, and wavelength drifts only about 0.06 nm per degree, five times less than an edge emitter. The limits are power and wavelength. A single aperture makes milliwatts to tens of milliwatts, and the material systems work well around 850–940 nm with 1,300–1,550 nm devices harder and more expensive.

## When to use
Choose VCSELs for short-reach optical links, optical mice, proximity sensing, and any time-of-flight or structured-light system that needs an array of emitters. The consumer face-recognition dot projector is the canonical high-volume case. Use an edge-emitting diode instead when you need hundreds of milliwatts or more from one emitter, or a wavelength outside the comfortable VCSEL range. For LiDAR at longer range, the choice between 940 nm VCSEL arrays and 1,550 nm fiber lasers is really a choice between cost and eye-safe power budget.

## Key numbers
Single aperture typically 1–10 mW, arrays to tens of watts · circular beam with roughly 15–25 degree divergence, needing no correction · wavelength drift about 0.06 nm per degree C · testable at wafer level, which is the main cost advantage · commodity 850 and 940 nm devices cost cents at volume.

## Examples
Apple's Face ID dot projector and proximity sensors, which took VCSELs to billions of units; 850 nm arrays in short-reach datacenter links; automotive and consumer LiDAR illuminators; laser mice, the first mass consumer application.

## Economic profile
The cost advantage is wafer-level test, and it is worth being precise about why. An edge emitter has to be cleaved and diced before anyone can tell whether it lases, so a bad die has already absorbed its packaging cost; a VCSEL is probed on the wafer, so the yield loss lands before the expensive step. That is what gets commodity 850 and 940 nm parts to cents apiece, and it only works at consumer volume: the capacity built for face recognition and proximity sensing is what everyone else now buys from. A buyer ordering thousands rather than millions is really ordering a custom array, where mask and qualification costs dominate and the cents-per-part figure does not apply. Moving to 1,300 or 1,550 nm means a different material system and a much smaller market, which is why those devices stay expensive.

## Videos

- https://www.youtube.com/watch?v=C0XvoT0Kn1k — What is VCSEL Laser (Vertical Cavity Surface Emitting Laser)? (Fiber Optics For Sale Co., 5 minutes, 100k+ views)
- https://www.youtube.com/watch?v=4IllYIduJzE — Kent Choquette: Introduction to Vertical-Cavity Surface-Emitting Lasers (VCSELs) and Applications (SPIETV, 5 minutes, 5k+ views)
- https://www.youtube.com/watch?v=FkHi4LaSzew — What is VCSEL Laser Vertical Cavity Surface Emitting Laser (Prof. HC Kuo, 5 minutes, 10k+ views)

## Further reading

[Vertical Cavity Surface-emitting Lasers (RP Photonics Encyclopedia)](https://www.rp-photonics.com/vertical_cavity_surface_emitting_lasers.html) · [Harnessing the capabilities of VCSELs: unlocking the potential for advanced integrated photonic devices and systems (Light: Science & Applications)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11372081/)
