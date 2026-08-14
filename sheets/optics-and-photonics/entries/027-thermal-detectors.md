---
number: 27
name: Thermal Detectors
part: 5
group: Detectors
band: [mwir, thz]
apps: [def, sense, cons, mfg]
form: chip
cost: u10k
maturity: mature
---

## Description
A thermal detector does not care about photon energy; it absorbs radiation, warms up, and reports the temperature change. A microbolometer array is the common form: each pixel is a thin membrane of vanadium oxide or amorphous silicon suspended on legs above the readout circuit, so it is thermally isolated and its resistance changes as it heats. Because the mechanism is heat rather than band-to-band absorption, one device responds across the whole infrared, including 8–14 um where photon detectors need cryogenic cooling.

## Strengths and weaknesses
Uncooled operation is what made thermal imaging ordinary: no cryocooler means a camera that costs hundreds rather than tens of thousands, runs on a battery, and starts instantly. Response is flat over a wide band. The costs are speed and sensitivity. Thermal time constants of 5–15 ms cap frame rates near 60 Hz and blur fast motion, and noise-equivalent temperature difference of 30–50 mK is well behind a cooled photon detector's few mK. Germanium optics, needed at these wavelengths, often cost more than the sensor.

## When to use
Use an uncooled microbolometer for almost all thermal imaging: building inspection, firefighting, automotive night vision, drone payloads, and process monitoring. Move to a cooled photon detector, mercury cadmium telluride or indium antimonide, when you need to resolve small temperature differences, image fast events, or do quantitative mid-wave radiometry, and accept the cryocooler and the cost. Remember that the lens may dominate the bill of materials, which changes how much sensor performance is worth buying.

## Key numbers
Uncooled microbolometers respond across 8–14 um without cooling · thermal time constant 5–15 ms, capping frame rate near 60 Hz · noise-equivalent temperature difference typically 30–50 mK, against a few mK for cooled photon detectors · common array formats 320 by 240 up to 1,280 by 1,024 · germanium optics often cost more than the detector.

## Examples
FLIR and Teledyne uncooled cores in handheld and drone thermal cameras; automotive night vision systems; cooled mercury cadmium telluride detectors in missile seekers and scientific instruments; pyroelectric detectors as cheap motion sensors and laser power meters.

## Economic profile
Removing the cryocooler is what took thermal imaging from tens of thousands of dollars to hundreds, and once it was gone the detector stopped being the expensive part. Germanium optics often cost more than the sensor, and germanium metal roughly tripled in price between 2021 and 2025 after China put it under export licensing, so the item that dominates the bill of materials is the one with no volume curve underneath it. Resolution costs twice over: going from 320 by 240 to 1,280 by 1,024 is about seventeen times the pixels and also a larger optical format, which means a larger germanium lens. That is why cost reduction in this business tends to come from wafer-level packaging and from requalifying onto chalcogenide glasses, rather than from improving a noise-equivalent temperature difference that is already adequate at 30–50 mK for building inspection, firefighting, and drone work. Cooled mercury cadmium telluride sits at a different price point for structural reasons: the cryocooler is expensive, it wears out, and export control narrows the supplier list before price does.

## Videos

- https://www.youtube.com/watch?v=__VED_DsX0g — Ask an Expert: What is a Microbolometer? (Sierra-Olympia Technologies, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=Rb_O1wv5UsM — #1486 Micro Bolometer Thermal Camera Sensor (IMSAI Guy, 15 minutes, 5k+ views)
- https://www.youtube.com/watch?v=dzWbZ3GNbxU — Tech Talk: MWIR & LWIR Overview (Sierra-Olympia Technologies, 5 minutes, 10k+ views)

## Further reading

[Thermal Detectors (RP Photonics Encyclopedia)](https://www.rp-photonics.com/thermal_detectors.html) · [Low-Cost Microbolometer Type Infrared Detectors (Micromachines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7570331/)
