---
number: 24
name: Wire-bond and flip-chip packaging
part: 6
group: Conventional packaging
devices: [logic, memory, power, analog, rf]
node: [mature, adv, lead]
wafer: [w300, panel]
toolcost: low
suppliers: many
---

## Description
This is the first-level interconnect decision, the one every chip makes before any of the exotic packaging on this sheet becomes relevant. Wire bond leaves the die face-up and runs a fine gold, copper, or palladium-coated copper wire from each perimeter pad to a lead frame or laminate substrate, one wire at a time. Flip-chip turns the die over, puts solder bumps across its whole face, reflows it onto a build-up substrate, and fills the gap with underfill. The difference that decides the choice is geometry: wire-bond pads live only on the die edge, so connection count scales with perimeter, while flip-chip bumps cover area, so connection count scales with the square of die size. Flip-chip also gives a much shorter path from the package to the die's power grid, which matters once current draw gets large. See manufacturing-processes 150, 151, 152, and 153 for how the bonding and encapsulation steps actually run; this entry is about which one to pick and what it costs.

## Strengths and weaknesses
Wire bond is cheap, mature, endlessly second-sourced, and reworkable in ways nothing downstream is, and a bonder that costs a few hundred thousand dollars will run for twenty years. Its ceiling is hard: at 40–60 µm pad pitch on the perimeter you top out in the low hundreds of connections, the wires add inductance that hurts at high frequency, and every amp of supply current runs down a long thin wire. Flip-chip buys thousands of I/O and a clean power path, and pays for it with an ABF build-up substrate that can cost more than the die on a mature part. Its characteristic failure mode is thermomechanical rather than electrical: the die and the organic substrate expand at different rates, so every power cycle works the solder joints and the underfill, and cracks show up at the die corners and in the substrate's low-k layers under the bumps. Warpage during reflow on a large thin package is the other one, and it gets worse as substrates get bigger.

## When to use
Use wire bond whenever the part needs fewer than roughly 300 connections and is not power- or frequency-critical, which covers most microcontrollers, power ICs, sensors, and NAND. Use flip-chip once I/O count passes what the perimeter can hold, once supply current makes bond-wire inductance a power-integrity problem, or once the die is a processor of any kind. If the part is somewhere in the middle, price the substrate first, because the ABF build-up substrate rather than the bonding step is what makes flip-chip expensive at low pin counts. If flip-chip's substrate cost is the problem but you still need the I/O, look at fan-out (025), which deletes the substrate entirely. If you need a thousand-plus wires to a memory stack, neither of these reaches; go to 026.

## Key numbers
Wire-bond pads at 40–60 µm pitch on the die perimeter, topping out in the low hundreds of connections · flip-chip C4 bumps at roughly 130 µm pitch across the die face, giving thousands of I/O · HPC substrates have gone from 3+3 to 13+13 build-up layers · Ajinomoto supplies over 95% of the ABF film those substrates are built from · wire-bond cost per die runs in cents, while flip-chip package cost is dominated by the substrate.

## Supply chain
The assembly step itself is the least concentrated thing on this sheet. Dozens of OSATs will bond a die, led by ASE, Amkor, JCET, Powertech, and TongFu, and the bonder market has several credible vendors in ASMPT, Kulicke & Soffa, Besi, and Shinkawa. The concentration is one layer up, in the substrate. Ajinomoto supplies over 95% of the ABF dielectric film that every flip-chip build-up substrate is laminated from, which makes one Japanese chemical company a single point of failure for essentially all high-performance packaging, and the 2021–2023 shortage of it constrained the whole industry. The substrates themselves come from a short list (Ibiden, Unimicron, Shinko, AT&S, Nan Ya, Kyocera), and the highest-layer-count HPC substrates come from a shorter one, with Ibiden and Unimicron spending billions to add capacity. Glass-core substrates are the intended replacement and would move the chokepoint to glass makers such as Corning and AGC, but nothing has shipped in volume yet.

## Examples
Nearly all NAND flash, microcontrollers, and power-management ICs ship wire-bonded, often as stacked die inside one plastic package. Every desktop and server CPU, GPU, and mobile application processor is flip-chip. Substrate suppliers include Ibiden and Shinko (long the Intel supply base), Unimicron, AT&S, and Nan Ya PCB. On the tooling side, ASMPT and Kulicke & Soffa dominate wire bonders. Intel's glass-substrate program and SKC's Absolics plant in Covington, Georgia are the two most visible attempts to replace the organic build-up substrate.

## Economic profile
For a mature part, packaging and test together are roughly 15–20% of cost, and the wire-bond half of that is measured in cents. Flip-chip breaks that model because the substrate is a separate manufactured product with its own capacity cycle. An HPC substrate with 13+13 build-up layers is a hundred-plus-step process with its own yield problem, and during the 2021–2023 shortage it was the reason chips could not ship. Cost per connection is the number that decides the crossover: wire bond wins on total cost below a few hundred I/O and loses badly above it, since each additional wire is an additional second of machine time while each additional bump is free. The structural point for anyone investing here is that the assembly business is a commodity with many suppliers and thin margins, while the substrate business behind it is concentrated, capital-hungry, and periodically the binding constraint on the entire industry.

## Videos

- https://www.youtube.com/watch?v=tp_Yv0cyvFw — Wirebonding Overview Animation (Semitracks Inc., 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=HiJHMBPcOyg — [Eng Sub] Substrate - Flipchip Substrate Manufacturing Process, Core, Build-up, ABF (Semicon Talk, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=nNpuiJitKwk — A Brief History of Semiconductor Packaging (Asianometry, 19 minutes, 100k+ views)

## Further reading

[Research Progress on Bonding Wire for Microelectronic Packaging (Micromachines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9962244/) · [Research on the Reliability of Advanced Packaging under Multi-Field Coupling: A Review (Micromachines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11051953/)
