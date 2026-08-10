---
number: 15
name: Large spacecraft platform
part: 3
group: Large platforms
orbits: [meo, geo, deep]
mass: [med]
buyer: [com, civ, def]
maturity: routine
cost: high
---

## Description
A large platform is the traditional big satellite: typically 2,000–6,500 kg at launch, 15–25 kW of power at end of life, a 15-year design life, and a price between $150M and $1B. Everything about it follows from the fact that it has to work for fifteen years with no maintenance in an orbit that never clears itself. Parts are radiation-hardened and qualified for the full dose, every critical function is redundant, propellant is sized for station-keeping across the whole life, and the spacecraft goes through months of thermal-vacuum and vibration testing before it ships. The payload gets deployable reflectors several metres across and kilowatts of transmit power, which is capability no small bus can supply. The schedule follows from the same place: three to four years from order to launch, plus four to six months of electric orbit raising if the operator chose electric propulsion over chemical to save several hundred kilograms of propellant mass.

## Strengths and weaknesses
Aperture, power, and service life are the product, and they are not substitutable. A 6 kW payload with a 9 m reflector does things no constellation of 200 kg satellites can do, and fifteen years of revenue from one asset amortizes a large capital cost at a rate that looks good to a lender. Against that, the schedule risk is severe and one-sided: a satellite ordered in 2026 flies technology frozen around 2027 and is still in service in 2042, so the operator is betting on a market fifteen years out. It is also a single point of failure with no partial credit. ViaSat-3 F1 launched in 2023 and lost more than 90% of its designed terabit of capacity because a reflector did not deploy, which produced a $421M insurance claim and a hole in the operator's capacity plan that took years to fill. That is the failure mode: not degraded performance, but a working satellite that cannot do the job it was bought for.

## When to use
Choose a large platform when the mission needs a big aperture or several kilowatts on a payload, when the coverage requirement is one region served continuously, or when the asset is worth more parked over a specific place than distributed. Broadcast, government leases over a theater, weather from GEO, and maritime and aviation broadband along fixed routes all still fit. Do not choose one for interactive consumer services, where the 550–650 ms GEO round trip loses to LEO regardless of how much capacity you build. And check the small GEO options before defaulting to a full-size platform: Astranis, AscendArc, Swissto12, and Apex's $13.5M GEO Aries now cover missions that used to require a $300M satellite, and about 20 of the 47 GEO orders placed since 2020 have gone to small platforms. If the payload genuinely needs 20 kW, none of them help and you are back with the primes.

## Key numbers
2,000–6,500 kg at launch · 15–25 kW power at end of life · 15-year design life · $150M–1B per satellite · three to four years from order to launch, plus four to six months of electric orbit raising · 11 GEO satellites ordered industry-wide in 2025, the best year since 2016.

## Regulatory and spectrum
A GEO satellite without a slot and frequency rights is scrap metal, so the filing usually precedes the order. The ITU sequence is advance publication, then a coordination request, then notification and recording in the Master Register, and the fees are almost irrelevant next to the hardware: in 2024 an advance publication cost 570 CHF, a coordination request ran from about 5,710 to 67,000 CHF, and a notification from about 15,910 to 116,000 CHF. What binds is time and priority. You get seven years from filing to bring the assignment into use, and for a GEO network that means keeping a satellite capable of transmitting or receiving on those frequencies at the notified position for a continuous 90 days, then informing the Bureau within 30 days. Priority runs by filing date, so a later filer has to reach agreement with every earlier one whose frequencies and service area overlap, and that bilateral coordination between administrations routinely takes years. Slots sit about 2° apart. National licensing runs in parallel: an FCC Part 25 authorization for a US-licensed satellite, or a foreign license plus FCC market access to serve US customers.

## Examples
Airbus Eurostar Neo and the software-defined OneSat, Thales Alenia Space's Spacebus Neo and Spacebus 4000 and its Space Inspire line, Boeing 702, Lockheed Martin LM2100, Lanteris (formerly Maxar Space Systems) 1300-series, Northrop Grumman GEOStar, and CASC's DFH-4 and DFH-5 in China. Specific spacecraft worth looking up: Hughes' Jupiter 3 at about 9,200 kg, the largest commercial communications satellite built; Eutelsat Quantum, the first fully reprogrammable commercial satellite; and the ViaSat-3 series.

## Economic profile
The commercial GEO order book collapsed when LEO broadband arrived and has partly recovered: 47 orders since 2020, 11 of them in 2025, with most of the recent ones replacements, government programs, and a leasing deal rather than new capacity for growth. Roughly half now go to small GEO platforms, which is the low end of the market leaving. The primes' answer to fifteen-year obsolescence is the software-defined payload, where beams, coverage, capacity, and frequency plan are reprogrammed on orbit instead of being fixed at build. It is the right idea and it has been expensive to execute: Airbus has booked around ten OneSat orders without delivering one, and took roughly €600M of charges in its space division with OneSat named as the principal cause. If you are underwriting a business that depends on a large platform, the two numbers that matter are capacity delivered per dollar of capex over the asset's whole life, and how much of the fifteen-year revenue is already contracted.

## Videos

- https://www.youtube.com/watch?v=CCh3b2al7Dg — Assembly, Integration and Test (AIT) for Communication Satellite in Airbus Defence and Space (Airbus Defence and Space, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=m5dXWJi4pIA — Inside A Satellite Clean Room (Tom Scott, 4 minutes, 500k+ views)
- https://www.youtube.com/watch?v=RMfiMDCITRE — Spacebus NEO: 100% electric ! (Thales, 3 minutes, 5k+ views)

## Further reading

[Neosat boosting Europe's telecommunications by satellite (ESA)](https://www.esa.int/Applications/Connectivity_and_Secure_Communications/Neosat_boosting_Europe_s_telecommunications_by_satellite) · [Software-defined satellite enters commercial service (ESA)](https://www.esa.int/Applications/Connectivity_and_Secure_Communications/Software-defined_satellite_enters_commercial_service)
