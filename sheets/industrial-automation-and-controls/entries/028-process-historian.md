---
number: 28
name: "Process historian"
part: 6
group: "Operations software"
layer: super
industries: [proc, hybrid, disc, bldg]
determinism: nrt
lockin: single
maturity: std
---

## Description
A historian is a time-series database built for plant data: many thousands of tags sampled continuously, stored compressed, and retrieved by time range rather than by key. The compression is what distinguishes it from a general database. Swinging-door and similar algorithms store a point only when the signal deviates from a straight line by more than a set deadband, which reduces storage enormously on the slow-moving signals that make up most of a plant while preserving the shape of the trend. The stored data becomes the record used for troubleshooting, for regulatory reporting, and for any analytics built later.

## Strengths and weaknesses
The strength is that it makes the plant's past available, which is the precondition for almost everything else: root cause analysis, performance monitoring, and any model built from operating data. The compression makes decades of history affordable to keep. The weaknesses are configuration and lock-in. Deadbands set too wide silently discard the detail that a later investigation needs, and historian data models are proprietary enough that migration is a substantial project, which is why these products have such long lives and such loyal installed bases.

## When to use
Install one wherever plant data will be looked at after the fact, which is any process plant and most discrete ones. Set deadbands deliberately per tag rather than accepting a default, since the choice determines what future questions can be answered and it cannot be revisited retroactively. Keep raw high-resolution data for critical measurements even at higher storage cost. Where the requirement is only recent data for dashboards, a general time-series database may serve at lower cost and less lock-in.

## Key numbers
Tag counts from thousands to hundreds of thousands on a large site · deadband compression reducing stored volume greatly on slow-moving signals while preserving trend shape · retention measured in years to decades, since regulatory and investigation needs are long · deadband settings irreversible in effect, because detail not stored cannot be recovered · proprietary data models making migration a project rather than an export.

## Examples
The established process historians have installed bases measured in decades, and open time-series databases have taken some of the newer and less regulated work. Regulatory record-keeping in pharmaceutical and food manufacturing is often what makes a historian mandatory rather than optional.

## Economic profile
Historians are licensed by tag count, which makes the cost scale with the plant and gives a clear incentive to historize selectively. That incentive works against the plant's interest more often than not, since the tag someone declined to historize is reliably the one an investigation needs two years later, and the cost of not having it is a long outage nobody can explain. The deeper economics are in lock-in: a decade of history in a proprietary format is an asset that cannot easily be moved, and it supports pricing that would be untenable for a product being chosen fresh.

## Further reading
[OPC Unified Architecture (OPC Foundation)](https://opcfoundation.org/about/opc-technologies/opc-ua/) · [ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards)
