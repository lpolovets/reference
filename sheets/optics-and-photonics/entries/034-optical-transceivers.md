---
number: 34
name: Optical Transceivers
part: 7
group: Integrated photonics
band: [nir, swir]
apps: [comms]
form: mod
cost: u10k
maturity: mature
---

## Description
An optical transceiver is a pluggable module that converts electrical signals to light and back. Standard form factors, SFP, QSFP, QSFP-DD, and OSFP, define the mechanics, the electrical interface, and the power envelope so that any compliant module works in any compliant port. Inside is a laser or an array of them, a modulator or directly modulated source, a receiver, and a digital signal processor. Short-reach modules use directly modulated VCSELs over multimode fiber; long-reach coherent modules use external modulators and elaborate digital signal processing.

## Strengths and weaknesses
Pluggability is the product: an operator can change reach or rate by swapping a module rather than a switch, and competition across a standardized interface has driven cost per gigabit down relentlessly. The constraint is now power. An 800G module dissipates 15–25 W, and with dozens per switch the optics can approach the switch ASIC's own consumption, which is exactly the pressure driving co-packaged optics. Reach, rate, and power trade against each other, and the cheapest module that meets the link budget is usually the right one rather than the best-specified.

## When to use
Choose the shortest-reach module that closes the link, since reach costs money and power: multimode for tens of meters inside a rack row, single-mode short reach for a few kilometers, coherent for anything longer. In AI clusters, count the optics power budget per rack early rather than late. Keep pluggables where flexibility and multi-vendor supply matter, which is most deployments, and consider co-packaged optics only where power density has genuinely become the binding constraint.

## Key numbers
Rates from 10G through 400G and 800G, with 1.6T emerging · an 800G module dissipates roughly 15–25 W · form factors SFP, QSFP, QSFP-DD, and OSFP define mechanics and power envelope · multimode reaches tens to hundreds of meters; single-mode kilometers; coherent hundreds to thousands · cost per gigabit has fallen consistently, though power per bit has fallen more slowly.

## Examples
QSFP-DD and OSFP 800G modules in current AI cluster fabrics; coherent pluggables at 400G ZR carrying metro traffic without a separate transport box; the Multi-Source Agreements that define each form factor and keep the market multi-vendor.

## Videos

- https://www.youtube.com/watch?v=M9GmHvt2EI4 — Why do AI Data Centers Need 400G/800G Optical Transceivers? (QSFPTEK, 3 minutes, 1k+ views)
- https://www.youtube.com/watch?v=BckiwIGvlpE — Coherent | 800G OSFP Pluggable Transceiver Demonstration at OFC 2021 (Coherent Corp., 2 minutes, 1k+ views)
- https://www.youtube.com/watch?v=KM1e8WDcVLs — Core Application Scenarios of 800G Optical Modules (QSFPTEK, 5 minutes, under 1k views)

## Further reading

[Fiber-optic Links (RP Photonics Encyclopedia)](https://www.rp-photonics.com/fiber_optic_links.html)
