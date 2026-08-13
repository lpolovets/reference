---
number: 17
name: Single-Phase Direct-to-Chip
part: 4
group: Liquid cooling
density: [high, ext]
where: [ai, hyper, colo]
water: low
retrofit: hall
maturity: est
---

## Description
Direct-to-chip cooling puts a cold plate on the components that make the most heat, usually the GPUs and CPUs, and pumps water or a water-glycol mix through it. The coolant stays liquid throughout, which is what "single-phase" means. Because the plate sits directly on the die package, the thermal path is short and the coolant can be much warmer than air would have to be: 30–45 °C supply is normal, which is warm enough that a dry cooler can reject the heat without a chiller for most of the year. The remaining 10–30% of rack heat, from memory, drives, and power supplies, still leaves as air.

## Strengths and weaknesses
It is the mainstream answer for AI racks and the one every large GPU platform now ships with. Warm-water operation removes most compressor hours, cold plates handle chip power that air physically cannot, and server fan power drops sharply. The complications are plumbing and residual air. Every server has quick-disconnect couplings, so service means breaking and remaking wet connections, leak detection has to work at rack level, and the hall still needs an air path for the fraction of heat the plates do not catch. Coolant chemistry and filtration become a maintenance discipline that data center operations teams have not traditionally had.

## When to use
This is the default for anything above roughly 60–80 kW per rack, and increasingly for anything running current-generation accelerators, because the hardware arrives configured for it. Design the facility water loop warm, 32 °C or above, so the plant can economize. Retain about 20–30% of the air capacity for the components that stay air-cooled, and do not delete the air handling when converting a hall. If the racks are below 40 kW and the hardware is heterogeneous, rear-door exchangers get most of the benefit with none of the wet connections inside the servers.

## Key numbers
Removes roughly 70–90% of rack heat, with the balance still leaving as air · supply water typically 30–45 °C, warm enough for chiller-free rejection much of the year · supports well over 100 kW per rack · server fan power falls sharply, which is a direct IT-side energy saving · every server carries quick-disconnect couplings that are serviced wet.

## Examples
NVIDIA GB200 NVL72 racks, which ship liquid-cooled and set the current density benchmark; long-standing HPC deployments at Oak Ridge and LRZ, which proved warm-water operation years earlier; CoolIT, Vertiv, Motivair, and Supermicro cold-plate systems in production AI halls.

## Videos

- https://www.youtube.com/watch?v=QUYmcGS6I_k — Supermicro SuperMinute: Direct to Chip Liquid Cooling Solutions (Supermicro, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=vnE5WMwebnE — Liquid Cooling in AI Data Center (MEP Academy, 10 minutes, 10k+ views)
- https://www.youtube.com/watch?v=ztsashInqfQ — Data Center Liquid Cooling Explained: Direct-to-Chip vs. Immersion (idcWeek, 2 minutes, under 1k views)

## Further reading

[Emergence and Expansion of Liquid Cooling in Mainstream Data Centers (ASHRAE Technical Committee 9.9)](https://www.ashrae.org/file%20library/technical%20resources/bookstore/emergence-and-expansion-of-liquid-cooling-in-mainstream-data-centers_wp.pdf) · [Liquid and Immersion Cooling Options for Data Centers (Vertiv)](https://www.vertiv.com/en-us/solutions/learn-about/liquid-cooling-options-for-data-centers/)
