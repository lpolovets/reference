---
number: 14
name: Buck and Boost Converters
part: 3
group: Non-isolated converters
power: [w, kw]
voltage: [lv, mains]
semiconductor: [si, gan]
uses: [it, cons, ev]
maturity: comm
---

## Description
The buck steps voltage down and the boost steps it up, and both do it with one switch, one diode or second switch, one inductor and one capacitor. In a buck the switch connects the input to the inductor for a fraction D of each switching period, and in steady state the inductor's volt-seconds have to balance over the cycle, which gives an output of D times the input. In a boost the inductor charges from the input while the switch is on and discharges into the output when the switch opens, giving an output of the input divided by (1 - D). Neither one isolates, because input and output share a ground, so these are for changing voltage inside a box rather than for safety separation. Switching frequency runs 100 kHz to 2 MHz in low-power silicon and gallium nitride designs and 10–100 kHz at kilowatt scale, and efficiency is typically 90–98%. Below about 3 V output the diode has to go, since a Schottky drops 0.4 V and that is a third of a 1.2 V rail, so a second MOSFET replaces it and the converter becomes synchronous.

## Strengths and weaknesses
These are the cheapest and simplest ways to change a DC voltage, and a complete 3 A buck is now one 3 mm by 3 mm package plus an inductor and two capacitors. The weaknesses are structural rather than fixable. A boost cannot interrupt a fault, because the inductor and the diode form a conducting path from input to output even with the switch held off, so a shorted output pulls current straight through and something upstream has to break the circuit. Extreme conversion ratios also fall apart: 48 V down to 1 V needs about 2% duty, which at 2 MHz is a 10 ns on-time, and by then switching transitions, driver delay and current-sense blanking have consumed the pulse. The boost additionally has a right-half-plane zero that caps control bandwidth at a fraction of the switching frequency, so its response to a load step is slow no matter how good the controller is.

## When to use
If input and output share a ground and the ratio is under roughly 8:1, a buck going down or a boost going up is the right answer and nearly always the cheapest one. If the ratio is above about 10:1, split it into two stages, use a multiphase buck, or put a switched-capacitor divider in front, because a single stage running at 2% duty gives back most of what you were trying to save. If you need galvanic isolation, a very large step-down ratio, or several outputs from one magnetic, use a flyback at low power or an LLC at high power instead. Below about 3 V output always use synchronous rectification, and below about 1.5 V use several interleaved phases so each one carries a current its inductor can handle. If the input can sit above or below the output, which is what a battery does across its discharge curve, use a four-switch buck-boost rather than cascading two separate converters.

## Key numbers
Buck output is D times the input, boost output is the input divided by (1 - D) · switching 100 kHz–2 MHz at low power and 10–100 kHz at kilowatt scale · efficiency typically 90–98% · 48 V to 1 V is about 2% duty, roughly a 10 ns on-time at 2 MHz · a Schottky's 0.4 V drop is a third of a 1.2 V rail · practical single-stage ratio limit around 8:1 to 10:1

## Examples
Point-of-load buck regulators in every laptop and phone, from Texas Instruments, onsemi, Monolithic Power Systems, Renesas and Infineon; multiphase buck voltage regulator modules under CPUs and GPUs; boost stages in LED backlight drivers and in battery-powered devices needing a rail above cell voltage; four-switch buck-boost controllers in USB-C power banks and automotive 12 V accessory rails.

## Economic profile
This is one of the most commoditized categories in semiconductors. A monolithic buck regulator runs from roughly $0.10 for a few hundred milliamps to a few dollars for tens of amps, dozens of pin-compatible alternates exist, and the topology has been public since the 1960s, so nobody is paid for the circuit itself. Vendors make money by integrating: first the FETs into the controller, then the inductor into a module, with each step selling board area and a layout problem the customer no longer has to solve. Modules typically cost 2–3x the equivalent discrete solution and win anyway wherever engineering time is scarcer than bill of materials. The passives matter more than people expect, because the inductor often costs as much as the regulator, which is why raising switching frequency is really an argument about the inductor, and why a 3–5x price premium for a gallium nitride switch at low power can still come out ahead. Volume buyers care about a cent per rail; low-volume buyers care that the module works the first time, and those two groups are served by different products at very different margins.

## Videos

- https://www.youtube.com/watch?v=PgTR7226sHU — How Buck, Boost & Buck-Boost DC-DC Converters Work (ElectrArc240, 17 minutes, 100k+ views)
- https://www.youtube.com/watch?v=vwJYIorz_Aw — Boost Converters and Buck Converters: Power Electronics (Physics Videos by Eugene Khutoryansky, 14 minutes, 1m+ views)

## Further reading

[Course Material on Switched Mode Power Conversion (Indian Institute of Science)](https://ee.iisc.ac.in/wp-content/uploads/2023/01/SMPC_VRamnarayanan.pdf) · [Power Electronics 6.622 (MIT OpenCourseWare)](https://ocw.mit.edu/courses/6-622-power-electronics-spring-2023/)
