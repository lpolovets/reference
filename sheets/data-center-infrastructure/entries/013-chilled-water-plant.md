---
number: 13
name: Chilled Water Plant
part: 3
group: Air cooling
density: [low, ext]
where: [hyper, colo, ent]
water: med
retrofit: new
maturity: mature
---

## Description
A central chilled water plant makes cold water in one place and pumps it everywhere it is needed. Chillers, usually water-cooled centrifugal machines for large sites, produce water at 7–18 °C, primary and secondary pumps circulate it, and the load is whatever needs it: air handlers, rear-door heat exchangers, or the facility side of a coolant distribution unit. Heat leaves through cooling towers or dry coolers. This is the backbone that every other cooling technology on this sheet either connects to or deliberately avoids.

## Strengths and weaknesses
Central plants are efficient at scale, they can economize when the weather allows, and one water loop serves air cooling and liquid cooling at once, which matters during a mixed transition. Large chillers reach efficiencies small direct-expansion units cannot. The costs are capital, complexity, and water. A plant is a large building commitment with pumps, piping, and controls that all need commissioning, and water-cooled machines consume evaporative water. Raising chilled water temperature is the single most useful efficiency lever available, and most legacy plants run colder than they need to because the set point was chosen for equipment that is long gone.

## When to use
Build a central chilled water plant for anything above a few megawatts, and design it for the highest supply temperature the load will accept, since every degree buys economizer hours. Where liquid cooling is coming, size and pipe the plant for higher-temperature loops now, because retrofitting a warm-water circuit later costs far more than allowing for it. Use packaged direct-expansion units instead only at small sites, at the edge, and where site constraints rule out a plant. Whatever the choice, meter the plant properly; most chilled water systems have no idea how much of their output is being wasted.

## Key numbers
Chilled water typically supplied at 7–18 °C, and liquid-cooled loads accept far warmer · large centrifugal chillers reach roughly 0.5 kW per ton at design and much better at part load · each degree of higher supply temperature adds economizer hours · water-cooled plants consume evaporative water in the cooling towers · plant and distribution are a large share of the mechanical capital cost.

## Examples
Chilled water plants in essentially every large colocation campus; warm-water loops at 32 °C and above in HPC facilities, which allow year-round economization; ASHRAE's water temperature classes, which set the vocabulary for how warm a liquid loop may run.

## Videos

- https://www.youtube.com/watch?v=rUiYdpODxJI — Data Center Chilled Water Systems Explained (MEP Academy, 7 minutes, 10k+ views)
- https://www.youtube.com/watch?v=zit6eWY2hD8 — Chilled Water Central Plant Basics (MEP Academy, 4 minutes, 100k+ views)
- https://www.youtube.com/watch?v=4BRcXRfxs1g — Air Cooled vs WaterCooled Data Centers (MEP Academy, 7 minutes, 5k+ views)

## Further reading

[Best Practices Guide for Energy-Efficient Data Center Design (Berkeley Lab and FEMP)](https://datacenters.lbl.gov/sites/default/files/2025-07/best-practice-guide-data-center-design.pdf)
