---
number: 5
name: Robotic Arms and Manipulators
part: 1
group: Interfaces & mechanisms
orbit: [leo, geo, cis]
scale: [hkg, t]
autonomy: tele
customer: [civ, def]
maturity: ops
---

## Description
A space manipulator is a long, slow, very strong arm that moves payloads, holds spacewalkers, grapples arriving cargo vehicles, and increasingly does fine work with tools. Canadarm2 is the reference design: 17 m long, 1,497 kg, seven degrees of freedom with three joints in the shoulder, one in the elbow and three in the wrist, and every joint able to turn 270 degrees in each direction. It has an identical Latching End Effector at both ends, so either end can be the base, and it walks end-over-end across the station by latching onto power data grapple fixtures that supply it with power, a data connection and video. It handles loads up to 116,000 kg, which sounds impossible for a 1.5-tonne arm until you notice the speeds: 37 cm/s unloaded, 15 cm/s carrying a load while supporting a spacewalk, and 2 cm/s carrying a load under ground control. Nothing has weight up there, so what the joints have to do is arrest momentum rather than hold up a mass, and moving 116,000 kg at 2 cm/s gives 2,320 kg·m/s, which takes only about 230 N at the tip to stop over ten seconds (that arithmetic is done here, not published). The other thing that separates a modern arm from the original 410 kg, six-degree-of-freedom Shuttle Canadarm is sensing: force-moment sensors give Canadarm2 a sense of touch and let it back off when it feels something it should not, and it runs automatic collision avoidance against a model of the station.

## Strengths and weaknesses
An arm is the general-purpose option, which is why it survives: one Canadarm2 berths cargo vehicles, moves spacewalkers, carries Dextre for fine work, and has been repaired in orbit twice, once when a wrist roll joint was replaced in 2002 and again when both end effectors were swapped out in 2017 and 2018. The costs are mass, power, and delay. At 1,497 kg an arm of that class is more than half the dry mass of a typical commercial servicing vehicle, which is why free-flying servicers carry arms of a few meters and tens of kilograms instead. Delay is the harder constraint: reflecting contact forces back to a ground operator, which is what would make an arm feel like a hand tool, becomes unstable at even small round-trip delays, so ground control falls back to supervisory or model-mediated schemes where the operator sets goals and the arm executes them. The penalty is measurable. In a controlled test of a teleoperated cutting task, a 4-second delay cut the mean speed from 2.04 mm/s to 1.76 mm/s and raised the path error from 0.92 mm to 1.44 mm, and Canadarm2's own loaded speed drops from 15 cm/s with spacewalkers helping to 2 cm/s under ground control.

## When to use
If the object you need to grab has a grapple fixture, use an arm, because that is the case forty years of flight heritage actually covers: the end effector closes snare wires around a known pin, the fixture tells the arm where it is, and it also supplies the power and data the arm needs. If the surface is unprepared, budget for machine vision, force-torque sensing, and compliance control, and expect the gripper to be built for one specific feature such as a launch adapter ring or an engine nozzle rather than being general. If the task is a single mating operation you will repeat, a purpose-built mechanism beats an arm on mass, power, and risk, so do not put an arm on a vehicle whose only job is to dock. If the operator will be on the ground with seconds of round-trip delay, design the task as a sequence of autonomous steps with defined abort conditions rather than as continuous joystick control, and plan on a fraction of the speed a crew member would achieve. If crew are present and can supervise directly, you get roughly seven times the loaded speed for free.

## Key numbers
Canadarm2 at 17 m, 1,497 kg, seven degrees of freedom, joints turning 270 degrees each way · payloads up to 116,000 kg · tip speed 37 cm/s unloaded, 15 cm/s loaded during spacewalks, 2 cm/s loaded under ground control · the original Canadarm at 15 m, 410 kg, six degrees of freedom and no force sensing · a 4-second delay slowing a teleoperated cut from 2.04 to 1.76 mm/s and raising path error from 0.92 to 1.44 mm · roughly 230 N at the tip to arrest 116 tonnes in ten seconds (derived here).

## Examples
Canadarm2 and Dextre on the ISS, joined by the European Robotic Arm on the Russian segment and the Japanese JEM remote manipulator on Kibo; the original Canadarm, first flown in 1981 and used through the end of the Shuttle program; and Canadarm3 for Gateway, at 8.5 m and an estimated 715 kg, designed to run primarily autonomously because the crew will usually not be there. The heritage point for free-flying servicers is JAXA's ETS-VII in 1997, a 2,860 kg pair of satellites in a 550 km orbit and the first uncrewed spacecraft to carry a robotic arm. It docked its chaser to its target three times under automatic and remote-piloted control, and it did the first space robot work teleoperated from the ground through a relay satellite, including handling small parts and a propellant replenishment experiment. Orbital Express followed in 2007, and Northrop Grumman's Mission Robotic Vehicle, launched in 2026 with arms developed under a DARPA program, is the current commercial case.

## Economic profile
Space robotics is unusual in that the price is negotiated between agencies rather than set by a market: Canada has supplied ISS and now Gateway robotics for decades in exchange for astronaut flights and research access, MDA builds the hardware, and the Canadian Space Agency is the customer. Inside the arm, cost concentrates in the joints, each of which is a motor, a gear stage, a brake, redundant windings, and position sensing qualified for radiation and for thermal cycling between sunlight and deep space, and then in the requirement that every module be replaceable on orbit, which adds connectors, latches, and mass to a part that would otherwise be bolted in. That design choice paid off, since Canadarm2 has now outlived two of its own joints and both of its hands. The commercial servicing market inverts the whole calculation, because a 1,497 kg arm cannot fly on a two-tonne servicer, so the product people are actually building is a two- to three-meter arm weighing tens of kilograms with a mission-specific gripper. That arm gets cheap the same way rendezvous software does, by flying repeatedly on the same vehicle design, and the operator that flies ten servicing missions with one arm design will have a cost structure nobody funding a one-off demonstration can match.

## Videos

- https://www.youtube.com/watch?v=fGywjAwWNKA — Oh, Canadarm - Why NASA Calls On Canada for Robot Arms IN SPACE (Scott Manley, 16 minutes, 100k+ views)
- https://www.youtube.com/watch?v=WZQakb1uEYg — How Canadarm Grabs - Grapple Fixtures and Latching End Effectors (Simply Space, 4 minutes, 10k+ views)

## Further reading

[Canadarm, Canadarm2, and Canadarm3 – A comparative table (Canadian Space Agency)](https://www.asc-csa.gc.ca/eng/iss/canadarm2/canadarm-canadarm2-canadarm3-comparative-table.asp) · [Teleoperation and Visualization Interfaces for Remote Intervention in Space (NASA Goddard Space Flight Center)](https://ntrs.nasa.gov/citations/20210018087)
