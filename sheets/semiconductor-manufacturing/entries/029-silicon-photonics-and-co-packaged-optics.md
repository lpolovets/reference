---
number: 29
name: Silicon photonics and co-packaged optics
part: 6
group: Heterogeneous integration
devices: [photonic, logic]
node: [mature, adv]
wafer: [w200, w300]
toolcost: med
suppliers: few
---

## Description
Silicon photonics builds waveguides, modulators, and germanium photodetectors in a standard CMOS fab, using the same lithography, etch, and deposition tools that make transistors, on SOI wafers (003) where the buried oxide confines the light. Co-packaged optics is the next step: put that photonic die in the same package as the switch ASIC or accelerator, so the electrical signal travels millimeters to the optical engine instead of tens of centimeters across a board to a pluggable module at the faceplate. The economic argument for the platform is that it inherits CMOS wafer scale, yield discipline, and 300 mm economics, which InP (023) cannot. The unavoidable catch is that silicon has an indirect bandgap and does not lase, so every platform still attaches or bonds an InP laser, either as a flip-chipped die or an externally coupled source. GlobalFoundries still lists on-die lasers as in development, and no one ships one.

## Strengths and weaknesses
Integration density and cost per function are the strengths: a single silicon photonic die can carry dozens of modulators, detectors, splitters, and wavelength filters, all patterned at CMOS yields on 200 or 300 mm wafers, which is why the platform won short- and medium-reach datacom. Co-packaging adds a real power argument, because pluggable optical modules consume a large and growing share of a switch's total power and most of that goes into driving a long, lossy electrical path that co-packaging shortens. The weaknesses are all about the laser and the field. The laser is a separate III-V die that has to be attached, aligned to sub-micron accuracy, and kept cool, and it remains the least reliable component in the assembly. Optical coupling in and out of the package needs fiber attach with its own alignment tolerance. The failure mode that actually slows adoption is serviceability: a pluggable module that fails gets swapped in a minute, while a failed optical engine inside a switch package means replacing the switch, so operators demand a reliability case that the industry is still building.

## When to use
Use silicon photonics when the design needs many optical channels on one chip and cost per lane matters more than absolute per-lane performance, which describes datacenter interconnect. Use InP (023) instead when you need the highest per-lane performance, coherent long-haul optics, or a monolithic laser-plus-modulator on one die. Choose co-packaged optics when the electrical path is the power or reach bottleneck, which is now the case for high-radix AI-cluster switches, and stay with pluggables when serviceability, field-replaceability, and multi-vendor optics matter more than the power saving. If you are building the product, treat laser attach yield and the optical engine's field reliability as the two numbers your business case depends on, because everything else on the platform behaves like CMOS.

## Key numbers
GlobalFoundries Fotonix in production at 100 Gb/s per wavelength, 200 Gb/s proven, 400 Gb/s in early access · 200 and 300 mm CMOS lines running standard fab tooling · zero on-die lasers, so every platform attaches or bonds an InP die · four or more merchant foundries with a silicon photonics process, against one qualified volume supplier of photonics-grade SOI · pluggable optics take a large and growing share of a switch's total power.

## Supply chain
The fab side is comparatively healthy. GlobalFoundries, TSMC, Tower Semiconductor, Intel, and imec all run silicon photonics processes, so a designer has several credible foundries, which is more than can be said for most of this sheet. The concentration sits above and below. Below, Soitec is the only qualified volume supplier of photonics-grade SOI wafers to Tower, GlobalFoundries, and TSMC, so a platform that exists to escape III-V substrate risk depends on a single French substrate maker instead. Above, the InP lasers come from the same three-supplier substrate base described in 023, which means silicon photonics does not remove the InP chokepoint, it just shrinks how much InP each link needs. Packaging is the third constraint, since co-packaged optics needs advanced packaging capacity in the same queue as everything else in 026. If Soitec's photonics SOI line went down, the merchant foundries have no qualified alternative and requalifying one would take a year or more.

## Examples
TSMC's COUPE program supplies the optical engines in NVIDIA's Quantum-X and Spectrum-X photonic switches, the first large-scale co-packaged optics deployment in AI networking. Broadcom's Tomahawk co-packaged switches are the other volume program. GlobalFoundries Fotonix is the leading merchant silicon photonics platform, with Tower's PH18 the other open foundry option. Intel shipped silicon photonics transceivers in volume for years before pivoting toward optical compute interconnect. Cisco (through Acacia and Luxtera), Marvell (through Inphi), and Ayar Labs are the visible merchant players, and Soitec supplies the photonics-grade SOI everyone builds on.

## Economic profile
The pitch is that photonics becomes a CMOS cost curve rather than a III-V one, and to a real extent it has: a 300 mm silicon photonics wafer costs a small fraction of what the equivalent InP area would, and yield learning transfers from logic manufacturing. What has not become CMOS-like is assembly. Laser attach, fiber attach, and testing an optical part are per-unit operations with per-unit yields, so the cost curve flattens out in packaging even as the die gets cheap. That is why co-packaged optics has been on roadmaps far longer than it has been in products, and why the first volume deployments are in AI-cluster switches, where the power and reach benefit is large enough to justify a non-serviceable optical engine. The direction of travel is clear enough (per-lane rates from 100 to 200 to 400 Gb/s, optics moving from the faceplate into the package), but the honest read on timing is that adoption follows reliability data rather than the published roadmaps.

## Videos

- https://www.youtube.com/watch?v=29aTqLvRia8 — Silicon Photonics: The Next Silicon Revolution? (Asianometry, 16 minutes, 100k+ views)
- https://www.youtube.com/watch?v=G5r2OyCN5_s — The AI Bandwidth Wall & Co-Packaged Optics (Asianometry, 17 minutes, 100k+ views)
- https://www.youtube.com/watch?v=6Zc-6zy61zI — Co-Packaged Optics: Why Traditional Pluggable Transceivers Are Struggling to Keep Up With AI (FiberGuide - Fiber Optics | Optical Networking, 8 minutes, 10k+ views)

## Further reading

[Heterogeneous Integration Roadmap 2025, Chapter 9: Photonics (IEEE Electronics Packaging Society)](https://eps.ieee.org/wp-content/uploads/2026/05/HIR_9_Photonics_rev0.9.pdf) · [Electronic Chip Package and Co-Packaged Optics (CPO) Technology for Modern AI Era: A Review (Micromachines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12029643/)
