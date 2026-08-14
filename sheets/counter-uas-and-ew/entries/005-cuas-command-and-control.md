---
number: 5
name: Multi-sensor fusion and C2
part: 1
group: Command and control
threats: [g12, g35, swarm, cm]
effectiveness: good
collateral: none
exchange: best
cost: low
---

## Description
The command-and-control layer takes detections from radar, RF, acoustic, and optical sensors, correlates them into single tracks, classifies each track, applies engagement rules, and recommends or commands an effector. In practice this is the part of a counter-UAS system that determines whether it works, because each individual sensor produces false alarms at a rate that would make it unusable alone. Interoperability standards matter enormously here: the US has consolidated around the FAAD C2 system and open interfaces so that sensors and effectors from different vendors can be mixed.

## Strengths and weaknesses
Fusion turns several unreliable sensors into one reasonably reliable picture, which is the only way to get an acceptable false alarm rate. Open architectures let a customer buy the best sensor and the best effector independently and upgrade either. Cost is low relative to the hardware it coordinates. The weaknesses are integration effort and operator workload. Every new sensor needs an interface, and vendors have strong commercial reasons to prefer closed systems. Poorly tuned fusion produces either alarm fatigue or missed detections, and there is no way to find out which without long field trials.

## When to use
Every multi-sensor counter-UAS deployment needs this layer, and the architecture decision — open standards versus a single vendor's closed system — is the most consequential procurement choice in the whole field. Choose open interfaces if you expect the threat to change, which it will. For a single fixed site with a stable threat, an integrated single-vendor system is simpler to field and support. Judge candidate systems on false alarm rate over a week of real operation and on how long it takes to add a new sensor type.

## Key numbers
Radar, RF, acoustic, and EO/IR detections correlated into one track picture · system cost $100k–1M, a small fraction of the sensors and effectors it coordinates · no emissions and no collateral risk of its own · FAAD C2 is the US joint standard interface · false alarm rate over a week of real operation is the acceptance metric.

## Limits and failure modes
Alarm fatigue is the dominant real-world failure: operators stop responding to a display that cries wolf. Track correlation errors merge two drones into one or split one into two. Latency through the chain can exceed the engagement window against fast targets. Closed systems lock a customer into one vendor's upgrade path, which is a serious problem when the threat evolves in months.

## Examples
The US Army's Forward Area Air Defense Command and Control system, now the joint standard for counter-UAS, Northrop Grumman's FAAD C2 implementations, Anduril Lattice, Dedrone's fusion platform, and the C2 layers in Drone Dome and Falcon Shield.

## Economic profile
Software is a small fraction of system cost and a large fraction of system value, which makes this an attractive business. It is also where lock-in happens, and defense customers have become more insistent on open architectures partly for that reason. The US decision to standardize on a single C2 backbone across services was driven as much by the need to avoid a hundred incompatible systems as by any technical argument, and it has shaped what vendors build.

## Videos

- https://www.youtube.com/watch?v=KX0ji1sAXl8 — Anduril Lattice Counter Drone System (Anduril Industries, 2 minutes, 500k+ views)
- https://www.youtube.com/watch?v=RpFFScTovII — Lattice for Mission Autonomy: An Unfair Advantage for Unrivaled Deterrence (Anduril Industries, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=5Gmzxjibu6M — AiON: A revolutionary new Counter-UAS Command and Control System (Northrop Grumman, 1 minute, 5k+ views)

## Further reading

[Department of Defense Counter Unmanned Aircraft Systems: Background and Issues for Congress (Congressional Research Service)](https://www.everycrsreport.com/reports/R48477.html) · [SAPIENT autonomous sensor system (Defence Science and Technology Laboratory)](https://www.gov.uk/guidance/sapient-autonomous-sensor-system)
