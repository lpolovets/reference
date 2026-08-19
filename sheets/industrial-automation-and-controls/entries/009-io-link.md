---
number: 9
name: "IO-Link"
part: 2
group: "Wireless and interoperability"
layer: field
industries: [disc, log, hybrid]
determinism: ms100
lockin: open
maturity: grow
---

## Description
IO-Link is a point-to-point digital protocol running over the same three-wire cable that a conventional discrete sensor already uses. Instead of a single on-or-off signal, the master and the device exchange process data, parameters, and diagnostics. That changes what a sensor is: it can be configured from the controller rather than by hand, it reports its own condition, and it can be swapped for an identical part that receives its settings automatically on connection. Because it reuses the existing cable and connector, adding it does not require rewiring a machine.

## Strengths and weaknesses
The strengths are configuration and diagnostics at the lowest layer of the plant, where there was previously no visibility at all. Automatic parameter download on replacement removes a common source of restart errors, since a sensor swapped by a technician at night comes up configured correctly rather than at defaults. The weakness is that it is point to point, so each device needs a port on a master, and the masters are where the cost sits. It is also not fast, being aimed at sensor data rather than at control loops, and its value depends entirely on something upstream making use of the diagnostics.

## When to use
Use it where sensors need configuring for different product formats, where sensor failure causes meaningful downtime, or where the plant has a maintenance system able to consume device diagnostics. It is particularly strong on machines with frequent changeovers, since sensor settings become part of the recipe. Skip it for simple fixed installations where a sensor is set once and never touched, because there the added master cost buys diagnostics nobody will read.

## Key numbers
Runs over the standard three-wire sensor cable, so no rewiring is needed to adopt it · point to point, so device count is bounded by master ports rather than by a shared bus · automatic parameter download on device replacement, removing manual reconfiguration · data rates aimed at sensor and parameter traffic rather than at control loops · vendor-independent standard, so devices and masters interoperate across suppliers.

## Examples
Photoelectric and inductive sensors, pressure and flow transmitters, RFID readers, and signal towers are the common IO-Link devices. Masters are offered by every major I/O vendor and connect upward over whichever industrial Ethernet protocol the plant uses.

## Economic profile
The device premium over a plain sensor is modest and the master is the real cost, so the economics turn on how many devices share a master and on whether anything uses the diagnostics. Where a plant has a maintenance system that acts on device health, the return comes from downtime avoided, which is far larger than the hardware difference on any line where stoppages are expensive. Where no such system exists, IO-Link is a cost with a benefit that never arrives, and that gap between capability and use is the main reason adoption has been slower than the technology's merits suggest.

## Further reading
[PROFINET and PROFIBUS technology (PI)](https://www.profibus.com/technologies/profinet) · [ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards)
