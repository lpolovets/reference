---
number: 10
name: Geostationary orbit
part: 2
group: Mid and high orbits
orbits: [geo]
buyer: [com, civ, def]
maturity: routine
cost: high
---

## Description
Geostationary orbit is a circular equatorial orbit at 35,786 km, where the period matches the Earth's 23 h 56 m sidereal rotation and the satellite therefore appears to hang motionless in the sky. That single property built a fifty-year industry, because a user antenna can be bolted to a wall and aimed once. Three satellites spaced around the ring cover everything below roughly ±70° latitude. The price is distance: the round-trip path of 143,000 km sets a physics floor of 477 ms, and real services measure 550–650 ms once processing and terrestrial backhaul are included. Getting there is its own project, since launchers normally drop payloads in a geostationary transfer orbit and the spacecraft circularizes itself, which costs roughly 1,500–1,800 m/s depending on the launch site's latitude.

## Strengths and weaknesses
A fixed point in the sky means no tracking antenna, no handover, no constellation, and a coverage footprint that is stable for fifteen years, which is exactly the product for broadcast, for a government that wants one asset parked over one theater, and for maritime and aviation routes that do not move. Station-keeping is modest at roughly 50 m/s a year, almost all of it north-south, correcting the inclination drift the Sun and Moon impose. The weaknesses are latency and geometry. Half a second of round-trip delay disqualifies interactive applications, high latitudes see the satellite low on the horizon or not at all, and there is no cheap version of a GEO spacecraft, since anything worth putting there is worth building to last fifteen years. The failure mode that matters commercially is obsolescence: you commit to a payload design three to four years before launch, then fly it for fifteen, so a market that shifts underneath you leaves an expensive asset serving demand that moved.

## When to use
Choose GEO when the user terminal must be cheap, fixed, and non-tracking, when one footprint over one region is the product, or when the mission is broadcast, weather imaging of a full disk, or a government lease over a specific theater. Do not choose it for consumer broadband, where latency has already lost that market to LEO, or for anything where the payload design has to keep up with a fast-moving market, unless the payload is software-defined and can be reconfigured on orbit. If you need wide coverage without half a second of delay, MEO is the middle answer; if you need low latency and can fund the satellite count, LEO wins outright. Once you have committed to GEO, the next decision is how to circularize from GTO: a chemical apogee burn takes days to a couple of weeks and starts revenue almost immediately but costs several hundred kilograms of propellant, while electric orbit raising uses a small fraction of that mass and takes four to six months. Take chemical when the slot has to be occupied quickly or when a launch is already paid for; take electric when the mass saving drops you a launch class, which is usually worth more than half a year of deferred revenue.

## Key numbers
35,786 km altitude and a 23 h 56 m period · three satellites cover everything below about ±70° latitude · 477 ms round-trip physics floor and 550–650 ms measured in service · roughly 50 m/s a year of station-keeping, almost all north-south · ITU slots spaced about 2° apart · 1,500–1,800 m/s from GTO to GEO, or four to six months of electric spiral · 15-year design life, ending with a roughly 300 km raise to a graveyard orbit.

## Regulatory and spectrum
GEO is the only orbit where the position itself is a licensed, scarce, internationally coordinated asset. Slots and their associated frequencies are secured through ITU filings under the Radio Regulations, coordinated with every administration whose systems might be affected, and typically spaced about 2° apart for similar services, which is what limits how many satellites can share a band over a given region. A filing must be brought into use within seven years or it lapses, a rule that exists because administrations were filing speculatively for slots they had no intention of using. In the US the FCC grants the license on top of the ITU filing, requires a performance bond of a few million dollars that is released as milestones are met, and sets a deadline to launch and operate within five years. End-of-life disposal is a license condition: raise the satellite roughly 300 km above the ring into the graveyard orbit and passivate it, which costs a few months' worth of station-keeping propellant and has to be reserved from the start.

## Examples
The commercial fleet operators are Intelsat, SES, Eutelsat, Viasat, EchoStar, and Telesat, alongside regional operators like Arabsat, Yahsat, and APT. Civil users include the NOAA GOES-R weather satellites and Europe's Meteosat, which image the full disk continuously because they never move relative to it. Defense users include the AEHF and WGS constellations. Astranis is the notable attempt at a smaller, cheaper GEO satellite, selling a dedicated few-hundred-kilogram spacecraft to a single country or operator rather than a share of a large one.

## Economic profile
A GEO mission is a fifteen-year annuity bought up front: $150M to $500M for the spacecraft, $60M to $150M for launch, and three to four years from order to service. That works when the revenue is predictable over the whole period, which describes broadcast and government leases and describes almost nothing else now. Commercial GEO orders fell from more than twenty satellites a year in the 2000s to roughly a dozen a year worldwide, because consumer broadband moved to LEO and video distribution moved partly to terrestrial streaming. The industry's answer is software-defined payloads that can reallocate beams and capacity in orbit, which converts some of the obsolescence risk into a flexibility argument. If you are underwriting a GEO satellite today, the question is whether the demand it serves will still be there in year twelve, because that is where the return lives.

## Videos

- https://www.youtube.com/watch?v=tI8OqpkOVzs — Geosynchronous Orbits are WEIRD (minutephysics, 5 minutes, 1m+ views)
- https://www.youtube.com/watch?v=hHnhYxOKSoE — How Do Geosynchronous Satellites Systems Work? (ChromaCommunications, 2 minutes, 50k+ views)
- https://www.youtube.com/watch?v=ruf_mfjOt9k — Graveyard Orbits Where Old Satellites Are Forgotten (Scott Manley, 10 minutes, 100k+ views)

## Further reading

[Regulation of satellite systems (ITU)](https://www.itu.int/en/mediacentre/backgrounders/Pages/Regulation-of-Satellite-Systems.aspx) · [Advanced Propulsion for Geostationary Orbit Insertion and North-South Station Keeping (NASA)](https://ntrs.nasa.gov/citations/19970022136)
