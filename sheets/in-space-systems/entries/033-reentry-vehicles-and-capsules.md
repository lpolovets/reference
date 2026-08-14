---
number: 33
name: Reentry Vehicles and Capsules
part: 7
group: Return & disposal
orbit: [leo, cis]
scale: [hkg, ht]
autonomy: auto
customer: [civ, com, def]
maturity: ops
---

## Description
A reentry vehicle turns orbital kinetic energy into heat in the air ahead of it and keeps the rest out of the structure. Entry interface is conventionally taken at 400,000 ft (122 km), and the speed at that point sets the whole problem: a return from low Earth orbit crosses it near 7.8 km/s, and a return from the Moon near 11 km/s. Convective heating at the stagnation point scales roughly with the cube of velocity, so the step from Gemini's 7.9 km/s to Apollo's 11.1 km/s raised the heating environment about fourfold rather than by 40%. Apollo 4 flew that case in November 1967, entering at 11.14 km/s and measuring a peak heating rate of 425 Btu/ft²-s (about 480 W/cm²) and a total load of 37,522 Btu/ft² (about 43 kJ/cm²), against 164 Btu/ft²-s and 6,889 Btu/ft² on the first test flight, AS-201, which entered at 8.07 km/s. The shape that makes this survivable is blunt, because a detached bow shock standing off a domed face puts most of the energy into the air instead of the vehicle. The remaining freedom is the entry corridor: too shallow and the vehicle skips back out, too steep and deceleration exceeds what the crew and the structure will take. Apollo sized its heat shield against exactly those two bounding trajectories, with the steep boundary fixed by a 20 g biomedical limit, and Artemis I flew the modern version of the same case, crossing 400,000 ft at 10.99 km/s and a flight path angle of -5.66 degrees, skipping back up to 87.6 km, and steering 3,177 nautical miles to its splashdown target.

## Strengths and weaknesses
A capsule is the cheapest shape that works: no wings, no landing gear, and one heat shield geometry to qualify, which is why every crewed vehicle flying today is one. Zero-lift ballistic entry is the robust fallback, because it needs no guidance and no working attitude control, but peak deceleration runs around 8–9 g and the landing point can be hundreds of kilometers off target; Soyuz has reverted to it in flight more than once. Offsetting the center of gravity so the capsule trims at an angle of attack buys a lift-to-drag ratio near 0.3, which cuts peak deceleration to roughly 4 g from low orbit and 6–7 g on a lunar return and lets guidance fly to a point, and Apollo 4 landed within 10 miles of its predicted spot after 1,951 nautical miles of entry range. The cost of that is a vehicle depending on a working inertial unit and reaction control system, so the graceful-degradation path is back to ballistic with the g-load and dispersion that implies. The heat shield itself has no redundancy and no abort once entry begins, which is why qualification, not manufacturing, dominates a capsule program. Water landing adds a recovery fleet, which is a standing operating cost rather than a one-time one.

## When to use
If you need to bring people or hardware back intact, start with a capsule and leave it only for a requirement it cannot meet. If the payload cannot take 8–9 g, or you need a runway landing, look at a lifting body such as Dream Chaser and expect to pay for wings, landing gear, and a much larger area of thermal protection. If the return is from beyond low orbit, do not scale a low-orbit heat shield up; size it against the lunar case from the start, because the heating environment is several times worse and entry 34 covers how the material choice changes with it. If your requirement is downmass rather than a particular landing site, accept a ballistic entry and a wide dispersion, since that removes the guidance system and most of the qualification cost. If you are flying commercially from the United States, put the FAA reentry license under Part 450 on the schedule early, because several operators have said the review takes longer than they planned for. Before committing to any of it, check who buys the return trip, because outside NASA's resupply contracts the demand for downmass is currently a few hundred kilograms a year.

## Key numbers
Entry interface at 400,000 ft (122 km) · about 7.8 km/s returning from low orbit against about 11 km/s from the Moon · Apollo 4 peak heating 425 Btu/ft²-s (480 W/cm²) and 37,522 Btu/ft² total (43 kJ/cm²) · L/D near 0.3 cuts peak deceleration from 8–9 g ballistic to roughly 4 g from low orbit and 6–7 g on a lunar return · Apollo's 20 g undershoot limit on the entry corridor · Artemis I at 10.99 km/s and -5.66 degrees, skipping to 87.6 km · Cargo Dragon returns roughly 2,500–3,000 kg per flight

## Examples
Soyuz has been bringing crews home since 1967 and still lands its descent module under parachutes and retrorockets in Kazakhstan; SpaceX's Crew and Cargo Dragon have been the only vehicles returning significant cargo from the ISS since the Shuttle retired in 2011; Orion flew the lunar case on Artemis I in December 2022; Boeing's Starliner and China's Shenzhou use the same architecture. At the small end, Stardust's sample capsule entered at 12.9 km/s in January 2006, the fastest Earth entry flown, and Varda Space Industries recovered its first W-series capsule at the Utah Test and Training Range in February 2024.

## Economic profile
Capsule programs are dominated by development and qualification rather than by unit cost. NASA's 2014 Commercial Crew awards were $2.6B to SpaceX and $4.2B to Boeing for one vehicle each, and most of that went into structural, thermal, and abort qualification rather than into building flight articles. Reuse helps only if the heat shield and the structure can be checked quickly, so an ablative shield replaced between flights is often cheaper in practice than a reusable one inspected piece by piece, which is the argument in entry 34. The revenue side is the weak part. Downmass is the one thing only a reentry vehicle provides, and the buyer is almost entirely NASA: two or three Cargo Dragon returns a year at roughly 2,500–3,000 kg each, under resupply contracts priced near $130M a mission. Retiring the ISS removes most of that demand, so the commercial case rests on in-space manufacturing sending back small high-value payloads, and that has to cover a dedicated capsule plus a recovery operation for a few kilograms of product. Defense demand is separate and steadier, because a vehicle that can return from orbit on short notice to a chosen point is a capability a defense customer will fund whether or not a cargo market exists.

## Videos

- https://www.youtube.com/watch?v=HgTNzDCc0gk — Ballistic Reentry vs Aerodynamic Reentry (Scott Manley, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=Sx-SZt-e02c — Talk Techy: How Do You Use Physics to Re-Enter Earth’s Atmosphere? (Lockheed Martin, 4 minutes, 10k+ views)

## Further reading

[Commercial Space Launch and Reentry Regulations: Overview and Select Issues (Congressional Research Service)](https://www.everycrsreport.com/reports/R48582.html) · [Orion Artemis I Entry Performance (NASA)](https://ntrs.nasa.gov/citations/20240000024)
