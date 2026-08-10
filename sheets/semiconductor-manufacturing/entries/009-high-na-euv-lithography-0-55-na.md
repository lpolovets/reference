---
number: 9
name: High-NA EUV lithography (0.55 NA)
part: 2
group: EUV lithography
devices: [logic, memory]
node: [front]
wafer: [w300]
toolcost: vhigh
suppliers: one
---

## Description
High-NA EUV is the same 13.5 nm light through a much larger lens: numerical aperture rises from 0.33 to 0.55, and single-exposure resolution improves from about 13 nm to 8 nm half-pitch. The price of that aperture is anamorphic optics. To keep the angles at the reflective mask manageable, demagnification is 4× in one direction and 8× in the other, which halves the exposure field from 26 × 33 mm to 26 × 16.5 mm, or 429 mm². Any die larger than that has to be stitched from two exposures, with a seam that has to meet overlay spec and a floorplan built around it. The mirrors are the largest and most precise optics ever made for volume manufacturing, the system ships in a few hundred crates, and it lists at $350–400M.

## Strengths and weaknesses
The gain is that the tightest layers collapse from multiple patterned low-NA exposures back to one, which recovers step count, cycle time, and edge placement error the same way 0.33 NA EUV did against immersion. The costs are the price, the halved field, and the physics of higher NA: shallower depth of focus, thinner resists, and therefore more exposure to the stochastic defects that already limit low-NA EUV. The failure mode nobody had before is field stitching. A large accelerator or server die no longer fits in one shot, so the design has to be partitioned across a seam and the two halves have to align well enough that the circuits crossing it still work.

## When to use
This is a live industry disagreement rather than a roadmap, and the arithmetic is simple enough to run yourself: one High-NA exposure costs roughly 2.5 times one low-NA exposure, so it only wins where it replaces more than two low-NA passes. Intel took the aggressive side. It took the first tool in Oregon in 2024, and in July 2026 it became the first company to ship a high-volume logic product with High-NA layers — a subset of Panther Lake, the Core Ultra Series 3, on 18A — with those layers dual-qualified on 0.33 NA tools as a hedge against tool availability. TSMC took the other side. In April 2026 it said A13 and A12, both due in 2029, will not need High-NA, on the argument that its team keeps finding ways to extend low-NA EUV and the tool is not worth its cost yet. If you are making this call, count the layers that genuinely need below 13 nm half-pitch, multiply by the pass count each way, then add defectivity and uptime — which are exactly the numbers neither company publishes.

## Key numbers
NA 0.55 against 0.33, giving about 8 nm half-pitch against 13 nm · exposure field 26 × 16.5 mm, or 429 mm², half the standard reticle field · $350–400M a tool, with Samsung reported to have paid $773M for two · roughly 2.5× the cost of a low-NA exposure · fewer than about a dozen tools worldwide.

## Supply chain
Sole source again, and tighter than 008. ASML is the only builder, and Zeiss SMT is the only source of the anamorphic mirror sets — hard enough that ASML took a 24.9% stake in Zeiss SMT in 2016 and funded the capacity to make them. Output is a handful of systems a year, so adoption is constrained by how many ASML can build as much as by whether fabs want them. Tool holders as of 2026 are Intel first, then SK Hynix, Samsung, and imec's joint High NA lab with ASML in Veldhoven. High-NA falls under the same export regime as 0.33 NA EUV and has never been exportable to China. The practical consequence of one supplier with a handful of units a year is that being early is itself a strategy: Intel's argument for buying first is that learning on the tool compounds and cannot be bought later.

## Examples
ASML's TWINSCAN EXE:5000 and the production EXE:5200. Intel's D1X development fab in Oregon holds the first systems and produced the July 2026 Panther Lake shipment on 18A; Intel 14A is planned to use High-NA more broadly. The imec–ASML High NA EUV Lithography Lab in Veldhoven is where most of the industry's non-Intel learning happens. TSMC's published A16, A14, A13, and A12 roadmap does not require it.

## Economic profile
At $350–400M before installation, a single High-NA scanner costs roughly what a hundred i-line steppers cost, and the decision to buy one turns entirely on cost per wafer-layer rather than on capability. For ASML, High-NA is a revenue-per-unit story rather than a volume one, and low-NA EUV plus immersion will keep supplying most of the units for years. For anyone modeling the Intel and TSMC positions: both can be right for their own product mixes, since the crossover depends on how many layers a given design actually needs below 13 nm half-pitch and on resist and uptime numbers that move every quarter. The disagreement will be settled by defect density and cost per good die, and neither company will publish those either.

## Videos

- https://www.youtube.com/watch?v=Fc_lEzGiClk — ASML's High-NA and Hyper-NA EUV: An Update (Asianometry, 17 minutes, 100k+ views)
- https://www.youtube.com/watch?v=h_zgURwr6nA — Unveiling High NA EUV | ASML (ASML, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=WHmRj2mZ-dk — Intel Adds ASML’s First High NA EUV Tool to Oregon Factory (Intel Newsroom, 4 minutes, 100k+ views)

## Further reading

[5 things you should know about High NA EUV lithography (ASML)](https://www.asml.com/en/news/stories/2024/5-things-high-na-euv) · [Entering the High NA EUV Lithography era (imec)](https://www.imec-int.com/en/articles/entering-high-na-euv-lithography-era)
