---
number: 21
name: Coolant Distribution Units
part: 4
group: Liquid cooling
density: [med, ext]
where: [ai, hyper, colo]
water: low
retrofit: hall
maturity: est
---

## Description
A coolant distribution unit is the interface between the building's water and the fluid inside the IT equipment. It contains a heat exchanger, pumps, a filter, an expansion vessel, and controls, and it keeps the two loops separate so that the technical cooling loop can be clean, treated, and held at a chosen temperature and pressure while the facility loop does whatever the plant does. Units come in rack-mounted sizes of tens of kilowatts and floor-standing sizes into the megawatts.

## Strengths and weaknesses
Separation is the whole value. The IT loop can be run slightly below room pressure so a leak draws air in rather than pushing coolant out, water chemistry can be controlled independently of the plant, and the facility side never sees the servers. Redundant pumps and a filter make the technical loop maintainable without touching IT. The costs are that the unit is one more critical system with pumps that fail, it adds an approach temperature of a few degrees between the loops, and its capacity and redundancy have to be planned per row rather than per building. Filter and fluid maintenance become a scheduled task.

## When to use
Any liquid cooling deployment beyond a single rack needs a CDU, so the questions are size and placement. Use in-rack units for a handful of racks or a colocation tenant who cannot alter the facility. Use large floor-standing units to serve a row or a pod where the fleet is uniform, since one big heat exchanger is more efficient and easier to maintain than a dozen small ones. Design for N+1 pumps, since a CDU failure takes out everything downstream of it. And commission the fluid chemistry program at the same time as the hardware, because contamination shows up months later as blocked cold plates.

## Key numbers
Rack-mounted units typically 40–100 kW; floor-standing units several hundred kilowatts to over a megawatt · approach temperature of a few degrees between facility and technical loops · technical loop often run at slightly negative pressure so leaks draw air in · N+1 pumps standard, since everything downstream depends on the unit · filtration and fluid chemistry require a scheduled maintenance program.

## Examples
Row-scale CDUs feeding NVIDIA GB200 racks; in-rack units in colocation where the tenant brings liquid cooling into an air-cooled hall; Vertiv, CoolIT, Motivair, and Boyd units across current AI deployments.

## Videos

- https://www.youtube.com/watch?v=TH0IxtWfwUI — Revolutionizing AI & GPU Cooling: The Power of CDUs (Coolant Distribution Units) in Data Centers (HVAC TV, 12 minutes, 5k+ views)
- https://www.youtube.com/watch?v=weJRiDvHvkc — Facility Coolant Distribution Unit Deep Dive (DCX LIQUID COOLING SYSTEMS, 5 minutes, 1k+ views)
- https://www.youtube.com/watch?v=bIo_nRp8rvQ — Liquid Cooling Technology in Data Centers: How It Supports AI Workloads (Equinix, 2 minutes, 50k+ views)

## Further reading

[Liquid and Immersion Cooling Options for Data Centers (Vertiv)](https://www.vertiv.com/en-us/solutions/learn-about/liquid-cooling-options-for-data-centers/)
