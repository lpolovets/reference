---
number: 2
name: LV Distribution & Busway
part: 1
group: Power delivery
density: [low, ext]
where: [hyper, colo, ent, ai]
retrofit: hall
maturity: mature
---

## Description
Below the UPS, power reaches the racks one of two ways. The traditional route runs cables from a power distribution unit through conduit or under a raised floor to each rack, one circuit at a time. The alternative is overhead busway: a continuous enclosed bar running above the rows, into which tap-off boxes plug anywhere along its length. Busway turns adding a circuit from an electrician's project into a plug-in operation, which is why nearly every hall built for changing IT load now uses it.

## Strengths and weaknesses
Busway's advantages are flexibility and airflow. Circuits move as racks move, capacity is added without pulling cable, and getting power out of the underfloor plenum leaves the plenum for air. Metering at the tap-off gives per-rack visibility for free. Against that, busway costs more up front than conduit for a fixed layout, its rating has to be chosen at design time and is expensive to change, and a busway sized for 5 kW racks is now the constraint in many older halls. Cable is cheaper and entirely adequate when the layout will not change.

## When to use
Use overhead busway in any hall where rack configurations change, in colocation where tenants come and go, and wherever density is rising, since it is the cheapest part of the chain to over-size. Size it for the density you expect at end of life rather than at day one, because replacing busway means taking the row down. Stay with fixed cable distribution for a small enterprise room with a stable layout, and for retrofits where working overhead is not practical. Whichever route, put revenue-grade metering as far downstream as budget allows; per-rack data is what makes capacity planning possible.

## Key numbers
Busway ratings commonly 250–1,200 A, chosen at design and hard to change · tap-off boxes add a circuit in minutes without an outage · per-tap metering is standard on modern systems · overhead routing frees the underfloor plenum for air · cable distribution is cheaper for a fixed layout and worse for a changing one.

## Examples
Overhead busway in nearly all colocation halls built since about 2010; underfloor cable distribution in legacy enterprise rooms and in halls that predate high density; busway rating limits now driving hall rebuilds as racks move from 5 kW to 30 kW.

## Videos

- https://www.youtube.com/watch?v=dcPfYR2LR9I — Is a Busway System Right for Your Data Center? (Anixter, 2 minutes, 1k+ views)
- https://www.youtube.com/watch?v=U4VfjjKeC7k — Lesson 7 - Part 2: Power Distribution for Data Centers and UPS (Engineering and Donuts, 12 minutes, 10k+ views)

## Further reading

[Best Practices Guide for Energy-Efficient Data Center Design (Berkeley Lab and FEMP)](https://datacenters.lbl.gov/sites/default/files/2025-07/best-practice-guide-data-center-design.pdf)
