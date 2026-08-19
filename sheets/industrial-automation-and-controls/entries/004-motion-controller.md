---
number: 4
name: "Motion controller"
part: 1
group: "Specialized controllers"
layer: control
industries: [disc, log]
determinism: sub1
lockin: single
maturity: std
---

## Description
A motion controller generates the position, velocity, and acceleration commands that servo drives follow, updating them fast enough that the resulting movement is smooth and coordinated. Where a PLC decides what should happen, a motion controller decides exactly where each axis should be at each instant, interpolating a path between waypoints and distributing it across axes so that a tool follows a contour rather than moving one axis at a time. The update rate is what separates it from general control: a position command every millisecond or faster, delivered with jitter small enough that the axis does not visibly chatter.

## Strengths and weaknesses
The strength is coordinated motion of a quality that a general controller cannot produce. Electronic camming and gearing, where axes follow a master position rather than a clock, replace mechanical cams and line shafts entirely, and changing the motion profile becomes a software change rather than a machining job. The weaknesses are cost, specialization, and lock-in. Motion platforms are tightly coupled to their own drive families and programming environments, and the engineering skill needed to tune and commission them is scarcer and more expensive than general controls work.

## When to use
Use one wherever axes must be coordinated with each other or with a moving product: printing, converting, packaging, machine tools, and pick-and-place. Use a PLC with simple drive commands where axes move independently, point to point, and timing between them does not need to be precise, since the cost difference is substantial. The signal that motion control is required is usually a specification for path accuracy or for synchronization against a line master rather than a specification for speed.

## Key numbers
Position update every 1 ms or faster on coordinated axes, with jitter a fraction of that · axis counts from a handful to over a hundred on large machines · electronic camming replacing mechanical cams, so profile changes become software rather than machining · tight coupling to the vendor's own drives and network, which is where the lock-in sits · commissioning and tuning requiring specialist skill rather than general controls experience.

## Examples
Every major automation vendor offers a motion platform paired with its own servo drives and deterministic network. Machine tool controls are a related specialization with their own conventions, and the packaging and converting industries are where electronic line-shaft designs are most fully developed.

## Economic profile
Motion is where a machine builder's differentiation usually lives, and it is priced accordingly. The economic argument for it is rarely the controller: it is that mechanical cams, gearboxes, and line shafts are removed, which cuts the machine's parts count, its changeover time, and its maintenance. A machine that changes format in software rather than by swapping cams has a completely different value proposition to a packaging line, and that is what the motion platform is really being bought for. The offsetting cost is the specialist engineering, which is scarce enough that its availability rather than its price is often what constrains a project.

## Further reading
[EtherCAT technology overview (EtherCAT Technology Group)](https://www.ethercat.org/en/technology.html) · [PLCopen: standards for industrial control programming (PLCopen)](https://www.plcopen.org/)
