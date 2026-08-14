---
number: 30
name: Hyperspectral Imaging
part: 6
group: Imaging & spectroscopy
band: [vis, lwir]
apps: [sense, def, mfg, med]
form: inst
cost: u100k
maturity: est
---

## Description
A normal camera records three broad color channels. A hyperspectral imager records a full spectrum at every pixel, typically 100–300 contiguous bands, producing a data cube with two spatial dimensions and one spectral. Most instruments build the cube by scanning: a pushbroom sensor images one line at a time through a slit and a grating while the platform moves, which suits aircraft and conveyor belts. Snapshot designs capture the whole cube at once at lower resolution.

## Strengths and weaknesses
Materials that look identical often have very different spectra, so hyperspectral imaging separates things no color camera can: crop stress before it is visible, plastic types on a sorting line, mineral species from the air, bruised fruit. It is non-contact and needs no sample preparation. The costs are data and light. A single flight produces terabytes, and the analysis, not the sensor, is usually the hard part. Splitting light into hundreds of bands means each one gets little, so the technique needs bright illumination or long integration, and calibration against a reference is essential.

## When to use
Use hyperspectral imaging when the distinction you need is spectral rather than spatial and a handful of filters will not separate the classes. Agriculture, mineral exploration, recycling, and food inspection are the established markets. Try multispectral first, with five to ten well-chosen bands: if that separates the classes it is far cheaper, faster, and easier to deploy. Build the classification pipeline before buying the sensor, because the instrument is rarely the limiting factor and an unused data cube is expensive.

## Key numbers
Typically 100–300 contiguous spectral bands per pixel · pushbroom scanning requires relative motion between sensor and scene · data rates of gigabytes per minute, and terabytes per survey · each band receives a small fraction of the light, so illumination and integration time matter · systems from about $25,000 for industrial line-scan to hundreds of thousands for airborne.

## Examples
Airborne surveys for mineral exploration and pipeline monitoring; Pixxel and Planet hyperspectral satellites; plastic sorting lines separating polymer types optically; food inspection systems detecting bruising and foreign material before it is visible.

## Economic profile
The sensor is usually the smallest line item. Systems run from about $25,000 for an industrial line-scan camera to hundreds of thousands for an airborne one, but a survey produces terabytes, and the storage, the compute, and a trained classification pipeline generally cost more over a program's life than the instrument did. Multispectral is the competitor that decides most deals: five to ten well-chosen bands are cheaper to buy, cheaper to fly, and far cheaper to process, so if they separate the classes then 200 bands are an expensive way to reach the same answer. That leaves two business models with very different margins. Selling data cubes means competing against a cheaper sensor while leaving the hard part to the customer; selling the answer, meaning polymer type or crop stress or mineral class, is priced against what the decision is worth. If you are evaluating a company here, ask what fraction of revenue comes from the analysis rather than the hardware.

## Videos

- https://www.youtube.com/watch?v=ayp7hP0Xr8Q — What is hyperspectral imaging - Tutorial (SpecimSpectral, 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=EWv78Lw-pb8 — Hyperspectral and Multispectral Imaging - TRENDING IN OPTICS (Edmund Optics, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=ukOJ5HvOJj8 — What is hyperspectral imaging: use cases, capabilities and benefits? (Pixxel, 3 minutes, 10k+ views)

## Further reading

[Hyperspectral Imaging (RP Photonics Encyclopedia)](https://www.rp-photonics.com/hyperspectral_imaging.html) · [AVIRIS: Airborne Visible/Infrared Imaging Spectrometer (NASA JPL)](https://aviris.jpl.nasa.gov/)
