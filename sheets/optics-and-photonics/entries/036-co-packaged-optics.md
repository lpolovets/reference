---
number: 36
name: Co-Packaged Optics
part: 7
group: Integrated photonics
band: [nir, swir]
apps: [comms]
form: chip
cost: u10k
maturity: early
---

## Description
In a conventional switch, the optics sit in pluggable modules at the faceplate and electrical signals travel across the board to get there. At 800G and above, driving those centimeters of copper costs real power and real signal integrity effort. Co-packaged optics moves the optical engines onto the same substrate as the switch ASIC, so the electrical path shrinks to millimeters. Light arrives and leaves through fiber connected at the package, often supplied by an external laser source so the heat-sensitive laser is not sitting next to a hot ASIC.

## Strengths and weaknesses
Shortening the electrical link cuts interface power by roughly 30–50%, which at rack scale is a meaningful fraction of the switch's budget, and it removes the signal-integrity work that limits how fast pluggable interfaces can go. Density improves because the faceplate is no longer the constraint. The costs are serviceability and supply chain. A failed optical engine can no longer be swapped in seconds; it is part of the package, so the whole assembly is the field-replaceable unit. Yield of a package containing an ASIC and several optical engines is the commercial question, and the ecosystem is young.

## When to use
Watch it and pilot it if you operate at a scale where optics power per rack is a design constraint, which today means the largest AI fabrics. Everyone else should stay with pluggables, where multi-vendor supply, field replacement, and mature test infrastructure are worth more than the power saving. When evaluating, ask specifically about the failure and repair model and about laser sourcing, because those decide operating cost more than the efficiency number does.

## Key numbers
Cuts electrical interface power by roughly 30–50% against front-panel pluggables · electrical path shrinks from centimeters to millimeters · an 800G pluggable dissipates 15–25 W, and a switch carries dozens · the field-replaceable unit becomes the package rather than the module · deployments today are early and concentrated in the largest AI fabrics.

## Examples
Broadcom's Bailly co-packaged Tomahawk switch; NVIDIA's co-packaged silicon photonics switches announced for AI fabrics; Intel and Ayar Labs optical chiplet work; the Open Compute Project's co-packaged optics workstream defining interfaces.

## Videos

- https://www.youtube.com/watch?v=lC0i7_ilpf8 — Co Packaged Optics In The Data Center (Semiconductor Engineering, 13 minutes, 5k+ views)
- https://www.youtube.com/watch?v=3dd9vPhUR_w — The Rise of Co-Packaged Optics in AI Data Centers (IDTechEx, 7 minutes, under 1k views)
- https://www.youtube.com/watch?v=_ra1Gyiz-DA — Co-Packaged Optics (CPO): The Technical Breakthrough Powering the Future of AI (Broadcom Inc., 2 minutes, 1k+ views)

## Further reading

[Photonic Integrated Circuits (RP Photonics Encyclopedia)](https://www.rp-photonics.com/photonic_integrated_circuits.html)
