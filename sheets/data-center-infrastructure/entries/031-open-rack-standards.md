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

## Economic profile
The savings are per rack and small, so they only count multiplied out: one fewer power supply in every server, one fewer conversion stage, and blind-mate busbars that cut install and swap labor. Across hundreds of racks of one configuration that adds up; across twenty mixed cabinets it does not cover the cost of running a second supply chain. The specifications are published rather than licensed, so no royalty is involved, but the supplier set is smaller and the equipment does not fit a standard 19-inch cabinet, which makes the switch close to all-or-nothing for a hall. For AI buyers the decision has largely been made upstream, since current accelerator racks such as the GB200 NVL72 ship in an Open Rack-derived form factor and the liquid cooling manifolds assume it. The cost that surprises people is structural: a fully populated liquid-cooled rack can pass 1,500 kg, and reinforcing a floor to take that is a building expense that usually costs more than the rack standard saves. If the fleet is mixed and arrives from many vendors, stay on 19-inch and spend the money elsewhere.

## Videos

- https://www.youtube.com/watch?v=A527jII5980 — OCP Gear Explained - What's inside an OCP Rack? (Open Compute Project, 19 minutes, 5k+ views)
- https://www.youtube.com/watch?v=yrAXknQrdWY — Teaser of the new OCP Academy course series on Open Rack ORv3 (Open Compute Project, 2 minutes, under 1k views)
- https://www.youtube.com/watch?v=JPl_oaXnCNw — Intro to Rack & Power Track (Open Compute Project, 3 minutes, under 1k views)

## Further reading

[Toward Next-Generation AI Data Centers: Power Delivery Architecture Shifts, Emerging Technologies, and Challenges (arXiv)](https://arxiv.org/abs/2606.25095) · [Facebook announces next-generation Open Rack frame (Engineering at Meta)](https://engineering.fb.com/2019/03/15/data-center-engineering/open-rack/)
