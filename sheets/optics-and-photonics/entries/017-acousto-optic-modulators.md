---
number: 17
name: Acousto-Optic Modulators
part: 4
group: Modulation & scanning
band: [uv, swir]
apps: [metro, mfg, sense, med]
form: comp
cost: u10k
maturity: mature
---

## Description
An acousto-optic modulator drives a piezoelectric transducer against a crystal, launching an ultrasonic wave that compresses and rarefies the material. The resulting periodic index variation acts as a moving diffraction grating, so part of the beam is deflected into the first order and shifted in frequency by exactly the acoustic drive frequency. Turning the radio-frequency drive on and off switches the diffracted beam, and changing the frequency steers it, which makes one device a switch, an attenuator, a frequency shifter, and a small-angle scanner.

## Strengths and weaknesses
It handles high optical power without damage, gives extinction ratios of 1,000:1 or better, and shifts frequency by a precisely known amount, which is what heterodyne detection and laser cooling depend on. There are no moving parts. The limits are speed and efficiency. Switching time is set by how long the acoustic wave takes to cross the beam, typically tens to hundreds of nanoseconds, so an AOM is far slower than an electro-optic modulator. Diffraction efficiency of 70–90% means real loss, and the deflection angle is small.

## When to use
Use an AOM for pulse picking, fast shuttering, power stabilization, and frequency shifting in a laser system, especially at high power where an electro-optic crystal would be at risk. It is standard in atomic physics and in laser machining. Move to an electro-optic modulator when you need gigahertz modulation, and to a mechanical shutter when milliseconds are fine and you want no loss at all. Remember that an AOM in a beam path always deflects and always shifts, so the layout has to accommodate both.

## Key numbers
Rise time of tens to hundreds of nanoseconds, set by the acoustic transit across the beam · diffraction efficiency typically 70–90% · frequency shift equals the drive frequency, commonly 40–400 MHz · extinction ratio of 1,000:1 or better · handles far more optical power than an electro-optic modulator.

## Examples
Pulse picking in amplified ultrafast systems; laser cooling and trapping setups, where AOMs set the exact detuning of every beam; power stabilization loops in metrology; acousto-optic tunable filters used as electronically selectable bandpass elements.

## Videos

- https://www.youtube.com/watch?v=BqEaH6zJtQ4 — Modulation Of Light | Acousto Optic Modulation | Optoelectronics Devices And Systems (ENGINEERING TUTORIAL, 14 minutes, 10k+ views)
- https://www.youtube.com/watch?v=G7c9SoeyNMU — Acousto-Optic Modulation for Sound Transmission (TMU Physics, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=iOB8jyYetvw — Homemade Acousto-optic controller for Under $100! (Les' Lab, 20 minutes, 10k+ views)

## Further reading

[Acousto-optic Modulators (RP Photonics Encyclopedia)](https://www.rp-photonics.com/acousto_optic_modulators.html)
