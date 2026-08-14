---
number: 8
name: Satellite Upgrade and Payload Swap
part: 2
group: Servicing missions
orbit: [geo]
scale: [hkg]
autonomy: ground
customer: [com, def]
maturity: concept
---

## Description
Satellite upgrade means changing what a spacecraft already in orbit does, either by replacing its payload with a newer one or by bolting an additional payload onto a bus that is already up there. It has never been done. The motivation is a mismatch in lifetimes: a geostationary bus is designed for 15 years or more while the payload technology it carries turns over much faster, so operators regularly retire satellites whose power, propulsion, and structure are all healthy because the transponders are a generation behind. A spacecraft that could actually be upgraded would need a specific list of things no operational satellite has. The payload has to separate at one structural interface with robot-compatible captive fasteners instead of forty bolts and a wiring harness. Power and data need blind-mate connectors that demate and remate in vacuum after a decade of thermal cycling. The thermal joint has to be breakable and remakeable and still conduct every watt the new payload dissipates into the bus radiator, which a bolted, gap-filled joint does far better than any separable one. Alignment has to repeat well enough that an antenna or an optical bench comes back pointing where the star tracker thinks it does, and the bus has to carry spare power, data rate, and heat rejection reserved for a payload nobody has designed yet. All of that is mass and money spent at build time to buy an option that only pays off if a servicer exists ten years later.

## Strengths and weaknesses
The prize is real. Payload is roughly half the cost of a geostationary communications satellite and the bus plus launch is most of the rest, so reusing a working bus would in principle halve the cost of a capability refresh and remove about three years of build time. Everything else is a weakness. There is no flight heritage: the closest anything has come is Orbital Express in 2007, which moved a battery and a computer between two spacecraft that had been designed together for that demonstration, and the ISS external payload platforms, where payloads genuinely are attached and removed robotically, but only because the station was built around standard interfaces with a long arm, a dexterous manipulator, and a crew on hand. The bus being reused is also old: geostationary solar arrays typically finish 15 years at 75–85% of their beginning-of-life power and the batteries have faded, while a newer payload usually needs more power rather than less. Standards are the other blocker, since Sierra Space's SPDP, iBOSS's iSSI, and SpaceWorks's FuseBlox all exist as servicing interfaces and none of them flies on an operational client, so a servicer built for one is useless against a satellite carrying another.

## When to use
Do not build a mission plan around this today, because there is no vehicle and no interface with flight heritage behind it. If you need new capability on orbit soon, buy a hosted payload slot on somebody else's satellite before it launches; that is the working version of this idea and it is purchased routinely. If you are designing a geostationary bus now and expect a 20-year asset life, the cheap hedge is the servicing basics rather than a swappable payload: a grapple fixture, a few visual fiducials, and an unobstructed apogee engine nozzle cost a handful of kilograms and keep both life extension and future robotic work available. If you are building a defense system where the threat changes faster than the satellite does, put the reconfigurability in software and in a phased array rather than in a mechanism that has to survive a decade and then work once. And if you are funding interface standards, be clear that the payoff depends on a fleet converging on one of them, which is a coordination problem more than an engineering one.

## Key numbers
No payload swap has ever flown · payload roughly half the cost of a geostationary communications satellite, bus and launch most of the rest · bus design life 15 years or more against much faster payload turnover · geostationary solar arrays typically end 15 years at 75–85% of beginning-of-life power · DARPA Phoenix satlets about 7 kg each · three competing servicing interfaces in development, none on an operational client

## Examples
DARPA's Phoenix program set out to make geostationary hardware reusable and finished without flying a swap, leaving behind a roughly 7 kg modular satlet and the Payload Orbital Delivery canister, a standardized container that rides to GEO on a commercial communications satellite; NovaWurks carried the satlet work forward. Orbital Express's 2007 orbital replacement unit transfer is still the only robotic component handover in space, the ISS external platforms (the ELC sites, the JEM Exposed Facility, and Airbus's Bartolomeo) are the only operational payload-exchange service anywhere, and NASA's AXCIS project is developing the interface and tool components a future servicer would use.

## Economic profile
The arithmetic that makes this attractive is simple and the arithmetic that kills it is everything else in the mission. A geostationary communications satellite and its launch run $300–600M together, and roughly half the satellite cost is payload, so on paper a swap saves the bus and the launch. Against that you have to put a servicing vehicle in geostationary orbit, get the new payload up to 36,000 km anyway (a comsat payload is hundreds of kilograms, so that is most of a launch either way), pay the non-recurring engineering for a robotic task nobody has performed, and then accept a ten-year-old bus with a degraded array. Nobody has closed that case. The build-side cost is the part that gets underrated: designing for swap adds mass, connectors, and structure to every satellite in a fleet, and the operator pays that on all of them to hold an option on a service that does not exist. Falling launch prices push the same way, because the cheaper a whole new satellite is to fly, the less a saved bus is worth. The plausible first customers are defense programs that value refresh speed over cost, and the plausible first step is a servicing interface adopted widely enough that one servicer has more than one client.

## Videos

- https://www.youtube.com/watch?v=uvkhWIlmHEg — DARPA Phoenix Satellite Servicing (DARPAtv, 8 minutes, 50k+ views)

## Further reading

[Phoenix (DARPA)](https://www.darpa.mil/research/programs/phoenix) · [Advancement of eXploration Components for In-Space Servicing (AXCIS) Early Career Initiative (ECI) Project (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20250004736)
