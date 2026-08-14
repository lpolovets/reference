---
number: 1
name: Rendezvous and Proximity Operations
part: 1
group: Proximity operations
orbit: [leo, geo, cis]
scale: [hkg, t]
autonomy: auto
customer: [civ, def, com]
maturity: ops
---

## Description
Rendezvous and proximity operations means flying one spacecraft up to another and holding it there without hitting it. Orbital mechanics makes the intuitive approach wrong: thrusting forward raises your orbit and slows you down, so a chaser closes on its target by flying below it and letting the shorter orbit period do the work. The drift is worth memorizing, because it sets every timeline. A chaser one kilometer lower gains about 9.4 km of along-track distance per orbit, since the along-track drift over one revolution is 3π times the altitude difference. ESA's ATV was injected roughly 100 km below the International Space Station, phased up to a waypoint 39 km behind and 5 km below it, and then flew a sequence of ground-authorized hold points down to contact at 7 cm/s with 1.5 cm accuracy. The last stretch is flown inside a cone centered on the target's docking axis: Shuttle approaches used an 8-degree corridor that tightened to 5 degrees, with hold points where the vehicle could stop and wait for sunlight, a ground station pass, or a decision from the crew. Everything is built around one rule, called passive safety. At every point on the approach, if the vehicle stopped maneuvering entirely, its unforced motion has to stay outside the keep-out volume for the next 24 hours.

## Strengths and weaknesses
Passive safety is nearly free to design in, because it is a choice about where to put the waypoints rather than hardware you have to buy, and it converts the worst realistic failure from a collision into a slow drift-away. That is why ISS approaches are routine now instead of exceptional. What it costs is time and propellant. Hold points, lighting constraints, and the requirement to be in view of a ground station stretch a rendezvous that is physically achievable in one orbit into hours or days, and the vehicle has to carry propellant for retries it will usually not need. The rule also only covers the failures that were modeled, and the case that breaks it is a thruster that fires and stays on, which no amount of trajectory design will make passively safe. The answer is separate hardware: ATV carried a collision-avoidance sequence on a control chain fully independent of its main navigation system, so a fault in the primary computer could not disable the escape. The target pays too, because a station has to hold a specified attitude and stop maneuvering during the approach window.

## When to use
If the target is attitude-controlled and carries retroreflectors or a docking target, approach along the R-bar from below, since gravity gradient decelerates you and you spend less propellant braking and put less thruster plume on the target's solar arrays. If plume impingement is not a concern and you want a shorter approach, a V-bar approach along the velocity vector is simpler to fly but needs active braking the whole way. In GEO, hold station on a natural-motion safety ellipse rather than a fixed offset, because the relative motion carries you around the target with no station-keeping burns and a stuck thruster leaves you circling instead of closing. If the target is a crewed station you do not get to design your own approach rules, so budget from the start for the visiting-vehicle requirements, including an abort path on independent hardware. If the target is tumbling and has no cooperative aids, the assumptions here stop holding and the problem becomes the one in entry 3.

## Key numbers
Along-track drift of about 9.4 km per orbit per km of altitude difference · ATV phasing waypoint 39 km behind and 5 km below the ISS · 8-degree approach corridor narrowing to 5 degrees on Shuttle approaches · contact at 7 cm/s to 1.5 cm accuracy · passive safety required for 24 hours after an abort · roughly 58 m/s to close a 100 km altitude gap (derived here, not published).

## Examples
The Shuttle program approved the direct +R-bar approach in April 1994, first flew it on STS-66 that November, and used it for every Mir docking, with rendezvous and docking on flight day 3. ATV flew five fully automated approaches to the ISS between 2008 and 2014 using relative GPS and an independent collision-avoidance system; Soyuz and Progress now use a two-orbit profile that reaches the station about three hours after launch; and Northrop Grumman's MEV-1 ran the same discipline in GEO in 2020, approaching Intelsat 901 on a slow, ground-supervised profile.

## Economic profile
The cost of rendezvous is not in the hardware. A lidar and a camera set are tens of kilograms and tens of watts on a vehicle that weighs a tonne or more, and the money goes into guidance software, the Monte Carlo and hardware-in-the-loop campaigns that qualify it, and the flight controllers who staff the approach. Propellant is the other line item, and most of it goes into the climb rather than the docking. Closing ATV's 100 km altitude gap costs about 58 m/s, which is half the orbital speed times the fractional change in orbit radius (7.75 km/s ÷ 2, times 100 km / 6,690 km); that arithmetic is done here rather than looked up. On top of it sits the reserve held for aborts and retries, which is mass that would otherwise have been cargo. Almost all of it is paid by agencies today: NASA's first Commercial Resupply Services contracts were $1.6B to SpaceX for 12 missions and $1.9B to Orbital Sciences for 8, roughly $130M and $240M per delivery, and rendezvous is the capability that turns a launch into a delivery. The cost falls with repetition rather than with technology, since the ISS visiting-vehicle requirements are published and the fifth vehicle to meet them spends far less on verification than the first. The commercial version of this question is being reopened in GEO, where a servicer that can approach a satellite it did not design is selling the approach itself rather than the payload it carries. What that service costs and whether enough customers exist is covered at the mission level on the space-launch-and-satellites sheet.

## Videos

- https://www.youtube.com/watch?v=oNXPtZDS-cg — Getting to the Space Station - Rendezvous (Simply Space, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=HF14xENadeg — Rendezvous and Proximity Operations Fundamentals - Tech Talk (Ansys Government Initiatives (AGI), 18 minutes, 10k+ views)

## Further reading

[History of Space Shuttle Rendezvous (NASA Johnson Space Center)](https://ntrs.nasa.gov/citations/20110023479) · [ATV flight phases (ESA)](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/ATV/ATV_flight_phases)
