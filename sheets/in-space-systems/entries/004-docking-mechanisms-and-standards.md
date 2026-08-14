---
number: 4
name: Docking Mechanisms and Standards
part: 1
group: Interfaces & mechanisms
orbit: [leo, cis]
scale: [hkg, t]
autonomy: auto
customer: [civ, com]
maturity: ops
---

## Description
Docking is when an active vehicle flies into a mating interface under its own power, as opposed to berthing, where a robotic arm places an inert module into the interface for it. Two mechanism families do the flying case. Probe-and-drogue puts a probe on one vehicle and a receiving cone on the other, which is light and simple and has flown on Soyuz and Progress for decades, but the two halves are not interchangeable, so a probe vehicle can never mate with another probe vehicle. Androgynous designs give both sides identical hardware that can act as either the active or the passive half, which costs mass and complexity and buys the ability to mate any port to any port. The International Docking System Standard, published and maintained by the ISS partners and now at Revision F, is the androgynous case written down: three inward-pointing guide petals on a soft capture ring, twelve pairs of hooks for the structural mate, and a defined capture envelope. Docking happens in two stages under that standard. Soft capture catches the vehicle and kills the residual motion, using a ring mounted on six electric linear actuators arranged as a Stewart platform, which in the NASA Docking System actually extends toward the incoming vehicle to meet it rather than waiting to be pushed; hard capture then drives twelve structural hooks that pull the two tunnels together, compress an elastomeric seal, and turn the joint into a pressure-tight structural interface, after which motorized umbilical connectors mate power and data.

## Strengths and weaknesses
The reason to split capture into two stages is that they are sized for completely different loads. The soft capture system is rated for about 3,900 N of tension and 2,800 N·m of bending at its mating plane, while the hard capture interface mated to the ISS carries 17,700 N axially and 68,700 N·m of bending, so the ring is a shock absorber and the hooks are the structure. Making the soft capture ring actively reach out is what lets a light vehicle dock to a heavy station gently, because earlier mechanisms relied on the chaser's thrusters to push the ring into engagement and therefore needed enough closing energy to drive the latches. The cost of that design is a new failure mode: the actuators are efficient enough that unpowered they offer almost no resistance, so a power or avionics loss in the middle of docking leaves the chaser drifting toward the station with no way to stop it, which is why the NASA Docking System carries a redundant avionics string that can be brought up mid-dock. The wider weakness is that a docking port is expensive in a way a grapple fixture is not: it needs a structural load path, a seal, hooks with specified stiffness, connectors, guides that work across the whole capture envelope, and a way to undock after a failure.

## When to use
If crew or pressurized cargo has to pass through, you need a docking or berthing port with a hatch and a seal, and for anything visiting the ISS or Gateway that means building to IDSS. If the payload is cargo, you already have a robotic arm, and the module is large, berth instead of docking: an arm places the module with no closing velocity, so the structural loads are lower and the hatch can be much larger than a docking tunnel allows. If you are mass-constrained and will only ever mate with vehicles you also build, probe-and-drogue is lighter and the heritage is unmatched, but accept that no one else's vehicle can help yours. If you are designing a satellite that might be serviced later, do not fit a docking port, because a servicing client needs a grapple fixture or a docking plate rather than a pressurized mechanism, which is a far smaller and cheaper thing. And if you are approaching an existing satellite that has neither, this entry does not apply and entry 3 does.

## Key numbers
IDSS initial contact conditions of 0.05–0.10 m/s closing, 0.04 m/s lateral, and 0.20 deg/s in pitch, yaw and roll · capture envelope of 0.10 m lateral and 4 degrees angular misalignment at first contact · three guide petals and twelve hook pairs, with up to 24 hooks engaged on a fully androgynous pair for extra load capacity · soft capture rated to 3,900 N tension and 2,800 N·m bending · hard capture mated to the ISS at 17,700 N axial and 68,700 N·m bending · design cases spanning visiting vehicles up to 25 tonnes mating with a 350-tonne station.

## Examples
Soyuz and Progress still fly probe-and-drogue with the Kurs radio system; APAS was the androgynous mechanism used for Shuttle-Mir and Shuttle-ISS dockings, and the IDSS traces much of its geometry to it. NASA's own IDSS implementation, the NASA Docking System Block 1, completed qualification in 2017 and was the first docking system NASA had developed since the Apollo-Soyuz Test Project; the two International Docking Adapters installed on the ISS in 2016 and 2019 converted Shuttle-era ports to the standard, and Crew Dragon and Starliner use them. Europe's International Berthing and Docking Mechanism is a separate IDSS-compatible implementation built by Sener and QinetiQ under ESA contracts. The berthing counterexample is the Common Berthing Mechanism, which Canadarm2 uses to attach Cygnus and the Japanese HTV.

## Economic profile
The mechanism is a small share of a vehicle's mass and a large share of its schedule risk, which is why NASA went from Apollo-Soyuz in 1975 to a qualified new docking system in 2017 without building one in between. Most of the money goes into qualification rather than parts, because contact between two free bodies cannot be tested at full scale in 1 g, so programs build six-degree-of-freedom robotic docking rigs that fly one mechanism against another on industrial robot arms and then correlate the models against them. Publishing the standard is the economically interesting move. An interface definition document that anyone can build to means a station operator is not locked to one vehicle supplier and a vehicle builder is not locked to one station, which turns docking hardware into something closer to a catalog part and is the main reason the ISS partners published IDSS instead of keeping bilateral interface agreements. Whether that holds is the open question for commercial stations: if the new platforms all accept IDSS ports, the qualification cost is paid once and spread across every vehicle, and if each builds its own interface, every operator pays that bill again. Today the buyers are still agencies, and the only commercial demand is from vehicles whose customer is an agency-funded destination.

## Videos

- https://www.youtube.com/watch?v=dWYpVfhvsak — How the NASA Docking System Works (Simply Space, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=yNEWkY9D2k4 — Why The Docking Adapters On The Space Station Are Shaped Oddly (Scott Manley, 11 minutes, 1m+ views)

## Further reading

[International Docking System Standard (IDSS) Interface Definition Document (IDD) Revision F (NASA)](https://ntrs.nasa.gov/citations/20220011643) · [Reference Guide to the International Space Station, Utilization Edition (NASA Johnson Space Center)](https://www.nasa.gov/wp-content/uploads/2017/09/np-2015-05-022-jsc-iss-guide-2015-update-111015-508c.pdf)
