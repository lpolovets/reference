---
number: 17
name: NV Magnetometry
part: 5
group: Field & inertial sensing
temperature: room
uses: [sense]
horizon: now
maturity: early
bottleneck: mat
---

## Description
NV magnetometry uses nitrogen-vacancy centers in diamond as magnetic field sensors. The defect's spin resonance frequency shifts with field, and because the spin can be read optically, a microwave sweep plus a photodiode gives a field measurement. Two modes exist. A dense ensemble in a millimeter of diamond gives good sensitivity in a small solid-state package. A single NV at the tip of a scanning probe gives nanometer spatial resolution, trading sensitivity for the ability to map fields inside a working device.

## Strengths and weaknesses
It works at room temperature in a solid, so the sensor can be pressed against a sample, dropped into a downhole tool, or built into a chip tester. Nothing else combines nanotesla sensitivity with nanometer resolution. Vector information comes free, because the four possible defect orientations in the crystal resolve field direction. The costs are material and sensitivity. Ensembles reach picotesla per root hertz, a hundred times worse than an OPM, engineered diamond with the right nitrogen content and isotopic purity is expensive, and placing defects at a controlled depth is still imperfect.

## When to use
Use NV magnetometry when proximity or spatial resolution matters more than absolute sensitivity: imaging current paths in a packaged chip, measuring magnetic domains, monitoring battery cells and motors in place, and downhole or field instruments where a shielded room is impossible. Use an OPM when you need the last two orders of magnitude of sensitivity and can control the environment. For simple field measurement at strength, a Hall probe costs a dollar.

## Key numbers
Ensemble sensitivity of picotesla per root hertz, roughly a hundred times behind SERF magnetometers · single-defect probes give nanometer spatial resolution · operates at room temperature in a solid-state package · vector field measurement comes from the four defect orientations in the diamond lattice · engineered diamond material is a significant share of sensor cost.

## Examples
Scanning NV microscopes imaging current distribution in integrated circuits; SandboxAQ's diamond magnetometers for navigation and cardiac sensing; Element Six supplying engineered diamond; geological and paleomagnetic imaging of rock samples at micron scale.

## Videos

- https://www.youtube.com/watch?v=CRfTe9gBOQA — Quantum Sensing With a Special Synthetic Diamond (Asianometry, 17 minutes, 50k+ views)
- https://www.youtube.com/watch?v=UEM9HxPdqII — Quantum Sensing Explained | SandboxAQ (SandboxAQ, 4 minutes, 100k+ views)

## Further reading

[UK National Quantum Technologies Programme](https://uknqt.ukri.org/)
