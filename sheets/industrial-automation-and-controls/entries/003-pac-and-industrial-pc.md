---
number: 3
name: "PAC and industrial PC"
part: 1
group: "Programmable controllers"
layer: control
industries: [disc, hybrid, log]
determinism: ms10
lockin: multi
maturity: std
---

## Description
An industrial PC runs control software on ordinary processor hardware in a rugged enclosure, usually under a real-time operating system or a real-time extension that guarantees the control task runs on schedule regardless of what else is happening. A programmable automation controller sits between this and a classic PLC, offering the scan model and the certification of a PLC with the memory, data handling, and connectivity of a computer. The distinction between the categories has blurred to the point where it matters less than it did, and what remains is a spectrum from a sealed appliance to a general-purpose computer that happens to do control.

## Strengths and weaknesses
The strength is computation and integration. Vision processing, database access, model-based control, and a modern software toolchain are all available on the same machine that runs the control loop, which removes the awkward boundary between the controller and the computer next to it. The weaknesses are lifecycle and maintenance culture. Computer hardware is superseded in a few years against a PLC's decades, operating systems need patching, and plant electricians are less comfortable diagnosing a general-purpose machine than a ladder program. Windows-based systems in particular carry a patching obligation that plant operations often will not meet.

## When to use
Use one when the application genuinely needs computation the PLC cannot provide: vision, complex algorithms, large data handling, or a user interface beyond a simple panel. Use it where the engineering team is a software team rather than a controls team, since the tooling is far more familiar. Stay with a PLC for straightforward sequencing that will run unchanged for twenty years, and where the maintenance staff are electricians. Where both apply, the common pattern is a PLC for the deterministic control and an industrial PC alongside it for everything else.

## Key numbers
Real-time operating systems or real-time extensions used to guarantee the control task's deadline against general-purpose activity · hardware lifecycle of a few years against 15–25 for a PLC, so the replacement plan differs fundamentally · operating system patching required, which is an obligation plant operations must plan for · connectivity and storage far beyond a PLC, which is much of the reason to choose one · determinism achievable to the same range as a PLC when configured correctly, and worse when not.

## Examples
Beckhoff's TwinCAT running control on a PC is the best-known architecture of this kind, and every major vendor now offers a comparable option. National Instruments occupies an adjacent position where measurement and control are combined in the same platform.

## Economic profile
The hardware is cheaper per unit of computation than dedicated control hardware, and the total cost of ownership frequently is not, because the lifecycle is shorter and the maintenance obligations are higher. Where it wins economically is in consolidation: replacing a PLC, a vision controller, a database gateway, and an operator terminal with one machine removes integration work that would otherwise be paid for in engineering hours. Where it loses is in plants without software maintenance capability, since an unpatched industrial PC eventually becomes either a security problem or a machine nobody dares to touch.

## Further reading
[Data acquisition systems and software (National Instruments)](https://www.ni.com/en/shop/data-acquisition.html) · [Guide to Operational Technology (OT) Security (NIST)](https://www.nist.gov/publications/guide-operational-technology-ot-security)
