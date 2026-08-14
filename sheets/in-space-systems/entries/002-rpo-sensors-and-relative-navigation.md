---
number: 2
name: RPO Sensors and Relative Navigation
part: 1
group: Proximity operations
orbit: [leo, geo, cis]
scale: [kg, hkg]
autonomy: auto
customer: [civ, def, com]
maturity: ops
---

## Description
Relative navigation is the chain of sensors that tells a chaser where the target is, and no single sensor covers the whole approach. It starts with GPS: both vehicles fix themselves to roughly ten meters, exchange those fixes over a direct radio link, and difference them, which cancels most of the common error and gives a relative position good to a meter or better from tens of kilometers in. ESA's ATV flew this way down to 249 m, then handed over to a videometer that pulsed a laser at retroreflectors on the Russian docking port and a telegoniometer that measured bearing, and closed the last stretch at 7 cm/s to 1.5 cm accuracy. Outside low Earth orbit, or against a target with no GPS receiver, the chain instead runs camera to lidar to camera again: a visible camera gives bearing only from hundreds of kilometers, a lidar gives range and then a three-dimensional point cloud from a few kilometers in, and inside roughly 50 m the job becomes six-degree-of-freedom pose estimation, which means matching a model of the target to what the sensor sees. NASA's Raven experiment flew exactly this stack on the ISS from 2017, carrying a visible camera, a long-wave infrared camera at 8–14 µm, and a flash lidar that pulses a 1572 nm laser and times the return on a 256 by 256 detector array at up to 30 Hz, all on a two-axis gimbal. Over two years it watched about 50 approaches and departures by Progress, Soyuz, HTV, Cygnus and Dragon, running model-based pose estimation on camera imagery and iterative closest point matching on the lidar point cloud, and fusing both in a navigation filter.

## Strengths and weaknesses
Against a cooperative target the problem is close to solved, because retroreflectors and a published docking target turn pose estimation into geometry with known landmarks, and the accuracy needed at contact is not extreme: the International Docking System Standard accepts 0.10 m of lateral misalignment and 4 degrees of angular error at first touch. Against an uncooperative target every one of those aids disappears and the sensor has to work out both what the object is and where it is. Lighting is the first problem, since a low Earth orbit spends roughly a third of every 90-minute revolution in eclipse and a passive camera sees nothing there, which is why Raven carried an infrared camera that images the target's own thermal emission and a lidar that supplies its own light. Glare is the second, because multi-layer insulation is specular and crumpled, so a camera looking at a sunlit satellite gets moving highlights rather than stable features. The third is that the machine learning methods that do best on this problem are trained on synthetic renderings and lose accuracy on real imagery, a gap that is the main obstacle to flying them.

## When to use
If both vehicles are yours and both carry GPS receivers, use relative GPS for everything outside a few hundred meters, because it is cheap, works in eclipse, and needs no line of sight. If you are approaching a target you did not build, plan on a lidar, since it is the only sensor that gives range directly and works regardless of sun angle, and accept that it will be the most expensive item in the suite. Add a thermal camera if any part of the approach happens in eclipse and you cannot afford to wait for sunrise, and add a visible camera regardless, because operators want to see what the vehicle sees. Do not plan a mission around monocular pose estimation on an unknown target unless you can tolerate losing the solution and backing out, since the published accuracy figures come from synthetic test sets. Above GEO or in cislunar space, GPS is not available at all, so the chain starts at the camera and the whole budget shifts onto optical.

## Key numbers
GPS fixes to roughly 10 m each, differenced to a meter or better relative · ATV handover from relative GPS to optical at 249 m · contact at 7 cm/s to 1.5 cm accuracy · IDSS capture envelope of 0.10 m lateral and 4 degrees at first contact · Raven flash lidar at 1572 nm on a 256 by 256 array at up to 30 Hz, plus an 8–14 µm infrared camera · about 50 ISS approaches and departures observed over two years.

## Examples
ATV's videometer and telegoniometer pair, flown five times to the ISS between 2008 and 2014; NASA Goddard's Raven, hosted on the ISS ExPRESS Logistics Carrier as part of STP-H5 from 2017; the TriDAR scanning lidar flown as a Shuttle detailed test objective; Astroscale's ADRAS-J, which switched from angles-only navigation to model-matching navigation as it closed on an H-2A upper stage in 2024; and Starfish Space's Otter, which navigates on cameras and software rather than carrying a lidar.

## Economic profile
Cameras are cheap and lidar is not, and that single split drives the sensor budget. A visible or thermal camera can be a modified commercial part, which is what Raven did, reusing flight-spare cameras and a flight-spare flash lidar alongside a commercial infrared camera and gimbal to hold the cost of a technology demonstration down. A space-qualified lidar is a different item: it carries a pulsed laser whose lifetime is counted in shots, radiation-tolerant timing electronics, and a detector array with almost no commercial equivalent, and the supplier base is a handful of companies. NASA's response was to write a common sensor specification in 2014 and fund industry to build to it, on the argument that one specification amortized across servicing, asteroid capture, and landing missions removes the non-recurring engineering that each mission was otherwise paying separately. The commercial bet running against that is software: if pose estimation on a plain camera becomes reliable enough, the lidar comes off the vehicle and the capability moves into code that costs nothing to copy onto the next spacecraft. That bet has not been settled, and the reason is the synthetic-to-real gap rather than anything about the cameras.

## Videos

- https://www.youtube.com/watch?v=TuMwSdbwGQM — Tech on Deck: Raven (Ep. 4) (NASA's Exploration and In-space Services, 5 minutes, under 1k views)

## Further reading

[Raven: An On-Orbit Relative Navigation Demonstration Using International Space Station Visiting Vehicles (NASA Goddard Space Flight Center)](https://ntrs.nasa.gov/citations/20150002731) · [A Survey on Deep Learning-Based Monocular Spacecraft Pose Estimation: Current State, Limitations and Prospects (arXiv)](https://arxiv.org/abs/2305.07348)
