---
number: 16
name: Rear-Door Heat Exchangers
part: 4
group: Liquid cooling
density: [med, high]
where: [colo, ent, ai]
water: low
retrofit: drop
maturity: est
---

## Description
A rear-door heat exchanger replaces the rack's back door with a water-cooled coil. Server fans push hot exhaust straight through it, the water takes the heat away, and air leaves the rack at roughly room temperature. Passive versions rely on the servers' own fans; active versions add their own fans to reduce the back pressure and handle more load. From the room's point of view the rack produces no heat at all, which means a hall can gain density without touching its air handling.

## Strengths and weaknesses
It is the least invasive liquid cooling there is: no change to the servers, no new coolant inside the IT equipment, no vendor lock, and installation rack by rack in a live hall. It handles 20–60 kW per rack, which covers most non-training workloads. The limits are the water and the ceiling. Water now has to be piped to every rack, with the leak detection and drip management that implies, and door coils use relatively cool water, so they do less to enable warm-water economization than direct-to-chip does. Above roughly 60 kW the door runs out and the heat has to be taken at the chip.

## When to use
Rear-door exchangers are the right answer for adding density to an existing air-cooled hall, particularly in colocation where the operator cannot dictate what hardware a tenant installs. They are also a good transition step: pipe the hall for water once, start with doors, and move to direct-to-chip in the same rows later. Do not choose them for a rack above 60 kW or so, and do not expect them to deliver the water temperatures that make chiller-free operation possible. For those, go to cold plates.

## Key numbers
Handles roughly 20–60 kW per rack, passive at the lower end and active at the upper · requires no change to servers, so it works with any hardware · uses relatively cool water, typically chilled water rather than a warm loop · installs rack by rack in a live hall · needs leak detection and drip containment at every rack.

## Examples
Widely deployed in colocation halls upgrading density without rebuilding; university and research clusters using passive doors on standard servers; vendors including nVent, CoolIT, Motivair, and Vertiv shipping both passive and active designs.

## Economic profile
What a buyer gets from rear doors is avoided disruption rather than better thermal performance. An operator can add density cabinet by cabinet in a hall that is full and under contract, with no room taken out of service and no tenant migration, and in colocation that is worth more than the capital cost of the doors. The offsetting operating cost is that the coils need relatively cool water, so the chillers keep running and the efficiency gain is smaller than a warm direct-to-chip loop would deliver. The other risk is the 60 kW ceiling. An operator who pipes a hall for doors and later has to host 130 kW racks pays for the water distribution once and the cold plates afterwards, which is usually still the cheaper path, because the piping is the part that disrupts a live hall and doing it once is the point of the retrofit.

## Videos

- https://www.youtube.com/watch?v=vyhRG_dFqoA — Rear Door Data Centre Cooling (Aqua Cooling, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=GBxu1vNxQdQ — RDHX PRO - Rear Door Cooler (nVent SCHROFF, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=CCeGRWHEcn4 — CoolIT Rear Door Heat Exchangers (RDHx) (CoolIT Systems, 2 minutes, 5k+ views)

## Further reading

[Emergence and Expansion of Liquid Cooling in Mainstream Data Centers (ASHRAE Technical Committee 9.9)](https://www.ashrae.org/file%20library/technical%20resources/bookstore/emergence-and-expansion-of-liquid-cooling-in-mainstream-data-centers_wp.pdf) · [Data Center Rack Cooling with Rear-door Heat Exchanger (US Department of Energy Federal Energy Management Program)](https://datacenters.lbl.gov/sites/default/files/rdhx-doe-femp.pdf)
