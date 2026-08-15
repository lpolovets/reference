---
number: 149
name: "Reflow soldering"
part: 3
group: "Electronics Packaging & Assembly"
materials: [semi]
volumes: [high]
tooling: low
---

## Description

Solder paste and components pass through a controlled thermal profile until joints form.

## Strengths and weaknesses

Joins many surface-mount components simultaneously. Warpage, oxidation, voids, thermal damage, and profile control are key risks.

## When to use

Reflow is the default soldering step for any surface-mount board, because every joint forms in one oven pass. Thermal profiling is the main engineering effort, and lead-free peaks around 245–250 °C set what the components have to survive. Use wave or selective soldering when through-hole connectors dominate the board, hand or hot-air work for prototypes and rework, and vapor phase or vacuum reflow when void-sensitive power or RF parts require it.

## Key numbers

Peak temperature 245–250 °C for lead-free alloys, which melt around 217 °C · 60–90 seconds above melting and 4–6 minutes total through the oven · ramp rates 1–3 °C/s with a 150–200 °C soak for 60–120 seconds · 7–12 heating zones at conveyor speeds 0.5–1.5 m/min · BGA voiding accepted to about 25% of ball area under IPC-A-610 · ovens $30k–150k.

## Examples

Printed circuit boards, LED assemblies, electronic modules.

## Economic profile

An oven at $30–150k processes whatever the placement machines feed it at 0.5–1.5 m/min, so its cost per board is small and falls toward nothing at volume. The expense is profiling, since every new board needs a thermal profile developed and verified before the first good unit. Lead-free peaks of 245–250 °C also narrowed the window between melting the solder and damaging the components, so profiles are less forgiving than they used to be.

## Videos

- https://www.youtube.com/watch?v=DYrucIWig24 — How to do SMD Reflow Soldering properly! || Hot Air VS Sand VS Reflow Oven (GreatScott!, 10 minutes, 500k+ views)
- https://www.youtube.com/watch?v=-uXqwwzpnzs — Reflow Soldering Machine Explained | SMT Reflow Process Step by Step (Technical Guideji, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=I_B-D0FvDx8 — Reflow Soldering Basics (Neoden USA, 9 minutes, 10k+ views)

## Further reading

[Reflow Soldering for PCB Assembly (Electronics Notes)](https://www.electronics-notes.com/articles/constructional_techniques/soldering/reflow-soldering.php)
