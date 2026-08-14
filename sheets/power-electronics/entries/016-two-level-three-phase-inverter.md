---
number: 16
name: Two-Level Three-Phase Inverter
part: 3
group: Non-isolated converters
power: [kw, mw]
voltage: [mains]
semiconductor: [si, sic]
uses: [ind, ev, grid]
maturity: comm
---

## Description
Six switches in three half-bridge legs across one DC link. Each leg ties its output terminal to either the positive or the negative rail, so a phase terminal only ever sees two voltage levels, which is where the name comes from. Pulse-width modulation at 2–20 kHz varies how much of each cycle is spent on each rail, and the load inductance averages the result into a sinewave. Every switch carries an antiparallel diode so reactive current has a path back to the DC link, and a dead time of 0.5–3 µs on silicon IGBTs, or 100–500 ns on silicon carbide, keeps both switches in a leg from conducting at once. With space-vector modulation the bridge delivers a line-to-line RMS fundamental of about 0.707 times the DC-link voltage, so an 800 V bus reaches roughly 565 V AC. This is the default three-phase converter: industrial drives, PV string inverters and vehicle traction inverters are all this circuit with different filters and firmware.

## Strengths and weaknesses
It is the lowest device count that can produce three-phase AC, which means six gate drivers, one DC-link capacitor bank, and a control problem every drives engineer already knows. Six-pack modules are second-sourced from Infineon, onsemi, Semikron Danfoss, Mitsubishi and Fuji, so the part is a commodity and nobody holds pricing power over it. The weakness is that every switching edge swings the full DC-link voltage: dv/dt of 5–10 kV/µs on silicon and up to 50 kV/µs on silicon carbide stresses motor insulation, drives bearing currents, and reflects off a long motor cable to nearly double the voltage at the terminals. Harmonic content is also the highest of any topology here, so either the switching frequency or the output filter has to be large, and switching loss rises with both DC voltage and frequency. Above roughly 690 V AC the available device voltage runs out and the design has to series devices or move to multilevel.

## When to use
Treat it as the default anywhere the AC line is 690 V or below, which covers nearly all industrial drives, string inverters and vehicle traction. If the DC bus goes above roughly 1,000 V, or the output filter is what is setting the size of the box, move to a three-level topology instead. If the motor cable runs longer than about 30 meters, add a dv/dt filter or a sine filter rather than trying to fix reflections in the modulation. If you are raising switching frequency to shrink the magnetics, price silicon carbide against silicon plus a bigger filter, because the crossover usually lands between 10 and 20 kHz. Do not reach for multilevel because the harmonics look bad in simulation; check first whether doubling the switching frequency is cheaper than doubling the device count.

## Key numbers
6 switches and 6 antiparallel diodes · switching 2–20 kHz · dead time 0.5–3 µs on silicon, 100–500 ns on silicon carbide · space-vector modulation gives line-to-line RMS around 0.707 × DC-link voltage · dv/dt 5–10 kV/µs silicon, up to 50 kV/µs silicon carbide · practical ceiling around 690 V AC

## Examples
Industrial variable-frequency drives from ABB, Siemens and Danfoss; PV string inverters from SMA, Sungrow and Fronius; the traction inverter in most electric vehicles, including Tesla's silicon carbide unit; six-pack modules such as Infineon's HybridPACK and EconoDUAL families and Semikron Danfoss's SEMITRANS.

## Economic profile
The power module is usually 20–30% of a drive's bill of materials, and it is a commodity part with at least five credible sources. Complete industrial drives run roughly $50–150/kW at 10 kW and closer to $40–60/kW above 100 kW, because the gate drivers, control board and enclosure barely change as power rises. The DC-link capacitor bank and the heatsink are the next two line items, and both scale with switching frequency and ripple current rather than with rated power, which is why raising frequency is a genuine cost lever and not just an efficiency one. Silicon carbide roughly doubles or triples the module price and buys back efficiency and volume, so it shows up first where the customer is paying for vehicle range or floor space rather than for the converter itself. The circuit has been public for forty years, so the margin sits with the module vendors and with whoever owns the control firmware, not with the topology.

## Videos

- https://www.youtube.com/watch?v=OPaXVa6r62w — 3 Phase Inverter Basics - Working Principle (The Engineering Mindset, 2 minutes, 50k+ views)
- https://www.youtube.com/watch?v=2DyX4XEduLY — Three-Phase Inverter Switching Sequence (Engineering with Prof. Kim, 9 minutes, 10k+ views)

## Further reading

[Application Manual Power Semiconductors (Semikron Danfoss)](https://assets.danfoss.com/documents/latest/524715/AB509142199100en-000204.pdf) · [Lecture Notes, Power Electronics (MIT OpenCourseWare)](https://ocw.mit.edu/courses/6-334-power-electronics-spring-2007/pages/lecture-notes/)
