---
number: 12
name: Mirrors
part: 3
group: Optical components
band: [uv, lwir]
apps: [metro, def, mfg, sense]
form: comp
cost: u1k
maturity: mature
---

## Description
A mirror reflects rather than transmits, which means the light never passes through a material and therefore never disperses. Two families exist. Metal-coated mirrors, aluminum, silver, or gold on a substrate, reflect broadly across a wide band at 90–98%. Dielectric mirrors stack dozens of quarter-wave layers whose reflections interfere constructively, reaching above 99.99% but only over a designed band and angle. Curved mirrors, off-axis parabolas among them, focus without any chromatic aberration at all.

## Strengths and weaknesses
No dispersion is the structural advantage: one mirror works identically at every wavelength it reflects, which is why every large telescope and every broadband instrument is reflective. Dielectric coatings reach reflectivity no transmissive element can match, which is what makes laser cavities and gravitational-wave interferometers possible. The awkwardness is geometric. Reflective systems fold the beam, so the optic gets in its own way and off-axis designs introduce their own aberrations and alignment sensitivity. Metal coatings tarnish and scratch easily, and gold works only above about 600 nm.

## When to use
Use mirrors when the band is wide, the wavelength is outside good transmissive materials, or the power would damage or distort a lens. Use an off-axis parabola to focus broadband or ultrafast light without introducing dispersion. Choose dielectric coatings for a fixed wavelength and angle where high reflectivity matters, and metal for broadband work where a percent or two of loss is acceptable. Check the specified angle of incidence, because a dielectric mirror used at the wrong angle behaves very differently from its datasheet.

## Key numbers
Protected aluminum reflects about 90% across the visible; silver about 98%; gold above 96% beyond 600 nm · dielectric stacks exceed 99.99% over a designed band · no chromatic aberration at all, since light never enters a material · dielectric performance depends on angle of incidence and polarization · substrate flatness commonly specified in fractions of a wavelength.

## Examples
Off-axis parabolas focusing ultrafast pulses without adding dispersion; laser cavity mirrors with dielectric stacks; the 39-meter segmented primary of the Extremely Large Telescope; the ultra-low-loss coatings on LIGO's test masses.

## Economic profile
Cost sits in two places, the polish and the coating run, and both scale badly with the specification. Polishing time rises steeply as the flatness spec tightens, so a catalog flat at a quarter wave is inexpensive and tightening it to a twentieth of a wave usually multiplies the price with no change in material. Coating is a batch process: a chamber run has a fixed setup and a fixed load, so the price per mirror is that run divided by how many fit in it. That is why a standard diameter with a catalog dielectric coating is cheap while a custom design in a custom size pays for the whole run and waits weeks for it. The practical rule is to take a catalog coating and a catalog diameter unless the design genuinely cannot, since the substrate is rarely the expensive part. At the extreme end, the coatings on the Extremely Large Telescope's segments and on LIGO's test masses are supply questions rather than price ones, because only a few facilities in the world can deposit to that loss and uniformity.

## Videos

- https://www.youtube.com/watch?v=DqjO4HGk9ro — Refractor vs Reflector telescope explained for beginners (Alien Tech, 7 minutes, 50k+ views)
- https://www.youtube.com/watch?v=djkBahaEHG4 — Spherical & parabolic mirrors (Khan Academy India - English, 6 minutes, 100k+ views)
- https://www.youtube.com/watch?v=xYt3B5w8ir8 — Astronomy - Ch. 6: Telescopes (11 of 25) The Newtonian Reflecting Telescope (Michel van Biezen, 6 minutes, 10k+ views)

## Further reading

[Mirrors (RP Photonics Encyclopedia)](https://www.rp-photonics.com/mirrors.html) · [LIGO Optics (Caltech)](https://www.ligo.caltech.edu/page/optics)
