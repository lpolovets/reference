---
number: 35
name: Wavelength-Division Multiplexing
part: 7
group: Integrated photonics
band: [swir]
apps: [comms]
form: inst
cost: u100k
maturity: mature
---

## Description
Wavelength-division multiplexing runs many independent channels down one fiber, each on its own wavelength, combined by a multiplexer and separated at the far end by a demultiplexer. Coarse WDM spaces channels 20 nm apart and needs no temperature control, so it is cheap. Dense WDM spaces them 50 or 100 GHz apart in the erbium amplifier band around 1,550 nm, fitting 80 or more channels on one fiber, and requires stabilized lasers and temperature-controlled filters. Reconfigurable add-drop multiplexers let an operator route individual wavelengths without touching the traffic on the others.

## Strengths and weaknesses
It multiplies the capacity of fiber already in the ground, which is the cheapest capacity in telecommunications by a wide margin: lighting another wavelength costs a transceiver, while laying another fiber costs a construction project. One erbium amplifier boosts every channel at once. The costs are optical rather than electrical. Channels interact through fiber nonlinearity, so total launch power is capped, dispersion and polarization effects accumulate over distance, and per-channel provisioning needs precise wavelength control and a management system that understands the optical layer.

## When to use
Use dense WDM on any long-haul or metro route where fiber is scarce or expensive, which is nearly all of them, and coarse WDM on short enterprise links where cost matters more than channel count. In datacenter interconnect, weigh WDM against simply lighting parallel fibers, since inside a campus fiber is often cheap enough that parallelism wins. Plan the optical layer's power and dispersion budget as a whole, because a channel added without re-checking the budget can degrade every other channel on the fiber.

## Key numbers
Dense WDM channel spacing 50 or 100 GHz, giving 40–96 channels in the C band · coarse WDM spacing 20 nm, needing no temperature control · one erbium-doped fiber amplifier boosts all channels simultaneously · total launch power is limited by fiber nonlinearity, not by amplifier capability · adding a wavelength costs a transceiver rather than a new cable.

## Examples
Dense WDM on every long-haul terrestrial and submarine route; coarse WDM in mobile fronthaul and enterprise links; reconfigurable optical add-drop multiplexers in metro rings; 400G ZR coherent pluggables putting WDM transport directly into router ports.

## Economic profile
The whole case is one comparison: a transceiver against a construction project. Lighting another wavelength on installed fiber costs a transceiver, while laying another fiber costs permits, trenching, and years, so dense WDM makes sense on any route where the civil work dominates, which is most long-haul and metro. Inside a campus the comparison flips, since pulling more fiber a few hundred meters is cheap and parallel fibers skip the wavelength control entirely. That control is most of the cost difference between the two flavors: coarse WDM at 20 nm spacing needs no temperature control and is cheap enough for enterprise links, while dense WDM at 50 or 100 GHz needs stabilized lasers, temperature-controlled filters, and a management system that understands the optical layer. One erbium amplifier boosting 40–96 channels at once is what makes cost per channel fall as channels are added, so an operator lighting only a handful of wavelengths on a dense WDM line is carrying most of the fixed cost and collecting little of the benefit.

## Videos

- https://www.youtube.com/watch?v=94Vg3pzjHNU — What is WDM (Wavelength Division Multiplexer)? - FO4SALE.COM (Fiber Optics For Sale Co., 5 minutes, 100k+ views)
- https://www.youtube.com/watch?v=0ctRKOtXJ5c — FOA Lecture 31 Wavelength Division Multiplexing (WDM) (thefoainc, 9 minutes, 50k+ views)
- https://www.youtube.com/watch?v=8rnWz-pTDRI — Dense Wavelength Division Multiplexing (DWDM) (Champion ONE, 2 minutes, 10k+ views)

## Further reading

[Wavelength Division Multiplexing (RP Photonics Encyclopedia)](https://www.rp-photonics.com/wavelength_division_multiplexing.html) · [Spectral grids for WDM applications: DWDM frequency grid, G.694.1 (ITU-T)](https://www.itu.int/rec/T-REC-G.694.1)
