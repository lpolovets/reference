---
number: 1
name: Alkaline Electrolysis
part: 1
group: Electrolysis
sector: [chem, ref, steel, exp]
form: [gas]
carbon: zero
maturity: mature
cost: med
---

## Description
Alkaline electrolysis drives direct current through 25–30% potassium hydroxide between nickel electrodes separated by a porous diaphragm, at 60–80 °C. Hydroxide ions carry the charge, so the catalysts are nickel and its alloys rather than platinum-group metals, and the stack has the cheapest bill of materials of the four electrolyzer types. Industrial units have run since the 1920s, originally on Norwegian hydropower to make fertilizer, and alkaline is still roughly 70% of installed electrolyzer capacity worldwide (it was 60% in 2022, and the share rose as Chinese projects came online). Systems consume 50–55 kWh of electricity per kg of hydrogen and deliver it at 1–30 bar. The mechanism that sets the operating envelope is gas crossover: at low current the gas production rate falls but hydrogen diffusion through the diaphragm does not, so the hydrogen content of the oxygen stream climbs, and controls trip the plant when it reaches 2% by volume, half the flammability limit.

## Strengths and weaknesses
The strengths are the lowest capex per kW of any electrolyzer, the longest stack life (60,000–90,000 hours), no iridium or platinum anywhere in the cell, and a Chinese manufacturing base running at gigawatt scale. The weaknesses are dynamic: minimum load is typically 10–20% of rating, ramping takes minutes rather than seconds, output pressure is low enough that a compressor is needed downstream, and the KOH loop adds pumps, degassers, and a caustic inventory to maintain. The failure mode to plan around is the crossover trip. A stack chasing a variable wind profile does not gently turn down. It hits minimum load, accumulates hydrogen in the oxygen header, and shuts off, which is why alkaline projects usually buy firm power or add a buffer rather than bidding for the cheapest hours.

## When to use
Default to alkaline for anything above a few MW where the power supply is firm or can be firmed. If you are buying tens or hundreds of MW and expect a capacity factor above roughly 50%, the capex advantage compounds and nothing else competes on cost per kilogram. Pick PEM instead if you need second-scale load following, 30 bar or higher delivery without a compressor, or a small footprint inside an existing plant. Pick solid oxide only if you have free steam on site. And if the business case depends on Western-priced equipment, price it against a landed Chinese system first, because the gap is often wider than the project's entire margin.

## Key numbers
25–30% KOH at 60–80 °C · output 1–30 bar · 50–55 kWh/kg at the system level · stack life 60,000–90,000 hours · minimum load 10–20% with minute-scale ramping · roughly 70% of installed electrolyzer capacity · $200–500/kW installed in China against $750–1,300/kW in the West.

## Energy and losses
A kilogram of hydrogen holds 33.3 kWh on a lower-heating-value basis, so a system drawing 50–55 kWh/kg puts 61–67% of the electricity into the fuel (75–79% measured against the 39.4 kWh higher heating value, which is why vendor efficiency claims need a basis attached). The stack itself accounts for roughly 47–50 kWh/kg; rectifier losses, KOH circulation, gas drying, and water treatment take the remaining 5–10%. Output at 1–30 bar leaves compression still to be paid for downstream, roughly 3–4 kWh/kg to reach 700 bar. On an average grid at 0.35 kg CO2/kWh, that same 55 kWh/kg produces about 19 kg CO2e per kg of hydrogen, so the low-carbon tag on this entry assumes dedicated renewables, not a grid connection.

## Examples
Sinopec's Kuqa plant in Xinjiang is the reference project: 260 MW of alkaline stacks on dedicated solar, designed for 20,000 t/yr of hydrogen piped to the nearby Tahe refinery. It ran near 20% of design output for its first two years, with Sinopec targeting full throughput only at the end of 2025. Baofeng's 150 MW plant in Ningxia has operated since late 2021. Chinese suppliers include Longi Hydrogen, PERIC, Sungrow Hydrogen, and Cockerill Jingli; Western ones include thyssenkrupp nucera (whose "scalum" alkaline module is rated at 20 MW), John Cockerill, Nel, Sunfire, and Green Hydrogen Systems. Hysata's capillary-fed cell is the most credible attempt to close the efficiency gap, with a claimed 41.5 kWh/kg at system level.

## Economic profile
Two numbers drive everything. The first is equipment price: Chinese alkaline systems have sold at $200–500/kW, with recent domestic procurements reported near $200–230/kW, against $750–1,300/kW for Western systems. The second is electricity, which is 60–75% of the cost of electrolytic hydrogen; at 55 kWh/kg, every $10/MWh on the power price adds about $0.55/kg. Capacity factor matters as much as the power price, because a stack running 2,000 hours a year has to recover its capital over a quarter of the kilograms of one running 8,000 hours. Manufacturing alkaline stacks has been a hard business to make money in, since the design is old, widely copied, and priced from China. The durable positions have been in project development and in owning cheap firm power, not in the stack.

## Videos

- https://www.youtube.com/watch?v=TiXzp_VEJCQ — Lesson 3 Unit 2 Alkaline electrolysis technology Part 1 (ASSET - Hydrogen, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=z23Z3nXyWd8 — Green Hydrogen Systems Electrolyser Tour (Engineering with Rosie, 15 minutes, 100k+ views)
- https://www.youtube.com/watch?v=CpF2j6SwHSg — Build an Alkaline Water Electrolyser to Produce H2 | High Output (Dominic Ó Gallachóir, 14 minutes, 5k+ views)

## Further reading

[Hydrogen Production: Electrolysis (US Department of Energy)](https://www.energy.gov/eere/fuelcells/hydrogen-production-electrolysis) · [Separators and Membranes for Advanced Alkaline Water Electrolysis (Chemical Reviews)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11117188/)
