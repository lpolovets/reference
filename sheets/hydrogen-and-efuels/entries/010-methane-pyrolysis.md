---
number: 10
name: Methane Pyrolysis
part: 3
group: Alternative sources
sector: [chem, steel, ref]
form: [gas]
carbon: low
maturity: pilot
cost: low
---

## Description
Methane pyrolysis heats natural gas without oxygen or steam, so the methane splits into hydrogen gas and solid carbon instead of hydrogen and CO2. There is no process CO2 at all, which is a different proposition from capturing it: nothing has to be compressed, transported, or injected, and there is no storage site to permit. The thermodynamics are the attraction. Splitting methane takes 37.4 kJ per mol of hydrogen, about 5.2 kWh/kg in theory, against 286 kJ/mol or 39.4 kWh/kg for splitting water. Three reactor families are being commercialized: plasma torches at 600–1,200 °C, molten metal and molten salt bubble columns at 900–1,400 °C, and thermo-catalytic fluidized or moving beds at 600–1,000 °C using iron, nickel, or carbon catalysts. The reaction also fixes the plant's second product, because every kg of hydrogen comes with 3 kg of solid carbon that has to go somewhere.

## Strengths and weaknesses
The strength is the energy number and the absence of a CO2 stream: a moving-bed pilot has run at 9.7–11 kWh/kg, roughly a fifth of what an electrolyzer needs, and the plant needs no pipeline or reservoir. The first weakness is that pyrolysis uses more gas than reforming, not less. The stoichiometry gives 2 mol of hydrogen per mol of methane where reforming gets 4, because reforming pulls the extra hydrogen out of steam, so pyrolysis burns roughly 4 kg of methane per kg of hydrogen against about 3.2 for a reformer. The second is the reactor: arc plasma designs report 25–39 kWh/kg, which throws away most of the thermodynamic advantage, and the choice of reactor decides whether the technology is interesting at all. The third weakness is the co-product, and it is the one that caps the whole route. Carbon has to be sold or landfilled, and solid carbon accumulating on reactor walls and catalyst surfaces is also the main mechanical failure mode, because it fouls heat transfer and plugs the bed until the reactor has to be cleaned out.

## When to use
Consider methane pyrolysis where gas is cheap, electricity is expensive or scarce, and there is no CO2 storage within reach, which describes a lot of industrial sites. It also suits distributed generation, since a pyrolysis unit at a customer's meter avoids both a hydrogen pipeline and a CO2 pipeline. Before committing, do the carbon arithmetic first: work out how many tonnes of solid carbon the plant makes each year, find out what grade it is, and get a price for it, because at $600–900 per tonne the carbon pays for the hydrogen outright and at landfill prices it is a disposal cost. If your project needs hundreds of thousands of tonnes of hydrogen a year, this route cannot get there on carbon sales, and reforming with capture (entries 006 and 007) is the comparison to run: same feedstock, carbon as a solid you must sell or bury rather than a gas you must inject.

## Key numbers
37.4 kJ/mol H2, about 5.2 kWh/kg in theory, against 39.4 kWh/kg for water splitting · reported 9.7–11 kWh/kg on pilot moving beds and 25–39 kWh/kg on arc plasma · 3 kg of solid carbon per kg of hydrogen · roughly 4 kg of methane per kg of hydrogen against 3.2 for a reformer · $1.7–4/kg before any carbon revenue.

## Energy and losses
The theoretical energy is 5.2 kWh/kg of hydrogen, and real reactors span a wide range: pilot-scale moving beds have reported 9.7–11 kWh/kg, microwave plasma about 8.7 kWh/kg in the laboratory, and arc plasma pilots 25–39 kWh/kg depending on whether power is generated on site. Even the worst of those is below electrolysis at 50–55 kWh/kg, but only the moving-bed numbers are a large enough advantage to matter. Against that energy saving, the plant consumes roughly 4 kg of methane per kg of hydrogen, about 25% more feedstock than a reformer, so the trade is less electricity for more gas. With no process CO2, the carbon intensity of the hydrogen is set almost entirely by upstream methane leakage and by how the reactor heat is produced.

## Examples
Monolith Materials runs thermal plasma at Olive Creek in Nebraska, selling carbon black as the primary product with hydrogen as the co-product, which is the commercial model that works today. Hazer Group in Perth uses iron ore as a catalyst in a fluidized bed and produces graphite alongside hydrogen. BASF is developing a moving-bed reactor with induction heating at Ludwigshafen. HiiROC in Hull uses plasma torches with porous anodes, Ekona Power in British Columbia a pulsed intermittent-flow reactor, and Modern Hydrogen in Washington state an autocatalytic carbon-based process aimed at distributed units at the customer's gas meter. Molten Industries is one of several developers working on molten metal bubble columns, and Pacific Northwest National Laboratory has published on nickel-copper fluidized beds.

## Economic profile
Published estimates put turquoise hydrogen at $1.80–4.00/kg before any carbon revenue, with molten metal and molten salt designs at the low end near $1.70–1.80/kg and iron-based fluidized beds at $3.20–3.50/kg, against $0.90–3.00/kg for grey hydrogen and $1.40–2.50/kg for reforming with capture. Carbon revenue is what moves it: at $300–800 per tonne the economics match unabated SMR, and at $600–900 per tonne the carbon covers the hydrogen cost entirely. The problem is that those prices belong to the carbon black market, which produces only about 14 million tonnes a year, roughly 70% of it into tires. At 3 kg of carbon per kg of hydrogen, fewer than 5 Mt of hydrogen a year would saturate the entire market, against world hydrogen demand near 100 Mt. So the honest framing is that methane pyrolysis is a carbon black business with a hydrogen co-product, and it stays a good business up to a few million tonnes of hydrogen a year. Beyond that the carbon price collapses and the carbon becomes something to bury.

## Videos

- https://www.youtube.com/watch?v=7C4QUqynGAc — Hazer Pilot Plant (Hazer Group Limited, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=4bAmtwwMmpY — Methane pyrolysis: How do we obtain clear hydrogen for the chemical industry? (BASF, 1 minute, 10k+ views)

## Further reading

[Life Cycle Analysis of Hydrogen Production via Methane Pyrolysis Using Plasma Arc (OSTI.GOV)](https://www.osti.gov/pages/biblio/3374517) · [Thermocatalytic Decomposition of Methane: A Review on Carbon-Based Catalysts (ACS Omega)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10433352/)
