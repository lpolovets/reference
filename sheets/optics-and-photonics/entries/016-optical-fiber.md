---
number: 16
name: Optical Fiber
part: 3
group: Optical components
band: [vis, swir]
apps: [comms, sense, med, mfg]
form: comp
cost: u10
maturity: mature
---

## Description
Optical fiber guides light in a glass core surrounded by a lower-index cladding, so rays inside a certain angle are totally internally reflected and stay in the core. Single-mode fiber has a core around 9 um and supports one spatial mode, which is what long-distance communication needs. Multimode fiber has a 50 or 62.5 um core, carries many modes, and is easier to couple into but suffers modal dispersion. Specialty fibers add doping for gain, hollow cores for low nonlinearity, or stress rods to hold polarization.

## Strengths and weaknesses
Loss of about 0.2 dB per kilometer at 1,550 nm is the number that built the internet: light travels 100 km and still delivers over 1% of its power. Bandwidth is enormous, the medium is immune to electromagnetic interference, and the raw material is sand. The weaknesses show up in handling and physics. Fiber is fragile at small bend radius, joints need fusion splicing or precision connectors, and dirt on a connector end face is the most common fault in any installation. Chromatic and polarization-mode dispersion limit reach and have to be compensated.

## When to use
Use single-mode fiber for anything long, anything at high data rate, and anything where beam quality out of the fiber matters. Use multimode for short links inside a building or a rack where cheaper transceivers and easier alignment win. Use specialty fiber when a physical property is the point: polarization-maintaining for interferometry, hollow-core where nonlinearity or latency matters, doped fiber where the fiber is the gain medium. Budget for cleaning and inspection of connectors, because that is where installed systems actually fail.

## Key numbers
Attenuation about 0.2 dB/km at 1,550 nm, the loss minimum for silica · single-mode core about 9 um; multimode 50 or 62.5 um · bend radius limits are typically 10–30 mm for standard fiber, less for bend-insensitive types · fusion splice loss under 0.05 dB · connector contamination is the leading cause of link faults.

## Examples
Submarine cables carrying nearly all intercontinental traffic; erbium-doped fiber amplifiers spaced along those routes; distributed acoustic sensing turning a buried fiber into thousands of vibration sensors; hollow-core fiber now deployed on latency-critical financial routes.

## Videos

- https://www.youtube.com/watch?v=G1Ke-H8I1uk — How Does LIGHT Carry Data? - Fiber Optics Explained (Techquickie, 6 minutes, 1m+ views)
- https://www.youtube.com/watch?v=Lic3gCS_bKo — Total Internal Reflection Demo: Optical Fibers (Physics Demos, 2 minutes, 1m+ views)
- https://www.youtube.com/watch?v=zAVsTubdd_Q — How Fiber Optics Works 🌎 (VirtualBrain [ENG], 6 minutes, 100k+ views)

## Further reading

[Fibers (RP Photonics Encyclopedia)](https://www.rp-photonics.com/fibers.html)
