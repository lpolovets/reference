---
number: 15
name: Optical Filters
part: 3
group: Optical components
band: [uv, lwir]
apps: [med, sense, metro, cons, def]
form: comp
cost: u1k
maturity: mature
---

## Description
An optical filter passes some wavelengths and blocks others. Absorptive filters use colored glass or dye and work at any angle, with gentle edges. Interference filters use a dielectric stack and can be made with edges a few nanometers wide and blocking of six orders of magnitude, at the cost of shifting toward shorter wavelengths as the angle of incidence increases. Dichroic filters are interference filters used at 45 degrees to split a beam by wavelength, which is how every fluorescence microscope separates excitation from emission.

## Strengths and weaknesses
Modern hard-coated interference filters transmit above 95% in band while blocking at optical density 6 or better out of band, which is what makes single-molecule fluorescence possible. They are stable and do not degrade like the soft-coated filters they replaced. The limitations are angular and thermal. Passband shifts with angle, so a filter in a converging beam broadens and shifts; it also shifts slightly with temperature. Very narrow filters have correspondingly tight manufacturing tolerances and cost, and in a high-power beam the blocked light has to go somewhere.

## When to use
Use interference filters wherever the separation between what you want and what you must reject is demanding, which is nearly all fluorescence, Raman, and spectroscopic work. Use absorptive filters for broad rejection in uncollimated light, where angle sensitivity would spoil an interference design. Always specify blocking as an optical density over a stated range, not merely as a passband, since out-of-band leakage is what limits real measurements. And put filters in collimated space if the design allows it.

## Key numbers
Hard-coated interference filters transmit above 95% in band with blocking at optical density 6 or better · passband shifts toward shorter wavelengths as angle of incidence increases · edges as steep as a few nanometers between 90% transmission and deep blocking · absorptive filters are angle-insensitive with much gentler edges · cost from tens of dollars to over a thousand for narrow demanding parts.

## Examples
Fluorescence filter cubes pairing excitation, dichroic, and emission filters; Raman edge filters rejecting the laser line while passing shifted light a few wavenumbers away; near-infrared bandpass filters in front of LiDAR detectors to reject sunlight; color filters on camera sensors.

## Economic profile
Filter price tracks layer count, and layer count tracks how narrow and how steep you ask for. A wide bandpass with modest blocking is a short stack that runs quickly and yields well; a few-nanometer edge with optical density 6 needs a long deposition run and thickness control tight enough that part of every batch misses the spec, which is how the same size part goes from tens of dollars to over a thousand. So the cheapest move available is to specify the widest passband and the least blocking the measurement actually needs, since each step tighter moves the part up a price band. The other lever costs nothing: passband shifts with angle, so putting the filter in collimated space usually buys more real performance than buying a better filter and using it in a converging beam. At the far end of the volume curve the same physics is nearly free, since the color filters on a camera sensor are patterned lithographically at wafer scale rather than coated one substrate at a time.

## Videos

- https://www.youtube.com/watch?v=tnXDSCjNMJ8 — Optical Bandpass Filter Explained in 1 minute (SyronOptics, 2 minutes, under 1k views)
- https://www.youtube.com/watch?v=h9McddItZk8 — #1046 Strange Optical Filters (IMSAI Guy, 18 minutes, 5k+ views)
- https://www.youtube.com/watch?v=mktxGzk6f4A — Optical Filter Guide 1 : Optical Filters and Types (SyronOptics, 1 minute, under 1k views)

## Further reading

[Optical Filters (RP Photonics Encyclopedia)](https://www.rp-photonics.com/optical_filters.html) · [Handbook of Optical Filters for Fluorescence Microscopy (Chroma Technology)](https://www.chroma.com/assets/documents/chroma-handbook-of-optical-filters.pdf)
