---
number: 25
name: Photomultiplier Tubes
part: 5
group: Detectors
band: [uv, nir]
apps: [med, metro, sense]
form: comp
cost: u1k
maturity: mature
---

## Description
A photomultiplier tube is a vacuum device. A photon strikes a photocathode and ejects an electron, which is accelerated onto a dynode where it knocks out several more, and that repeats through 8–12 stages to produce a gain of a million or more. The output is a current pulse large enough to see without a low-noise amplifier. The technology is older than the transistor and remains the standard where a large sensitive area is needed in the ultraviolet and visible.

## Strengths and weaknesses
Gain of 10^6 with very low noise means a PMT resolves single photons over an active area of many square centimeters, which no semiconductor matches at that size. Response is fast, in the nanoseconds. The weaknesses are physical and spectral. PMTs need 1–2 kV, they are glass vacuum tubes that break and that are sensitive to magnetic fields, and the photocathode's response dies beyond about 900 nm, so they are useless in the infrared. Exposure to room light while powered can destroy them, which makes them unforgiving in the field.

## When to use
Use a PMT where you need single-photon sensitivity over a large area in the ultraviolet or visible: scintillation counting, flow cytometry, confocal microscopy, and large physics detectors. Use a silicon photomultiplier instead when the environment is rough, a magnetic field is present, or low voltage and small size matter, since it now matches PMT gain in a solid-state package. Use an InGaAs APD or superconducting detector beyond 900 nm, where a PMT simply does not respond.

## Key numbers
Gain of 10^6 to 10^7 across 8–12 dynode stages · quantum efficiency 20–40% in the visible, falling to nothing beyond about 900 nm · active areas from millimeters to over 20 inches in the largest tubes · needs 1–2 kV bias · vulnerable to magnetic fields and to light exposure while powered.

## Examples
Photomultipliers in gamma cameras and positron emission tomography scanners; the 20-inch tubes lining Super-Kamiokande's neutrino detector; detection channels in confocal microscopes and flow cytometers; silicon photomultipliers steadily replacing them in medical imaging.

## Economic profile
A photomultiplier is a hand-assembled glass vacuum tube, so there is no semiconductor learning curve underneath its price and it has been roughly flat for decades. The number that matters is cost per unit of sensitive area rather than cost per device: at $100–1k for a tube covering many square centimeters, and up to 20 inches across in the largest ones, nothing else is close when the job is watching a large area in the ultraviolet or visible. Silicon photomultipliers are on the opposite curve, falling with wafer volume, which is why they displaced tubes in the small-area applications first and why the large physics detectors are still full of glass. Budget for what the tube needs around it, too, since 1–2 kV bias, magnetic shielding, and the risk of destroying it by switching on the room lights all cost money the unit price does not show. A good rule of thumb: if a design calls for many small PMTs rather than a few large ones, quote it with silicon photomultipliers before committing.

## Videos

- https://www.youtube.com/watch?v=FBR1qGYnD0Q — What is a Photomultiplier Tube? [L19] (Molecular Imaging & Therapy, 8 minutes, 10k+ views)
- https://www.youtube.com/watch?v=NoFufZNuKYQ — Photomultiplier Tube (Jefferson Lab, 1 minute, 50k+ views)
- https://www.youtube.com/watch?v=V7tLLQwLhiI — Phototubes and Photomultipliers (Peter Tusar [WEB3], 4 minutes, 50k+ views)

## Further reading

[Photomultipliers (RP Photonics Encyclopedia)](https://www.rp-photonics.com/photomultipliers.html) · [Photomultiplier Tubes: Basics and Applications, Fourth Edition (Hamamatsu Photonics)](https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/etd/PMT_handbook_v4E.pdf)
