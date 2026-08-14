---
number: 22
name: Photodiodes
part: 5
group: Detectors
band: [uv, swir]
apps: [comms, sense, metro, cons, med]
form: comp
cost: u10
maturity: mature
---

## Description
A photodiode is a reverse-biased junction in which an absorbed photon creates an electron-hole pair that the field sweeps out as current. The p-i-n structure adds an intrinsic region to widen the absorbing depletion layer and lower capacitance, which is what makes fast devices possible. Material sets the band: silicon covers 200–1,100 nm, InGaAs covers 900–1,700 nm and is the telecom detector, germanium spans similar ground more cheaply and noisily, and extended-InGaAs reaches 2.6 um.

## Strengths and weaknesses
Photodiodes are linear over many decades, quantum efficiency reaches 80–95% with an antireflection coating, they need only a bias and a transimpedance amplifier, and they cost from cents to tens of dollars. Bandwidths of tens of gigahertz are commercial. The limits are gain and noise. A photodiode has no internal gain, so at very low light the amplifier's noise dominates and the device is useless below roughly a thousand photons per measurement. Dark current doubles roughly every 10 °C, which matters for InGaAs and germanium in warm environments.

## When to use
Use a plain photodiode wherever there is enough light, which is most power monitoring, optical communications receivers above a certain level, machine vision, and consumer sensing. It is the default detector and everything else is a response to its limitations. Move to an avalanche photodiode when signal is a few tens of photons and bandwidth still matters, to a photomultiplier or SPAD when you are counting individual photons, and to a thermal detector when the wavelength is beyond what any semiconductor absorbs.

## Key numbers
Silicon responds 200–1,100 nm, InGaAs 900–1,700 nm, extended InGaAs to 2.6 um · quantum efficiency 80–95% with a good coating · bandwidths to tens of GHz in p-i-n devices · no internal gain, so amplifier noise sets the floor · dark current roughly doubles per 10 °C rise.

## Examples
InGaAs photodiodes in every fiber-optic receiver; silicon photodiodes as power monitors on laser systems and in cameras' exposure control; quadrant photodiodes in beam-position servos; large-area devices in pulse oximeters and other consumer medical sensors.

## Economic profile
Silicon is the reason photodiodes are cheap. A silicon detector is made by ordinary silicon processing in very high volume and sells for cents, while an InGaAs detector covering 900–1,700 nm is grown on small indium phosphide wafers in much lower volume and sells for tens of dollars to do the same job. That step at 1,100 nm is the largest single cost decision in a detection chain, and it is worth checking whether the measurement can be moved below it before accepting it. Past the die the money moves to the circuit, since a transimpedance amplifier, its board, and the shielding around it commonly cost more than the diode, and at low signal the noise of that front end rather than the detector sets what the system can measure. The exception is telecom, where InGaAs receivers at 1,310 and 1,550 nm are made in enough volume that a packaged photodiode there is far cheaper than a catalog InGaAs detector of the same area.

## Videos

- https://www.youtube.com/watch?v=KgKcbW77txY — Photodiodes (working & why it's reverse biased) | Class 12 | Semiconductors | Physics | Khan Academy (Khan Academy India - English, 12 minutes, 100k+ views)
- https://www.youtube.com/watch?v=rNoHLOumplk — What is Photodiode? | Explained its Working and Application (Automatedo, 7 minutes, 50k+ views)
- https://www.youtube.com/watch?v=n3CIV0ctNMs — Construction & Working of a Photodiode - Optical Devices (EzEd Channel, 3 minutes, 100k+ views)

## Further reading

[Photodiodes (RP Photonics Encyclopedia)](https://www.rp-photonics.com/photodiodes.html) · [Detectors & Imaging (Laser Focus World)](https://www.laserfocusworld.com/detectors-imaging)
