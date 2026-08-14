---
number: 3
name: Rack PDUs
part: 1
group: Power delivery
density: [low, high]
where: [hyper, colo, ent, edge]
retrofit: drop
maturity: mature
---

## Description
A rack power distribution unit is the strip inside the cabinet that turns one or two feeds into the dozens of outlets the servers plug into. Four grades exist: basic, which is a strip; metered, which reports total draw; monitored per-outlet, which reports each outlet; and switched, which can turn outlets on and off remotely. Racks are normally fed from two independent PDUs on separate upstream paths, so either can be lost without dropping dual-corded equipment.

## Strengths and weaknesses
The metering is the value. Per-outlet data tells you what is actually drawing power, which is the input to every capacity and stranded-capacity decision, and switched outlets allow a remote power cycle instead of a site visit. They are cheap, install in minutes, and need no design change. The weaknesses are that they are one more thing in a hot cabinet with a finite life, that a failed PDU takes out one power path, and that their built-in circuit breakers trip on inrush if a whole rack is energized at once. At very high density they run out of runway: a 130 kW rack cannot be fed by conventional 208 V strips.

## When to use
Use metered or per-outlet PDUs everywhere, since the incremental cost over basic is small and the visibility is what capacity planning runs on. Use switched units in colocation, at the edge, and anywhere staff are not on site. Above about 40–50 kW per rack, stop and look at higher-voltage distribution and rack power shelves instead, because the number of cords and the copper needed to feed the rack conventionally becomes impractical. Always confirm the PDU's own breaker curve against the servers' inrush before a full-rack power-up.

## Key numbers
Typical rack feeds 208 V or 415 V three-phase at 30–60 A, giving roughly 5–20 kW per PDU · dual-fed racks are standard, so each path carries the full load in a failure · per-outlet metering typically within plus or minus 1% · switched units allow remote power cycling · conventional strips run out somewhere around 40–50 kW per rack.

## Examples
Metered and switched PDUs from Vertiv, Raritan, APC, and ServerTech in nearly every colocation cabinet; per-outlet data feeding DCIM capacity models; 415 V distribution in hyperscale halls, which delivers 240 V line-to-neutral to equipment and cuts conductor size.

## Economic profile
Rack PDUs are among the cheapest items in the power chain, and the metering is what a buyer is actually paying for. The step from basic to metered or per-outlet is small, and per-outlet data is the input to every capacity decision in a facility that typically has 10–30% of its installed power stranded in the wrong place. Switched units are justified on a different line: at an edge site or an unstaffed colocation cage, one avoided visit can easily cost more than the unit. The ceiling is what to plan around. Conventional 208 V strips run out somewhere near 40–50 kW per rack, so at AI density the spending moves to rack power shelves and higher-voltage distribution and the PDU stops being the interesting part of the chain. If a hall is being specified for a decade, buy per-outlet metering everywhere and assume the strips themselves get replaced along the way.

## Videos

- https://www.youtube.com/watch?v=DrK8wjePVO8 — Understanding Rack Power Distribution (PDU) (Critical Facilities Connect, 2 minutes, under 1k views)
- https://www.youtube.com/watch?v=BpX7DrkHkdE — Rack Power (PDU) terms and technology (TechTrainerNJ, 10 minutes, 100k+ views)
- https://www.youtube.com/watch?v=99yu9wXuYDg — Power Distribution Units | Data Center Rack Power Distribution Units | VueNow (VueNow Official, 1 minute, 5k+ views)

## Further reading

[Best Practices Guide for Energy-Efficient Data Center Design (Federal Energy Management Program)](https://www.energy.gov/sites/default/files/2024-07/best-practice-guide-data-center-design.pdf) · [Considerations for a Highly Available Intelligent Rack Power Distribution Unit (Vertiv)](https://www.vertiv.com/globalassets/documents/white-papers/white-paper-rack-pdu-en_7014_0.pdf)
