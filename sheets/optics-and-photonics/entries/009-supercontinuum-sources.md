---
number: 9
name: Supercontinuum Sources
part: 2
group: Broadband sources
band: [uv, swir]
apps: [metro, med, sense]
form: inst
cost: u100k
maturity: est
---

## Description
A supercontinuum source takes short high-peak-power pulses and sends them into a nonlinear fiber, usually a photonic crystal fiber whose dispersion is engineered to keep the pulse intense over a long interaction length. Self-phase modulation, soliton fission, and four-wave mixing spread the narrow input spectrum across hundreds or thousands of nanometers. The output is white light with a laser's spatial coherence: it can be focused to a diffraction-limited spot and coupled into a single-mode fiber, which no lamp can do.

## Strengths and weaknesses
One box replaces a rack of lasers when an experiment needs many wavelengths, and because the beam is spatially coherent it can be filtered to any line and still focus tightly. Brightness per nanometer far exceeds a lamp. The weaknesses are cost, noise, and spectral shape. Systems run tens of thousands of dollars, the output is not flat and falls off at the edges, and pulse-to-pulse intensity noise is significantly higher than a continuous-wave laser's, which matters for sensitive measurements. Power in any one narrow band is modest once you filter.

## When to use
Choose a supercontinuum when an instrument needs tunable or multi-wavelength light with laser-like focusing: confocal and flow-cytometry excitation, broadband spectroscopy, optical coherence tomography, and component characterization across a wide band. Use an LED or lamp where spatial coherence does not matter, since it costs a hundredth as much. Use a tunable diode where you need one wavelength at a time with low noise. Check the noise specification against the measurement before assuming a supercontinuum can replace a stabilized laser.

## Key numbers
Output spanning roughly 400–2,400 nm from one source · spatially coherent, so it couples into single-mode fiber and focuses to a diffraction-limited spot · spectral power density of milliwatts per nanometer · pulse-to-pulse noise considerably higher than a continuous-wave laser · system cost commonly $30,000–100,000.

## Examples
NKT Photonics SuperK systems, the reference product in this category; confocal microscopy and flow cytometry using a filtered supercontinuum instead of several lasers; broadband optical coherence tomography; fiber and coating characterization in photonics labs.

## Videos

- https://www.youtube.com/watch?v=j5-vBxnt2kI — Robert Alfano on the supercontinuum: history and future applications (SPIETV, 10 minutes, 5k+ views)
- https://www.youtube.com/watch?v=XOQLvVx_pbI — Save time with the tunable SuperK CHROMATUNE supercontinuum white light laser (HamamatsuPhotonicsAS, 2 minutes, 1k+ views)
- https://www.youtube.com/watch?v=EOA0JPojc6o — Advantages of replacing lamps with SuperK supercontinuum white-light lasers. (HamamatsuPhotonicsAS, 4 minutes, 1k+ views)

## Further reading

[Supercontinuum Generation (RP Photonics Encyclopedia)](https://www.rp-photonics.com/supercontinuum_generation.html)
