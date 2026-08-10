---
number: 23
name: Missile warning and tracking
part: 5
group: RF and infrared
orbits: [geo, meo, leo]
mass: [small, med]
buyer: [def]
maturity: service
cost: high
---

## Description
Missile warning and tracking satellites carry infrared telescopes that watch for the heat of a launch and then try to hold a track on what the launch produced. The two halves of that job are not equally hard. A boosting rocket is a very bright, very hot plume, and it is easy to detect from geostationary orbit in a narrow shortwave-infrared band where the atmosphere is opaque enough to hide most of the Earth's own glare, which is what warning satellites have done since the 1970s. Once the booster burns out the target becomes a cold body a metre or two across, tens or hundreds of times dimmer, and it has to be picked out in mid- and long-wave infrared either against the black of space or, for a hypersonic glide vehicle flying at 20–60 km, against the moving clutter of the Earth's limb. Holding that track continuously and accurately enough to hand off to an interceptor is the capability the current architecture is being rebuilt to provide, and it is why the money moved from a handful of exquisite satellites in high orbit to a large mesh in low orbit. A satellite at about 1,000 km is roughly 35 times closer to the target than one at 35,786 km, and infrared irradiance falls with the square of range, so it sees the same object about 1,300 times brighter and can do the job with a far smaller aperture.

## Strengths and weaknesses
Infrared from orbit is the only sensor that sees a launch anywhere on Earth within seconds, with no basing rights, no radar horizon, and no ambiguity about whether something lit off. The proliferated low-orbit version adds two things the old architecture lacked: enough viewing geometry to hold a maneuvering target and enough satellites that losing several does not blind the system, which matters when the assets themselves are targets. What it costs is scale. A LEO satellite sees a given point for only a few minutes, so continuous custody of a target anywhere on Earth takes on the order of a hundred spacecraft rather than six, plus optical crosslinks to move the track between them and a fire-control-quality data path to the shooter. The failure modes are track handover and false alarms. A track dropped between two satellites is worse than no track, because a partial trajectory produces a confident, wrong impact prediction, and infrared sensors sensitive enough to see a cold body also see aircraft afterburners, industrial fires, and sun glint off cloud tops, so the discrimination burden lands on processing rather than optics.

## When to use
This is not a purchase most organizations make, but the architecture choice inside it is live. Use high orbit when you want persistent stare over a hemisphere with a small number of assets and the target is a bright boosting missile: three or four geostationary satellites cover most of the globe continuously and nothing in low orbit matches that simplicity for strategic warning. Use proliferated low orbit when the target is dim, maneuvering, or both, because closing the range by a factor of 35 is worth more than any realistic aperture increase and because the mesh survives attrition. In practice the answer is both layers, which is what the US is buying: geostationary and polar satellites for strategic warning, a low-orbit tracking layer for custody and fire control, and a medium-orbit layer being added between them. If you are a supplier deciding where to compete, note that the bus is now a commodity and the infrared payload, its cryocooler, and the focal plane are not.

## Key numbers
Roughly $1.5B per SBIRS geostationary satellite against about $49M per Tranche 3 Tracking Layer satellite · 35,786 km versus about 1,000 km, so roughly 35 times the range and 1,300 times the signal · more than 60 Tranche 1 vehicles on orbit by mid-2026, most of them Transport Layer · $3.5B for 72 Tranche 3 tracking satellites awarded in December 2025 · a further $1.75B in July 2026 for 36 accelerated satellites across four planes, delivery by the end of 2028 · 104 Tranche 3 tracking satellites in total.

## Regulatory and spectrum
Nothing here goes through the FCC. These are US federal systems, so their spectrum is assigned by NTIA through the interagency process rather than licensed commercially, their ITU filings are made by the administration on the government's behalf, and their frequencies sit in military allocations that no commercial operator can buy into. That is one reason the tracking layer standardized on optical crosslinks: a laser link needs no spectrum authorization at all and cannot be jammed the way an RF link can. Export control is absolute. Infrared focal plane arrays and missile-warning sensors sit squarely on the US Munitions List, spacecraft carrying them fall under Category XV, and the resulting track data is classified, so there is no commercial resale of this product and allied access runs through government-to-government agreements rather than contracts. The practical effect on the supply base is that a company wanting into this market needs a facility, cleared staff, and an ITAR compliance program before it can quote, which is a much higher barrier than the satellite bus itself.

## Examples
SBIRS, whose geostationary satellites run around $1.5B each and which replaced the Defense Support Program, with hosted payloads in highly elliptical orbit covering the poles; Next-Generation OPIR, a program estimated at roughly $14B, with geostationary satellites from Lockheed Martin and polar payloads from Northrop Grumman. In low orbit, SDA's Tracking Layer runs from the Tranche 0 demonstrators through Tranche 1, which had more than 60 vehicles on orbit by mid-2026 across both its transport and tracking halves, and Tranche 2, to the Tranche 3 awards to Lockheed Martin, Rocket Lab, Northrop Grumman, and L3Harris in December 2025 and the accelerated award of $955M to L3Harris and $798M to Sierra Space in July 2026. The Missile Defense Agency's HBTSS prototypes, built by L3Harris and Northrop Grumman and launched in February 2024, were the specific test of whether a low-orbit sensor can produce a track good enough to guide an interceptor. A medium-orbit layer is now being added on top of both.

## Economic profile
This is the clearest case in the sheet of a procurement model changing the industry underneath it. The traditional path was a cost-plus development contract with one prime, a decade of schedule, and unit costs above a billion dollars, which produced excellent satellites and very few of them. SDA buys instead through fixed-price other transaction agreements, two or more vendors per tranche, and two-year build cycles, which has pulled in suppliers that would never have won a classical missile-warning program and pushed the unit price to around $49M. The consequence for anyone building a business here is that revenue is recurring by construction: a low-orbit constellation with a five-year design life needs replacing continuously, so tranches are a standing order rather than a one-time buy, and Golden Dome has made that order larger. The risks are the ones that come with any single-customer defense business — the tranche cadence depends on annual appropriations, fixed-price agreements move schedule and cost risk onto the supplier, and a program restructure can strand a production line that was sized for a rate nobody now wants.

## Videos

- https://www.youtube.com/watch?v=qSoepoVfB7U — How America Detects Every Missile Launch On Earth (Sam Eckholm, 18 minutes, 1m+ views)
- https://www.youtube.com/watch?v=mDTnl4E9FiY — SBIRS Mission Overview - Lockheed Martin (Matthew Travis, 1 minute, 50k+ views)

## Further reading

[Hypersonic Missile Defense: Issues for Congress (Congressional Research Service)](https://www.everycrsreport.com/reports/IF11623.html) · [Missile Warning Satellites: Space Development Agency Should Be More Realistic and Transparent About Risks to Capability Delivery (GAO)](https://www.gao.gov/products/gao-26-107085)
