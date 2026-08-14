---
number: 11
name: Lenses & Objectives
part: 3
group: Optical components
band: [uv, lwir]
apps: [cons, sense, med, metro, mfg, def]
form: comp
cost: u1k
maturity: mature
---

## Description
A lens bends light by refraction, and every real lens fails to focus perfectly in ways that have names. Spherical aberration comes from the surface shape, chromatic aberration from the material's index varying with wavelength, and coma, astigmatism, and field curvature from off-axis geometry. Practical optics correct these by combining elements: an achromatic doublet cancels first-order color, an apochromat corrects three wavelengths, and a microscope objective or camera lens stacks six to twenty elements to control all of them at once.

## Strengths and weaknesses
Refractive optics are compact, achromatic designs are cheap in volume, and molded aspheres have made single-element collimation of laser diodes routine. Glass catalogs offer hundreds of index and dispersion combinations to design with. The limits are material and wavelength. Ordinary glass stops transmitting below about 350 nm and above about 2.5 um, so ultraviolet needs fused silica or calcium fluoride and thermal infrared needs germanium or zinc selenide, which cost far more. Refractive systems also absorb, which matters at high power, and every surface reflects unless coated.

## When to use
Use refractive optics wherever the wavelength band and the power allow, which is most of visible and near-infrared work. Specify an achromat rather than a singlet whenever more than one wavelength is present, and an aspheric singlet when you are collimating one wavelength from a small source. Move to mirrors when the band is very wide, when the wavelength is outside common glass transmission, or when absorbed power would distort the element. For anything imaging, resolve the specification into numerical aperture and field of view first, since those set the design difficulty.

## Key numbers
Common glass transmits roughly 350–2,500 nm; fused silica extends into the ultraviolet and germanium into the long-wave infrared · an uncoated glass surface reflects about 4% per face · achromatic doublets correct color at two wavelengths, apochromats at three · numerical aperture sets both resolution and depth of field · cost from under a dollar for a molded asphere to thousands for a research objective.

## Examples
Achromatic doublets as the workhorse of optical benches; molded aspheres collimating laser diodes in every optical drive and sensor; microscope objectives with a dozen elements and immersion; germanium lenses in thermal cameras, where material cost dominates.

## Economic profile
Two things set what a lens costs, and neither of them is the glass. The first is whether the surface can be molded, since a molded asphere costs under a dollar with one tool amortized over millions of parts and the same shape ground and polished individually costs hundreds, so the question at design time is whether annual volume justifies a mold. The second is element count, because every element is two surfaces to polish, coat, center, and mount, and assembly labor scales with it, which is how a research objective with a dozen elements reaches thousands of dollars while a doublet bought by the thousand does not. Material sits on top of both: staying inside roughly 350–2,500 nm keeps you in ordinary glass, and stepping out to fused silica, calcium fluoride, germanium, or zinc selenide costs money and lead time, far enough that in a thermal camera the lens often costs more than the sensor. If a design is drifting toward more elements or an exotic material, that is the point to check whether the specification really requires it, because both changes multiply cost rather than adding to it.

## Videos

- https://www.youtube.com/watch?v=EL9J3Km6wxI — How Lenses Function (Canon Imaging Asia, 3 minutes, 1m+ views)
- https://www.youtube.com/watch?v=fx053IoC0-c — Chromatic Aberration (Quick Biochemistry Basics, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=eji8zKa7H7s — Diopters, Aberration, and the Human Eye | Geometric optics | Physics | Khan Academy (khanacademymedicine, 13 minutes, 100k+ views)

## Further reading

[Lenses (RP Photonics Encyclopedia)](https://www.rp-photonics.com/lenses.html) · [Optics (Laser Focus World)](https://www.laserfocusworld.com/optics)
