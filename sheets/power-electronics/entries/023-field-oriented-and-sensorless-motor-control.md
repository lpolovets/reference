---
number: 23
name: Field-Oriented and Sensorless Motor Control
part: 4
group: Control & protection
power: [w, mw]
voltage: [lv, mv]
semiconductor: [si, sic]
uses: [ind, ev, cons]
maturity: comm
---

## Description
Field-oriented control makes an AC motor behave like a DC motor by doing the commutation in software. Two of the three phase currents are measured and put through a Clarke transform into a stationary two-axis frame, then a Park transform into a frame that rotates with the rotor, which needs the rotor angle. What comes out is two DC quantities: the current aligned with the rotor flux, and the current at right angles to it, which is the one that produces torque. Two PI regulators hold the flux current at its command (zero for a surface-magnet machine, negative when field weakening above base speed) and the torque current at the torque command, and their outputs go back through an inverse Park transform into the modulator. The loop runs once or twice per PWM period, typically at 10–20 kHz, and gives torque control bandwidth of roughly 1 kHz. All of it depends on knowing the rotor angle, which is why the position sensor, or the estimator that replaces it, is the hard part.

## Strengths and weaknesses
Field-oriented control gives full torque at zero speed and torque accurate to a few percent, against volt-per-hertz scalar control, which has no torque control at all below a few hertz. It costs two current sensors, a rotor angle, and a processor that finishes the math in tens of microseconds. Sensorless operation removes the angle sensor by estimating it from measured current and known applied voltage, usually through an observer that extracts the back-EMF. That estimate collapses at low speed, because back-EMF is proportional to speed while the resistive drop and the dead-time voltage error are not, so most back-EMF observers stop working somewhere around 5–10% of rated speed and need an open-loop start below that. High-frequency injection covers the gap by exciting the machine's saliency and works down to zero speed on an interior-magnet or synchronous-reluctance rotor, but it adds audible noise and extra loss, and it does almost nothing on a surface-magnet rotor whose d- and q-axis inductances are nearly equal.

## When to use
Use field-oriented control on any three-phase machine where torque accuracy or efficiency matters, which today is nearly all of them. Go sensorless if the load never needs holding torque at standstill: fans, pumps, compressors and most appliance drives run continuously above 10% speed, which is why sensorless has shipped in hundreds of millions of units. Keep an encoder or resolver if you need rated torque from zero, which covers vehicle traction, servos, elevators, cranes and anything doing position control. If the machine is interior-magnet or synchronous-reluctance and you need low-speed operation without a sensor, high-frequency injection is the option, and you should budget for the noise complaint that follows. Where neither is worth it, volt-per-hertz control remains the fallback for multi-motor pump and fan groups, where cost per axis matters more than performance.

## Key numbers
Control loop at 10–20 kHz, torque bandwidth roughly 1 kHz · two phase currents measured, two PI loops in the rotating frame · torque accurate to a few percent, against no torque control below a few hertz with volt-per-hertz · back-EMF observers usable down to roughly 5–10% of rated speed, open loop below that · high-frequency injection works to zero speed on salient rotors and poorly on surface-magnet ones · an encoder or resolver plus cable and interface typically adds $10–100 to a drive.

## Examples
Sensorless field-oriented control in effectively every inverter-driven air conditioner, washing machine and refrigerator compressor, running on parts like Microchip's dsPIC and Texas Instruments' C2000; sensor-based field-oriented control in production EV traction inverters, which carry a resolver or equivalent because hill hold needs torque at zero speed; high-frequency injection in machine-tool spindles and in synchronous-reluctance industrial drives from ABB and Siemens.

## Economic profile
The saving from going sensorless is the sensor and everything attached to it. An encoder or resolver plus its cable, connector and interface circuit typically adds $10–100 to a drive, and on an appliance control board built to a few dollars that is the difference between shipping and not. It also removes a connector and a cable run, which in field-failure data are usually a larger reliability problem than the electronics. What replaces the sensor is engineering, and an observer that stays stable across temperature, load and the machine's parameter drift is genuinely difficult, so this is one of the few places in power electronics where a control algorithm is a durable competitive asset. The market has resolved that by selling it: Texas Instruments, Microchip, ST, Infineon and Renesas all ship motor-control libraries with the estimator included, which is how appliance makers with no control engineers ship sensorless drives. In vehicle traction the arithmetic goes the other way, because a resolver at automotive volume costs a few tens of dollars and the warranty exposure from a rotor-angle estimate failing during a hill start is far larger than that.

## Videos

- https://www.youtube.com/watch?v=YPD1_rcXBIE — Understanding Field-Oriented Control | Motor Control, Part 4 (MATLAB, 10 minutes, 100k+ views)
- https://www.youtube.com/watch?v=mbJOxqxLkLE — The Clarke and Park transformations (Episode 8) (Jantzen Lee, 9 minutes, 100k+ views)
- https://www.youtube.com/watch?v=teeMdFaykPE — Sensored vs. sensorless control (Texas Instruments, 12 minutes, 50k+ views)

## Further reading

[Sensorless Field Oriented Control of a PMSM, AN1078 (Microchip Technology)](https://ww1.microchip.com/downloads/en/appnotes/01078b.pdf) · [Sensorless Control of PMSM for Electric Vehicles: A Comprehensive Review (Journal of Renewable Energy and Environment)](https://www.jree.ir/article_243401_509728374f0cb29f75f4eafbdafe8539.pdf)
