---
number: 16
name: LEO broadband constellation
part: 4
group: Broadband
orbits: [leo]
mass: [small, med]
buyer: [com, def]
maturity: service
cost: low
---

## Description
A LEO broadband constellation is a fleet of hundreds to thousands of satellites at 300–600 km, each acting as a moving cell tower with a phased array underneath it that paints beams onto the ground and hands users off as it passes. Being 60 times closer than a geostationary satellite buys two things: round-trip latency of 20–50 ms instead of 550–650 ms, and a link budget good enough that a flat consumer terminal closes it. Capacity comes from spectrum reuse, so total system throughput is roughly the usable spectrum multiplied by the number of beams you can put over paying customers at once. Laser crosslinks let a satellite over open water route traffic to one over a gateway, which decouples coverage from ground infrastructure. Starlink is the reference implementation: about 12,600 satellites launched by August 2026 with roughly 10,900 still on orbit, more than 10 million subscribers as of the first quarter of 2026, and $11.4B of connectivity revenue in 2025.

## Strengths and weaknesses
It is the only satellite architecture that competes with terrestrial broadband on user experience, and it reaches places fiber and cellular will not for decades: ships, aircraft, rural households, disaster zones, and forward military units. The structural weakness is that capacity is geographically stranded. A satellite over the Pacific serves no customers, and demand concentrates over land and over cities, so the fleet has to be sized for the peak cell rather than the average one, and most of the capacity you launched is idle most of the time. That shows up commercially as sold-out cells: the operator stops taking customers in the areas where demand is highest. The other weakness is that nothing about the constellation is a one-time cost. Satellites live about five years, so a fleet of several thousand needs roughly a fifth of itself replaced every year forever, and the moment the factory or the rocket stops, the asset starts evaporating.

## When to use
For a buyer, choose LEO broadband when latency or mobility matters: interactive applications, moving platforms, and anywhere terrestrial service is absent. If the users are fixed and the traffic is broadcast or bulk transfer along a stable route, a GEO high-throughput satellite may still deliver more bits per dollar of capex. For anyone considering building one, the honest test is vertical integration. The only operator with demonstrated positive unit economics owns its launch vehicle, its satellite line, and its user terminal, and each of those you rent instead is a margin someone else takes and a schedule you do not control. If you cannot own at least the satellite line and the terminal, the realistic plans are wholesale capacity into other people's networks, a regional or sovereign system funded as infrastructure, or a niche the incumbents will not serve.

## Key numbers
Roughly 10,900 Starlink satellites on orbit in August 2026 out of about 12,600 launched · more than 10 million subscribers as of Q1 2026, up from 5.0 million a year earlier · $11.4B of connectivity revenue in 2025 · average revenue per user about $66/month in Q1 2026, down from $86 a year earlier · 20–50 ms round-trip latency · Amazon Leo at roughly 330 satellites against 3,232 required by July 2029.

## Regulatory and spectrum
Spectrum, not technology, is what gates this business. User links run in Ku and Ka band and gateways are moving into V and Q, and every non-geostationary system has to protect the geostationary networks that were there first through the equivalent power flux density limits in Article 22 of the Radio Regulations — limits that WRC-27, meeting in Shanghai from 11 October to 12 November 2027, is scheduled to review, which is the largest open regulatory question in the sector. Priority runs by filing date and processing round, and it is enforceable. When the FCC waived Amazon's milestone of 1,616 satellites by 30 July 2026 in a conditional decision on 6 June 2026, it kept the 3,232-satellite deadline of July 2029 and ruled that satellites launched after the original date carry no interference protection until Amazon reaches 50% deployment, meaning they must not interfere with Starlink. The milestones themselves are hard: 50% of an FCC-authorized NGSO system within six years and 100% within nine, and under ITU Resolution 35, 10% within two years of the end of the seven-year bringing-into-use period, 50% within five, and 100% within seven. Filings are cheap relative to satellites — an ITU advance publication ran 570 CHF in 2024 and a coordination request 5,710 to about 67,000 CHF — which is exactly why more than 300 constellations covering over a million satellites were filed between 2017 and 2022, more than a hundred times the operational fleet. A paper filing is not worthless, since priority is real and transferable, but Resolution 35 caps the recorded assignment at the number of satellites actually deployed, so a filing you cannot build shrinks to the size of what you built. The FCC's July 2026 overhaul added annual band-specific processing rounds opening 1 January for Ka, Ku, V, and Q, a $10M surety bond that declines to zero at 90% deployment, and a 60-day shot clock on decisions. And a US license only sells service in the US: every other country requires its own landing rights, which is why coverage maps have holes that have nothing to do with orbits.

## Examples
SpaceX Starlink, with V3 satellites carrying about 1 Tbps of downlink each against roughly 80 Gbps on a V2 Mini; Amazon Leo, renamed from Project Kuiper in 2025, at roughly 330 satellites in mid-2026 and building toward 3,232 Gen 1 spacecraft with a further 4,500 Gen 2 approved in January 2026; Eutelsat OneWeb, a 648-satellite system sold wholesale to enterprises and telcos rather than to consumers; Telesat Lightspeed; and China's Guowang and Qianfan constellations.

## Economic profile
This is a manufacturing and distribution business wearing a space company's clothes. Revenue growth has been fast and average revenue per user has fallen as service expanded into price-sensitive markets, from $86/month in early 2025 to about $66/month in early 2026, which means subscriber growth has to outrun ARPU decline to keep revenue compounding. The cost side is dominated by the replacement rate, launch cost per satellite (which improves with stacking density, not just with rocket price), and terminal subsidy. The reason vertical integration keeps showing up in this category is that all three of those are internal transfer prices for one operator and external invoices for everyone else. When evaluating a competitor's plan, the questions that separate real from optimistic are what a marginal satellite and a marginal terminal cost, how many paying users sit under a typical beam, and what fraction of the fleet is over water at any moment.

## Videos

- https://www.youtube.com/watch?v=qs2QcycggWU — How does Starlink Satellite Internet Work?📡☄🖥 (Branch Education, 28 minutes, 5m+ views)
- https://www.youtube.com/watch?v=b_uYOE_gMTQ — Starlink Technology Overview (Phil Trubey, 21 minutes, 100k+ views)

## Further reading

[Low Earth Orbit Satellites: Potential to Address the Broadband Digital Divide (Congressional Research Service)](https://www.everycrsreport.com/reports/R46896.html) · [A Survey on Non-Geostationary Satellite Systems: The Communication Perspective (arXiv)](https://arxiv.org/abs/2107.05312)
