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

## Economic profile
An AOM has no expensive physics in it, and the price mostly reflects how few get made. The parts are a crystal, a bonded piezoelectric transducer, and an impedance-matching network, made in small batches for laser labs and machining systems rather than in the volumes that make a diode cheap. Budget the radio-frequency driver as a second line item, since it often costs about as much as the head, and a laser cooling setup running a dozen AOMs usually spends more on RF electronics than on the optics they drive. The competitive question is what else could do the job: if millisecond switching is enough, a mechanical shutter costs one or two orders less and adds no loss, and above about 10 MHz an electro-optic modulator is the only option. So the AOM's market is the middle of that range, where the beam is powerful enough to put an electro-optic crystal at risk, the switching is in tens to hundreds of nanoseconds, and the frequency shift is wanted rather than merely tolerated.

## Videos

- https://www.youtube.com/watch?v=BqEaH6zJtQ4 — Modulation Of Light | Acousto Optic Modulation | Optoelectronics Devices And Systems (ENGINEERING TUTORIAL, 14 minutes, 10k+ views)
- https://www.youtube.com/watch?v=G7c9SoeyNMU — Acousto-Optic Modulation for Sound Transmission (TMU Physics, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=iOB8jyYetvw — Homemade Acousto-optic controller for Under $100! (Les' Lab, 20 minutes, 10k+ views)

## Further reading

[Acousto-optic Modulators (RP Photonics Encyclopedia)](https://www.rp-photonics.com/acousto_optic_modulators.html) · [Acousto-Optic Modulation, Application Note AN0510 (Isomet)](https://isomet.com/App-Manual_pdf/AO%20Modulation.pdf)
