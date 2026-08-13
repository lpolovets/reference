---
number: 24
name: Substation Automation
part: 5
group: Protection & control
voltage: [mv, uhv]
roles: [vis, prot]
lead: yr
siting: fence
maturity: est
---

## Description
A conventional substation wires every current transformer, voltage transformer, and breaker back to a relay house through copper, one circuit per signal. A digital substation replaces most of that with Ethernet. IEC 61850 defines both a data model, so a breaker means the same thing to equipment from different vendors, and the protocols that carry it: GOOSE messages for fast trip and interlock signals, sampled values for digitized current and voltage. Merging units at the switchyard do the analog-to-digital conversion, and everything after that is a network.

## Strengths and weaknesses
Copper reduction is the visible win: a large substation can drop tens of kilometers of control cable, which cuts material, trenching, and commissioning time. Because devices describe themselves, configuration is generated from a standard file rather than from drawings, and testing can be automated. The costs are skills and lifecycle. Protection engineers now need network engineering, timing has to be distributed accurately enough for sampled values, and a cyber path exists where copper had none. Interoperability is better than it was, but "IEC 61850 compliant" still hides differences that show up during integration.

## When to use
Choose a digital architecture for greenfield substations, especially large ones, offshore platforms, and anywhere cable routing is expensive. Retrofit selectively: replacing relays with 61850-capable units while keeping copper to the yard captures much of the configuration benefit at a fraction of the disruption. Keep conventional wiring where the substation is small, the crew is not trained for it, or the site will be rebuilt within a decade. Whatever the choice, insist on a multi-vendor interoperability test before commitment, since that is where schedule risk lives.

## Key numbers
GOOSE messages delivered in under 4 ms for protection-class signals · sampled values commonly at 80 or 256 samples per cycle · tens of kilometers of control cable avoided in a large substation · timing accuracy of about one microsecond needed for sampled values · commissioning time typically cut by weeks through automated configuration.

## Examples
Offshore wind platform substations, where weight and cable savings decide the design; national digital substation programs in China and India; utility retrofits that adopt station-bus GOOSE messaging while leaving process-bus sampled values for later.

## Videos

- https://www.youtube.com/watch?v=e0dSKG560Xc — 10 Min to boost your knowledge on IEC61850 (N2A Consultancy, 11 minutes, 100k+ views)
- https://www.youtube.com/watch?v=rFNbI6RkNFI — Communication Protocol IEC 61850 | Tutorial Part 1 (Typhoon HIL, 6 minutes, 50k+ views)
- https://www.youtube.com/watch?v=_btpMwO2ZvE — Industrial communication protocols explained | Eaton PSEC (Eaton, 12 minutes, 100k+ views)

## Further reading

[Technical brochures (CIGRE)](https://www.cigre.org/GB/publications/technical-brochures)
