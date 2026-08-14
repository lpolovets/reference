---
number: 34
name: Redundancy Tiers & Commissioning
part: 7
group: Racks & operations
density: [low, ext]
where: [hyper, colo, ent]
retrofit: new
maturity: mature
---

## Description
Uptime Institute's Tier classification describes how much of a facility can fail or be maintained without stopping the IT load. Tier I is a single path with no redundancy. Tier II adds redundant components. Tier III is concurrently maintainable: any element can be taken out of service for work with the load still running. Tier IV is fault tolerant: an unplanned failure of any single element does not affect the load. Commissioning is the separate discipline of proving the design actually behaves that way, in five levels from factory testing through integrated systems testing under simulated failure.

## Strengths and weaknesses
The Tier system gives buyers and designers a shared vocabulary, and a certified design is a genuine commercial signal rather than a marketing claim. Level 5 integrated systems testing, where the whole facility is run at load and faults are deliberately introduced, is the single most effective way to find design and construction errors before a tenant does. The costs are capital and misuse. Tier IV can cost 30–50% more than Tier III for redundancy most workloads no longer need, and the label is widely applied loosely, with "Tier III design" claimed where nothing was ever certified.

## When to use
Choose the tier from how the application handles failure. Distributed cloud and AI training workloads that tolerate node and even site loss do not need Tier IV; several hyperscale designs are deliberately below Tier III at the facility level because resilience lives in the software. Enterprise systems with no failover still need concurrent maintainability, and Tier III is the usual answer. Whatever the tier, commission properly and insist on integrated systems testing under load, because an untested redundant design is a redundant design on paper only.

## Key numbers
Tier III is concurrently maintainable; Tier IV is fault tolerant against any single unplanned failure · Tier IV typically costs 30–50% more than Tier III · commissioning runs in five levels, ending with integrated systems testing under load · most human-error outages trace to procedures rather than equipment · certification applies to the design, the constructed facility, or the operations, and the three are separate.

## Examples
Uptime Institute Tier certifications held by colocation providers as a sales credential; hyperscale designs that deliberately reduce facility redundancy because the application fails over between sites; integrated systems testing catching control-sequence errors that no component test would have found.

## Economic profile
Redundancy multiplies the most expensive part of the building, so the tier choice moves total capital more than almost anything else here: Tier IV typically costs 30–50% more than Tier III for the same IT capacity. Whether that is money well spent depends on where resilience already lives, and for a workload that fails over between sites in software the operator is paying for it twice. That is why several hyperscale designs sit deliberately below Tier III at the facility level, and why an enterprise application with no failover still buys Tier III concurrent maintainability. A colocation tenant should ask what a tier claim actually covers, since certification of the design, the constructed facility, and the operations are three separate things, and "Tier III design" gets claimed where nothing was certified. Commissioning is the opposite kind of spend: it lands at the end when the schedule is already late, it costs far less than the redundancy it is checking, and level 5 integrated systems testing under load is the cheapest place in the program to find a design or construction error. If it gets cut, a tenant finds the error instead.

## Videos

- https://www.youtube.com/watch?v=8DzqbL0HKG0 — Uptime Data Center Tier Levels - The Gold Standard (Data Center News, 6 minutes, 1k+ views)
- https://www.youtube.com/watch?v=G54lZFg0tyE — The 5 Levels of Data Center Commissioning (Explained) (Five Nines, 5 minutes, 5k+ views)
- https://www.youtube.com/watch?v=aENMFkxCGQo — CertMike Explains Data Center Tiers (Mike Chapple, 4 minutes, 5k+ views)

## Further reading

[Uptime Institute Global Data Center Survey 2025 (Uptime Institute)](https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2025.Annual.Survey.Report.pdf?version=0) · [Uptime Institute Tier Classification System (Uptime Institute)](https://uptimeinstitute.com/tiers)
