---
number: 6
name: Very low Earth orbit
part: 2
group: Low Earth orbits
orbits: [leo]
buyer: [com, def]
maturity: emerging
cost: low
---

## Description
Very low Earth orbit is roughly 250–350 km, below where satellites normally operate, and it is a straight trade of lifetime for performance. Two things improve as you get closer to the ground. Ground sample distance scales with range for a fixed aperture, so the same telescope resolves roughly 1.5 to 2 times finer detail at 300 km than at 500 km, and received power scales with the inverse square of range, which is about 4–5 dB of extra link margin over that same step. One thing gets much worse: atmospheric drag, which rises steeply as altitude falls and swings by roughly an order of magnitude over the 11-year solar cycle. An unpropelled satellite at 300 km reenters in months rather than years, so propulsion stops being optional and becomes the thing the spacecraft is designed around. Everything else about VLEO follows from that one fact.

## Strengths and weaknesses
You get a smaller telescope for the same resolution, a stronger link for the same antenna, cheaper launch because the vehicle lifts more to a lower altitude, and free disposal, since the atmosphere removes the satellite whether you want it to or not. The costs are a propellant budget that dominates the design, atomic oxygen that erodes exposed polymers and coatings, and drag torques that fight the attitude control system continuously. The failure mode is running out of propellant early, and it is easy to hit because drag is not predictable: a solar maximum stronger than the design case can consume a mission's entire margin in a year. Conjunction screening is also harder down here, because drag makes position prediction worse just when the traffic is densest with newly launched and decaying objects.

## When to use
Go to VLEO when the aperture you can afford is the constraint on the mission and the extra factor of 1.5 to 2 in resolution is worth rebuilding the spacecraft around propulsion, which is the case for sub-10 cm imaging and for direct-to-device links where every decibel of margin matters. It also suits any mission where a deliberately short life is acceptable or desirable, including tactical demonstrations and classified payloads you would rather see reenter on schedule. Do not go there for anything that needs a five-year life on a small propellant budget, for constellations where replacement capex is already the dominant cost, or for science that needs a stable, repeatable ground track. If your aperture is comfortable at 500 km, fly at 500 km and spend the saved propellant mass on the payload.

## Key numbers
Roughly 250–350 km altitude · about 1.5 to 2 times finer ground resolution than 500 km for the same aperture · roughly 4–5 dB more received power over that same step · months to natural reentry without propulsion · atmospheric density swinging by about an order of magnitude across the 11-year solar cycle · GOCE operated near 255 km for about four years with continuous drag compensation.

## Regulatory and spectrum
The debris rules that constrain higher orbits are essentially free here. The FCC's five-year post-mission disposal expectation is met automatically at these altitudes, and the orbital debris showing in a license application is the easiest part of the filing. What still binds is spectrum: you need the same FCC or national authorization and the same ITU filing as any other satellite, with the same bringing-into-use milestones, and altitude buys you nothing there. Any imaging payload needs a NOAA remote-sensing license regardless of how low it flies. The one item VLEO operators do have to take seriously is reentry casualty risk, since these satellites come down by design and often more than once a year across a fleet; US government practice sets a limit of 1 in 10,000 for human casualty from surviving debris, which pushes designers toward demisable materials rather than dense titanium and steel components.

## Examples
ESA's GOCE gravity mission is the best-documented case, flying near 255 km from 2009 to 2013 with electric propulsion running continuously to cancel drag. JAXA's SLATS, also called Tsubame, deliberately walked down from 271 km to 167 km between 2017 and 2019 to characterize the environment. Starlink satellites are inserted around 280–300 km and spend weeks there before raising to their operational shells, which is the closest thing to fleet operating experience anyone has. The commercial VLEO companies are still pre-fleet: Albedo's Clarity satellites target 10 cm-class imagery from around 275 km, Redwire's SabreSat and the Thales Alenia SkimSat platform are aimed at the same regime, and the EU's DISCOVERER program funded much of the underlying materials and aerodynamics work.

## Economic profile
VLEO moves cost from the payload to the bus. A 10 cm-class image from 275 km needs a telescope perhaps a third the diameter of one collecting the same detail from 500 km, and optics cost scales steeply with aperture, so the payload gets much cheaper. What you pay back is shorter life, a propulsion system sized for continuous thrust, and a replacement cadence that never stops. The economics work if the satellite is cheap and mass-produced and the imagery commands a premium for resolution; they do not work for a bespoke $100M spacecraft, which is why nobody flies one of those down there. The number to underwrite is fleet capex per year, not per satellite: if a VLEO satellite costs 40% of a conventional one but lasts a third as long, you are worse off, and the whole case rests on the payload savings being larger than that.

## Videos

- https://www.youtube.com/watch?v=vEfatzhHhvg — Air Breathing Satellites in Very Low Earth Orbit (Eager Space, 13 minutes, 10k+ views)
- https://www.youtube.com/watch?v=srmtxK44YXk — Air Breathing Ion Thrusters & Low Orbit Satellites (Scott Manley, 9 minutes, 100k+ views)

## Further reading

[GOCE (ESA)](https://www.esa.int/Applications/Observing_the_Earth/GOCE) · [The Benefits of Very Low Earth Orbit for Earth Observation Missions (arXiv)](https://arxiv.org/abs/2007.07699)
