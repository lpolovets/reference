---
number: 28
name: Optical Microscopy
part: 6
group: Imaging & spectroscopy
band: [uv, nir]
apps: [med, metro, mfg]
form: inst
cost: u100k
maturity: mature
---

## Description
Optical microscopy resolves small things using visible light, and diffraction sets the limit at roughly half a wavelength divided by numerical aperture, about 200 nm in practice. Fluorescence microscopy labels specific molecules with dyes and images only their emission, which turns a transparent cell into a map of one protein. Confocal microscopy adds a pinhole that rejects light from outside the focal plane, giving optical sections. Multiphoton microscopy uses an ultrafast laser so that only the focal volume gets enough intensity to excite, which allows imaging deep in tissue.

## Strengths and weaknesses
Nothing else images living samples at this resolution with molecular specificity, and the labeling chemistry is what makes it powerful rather than the optics. Confocal sectioning removes out-of-focus haze; multiphoton reaches hundreds of microns into scattering tissue. The costs are photons and time. Fluorophores bleach and cells are damaged by illumination, so every experiment trades signal against sample health, and point-scanning methods are slow because they visit each voxel in turn. Systems run from tens of thousands to well over half a million dollars.

## When to use
Use widefield fluorescence for thin samples and speed, confocal when out-of-plane light is spoiling the image, and multiphoton when imaging deep in scattering tissue or when photodamage outside the focus must be avoided. Consider light-sheet microscopy for large living samples where total dose is the constraint. Go to super-resolution methods only when the question genuinely needs sub-200 nm detail, since they cost throughput and add reconstruction assumptions. For hard surfaces, interferometric and confocal profilometry answer height questions better than any fluorescence method.

## Key numbers
Diffraction limits lateral resolution to roughly 200 nm in the visible · confocal pinhole gives optical sections around 500–800 nm thick · multiphoton reaches several hundred microns into scattering tissue · super-resolution methods reach 20–50 nm at the cost of speed and labeling constraints · systems from tens of thousands to over half a million dollars.

## Examples
Confocal systems from Zeiss, Leica, and Nikon as laboratory standards; two-photon microscopy in neuroscience imaging of live brain tissue; light-sheet systems for developmental biology; the 2014 Nobel Prize in Chemistry for super-resolution fluorescence microscopy.

## Videos

- https://www.youtube.com/watch?v=j1Krn0kkSUg — Widefield and Confocal Fluorescence Microscopy (Professor Dave Explains, 10 minutes, 50k+ views)
- https://www.youtube.com/watch?v=QFtZFbug1SA — Confocal Microscopy (Quick Biochemistry Basics, 4 minutes, 100k+ views)
- https://www.youtube.com/watch?v=PCJ13LjncMc — Fluorescence Microscopy Animation (mitedustar, 2 minutes, 100k+ views)

## Further reading

[Optical medical imaging (NIST)](https://www.nist.gov/programs-projects/optical-medical-imaging)
