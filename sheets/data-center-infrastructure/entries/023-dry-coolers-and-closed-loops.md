---
number: 23
name: Dry Coolers & Closed Loops
part: 5
group: Heat rejection & water
density: [med, ext]
where: [hyper, colo, ai]
water: none
retrofit: new
maturity: mature
---

## Description
A dry cooler is a radiator: fluid runs through finned tubes, fans push outside air across them, and heat leaves by conduction and convection with no water consumed. Because there is no evaporation, the fluid cannot get colder than the outdoor dry-bulb temperature, and in practice it lands a few degrees above it. That used to make dry rejection impractical for data centers, whose chilled water was too cold. Liquid-cooled IT changed the arithmetic: a direct-to-chip loop that accepts 40 °C water can be rejected dry almost anywhere.

## Strengths and weaknesses
Zero water consumption is the point, and with it goes the water treatment, the blowdown, the Legionella program, and the public conversation. A closed loop stays clean, so fouling and chemistry are far simpler. The costs are area and fan power. Dry coolers are physically large for their capacity and need much more airflow, so fan energy is higher and the equipment yard grows; on the hottest days a dry system either derates or needs adiabatic assist. Chiller efficiency also falls when condensing against warm dry air rather than tower water, which is why the design only works well when the load itself accepts warm fluid.

## When to use
Choose dry coolers wherever the IT loop can run warm, which now covers most direct-to-chip and immersion deployments, and in any water-stressed or politically sensitive location. Add adiabatic assist to cover the design day rather than sizing the whole plant for it. Stay with evaporative rejection where the load requires genuinely cold water, where the climate is hot and land is expensive, and where water is cheap and uncontroversial. The general rule: raise the loop temperature first, then decide, because loop temperature is what makes dry rejection viable.

## Key numbers
No water consumed in normal operation · fluid lands a few degrees above outdoor dry-bulb, against several degrees above wet-bulb for a tower · significantly higher fan power and footprint per kW rejected · adiabatic assist on peak days avoids sizing the whole plant for the design condition · works well when the IT loop accepts 35–45 °C, which liquid cooling allows.

## Examples
Microsoft's closed-loop designs announced for new datacenter builds, which eliminate operational water use; Aligned's closed-loop cooling; European sites using dry coolers with adiabatic assist to hold water use near zero for most of the year; HPC facilities running warm-water loops rejected dry.

## Videos

- https://www.youtube.com/watch?v=9f8Gnn1Q6Yk — What Is Closed-Loop Cooling? | That’s a Great Question. (Aligned Data Centers, 2 minutes, under 1k views)
- https://www.youtube.com/watch?v=X_cGjq4z5P4 — How closed-loop cooling works in Microsoft's datacenters (Microsoft Datacenters in Your Community, 1 minute, 1k+ views)
- https://www.youtube.com/watch?v=0OrCQWt1Gmg — Datacenter Closed Loop Cooling Explained in 65 Seconds (CoolStickFigureGuy, 1 minute, under 1k views)

## Further reading

[Best Practices Guide for Energy-Efficient Data Center Design (Berkeley Lab and FEMP)](https://datacenters.lbl.gov/sites/default/files/2025-07/best-practice-guide-data-center-design.pdf)
