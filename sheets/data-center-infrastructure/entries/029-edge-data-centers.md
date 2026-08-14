---
number: 29
name: Edge Data Centers
part: 6
group: Facility & siting
density: [low, med]
where: [edge, ent]
water: none
retrofit: drop
maturity: est
---

## Description
An edge data center trades scale for proximity. Instead of one large facility a thousand kilometers away, compute sits in a small enclosure near the users: a cabinet in a cell tower compound, a container in a retail parking lot, a room in a regional exchange. Capacity is typically 50 kW to a few megawatts. The purpose is latency, local data handling, and bandwidth cost, since processing video near where it is generated is far cheaper than backhauling it.

## Strengths and weaknesses
Latency of a few milliseconds instead of tens is the product, and for real-time control, autonomous systems, and interactive video that difference is the whole application. Local processing also keeps regulated data inside a jurisdiction. The costs are efficiency and operations. Small sites have poor PUE, typically 1.5–2.0, because the fixed overhead of cooling and power conversion does not shrink with load. Nobody is on site, so everything needs remote hands and remote power cycling, physical security is weaker, and managing hundreds of small sites costs more per kilowatt than managing one large one.

## When to use
Deploy at the edge when latency or data locality genuinely requires it, and be strict about that test, because most workloads do not. Content caching, industrial control, retail analytics, and telecom network functions are the durable cases. Design for zero site visits: switched PDUs, out-of-band management, and sealed cooling. Where the requirement is only capacity rather than proximity, a regional colocation facility is cheaper, more efficient, and far easier to run.

## Key numbers
Typical capacity 50 kW to a few MW · latency in the low single-digit milliseconds against tens for a distant region · PUE commonly 1.5–2.0 because overhead does not scale down · no staff on site, so remote management is mandatory · per-kilowatt operating cost is higher than any other facility type here.

## Examples
Cell tower compounds hosting telecom network functions; EdgeConneX and DataBank regional sites; content delivery caches inside internet exchanges; industrial edge cabinets on factory floors running control and vision workloads.

## Economic profile
Almost every cost here is per site, and the sites are small, so overhead that a large facility spreads over tens of megawatts gets spread over 50 kW. It shows up twice: PUE of 1.5–2.0 against roughly 1.1 at a large hyperscale site, and a per-kilowatt operating cost higher than any other facility type on this sheet. The case therefore has to come from somewhere other than unit cost, and there are only two places it comes from. One is bandwidth, since processing video where it is generated instead of backhauling it is a straightforward comparison of transport cost against the per-kilowatt premium. The other is revenue that does not exist without low latency, which is a much harder claim and the one most edge business cases lean on without testing. If the requirement is capacity rather than proximity, a regional colocation hall is cheaper on every line, and designing for zero site visits is the main lever an operator has on what remains.

## Videos

- https://www.youtube.com/watch?v=KsEq1xBKTuM — What are edge data centres and why are they essential for 5G? (Business Standard, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=MLz2ecyhAqs — Micro Data Centers for Edge Computing (Tripp Lite, 1 minute, 1k+ views)
- https://www.youtube.com/watch?v=4wjPUodm71M — Edge data centers (CAREL, 4 minutes, 5k+ views)

## Further reading

[Data Center Equipment (ENERGY STAR)](https://www.energystar.gov/products/data_center_equipment) · [A Comprehensive Survey of Micro Datacenter: Current Technologies and Future Possibilities (Frontiers of Computer Science, via Shanghai Jiao Tong University)](https://www.cs.sjtu.edu.cn/~lichao/publications/A_Comprehensive_FCS-2025-Guo.pdf)
