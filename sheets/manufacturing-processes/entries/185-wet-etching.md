---
number: 185
name: "Wet etching"
part: 5
group: "Semiconductor & Microscale"
materials: [semi]
volumes: [high, cont]
tooling: low
---

## Description

Liquid chemicals selectively dissolve exposed material. Wet etching may be isotropic or crystallographically anisotropic.

## Strengths and weaknesses

Inexpensive, high-throughput, and chemically selective. Isotropic etchants cause lateral undercutting; anisotropic KOH or TMAH silicon etching is constrained by crystal planes and produces characteristic angled sidewalls.

## When to use

Use wet etching when features are larger than a few microns and undercut of roughly the etch depth is tolerable (blanket film stripping, PCB and metal patterning, oxide removal). It is cheap because batch immersion processes dozens of wafers or panels at once for the cost of chemicals, and selectivity between materials can be effectively infinite. KOH or TMAH bulk micromachining is the cheap route to deep cavities, membranes, and V-grooves when the 54.7-degree sidewalls of (100) silicon are acceptable or even wanted. If the design needs vertical sidewalls, sub-3 µm features, tight CD control, or geometry independent of crystal orientation, move to dry plasma etching, and to DRIE for deep high-aspect-ratio silicon.

## Key numbers

Practical feature floor around 3 µm · isotropic undercut roughly equal to the etch depth · KOH etches (100) silicon at 1–1.4 µm/min at 80 °C, TMAH at about half that · KOH (100):(111) selectivity 100–400:1, which is what produces the 54.7-degree sidewall · buffered oxide etch removes thermal SiO2 at roughly 100 nm/min · batch immersion runs 25–50 wafers at once, with chemicals the main cost.

## Examples

Printed circuit boards, silicon bulk micromachining, glass channels, metal patterning.

## Economic profile

Wet benches are the cheapest process equipment in the fab, and batch immersion runs 25–50 wafers at once, so cost per wafer is very low. Chemicals are the main cost, and their disposal is a growing part of it, since spent acids and solvents are regulated waste. Those economics keep wet etching in service for MEMS, cleaning, and non-critical layers long after dry etching took over the critical ones, because nothing else matches its cost per wafer above a few microns.

## Videos

- https://www.youtube.com/watch?v=UKf0offCyw0 — Etch Processes for Microsystems - Part I (Support Center for Microsystems Education, 16 minutes, 50k+ views)
- https://www.youtube.com/watch?v=zkdQddMZSyM — The Etching Process (PhotofabricationEng, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=lGHN6nVTfPA — Wet Etching Explained: How It Really Works in a Chip Manufacturing (Exploring Science & Technology, 13 minutes, under 1k views)

## Further reading

[Wet-Chemical Etching of Silicon and SiO2 (MicroChemicals)](https://www.microchemicals.com/technical_information/silicon_etching.pdf) · [KOH Anisotropic Etch Rate Data (BYU Cleanroom)](https://cleanroom.byu.edu/KOH)
