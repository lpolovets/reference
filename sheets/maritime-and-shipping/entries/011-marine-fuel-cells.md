---
number: 11
name: Marine Fuel Cells
part: 2
group: Alternative powertrains
applies: [new, retro]
emissions: zero
segments: [roro, off]
capex: high
maturity: early
---

## Description
A fuel cell converts hydrogen and oxygen to electricity and water without combustion, so it produces no NOx, no sulfur oxides and no particulates at the stack. Two types matter at sea. Proton exchange membrane cells run at 60–80 °C, reach 50–60% electrical efficiency, start in seconds and follow load quickly, but they need high-purity hydrogen and will not tolerate sulfur or carbon monoxide. Solid oxide cells run at 600–1,000 °C, reach 55–60% electrical and up to about 85% if the waste heat is used aboard, and can reform methanol, LNG or ammonia internally, but they take hours to warm up and dislike thermal cycling. Marine installations are built from 100–200 kW modules paralleled into 0.1–5 MW plants, which is auxiliary or small-vessel power rather than main propulsion on anything large. The binding constraint is usually the fuel rather than the cell: liquid hydrogen holds about 8.5 GJ/m³ against 39 for fuel oil, so tanks and insulation take seven or eight times the space.

## Strengths and weaknesses
Efficiency at part load is the real advantage. A diesel genset at 25% load burns far more per kWh than at 85%, while a fuel cell's efficiency is flat or slightly better as load falls, which suits harbor operation, hotel load and dynamic positioning. There is also no noise and no vibration, which matters on research vessels and passenger craft. Against that, installed cost is roughly $2,000–5,000/kW against $200–400/kW for a diesel genset, a factor of ten, and stacks are consumables with lives on the order of 20,000–40,000 hours before replacement. Nothing exists near the 20–70 MW a large merchant ship needs, and hydrogen bunkering exists at a handful of demonstration berths. As with every other entry here, the emissions result belongs to the molecule: a fuel cell running on hydrogen made by steam methane reforming is worse well-to-wake than a diesel burning fuel oil.

## When to use
Use fuel cells where the vessel is small, returns to one berth, and someone else is paying for the fuel infrastructure: harbor ferries, research vessels, and offshore support where the charterer will fund it. Fit them as auxiliary or harbor power on a larger ship if the requirement is zero emissions at berth and shore power is not available, and compare that against simply plugging in, which costs far less where the terminal has a connection. If the duty is a deep-sea voyage, do not consider hydrogen fuel cells, because the tank volume alone rules it out at today's storage densities. If the attraction is quiet variable-load power rather than zero emissions, a battery hybrid usually delivers most of the benefit at a fraction of the capital. And if the vessel already handles ammonia or methanol, a solid oxide cell running on that fuel avoids the hydrogen storage problem entirely, at the price of a plant that cannot be cycled off between trips.

## Key numbers
PEM 50–60% electrical efficiency at 60–80 °C · solid oxide 55–60% electrical and up to about 85% with heat recovery, at 600–1,000 °C · marine plants of 0.1–5 MW built from 100–200 kW modules · installed cost roughly $2,000–5,000/kW against $200–400/kW for a genset · stack life about 20,000–40,000 hours · liquid hydrogen holds about 8.5 GJ/m³ against 39 for fuel oil

## Examples
Norled's MF Hydra, the first ferry running on liquid hydrogen, with two 200 kW PEM stacks; MV Sea Change on San Francisco Bay, a 360-passenger hydrogen ferry with about 600 kW of PEM; the EU ShipFC project putting a 2 MW ammonia solid oxide plant on the offshore vessel Viking Energy; Sandia National Laboratories' SF-BREEZE and Zero-V feasibility studies, which set out the volume and cost limits that later designs worked within.

## Economic profile
Nothing about this pencils on fuel savings alone, so almost every vessel in service was paid for by a public program: Norwegian ferry tenders that specify zero emissions, California grants and harbor-craft rules, and EU Horizon funding for the demonstrators. The capital gap is the reason. A 1 MW fuel cell plant at $2,000–5,000/kW is $2–5M against $200–400k for a diesel genset of the same output, and the stack has to be replaced once or twice over a 25-year hull life. Fuel makes it worse before it makes it better: green hydrogen at $4–8/kg is roughly $33–67/GJ against $14/GJ for VLSFO, and the fuel cell's efficiency advantage over a medium-speed diesel recovers only a fraction of that. What could change it is volume in road and stationary markets, since marine stacks are the same cells in a marinized enclosure and the cost curve is set elsewhere. See `hydrogen-and-efuels` for how the fuel is made and what it costs, and `power-electronics` for the converters between the stack and the propulsion motor.

## Videos

- https://www.youtube.com/watch?v=nuLvohkOLNY — Hydrogen: The Savior of the Shipping Industry (SciShow, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=ud-7BCYZons — Hydrogen-powered ferry prepares to launch in San Francisco (Reuters, 3 minutes, 1k+ views)

## Further reading

[Hydrogen and Fuel Cells for Maritime Applications: From Sandia Feasibility Studies to First Demonstrations (Sandia National Laboratories)](https://www.osti.gov/biblio/2005904) · [ShipFC (Clean Hydrogen Partnership)](https://www.clean-hydrogen.europa.eu/projects-repository/shipfc_en)
