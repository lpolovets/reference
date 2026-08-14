---
number: 22
name: PWM and Modulation
part: 4
group: Control & protection
power: [w, mw]
voltage: [lv, mv]
semiconductor: [si, sic, gan]
uses: [ind, ev, grid, it]
maturity: comm
related: [grid-and-transmission#vsc-hvdc]
---

## Description
Modulation is the rule that decides, in every switching period, how long each switch stays on so the average output matches a commanded voltage. The simplest version compares a sine reference against a triangular carrier at 2–16 kHz in a silicon drive: where the sine is higher, the top switch is on. Carrier PWM of that kind reaches a peak phase voltage of half the DC link before it clips. Space-vector modulation instead treats the three legs as one rotating vector synthesized from six active switching states and two zero states, and it can split the zero states freely, which raises the linear limit to about 1.15 times what carrier PWM reaches, so the same DC bus delivers roughly 15% more AC voltage. Discontinuous PWM goes further and clamps each leg to a rail for 120 degrees of every cycle, so a third of the switching transitions never happen. Every scheme also has to insert dead time, a gap of a few hundred nanoseconds to a few microseconds in which both switches in a leg are off, because a leg that conducts top and bottom at once is a short circuit across the DC link.

## Strengths and weaknesses
The 15% from space-vector modulation is close to free, since it is arithmetic in the control loop rather than hardware, and 15% more motor voltage from the same bus means a smaller boost stage or fewer cells in series. Discontinuous PWM removes about a third of the switching loss at the same carrier frequency, which is usually the cheapest efficiency gain available in an inverter, but the clamped leg stops correcting current for a third of the cycle, so ripple current and audible noise both rise. Dead time is the cost nobody escapes: the voltage it removes is the DC-link voltage times the dead time times the switching frequency, so a 600 V bus with 2 microseconds of dead time at 10 kHz loses 12 V of output. At full speed, where the command is around 340 V, that is roughly 3% and nobody notices. At 5% of base speed the command is only about 17 V, so the same 12 V error is most of it, and it shows up as fifth and seventh harmonic current, torque ripple at six times the fundamental, and current loops that will not hold a low speed.

## When to use
Use space-vector modulation as the default on any three-phase inverter, since the extra arithmetic costs a few microseconds of processor time and buys 15% of bus voltage. Switch to discontinuous PWM when switching loss dominates, which usually means silicon IGBTs above roughly 8 kHz or any inverter running near its thermal limit; if the added ripple is a problem, raise the carrier by half and you are back to the same switching loss as continuous modulation. Stay on plain sine-triangle carrier PWM for single-phase converters and anywhere a third-harmonic component on the output is not acceptable, because that is where the 15% comes from. Set dead time from the measured turn-off delay of the device you actually bought rather than a round number: 2–3 microseconds suits an IGBT module, 300–500 ns a SiC MOSFET, and 20–50 ns a GaN device. If the drive has to hold torque below about 5% of base speed, budget for dead-time compensation in firmware, because no choice of modulation removes the error.

## Key numbers
Space-vector modulation gives about 15% more AC voltage from the same DC bus than sine-triangle carrier PWM · discontinuous PWM removes about a third of the switching transitions, recovered by raising the carrier by half · carrier frequencies of 2–16 kHz in silicon drives · dead time 2–3 microseconds for IGBT modules, 300–500 ns for SiC, 20–50 ns for GaN · a 600 V bus with 2 microseconds of dead time at 10 kHz loses 12 V of output, the product of the three (derived here) · that error is roughly 3% of a 340 V command at full speed and most of a 17 V command at 5% speed.

## Examples
Space-vector modulation in effectively every three-phase drive shipped since the 1990s, including Siemens Sinamics and ABB ACS industrial drives; discontinuous (bus-clamping) PWM in EV traction inverters at high load, where switching loss sets the thermal limit; dead-time compensation as a standard function in vendor motor-control libraries such as Texas Instruments' InstaSPIN and Microchip's motorBench.

## Economic profile
Modulation is firmware, so the marginal cost per unit is zero once it is written and the value shows up elsewhere in the bill of materials. The 15% bus utilization from space-vector modulation matters most where the DC link is expensive: in a vehicle, 15% more motor voltage from the same pack means either a smaller boost converter or fewer cells in series, and either change is worth far more than the software that produced it. Discontinuous PWM matters most where the switch is expensive, because removing a third of the switching loss can let a designer drop one IGBT module size or delete a heat sink, and module price scales roughly with die area. The engineering is not free. A production-grade modulator with dead-time compensation, overmodulation handling and a clean transition to six-step operation is months of work by people who are scarce, and it is one of the few parts of a converter a contract manufacturer cannot supply. That is why vendor libraries exist and why most small drive makers use them: paying for a semiconductor supplier's tool chain is cheaper than hiring the control engineer, at the price of designing around that supplier's microcontroller.

## Videos

- https://www.youtube.com/watch?v=Gj7qAlsq_m8 — Understanding Space Vector Modulation| Brushless Motor Control with Simulink, Part 5 (MATLAB, 16 minutes, 100k+ views)
- https://www.youtube.com/watch?v=nw4GaDFBDko — The Impact of Deadtime on Motor Control Designs (EPC Corporation, 20 minutes, 5k+ views)

## Further reading

[Space Vector Modulation (SVM) (imperix)](https://imperix.com/doc/implementation/space-vector-modulation) · [A Brief Review of Space Vector Modulation (SVM) Methods and a New SVM Technique Based on the Minimum and Maximum of the Three-Phase Voltages (Iranian Journal of Electrical and Electronic Engineering)](https://ijeee.iust.ac.ir/article-1-2358-en.html)
