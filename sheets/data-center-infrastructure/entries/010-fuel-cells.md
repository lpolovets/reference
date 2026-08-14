---
number: 10
name: Fuel Cells
part: 2
group: UPS & ride-through
density: [med, ext]
where: [hyper, colo]
water: low
retrofit: new
maturity: emerg
---

## Description
A fuel cell converts fuel to electricity electrochemically rather than by combustion. In data centers the dominant type is the solid oxide fuel cell running on natural gas or biogas, delivered as containerized modules of a few hundred kilowatts and stacked to whatever capacity the site needs. Because they run continuously rather than on standby, fuel cells are prime power with a different emissions profile, not a generator substitute. Proton-exchange membrane cells running on hydrogen have been demonstrated in the backup role but remain rare.

## Strengths and weaknesses
Electrical efficiency of 50–60% beats a reciprocating engine, and because there is no combustion the NOx and particulate emissions are very low, which is what makes them permittable where engines are not. Modules install quickly and scale in small increments. The costs are capital and fuel. Installed cost per kW runs several times a gas engine's, the stacks degrade and need replacement every few years, and running on natural gas still produces CO2, so the climate case depends on biogas or eventually hydrogen. Hydrogen supply at data center scale does not exist yet in most places.

## When to use
Consider fuel cells where air permits block engines, where the utility cannot deliver capacity soon enough and gas is available, and where the site wants a lower-emission story than a gas engine plant. They fit best as continuous prime power with the grid as backup. Do not choose them for pure standby duty, where a diesel is a fraction of the cost and starts on demand. And treat hydrogen-fueled designs as a research direction rather than a plan until a supply contract exists.

## Key numbers
Electrical efficiency 50–60% on natural gas · modules typically 200–500 kW, stacked to site capacity · very low NOx and particulate emissions, which is the permitting argument · installed cost several times a gas engine per kW · stack replacement every few years is a scheduled operating cost.

## Examples
Bloom Energy servers at Equinix, Apple, and several colocation campuses; Microsoft's hydrogen fuel cell demonstration replacing a diesel generator for backup duty; Korean and Japanese installations using fuel cells for both power and heat.

## Videos

- https://www.youtube.com/watch?v=wN4Z0iFifxc — How A Bloom Energy Server Works (Bloom Energy, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=nOFNfEFCB_c — Bloom Energy Explained | Can It Power the AI Boom? (Leo Cui, Ph.D., CFA, 8 minutes, 10k+ views)
- https://www.youtube.com/watch?v=zPogn191djw — From Fuel Cell to Energy Server Farm | Bloom Energy (Bloom Energy, 1 minute, 1k+ views)

## Further reading

[Key Questions on Energy and AI (IEA)](https://iea.blob.core.windows.net/assets/3179f7f8-01f6-4dd6-bffa-c9f7b73f1dc9/KeyQuestionsonEnergyandAI.pdf)
