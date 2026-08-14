---
number: 33
name: Photonic Integrated Circuits
part: 7
group: Integrated photonics
band: [nir, swir]
apps: [comms, sense, metro, med]
form: chip
cost: u1k
maturity: est
---

## Description
A photonic integrated circuit puts waveguides, splitters, modulators, filters, and detectors on one chip, the way an electronic integrated circuit puts transistors on one die. Silicon photonics is the dominant platform because it reuses CMOS fabs: silicon guides light at 1,310 and 1,550 nm with high index contrast, so bends can be micron-scale. Silicon cannot emit light, so a laser is bonded on or coupled in from outside. Indium phosphide can make the laser natively but has no equivalent manufacturing base, and silicon nitride offers much lower loss for sensing and visible work.

## Strengths and weaknesses
Wafer-scale manufacturing changes the economics of any optical function that can be integrated, replacing a bench of aligned parts with a die that costs tens of dollars in volume. Density is enormous and alignment stability comes for free. The obstacles are light in and light out. Coupling from a single-mode fiber to a submicron waveguide costs 1–3 dB and demands submicron alignment, packaging is often more than half the cost, and silicon's thermo-optic sensitivity means most devices need heaters and control loops to stay on wavelength.

## When to use
Use integrated photonics where volume justifies the development: datacenter transceivers, LiDAR beam steering, and biosensing cartridges. Choose silicon for density and CMOS compatibility, indium phosphide when an on-chip laser is essential, and silicon nitride when loss or visible wavelengths matter. Do not integrate a one-off instrument, where discrete components are far cheaper and easier to change. And budget for packaging and test explicitly, because that is where integrated photonics projects usually run over.

## Key numbers
Silicon waveguide loss around 1–2 dB/cm; silicon nitride below 0.1 dB/cm · fiber-to-chip coupling loss of 1–3 dB with submicron alignment tolerance · packaging and test often exceed half of unit cost · silicon's index shifts strongly with temperature, so wavelength-critical devices need active control · foundry runs available through shared multi-project wafers.

## Examples
Intel and Cisco silicon photonics transceivers shipping in volume; Aeva and SiLC frequency-modulated LiDAR built on photonic chips; SMART Photonics and imec offering open foundry access; optical gyroscopes and biosensors implemented in silicon nitride.

## Economic profile
The die is the cheap part. A silicon photonic chip costs tens of dollars in volume, and packaging and test often exceed half the unit cost, because getting a single-mode fiber onto a submicron waveguide costs 1–3 dB and takes active alignment done one device at a time. Wafer-scale economics do not reach a step performed serially by a machine and an operator, so the cost curve of an integrated photonics product follows how far the packaging has been automated rather than how small the die is. Multi-project wafer runs make a first chip cheap, which is part of why there are many photonics startups with working devices and few with a shipping product: a demonstration costs a shuttle run, and a product costs a packaging line. Thermal control adds to the bill on every unit, since heaters and their control loops consume power and take test time. If you are evaluating one of these companies, ask for packaged cost at volume and test time per part, not die cost.

## Videos

- https://www.youtube.com/watch?v=29aTqLvRia8 — Silicon Photonics: The Next Silicon Revolution? (Asianometry, 16 minutes, 100k+ views)
- https://www.youtube.com/watch?v=gsTl2qkWnp0 — What is Silicon Photonics? | Intel Business (Intel Business, 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=gagV1LjOCMU — How our photonic chips work (SMART Photonics, 3 minutes, 10k+ views)

## Further reading

[Photonic Integrated Circuits (RP Photonics Encyclopedia)](https://www.rp-photonics.com/photonic_integrated_circuits.html) · [Roadmapping the next generation of silicon photonics (Nature Communications)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10811194/)
