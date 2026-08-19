---
number: 6
name: "Legacy fieldbus"
part: 2
group: "Fieldbus and Ethernet"
layer: field
industries: [disc, proc, hybrid, bldg]
determinism: ms10
lockin: open
maturity: std
---

## Description
Before industrial Ethernet, control networks ran over serial buses designed for the job: Modbus RTU over twisted pair, PROFIBUS DP for fast device-level traffic, DeviceNet and CANopen over CAN, and Foundation Fieldbus and PROFIBUS PA for process instruments. They differ in detail and share a shape: one or two conductors carrying both data and, in the process variants, power to the device, with a deterministic access scheme rather than the collision handling that ordinary networks use. Enormous quantities of this equipment remain in service, because a fieldbus segment that works has no reason to be replaced.

## Strengths and weaknesses
The strengths are simplicity, cable economy, and longevity. Two wires reaching dozens of devices removed an enormous amount of point-to-point wiring when these buses arrived, and the protocols are simple enough that troubleshooting needs a meter and a protocol analyzer rather than a network engineer. The process variants carry power on the same pair, which is why they persist in instrumentation. The weaknesses are bandwidth, distance, and the diagnostics that the newer protocols provide and these largely do not. Segment length and device count are also tightly bounded, so a growing plant runs out of room.

## When to use
Keep it where it is installed and working, since replacing a functioning fieldbus rarely returns its cost. Use it on new work for process instrumentation where two-wire power and intrinsic safety matter, and where the loop is slow enough that bandwidth is irrelevant. Choose industrial Ethernet for new discrete machine work, because diagnostics, bandwidth, and integration with everything above the controller are all better. When extending an existing segment, check the device and length limits before assuming there is room.

## Key numbers
Serial rates from tens of kilobits to a few megabits per second against 100 Mbit/s and up on industrial Ethernet · segment lengths and device counts bounded per protocol, commonly tens of devices per segment · two-wire operation carrying both power and data on the process variants · Modbus dating from the late 1970s and still specified on new equipment for its simplicity · installed base large enough that gateway products for these protocols remain a durable business.

## Examples
Modbus RTU remains the most widely implemented industrial protocol of any kind, largely because it is trivial to implement and unencumbered. PROFIBUS DP and PA dominate European process plants, and DeviceNet and CANopen persist in machine building and mobile equipment respectively.

## Economic profile
The economics here are about not spending. An installed fieldbus segment represents wiring, commissioning, and validation that has already been paid for, and its replacement delivers diagnostics rather than production, which makes the business case difficult on its own. That is why gateways are such a durable product category: converting a legacy segment to something a modern system can read costs a fraction of replacing it. For a vendor, the installed base is an annuity with a long tail, and for a plant it is a liability that grows slowly as spares get harder to find.

## Further reading
[PROFINET and PROFIBUS technology (PI)](https://www.profibus.com/technologies/profinet) · [ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards)
