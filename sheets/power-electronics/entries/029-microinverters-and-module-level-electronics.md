---
number: 29
name: Microinverters and Module-Level Electronics
part: 5
group: Grid converters
power: [w]
voltage: [lv, mains]
semiconductor: [si, gan]
uses: [grid, cons]
maturity: comm
---

## Description
Module-level power electronics put a converter under each panel instead of one converter per string. A microinverter is a 250–600 W grid-tied inverter that takes a module's 30–60 V DC and produces 240 V AC directly, usually through a high-frequency isolated stage and an unfolding bridge, so the wiring on the roof carries AC rather than high-voltage DC. A power optimizer is the cheaper half-step: a DC-DC converter per module that does the maximum power point tracking and hands a regulated string to a conventional string inverter. Either way each module runs at its own operating point, so a shaded, soiled, or degraded panel no longer pulls down every other module in its string. The second function is switching off. The 2017 NEC defined an array boundary one foot around the array and required conductors outside it to fall below 30 V within 30 seconds of a shutdown command; from January 1, 2019 it also required conductors inside that boundary to fall below 80 V in the same 30 seconds, and module-level hardware meets that by construction.

## Strengths and weaknesses
On a roof with dormers, a chimney, or two orientations, per-module tracking recovers real energy, with reported gains running from close to nothing on a clean uniform array up to 25% where shading is heavy. Module-level monitoring is worth as much commercially as the energy is, because an installer can see which panel failed without sending anyone up a ladder, and that is most of what makes residential warranty service affordable. The costs are efficiency, price, and location. A microinverter's weighted efficiency runs roughly 96–97.5% against 98% or better for a string inverter, because it converts twice at low voltage and low power, and an optimizer adds roughly 0.5–1% loss of its own on top of the string inverter it feeds. The electronics also sit on the roof underneath a module, thermally cycled every day at temperatures that reach 70–85 °C, and a failure costs a truck roll, a lift, and a module removal, which together can cost more than the part.

## When to use
If you are installing PV on a building in the US, module-level electronics are effectively required, so the real question is which kind. Pick microinverters when the roof has several planes, genuine shading, or the customer wants AC-coupled batteries and per-panel data. Pick optimizers plus a string inverter when the roof is one clean plane and the budget is tight, since you keep most of the mismatch benefit at lower cost and higher efficiency. If the array is ground-mounted or on a non-enclosed structure such as a carport, the rapid-shutdown rule generally does not apply and a plain string inverter is cheaper and more efficient. Above roughly 250 kW, and at utility scale in particular, do not use module-level electronics at all.

## Key numbers
Microinverters 250–600 W per module, 30–60 V DC in and 240 V AC out · NEC 690.12 requires under 80 V inside the array boundary and under 30 V outside it, both within 30 seconds, with the inside-boundary rule effective January 1, 2019 · microinverter weighted efficiency roughly 96–97.5% against 98%+ for a string inverter · optimizers add roughly 0.5–1% loss · shading gains from close to nothing up to 25% depending on the roof · NREL's Q1 2023 residential benchmark is $2.68/Wdc for an 8 kWdc system built with microinverters.

## Examples
Enphase IQ8 microinverters and SolarEdge power optimizers, which between them define the US residential market; Tigo retrofit optimizers and rapid-shutdown transmitters; APsystems dual and quad microinverters; UL 3741, the photovoltaic hazard control standard that the 2020 and 2023 NEC accept as an alternative compliance path without module-level devices.

## Economic profile
The code rule wrote this market. Before 2017 module-level electronics competed on energy yield alone, which is a hard sale on a clean south-facing roof, and after the 80 V rule took effect they became the default way to comply with US residential code, with two suppliers taking most of the volume. NREL's Q1 2023 residential benchmark models an 8 kWdc system with microinverters at $2.68/Wdc, and the inverter is a much larger share of a residential system than of a utility plant, because there is no purchasing scale in buying twenty of anything. Microinverter hardware runs roughly two to three times the cost per watt of a residential string inverter, and the vendors have historically held gross margins well above the string inverter business, which is what you would expect of a product whose demand is set by a code requirement rather than by a yield calculation. The risk in that position is the same rule moving: UL 3741 already allows compliance through a listed hazard control system with no module-level device, and California's shift to NEM 3.0 cut export compensation enough to reshape US residential demand through 2023–2025. At utility scale the arithmetic never worked, because 500 W units mean 2,000 converters per megawatt, so 2,000 warranty items and 2,000 connection points, to capture a mismatch benefit that a clean single-orientation tracker field does not have.

## Videos

- https://www.youtube.com/watch?v=g8nP1B3Zeso — Microinverters vs String Inverter - Which is best? (The Solar Pit, 7 minutes, 50k+ views)
- https://www.youtube.com/watch?v=mYO75LBiCeM — Micro-inverters Vs DC Optimizers (2024 Updated) | The SHOCKING Truth (Solar Surge, 12 minutes, 50k+ views)
- https://www.youtube.com/watch?v=fE0sj7T0cw8 — Solar Rapid Shutdown Electrical Code Requirements and Solutions (Tigo, 3 minutes, 50k+ views)

## Further reading

[NEC Rapid Shutdown Requirements and UL 3741 (IAEI Magazine)](https://iaeimagazine.org/electrical-fundamentals/nec-rapid-shutdown-requirements-and-ul-3741/) · [A Review on Solar PV Based Grid Connected Microinverter Control Schemes and Topologies (International Journal of Renewable Energy Development)](https://ijred.cbiore.id/index.php/ijred/article/view/16465)
