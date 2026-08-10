---
number: 25
name: Fan-out wafer-level packaging
part: 6
group: Conventional packaging
devices: [logic, rf, analog]
node: [mature, adv, lead]
wafer: [w300, panel]
toolcost: low
suppliers: few
---

## Description
Fan-out packaging deletes the substrate. Instead of bonding a die onto a laminate, you dice the wafer first, place only the known-good dies onto a carrier with deliberate gaps between them, mold the whole thing into a reconstituted wafer or panel, and then build the redistribution layers straight onto the molded surface. The gaps are what "fan-out" means: routing can spread past the die edge, so the package can have far more balls than the die has pads. Because the RDL is built with wafer-fab lithography rather than PCB-style laminate processing, it gets much finer than a substrate can manage, and because there is no substrate and no C4 bump, the package is thinner and the electrical path shorter. The two hard parts both come from the mold: dies move during compression molding and cure, and the reconstituted wafer warps because mold compound and silicon expand at different rates.

## Strengths and weaknesses
The RDL pitch is the headline. TSMC specifies 2 µm lines and spaces on InFO_oS against 5 µm and up for mainstream fan-out and far coarser on an organic substrate, so you get substrate-free routing density at lower cost and lower profile than flip-chip. It also integrates well: passives, multiple dies, and package-on-package memory all drop into the same flow. The weaknesses are the two mold problems. Die shift means each die ends up tens of microns from where you placed it, so a fixed RDL pattern no longer lines up, and the answer in production is adaptive patterning, where each die's actual position is measured and the exposure is adjusted per unit. Warpage limits how large and how thin a package can get, and it is the reason large fan-out parts need careful mold-compound selection and sometimes a stiffener. The failure mode when either goes wrong is an open or a shorted RDL trace at the die edge, found at final test after all the assembly money has been spent.

## When to use
Pick fan-out when the part needs more I/O than wire bond can give but the flip-chip substrate is too expensive or too thick, which is exactly the mobile and RF situation. It is also the right answer when height matters, since deleting the substrate and the bump layer saves real millimeters in a phone. Use chip-last (RDL-first) if die cost is high and you cannot afford to lose good dies to RDL yield; use chip-first if throughput and cost matter more. Don't reach for fan-out if you need a very wide bus between a processor and memory stacks, because RDL alone will not carry a thousand-plus wires at the required density; that is 026's job. And if the design is a few hundred low-speed pins on a cost-driven part, wire bond (024) is still cheaper.

## Key numbers
InFO_oS specifies 2 µm RDL lines and spaces, against 5 µm and up for mainstream fan-out · packages over 65 mm square in production · in every iPhone application processor since the A10 in 2016 · no organic substrate and no C4 bump in the stack-up · panel formats roughly 500–600 mm on a side, against a 300 mm round wafer, for better area utilization.

## Supply chain
Fan-out is the least concentrated of the advanced packaging options, which is unusual and useful. TSMC's InFO is the highest-volume implementation, but ASE (FOCoS), Amkor, JCET, Powertech, and Samsung all run production fan-out lines, and Deca Technologies licenses the adaptive-patterning approach that solves die shift. The original eWLB process came out of Infineon and was licensed widely, which is a large part of why the supplier base is broad today. The equipment is also unremarkable: molding presses, i-line or KrF steppers for RDL, plating tools, and standard wafer-handling. What is genuinely scarce is process knowledge on warpage control at large package sizes, and panel-level capacity, where the tool sets are still being qualified. If you get cut off from one fan-out supplier you can usually qualify another in months rather than years, which cannot be said of anything in 026 or 027.

## Examples
TSMC InFO has carried every iPhone application processor since the A10 in 2016, and InFO_oS extends it to packages over 65 mm square for networking and AI parts. ASE's FOCoS and Amkor's S-SWIFT serve the merchant market. Deca Technologies' M-Series with Adaptive Patterning is the standard answer to die shift and is licensed to several OSATs. Infineon's eWLB, licensed to STATS ChipPAC (now JCET), NANIUM (now Amkor), and ASE, is where the whole category started. Panel-level fan-out lines are running at Samsung, Powertech, and several Chinese OSATs.

## Economic profile
Fan-out sits between wire bond and 2.5D on cost and captures most of the routing benefit of a substrate for less money, which is why it grew from a mobile niche to a mainstream option in about a decade. The economics are area-driven: everything is priced per unit of carrier area, so the cost lever is packing more dies onto one carrier, and that is the whole argument for moving from a 300 mm round wafer to a rectangular panel of 500–600 mm on a side, where edge waste is much smaller. Yield behaves differently than in front-end manufacturing, because a single bad die on a reconstituted wafer can lose you the RDL work spent on it, which is why chip-last flows exist and why known-good-die testing (031) is a precondition. For anyone building a business here, the honest read is that fan-out is a competitive market with many qualified suppliers, so returns come from process yield and panel-size transitions rather than from having a capability nobody else has.

## Videos

- https://www.youtube.com/watch?v=pOBkSEOLqZ8 — What is Fan-Out Wafer-Level Packaging? (Brewer Science, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=v8obQndavuI — [Eng Sub] TSMC InFO Fan Out Wafer Level Package-Apple iPhone, Package on Package (Semicon Talk, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=ddEMy6xgg3s — Packaging Part 6 - Wafer to Panel Level Packaging (Navid Asadi, 19 minutes, 10k+ views)

## Further reading

[Heterogeneous Integration Roadmap 2025, Chapter 23: Wafer-Level Packaging (IEEE Electronics Packaging Society)](https://eps.ieee.org/wp-content/uploads/2026/05/HIR_23_WLP_rev0.9.pdf) · [Fan-Out Wafer and Panel Level Packaging as Packaging Platform for Heterogeneous Integration (Micromachines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6562530/)
