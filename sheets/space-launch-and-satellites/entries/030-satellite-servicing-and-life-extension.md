---
number: 30
name: Satellite servicing and life extension
part: 7
group: Servicing
orbits: [geo, leo]
mass: [med]
buyer: [com, def]
maturity: emerging
cost: high
related: [in-space-systems#life-extension-vehicles]
---

## Description
Satellite servicing means flying a spacecraft up to another one and doing something useful to it. Almost every candidate client was built decades before anyone planned to service it, so there is no docking port, no grapple fixture, and no cooperative navigation aid. The trick that made it work is that geostationary satellites share two features by construction: a liquid apogee engine with an open nozzle at the aft end, and a launch vehicle adapter ring around it. Northrop Grumman's Mission Extension Vehicle inserts a probe into the apogee engine nozzle throat, expands it to grip, and pulls itself down onto the ring, which gives a rigid mechanical connection to a satellite that was never designed to offer one. Once attached, the servicer takes over station-keeping and attitude control for the combined stack, so the client's exhausted propellant stops being the thing that ends its life. The newer approach separates the two functions: a Mission Robotic Vehicle with robotic arms carries small Mission Extension Pods, installs one on each client, and moves on, so one expensive robot serves many clients instead of one servicer being consumed per satellite.

## Strengths and weaknesses
The value is easy to state. A geostationary satellite usually dies with a working payload and an empty tank, and replacing it costs $300–600M including launch, more for a high-throughput satellite, plus three years of build time, so buying six more years for tens of millions is a good trade whenever the payload is still worth operating. Docking is also demonstrated rather than theoretical, which puts this ahead of everything else in this part of the sheet. The weaknesses are the client population and the operation itself. Most aging geostationary satellites are aging commercially as well as physically: a fifteen-year-old wideband transponder payload competes against high-throughput satellites carrying hundreds of gigabits, so extending it prolongs an asset that is already losing. And the docking is genuinely hard. The servicer closes on a client that is drifting and slowly tumbling, with no cooperative markers, and the failure mode is not a missed approach but a collision that destroys two satellites and salts a valuable orbital slot with debris. That risk is why every step so far has been slow, ground-supervised, and heavily rehearsed.

## When to use
Life extension is worth buying when three conditions hold at once: the payload still sells, the orbital slot is worth keeping, and propellant is the only thing that has run out. If the payload is obsolete, extension is money spent to keep a bad asset alive and a replacement is the right answer. If the satellite has a failed component rather than an empty tank, extension does not help either, since nothing on offer today repairs electronics. Check the timing too, because a servicing vehicle typically needs a year to climb to GEO and then time to reach each client, so this is a decision made three or more years before the fuel runs out, not a rescue. For defense customers the calculation is different and often better: the product being bought is inspection, relocation, and the ability to keep a maneuvering asset maneuvering, and that has value independent of the client's commercial revenue.

## Key numbers
MEV-1 docked Intelsat 901 in February 2020 and MEV-2 followed in 2021, each on a fixed multi-year term · the Mission Robotic Vehicle launched 21 July 2026 carrying three Mission Extension Pods, with about a year of orbit-raising ahead of it · each pod adds at least six years of life to a roughly 2,000 kg geostationary satellite · life extension in the tens of millions against $300–600M for a replacement satellite and its launch · $54.5M for a US Space Force geostationary servicing vehicle covering at least five years of operation.

## Regulatory and spectrum
Servicing runs into the same US mission-authorization gap as orbital transfer: no agency licenses on-orbit operations as such, so the FCC's space station license and its debris and disposal conditions become the effective approval, and NOAA gets involved when the servicer carries cameras that image other spacecraft. Regulation has visibly shaped the product. The Mission Extension Pod is designed as a customer-owned, customer-controlled propulsion module, which means once installed it becomes part of the client's licensed spacecraft rather than a separate operator's asset flying in formation, and that avoids a set of licensing and liability questions that would otherwise have to be answered. The orbital slot and its ITU rights stay with the client operator throughout, since the servicer is providing propulsion and not taking over the frequency assignment. The bigger unsettled area is rendezvous and proximity operations, where there are no international rules at all: nothing prohibits approaching another operator's satellite uninvited, several such approaches by state actors have caused diplomatic complaints, and the industry's own norms of behavior are voluntary. Export control binds who can service whom, since docking with a foreign-owned satellite involves controlled technical data.

## Examples
Northrop Grumman's SpaceLogistics is the only company with a servicing track record: MEV-1 docked Intelsat 901 in February 2020, the first docking with a satellite not designed for it, MEV-2 docked a second Intelsat spacecraft in 2021, and the Mission Robotic Vehicle launched on a Falcon 9 on 21 July 2026 with three Mission Extension Pods and robotic arms developed under a DARPA program, with NASA supplying software and simulation support. Optus is the announced pod customer for its D3 satellite, launched in 2009. Starfish Space is the main challenger, with a $54.5M US Space Force contract for a geostationary Otter and further Otter missions planned for NASA and Intelsat, but its Otter Pup 2 demonstrator shows how slow this is in practice: launched in June 2025, it lost its original docking partner in late 2025, was retargeted in March 2026 at Gilmour Space's ElaraSat, and had still not docked more than a year after launch. NASA's own OSAM-1 servicing mission was canceled in 2024 after years of cost growth.

## Economic profile
The first real market is geostationary life extension, and it is small. Public reporting put the MEV-1 service near $13M a year, which is excellent value against a $300–600M replacement, but the number of clients that qualify at any moment is a few dozen worldwide and shrinking as high-throughput satellites make old payloads uncompetitive. The pod architecture is the industry's answer: spreading one robot's cost across many small, cheap pods improves the unit economics enough that a client with a modest remaining revenue stream can justify it. The larger and more likely market is government. Defense buyers will pay for inspection, relocation, and sustained maneuver in geostationary orbit for reasons that have nothing to do with a payload's revenue, and that is where the funded contracts are. For this category to become a real business rather than a demonstration program, three things have to happen: the MRV has to install a pod robotically and prove one servicer can handle many clients, the per-client cost has to fall to single-digit millions, and refueling has to arrive, because until a servicer can be refilled it is itself a consumable and every mission carries its own vehicle cost.

## Videos

- https://www.youtube.com/watch?v=hieqTEaEBQo — Next Generation of Satellite Servicing Products: Mission Robotic Vehicle and Mission Extension Pods (Northrop Grumman, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=369DZc2mKo0 — Northrop Grumman robot docks with satellite to extend its mission (VideoFromSpace, 1 minute, 10k+ views)
- https://www.youtube.com/watch?v=fNrImKIAsCs — MEV Mission Profile (Northrop Grumman, 2 minutes, 1k+ views)

## Further reading

[In-Space Servicing, Assembly, and Manufacturing (ISAM) State of Play, 2025 Edition (NASA)](https://ntrs.nasa.gov/citations/20250008988) · [In-Space Servicing, Assembly, and Manufacturing: Benefits, Challenges, and Policy Options (GAO)](https://www.gao.gov/products/gao-25-107555)
