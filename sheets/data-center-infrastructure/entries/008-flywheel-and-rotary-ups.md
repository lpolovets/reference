---
number: 8
name: Flywheel & Rotary UPS
part: 2
group: UPS & ride-through
density: [low, high]
where: [hyper, colo, ent]
retrofit: new
maturity: est
---

## Description
A flywheel UPS stores energy as rotation instead of chemistry. A steel or composite rotor spins in a low-friction bearing, usually magnetically levitated in a partial vacuum, and on a power failure the motor becomes a generator and delivers 15–30 seconds of full-load power. That is enough to start a generator, which is all the ride-through most designs need. A diesel rotary UPS goes further and puts the flywheel, a motor-generator, and a diesel engine on one shaft, so the same machine conditions power, rides through, and then runs on fuel.

## Strengths and weaknesses
No batteries is the point: nothing to replace on a five-year cycle, no thermal runaway risk, no dedicated battery room with its own cooling and fire suppression, and a 20-year life. Footprint is small for the power and the units tolerate heat that would shorten battery life. Against that, ride-through is seconds rather than minutes, so the design depends completely on the generator starting; the rotating machine needs mechanical maintenance a static UPS does not; and standby losses of 1–2% run continuously. Fewer vendors serve the market than for static systems.

## When to use
Choose flywheel or rotary where generators are reliable and tested, where battery replacement cost and room space are real burdens, and where the site is hot enough that batteries would age quickly. Diesel rotary suits large single-block loads and has a strong record in Europe. Do not choose it where the design must survive a generator start failure, since seconds of ride-through leaves no second chance, and do not choose it if the operator wants the stored energy to do anything besides ride-through. Lithium batteries can also provide grid services; a flywheel cannot.

## Key numbers
Ride-through 15–30 seconds at full load, against 5–15 minutes for batteries · rotor life around 20 years with no scheduled replacement · standby loss roughly 1–2% of rating · no battery room, no thermal runaway risk · tolerates ambient temperatures that would shorten battery life significantly.

## Examples
Active Power and Vycon flywheel systems in North American facilities; Hitec and Piller diesel rotary UPS installations across European data centers; Cisco's Texas facility, an early large rotary deployment; flywheels used as a bridge alongside batteries in hybrid designs.

## Videos

- https://www.youtube.com/watch?v=JckymSbfVYk — Data Center World: Flywheel UPS Demonstration (Data Center Knowledge, 2 minutes, 50k+ views)
- https://www.youtube.com/watch?v=qiGOG2o_ZRM — The Cat Flywheel UPS (Peterson Cat, 7 minutes, 5k+ views)
- https://www.youtube.com/watch?v=xxcpBz_GMaU — Dynamic Rotary UPS at Cisco's Allen TX Data Center (cycloneinteractive, 2 minutes, 50k+ views)

## Further reading

[Uptime Institute Reports (Uptime Institute)](https://uptimeinstitute.com/resources/research-and-reports)
