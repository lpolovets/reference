---
number: 21
name: Dual Active Bridge
part: 3
group: Isolated converters
power: [kw, mw]
voltage: [mains, mv]
semiconductor: [sic, si]
uses: [ev, grid]
maturity: scale
---

## Description
A dual active bridge is two full bridges facing each other across a high-frequency transformer, with an inductance in series between them that is often just the transformer's own leakage. Both bridges switch square waves at the same frequency, and power flows from whichever bridge leads to whichever lags. How much flows is set by the phase shift between them, rising with the shift to a maximum near 90 degrees, so control is one variable and reversing its sign reverses the power flow with no hardware change and no mode transition. Both bridges can switch at zero voltage across a useful range of load and voltage ratio, which is why a silicon carbide dual active bridge at 10–60 kW typically reaches 97–98.5% while switching at 20–100 kHz. Eight switches and four isolated gate-drive domains on the secondary side make it a more expensive circuit than an LLC of the same rating.

## Strengths and weaknesses
Bidirectional flow costs nothing in hardware, which is the whole reason the topology exists: the same eight switches move power either way, and the crossing through zero is continuous rather than a mode change. Leakage inductance is the power-transfer element rather than a parasitic, so transformer design and power-stage design become one problem instead of two. The weakness is that zero-voltage switching depends on the voltage ratio tracking the transformer turns ratio, and it is lost when the ratio drifts or the load goes light, at which point the bridges hard-switch and circulating current climbs. A battery that swings from 250 V to 850 V is exactly the case that breaks single phase-shift control, and the fix is extended or triple phase-shift modulation, which widens the soft-switching window at the price of a much harder controller. Transformer RMS current is high relative to the power transferred, so conduction and winding loss matter more here than in a resonant converter.

## When to use
Choose a dual active bridge whenever power has to cross an isolation barrier in both directions: vehicle-to-grid chargers, battery storage DC-DC stages, shipboard and microgrid DC distribution, and the isolation stage inside a solid-state transformer. If flow is one-way and the ratio is fixed, use an LLC instead, which is cheaper and more efficient at its design point. If you do pick a dual active bridge with a wide voltage range, check the zero-voltage-switching boundary at both ends of that range before you commit to a turns ratio, and budget engineering time for the modulation scheme rather than assuming single phase shift will do. For a solid-state transformer, plan on stacking cells in series on the medium-voltage side and paralleling their outputs, so each cell handles a fraction of the input voltage and its own transformer supplies the isolation.

## Key numbers
8 switches and 4 isolated gate-drive domains on the secondary · maximum power transfer near 90 degrees of phase shift · 97–98.5% at 10–60 kW in silicon carbide · switching 20–100 kHz · battery ranges like 250–850 V break single phase-shift control · roughly $30–60/kW for the isolated stage

## Examples
Wolfspeed's 60 kW dual active bridge reference design for DC fast charging; onsemi's 25 kW silicon carbide fast-charger block, which pairs a two-level PFC front end with a dual active bridge; the cells inside solid-state transformer demonstrators, including Oak Ridge National Laboratory's work and ABB's 1.2 MVA traction converter; the DC-DC stage in most bidirectional battery storage power conversion systems.

## Economic profile
Silicon carbide is most of the cost. Eight switches at 1,200 V plus their isolated drivers typically make up 40–50% of an isolated stage that runs roughly $30–60/kW at 10–60 kW, with the transformer and the series inductor next. The main lever is switching frequency, since doubling it roughly halves transformer volume, and that is why these designs moved to silicon carbide as soon as device prices came within reach. Bidirectional capability is free in hardware and expensive in software: the modulation and the control loops are where the engineering hours go, and that work does not get cheaper with volume the way parts do. Buyers pay for it anyway in vehicle-to-grid and storage, because the alternative is two converters and a contactor. In a solid-state transformer the cell count multiplies all of it, which is the main reason those still cost more than a copper-and-iron transformer.

## Videos

- https://www.youtube.com/watch?v=YoneSyikV2M — Understanding Bi-directional, Dual Active Bridge DC to DC converter #texasinstruments #evchargers (Foolish Engineer, 9 minutes, 10k+ views)
- https://www.youtube.com/watch?v=CYb6ZJCIyOs — 2-kW isolated bidirectional DC-DC converter reference design for UPS (Texas Instruments, 9 minutes, 10k+ views)

## Further reading

[EV Charging Power Topologies Design Guidebook (Wolfspeed)](https://assets.wolfspeed.com/uploads/2024/01/Wolfspeed_PRD-08367_EV_Charging_Power_Topologies_Design_Guidebook_Application_Note.pdf) · [Modeling and Advanced Control of Dual Active Bridge DC-DC Converters (DTU Orbit)](https://orbit.dtu.dk/en/publications/modeling-and-advanced-control-of-dual-active-bridge-dc-dc-convert/)
