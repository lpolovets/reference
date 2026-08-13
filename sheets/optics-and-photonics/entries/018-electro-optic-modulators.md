---
number: 18
name: Electro-Optic Modulators
part: 4
group: Modulation & scanning
band: [vis, swir]
apps: [comms, metro, sense]
form: comp
cost: u10k
maturity: mature
---

## Description
An electro-optic modulator exploits the Pockels effect: in crystals such as lithium niobate the refractive index changes linearly with applied electric field. Put that crystal in one arm of a Mach-Zehnder interferometer and a voltage becomes a phase shift, which the interferometer converts into an amplitude change. This is how essentially every long-haul optical transmitter encodes data. Thin-film lithium niobate, where the guiding layer is submicron rather than diffused, has recently pushed bandwidths past 100 GHz on a chip.

## Strengths and weaknesses
Speed is the reason it exists: modulation to tens of gigahertz is routine and beyond 100 GHz is demonstrated, orders of magnitude faster than acousto-optic. The response is linear in field and the device introduces no frequency shift. The costs are drive voltage and material. Bulk modulators need tens to hundreds of volts for a half-wave shift, which means a real driver amplifier, they are polarization-sensitive and temperature-sensitive, and the bias point of a Mach-Zehnder drifts and needs a control loop. Optical power handling is well below an AOM's.

## When to use
Use an electro-optic modulator whenever the modulation rate is above about 10 MHz, which covers all telecom and datacom transmitters, phase locking, and sideband generation for laser stabilization. Bulk Pockels cells remain the standard for Q-switching and pulse slicing at high energy. Use an AOM instead when the beam is powerful, the switching contrast has to be near-total, or a frequency shift is wanted. On a photonic chip, weigh thin-film lithium niobate against silicon modulators: better performance against a less mature supply chain.

## Key numbers
Bandwidths of tens of GHz routinely, and above 100 GHz in thin-film lithium niobate · half-wave voltage of a few volts on chip and tens to hundreds of volts in bulk devices · no frequency shift, unlike an acousto-optic modulator · Mach-Zehnder bias drifts and normally needs a control loop · optical power handling well below an AOM's.

## Examples
Mach-Zehnder modulators inside coherent transceivers on every long-haul route; Pockels cells Q-switching Nd:YAG lasers; phase modulators generating sidebands for Pound-Drever-Hall laser locking; thin-film lithium niobate devices now entering commercial transceivers.

## Videos

- https://www.youtube.com/watch?v=BeZ2NnU6xxQ — Mastering Lithium Niobate Modulators: Essential Design & Theory (Ozen Engineering, Inc - A Member of SimuTech Group, 8 minutes, 1k+ views)
- https://www.youtube.com/watch?v=HTHcJjtm6TU — Photonic Integrated Circuits - Mach-Zehnder Modulator (AIM Photonics Academy, 1 minute, 10k+ views)
- https://www.youtube.com/watch?v=RCaMwtF8Lgg — NTT Research: Advancing Thin Film Lithium Niobate (NextGenInfra, 4 minutes, 1k+ views)

## Further reading

[Electro-optic Modulators (RP Photonics Encyclopedia)](https://www.rp-photonics.com/electro_optic_modulators.html) · [Optical Modulators (RP Photonics Encyclopedia)](https://www.rp-photonics.com/optical_modulators.html)
