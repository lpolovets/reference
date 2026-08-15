---
number: 94
name: "Material extrusion (FFF)"
part: 2
group: "Additive Manufacturing"
materials: [polymer]
volumes: [proto, low]
tooling: min
---

## Description

Melted thermoplastic or paste is deposited layer by layer through a nozzle. Fused-filament fabrication is the most common form.

## Strengths and weaknesses

Equipment and feedstock are inexpensive and ideal for prototypes, fixtures, and custom parts. Surface finish, anisotropy, layer adhesion, accuracy, and production speed are weaker than molding.

## When to use

Pick FFF for form-and-fit prototypes, jigs, fixtures, and one-off functional parts. A few hundred dollars of machine and commodity filament turn CAD into a part overnight, which makes it the cheapest route to a physical object below roughly a few hundred units. Design around the weaknesses: ±0.2 mm typical accuracy, visible layers, and Z-direction strength a fraction of in-plane. If you need fine detail and smooth cosmetic surfaces, use vat photopolymerization; for isotropic production-grade nylon parts, use powder-bed fusion. Past roughly 500–1,000 units, injection molding's per-part economics take over.

## Key numbers

Tolerance roughly ±0.2 mm or ±0.5% · layer heights 0.1–0.3 mm through a 0.4 mm nozzle · surface finish Ra roughly 10–25 µm from visible layer lines · Z-direction strength 30–70% of in-plane · commodity filament $20–50/kg · desktop machines from a few hundred dollars, with injection molding cheaper past roughly 500–1,000 units.

## Examples

Jigs, fixtures, prototypes, housings, tooling aids.

## Economic profile

The crossover is explicit: injection molding is cheaper past roughly 500–1,000 units, and below that FFF wins because there is no tooling and no lead time. Machines from a few hundred dollars and filament at $20–50 per kg make the marginal part almost free, so the real cost is build time and the person who post-processes it. Z-direction strength at 30–70% of in-plane is the constraint that keeps most output in prototypes and fixtures.

## Videos

- https://www.youtube.com/watch?v=C7RowQYwADU — How Does FDM 3D Printing Work? (Xometry EMEA & APAC, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=D5vtTydrjdY — 3D Printing 0.0 - How a 3D printer works (FDM) (Everything You Need To Know (EYN2K), 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=ijcGXzDhm7o — What is Fused-Deposition Modeling (FDM) 3D Printing and How Does It Work? (TriMech Tech Tips Channel, 3 minutes, 1k+ views)

## Further reading

[How to Design Parts for FDM 3D Printing (Hubs)](https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/) · [Material Extrusion (Loughborough AMRG)](https://www.lboro.ac.uk/research/amrg/about/the7categoriesofadditivemanufacturing/materialextrusion/)
