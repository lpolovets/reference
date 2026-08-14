---
number: 36
name: On-Board Chargers
part: 6
group: Drives & traction
power: [kw]
voltage: [mains]
semiconductor: [gan, sic, si]
uses: [ev]
maturity: scale
---

## Description
An on-board charger converts AC from a wall socket or an AC charging station into DC at pack voltage, which is what lets an EV charge anywhere there is a suitable circuit without the site owning any power conversion equipment. It has two stages. The first is power factor correction, usually a boost or totem-pole bridgeless topology switching at 65–140 kHz in gallium nitride or silicon carbide, which draws near-sinusoidal current in phase with the line and builds a regulated 400–800 V DC bus. The second is an isolated DC-DC converter, an LLC resonant converter in unidirectional designs or a CLLC or dual active bridge when power has to flow both ways, whose high-frequency transformer supplies the galvanic isolation the safety rules require and matches the bus to whatever the pack voltage happens to be. Typical ratings are 6.6–11 kW at 94–96% efficiency and 2–4 kW/L, so an 11 kW unit is roughly 10–12 kg of hardware the car carries everywhere it goes. More designs now put the 1–3 kW auxiliary 12 V converter in the same housing, sharing the cold plate, the enclosure and the control board.

## Strengths and weaknesses
The strength is where the cost sits: buying the converter once, in the vehicle, is much cheaper for the ecosystem than buying it at every parking space, which is why AC charging infrastructure can be a cable, a contactor and a pilot signal instead of a cabinet. The weakness is that power is capped by what the car can carry and cool. Going from 11 kW to 22 kW roughly doubles the magnetics and the semiconductor area for a benefit that only appears where three-phase 32 A service exists, which is much of Europe and almost none of North America, so 22 kW stayed a niche option. The isolation transformer is the part that refuses to shrink, because creepage distance and leakage inductance do not fall with switching frequency the way core volume does, and it usually sets the size of the box. Efficiency of 94–96% is also worse than it sounds, since 4–6% of 11 kW is 450–650 W of heat inside a sealed enclosure, produced mostly while the car is parked and the rest of the thermal system is idle.

## When to use
If the vehicle sells mainly in North America, 7.4–11 kW covers overnight charging on a 240 V, 48 A circuit and there is little reason to pay for more. If it sells in Europe, 11 kW three-phase is the default, and 22 kW is worth it only for a fleet that parks where three-phase 32 A is actually installed. If the pack is over about 100 kWh or the vehicle is commercial, look at integrating the charger with the traction inverter or reusing the motor windings, since that is the only route to high AC power without carrying a second converter. If you want vehicle-to-home backup, budget for a bidirectional charger plus the interconnection work, and treat any grid revenue as upside rather than as the business case. Otherwise specify a unidirectional charger and put the money into DC fast charging, which delivers far more energy per dollar of hardware.

## Key numbers
6.6 kW single-phase and 11 kW three-phase typical, 22 kW a niche · efficiency 94–96% · power density 2–4 kW/L, about 10–12 kg for an 11 kW unit · power factor correction stage switching at 65–140 kHz · a 1–3 kW auxiliary 12 V converter increasingly in the same housing · bidirectional power electronics add roughly $200–300 per vehicle when designed in · published light-duty vehicle-to-grid revenue estimates as low as $143 per vehicle-year

## Examples
BorgWarner, Vitesco, LG Magna e-Powertrain, Delta Electronics and Innolectric supply most of the market; the Ford F-150 Lightning offers 9.6 kW vehicle-to-home backup and the Hyundai Ioniq 5 a vehicle-to-load outlet rated up to 3.6 kW; the Renault Zoe shipped a 22 kW on-board charger; ISO 15118-20 and SAE J3072 define bidirectional operation, and UL 1741 and IEEE 1547 govern what a utility will let one connect to.

## Economic profile
An 11 kW charger costs roughly $300–600 at automotive volume, so $30–50/kW, an approximate market figure rather than a published one, and the same 11 kW of off-board DC conversion costs about ten times as much per kilowatt. Most of the bill of materials is magnetics, meaning the power factor correction inductor, the isolation transformer and the output filter, followed by the semiconductors and the film capacitors, which is exactly why gallium nitride matters here: higher switching frequency shrinks the magnetics, and the magnetics are where the money and the volume are. Integration is the other lever, since combining the charger with the 12 V auxiliary converter deletes a housing, a connector set, a cold plate and a control board, and combining it with the traction inverter deletes more. Tier 1 suppliers hold most of this business today, and it is the kind of part an automaker brings in-house once one platform's volume justifies the engineering. Bidirectional capability adds roughly $200–300 per vehicle when designed in from the start, plus certification against IEEE 1547 and UL 1741 and a charging station that can accept reverse power, and the revenue on the other side is thin: NREL's survey of the literature reports light-duty estimates as low as $143 per vehicle-year, which the underlying study called unprofitable once costs were subtracted, and an aggregator typically takes 40–50% of whatever is collected. School and transit buses are the exception at roughly $6,000–17,000 per vehicle-year, because they have large packs, predictable schedules and long parked hours. That split is why vehicle-to-home sells as backup power, which a customer pays for once, while vehicle-to-grid is still mostly pilots.

## Videos

- https://www.youtube.com/watch?v=15fnS_8RdzI — AC Charging of electric vehicles (Gautham Ram, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=hpEpcpLQHMc — On-board Chargers in Electric Vehicles (STMicroelectronics, 5 minutes, 10k+ views)

## Further reading

[Critical Elements of Vehicle-to-Grid (V2G) Economics (National Renewable Energy Laboratory)](https://docs.nlr.gov/docs/fy17osti/69017.pdf) · [Development of GaN-Based, 6.6 kW, 450 V, Bi-Directional On-Board Charger with Integrated 1 kW, 12 V Auxiliary DC-DC Converter with High Power Density (Micromachines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11679712/)
