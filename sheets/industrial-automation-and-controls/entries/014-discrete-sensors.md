---
number: 14
name: "Discrete sensors"
part: 3
group: "I/O and sensing"
layer: field
industries: [disc, log, hybrid]
determinism: ms10
lockin: open
maturity: std
---

## Description
Discrete sensors answer one question with one bit: is the part present, is the gate closed, has the actuator reached the end of its stroke. Inductive proximity sensors detect metal without contact, photoelectric sensors detect almost anything by interrupting or reflecting a light beam, capacitive sensors detect material through a container wall, and mechanical limit switches remain in use where simplicity and a positive mechanical action are wanted. A machine of any complexity carries dozens to hundreds of them, and they are the single most numerous device class in discrete automation.

## Strengths and weaknesses
The strengths are cost, simplicity, and reliability. A proximity sensor with no moving parts, sealed against the environment, will run for years and costs very little, and its signal needs no interpretation. The weaknesses are that each one answers only its own narrow question, so machine state has to be inferred from many of them, and that they fail in ways that are not always obvious: a photoelectric sensor gradually obscured by dust degrades before it fails, producing intermittent faults that are among the most time-consuming to diagnose in a plant.

## When to use
Use them for presence, position, and end-of-travel detection, which is most of what a machine needs to know. Choose the sensing principle by the material and the environment rather than by habit, since a capacitive sensor sees through a plastic wall that defeats an inductive one and a photoelectric sensor fails where an inductive one is unaffected. Where changeovers alter what the sensor must detect, an IO-Link version that can be reconfigured from the recipe removes a manual adjustment and a common source of restart faults.

## Key numbers
Dozens to hundreds of devices on a machine of any complexity, making this the most numerous device class in discrete automation · unit costs low enough that installation and wiring exceed the device price · inductive sensing ranges typically a few millimeters, photoelectric ranges from centimeters to tens of meters depending on mode · gradual degradation from contamination producing intermittent faults rather than clean failures · three-wire connection shared with IO-Link, so upgrading needs no rewiring.

## Examples
Inductive proximity switches on cylinders and inductive or photoelectric sensors on conveyors are the everyday cases, alongside safety-rated variants where the detection is part of a protective function. Vision systems increasingly replace clusters of discrete sensors where the inspection is more than presence.

## Economic profile
Individually these are among the cheapest components in a plant and collectively they are a real line item, mostly through installation rather than purchase. Their economic significance is disproportionate to their cost because they cause downtime: a contaminated or misaligned sensor stops a line, and finding it takes an electrician time that costs more than the sensor many times over. That asymmetry is the entire argument for diagnostics at this layer, and it is why IO-Link's value case rests on downtime rather than on the sensors themselves.

## Further reading
[Machine guarding overview (US Occupational Safety and Health Administration)](https://www.osha.gov/machine-guarding) · [PROFINET and PROFIBUS technology (PI)](https://www.profibus.com/technologies/profinet)
