---
number: 7
name: Low Earth orbit
part: 2
group: Low Earth orbits
orbits: [leo]
buyer: [com, civ, sci, def]
maturity: routine
cost: low
---

## Description
Low Earth orbit runs from about 160 km to 2,000 km, and in practice most of the traffic sits between 500 and 600 km. A satellite at 550 km travels at roughly 7.6 km/s and completes an orbit every 95 minutes. It is the cheapest place to put mass, at around $3,000/kg on a reusable medium-lift launcher, the closest to the ground for both resolution and link budget, and the mildest radiation environment outside the atmosphere, since it sits below the inner proton belt except where the South Atlantic Anomaly dips down. It is also, at 550 km, self-cleaning: a dead satellite reenters in roughly five years without help. Everything in this sheet gets compared against LEO, and the comparison usually comes down to one thing, which is that a satellite this close can only see a small piece of the Earth at a time.

## Strengths and weaknesses
The strengths compound. Cheap launch means cheap satellites are worth flying, short range means small apertures and small antennas work, benign radiation means commercial-grade electronics survive a five-year mission behind a couple of millimetres of aluminium, and 20–50 ms round-trip latency in service is good enough for interactive applications that GEO cannot support. The weakness is geometry. From 550 km only about 4% of the Earth's surface is above the horizon, and only about half a percent of it sits above a usable 25° elevation angle, so one satellite gives you a handful of eight-to-twelve-minute passes a day over a given site. Continuous global coverage takes several hundred spacecraft. The failure mode for a business is underestimating that number: a constellation sized for coverage on paper turns out to need two or three times as many satellites once you add elevation-angle margin, capacity, and spares.

## When to use
Use LEO as the default and make the other orbits justify themselves. It is right for imaging, for any interactive communications service, for technology demonstration, for science that wants to look down, and for anything where per-satellite cost matters more than per-satellite coverage. Go higher only for specific reasons: to GEO when you need a fixed point in the sky and can live with half a second of latency, to MEO when 20–30 satellites covering the globe beats several hundred, to SSO when you need identical lighting on every pass. Go lower, to VLEO, only when aperture is the binding constraint. If you are sizing a constellation, start from the elevation angle your user terminal actually needs and work backwards, because that number sets the satellite count and the satellite count sets the entire capital plan.

## Key numbers
160–2,000 km by definition, with most traffic at 500–600 km · about 7.6 km/s orbital velocity and a 95-minute period at 550 km · roughly $3,000/kg to reach · about 4% of the Earth's surface above the horizon from 550 km, and around half a percent above 25° elevation · 20–50 ms round-trip latency in service · roughly five years to natural reentry from 550 km, against the FCC's five-year post-mission disposal expectation.

## Regulatory and spectrum
LEO is where the regulatory pressure has concentrated, because it is where the satellites are. A commercial US operator files with the FCC, which in turn files with the ITU, and non-geostationary licenses carry deployment milestones: half the constellation within six years of grant and all of it within nine, which is what forces operators to launch on a schedule set by paperwork rather than by demand. ITU rules add their own bringing-into-use deadline and a staged milestone schedule after that, and filings that miss them lapse. Sharing rules bind at both ends: equivalent power flux density limits under ITU Article 22 exist to protect the geostationary arc from non-geostationary transmissions, and separate coordination applies between LEO systems, where the FCC's approach has generally been to require the later applicant to accept the interference. Disposal is now a licensing condition rather than a guideline, since the FCC's 2022 rule replaced the old 25-year guidance with a five-year expectation for LEO.

## Examples
The International Space Station near 400 km, Starlink's main shells around 550 km, Amazon Leo near 590–630 km, Iridium NEXT at 780 km, and the Space Development Agency's Transport and Tracking layers near 1,000 km. Almost all commercial Earth observation flies here too, from Planet's Doves to WorldView Legion, though most of it uses the sun-synchronous subset rather than a general LEO inclination.

## Economic profile
LEO turns a space system from a capital asset into a manufacturing problem. Launch is cheap enough and the satellites small enough that unit cost, build rate, and replacement cadence dominate the business case, rather than the exquisite reliability that a single expensive spacecraft demands. That has two consequences worth planning for. First, the capital requirement scales with satellite count, so a coverage-driven system is expensive before it earns anything, and revenue only arrives after several hundred units are up. Second, replacement never stops: a fleet with a five-year design life needs a fifth of itself rebuilt and relaunched every year, forever, which is an operating expense that constellation business plans routinely treat as a one-time build. If you are evaluating one, ask what the steady-state annual replacement bill is and whether the revenue covers it.

## Videos

- https://www.youtube.com/watch?v=bcvnfQlz1x4 — The Only Video Needed to Understand Orbital Mechanics (Animations Xplaned, 8 minutes, 1m+ views)
- https://www.youtube.com/watch?v=1tw4SmS4Pc4 — LEO Satellite Networks: Brief Introduction to Communications Challenges (Iain Explains Signals, Systems, and Digital Comms, 18 minutes, 10k+ views)
- https://www.youtube.com/watch?v=IC1JQu9xGHQ — How Do Satellites Get & Stay in Orbit? (SciShow Space, 4 minutes, 1m+ views)

## Further reading

[Basics of Space Flight, Chapter 5: Planetary Orbits (NASA)](https://science.nasa.gov/learn/basics-of-space-flight/chapter5-1/) · [Mitigation of Orbital Debris in the New Space Age: Second Report and Order (Federal Communications Commission)](https://docs.fcc.gov/public/attachments/FCC-22-74A1.pdf)
