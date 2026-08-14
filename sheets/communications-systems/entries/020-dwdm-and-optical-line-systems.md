---
number: 20
name: DWDM and Optical Line Systems
part: 4
group: Fiber networks
reach: [metro, global]
capacity: [tbps]
medium: fiber
latency: sub
maturity: dep
---

## Description
Dense wavelength-division multiplexing runs many transponders down one fiber pair at once, each on its own frequency from the ITU-T G.694.1 grid, and the line system is everything between them: multiplexers, amplifiers, and the switching that routes individual wavelengths. The grid is either fixed at 50 or 100 GHz or flexible in 12.5 GHz increments, which is what lets 400G on a 75 GHz slot sit next to 800G on 150 GHz. The C-band from 1530 to 1565 nm gives about 4.4 THz of usable spectrum, or roughly 6 THz on the extended plan most new systems use, and the L-band above it adds a similar amount, so a C+L line delivers roughly 10 THz in one pair. Across the C-band alone that is 96 channels at 50 GHz spacing, 64 at 75 GHz or 32 at 150 GHz, so a filled C-band carrying 400G on every 75 GHz slot comes to about 25 Tbps per fiber pair and a C+L line to roughly 50 (derived here). Erbium-doped fiber amplifiers every 80 to 100 km boost every channel at once rather than one at a time, which is the whole reason the economics work, and Raman pumping is added where a span is too long for that. At branch sites a reconfigurable optical add-drop multiplexer built from wavelength-selective switches drops some wavelengths to local transponders and passes the rest through, with 8 to 20 degrees at a large node.

## Strengths and weaknesses
Lighting another wavelength on an installed fiber costs a transponder and no construction, which makes it the cheapest capacity in telecommunications by a wide margin, and one amplifier serving 96 channels is why cost per channel falls as the line fills. The weaknesses come from the line being a shared analog medium that every channel rides at once. Total launch power is capped by fiber nonlinearity, so adding channels means lowering the power in each one, and a wavelength added without re-checking the power and dispersion budget can degrade every other channel on the fiber. Amplifier gain shifts when channels are added or removed, so the control system has to hold per-channel power through transients. Cascaded ROADMs narrow the passband a little each time, which limits how many nodes a wavelength can cross before the signal will not close. And the L-band needs its own parallel amplifier chain, so turning it on means new hardware in every hut along the route rather than a software change.

## When to use
Use DWDM on any route where fiber is scarce or the civil work dominates, which is nearly every metro and long-haul route. If you own plenty of dark fiber over a short campus span, compare it against simply lighting parallel fibers, because at that distance pulling more glass is cheap and parallelism skips the wavelength planning. Use a fixed 50 GHz grid if every channel is the same rate, and flexible grid once you are mixing 400G, 800G and 1.6T, which occupy different widths. Fill the C-band before you add the L-band, since C+L roughly doubles spectrum and roughly doubles the line-system cost at every amplifier site. Choose an open line system, with third-party transponders riding it through a G.698.2-style single-channel interface, only if you have optical engineers who can own the power and OSNR budget; if you do not, a vendor-integrated system is cheaper once the integration labor is counted.

## Key numbers
Fixed grid 50 or 100 GHz, flexible grid in 12.5 GHz increments · C-band about 4.4 THz, roughly 6 THz extended, and about 10 THz across C+L · 96 channels at 50 GHz, 64 at 75 GHz, 32 at 150 GHz · roughly 25 Tbps per fiber pair with the C-band filled at 400G per 75 GHz slot, and 50 Tbps across C+L (derived here) · amplifier spacing 80–100 km · large ROADM nodes of 8–20 degrees.

## Examples
ITU-T G.694.1 for the frequency grid and G.698.2 for the single-channel interfaces that let a third-party wavelength ride another operator's line; wavelength-selective switches from Lumentum and Coherent inside nearly every ROADM shipped; the Telecom Infra Project's Open Optical and Packet Transport group and its GNPy route-planning library, which exists so an operator can compute its own optical budget instead of asking the system vendor; C+L line systems on transatlantic and long-haul terrestrial routes.

## Economic profile
The line system is the fixed cost of a lit route and the transponders are the variable cost, which is the split that decides how an operator spends. Amplifiers, ROADMs and the huts they live in are bought once for the whole route, and after that capacity arrives one module at a time with no civil work, so cost per lit wavelength falls steeply as fill rises and an operator running 8 of 96 channels is carrying nearly all of the fixed cost while collecting little of the benefit. The recurring cost is the sites: an amplifier hut every 80 to 100 km needs power, space, access and a lease, and that bill does not change with traffic. Adding the L-band is the one upgrade that behaves like a rebuild, because it needs a parallel amplifier chain at every one of those huts, so the rule of thumb is to fill C-band first and treat C+L as a decision about avoiding a new fiber build rather than about spectrum. Open line systems changed who captures the margin: the system vendor used to sell the line and the transponders together, and separating them moved the transponder purchase to a competitive module market while moving the optical engineering onto the operator's own staff. That trade is worth it at hyperscaler scale and usually is not at a regional carrier's.

## Videos

- https://www.youtube.com/watch?v=wogYUwDkHm8 — EDFA Amplifier principle in DWDM |Optical fiber| RAMAN Amplifier ROADM | OTN #roadm #otn #dwdm (OpticsTrans, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=-Ve9rYANudo — ROADM DWDM WSS in optical network, Directional v/s Direction-less #telecom #optical #physics (OpticsTrans, 19 minutes, 50k+ views)

## Further reading

[Optical Fiber Communications (RP Photonics Encyclopedia)](https://www.rp-photonics.com/optical_fiber_communications.html) · [G.698.2: Amplified multichannel dense wavelength division multiplexing applications with single channel optical interfaces (ITU-T)](https://www.itu.int/rec/T-REC-G.698.2/en)
