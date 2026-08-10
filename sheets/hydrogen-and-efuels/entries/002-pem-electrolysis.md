---
number: 2
name: PEM Electrolysis
part: 1
group: Electrolysis
sector: [ref, chem, veh, pwr]
form: [gas]
carbon: zero
maturity: comm
cost: med
---

## Description
A PEM electrolyzer replaces the liquid electrolyte with a solid perfluorosulfonic-acid membrane. Protons cross the membrane and the two gas streams are separated by a sheet of polymer rather than a porous diaphragm, so the cell can hold a large pressure difference across itself. That is what lets the stack deliver hydrogen at 30–50 bar routinely and 70–80 bar in high-pressure designs while the oxygen side stays near ambient, and what lets it run anywhere from 0 to 100% of rated load in under a second without a crossover problem. The acidic environment rules out nickel: the oxygen electrode needs iridium oxide and the hydrogen electrode platinum, and the flow fields and porous transport layers have to be titanium. Systems consume 50–55 kWh/kg, close to alkaline, and stacks last 50,000–80,000 hours. PEM is about 20% of installed electrolyzer capacity, down from 30% in 2022 as Chinese alkaline built out around it.

## Strengths and weaknesses
PEM's advantages are all about behavior rather than cost: sub-second response, full turndown to zero, high current density and therefore a small footprint, and delivery pressure that removes a compression stage. The constraint that defines the technology is iridium. Stacks use roughly 0.3–0.7 g/kW, and world iridium production is about 7–8 tonnes a year, all of it a byproduct of platinum mining in South Africa, so 10 GW of PEM at today's loadings absorbs something like half of a year's supply. PEM also needs ultrapure water rather than the treated water alkaline tolerates. The failure mode is membrane thinning and pinholing under load cycling, which raises hydrogen crossover into the oxygen stream until the stack has to be rebuilt, and stack replacement is a scheduled capital event that lands two or three times in a 20-year project.

## When to use
Pick PEM when the power is variable and you intend to follow it, when you need 30 bar or more at the fence without buying a compressor, or when the electrolyzer has to fit inside an existing plant. Grid-services and refueling applications are its natural home for the same reason. Do not pick it because it is "the modern one": at a high, steady capacity factor above a few MW, alkaline makes the same hydrogen for less capital, and the flexibility you paid for goes unused. If your gigawatt plan is PEM, do the iridium arithmetic before the power arithmetic, and ask the supplier what loading their current product actually uses rather than what their roadmap says. AEM is the technology aimed squarely at this weakness, but it is not a procurement option yet.

## Key numbers
Output 30–50 bar routinely and up to 70–80 bar in high-pressure designs · sub-second response with 0–100% turndown · 50–55 kWh/kg at the system level · stack life 50,000–80,000 hours · iridium loading 0.3–0.7 g/kW against world supply near 7–8 t/yr · about 20% of installed electrolyzer capacity.

## Energy and losses
Constellation's 1.25 MW PEM unit at the Nine Mile Point nuclear station makes about 560 kg of hydrogen a day, which works out to roughly 54 kWh/kg at the plant boundary, and that is a good number to hold onto because it is measured on a fielded system rather than quoted from a datasheet. Against the fuel's 33.3 kWh/kg lower heating value that is about 62% efficient. Delivering at 30–80 bar saves the 1–2 kWh/kg that the first compression stage would otherwise cost, which is a real but small share of the total.

## Examples
Nine Mile Point in New York was the first US nuclear plant to make its own hydrogen, using a 1.25 MW containerized PEM system from Nel that started up in February 2023; Davis-Besse in Ohio is the second low-temperature demonstration. Yara's 24 MW unit at Porsgrunn in Norway feeds an existing ammonia plant. Air Liquide's 20 MW plant at Bécancour in Quebec has run since 2021. The suppliers are Plug Power, Cummins (Accelera), ITM Power, Siemens Energy, Nel, and Electric Hydrogen in the West, with Chinese PEM prices falling faster than Chinese alkaline prices.

## Economic profile
Iridium and platinum are only a few percent of stack cost today, so the metals are a scaling constraint rather than a cost problem, and every PEM maker's roadmap is built around cutting iridium loading by an order of magnitude. Western PEM systems have historically cost around EUR 1,400/kW against EUR 1,200/kW for alkaline, and the same Chinese cost pressure that hit alkaline is now arriving in PEM. The commercial question for a PEM developer is whether flexibility is worth paying for in the customer's specific power market. It usually is where hourly matching rules or curtailment discounts exist, and usually is not where the plant runs flat out against a firm PPA.

## Videos

- https://www.youtube.com/watch?v=Q03HX0_2e_k — How do you make GREEN HYDROGEN? | The Secrets Behind PEM Electrolysis (ITM Power, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=l_hp-DV4Nmw — PEM electrolysis at Bosch | Scaling production of green hydrogen (Bosch Hydrogen Energy, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=N-uOW0DNDO0 — Unboxing : We dismantled a PEM electrolyzer to better understand its internal structure. (SENZA Hydrogen Energy And Environmental Technology, 6 minutes, 50k+ views)

## Further reading

[Technical Targets for Proton Exchange Membrane Electrolysis (US Department of Energy)](https://www.energy.gov/eere/fuelcells/technical-targets-proton-exchange-membrane-electrolysis) · [Proton Exchange Membrane (PEM) Water Electrolysis: Cell-Level Considerations for Gigawatt-Scale Deployment (Chemical Reviews)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11996138/)
