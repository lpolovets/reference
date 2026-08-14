---
number: 13
name: Diffraction Gratings
part: 3
group: Optical components
band: [uv, lwir]
apps: [metro, sense, comms, med]
form: comp
cost: u1k
maturity: mature
---

## Description
A diffraction grating is a surface ruled or etched with a periodic structure, typically 300–3,600 lines per millimeter. Light scattered from each groove interferes, and the directions where the path differences are whole wavelengths depend on wavelength, so the grating spreads a beam into a spectrum. Blazing the groove profile tilts the reflected energy into one diffraction order, which is what makes a grating efficient rather than merely dispersive. Ruled gratings are cut mechanically; holographic ones are recorded in photoresist by interfering beams.

## Strengths and weaknesses
A grating disperses far more strongly than a prism and does so linearly in wavelength, which makes spectrometer design tractable. It works from the extreme ultraviolet to the far infrared, and volume-phase holographic versions reach very high efficiency in a band. Gratings also compress and stretch ultrashort pulses, which is what chirped pulse amplification requires. The weaknesses are stray light and orders. A fraction of the light scatters where it should not, limiting dynamic range in a spectrometer, and overlapping diffraction orders need an order-sorting filter. Efficiency is also polarization-dependent.

## When to use
Use a grating whenever you need to separate wavelengths: any spectrometer, any wavelength-division multiplexer with more than a few channels, any tunable external-cavity laser. Use a prism instead when the priority is very low stray light over a modest band, or when the beam must stay in a straight line. In pulse compression, gratings are essentially the only option at high energy. Specify blaze wavelength and groove density against the band you actually care about, since efficiency falls away from the blaze.

## Key numbers
Groove densities from about 300 to 3,600 lines per mm · dispersion far higher than a prism, and linear in wavelength · blazed gratings put 60–90% of the light into the chosen order · overlapping orders require order-sorting filters · stray light rather than resolution limits dynamic range in most spectrometers.

## Examples
The dispersing element in nearly every laboratory spectrometer; grating pairs in chirped pulse amplification systems; echelle gratings in astronomical spectrographs; arrayed waveguide gratings performing the same function on a photonic chip.

## Economic profile
Almost all of a grating's cost sits in the master rather than in the part you buy. A ruling engine cuts one master mechanically and replicas are cast off it, so a catalog grating is mostly the master amortized over everything sold from it, while a custom groove density or blaze wavelength means paying for a new master. Ruling engines are rare enough that custom work goes to a short supplier list with long lead times, which is one reason holographic recording, done with interfering beams rather than a machine tool, is the more available route for new designs. The rest of the cost lands downstream: efficiency falls away from the blaze, so a grating specified for the wrong band gets paid for in a brighter source or a more sensitive detector. The same function made lithographically on a photonic chip, as an arrayed waveguide grating, follows semiconductor economics instead and is cheap per channel at telecom volume, which is why chip-scale multiplexing displaced free-space gratings in that application.

## Videos

- https://www.youtube.com/watch?v=5BoH1DLt1RI — How does a Grating work? | Raman for Beginners | Optical Gratings (Bruker, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=IjoAU7_gFh4 — diffraction gratings: Using the principles of interferences to examine light (PhysicsHigh, 15 minutes, 50k+ views)
- https://www.youtube.com/watch?v=LYLjUgr3XI8 — Diffraction grating (GetAClass - Physics, 4 minutes, 50k+ views)

## Further reading

[Diffraction Gratings (RP Photonics Encyclopedia)](https://www.rp-photonics.com/diffraction_gratings.html) · [Diffraction Gratings Ruled and Holographic (HORIBA Scientific)](https://www.horiba.com/int/scientific/technologies/diffraction-gratings/diffraction-gratings-ruled-and-holographic/)
