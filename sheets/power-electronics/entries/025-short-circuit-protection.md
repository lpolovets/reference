---
number: 25
name: Short-Circuit Protection
part: 4
group: Control & protection
power: [w, mw]
voltage: [lv, mv]
semiconductor: [si, sic, gan]
uses: [ev, ind, grid]
maturity: comm
---

## Description
A short circuit across a converter's DC link puts the full bus voltage across a switch that is fully on, and current rises until the device's own saturation limits it, usually at ten times rated current or more. The standard detector is desaturation sensing: a high-voltage diode lets the gate driver watch the collector or drain voltage while the device is commanded on. In normal conduction that voltage is 1.5–3 V, and in a fault the device leaves saturation and it climbs toward the bus, so a comparator with a threshold around 7–9 V fires. A blanking capacitor holds the detector off through the first part of turn-on so a normal switching transient does not trip it, and that blanking is where most of the delay comes from. Once the fault is confirmed the driver cannot simply switch off, because interrupting ten times rated current in a hundred nanoseconds through the loop's stray inductance produces an overvoltage spike large enough to destroy the device, so the gate is ramped down over several microseconds through a large resistor. The whole sequence of blanking, detection, comparison and soft turn-off has to fit inside the device's short-circuit withstand time.

## Strengths and weaknesses
Desaturation sensing is cheap, needs one diode and a capacitor, and is built into essentially every isolated gate driver sold, which is why it is the default. Its weakness is speed. Silicon IGBTs are usually rated for a 10 microsecond short circuit at two thirds of rated voltage, which leaves comfortable room for 2–3 microseconds of blanking plus detection and a soft turn-off. SiC MOSFETs withstand only about 1–3 microseconds, because the die is several times smaller for the same current rating and saturation current is proportionally higher, so the same fault energy goes into a much smaller volume. Wolfspeed's own testing on a 1200 V die shows saturation current near 1,050 A, more than eleven times the device rating, with withstand time falling as bus voltage rises. That compresses the whole protection budget below one microsecond, which desaturation can barely meet, and it pushes designers toward on-die current sensing, Rogowski-coil di/dt detection, or gate-current measurement instead.

## When to use
Use desaturation sensing as the default on any IGBT-based converter above a few kilowatts, since the gate driver you were going to buy already has it. On SiC, check the arithmetic before assuming it works: add the blanking time, comparator delay and soft turn-off ramp from the driver's actual data sheet, and if the total exceeds about one microsecond, pick a faster detection method. Use a current-sense element, meaning a shunt, a current transformer, or a module with an integrated sense emitter, when you need to tell an overload apart from a hard short, because desaturation only reports that the device left saturation. Do not rely on fuses to protect semiconductors: a semiconductor fuse is sized to stop a fault destroying the enclosure and the wiring, and the die fails first in almost every case. On GaN, where withstand time is usually under a microsecond and many devices carry no short-circuit rating at all, plan on integrated current sensing from the start.

## Key numbers
Short-circuit current typically ten times rated or more · on-state voltage 1.5–3 V against a desaturation threshold around 7–9 V · blanking time 2–3 microseconds on IGBT drivers · withstand time about 10 microseconds for a silicon IGBT at two thirds rated voltage, 1–3 microseconds for a SiC MOSFET, under 1 microsecond for GaN · a Wolfspeed 1200 V SiC die saturating near 1,050 A, over eleven times its rating · soft turn-off ramped over several microseconds so stray inductance cannot produce a destructive overvoltage.

## Examples
Desaturation protection integrated in isolated gate drivers such as Infineon's EiceDRIVER family, Broadcom's optocoupled gate drivers and onsemi's NCV57100; two-level and soft turn-off as standard features on Semikron Danfoss and Infineon IGBT module drivers; Wolfspeed's PRD-08296 application note, which documents SiC short-circuit testing and the 1–3 microsecond budget it leaves.

## Economic profile
Protection is nearly free in parts and expensive in the margin it forces. A desaturation network is one high-voltage diode, a resistor and a capacitor, well under a dollar, and most of it is already inside the gate driver, so nobody prices it separately. The cost lands on the switch instead. If detection and turn-off take 3 microseconds on a device rated to survive 2, the designer has to buy a faster driver, buy more silicon carbide area than the application needs, or derate the bus voltage, and SiC die area is the most expensive square millimeter in the converter. That is one real reason SiC adoption lagged its device data sheets, since the switch was ready before the protection around it was, and gate drivers with sub-microsecond response and SiC-appropriate blanking only became commodity parts in the last several years. For a vehicle or industrial product the other cost is qualification: a manufacturer has to demonstrate the protection works over temperature, at end of life, and for all three fault types, and that is bench and chamber time rather than parts.

## Videos

- https://www.youtube.com/watch?v=O0DxiILi1pc — Basics of DESAT over-current protection (Sam Ben-Yaakov, 23 minutes, 10k+ views)
- https://www.youtube.com/watch?v=rqBvkovpdD0 — VT1411: Protection Features in Gate Drivers (Analog Devices, Inc., 14 minutes, 1k+ views)

## Further reading

[SiC MOSFET Short Circuit Application Note, PRD-08296 (Wolfspeed)](https://assets.wolfspeed.com/uploads/2024/01/Wolfspeed_PRD-08296_SiC_MOSFET_Short_Circuit_Application_Note.pdf) · [Application Manual Power Semiconductors (Semikron Danfoss)](https://www.semikron-danfoss.com/service-support/application-manual.html)
