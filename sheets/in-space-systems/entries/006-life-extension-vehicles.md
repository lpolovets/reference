---
number: 6
name: Life-Extension Vehicles
part: 2
group: Servicing missions
orbit: [geo]
scale: [t]
autonomy: ground
customer: [com, def]
maturity: ops
---

## Description
A life-extension vehicle is a tonne-class spacecraft that flies to a geostationary satellite with an empty tank, grips it, and does the station-keeping on its behalf. It can grip an arbitrary client because geostationary satellites all carry the same two leftovers from launch: a liquid apogee engine with an open nozzle pointing aft, and the ring that bolted the satellite to its launch vehicle adapter. Northrop Grumman's Mission Extension Vehicle begins its capture from about 80 m, closes in, pushes a probe up the apogee engine nozzle until it is inside the throat, expands the probe so it cannot pull back out, then winches the client in until stanchions seat on the adapter ring and the joint goes rigid. Neither of those features was designed as a docking port, and that is the whole trick. Once mated, the client's own propulsion stops mattering: the MEV's electric thrusters hold attitude and fly the combined stack, supplying the roughly 50 m/s per year of north-south station-keeping that lunisolar perturbations cost at geostationary altitude plus a few m/s a year east-west. At the end of the contract the servicer pushes the client to a graveyard orbit, undocks, and moves to the next one. Whether enough clients exist to make a market is covered by Satellite servicing and life extension on the space-launch-and-satellites sheet; this entry is about the mechanism and its limits.

## Strengths and weaknesses
The strength is that it works on satellites nobody planned to service. MEV-1 docked Intelsat 901 on 25 February 2020 in a graveyard orbit above the belt, brought it back down to a working slot, and served it for about five years; MEV-2 docked Intelsat 10-02 in April 2021, that time inside the GEO belt itself. Because the servicer takes over attitude control as well as translation, it also rescues a client with a failed thruster or a dead reaction wheel, not only one with an empty tank. The weaknesses are structural. One MEV serves one client at a time, so a tonne-class spacecraft is tied up delivering a few hundred m/s to a satellite of similar mass, which is an expensive way to buy delta-v. The nozzle-and-ring trick also only works where those features exist, so an all-electric bus with no apogee engine, a satellite in low orbit, or anything with hardware closing out the aft end is not a candidate. And the realistic bad outcome during an approach is a collision that destroys two satellites and salts one of the most valuable orbits in use with debris, which is why every approach is slow, ground-supervised, and rehearsed for months.

## When to use
Buy life extension when three things are true at once: the payload still has paying customers, the orbital slot is worth keeping, and propellant is the only thing that has run out. If a transponder or a power system has failed instead, extension does not help, because nothing flying today repairs electronics. Decide early. A servicer usually needs about a year of electric orbit raising to reach GEO and then more time to drift to your longitude, so this is a decision made three years before the tank empties, not a rescue. If you need more than about five or six years, buy a replacement satellite, because that is the horizon one docking or one pod covers and buying two services in sequence costs more than a new bus. For a defense customer the calculation is different and usually better: the product is sustained maneuver and the ability to relocate an asset, which is worth paying for whether or not the payload brings in revenue.

## Key numbers
MEV-1 docked Intelsat 901 on 25 February 2020, MEV-2 docked Intelsat 10-02 in April 2021 · capture initiated from about 80 m · roughly five years of service per MEV docking, up to six years per Mission Extension Pod · about 50 m/s per year of north-south station-keeping · service reported near $13M a year against $300–600M for a replacement satellite and its launch · MEV in the tonne class on a 15-year design life

## Examples
Northrop Grumman's SpaceLogistics is the only operator with paying commercial customers: MEV-1 with Intelsat 901, MEV-2 with Intelsat 10-02, and the Mission Robotic Vehicle launched on 21 July 2026 carrying three Mission Extension Pods, each rated for up to six years of orbit control once bolted to a client's apogee engine, with the robotic arms built by the Naval Research Laboratory under DARPA's RSGS program and Optus D3 announced as the first pod client. Starfish Space is the main challenger, holding a $54.5M US Space Force contract for a geostationary Otter.

## Economic profile
Public reporting put MEV-1's service near $13M a year, so five years runs to roughly $65M against $300–600M to build and launch a replacement geostationary satellite, which is 10–20% of the alternative — arithmetic done here, not a published figure. That is a good trade for the client and an awkward one for the operator, because an MEV costs a few hundred million to build and launch and can bill only one customer at a time, so the operator needs most of a 15-year design life sold to pay it back. The Mission Extension Pod architecture is the answer to that: put the expensive parts, meaning the robot arms, the sensors, and the vehicle that flies to each client, into one reusable Mission Robotic Vehicle, and make the consumable a small pod that costs a fraction of an MEV. The binding constraint is the qualifying client population, which is a few dozen satellites worldwide at any moment and shrinking as high-throughput satellites make fifteen-year-old wideband payloads uncompetitive. Defense buyers are the steadier customer because they will pay for the maneuver capability itself, and the US Space Force's $54.5M award to Starfish Space is worth more than several years of commercial life-extension revenue. What would change the unit economics is refueling: until a servicer can be refilled it is a consumable, and every mission carries the full cost of a vehicle.

## Videos

- https://www.youtube.com/watch?v=XBOQSRZSFgs — A New Satellite Is Preparing To Repair An Old Satellite (Scott Manley, 10 minutes, 100k+ views)
- https://www.youtube.com/watch?v=HSzZi6nSWdQ — The Future of Satellite Servicing in Space (Northrop Grumman, 3 minutes, 10k+ views)

## Further reading

[In-Space Servicing, Assembly, and Manufacturing (ISAM) State of Play - 2025 Edition (NASA)](https://ntrs.nasa.gov/citations/20250008988) · [Robotic Servicing of Geosynchronous Satellites (DARPA)](https://www.darpa.mil/research/programs/robotic-servicing-of-geosynchronous-satellites)
