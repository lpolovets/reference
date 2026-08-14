---
number: 3
name: Capture of Non-Cooperative Targets
part: 1
group: Proximity operations
orbit: [leo, geo]
scale: [hkg, t]
autonomy: ground
customer: [civ, def, com]
maturity: demo
---

## Description
A non-cooperative target is an object that will not help you catch it: no grapple fixture, no retroreflectors, no working attitude control, and usually no telemetry about what it is doing. What decides whether it can be caught at all is its rotation rate, because a rigid capture requires the chaser to match that rotation first and then absorb the target's angular momentum through the arm. The standard breakdown treats anything under 5 deg/s as slow tumbling, which is roughly the maximum relative rate a current robotic manipulator is expected to handle; 5 to 18 deg/s as medium; and 18 deg/s and above as fast, the rate beyond which matching the motion at all is considered very difficult. Rate matching is expensive for reasons that have nothing to do with the arm: a chaser spinning at the target's rate has its solar arrays and antennas sweeping past the Sun and the ground, so power and communications drop in and out, and its own reaction wheels saturate against a disturbance that never stops. Real targets sit across the whole range. ESA's Envisat, the roughly 8-tonne reference target for most European debris-removal work, rotates at about 2.19 deg/s with a 164.5-second period, which is slow enough to be interesting and heavy enough to be hard. Once contact happens, the momentum has to go somewhere, and since a spacecraft reaction wheel typically stores tens of newton-meter-seconds while a tumbling multi-tonne body carries hundreds, the difference comes out of thrusters and therefore out of propellant.

## Strengths and weaknesses
The case for solving this is that it is the only way to reach the objects that matter, since the derelict rocket bodies and dead satellites driving collision risk are exactly the ones nobody prepared. The problem is that every capture method has a narrow window. A manipulator with a gripper is the preferred answer when the target has a dedicated grappling feature and is stable to medium tumbling, and it becomes markedly more complex and less safe without one. Clamps around a launch adapter ring suit rocket bodies, which have few appendages to snag; nets and harpoons work from a stand-off distance and suit flat surfaces on payloads rather than curved rocket skins, but they are single-shot and a miss leaves the target spinning and the servicer with nothing. Contactless methods (ion plumes, eddy-current brakes, electrostatic tractors, laser ablation) are the only candidates above 18 deg/s and none of them has flown. The honest status of the whole category is that as of 2026 no spacecraft has captured a fully uncooperative object, and every orbital capture so far has involved a target that was either purpose-built for it or still under attitude control.

## When to use
If the target has a grapple fixture or a docking plate, use an arm, since that is the case the hardware and the flight heritage actually cover. If it is a spent upper stage with no fixture, plan on a clamp around the payload adapter ring or the interstage, because the geometry is known from the launch vehicle user's guide even when the object is not. If it is a payload with solar arrays and booms, expect the appendages, not the tumble rate, to be the constraint that kills a clamp approach. If measured rates exceed roughly 5 deg/s, budget a separate detumbling step before capture rather than assuming the arm will absorb it, and treat any concept that skips this step as unproven. Above 18 deg/s, stop planning a contact capture. And if you are building the satellite rather than chasing one, put a docking plate on it, because a few kilograms at build time is far cheaper than any of the above.

## Key numbers
Slow tumbling below 5 deg/s, the rate a current manipulator is expected to handle · medium tumbling 5–18 deg/s · above 18 deg/s rate matching considered very difficult and contact capture unproven · Envisat at about 2.19 deg/s on a 164.5-second period, roughly 8 tonnes · ADRAS-J closed to 15 m on a 3-tonne, 11 m long H-2A upper stage without capturing it · ESA's €86M ClearSpace-1 service contract, with launch now planned for 2029.

## Examples
Flown: RemoveDEBRIS fired a net and a harpoon in 2018, both at targets it carried up and released itself; Astroscale's ELSA-d magnetically captured a client satellite in 2021 that was built with a ferromagnetic docking plate, and its fully autonomous attempt was cut short by thruster problems; Northrop Grumman's MEV-1 docked to Intelsat 901's apogee engine nozzle in 2020, a satellite never designed for docking but still holding attitude; and Astroscale's ADRAS-J worked its way in on an H-2A upper stage through 2024, reaching 50 m in May, flying around it in July, and closing to 15 m in November while photographing the payload adapter fitting, without touching it. Not flown: ADRAS-J2, planned for fiscal 2027, which will try to grab that same adapter fitting with an arm; ESA's four-arm ClearSpace-1, retargeted from a Vega adapter to the 95 kg PROBA-1 satellite and now scheduled for 2029; and every contactless detumbling method proposed so far.

## Economic profile
How many objects actually need removing, and what a removal ought to cost per object, is covered on the space-launch-and-satellites sheet; the question here is whether the grab works at all. This is agency-funded work, and the buyers are visible: ESA bought ClearSpace-1 as an €86M service contract rather than a procurement, and JAXA funded ADRAS-J as Phase I of its Commercial Removal of Debris Demonstration with a capture mission to follow. The cost sits in verification more than in hardware, because contact dynamics between two free bodies in six degrees of freedom cannot be tested at full scale on the ground, so programs pay for air-bearing tables, robotic hardware-in-the-loop rigs that fly two manipulators against each other, and long simulation campaigns, and they still fly a one-shot mechanism the first time it ever meets a real target. Capture hardware is also mission-unique, since a clamp sized for one launch adapter fits nothing else, which prevents the amortization that made rendezvous sensors cheaper. The arithmetic that everyone eventually reaches is that prevention costs almost nothing by comparison: a docking plate adds a few kilograms and a small fraction of a satellite's build cost, and it moves a future client from the uncatchable column to the routine one. Astroscale sells such plates, and constellation operators buying them is a better indicator of where this market goes than any single removal contract.

## Videos

- https://www.youtube.com/watch?v=Ib-0U-7O2ho — Tackling Space Junk with a High-Tech Harpoon and Net (The Wall Street Journal, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=8zZYcC8lRqM — Nets and harpoons: how to clear up space junk | Transformative Tech (FT Tech 4.0, 2 minutes, 5k+ views)

## Further reading

[ClearSpace-1 (ESA)](https://www.esa.int/Space_Safety/ClearSpace-1) · [Space Debris Ontology for ADR Capture Methods Selection (arXiv / Acta Astronautica)](https://arxiv.org/abs/2004.08866)
