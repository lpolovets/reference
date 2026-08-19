---
number: 32
name: "System integrators and controls labor"
part: 7
group: "Delivery"
layer: ent
industries: [disc, proc, hybrid, log, bldg]
determinism: nrt
lockin: multi
maturity: std
---

## Description
Most controls work is not done by the equipment vendor or by the plant. It is done by system integrators: engineering firms that specify the architecture, build the panels, write the application code, and commission the result. They are the channel through which most automation hardware reaches its final use, and they are usually certified by one or more vendors, which is how a vendor's platform choice propagates into plants that never spoke to the vendor directly. The engineering hours they supply routinely exceed the hardware cost of the project.

## Strengths and weaknesses
The strength is access to expertise a plant cannot justify employing full time, particularly for a project that happens once every few years. A good integrator has built the same kind of system many times and brings patterns rather than inventing them. The weaknesses are dependence and documentation. If the integrator holds the only copy of the source code, the only person who understands the design leaves, or the documentation is thin, the plant has bought a system it cannot maintain, and that situation is common enough to be the default rather than the exception.

## When to use
Use an integrator for project work, which is nearly always, and keep enough internal capability to specify the work and to maintain the result. Contract explicitly for source code, documentation, and the right to modify, since none of those are automatic and all are expensive to obtain afterwards. Prefer an integrator familiar with the plant's standard platform over one proposing a different one, because the maintenance burden of a second platform outlives the project that introduced it. Require a documented handover with the plant's own staff present rather than a report.

## Key numbers
Engineering hours typically exceeding hardware cost on a controls project, often substantially · integrators certified by vendors, which is how platform standardization propagates through the market · source code and documentation ownership decided by contract rather than by default · controls engineer availability a widespread constraint, so integrator capacity rather than price often sets project timing · a fragmented supplier base of many small regional firms rather than a few large ones.

## Examples
The integrator market is highly fragmented, with most firms serving a region and a few industries. Vendor certification programs are the main quality signal available to a buyer, and industry associations maintain directories that serve a similar purpose.

## Economic profile
This is a labor business with the economics of professional services: revenue scales with engineers, margins depend on reusing designs across projects, and the constraint on growth is hiring rather than demand. That fragmentation is also the market's most persistent inefficiency, since every plant pays to solve problems other plants have already solved. The companies attacking that through standardized, reusable application software are pursuing the largest available prize in industrial automation, and the reason it remains available is that plants and processes differ enough to defeat most attempts at standardization.

## Further reading
[ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards) · [PLCopen: standards for industrial control programming (PLCopen)](https://www.plcopen.org/)
