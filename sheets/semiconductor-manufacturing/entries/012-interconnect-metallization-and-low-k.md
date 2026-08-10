---
number: 12
name: Interconnect Metallization and Low-k
part: 3
group: Process modules
devices: [logic, memory]
node: [mature, adv, lead, front]
wafer: [w300]
toolcost: low
suppliers: few
---

## Description
The back end of line is the 15 to 20 levels of copper wiring that connect transistors to each other and out to the package, and it is where a modern logic die now loses most of its delay and much of its power. Each level is built by damascene: etch trenches and vias into a low-k dielectric, line them with a barrier and a copper seed, electroplate copper into them, and polish the overburden away (manufacturing-processes 194 covers the CMP step). The trouble is that the barrier does not scale. Tantalum nitride has to be a few nanometers thick whatever the wire is, so below roughly 20 nm wire width a growing share of the cross-section is barrier and liner rather than conductor. Copper itself also gets worse as it narrows: once the wire is comparable to the electron mean free path (about 40 nm in copper at room temperature), electrons scatter off sidewalls and grain boundaries and effective resistivity climbs steeply. Every fix so far is partial. Cobalt and ruthenium go into the tightest levels because they need a thinner barrier or none at all, porous low-k dielectrics around k = 2.5–3.0 and deliberate air gaps hold capacitance down, and the upper levels stay thick and wide to carry power.

## Strengths and weaknesses
Dual damascene is cheap, self-aligned between the via and the trench above it, and has thirty years of manufacturing learning behind it, which is why nobody has replaced it. The weaknesses are mechanical and electrical at the same time. Porous low-k is a weak, brittle film, so it cracks and delaminates under CMP downforce and again under the thermal stress a flip-chip package applies at the die corners, and porosity lets moisture and precursor gases in. The electrical failure mode is electromigration: at high current density, copper atoms drift with the electron flow and open a void at a via, which is a wear-out mechanism that shows up after months or years in the field rather than at wafer sort. That is why the current-density limit per wire, not the resistance, is often what sizes a power net.

## When to use
You do not really choose this module. Every CMOS die above a couple of metal levels is built with damascene copper, so the decisions are how many metal levels to pay for, how aggressive to be on dielectric constant, and whether to buy cobalt or ruthenium at the tightest levels. If your design is wire-limited rather than transistor-limited, which most high-performance digital designs now are, spend the money there and look hard at backside power delivery (016) before you buy a lithography generation. If you are on a mature analog or power process at 180 nm and above, subtractive aluminum metallization is still cheaper and perfectly adequate, and thick top-metal aluminum is what carries the current in a power device anyway. Do not push to the most aggressive low-k available unless you have a packaging team that has already seen the delamination problem.

## Key numbers
15–20 metal levels on a leading logic die · resistivity size effect below roughly 20 nm wire width · electron mean free path in copper about 40 nm at room temperature · low-k dielectrics around k = 2.5–3.0, plus air gaps · cobalt and ruthenium at the tightest levels, copper above them · world ruthenium supply roughly 30 tonnes a year, over 90% of it from South Africa.

## Supply chain
The equipment side is comfortable by this sheet's standards. Barrier and seed PVD is dominated by Applied Materials, copper electroplating comes from Applied, Lam Research, and Ebara, low-k CVD from Applied and Lam, and CMP from Applied and Ebara. Four to eight credible suppliers means no single tool can stop a fab. The materials are tighter: CMP slurries come from Entegris, Fujimi, and Resonac, most polishing pads come from DuPont, and the metal-organic precursors for cobalt and ruthenium films come from a short list of specialty chemical firms including Merck KGaA, Air Liquide, and Adeka. The real concentration is in the metal itself. Ruthenium is recovered only as a byproduct of platinum-group mining, world supply is on the order of 30 tonnes a year, and over 90% of it comes from South Africa with most of the rest from Russia. Semiconductor demand is small against that today because ruthenium is used as a thin liner. If the industry moves it into the wires themselves at 2 nm and below, a market that cannot expand supply on its own starts to matter, and there is no second country to buy from.

## Examples
IBM's CMOS 7S at 220 nm in 1997 was the first copper-interconnect logic process; TSMC's copper and low-k transition at 130 nm is what let it start winning leading-edge customers. Intel introduced air gaps at 14 nm and cobalt at its two tightest metal levels at 10 nm. Intel has also published a subtractive ruthenium scheme at sub-25 nm pitch reporting roughly 55% lower line resistance and 40% lower line-to-line capacitance than the damascene equivalent, and imec's interconnect program has driven most of the public work on ruthenium and molybdenum as copper replacements. Applied Materials' Endura platform is the standard barrier and seed tool.

## Economic profile
Individually these are cheap tools. A plating or CMP system is a few million dollars against $90M or more for an immersion scanner, which is why the tool-cost tag here is low. The cost shows up in step count: every metal level is its own lithography, deposition, etch, plate, and polish sequence, so metal levels add cost linearly and a 15-level stack is a large fraction of the total steps on a wafer. The curve is going the wrong way. Levels keep increasing, the metals get more exotic, and the performance return per level keeps shrinking, because the resistance problem is set by physics rather than by process control. That is the reason backside power delivery (016) is worth its considerable trouble, and the reason interconnect research gets attention out of proportion to its equipment spend.

## Videos

- https://www.youtube.com/watch?v=ds8RLUdjqLs — Lecture 31 (CHE 323) Copper Dual Damascene (Chris Mack, 17 minutes, 10k+ views)
- https://www.youtube.com/watch?v=dfxDakaX1WA — Back End Of Line : Part 1 (nanolearning, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=hzb9WyEiIjI — Materials Innovation for Faster Interconnects (Applied Materials, 12 minutes, 5k+ views)

## Further reading

[Imec demonstrates semi-damascene interconnects with fully self-aligned vias at 18nm metal pitch (imec)](https://www.imec-int.com/en/articles/imec-demonstrates-semi-damascene-interconnects-fully-self-aligned-vias-18nm-metal-pitch) · [Mineral Commodity Summaries 2025: Platinum-Group Metals (US Geological Survey)](https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-platinum-group.pdf)
