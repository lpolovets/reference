---
number: 18
name: Optical Fiber Types and Cable
part: 4
group: Fiber networks
reach: [metro, global]
capacity: [gbps, tbps]
medium: fiber
latency: sub
maturity: dep
---

## Description
Almost all transmission fiber is single-mode: a doped silica core 8 to 9 microns across inside a 125 micron cladding, sized so that only one spatial mode propagates at 1310 and 1550 nm. Loss at 1550 nm is 0.18 to 0.20 dB/km in ordinary production fiber, and that number is what sets amplifier spacing at 80 to 100 km. Three ITU-T grades cover nearly everything in the ground. G.652 is the default, with about 17 ps/nm per km of chromatic dispersion at 1550 nm and roughly 80 square microns of effective area. G.654 pushes the cable cutoff wavelength up so the core can be pure silica with 110 to 150 square microns of effective area, which cuts loss to 0.15 to 0.17 dB/km and raises the launch power the fiber tolerates before nonlinearity distorts the signal. G.657 gives up a little effective area for bend tolerance, holding loss under control at a 7.5 mm bend radius in the A2 grade and 5 mm in B3. Multimode fiber with a 50 micron core survives inside buildings and data centers because a wide core lets a cheap VCSEL couple into it, but modal dispersion stops it after a few hundred meters. Around the glass sits the cable, which is where the variety is: loose-tube and ribbon designs from 12 to 864 fibers, rollable-ribbon micro-cables reaching 3,456, and steel armor wherever a backhoe or a rodent can get to it.

## Strengths and weaknesses
The strength that matters commercially is that the glass does not go obsolete. A G.652 fiber installed in 1995 carries today's 800G wavelengths, because every capacity upgrade since then happened in the terminal equipment rather than in the cable, and the cable is the expensive half to replace. Loss of 0.2 dB/km, immunity to electromagnetic interference, and a 25-year-plus service life follow from the material. The weaknesses are mechanical and dispersive. Standard fiber loses real power at a tight bend, which is why fiber to the home moved to G.657 for drops and risers. Splicing G.652 to G.654 joins fibers whose mode field diameters differ by roughly 2 microns, and each such splice costs about 0.1 to 0.3 dB, so operators do not mix grades along a route. Contaminated connector end faces remain the leading cause of link faults in installed plant. And the latency floor of about 5 microseconds per kilometer comes from the refractive index of silica, which is what puts one-way delay from New York to London at roughly 28 ms over a 6,000 km cable route; no cable design improves it.

## When to use
Default to G.652.D for everything: metro rings, backbone, feeder, and the trunk side of an access network. If the route runs past roughly 1,000 km with long amplifier spans and you intend to run 400G or 800G wavelengths, specify G.654.E instead, because 0.03 to 0.05 dB/km of lower loss plus the larger effective area is worth 1 to 2 dB of system margin over that distance; below that, the premium buys nothing you can use. Use G.657.A2 for drop cable, in-building riser, and anything an installer will coil inside a wall box, which is now standard practice in fiber to the home. Use multimode only for links under a few hundred meters inside one building, where the cheaper transceiver is the whole argument. Consider hollow-core only where latency is worth money on its own, meaning exchange-to-exchange trading links and a few hyperscaler routes, and budget it by the meter rather than by the kilometer.

## Key numbers
Single-mode core 8–9 microns in a 125 micron cladding · G.652 loss 0.18–0.20 dB/km at 1550 nm, about 17 ps/nm/km dispersion, roughly 80 square micron effective area · G.654 loss 0.15–0.17 dB/km with 110–150 square micron effective area · G.657 bend radius down to 7.5 mm (A2) and 5 mm (B3) · G.652-to-G.654 splice loss about 0.1–0.3 dB from the mode field mismatch · standard cables 12–864 fibers, rollable ribbon to 3,456 · latency floor about 5 microseconds per km in glass, roughly 28 ms one way New York to London, against about 3.4 microseconds per km in air-guided hollow core.

## Examples
Corning SMF-28 Ultra as the reference G.652.D product and Corning TXF and OFS TeraWave as terrestrial G.654.E fibers; G.657.A2 drop cable in essentially every fiber-to-the-home build; 3,456-fiber rollable-ribbon micro-cable in hyperscale data center interconnect; Microsoft's purchase of the Southampton spinout Lumenisity in December 2022, after which it began installing hollow-core fiber in its own network.

## Economic profile
The glass is cheap and the hole in the ground is not. Cable is usually well under a fifth of what it costs to build a route, against aerial construction near $30k per mile and buried urban construction past $200k per mile, which is why operators pull far more fibers than they need on the first install: adding strands to a cable already going into a duct costs very little, and going back later means paying the whole civil bill twice. The same arithmetic decides the grade question. G.654.E glass runs roughly two to three times the price of G.652, but on a long-haul route that difference is a rounding error next to trenching, so the choice is made on span loss budget rather than on fiber price. Bend-insensitive G.657 carries almost no premium now and pays for itself in avoided rework on drops. Hollow-core is the exception that proves the pattern: it comes off small specialty draws, is priced by the meter, and is bought only where a few milliseconds have a dollar value. Air guides light about a third faster than silica, so on a 6,000 km transatlantic route the saving works out near 10 ms one way (derived here from 5 versus 3.4 microseconds per km), and reported losses have come down into the range of ordinary single-mode fiber in the best laboratory results after a decade of losing several decibels per kilometer.

## Videos

- https://www.youtube.com/watch?v=9D0QuN6oSis — Fiber Cable Types Explained | Single-Mode (SMF) vs Multimode Fiber (MMF) (CBT Nuggets, 9 minutes, 10k+ views)
- https://www.youtube.com/watch?v=o9phAbpxHKM — Seven Types of Optical Fiber! G.652 to G.657 (HYC, 2 minutes, 1k+ views)

## Further reading

[The FOA Reference For Fiber Optics - Optical Fiber (Fiber Optic Association)](https://www.foa.org/tech/ref/basic/fiber.html) · [G.654: Characteristics of a cut-off shifted single-mode optical fibre and cable (ITU-T)](https://www.itu.int/rec/T-REC-G.654/en)
