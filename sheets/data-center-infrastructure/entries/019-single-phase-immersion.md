---
number: 19
name: Single-Phase Immersion
part: 4
group: Liquid cooling
density: [high, ext]
where: [ai, colo, edge]
water: low
retrofit: new
maturity: est
---

## Description
Single-phase immersion drops whole servers into a bath of dielectric fluid, usually a synthetic or mineral oil, laid out horizontally in a sealed tank. A pump circulates the fluid past the boards and through a heat exchanger. Every component is cooled, not just the processors, so the servers have no fans at all and no air path is needed. A tank replaces a rack, and the room around it becomes an ordinary industrial space rather than a conditioned hall.

## Strengths and weaknesses
It cools everything, tolerates very high density, eliminates fan power entirely, and works with warm fluid, so heat rejection can be a dry cooler. Because there is no air, dust, humidity, and acoustic noise all disappear, which suits edge locations and dirty environments. The costs are practical rather than thermal. Servers must be modified: fans out, thermal interface materials and some optics changed, and hard drives sealed or replaced. Servicing means lifting a dripping board out of oil, fluid inventory is expensive and heavy, and floor loading for a full tank is well beyond a normal raised floor. Warranty support from server vendors remains uneven.

## When to use
Consider single-phase immersion where density is high, the hardware fleet is uniform enough to modify once, and the site has no legacy air infrastructure to preserve, which describes crypto mining and some purpose-built AI and edge deployments. It is also attractive where dust or humidity make air cooling a maintenance problem. Do not choose it for a mixed colocation hall with frequent hardware changes, or where server vendors will not warrant immersed equipment. For most AI deployments direct-to-chip has become the mainstream answer, largely because it does not require modifying the servers.

## Key numbers
Supports well over 100 kW per tank · eliminates server fan power entirely, typically 5–10% of IT load · works with warm fluid, so heat rejection needs no chiller in most climates · fluid inventory is expensive and adds substantial floor loading · servers require modification and vendor warranty terms vary.

## Examples
Submer and GRC single-phase systems in European and North American deployments; large-scale use in bitcoin mining, which drove much of the early volume; Intel and Supermicro immersion-ready server programs; edge deployments in dusty or humid sites where sealed tanks avoid filtration.

## Economic profile
With immersion the spending moves out of the building and into the tank. There is no conditioned hall, no air handling, and no server fans at all, and fan power alone is typically 5–10% of IT load, so the operating case is genuinely strong. Against it sit the fluid inventory, which is expensive and heavy enough to need a floor built for it, and a per-server modification cost paid on every box that goes in and every box swapped out. That is why the economics work best for a uniform fleet that is rarely touched, which describes bitcoin mining, where most of the early volume went. Direct-to-chip took the AI halls for a commercial reason rather than a thermal one: cold plates arrive on a server the vendor already warrants, while immersion asks the buyer to modify the hardware first and then negotiate the warranty terms.

## Videos

- https://www.youtube.com/watch?v=qMmybiDTOBw — How Does Immersion Cooling Work? | Single-Phase Immersion Cooling: Climate-Resilient Datacenters (Submer, 3 minutes, 1k+ views)
- https://www.youtube.com/watch?v=HvW2JryocTg — Single-Phase Immersion Cooling vs Direct Liquid Cooling (DLC) | How do they compare? | Submer (Submer, 6 minutes, 1k+ views)
- https://www.youtube.com/watch?v=ixmdgyY_rSg — Immersion Cooling Explained (MEP Academy, 8 minutes, 1k+ views)

## Further reading

[Enough Hot Air: The Role of Immersion Cooling (arXiv)](https://arxiv.org/pdf/2205.04257) · [Data Center Immersion Cooling: A Case Study and Summary of High-Performance Computing Cooling Technologies (Sandia National Laboratories)](https://www.osti.gov/biblio/2516869)
