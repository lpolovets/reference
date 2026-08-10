---
number: 16
name: High-Pressure Vessels
part: 4
group: Bulk storage
sector: [veh, mar, pwr]
form: [hp]
carbon: none
maturity: mature
cost: low
---

## Description
Compressed hydrogen is held in one of five tank types, and the type decides the application. Type I is monolithic steel or aluminum, cheap and heavy, rated to 200–300 bar, and it is what industrial cylinders, tube trailers, and stationary buffers use. Type II adds a hoop wrap over a metal liner. Type III wraps a full composite over a thin aluminum liner. Type IV puts the full carbon fiber overwrap over a polymer liner, usually high-density polyethylene or polyamide, and it is the 700 bar automotive standard at roughly 5–6% hydrogen by system mass. Type V removes the liner entirely and is still developmental. The physics that drives all of it: hydrogen at 700 bar is only about 40 kg/m3 and at 350 bar about 23, against 71 for liquid hydrogen, so the tank is always large for what it holds, and the wall has to carry the pressure with the least mass possible.

## Strengths and weaknesses
Pressure vessels are the most boring and most reliable storage in this sheet. Nothing evaporates, nothing degrades, fill and release take minutes, and there is no thermal management beyond the fill itself. The certification base is deep (ISO 19881, UN GTR 13, EC 79) and the failure behavior of a wrapped composite is well characterized: it leaks before it bursts, and it is proof-tested and cycle-tested to prove it. The weakness is volume and the cost of buying it back. A 5 kg automotive tank is about 125 liters of internal volume before insulation and structure, which is why hydrogen cars have small trunks and hydrogen trucks give up frame space. Carbon fiber is the reason the cost does not fall on its own: the fiber layer is 62–65% of the cost of a 700 bar Type III dual-tank system in the Department of Energy's analysis, and coordinated DOE-industry work cut the fiber's share of a Type IV system from about 52% in 2019 to 33.5% in 2023. Tank prices therefore track aerospace-grade fiber supply more than they track hydrogen demand.

## When to use
Use Type I for anything stationary or industrial, where mass does not matter and the price per kg stored is the only question. Use Type IV at 700 bar when the application is a passenger vehicle and range per unit of volume is the binding constraint. Use 350 bar Type III or Type IV for buses, trucks, forklifts, and marine, where the packaging space exists and halving the pressure roughly halves the compression energy and simplifies the station. If your vehicle needs more than about 60–80 kg on board, price liquid hydrogen against compressed before committing, because at that size the tank volume and the composite cost start to dominate. And if the equipment is heavy and slow-moving and cares more about pressure than mass, look at metal hydrides instead, which are denser by volume and far heavier.

## Key numbers
700 bar hydrogen at about 40 kg/m3, 350 bar at about 23, liquid at 71 · a 5 kg automotive tank is roughly 125 liters of internal volume · Type IV systems store 5–6% hydrogen by system mass · Type I rated 200–300 bar · carbon fiber is 62–65% of a 700 bar Type III system's cost, and 33.5% of a 2023 Type IV system's · filling costs 3–4 kWh/kg from a 30 bar source.

## Energy and losses
A pressure vessel loses nothing while it holds: no boil-off, no chemistry, no heat leak that matters. The whole energy cost is the fill, 3–4 kWh/kg to reach 700 bar from a 30 bar source, about 10% of the kilogram's 33.3 kWh, and roughly half that for a 350 bar tank. What you pay instead is volume: 700 bar hydrogen holds about 4.7 MJ per liter against diesel's 36, so a 5 kg automotive tank runs to roughly 125 liters of internal volume before insulation, valves, and structure. That volumetric penalty, rather than the energy penalty, is what has kept compressed hydrogen out of most vehicle classes.

## Examples
The Toyota Mirai carries 5.6 kg in three Type IV tanks; Hyundai's Nexo and its XCIENT fuel-cell truck use the same architecture at 700 and 350 bar respectively. Hexagon Purus, Forvia, Plastic Omnium, Luxfer Gas Cylinders, NPROXX, and Worthington Enterprises are the main vessel suppliers, with Toray, Hexcel, and Mitsubishi Chemical supplying fiber. Type I steel cylinders remain the workhorse of the industrial gas business and of every tube trailer built before composites got cheap.

## Economic profile
Tank cost is a materials cost wearing a manufacturing cost's clothes. Carbon fiber dominates, filament winding is capital-intensive but well understood, and the learning curve runs through fiber loading and layup optimization rather than through process invention. The Department of Energy projects a 700 bar Type IV system holding 5.6 kg of usable hydrogen at $12.1–13.3/kWh in 2020 dollars at 100,000 units a year, and today's volumes are two or three orders of magnitude below that, so real prices are much higher and will stay there until a vehicle program creates the volume. The strategic consequence is uncomfortable for the sector: tank makers are exposed to a fiber market driven by aerospace and wind, and a fuel-cell vehicle program that assumes tank costs fall with hydrogen adoption has the causality backwards.

## Videos

- https://www.youtube.com/watch?v=AHzjAYniPmY — H2 tanks type 1 - type 5, technological differences and advantages (Voith Group, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=ign6W5ENJAA — How it works: Filament Winding (Farixltd, 2 minutes, 100k+ views)

## Further reading

[Physical Hydrogen Storage (US Department of Energy)](https://www.energy.gov/eere/fuelcells/physical-hydrogen-storage) · [Onboard Type IV Compressed Hydrogen Storage System Cost and Performance Status (DOE Hydrogen Program)](https://www.hydrogen.energy.gov/docs/hydrogenprogramlibraries/pdfs/24006-onboard-storage-cost-performance-status.pdf)
