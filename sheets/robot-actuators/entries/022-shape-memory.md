---
number: 22
name: Shape-Memory Alloys (SMA)
part: 7
group: Artificial muscle
applications: [soft, prec, mobile]
density: high
backdrive: poor
precision: coarse
cost: low
---

## Description
Nitinol wire, deformed while cool, snaps back to its trained shape when heated through its phase transition, contracting ~4–5% like a muscle fiber. It does this silently, with no motor, gear, or magnet. Work density per gram is very high, and a hair-thin wire lifts hundreds of grams. Heating is easy, since you run current through the wire itself, which makes SMA the simplest possible electric "muscle": two wires and physics.

## Strengths and weaknesses
Force per mass is extraordinary, motion is silent and vibration-free, the wire is intrinsically compliant and cheap, and there's no mechanism at all. The weaknesses follow from the fact that SMA is a thermal engine. Efficiency is ~1–3%. Bandwidth is limited by cooling (a hertz at best, less when the wire is insulated). Hysteresis makes precise control hard. Fatigue shortens life at high strain. And holding a position costs continuous heat. SMA is good at occasional twitches and bad at cycling.

## When to use
Use SMA where the stroke is sub-millimeter, the duty is light, and silence, low mass, or mechanism-free simplicity is what matters: camera modules, micro-valves, deployables and latches that fire rarely, medical mechanisms where a motor won't fit. If you keep strain low (well under the 4–5% maximum) and cycles gentle, the wire lasts millions of actuations for pennies. Avoid SMA for anything continuous, fast, or efficient. 1–3% efficiency, cooling-limited bandwidth of a hertz or so, and having to heat the wire just to hold position make it wrong for limbs and wrong for sustained duty. In those cases a voice coil or micro gearmotor is the honest answer. Be skeptical of any pitch promising limb-scale SMA muscle, because it's working against thermodynamics.

## Key numbers
Contraction 4–5% at maximum, and well under that for long life · a 0.1–0.15 mm nitinol wire pulls roughly 1.5–3 N · actuation temperature typically 70–90 °C · efficiency 1–3%, because it is a thermal engine · bandwidth around 1 Hz, set by cooling · millions of cycles at low strain, far fewer near the strain limit · wire costs pennies at consumer volume.

## Examples
Smartphone camera OIS/autofocus (Cambridge Mechatronics, SMA's one high-volume application, billions of units), medical stents and guidewires (superelastic cousins), aerospace deployables and louvers (Boeing's morphing chevrons), micro-grippers, animatronic and soft-robot research.

## Economic profile
Where strokes are sub-millimeter and duty is light, SMA has already won at consumer volume. The camera-module industry proves the wire can cost pennies and stay reliable for millions of cycles at tiny strain. As a limb-scale muscle, thermodynamics is the hard limit. A good diligence rule: trust SMA pitches at millimeter stroke and hertz bandwidth, and question everything bigger and faster.

## Suppliers
[Cambridge Mechatronics](https://www.cambridgemechatronics.com/) — SMA actuators at smartphone volume · [Memetis](https://www.memetis.com/) — SMA micro-valves and miniature actuators

## Videos

- https://www.youtube.com/watch?v=wI-qAxKJoSU — Nitinol: The Shape Memory Effect and Superelasticity (engineerguy, 10 minutes, 500k+ views)
- https://www.youtube.com/watch?v=yR-6_lS9vts — Magical metals, how shape memory alloys work - Ainissa Ramirez (TED-Ed, 5 minutes, 100k+ views)
- https://www.youtube.com/watch?v=4Yi4epJ83EE — Nitinol Wire/Shape Memory Alloy - How to Use it (RimstarOrg, 3 minutes, 100k+ views)

## Further reading

[Artificial Intelligence Control Methodologies for Shape Memory Alloy Actuators: A Systematic Review and Performance Analysis (Micromachines via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12300600/) · [A Physics-Based Model of Hysteresis in SMA Wire Transducers (arXiv)](https://arxiv.org/abs/2305.13928)
