---
number: 39
name: Multiphase VRMs and Vertical Power Delivery
part: 7
group: Low-voltage delivery
power: [w, kw]
voltage: [lv]
semiconductor: [si]
uses: [it]
maturity: scale
---

## Description
A voltage regulator module is the last converter in the chain, taking the board's 12 V or 48 V rail down to the sub-1 V core rail a processor runs on. It is a buck converter split into roughly 8–24 interleaved phases, each one a half-bridge power stage that packages both FETs and their driver together, each with its own inductor, switching at 400 kHz to 1 MHz and staggered in time so the phase ripple currents partly cancel at the output. Splitting the current that way spreads the heat, shrinks each inductor, and multiplies the effective ripple frequency, which is what lets a modest bank of ceramic capacitors hold the rail steady. The load is the hard part. A current AI accelerator draws close to 1,000 A steady with peaks of 1.5–2 kA at 0.7–0.9 V, and it can change that current by hundreds of amps in well under a microsecond. Converting the power is a solved problem; getting it through the last centimeter of copper into the die is not.

## Strengths and weaknesses
Multiphase buck is cheap, second-sourced, well understood, and its transient response handles the load steps processors actually produce. The problem is the copper between the regulator and the die. A conventional layout with the VRM beside the socket has a power distribution network resistance of roughly 200–400 µΩ, so at 1,000 A that is 200–400 W burned in the board itself, on top of whatever the converter loses, against roughly 800 W actually delivered to the die. Moving the final stage within a few millimeters of the processor cuts the path resistance to around 50 µΩ; putting it directly underneath, on the back side of the board with its output pins mapped to the processor's power pins above, cuts it to 5–7 µΩ. Vertical power delivery costs something real in return: the converter now sits in the worst place on the board to cool, the assembly becomes two-sided with a hot power stage opposite the processor's heat sink, and reworking a failed phase means going in under the most expensive part on the board.

## When to use
If the rail is under about 200 A, put a conventional multiphase VRM beside the socket and stop there, since the layout penalty is small and the extra engineering does not pay. Between 200 and 600 A, shorten the path first: move the last stage within a few millimeters, widen the planes, and consider a two-stage 48 V architecture with a fixed-ratio converter down to an intermediate 6–12 V and multiphase buck below that. Above roughly 600 A, design for vertical power delivery from the start, because board resistance dominates the loss budget and no amount of converter efficiency compensates for it. Pick two-stage when you need commodity parts and a flexible intermediate rail, and single-stage 48 V-to-core when board area under the processor is the binding constraint. Leave on-package integrated regulators alone unless you control the package, since the substrate and its thermal budget then become your problem too.

## Key numbers
Close to 1,000 A steady and 1.5–2 kA peak at 0.7–0.9 V on a current AI accelerator · roughly 8–24 interleaved phases at 400 kHz–1 MHz · conventional PDN resistance 200–400 µΩ, or 200–400 W lost in the board at 1,000 A, against roughly 800 W delivered · about 50 µΩ with the last stage a few millimeters away · 5–7 µΩ with vertical power delivery · quad-phase vertical modules at 280 A and about 2.0 A/mm².

## Examples
Infineon's OptiMOS TDM2454xx quad-phase modules, 280 A at roughly 2.0 A/mm² for vertical delivery; Vicor's factorized power architecture, a fixed-ratio bus converter plus a current multiplier sitting under the processor; multiphase controllers and smart power stages from Monolithic Power Systems, Renesas and onsemi; Intel's fully integrated voltage regulator, which moved final regulation onto the processor in Haswell, was dropped in Skylake, and returned with Ice Lake; Empower Semiconductor's integrated voltage regulators.

## Economic profile
The money argument here is not about what the converter costs. Power stages and controllers for a 1,000 A rail run to tens of dollars on a board carrying an accelerator that sells for tens of thousands, so the buyer picks on performance and supply rather than price. What the choice decides is how much of the rack's electricity turns into computation: burning 200–400 W in the board to deliver roughly 800 W to the die makes the last centimeter only 67–80% efficient, and at rack scale that is both a power bill and cooling capacity that has to be sized for it. Vertical power delivery is bought to recover that, and it is paid for in assembly complexity and yield rather than in components, since the board becomes two-sided and the converter goes under the most expensive part on it. Margin sits with a handful of suppliers (Monolithic Power Systems, Infineon, Renesas, onsemi and Vicor), and the power content per accelerator has grown with every generation as currents rose. What they compete on is amps per square millimeter, because area under and beside the processor is the scarce resource, and that is the number to compare when two vendors quote the same phase count. Expect the same pressure to keep pushing conversion closer to the die, on-package and eventually on-die, wherever the processor vendor also owns the package.

## Videos

- https://www.youtube.com/watch?v=KRRODHoQAHI — Motherboard VRMs As Fast As Possible (Techquickie, 6 minutes, 500k+ views)
- https://www.youtube.com/watch?v=wQpO-Q77oI8 — What are VRM Phases? - Multiphase Buck Converters Explained (ElectrArc240, 18 minutes, 50k+ views)

## Further reading

[Boosting Performance in 48V Power Distribution (Vicor)](https://www.vicorpower.com/resource-library/white-papers/boosting-performance-in-48v-power-distribution) · [Vertical Power Delivery for Emerging Packaging and Integration Platforms — Power Conversion and Distribution (arXiv)](https://arxiv.org/abs/2309.10141)
