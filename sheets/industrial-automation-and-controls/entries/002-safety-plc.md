---
number: 2
name: "Safety PLC"
part: 1
group: "Programmable controllers"
layer: control
industries: [disc, proc, hybrid, log]
determinism: ms10
lockin: single
maturity: std
---

## Description
A safety PLC runs safety functions with enough internal redundancy and self-checking that a fault inside the controller is detected and drives the machine to a safe state rather than being ignored. Internally that usually means two processors executing the same logic and comparing results, memory and I/O tested continuously, and a watchdog that trips if either channel stops agreeing. The device and its programming environment are certified to the functional safety standards, which is what allows an assessor to accept the safety function without evaluating the controller's design from first principles.

## Strengths and weaknesses
The strength is that complex safety logic becomes programmable rather than being wired from discrete relays. A cell with many zones, muting sequences, and partial shutdowns is impractical in hardwired relays and straightforward in a safety controller, and the diagnostics tell maintenance which device tripped rather than leaving them to trace a string of contacts. The weaknesses are cost and rigor: the hardware costs several times a standard controller, the certified programming environment restricts what may be written, and every change to safety logic requires validation and documentation rather than an edit.

## When to use
Use one where the risk assessment calls for a safety function of any complexity, or where several safety zones interact. Use hardwired safety relays instead where there are one or two simple functions, since a relay is cheaper and needs no software validation. Integrate safety into the standard controller only where the vendor's integrated architecture is certified for it, which most now are, and confirm that the integration does not let a standard-side change alter safety behavior. Budget for the validation, not only for the device.

## Key numbers
Dual-processor architecture with continuous cross-checking as the usual internal design · certification to IEC 61508 and the machinery standards derived from it, which is what an assessor relies on · hardware cost several times a standard controller of equivalent size · every logic change requiring revalidation and documentation rather than a simple download · diagnostic coverage high enough that most internal faults are detected within one or two scans.

## Examples
Every major controller vendor ships a safety-rated line alongside its standard one, usually sharing the same rack and programming environment. Third-party assessors such as TÜV certify both the devices and, in many jurisdictions, the resulting installation.

## Economic profile
The device premium is real but small next to the engineering: the risk assessment, the safety function specification, the validation, and the documentation typically cost more than the hardware. That work is not optional, since machine safety carries legal obligations and an incident with inadequate documentation is a very expensive event. Where a safety controller repays itself is in change: a plant that reconfigures cells often finds that reprogramming a safety controller and revalidating costs less than rewiring a relay panel, and the diagnostics reduce downtime because the cause of a trip is displayed rather than hunted for.

## Further reading
[Machine guarding overview (US Occupational Safety and Health Administration)](https://www.osha.gov/machine-guarding) · [ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards)
