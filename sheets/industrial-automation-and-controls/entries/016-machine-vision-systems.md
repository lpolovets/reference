---
number: 16
name: "Machine vision systems"
part: 3
group: "Actuation and vision"
layer: control
industries: [disc, log, hybrid]
determinism: ms100
lockin: single
maturity: std
related: [robot-sensors#monocular-rgb-cameras]
---

## Description
A machine vision system is a camera, a lens, controlled lighting, and an inspection program, and the order of that list is close to the order of importance. Most vision failures are lighting failures. The system either passes or fails a part against criteria, or locates a feature so a robot can act on it, and it does so within a cycle time the machine dictates. Deep learning has extended what can be inspected to defects that are hard to specify geometrically, at the cost of needing labeled examples and of being harder to explain when it gets one wrong.

## Strengths and weaknesses
The strength is that one camera can replace a cluster of discrete sensors and check things none of them could, including dimensions, print quality, assembly completeness, and surface defects, at line rate and on every part rather than on a sample. The weaknesses are environmental sensitivity and specification difficulty. A system commissioned in winter light can behave differently in summer, a changed supplier's slightly different surface finish can shift results, and writing an acceptance specification that both the buyer and the integrator understand the same way is genuinely hard.

## When to use
Use it where every part must be checked, where the inspection is beyond what a discrete sensor can do, or where a robot needs to locate a part that is not precisely fixtured. Invest in lighting and fixturing before algorithms, since a well-lit repeatable image makes the inspection easy and a poor one makes it impossible. Use deep learning where the defect is real but hard to define geometrically, and keep a rule-based check where the criterion is dimensional and can be stated exactly. Specify acceptance in terms of false accept and false reject rates on a defined sample, not in terms of accuracy.

## Key numbers
Lighting the dominant cause of vision system success or failure, ahead of camera and algorithm choice · inspection at line rate on every part against sampling by other methods · false accept and false reject rates the meaningful specification, since a single accuracy figure hides the tradeoff between them · deep learning needing labeled defect examples, which are scarce precisely because defects are rare · seasonal and supplier variation a common cause of a system that worked at commissioning and drifts later.

## Examples
Smart cameras with the processing on board suit single inspections; PC-based systems handle multiple cameras and heavier processing. Barcode and data matrix reading is the highest-volume application by far, and robot guidance is the fastest-growing one.

## Economic profile
Vision is bought to avoid the cost of defects escaping, and the case is strongest where a defect found by the customer is far more expensive than one found on the line, which is true in automotive, medical devices, and food. The hidden cost is not the hardware but the specification and the ongoing tuning, and projects that fail generally fail there rather than on capability. A system that rejects good parts is worse than no system, because it converts a quality problem into a yield problem, which is why false reject rate rather than detection rate is what should be in the contract.

## Videos

- https://www.youtube.com/watch?v=w8oEJgnO0S0 — Machine Vision: Overview | Machine Vision pt1 (Breen Machine Automation Services LLC, 10 minutes, 100k+ views)
- https://www.youtube.com/watch?v=emPWRQshsXQ — Introduction to Machine Vision for Controls Engineers (RealPars, 6 minutes, 10k+ views)

## Further reading
[Data acquisition systems and software (National Instruments)](https://www.ni.com/en/shop/data-acquisition.html) · [ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards)
