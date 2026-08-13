---
number: 1
name: Diode Lasers
part: 1
group: Semiconductor lasers
band: [uv, mwir]
apps: [comms, sense, mfg, med, cons]
form: comp
cost: u100
maturity: mature
---

## Description
A laser diode is a forward-biased semiconductor junction with a resonator built into the chip. Electrons and holes recombine in a thin active layer, the emitted photons stimulate more recombination, and cleaved facets or a grating provide feedback. Edge-emitting diodes send light out of the chip's side as a strongly asymmetric beam. Because they are made on wafers by the same processes that make LEDs, they are the cheapest and most numerous lasers in existence, and almost every other laser on this sheet is pumped by one.

## Strengths and weaknesses
Electrical-to-optical efficiency reaches 50–70%, far above any other laser type, they modulate directly at gigahertz rates, and single units cost from a few dollars to a few hundred. Wavelengths run from about 375 nm to beyond 3 um depending on the material system. The weaknesses are beam quality and stability. The emitting aperture is a fraction of a micron in one axis and tens of microns in the other, so the output diverges asymmetrically and needs collimation. Wavelength drifts with temperature and current, typically 0.3 nm per degree, so anything spectroscopic needs stabilization, and facets fail catastrophically if driven too hard.

## When to use
Use a diode whenever the wavelength exists and the beam quality is adequate, which covers most sensing, communications, and consumer applications. It is also the right pump for a fiber or solid-state laser, which is how the high-power market actually works. Move to a fiber or DPSS laser when you need a diffraction-limited beam, high pulse energy, or a wavelength diodes cannot reach efficiently. For a wavelength-critical measurement, budget for a distributed-feedback diode and temperature control rather than a bare Fabry-Perot device.

## Key numbers
Wall-plug efficiency 50–70%, the highest of any laser type · single emitters from milliwatts to about 25 W, bars and stacks to kilowatts · wavelength drift roughly 0.3 nm per degree C · direct modulation to tens of GHz · unit cost from a few dollars for consumer parts to hundreds for single-frequency devices.

## Examples
Pump diodes at 915 and 976 nm behind essentially every fiber laser; 1,310 and 1,550 nm distributed-feedback diodes in telecom transmitters; blue diodes in projectors and welding of copper; the diode bars behind industrial direct-diode cutting systems.

## Economic profile
Diode lasers follow semiconductor economics: cost per watt has fallen by more than an order of magnitude since 2000 as fiber laser demand pulled pump volume up, and that decline is what made kilowatt fiber lasers affordable. The market splits sharply between commodity emitters sold by the thousand and specialty single-frequency devices that cost hundreds each, and the two barely compete.

## Videos

- https://www.youtube.com/watch?v=tOai-C1fxIM — How Laser Diodes Work - The Learning Circuit (element14 presents, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=ejR5F_XetMg — How does semiconductor laser work? | Explained with animation (VROOK Learning, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=_I4fyOtyvPg — How a LASER DIODE Works ⚡What is a LASER DIODE (VirtualBrain [ENG], 7 minutes, 100k+ views)

## Further reading

[Laser Diodes (RP Photonics Encyclopedia)](https://www.rp-photonics.com/laser_diodes.html) · [Lasers & Sources (Laser Focus World)](https://www.laserfocusworld.com/lasers-sources)
