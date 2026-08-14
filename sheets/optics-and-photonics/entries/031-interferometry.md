---
number: 31
name: Interferometry
part: 6
group: Imaging & spectroscopy
band: [uv, swir]
apps: [metro, mfg, def, sense]
form: inst
cost: u100k
maturity: mature
---

## Description
Interferometry splits a beam, sends the halves along different paths, recombines them, and reads the resulting fringe pattern. Because a fringe corresponds to half a wavelength of path difference, the technique measures distance in units of light. A Michelson interferometer measures displacement along one axis; a Fizeau interferometer compares a test surface against a reference flat and maps its shape; a Fabry-Perot uses many round trips between two mirrors to resolve wavelengths finely.

## Strengths and weaknesses
Sub-nanometer sensitivity from a table-top instrument is the reason interferometry underlies dimensional metrology, optical fabrication, and precision positioning. It is traceable, because the wavelength of a stabilized laser is a known standard. The weaknesses are environmental and interpretive. Air temperature, pressure, and humidity change the refractive index, so an uncompensated meter-long path drifts by hundreds of nanometers over a normal day, and vibration washes fringes out. Phase measurements are also ambiguous by whole wavelengths, so tracking motion requires counting fringes continuously.

## When to use
Use interferometry when the measurement has to be traceable and better than a micron: stage position feedback in lithography and machine tools, surface figure testing of optics, flatness and film thickness. Use white-light or low-coherence interferometry when absolute distance rather than relative motion is needed, since it removes the fringe ambiguity. Control the environment or measure it and compensate, because on any path longer than a few centimeters the air is part of your instrument.

## Key numbers
One fringe corresponds to half a wavelength of path change, about 316 nm at 633 nm · sub-nanometer resolution with phase interpolation · air index changes roughly 1 part per million per degree C, which is 1 um per meter of path · vibration isolation is normally required · instruments from tens of thousands to several hundred thousand dollars.

## Examples
Zygo and 4D Technology interferometers used throughout optical manufacturing; heterodyne laser interferometers as position feedback in lithography stages; LIGO, a 4 km Michelson interferometer that measures displacements smaller than a proton; Fourier-transform infrared spectrometers, which are Michelson interferometers with a moving mirror.

## Economic profile
The instrument is rarely the whole purchase. Air index changes by roughly 1 part per million per degree C, which is 1 um per meter of path, so a meter-scale measurement needs a temperature-controlled room, vibration isolation, and environmental compensation, and that installation can approach the cost of the interferometer itself. Against prices of tens of thousands to several hundred thousand dollars, that is the number a first-time buyer usually gets wrong. Two quite different businesses sell into this. A benchtop Fizeau goes to an optics shop as capital equipment bought once every several years, from a short list of vendors that compete on capability rather than price; heterodyne interferometers designed into lithography stages ship as OEM components in volumes that support serious engineering investment. For an optics manufacturer the right way to book it is as fixed overhead, since a surface that cannot be measured cannot be polished to specification, and the cost spreads over every part the shop makes.

## Videos

- https://www.youtube.com/watch?v=v8gaEqHa1r0 — Laser Interferometer - Part 1: The Optical Design. (Diffraction Limited, 17 minutes, 50k+ views)
- https://www.youtube.com/watch?v=bxTYjbA5sUo — Interferometer - How We Measure Tiny Physical Changes (NPS Physics, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=3aiCvOpshEg — laser interferometer (Dr Joji Thomas, 6 minutes, 10k+ views)

## Further reading

[Interferometers (RP Photonics Encyclopedia)](https://www.rp-photonics.com/interferometers.html) · [OPTI 513: Optical Testing (University of Arizona)](https://wp.optics.arizona.edu/jcwyant/courses/opti-513-optical-testing/)
