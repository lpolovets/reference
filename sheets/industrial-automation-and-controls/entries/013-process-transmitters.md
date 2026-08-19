---
number: 13
name: "Process transmitters"
part: 3
group: "I/O and sensing"
layer: field
industries: [proc, hybrid, bldg]
determinism: slow
lockin: open
maturity: std
---

## Description
A process transmitter measures pressure, temperature, flow, or level and sends the value to the control system. The dominant interface remains a 4–20 mA current loop, chosen decades ago because current is immune to voltage drop over long cable runs and because a reading of zero milliamps is distinguishable from a valid low reading, so a broken wire announces itself. Most transmitters now superimpose a digital signal on that same loop, which carries configuration and diagnostics alongside the analog value without disturbing it.

## Strengths and weaknesses
The strengths are robustness and interchangeability. A current loop works over long distances in electrically noisy environments, any vendor's transmitter connects to any vendor's input, and the failure mode is detectable by design. Superimposed digital communication adds configuration and self-diagnosis without giving that up. The weaknesses are that one loop carries one measurement, so the wiring count stays high, and that the digital layer is frequently installed and never used, leaving diagnostics available but unread. Calibration drift is the recurring reality, and it is what most of the maintenance effort goes into.

## When to use
Use 4–20 mA for any process measurement where robustness matters and the loop is slow, which is nearly all of them. Use the digital layer for configuration and diagnostics from the start rather than as a later project, since the marginal cost at commissioning is small and retrofitting the practice is not. Consider a fieldbus or wireless variant where the device count is high enough that wiring dominates. Plan calibration intervals from the measurement's importance rather than from a uniform schedule.

## Key numbers
4–20 mA chosen so that a broken wire reads as zero and is distinguishable from a valid measurement · immunity to voltage drop over long runs, which is why it survived the transition to digital everything else · one measurement per loop, so wiring count scales with instrument count · digital communication superimposed on the same pair, carrying configuration and diagnostics · calibration drift the dominant maintenance activity on an instrument fleet.

## Examples
Pressure, temperature, flow, and level transmitters from the major process instrumentation vendors all follow this pattern, and the digital layer superimposed on the loop is supported almost universally. Foundation Fieldbus and PROFIBUS PA are the fully digital alternatives used where device density justifies them.

## Economic profile
Instruments are a modest cost and their installation is not: in a process plant the fully installed cost of a measurement point, including cable, junction boxes, marshalling, and commissioning, is typically a multiple of the transmitter price. That ratio is what drives interest in wireless and in bus-connected instruments, and it is also why replacing a working instrument is rarely justified on features alone. Over the plant's life, calibration labor is the recurring cost, and diagnostics that identify which instruments actually need calibrating are where the modern digital layer pays for itself.

## Further reading
[ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards) · [PROFINET and PROFIBUS technology (PI)](https://www.profibus.com/technologies/profinet)
