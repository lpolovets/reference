---
number: 27
name: Grid-Forming Inverters
part: 6
group: Stability & grid services
voltage: [mv, hv]
roles: [stab, volt]
lead: fast
siting: exist
maturity: emerg
---

## Description
A grid-following inverter measures the grid's voltage waveform with a phase-locked loop and injects current in step with it. That works only if something else is setting the waveform, which is why a system made entirely of grid-following inverters cannot stand up. A grid-forming inverter instead behaves as a voltage source behind an impedance: it sets its own voltage magnitude and angle and lets current fall out of the physics, exactly as a synchronous machine does. Control laws vary, from droop to virtual synchronous machine to virtual oscillator, but the defining property is the same.

## Strengths and weaknesses
Grid-forming control gives fast frequency response, can supply synthetic inertia, supports black start, and lets a battery or a wind farm operate in a network with no synchronous generation at all. It is a software change on hardware that already exists, so the marginal cost is small. The limits are current and confidence. An inverter can only supply what its semiconductors survive, typically 1.1–1.5 times rated current, so it cannot deliver the fault current a synchronous machine does, which is a protection problem rather than a control one. Standards are young, and interoperability between vendors' control laws at high penetration is an area with more simulation than field experience.

## When to use
Specify grid-forming capability on new battery storage and, where available, on wind and solar inverters, especially in systems already low on inertia. It is now a requirement in Australia, Great Britain, and several other markets, and the incremental cost at procurement is much lower than retrofitting later. It does not remove the need for short-circuit strength, so on a weak network expect to pair it with synchronous condensers rather than substitute for them. Treat vendor claims carefully: "grid-forming" covers several different control laws with different behavior during a fault.

## Key numbers
Current limit typically 1.1–1.5 times rating, against 5–6 times for a synchronous machine · inertial response in tens of milliseconds, faster than a real machine's · marginal cost at procurement is small compared with retrofit · mandated for new storage in Australia's National Electricity Market and in Great Britain's grid code · high-penetration multi-vendor behavior is mostly established in simulation.

## Examples
Australia's Hornsdale and Riverina batteries running in grid-forming mode; the Dalrymple North battery, which has islanded and restarted part of the South Australian network; Kauai's high-solar island system in Hawaii; the DOE and industry specification effort that produced a common definition of the required behavior.

## Videos

- https://www.youtube.com/watch?v=2SOqdEX1-gA — How GRID FORMING INVERTERS are paving the way for 100% renewable energy. (Just Have a Think, 11 minutes, 100k+ views)
- https://www.youtube.com/watch?v=rvHJ4adUJpk — Grid Forming (English) (Amprion, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=AJBrZhdHlLs — From Follower to Leader: How Grid-Forming Technology Puts Renewables at the Front of Grid Stability (National Laboratory of the Rockies, 3 minutes, 10k+ views)

## Further reading

[Specifications for Grid-forming Inverter-based Resources Version 1 (US Department of Energy)](https://www.energy.gov/sites/default/files/2023-09/Specs%20for%20GFM%20IBRs%20Version%201.pdf)
