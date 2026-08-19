---
number: 27
name: "SCADA and HMI"
part: 6
group: "Operations software"
layer: super
industries: [disc, proc, hybrid, log, bldg]
determinism: slow
lockin: single
maturity: std
---

## Description
The human-machine interface is the screen at the machine, and supervisory control and data acquisition is the same idea across a plant or a distributed network: it polls controllers, displays the process, records alarms, and lets an operator intervene. The design of these screens is a real discipline rather than a decorating exercise. High-performance display practice, developed after investigations found operators overwhelmed during upsets, argues for muted backgrounds, color reserved for abnormal conditions, and trends rather than raw numbers, on the grounds that a screen where everything is colorful conveys nothing when something is wrong.

## Strengths and weaknesses
The strength is that it is the operator's entire view of the process, and a well-designed one measurably improves how quickly abnormal conditions are recognized and handled. Alarm management is the part with the clearest evidence behind it, since alarm floods during upsets are a documented contributor to major incidents. The weaknesses are that these systems are usually single-vendor, that they accumulate customization nobody documents, and that they are the most commonly internet-exposed part of a control system, which makes them a standing security concern.

## When to use
An HMI is required at any machine an operator interacts with, and supervisory software wherever a process spans more than one controller or more than one location. Apply alarm rationalization from the start, since retrofitting it to a system with thousands of configured alarms is a long project that plants defer indefinitely. Design displays around what the operator must decide rather than around what the system can display, and keep the supervisory layer off any network reachable from outside the plant.

## Key numbers
Alarm floods during upsets a documented contributor to major process incidents, which is what alarm rationalization addresses · high-performance display practice reserving color for abnormal conditions rather than using it decoratively · polling architectures where the supervisory layer reads controllers rather than the reverse · customization accumulating over a system's life and rarely documented, which is what makes migration expensive · frequently the most internet-exposed component of a control system.

## Examples
Every controller vendor ships an HMI product tied to its platform, and independent supervisory packages compete on being able to talk to all of them. The alarm management standards developed after process industry incidents are the reference for how many alarms an operator can actually handle.

## Economic profile
License cost is visible and modest against the engineering, which is where the money goes: screen development, tag configuration, alarm rationalization, and testing dominate a supervisory project. The larger economic fact is migration cost. These systems accumulate undocumented customization for a decade or more, and replacing one is a project priced against that accumulation rather than against the software, which is why plants stay on versions long past support and why vendors can price upgrades the way they do.

## Videos

- https://www.youtube.com/watch?v=nlFM1q9QPJw — What is SCADA? (RealPars, 8 minutes, 1m+ views)
- https://www.youtube.com/watch?v=rwicPf0By38 — What Is SCADA? (Inductive Automation, 5 minutes, 10k+ views)

## Further reading
[ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards) · [Industrial Control Systems resources (CISA)](https://www.cisa.gov/topics/industrial-control-systems)
