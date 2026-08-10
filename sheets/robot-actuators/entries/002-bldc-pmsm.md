---
number: 2
name: BLDC / PMSM
part: 1
group: Electric rotary
applications: [arm, legged, mobile, prec]
density: med
backdrive: exc
precision: mod
cost: low
---

## Description
This is the default motor of modern robotics. Permanent magnets sit on the rotor, the stator windings are commutated electronically, and field-oriented control (FOC) delivers smooth, precisely known torque at any speed including stall. Drone ESCs commoditized the electronics, and EVs industrialized the magnets and windings. Outrunner geometries (large-diameter and pancake-thin) maximize torque per mass, which is why they're used in essentially every quasi-direct-drive robot joint.

## Strengths and weaknesses
Efficiency is high (90%+), power density is good, and the only wear parts are the bearings. Torque is known from current, so you get force estimation for free, and the heat is generated in the stator where you can actually remove it. On the weakness side, it needs position sensing and a three-phase drive, so the electronics are part of the actuator rather than an accessory. Continuous torque is thermally limited far below peak, ungeared torque density is modest (which is why transmissions exist), and rare-earth magnets carry China supply-chain exposure.

## When to use
Make BLDC + FOC your starting assumption for any powered robot joint. It handles continuous duty, runs above 90% efficiency, gives you torque from current for sensorless force estimation, and puts the heat in the stator where you can sink it. Then choose the transmission around it: none for transparency, a single-stage planetary for QDD limbs, a strain-wave gear for precision arms. Step away only at the edges. If the axis is worth under roughly $20 and never runs hot, use a brushed motor or a stepper. If open-loop positioning is good enough, use a stepper. If the spec is in nanometers rather than newton-meters, look at direct-drive, linear, or piezo hardware instead. For a mainstream joint, anything other than BLDC needs a specific reason.

## Key numbers
Efficiency above 90% at rated load · continuous torque typically a third to a half of peak · ungeared specific torque usually under 10 Nm/kg on robot-joint outrunners · no-load speed 1,000–10,000 rpm depending on winding · frameless kits $50–150 at volume from Chinese suppliers, $500 and up from Western catalogs.

## Examples
T-Motor and Maxon EC frameless kits in robot joints; every drone propulsion motor; Tesla Optimus and Unitree joint modules; ODrive/moteus/VESC open-source FOC drives that made hobby-grade force control possible.

## Economic profile
Frameless torque motors that cost $500+ from Western catalogs ship for $50–150 from Chinese suppliers at volume, and humanoid demand is pushing prices down further. The motor itself is becoming a commodity, so the margin is moving to the integrated module (motor + gear + encoder + drive) and to the FOC silicon. Magnet supply is the thing to watch.

## Suppliers
[T-Motor](https://store.tmotor.com/) — high-torque outrunners and robot-joint motors · [mjbots](https://mjbots.com/) — open FOC drives and moteus servo modules

## Videos

- https://www.youtube.com/watch?v=yiD5nCfmbV0 — Brushless Motor - How they work BLDC ESC PWM (The Engineering Mindset, 16 minutes, 5m+ views)
- https://www.youtube.com/watch?v=Nhy6g9wGHow — What is FOC? (Field Oriented Control) And why you should use it! || BLDC Motor (GreatScott!, 9 minutes, 500k+ views)
- https://www.youtube.com/watch?v=YPD1_rcXBIE — Understanding Field-Oriented Control | Motor Control, Part 4 (MATLAB, 10 minutes, 100k+ views)

## Further reading

[AN885: Brushless DC Motor Fundamentals (Microchip)](https://ww1.microchip.com/downloads/en/AppNotes/00885a.pdf) · [Sensorless BLDC Position and Speed Control: A Technical Review (arXiv)](https://arxiv.org/abs/2402.05263)
