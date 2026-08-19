---
number: 19
name: "Electronic camming and gearing"
part: 4
group: "Motion control"
layer: control
industries: [disc, log]
determinism: sub1
lockin: single
maturity: std
---

## Description
Electronic camming replaces a mechanical cam with a table relating a master position to a slave position, and electronic gearing replaces a gear train with a programmed ratio. Slave axes follow the master's position rather than a clock, so if the line slows down every axis slows with it and synchronization is preserved. That distinction is the whole point: a time-based profile loses registration whenever the line speed changes, and a position-based one does not. The master may be a physical axis, a virtual axis in the controller, or a signal from the product itself such as a registration mark.

## Strengths and weaknesses
The strength is that changeover becomes a software operation. A packaging machine that changes format by loading a different cam table replaces one that required swapping mechanical cams, which changes the machine's economics on short runs entirely. Profiles can also be shaped to reduce jerk and settle faster than a mechanical cam ever could. The weaknesses are that the machine now depends on a deterministic network and on tuned servo axes, so a fault in either stops it, and that the mechanical simplicity which made older machines diagnosable by eye is gone.

## When to use
Use it wherever axes must stay in registration with a moving product or with each other, and especially where the machine runs many formats. Use it where line speed varies, since that is exactly the case mechanical synchronization handles poorly. Keep mechanical coupling where the ratio never changes, the machine runs one product, and simplicity is worth more than flexibility, which still describes a good deal of high-volume single-product equipment.

## Key numbers
Slaves following master position rather than time, which preserves registration when line speed changes · changeover reduced from a mechanical operation to loading a different profile · profiles shaped for reduced jerk, allowing faster settling than a mechanical cam · dependence on a deterministic network with update rates typically under a millisecond · a virtual master in software allowing axes to be synchronized with no physical master shaft at all.

## Examples
Packaging, converting, printing, and labeling machinery are where electronic line shafts are most fully developed, having replaced physical line shafts and cam boxes almost entirely in new equipment. Flying shear and rotary knife applications are the classic textbook cases.

## Economic profile
The value is changeover time, and on a plant running many short orders it dominates every other consideration. A line that changes format in minutes rather than hours has materially more available capacity from the same asset, and that shows up directly in overall equipment effectiveness. The cost is a more expensive machine and a more specialized maintenance requirement, so the arithmetic favors it where product variety is high and works against it on long single-product runs, which is why both kinds of machine are still built.

## Further reading
[PLCopen: standards for industrial control programming (PLCopen)](https://www.plcopen.org/) · [EtherCAT technology overview (EtherCAT Technology Group)](https://www.ethercat.org/en/technology.html)
