---
number: 15
name: Evaporative Cooling
part: 3
group: Air cooling
density: [low, high]
where: [hyper, colo]
water: high
retrofit: hall
maturity: mature
---

## Description
Evaporating water absorbs a large amount of heat, and evaporative cooling uses that directly. Direct evaporative systems pass outside air through a wetted medium, cooling it toward the wet-bulb temperature before it enters the hall. Indirect systems evaporate water on one side of a heat exchanger and keep the data center's air on the other, so humidity stays controlled. Adiabatic pre-cooling is a lighter version, spraying a mist onto a dry cooler's coil only on the hottest days to extend its capacity.

## Strengths and weaknesses
It is very efficient in electricity terms: a fan and a pump replace a compressor, and in a dry climate it can hold supply temperature through summer with no mechanical cooling at all. Adiabatic assist lets a dry cooler be sized for average conditions rather than the design day, which saves capital. The cost is water, and water is now the more visible number. A large evaporative site can consume millions of gallons a year, water quality drives blowdown and treatment, and in drought-prone regions this is a permitting and community issue as much as an engineering one. Direct systems also add humidity that has to be managed.

## When to use
Use evaporative cooling in hot dry climates where the wet-bulb temperature is low and water is available and acceptable. Use adiabatic assist widely, since spraying only on peak days captures most of the capital benefit for a small fraction of the water. Avoid direct evaporative in humid climates, where the wet bulb is close to the dry bulb and the technique does little. And check the local water politics before designing around it; several projects have had to redesign to closed-loop cooling after the water number became public.

## Key numbers
Approaches the wet-bulb temperature rather than the dry-bulb, so it works best in dry air · replaces compressor power with a fan and a pump · a large evaporative site consumes on the order of millions of gallons a year · adiabatic assist runs only on peak days, so annual water use is a small fraction of full evaporative · water treatment and blowdown are ongoing operating costs.

## Examples
Hyperscale sites across Arizona, Nevada, and Spain built around evaporative cooling; Microsoft's shift toward closed-loop designs in water-stressed regions after public scrutiny; adiabatic dry coolers used widely in Europe to extend capacity on a handful of hot days.

## Videos

- https://www.youtube.com/watch?v=1auJsBfGvzk — Transtherm Adiabatic Coolers Basics & How it works (Transtherm Cooling Industries Limited, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=H_uwck0O0cI — Direct Evaporative Cooling: How it works (Seeley International EMENA, 2 minutes, 50k+ views)
- https://www.youtube.com/watch?v=InJsWEoppo8 — Data centers seek sustainable solutions to rising water consumption (CNBC Television, 3 minutes, 10k+ views)

## Further reading

[2024 United States Data Center Energy Usage Report (Berkeley Lab)](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf)
