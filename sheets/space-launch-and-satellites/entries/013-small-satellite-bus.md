---
number: 13
name: Small satellite bus
part: 3
group: Small buses
orbits: [leo, sso, meo, geo, deep]
mass: [micro, small]
buyer: [com, civ, sci, def]
maturity: routine
cost: med
---

## Description
A merchant bus is a 100–500 kg spacecraft platform sold as a product: structure, solar arrays and batteries, attitude determination and control, propulsion, avionics, and a TT&C radio, with a published mechanical, electrical, and data interface that your payload bolts to. The category exists because of a launch adapter. The EELV Secondary Payload Adapter ring was built to sell spare capacity on big government launches, its ports were rated at 181 kg (320 kg on ESPA Grande), and satellite builders sized their products to fit, so a launch accessory ended up defining a class of spacecraft. A typical platform supplies 100–1,000 W to the payload, points to a few tens of arcseconds or better, carries enough propellant for orbit maintenance and disposal, and is designed for 5–7 years. The shift over the last decade is that you now buy this from a configuration sheet instead of writing a spacecraft specification, and several vendors publish prices and lead times.

## Strengths and weaknesses
Buying a bus moves a payload company out of the spacecraft business, which is usually the right trade: the vendor has flown the design, carries the qualification paperwork, and delivers in 12–24 months against three or four years for a clean-sheet build. The cost is that you inherit someone else's design decisions, and the interface is a real constraint — payload volume, view angles, thermal rejection, and peak power draw are fixed before you start. The failure mode to underwrite is a first-article bus. A platform that has flown twice has no meaningful on-orbit statistics, and the losses in this class have overwhelmingly been in attitude control and power management software rather than in structures, which is exactly the part a data sheet does not tell you about. The second, less obvious risk is corporate: bus vendors keep getting acquired by primes, and a supplier that becomes part of your competitor's parent company is a schedule risk you did not price.

## When to use
Buy a merchant bus when the payload runs 20–200 kg and needs somewhere between 100 W and 1 kW, which covers most imaging, RF sensing, and communications payloads that will not fit a CubeSat. If the payload fits in a few liters and tens of watts, a CubeSat is four to ten times cheaper and you should take the ceiling. If it needs more than about 2 kW or a 15-year life, you are buying a large platform and the merchant bus market cannot help you. The volume threshold is the other decision: below roughly 20 identical satellites, buying is clearly right; past 50 or so, the margin you pay the bus vendor starts to exceed the cost of standing up your own line, which is why every large constellation operator eventually builds its own. And weight vendor track record heavily over spec sheets, because on this class of spacecraft the difference between a good and a bad bus shows up in year two, not at delivery.

## Key numbers
ESPA port limit 181 kg, ESPA Grande 320 kg · bus prices roughly $2–15M, with Apex publishing $3.5–9.5M for its Aries platform and $13.5M with a 15-month lead time for the GEO version · delivery 12–24 months · payload power 100–1,000 W · design life 5–7 years · pointing to tens of arcseconds or better.

## Regulatory and spectrum
The question that decides the paperwork is who holds the license. Operate the satellite yourself and you need a full FCC Part 25 authorization (or a foreign equivalent plus US market access) and an ITU filing submitted by a national administration, because the streamlined smallsat path stops at 180 kg, 10 satellites, and six years — a 300 kg bus or an eleventh spacecraft drops you into the full process. The FCC's July 2026 licensing overhaul made that process more predictable: a 30-day completeness determination, a 15-day public notice, and a 60-day shot clock on decision, with annual band-specific processing rounds opening 1 January for Ka, Ku, V, and Q band, and a $10 million surety bond for systems that opt into a round, declining to zero once 90% of the constellation is deployed. Export control is the other gate. Most commercial buses have sat under the EAR as ECCN 9A515 rather than ITAR's USML Category XV since the 2014 reform, but classification follows capability, and a bus with hardened parts or certain propulsion still lands on the Munitions List. Non-US vendors market "ITAR-free" platforms for exactly this reason, and it is a genuine advantage when the customer is a foreign government.

## Examples
Blue Canyon Technologies (RTX), York Space Systems, Terran Orbital (bought by Lockheed Martin in October 2024 at roughly $450M enterprise value), NanoAvionics (Kongsberg), Apex with its Aries, Nova, and GEO Aries platforms, Airbus Arrow and Longbow, Surrey Satellite Technology, and Astranis for small GEO communications satellites. Loft Orbital sits one layer up, buying buses from Airbus and Apex and selling payload slots plus the license and operations as a service.

## Economic profile
The economics are product economics rather than program economics: a vendor's margin depends on how many identical units it ships, so the whole industry is chasing order books and configuration discipline. Published prices are themselves the change — a platform with a list price and a lead time is a very different purchase from a proposal cycle. Consolidation has been the dominant trend, with primes buying merchant bus makers to secure supply for defense constellation programs, and that is worth diligencing directly: ask whether your supplier will still be independent when your second batch is due. Costs keep falling on parts and on avionics, where commercial components and automotive-grade electronics do the work, but integration and test labor does not scale the same way, so do not model a bus price curve as steep as a component price curve.

## Videos

- https://www.youtube.com/watch?v=BJHzMImd17A — Inside the Astranis Satellite Factory — How to Connect Millions (S3 | Science, Startups, & Stories, 14 minutes, 10k+ views)
- https://www.youtube.com/watch?v=wuB3NeIp6CM — How to Build a Satellite (Astranis Space Technologies, 7 minutes, 10k+ views)
- https://www.youtube.com/watch?v=fft0IWOwx9s — How a satellite is built. (Airbus Defence and Space, 2 minutes, 10k+ views)

## Further reading

[State-of-the-Art of Small Spacecraft Technology: Complete Spacecraft Platforms (NASA)](https://www.nasa.gov/smallsat-institute/sst-soa/platforms/) · [Setting the Standard: Recommendations on "Launch Unit" Standard SmallSat Sizes between CubeSats and ESPA-Class (The Aerospace Corporation)](https://aerospace.org/sites/default/files/2018-08/SSC18-IX-07%20Launch%20Unit%20Standards.pdf)
