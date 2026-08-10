---
number: 27
name: 3D stacking and hybrid bonding
part: 6
group: Heterogeneous integration
devices: [logic, memory]
node: [lead, front]
wafer: [w300]
toolcost: low
suppliers: duo
---

## Description
3D stacking puts one die directly on top of another instead of tiling them side by side, and it comes in two rungs that are worth keeping straight. Microbump 3D, as in Intel's Foveros, solders a die onto the die below at 36 µm pitch, heading to 25 and 18 µm, and needs underfill in the gap. Hybrid bonding removes the solder entirely: both surfaces are polished flat, copper pads are recessed a few nanometers below the surrounding oxide, the oxide surfaces bond at room temperature on contact, and a subsequent anneal expands the copper across the gap so pad meets pad. With no solder ball and no gap to fill, pitch is set by lithography and alignment rather than by how small a solder joint can be made, which is why hybrid bonding runs at 6 µm today against 36 µm for microbumps. The connection is also shorter and has less capacitance, so it costs much less energy per bit. What it demands in exchange is a fab-grade surface: CMP-flat, particle-free, and placed to a couple of hundred nanometers.

## Strengths and weaknesses
The density gain is the point. TSMC claims up to 56× the interconnect density of 2.5D for SoIC, and the energy figure follows: roughly 0.05 pJ/bit for Foveros Direct against about 0.25 pJ/bit for a UCIe advanced-package link, which matters when a package moves tens of terabits per second. Stacking also shortens wires in a way no lateral arrangement can, which is why AMD's 3D V-Cache works. The costs are process discipline and heat. A single particle a few hundred nanometers across leaves an unbonded void, dishing from CMP leaves pads that never touch, and neither is reworkable, so the failure mode is a dead package containing several known-good dies. Thermally, stacking puts one heat source under another, and the die on the bottom is the one that cannot be cooled, which is why logic-on-logic stacking is usually arranged with the hot die on top. Throughput is the third cost: bonders run 1,600–2,000 die placements an hour, far below a conventional pick-and-place.

## When to use
Stack when the two dies need to exchange more bandwidth than a lateral link can carry at acceptable energy, or when physically shortening the wire is the point, as with cache on top of a core complex. Use microbumps when the pitch you need is 25 µm or coarser, because the process is far more forgiving and runs in a normal assembly house. Move to hybrid bonding when you need single-digit-micron pitch, sub-0.1 pJ/bit links, or the thermal advantage of eliminating the underfill layer, and budget for the fact that your assembly step now needs cleanroom discipline and CMP. If the dies are large and mostly need to sit next to each other, 026 is cheaper and thermally easier. And check the thermal path before anything else, because on current AI parts the reason not to stack is usually heat rather than cost.

## Key numbers
Microbump 3D at 36 µm pitch, heading to 25 and 18 µm · hybrid bonding at 6 µm today on TSMC SoIC, with 4.5 µm planned for 2029, and Intel Foveros Direct at 9 µm · up to 56× the interconnect density of 2.5D by TSMC's claim · roughly 0.05 pJ/bit for Foveros Direct against about 0.25 pJ/bit for a UCIe advanced-package link · die placement accuracy around 200 nm today, with sub-50 nm bonders arriving in 2026 · bonders run 1,600–2,000 die placements an hour.

## Supply chain
Hybrid bonding is a two-supplier tool market at production quality. Besi, working with Applied Materials on the integrated flow, and ASMPT supply nearly all die-to-wafer hybrid bonders, with Hanmi trying to enter; EV Group and SUSS MicroTec dominate the wafer-to-wafer side. That is a narrower base than either the etch or the deposition market, and the tools are the gating item for every company that wants to build stacked products, so bonder lead times show up directly in product roadmaps. The intellectual property is concentrated too: Adeia holds the foundational hybrid-bonding patents from the Ziptronix work and licenses them broadly, which turned the technique into a royalty business with a stated path to $600M a year. The capability itself sits with three companies, since TSMC (SoIC), Intel (Foveros Direct), and Samsung (SAINT) are the only ones running it in volume, and each does it in-house. If you are a fabless company wanting hybrid bonding, your supplier list is your foundry.

## Examples
AMD's 3D V-Cache stacks an SRAM die on a CCD with TSMC SoIC and is the highest-volume hybrid-bonded logic product. TSMC SoIC also underpins its 3DFabric stack and is used in AI accelerator designs alongside CoWoS. Intel's Foveros appears in Meteor Lake and Ponte Vecchio at microbump pitch, and Foveros Direct is its 9 µm hybrid-bonded version. Sony has used wafer-to-wafer hybrid bonding in stacked CMOS image sensors since the mid-2010s, which is where the technique got its first high-volume proving ground, and YMTC's Xtacking bonds a NAND array wafer to a CMOS logic wafer. Adeia licenses the underlying patents.

## Economic profile
Hybrid bonding is cheap in materials and expensive in everything else. There is no solder, no underfill, and no bump plating, but you are adding CMP, cleanroom-grade handling, and a bonder that places dies at a fraction of conventional assembly throughput, so the cost per die placement is high and falls slowly. The business logic still works because the alternative is a bigger die or a slower link: stacking cache on a processor buys performance that would otherwise cost a node transition, and node transitions cost hundreds of millions in design NRE. Watch two things. The first is bonder throughput, since the current 1,600–2,000 placements an hour is the main obstacle to using hybrid bonding in high-volume memory, and it is the reason HBM has stayed with thermocompression and MR-MUF so far. The second is where the value accrues, which so far is the tool vendors and Adeia rather than the assembly houses, because the capability lives inside foundries that already own the customer relationship.

## Videos

- https://www.youtube.com/watch?v=ky0-JlfuuM8 — Discover: die-to-wafer hybrid bonding | CEA-Leti (CEA, 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=2ACiuKgYUkI — Why Wafer Bonding is the Future of Semiconductors (Asianometry, 17 minutes, 100k+ views)
- https://www.youtube.com/watch?v=tr1A2yNj9wY — Packaging Part 12 - Hybrid Bonding 1 (Navid Asadi, 15 minutes, 10k+ views)

## Further reading

[Wafer-to-wafer hybrid bonding: pushing the boundaries to 400nm interconnect pitch (imec)](https://www.imec-int.com/en/articles/wafer-wafer-hybrid-bonding-pushing-boundaries-400nm-interconnect-pitch) · [Cu-Based Thermocompression Bonding and Cu/Dielectric Hybrid Bonding for Three-Dimensional Integrated Circuits (3D ICs) Application (Nanomaterials)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10489970/)
