---
number: 7
name: Double-Conversion UPS
part: 2
group: UPS & ride-through
density: [low, ext]
where: [hyper, colo, ent, edge]
retrofit: hall
maturity: mature
---

## Description
A double-conversion uninterruptible power supply rectifies incoming AC to DC, holds a battery on that DC bus, and inverts back to AC for the load. Because the load is always fed from the inverter, the utility waveform never reaches the IT equipment: sags, harmonics, and frequency wander are all filtered out, and when the utility fails the batteries simply keep supplying the same DC bus with no transfer at all. Ride-through is typically 5–15 minutes, which is far longer than the 10 seconds a generator needs.

## Strengths and weaknesses
It is the cleanest power available and the transfer is genuinely seamless. Modern units run at 96–97% efficiency in double conversion, and above 98% in eco mode where the load runs on utility power with the inverter standing by. The costs are capital, footprint, and the batteries. A UPS plant plus batteries is a large room, valve-regulated lead-acid strings need replacing every 3–5 years, and eco mode trades a little transfer risk for the last point of efficiency. Every conversion stage is also a stage that can fail, which is why UPS modules are deployed N+1.

## When to use
Double conversion is the default for anything that cannot tolerate a momentary interruption, which is most IT load. Choose it wherever utility power quality is poor, since the filtering is worth as much as the ride-through. Consider eco or multi-mode operation to recover efficiency on a clean supply, with the transfer time verified against the equipment's own tolerance. Where the load is small and the power is clean, a line-interactive unit is cheaper. Where the site wants the batteries to earn money between outages, a lithium battery plant with grid-services capability is the better structure.

## Key numbers
Efficiency 96–97% in double conversion, above 98% in eco mode · ride-through typically 5–15 minutes at full load · no transfer time, because the load never leaves the inverter · valve-regulated lead-acid strings last 3–5 years, lithium 8–10 · deployed N+1 at module level in most designs.

## Examples
Modular UPS systems from Vertiv, Schneider, Eaton, and ABB in almost every colocation facility; eco-mode operation now common in hyperscale, where power quality is good and the efficiency point is worth chasing; Uptime Institute survey data showing average PUE stuck near 1.5, of which the UPS is a small but persistent contributor.

## Economic profile
Most of the cost is the plant and the room it sits in, but the losses run every hour. Modern units hold 96–97% in double conversion and above 98% in eco mode, and one to two points on a 100 MW IT load is 1–2 MW burned continuously, which is why hyperscale operators chase eco mode and sites with poor power quality usually do not. The recurring line item is batteries: valve-regulated lead-acid strings need replacing every 3–5 years against 8–10 for lithium, and each replacement is labor in a live building rather than just cells. Deploying modules N+1 multiplies the whole plant, so the redundancy target moves the capital number more than any efficiency decision does. Where the operator wants the stored energy to do something between outages, a lithium plant with grid-services capability gets two jobs out of the same capital, which is usually the better structure wherever demand response pays.

## Videos

- https://www.youtube.com/watch?v=uz6unYab6G0 — How Data Center UPS Systems Work (MEP Academy, 7 minutes, 10k+ views)
- https://www.youtube.com/watch?v=C1BYo88HSU0 — Uninterrupted Power Supply (UPS) Operating modes (Rockz Automation, 8 minutes, 50k+ views)
- https://www.youtube.com/watch?v=bj5KpFR_LPU — What is a UPS? (Uninterruptible Power Supply) (RealPars, 8 minutes, 500k+ views)

## Further reading

[Electrical Efficiency Measurement for Data Centers, White Paper 154 (Schneider Electric)](https://download.schneider-electric.com/files?p_File_Name=NRAN-72754V_R2_EN.pdf&p_Doc_Ref=SPD_NRAN-72754V_EN) · [Eaton Energy Saver System: Facts and Principles (Eaton)](https://www.eaton.com/content/dam/eaton/markets/data-center/documents/Eaton_Energy_Saver_System_facts_and_principles_White_Paper.pdf)
