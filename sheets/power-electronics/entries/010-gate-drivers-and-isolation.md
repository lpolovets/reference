---
number: 10
name: Gate Drivers and Isolation
part: 2
group: Packaging & passives
power: [w, mw]
voltage: [lv, mv]
semiconductor: [si, sic, gan]
uses: [ev, ind, grid, it]
maturity: comm
---

## Description
A gate driver turns a logic-level PWM signal into the charge a power transistor's gate needs, at the right voltage and referenced to that transistor's own source terminal, which in a half bridge swings the whole DC bus every switching cycle. The high-side driver therefore has to float, and the control signal has to cross an insulation barrier to reach it. Three barrier technologies are in use: an optocoupler, a transformer built into the package, and a pair of on-chip capacitors with a silicon dioxide dielectric. The output stage has to deliver amps for tens of nanoseconds, since a 1,200 V IGBT module takes several microcoulombs of gate charge per switching event, so 5–10 A peak drive is normal at module scale. Voltage levels are device-specific: plus or minus 15 V for an IGBT, roughly +18 to +20 V with a negative off-bias of 2–5 V for a SiC MOSFET, whose transconductance is lower and which turns on parasitically without that negative rail, and 5–6 V for an enhancement-mode GaN transistor against an absolute maximum near 7 V.

## Strengths and weaknesses
The isolation ratings are the easy part to specify, because they are standardized: UL 1577 states a one-minute withstand voltage, typically 3.75 or 5 kVrms, and IEC 60747-17 grades a part as basic or reinforced with a maximum repetitive peak voltage and a surge test behind it. What catches designers out is common-mode transient immunity. During switching the driver's output ground moves with the switch node, and the displacement current through the barrier's few picofarads of capacitance flows into the receiver; above the driver's rated slew rate the output either misses a pulse or turns on when it should not. That threshold used to be comfortable, since an IGBT slews at 5–15 V/ns and a pulse-transformer solution holds to about 50 V/ns. A SiC MOSFET can exceed 100 V/ns, so drivers that worked for a decade start producing shoot-through, and current capacitive and magnetic isolators are specified above 150 V/ns for exactly that reason. Optocouplers are the other casualty, since their LEDs age, their propagation delay runs around 80 ns against about 45 ns for a capacitive isolator, and their immunity is the lowest of the three.

## When to use
Match the driver to the device rather than to the topology. For a half bridge under about 200 V with a limited duty cycle, a bootstrap high-side supply and a level-shift driver is the cheap answer and needs no isolation barrier at all. Above that, or anywhere the barrier is a safety requirement, use a reinforced isolated driver with an isolated bias supply, and pick a bias transformer with under about 10 pF of interwinding capacitance so that supply does not undo the isolator's immunity. If you are driving SiC, require immunity above 100 V/ns, split the turn-on and turn-off gate resistors, and check that the short-circuit protection acts inside 1 µs, because SiC withstands a short for 2–3 µs against about 10 µs for an IGBT. For enhancement-mode GaN, use a driver made for it, keep the gate loop tight, and hold the rail accurate, since a general-purpose driver with 2 V of overshoot destroys the part.

## Key numbers
UL 1577 withstand typically 3.75–5 kVrms for one minute, with IEC 60747-17 grading basic against reinforced · IGBT slews at 5–15 V/ns, SiC above 100 V/ns · pulse transformers hold to about 50 V/ns, current isolators above 150 V/ns · propagation delay about 45 ns for a capacitive isolator against roughly 80 ns for an optocoupler · gate drive plus or minus 15 V for IGBT, +18 to +20 V with a 2–5 V negative off-bias for SiC, 5–6 V for GaN against a 7 V maximum · SiC short-circuit withstand 2–3 µs against about 10 µs for an IGBT · 5–10 A peak drive at module scale

## Examples
Infineon's EiceDRIVER families, Texas Instruments' capacitive isolated drivers, Skyworks' and Analog Devices' transformer-coupled isolators, and Broadcom's optocoupled drivers, which still hold most high-voltage industrial sockets; UL 1577 and IEC 60747-17, which replaced VDE V 0884-11, as the certification path; desaturation detection with soft shutdown, the standard short-circuit protection in traction and industrial drives.

## Economic profile
Individually these are cheap parts, and collectively they are not. A reinforced isolated driver runs roughly $1–5, but a three-phase traction inverter needs six of them plus six isolated bias supplies, plus the transformers, the creepage-compliant layout and the safety agency file, so the driver board becomes a meaningful share of everything that is not the power module. The money is moving toward integration: one package holding the isolator, the driver, the bias transformer, the desaturation comparator and the soft shutdown removes a dozen components and part of the certification work, and that is what the vendors are actually selling. Isolation is a real moat, because the barrier is a process capability, the ratings take years to certify, and a customer who has already qualified a driver will not requalify to save fifty cents. Share is shifting rather than the price falling: as SiC pushes the required immunity above 100 V/ns, the optocoupler socket keeps shrinking, and capacitive and magnetic isolators take it. That substitution, not unit growth, is where most of the revenue growth in this market comes from.

## Videos

- https://www.youtube.com/watch?v=cr59OJMROxI — Introduction - What is an isolated gate driver? (Texas Instruments, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=l7reLq-y8-k — Why do we use Isolated MOSFET gate drivers? Difference between Isolated & Non-isolated Gate drivers? (Foolish Engineer, 8 minutes, 10k+ views)

## Further reading

[Isolated gate driving solutions (Infineon)](https://www.infineon.com/assets/row/public/documents/24/42/infineon-gatedriveric-eicedriver-isolated-gate-driving-solutions-applicationnotes-en.pdf) · [A 25 Mbps 15 ns Propagation Delay 150 kV/μs CMTI Configurable Dual-Channel Capacitive Digital Isolation Driver (Micromachines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11278622/)
