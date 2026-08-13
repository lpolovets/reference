---
number: 31
name: Open Rack Standards
part: 7
group: Racks & operations
density: [med, ext]
where: [hyper, ai]
retrofit: new
maturity: est
---

## Description
The 19-inch rack dates from railway signaling equipment and has survived largely by inertia. The Open Compute Project's Open Rack replaced it for hyperscale use: a 21-inch equipment opening in the same 600 mm floor footprint, a shared DC busbar down the back so servers have no individual power supplies or cords, and centralized power shelves and fans. Open Rack v3 raised the busbar to 48 V, added support for far higher rack power, and standardized the mechanical interfaces for liquid cooling manifolds.

## Strengths and weaknesses
Centralizing power conversion is more efficient than dozens of small supplies, removes a large number of cables and connectors, and makes rack-level redundancy simpler. The wider opening gives more room for heatsinks and airflow, and blind-mate busbar connections make servers faster to install and remove. The cost is ecosystem: Open Rack equipment is bought from a smaller set of suppliers, it does not fit a standard 19-inch cabinet, and the design is aimed at operators who buy hundreds of racks of one configuration. For a mixed enterprise fleet it is the wrong shape entirely.

## When to use
Adopt Open Rack when buying at hyperscale volume with a uniform hardware fleet, since the efficiency and serviceability gains multiply. It is also increasingly the practical choice for dense AI deployments, because current accelerator racks are designed around this form factor and the liquid cooling manifolds assume it. Stay with 19-inch racks for enterprise and colocation, where equipment comes from many vendors and cabinets have to accept whatever arrives. Whatever the choice, confirm floor loading early; a fully populated liquid-cooled rack can exceed 1,500 kg.

## Key numbers
21-inch equipment opening within the same 600 mm floor pitch as a standard rack · 48 V DC busbar in Open Rack v3, replacing per-server power supplies · centralized power shelves are more efficient than distributed supplies · a fully populated liquid-cooled rack can exceed 1,500 kg, well beyond typical raised-floor ratings · specifications are published openly rather than licensed.

## Examples
Meta, which created the Open Compute Project and runs Open Rack across its fleet; NVIDIA's GB200 NVL72, built on an Open Rack-derived form factor; Microsoft's contributions of its own rack and cooling designs to OCP; the OCP specification library, which is the reference for interfaces and power.

## Videos

- https://www.youtube.com/watch?v=A527jII5980 — OCP Gear Explained - What's inside an OCP Rack? (Open Compute Project, 19 minutes, 5k+ views)
- https://www.youtube.com/watch?v=yrAXknQrdWY — Teaser of the new OCP Academy course series on Open Rack ORv3 (Open Compute Project, 2 minutes, under 1k views)
- https://www.youtube.com/watch?v=JPl_oaXnCNw — Intro to Rack & Power Track (Open Compute Project, 3 minutes, under 1k views)

## Further reading

[Data Center Energy Efficiency Toolkit (Berkeley Lab Center of Expertise)](https://datacenters.lbl.gov/tools)
