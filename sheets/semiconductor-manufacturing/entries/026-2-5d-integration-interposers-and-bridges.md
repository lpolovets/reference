---
number: 26
name: "2.5D integration: interposers and bridges"
part: 6
group: Heterogeneous integration
devices: [logic, memory]
node: [adv, lead, front]
wafer: [w300]
toolcost: med
suppliers: duo
---

## Description
2.5D integration is how you run a thousand or more wires between a processor die and the memory stacks next to it, at a density no package substrate can reach. Two architectures do it. A silicon interposer, as in TSMC's CoWoS-S, puts every die on one continuous slab of silicon patterned like a chip, thinned to roughly 100 µm, with through-silicon vias carrying power and signal down to the package substrate. Embedded bridges, as in Intel's EMIB and TSMC's CoWoS-L, skip the full slab and drop small silicon bridge dies into an organic or molded interposer only where two chips need to talk. The bridge approach uses far less silicon for a given package area, and it scales further because the interposer is no longer limited by what a scanner can print. That does not make the finished package cheaper: CoWoS-L parts cost more per package than CoWoS-S because they are correspondingly larger, and what the bridge buys is the ability to build a package that a single stitched interposer could not reach at all. Both attach the dies with microbumps at 36–45 µm pitch, which is roughly three times finer than flip-chip C4 and about six times coarser than hybrid bonding (027). This is also the entry where the reader learns that packaging capacity, not wafer capacity, has been the binding constraint on AI hardware since 2023.

## Strengths and weaknesses
A silicon interposer gives you the shortest, densest, most predictable die-to-die wiring available short of bonding dies together, and it is the reason HBM works at all. It is expensive in a specific way: the interposer is a large piece of patterned silicon, so it is limited by the 858 mm² reticle field and has to be stitched from multiple exposures past that, and every square millimeter of it consumes 300 mm fab capacity that could have been product. Stitching to about 3.3 reticle fields is routine now, but interposer yield falls with area exactly the way die yield does, and a defect on a $750 interposer takes several $20,000 dies with it. Bridges avoid most of that by keeping the silicon small, at the cost of a harder assembly problem: the bridge has to be embedded flat and the dies have to land across a boundary between two different materials. The shared failure mode is warpage. These packages are large, thin, and made of materials with mismatched expansion, and warpage during reflow shows up as non-wet microbumps at the package corners.

## When to use
Go to 2.5D the moment the design needs HBM, because nothing else carries a 1,024-bit or 2,048-bit interface at the required length. Below that, ask how many die-to-die signals you actually need: a few hundred fits on an organic substrate or fan-out RDL, a few thousand needs a bridge, and tens of thousands needs a full interposer. Choose bridges when the package is large and you want to avoid buying interposer area you do not use, and choose a monolithic interposer when die placement is dense and you want the simpler assembly flow. If the bandwidth requirement is higher still and the dies can be stacked rather than tiled, 027 gives roughly an order of magnitude more connections per mm² at lower energy per bit. And plan on lead times: CoWoS has been sold out since 2023, so capacity allocation is a commercial negotiation, not a purchase order.

## Key numbers
Reticle limit 858 mm², with CoWoS-S stitched to roughly 3.3 reticle fields and CoWoS-L at 5.5 in 2026 · silicon interposer thinned to about 100 µm · microbumps at 36–45 µm pitch (EMIB 45 µm, EMIB-T validated at 36 µm, CoWoS microbumps around 40 µm) · TSMC CoWoS capacity from about 13k wafers per month at the end of 2023 to 35k in 2024 and 70–75k at the end of 2025, targeting 120–140k in 2026 · OSAT partners adding another 50–60k · package cost adder roughly $750 for CoWoS-S and $1,000–1,100 for CoWoS-L.

## Supply chain
This is the tightest chokepoint in AI hardware right now, and it is not a tool problem. TSMC does the large majority of high-end 2.5D through CoWoS, Intel does EMIB in-house for its own products and a small merchant business, and Samsung's I-Cube is a distant third. Amkor, ASE and its SPIL unit, and KYEC take overflow chip-on-wafer and final assembly work, adding perhaps 50–60k wafers a month on top of TSMC's own capacity, but the interposer and the chip-on-wafer step still route through a short list. Capacity has been sold out continuously since 2023, so allocation, rather than price, is how supply gets rationed, and a startup without a committed slot generally cannot buy one at any price. The deeper reason a second source is hard is that interposer processing is 300 mm front-end work: you need a fab, not an assembly house, and TSMC's advantage is that it can convert its own capacity. If TSMC's packaging sites went offline, there is no configuration of the rest of the industry that replaces them inside a year.

## Examples
NVIDIA's Hopper and Blackwell accelerators, AMD's Instinct MI300 series, Google's TPUs, and essentially every other HBM-equipped accelerator ship on CoWoS. Intel uses EMIB across Sapphire Rapids, Ponte Vecchio, and the Meteor Lake generation onward, often combined with Foveros stacking. Xilinx (now AMD) shipped the first commercial silicon-interposer product, the Virtex-7 2000T, in 2011, which is when the technology stopped being a research demo. Samsung's I-Cube and Amkor's S-Connect are the merchant alternatives.

## Economic profile
The cost adder is roughly $750 per package for CoWoS-S and $1,000–1,100 for CoWoS-L, which sounds enormous until you compare it to the $20,000-plus of leading-edge silicon and HBM sitting on top of it. That ratio is why nobody optimizes packaging cost on an AI accelerator and everybody optimizes packaging availability. It also explains the industry's spending pattern: TSMC has been roughly doubling CoWoS capacity every year since 2023 and still selling it out, and the roadmap talk of 14 reticle fields with 24 HBM stacks by 2029 gets as much attention as the transistor roadmap. For anyone building here, the useful question is whether your product's constraint is wafer supply, packaging slots, or HBM allocation, because it has been packaging slots for three years running, and a design that needs less interposer area than a competitor's can ship in volumes the competitor cannot.

## Videos

- https://www.youtube.com/watch?v=WMQtD4hDHak — Packaging Part 3 - Silicon Interposer (Navid Asadi, 16 minutes, 50k+ views)
- https://www.youtube.com/watch?v=EuBRa3NWMPs — [Eng Sub] 2.5D Package Technology: GPU+HBM, AMD, nVIDIA, TSMC (Semicon Talk, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=jO024Rgfzy4 — 2.5D ICs or interposer technology (nanolearning, 10 minutes, 10k+ views)

## Further reading

[Heterogeneous Integration Roadmap 2025, Chapter 22: Interconnects for 2D and 3D Architectures (IEEE Electronics Packaging Society)](https://eps.ieee.org/wp-content/uploads/2026/05/HIR_22_2026_0.9-1.pdf) · [Re-Shoring Advanced Semiconductor Packaging (Center for Security and Emerging Technology)](https://cset.georgetown.edu/publication/re-shoring-advanced-semiconductor-packaging/)
