---
number: 18
name: Atom Interferometry
part: 5
group: Field & inertial sensing
temperature: laser
uses: [sense, time]
horizon: near
maturity: early
bottleneck: laser
---

## Description
An atom interferometer treats atoms as waves. A cloud of laser-cooled atoms is released, and laser pulses act as beamsplitters and mirrors for the matter wave, sending it along two paths that are then recombined. The phase difference between the paths depends on acceleration and rotation along them, so the interference fringes read out gravity or motion directly. Because the measurement is referenced to the atoms' mass and to the laser wavelength, it does not drift the way a mechanical sensor does.

## Strengths and weaknesses
No drift is the point. A quantum gravimeter holds its calibration indefinitely, which conventional spring gravimeters cannot, and a quantum inertial unit would let a vehicle navigate for hours without GPS instead of minutes. Sensitivity is excellent. The costs are size, speed, and dynamics. A commercial gravimeter is a cubic meter and tens of kilograms, the measurement is a cycle of cooling and interrogation rather than a continuous reading, and under vibration or high acceleration the atoms leave the interrogation region, which is exactly the condition a navigation system faces.

## When to use
Use a quantum gravimeter today where absolute drift-free gravity measurement is worth the size: geodesy, volcano and aquifer monitoring, and civil survey for voids and tunnels. Track quantum inertial navigation as a real but not-yet-deployed capability; the physics works in the laboratory and the engineering problem is operating under motion. For any application inside a moving vehicle, ask specifically about performance under vibration, since that is where laboratory numbers and field numbers diverge most.

## Key numbers
Gravimeter sensitivity in the microgal range with no long-term drift · a measurement cycle of cooling and interrogation, typically a few hertz rather than continuous · commercial units are roughly a cubic meter and tens of kilograms · performance degrades sharply under vibration and acceleration · navigation-grade inertial systems remain in field trials.

## Examples
Muquans and AOSense commercial atom gravimeters used in geophysical survey; UK National Quantum Technologies Programme trials of gravity sensing to find buried infrastructure; shipborne and airborne quantum inertial navigation trials by several navies; the 1997 Nobel Prize for laser cooling that made all of it possible.

## Economic profile
Commercial revenue today comes from gravimeters for geophysics and civil survey rather than from navigation, and the competitor is a spring gravimeter that costs far less and drifts. The quantum instrument is worth its price when a site is measured repeatedly over years, because absolute drift-free readings remove the recalibration and tie-in surveys a drifting instrument needs; for a one-off measurement the cheap instrument plus a survey crew is usually the better buy. Inertial navigation is the larger prize, and it is funded by governments through national quantum programs and navy trials, because the pacing items are laser packaging, vibration isolation, and power rather than physics, and that is a decade of engineering with nothing to sell along the way. Size is the other economic fact: roughly a cubic meter and tens of kilograms keeps the instrument off most platforms whatever it measures, so a business plan here is really a packaging roadmap. Ask a vendor what a unit weighs and what it does on a vibrating deck before asking what it achieves in a laboratory.

## Videos

- https://www.youtube.com/watch?v=X7Y7MikUS4M — How does Gravio, a quantum gravimeter, work? (Atomionics, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=t5xouhWol3M — How can we use atoms and photons as quantum sensors? (Science Animated, 3 minutes, 10k+ views)

## Further reading

[UK National Quantum Technologies Programme](https://uknqt.ukri.org/) · [Quantum Flagship](https://qt.eu/)
