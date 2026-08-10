---
number: 8
name: EUV lithography (0.33 NA)
part: 2
group: EUV lithography
devices: [logic, memory]
node: [adv, lead, front]
wafer: [w300]
toolcost: high
suppliers: one
---

## Description
EUV lithography prints with 13.5 nm light, which is made by dropping molten tin into a vacuum chamber tens of thousands of times a second and vaporising each droplet with a CO2 laser so it radiates as a plasma. Everything downstream follows from the fact that EUV is absorbed by air and by glass: the whole optical path is multilayer molybdenum-silicon mirrors in vacuum, the mask is reflective rather than transmissive, and each mirror gives back only about 70% of what hits it, so a small fraction of the light the source makes reaches the resist. A 0.33 NA scanner prints about 13 nm half-pitch in a single exposure, which is what replaced three or four immersion passes at the tightest layers from roughly N7 down. The tool draws around a megawatt and costs roughly $180M for an NXE:3800E, with ASML's blended EUV selling price nearer €230M.

## Strengths and weaknesses
One EUV exposure replaces several optical passes, so it cuts step count, cycle time, and edge placement error at once, and that compound saving is why every leading-edge fab bought in. The weaknesses are capital cost, power, source availability, and stochastics. At these doses the number of photons landing in a single feature is small enough that shot noise produces random missing contacts and bridged lines — a yield loss you buy your way out of with more dose, which costs throughput, or with better resist chemistry, which is a slow research problem. Mask defectivity is the other failure mode. A single defect in a mask blank prints on every die on every wafer, and a pellicle that both survives EUV and transmits it is itself a hard engineering problem.

## When to use
If a layer needs finer than 38 nm half-pitch and you can get a tool, compare one EUV exposure against three or more immersion passes on cost per wafer-layer, cycle time, and edge placement error. EUV usually wins from about N7 down, which is why adoption was universal among fabs that could buy one. Do not use EUV on layers immersion prints — nobody does, and a leading-edge flow still runs the majority of its layers on 006. If you are building memory that scales by stacking rather than shrinking, EUV buys almost nothing: 3D NAND's cost curve is decoupled from lithography entirely (017), and DRAM adopted EUV late and on only a few layers (018). If you cannot buy a tool, go to 007 and accept the cost.

## Key numbers
13.5 nm light at NA 0.33, printing about 13 nm half-pitch in a single exposure · roughly $180M for an NXE:3800E, with ASML's blended EUV selling price around €230M · 220 wafers an hour at 30 mJ/cm², up from 160 on the NXE:3600D · source power about 600 W today, with 1,000 W demonstrated and 330 wafers an hour targeted for 2030 · roughly a megawatt of power per scanner · ASML shipped 48 EUV systems in 2025 and plans about 65 in 2026.

## Supply chain
This is the most concentrated step in the industry and the reason export control works as a policy lever at all. ASML is the only company that builds a production EUV scanner, and no other country has reproduced one. Below ASML the chain is a series of single points: Zeiss SMT alone makes the mirrors, figured to sub-nanometer accuracy; Trumpf alone makes the CO2 drive lasers; Cymer, which ASML owns, makes the source; AGC and Hoya supply roughly 93% of mask blanks; and Japanese firms hold over 95% of high-end EUV resist. Every one of those would take a competitor a decade to replace. EUV has been unexportable to China since 2019 and no tool has ever been delivered there. Chinese programmes have produced laboratory sources and a steady flow of press reports about prototypes; none has produced a production scanner, and the mirror and source supply chain is a harder problem than the scanner itself.

## Examples
ASML's NXE:3600D and NXE:3800E. TSMC has used EUV from N7+ through N5, N3, and N2; Samsung from 7LPP; Intel from Intel 4 onward and on 18A; SK Hynix and Micron on selected DRAM layers. The Dutch government's 2019 decision not to licence a shipment to SMIC is the single clearest example of what sole-source supply means in practice.

## Economic profile
Cost per wafer-layer on EUV is high, since you are depreciating a tool that costs $180M and up at 220 wafers an hour and feeding it a megawatt, and it still beats the multi-patterning it replaced at the tightest layers. ASML's position is the most defensible franchise in semiconductors, and the moat is a two-decade supply chain rather than a patent portfolio, which is why nobody has bought their way into it. For supply analysis, EUV shipments are the tightest available proxy for leading-edge capacity growth: 48 systems in 2025 and about 65 planned for 2026 puts a ceiling on how fast advanced wafer starts can expand, no matter how much capex anyone announces.

## Videos

- https://www.youtube.com/watch?v=5Ge2RcvDlgw — The Extreme Engineering of ASML’s EUV Light Source (Asianometry, 17 minutes, 500k+ views)
- https://www.youtube.com/watch?v=NHSR6AHNiDs — TRUMPF EUV lithography – This all happens in one second (TRUMPFtube, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=RI3lCUEzSvE — How EUV lithography works (IBM Research, 2 minutes, 100k+ views)

## Further reading

[Making EUV: from lab to fab (ASML)](https://www.asml.com/en/company/stories/2022/making-euv-lab-to-fab) · [Sailing along the stochastic cliffs (imec)](https://www.imec-int.com/en/imec-magazine/imec-magazine-july-2019/euv-lithography-sailing-along-the-stochastic-cliffs)
