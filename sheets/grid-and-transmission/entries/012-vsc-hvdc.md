---
number: 12
name: VSC HVDC
part: 3
group: HVDC converters
voltage: [ehv]
roles: [bulk, volt, stab]
lead: yr5
siting: corr
maturity: mature
---

## Description
Voltage-source converter HVDC uses IGBTs, which turn off on command, so the converter no longer depends on the AC system to commutate. Modern designs are modular multilevel converters: hundreds of small submodules in series, each switched in or out to build a staircase that approximates a sine wave. The output is clean enough that the huge harmonic filter yards of an LCC station disappear. Because the converter controls its own output voltage and angle, it can set real and reactive power independently, and it can energize a network that has no generation of its own.

## Strengths and weaknesses
Independence from the AC system is what makes VSC the default for anything new. It works into weak or passive grids, provides reactive support like a STATCOM whether or not power is flowing, can black-start a dead network, and reverses power flow without reversing DC voltage polarity, which is what makes multi-terminal schemes practical. The station footprint is roughly half an LCC's. The costs: converter losses run about 1% per station against 0.7%, IGBT stacks cost more per MW, and top ratings are lower, in the 2–3 GW range against 8–12 GW for UHV LCC.

## When to use
Use VSC for offshore wind export, city infeeds, links into weak grids, any scheme with more than two terminals, and anywhere the converter's reactive support has value in its own right. That covers nearly all HVDC being ordered in Europe and the US today. LCC still wins for the largest overhead point-to-point transfers into strong systems, where its lower losses and higher ratings matter more than flexibility. Whichever you pick, procure early: converter transformers and IGBT supply are both bottlenecked, and delivery drives the project schedule more than engineering does.

## Key numbers
Typical ratings 1–3 GW per link at 320–525 kV DC · converter losses about 1% per station · reactive power controllable across the full range, independent of active power · station footprint roughly half an LCC's · lead times of 3–5 years for converters, and longer where a supplier's order book is full.

## Examples
The German offshore grid connections at 320 and 525 kV, which made VSC the standard for North Sea wind; Champlain Hudson Power Express into New York City; INELFE between France and Spain; Kriegers Flak, which links Danish and German grids through a wind farm.

## Videos

- https://www.youtube.com/watch?v=sTe9EyN6bt8 — HVDC Showdown LCC vs VSC Converter Technology Explained (ABDELAZIM SAID, 7 minutes, under 1k views)
- https://www.youtube.com/watch?v=96MRJiXG_9I — VSC-HVDC for Beginners | Modern Grid Technology Explained (Powertech simplified , 3 minutes, under 1k views)
- https://www.youtube.com/watch?v=eQE6nt3BaEc — Mitsubishi Electric HVDC Diamond Promotion Video (Mitsubishi Electric Power Products Inc., 4 minutes, 1k+ views)

## Further reading

[Reliability Guideline: BPS-Connected Inverter-Based Resource Performance (NERC)](https://www.nerc.com/globalassets/who-we-are/standing-committees/rstc/irpwg/inverter-based_resource_performance_guideline.pdf)
