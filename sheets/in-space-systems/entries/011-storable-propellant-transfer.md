---
number: 11
name: Storable Propellant Transfer
part: 3
group: Propellant transfer
orbit: [leo, geo]
scale: [hkg, t]
autonomy: ground
customer: [civ, def, com]
maturity: ops
---

## Description
Storable propellants are the ones that stay liquid at ordinary spacecraft temperatures with no cooling: hydrazine, MMH, the nitrogen tetroxide oxidizers, and green monopropellants such as high-test peroxide. Moving them between two docked spacecraft is a plumbing and interface problem rather than a fluid mechanics problem. The propellant is already held at the tank outlet by a diaphragm, a bellows, or a surface-tension propellant management device that was fitted for the engine feed system, so it does not have to be settled first; pressurant gas or a pump drives it through a mated coupling into the receiver, and the receiver vents its own ullage gas to make room. The difficult parts are the joint and the bookkeeping: mating two halves of a coupling in vacuum without spilling a toxic fluid, leak-checking the joint before the valves open, and knowing how much propellant actually moved when there is no gravity to make a fuel gauge work. This has been done many times. Russian Progress vehicles have transferred propellant to a station since Salyut 6 in 1978 and have kept the ISS supplied since 2000, at roughly 850 kg of propellant per flight; the Shuttle's Orbital Refueling System moved hydrazine between two tanks six times on STS-41G in 1984; DARPA's Orbital Express transferred hydrazine from the ASTRO servicer to the NEXTSat client at about 492 km in 2007; and in 2025 China's Shijian-25 reportedly docked with Shijian-21 in geostationary orbit and transferred about 142 kg of hydrazine.

## Strengths and weaknesses
The strength is that the fluid itself is undemanding. Hydrazine sits at a low vapor pressure at room temperature, so a sealed line holds it for years, there is no chilldown, no boiloff, and no reason the transfer has to be quick. That is also what makes a storable depot conceivable: propellant launched in 2026 is still propellant in 2031. The weaknesses are handling and measurement. Hydrazine and NTO are toxic and corrosive, so a leak at the coupling contaminates both spacecraft, and active leak monitoring at the interface during a transfer is a real gap, with the ISS ammonia leak detector the only flown hardware that does anything like the job. Quantity gauging is the other one, since propellant mass in a microgravity tank is inferred from pressure, temperature, and integrated flow rather than measured, which matters when someone is buying by the kilogram. And most satellites already in orbit carry a fill-and-drain valve that was safety-wired shut on the ground and never meant to be reopened by a robot.

## When to use
If you are moving propellant to a spacecraft designed to receive it, treat storable transfer as an integration job, not a research program: the subsystems are mature, and industry gap assessments put what is left in leak detection, gauging, high-pressure compressors, and liquid-free venting rather than in the transfer itself. Fit a standard port at build time (see the refueling interfaces entry) instead of expecting a robot to defeat a safety wire; the robotic route works, and NASA's Robotic Refueling Mission demonstrated every step of it on the ISS, but it adds an arm, a tool set, and hours of teleoperation to a task a port reduces to minutes. If the propellant is liquid oxygen, methane, or hydrogen, none of this carries over, and you should read the cryogenic transfer entry instead, because the fluid mechanics change completely. If the goal is a small delta-v top-off on a satellite you have not launched yet, do the arithmetic first, because launching the extra propellant with the spacecraft is usually cheaper than buying it in orbit. Whether refueling beats replacing a satellite at all is the mission-level question, and the `space-launch-and-satellites` sheet covers it.

## Key numbers
Roughly 850 kg of propellant per Progress flight to the ISS · station refueling in continuous use since Salyut 6 in 1978 · six hydrazine transfers on the Shuttle's Orbital Refueling System in 1984 · Orbital Express transferred hydrazine between two free flyers at about 492 km in 2007 · about 142 kg reportedly moved between Shijian-25 and Shijian-21 in GEO in 2025 · 50 kg of hydrazine planned for the first Tetra-5 transfer · 1.7 liters of ethanol moved by RRM-1 in 2012.

## Examples
Russian Progress and ESA's ATV refueling the ISS; DARPA's Orbital Express in 2007, using VACCO's refueling coupler between ASTRO and NEXTSat; NASA's Robotic Refueling Mission 1 and 2 on the ISS, which cut lock wire, removed a safety cap, and pumped 1.7 liters of ethanol into a mock tank; Orbit Fab's Tanker-001 Tenzing depot; the US Space Force's Tetra-5, which plans to move 50 kg of hydrazine from an Orbit Fab Kamino depot into a client satellite through a RAFTI port.

## Economic profile
Almost none of the cost is in the fluid path. A RAFTI service valve is a 0.52 kg part, and the propellant itself is cheap on the ground; what costs money is the vehicle that carries it, the rendezvous and docking stack that gets it there, and the flight qualification that lets an operator risk an eight-figure satellite on the operation. That means unit economics improve with reuse rather than with volume of propellant: a tanker that serves one customer per launch repeats the whole expense every time, while a depot that is filled once and drained many times spreads it. Every buyer today is a government. The Space Force is funding Tetra-5 and Tetra-6, DIU is funding the RAPIDS depot, and the Space Force's Elixir contract with Northrop Grumman pays for a GEO refueling payload, so the commercial revenue in this category is currently government contract revenue with a commercial label. The signal to watch is not another successful demonstration but a published price per kilogram delivered that a satellite operator can put into a fleet model, plus a second customer willing to go after the first. Until an operator can buy propellant the way it buys launch, spacecraft will keep being designed as if refueling does not exist, which keeps the addressable fleet small.

## Videos

- https://www.youtube.com/watch?v=_6WjKfKt9z4 — Dextre tops off the tank: The Robotic Refueling Mission (Canadian Space Agency, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=0B9F0stb3s0 — Robotic Refueling Experiment Heads to Space (NASA Johnson, 3 minutes, 5k+ views)

## Further reading

[In-Space Servicing, Assembly, and Manufacturing (ISAM) State of Play - 2025 Edition (NASA)](https://ntrs.nasa.gov/citations/20250008988) · [A Cross-Disciplinary Study of On-Orbit Refueling for Geostationary Satellites (COSMIC)](https://cosmicspace.org/wp-content/uploads/2025/12/COSMIC-E01-C002-2025-A-GEO-Refueling-Use-Case.pdf)
