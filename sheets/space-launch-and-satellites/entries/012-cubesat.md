---
number: 12
name: CubeSat
part: 3
group: Small buses
orbits: [leo, sso]
mass: [nano, micro]
buyer: [com, sci, def]
maturity: routine
cost: low
---

## Description
A CubeSat is a spacecraft built to a published mechanical standard: one unit (1U) is a 10 cm cube massing up to about 2 kg, and real satellites are stacks of them, most often 3U, 6U, or 12U. Cal Poly and Stanford wrote the specification in 1999 so student projects could share a ride, and the part that mattered turned out to be the deployer rather than the cube. A spring-loaded dispenser holds the satellite, bolts to the launch vehicle or an ISS airlock, and gives the launch provider one qualified interface instead of a new interface for every payload, which is what made secondary payloads routine instead of a favor. Because the interface was settled, a components industry grew up around it, and you can now buy structures, reaction wheels, star trackers, radios, and deployable arrays as catalog parts that fit together. The same standard sets the ceiling: a 6U spacecraft carries a few centimeters of optical aperture, generates roughly 20–60 W, and gets its data down at tens of megabits per pass. That is enough for a radio payload, a coarse imager, or a technology demonstration, and not enough for anything that needs real power or a real optic.

## Strengths and weaknesses
The strengths are cost and schedule: a 6U bus runs roughly $100–500k against $2–15M for an ESPA-class platform, a rideshare seat for a small CubeSat is under about $150k, and a team that buys rather than builds can go from contract to launch in about a year. The weaknesses come straight from the volume and power budget, since aperture, transmit power, and propellant all scale with the box you are allowed to occupy. The failure mode to plan around is a satellite that deploys and never answers. Surveys of university-class missions by Michael Swartwout have put infant mortality — dead on arrival or lost within 30 days — near 40%, which is what you get from single-string avionics, no propulsion to fix a bad orbit, and a few minutes of contact a day to debug with. Commercial operators do much better, mostly by flying the same design dozens of times and by accepting that some units are written off.

## When to use
Pick a CubeSat when the payload genuinely fits in a few liters and tens of watts, and when the mission tolerates losing a unit. That covers RF payloads (AIS, ADS-B, signal monitoring), GNSS radio occultation for weather, coarse multispectral imaging, in-orbit demonstration of a component you intend to fly on something bigger, and any constellation whose value comes from having many satellites rather than good ones. Do not pick one because it is cheap if the payload needs an aperture, a kilowatt, or a gigabit downlink, because you will spend two years discovering the ceiling and then buy a small satellite bus anyway. If your payload is between 20 and 100 kg, go straight to a microsatellite platform: the standard stops paying for itself once you outgrow the deployer, and the launch cost difference no longer dominates the program.

## Key numbers
1U is a 10 cm cube massing up to about 2 kg, with 3U, 6U, and 12U the common sizes · a 6U bus runs roughly $100–500k · a small CubeSat rideshare seat costs under about $150k · a 6U generates roughly 20–60 W · typical mission life 1–3 years · infant mortality near 40% on university-class missions · FCC streamlined smallsat license fee $30,000.

## Regulatory and spectrum
The FCC's streamlined smallsat process (part 25.122, in force since 2020) is what makes CubeSat licensing tractable: a $30,000 application fee, a target of about six months, and eligibility for systems of no more than 10 satellites under 180 kg each, operating six years or less including deorbit, below 600 km without propulsion, at least 10 cm in the smallest dimension, and carrying a unique telemetry marker so the tracking networks can tell them apart. Universities often go the amateur route instead, coordinating through the IARU and operating under Part 97, which costs almost nothing but bars commercial use of the downlink. Either way the spacecraft still needs an ITU filing submitted by a national administration, and a CubeSat that images the Earth needs a NOAA remote sensing license on top of the radio license. The practical planning number is that licensing and frequency coordination take longer than building the satellite, so start them before you cut metal.

## Examples
Planet's Dove and SuperDove imagers (3U, around 200 on orbit), Spire's Lemur-2 fleet (3U, AIS and GNSS radio occultation), Swarm's quarter-U SpaceBEEs, NASA's MarCO twins (6U, relayed InSight's Mars landing in 2018), CAPSTONE (12U, flown to a lunar near-rectilinear halo orbit in 2022), and TBIRD (6U, 200 Gbps laser downlink). Bus and component vendors include NanoAvionics, EnduroSat, Blue Canyon Technologies, GomSpace, ISISpace, and AAC Clyde Space; deployers come from Cal Poly's original P-POD lineage plus Nanoracks, Exolaunch, and Planetary Systems.

## Economic profile
The bus is a catalog purchase and the mission cost is dominated by everything around it: payload, integration and test, licensing, launch, and a year or more of operations and ground station time. Component prices have fallen a long way and are now flattening, because the parts are already commercial-grade and the remaining cost is qualification and low volume. The strategic point for anyone building a business here is that the CubeSat form factor is a means, not a market. The companies that made money from it (Planet, Spire) did so by flying enough units to sell a data product, and both moved to larger spacecraft as soon as their payloads outgrew the box. If a plan needs CubeSats specifically because the unit price is low, check whether the payload's aperture and power requirements have been sized honestly, because that is where these programs usually break.

## Videos

- https://www.youtube.com/watch?v=7RrWZJHkREI — Crazy Engineering: CubeSats (NASA Jet Propulsion Laboratory, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=yGUWTxV0r8c — CubeSats explained by NASA (SciNews, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=nsdMcqiBmvY — What is a CubeSat? (Canadian Space Agency, 2 minutes, 10k+ views)

## Further reading

[CubeSat 101: Basic Concepts and Processes for First-Time CubeSat Developers (NASA)](https://www.nasa.gov/wp-content/uploads/2017/03/nasa_csli_cubesat_101_508.pdf) · [CubeSat Design Specification Rev. 14.1 (Cal Poly)](https://static1.squarespace.com/static/5418c831e4b0fa4ecac1bacd/t/62193b7fc9e72e0053f00910/1645820809779/CDS+REV14_1+2022-02-09.pdf)
