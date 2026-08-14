---
number: 11
name: LCC HVDC
part: 3
group: HVDC converters
voltage: [ehv, uhv]
roles: [bulk, cong]
lead: yr5
siting: row
maturity: mature
---

## Description
Line-commutated converter HVDC is the original and still the highest-power form of DC transmission. Banks of thyristors, switched in sequence, rectify AC to DC at one end and invert it back at the other. Thyristors turn on when gated and turn off only when the AC line voltage reverses, which is where the name comes from: the AC system commutates the valves. That dependency shapes everything about the technology. It needs a reasonably strong AC system at both ends, it draws large reactive power, and it requires big harmonic filter yards.

## Strengths and weaknesses
LCC handles the biggest ratings anywhere: 800 kV and 1,100 kV UHV links move 8–12 GW over 2,000–3,000 km, and converter losses are the lowest of any HVDC type at about 0.7% per station. Thyristors are rugged and tolerate overloads. The limitations follow from line commutation. The converter consumes 50–60% of its rated power in reactive power, so filter and capacitor yards are large and expensive; it cannot start into a dead network, so black start needs help; and it is prone to commutation failure when the receiving AC voltage dips, which briefly interrupts power transfer.

## When to use
Choose LCC for the largest point-to-point transfers over long distances into strong AC systems, which in practice means China's UHV program, India's national links, and North American ties like Pacific DC. It is also the right answer when losses over thousands of kilometers dominate the economics. Avoid it for offshore wind, weak grids, and anything that needs to energize a passive network or feed a converter station with no local generation, since it physically cannot. Those duties belong to VSC, which costs more per MW and buys independence from the AC system.

## Key numbers
Ratings to 800 kV and 1,100 kV, with links of 8–12 GW · converter losses around 0.7% per station, the lowest of any HVDC · reactive consumption 50–60% of rated power, needing large filter yards · overhead DC line losses roughly 3% per 1,000 km · converter stations typically 3–5 years to deliver, with the full link 7–10 years.

## Examples
Changji-Guquan in China, 1,100 kV and 12 GW over 3,300 km, the largest transmission link ever built; the Pacific DC Intertie between Oregon and Los Angeles, running since 1970; India's Raigarh-Pugalur 800 kV link; Itaipu's 600 kV bipoles in Brazil.

## Economic profile
HVDC pays back the cost of two converter stations by saving on line, losses, and control. The break-even against AC is roughly 600–800 km for overhead lines and 40–70 km for cable, and the cable case is what has driven most recent projects. Converter cost scales with rating rather than with distance, so long links have better economics than short ones, and a 3,000 km UHV bipole spreads its terminal cost over enormous throughput. That is the arithmetic behind China building dozens of them.

## Videos

- https://www.youtube.com/watch?v=bQii7V7lJ1k — HVDC Concepts: section 1 - how a valve operates (TranspowerNZ, 2 minutes, 50k+ views)
- https://www.youtube.com/watch?v=WVI8Z7p_rdY — HVDC Concepts: section 3 - 6-pulse rectifier (TranspowerNZ, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=UVtRG07ibj4 — HVDC Transmission System Components | Explained Simply | TheElectricalGuy (Gaurav J - TheElectricalGuy, 15 minutes, 10k+ views)

## Further reading

[Review of hybrid HVDC systems combining line communicated converter and voltage source converter (International Journal of Electrical Power and Energy Systems via OSTI)](https://www.osti.gov/pages/biblio/1835208) · [National Transmission Needs Study (US Department of Energy)](https://www.energy.gov/oe/national-transmission-needs-study)
