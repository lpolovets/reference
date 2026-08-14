---
number: 34
name: Thermal Protection Systems
part: 7
group: Return & disposal
orbit: [leo, cis, deep]
scale: [kg, t]
autonomy: auto
customer: [civ, com, def, sci]
maturity: ops
---

## Description
A thermal protection system holds the structure below its limit while the outer surface runs at 1,200–2,800 °C, and it does that in one of two ways. An ablator pyrolyzes: the resin decomposes, the gas blows outward into the boundary layer and blocks convective heat from reaching the wall, and the char left behind radiates and slowly recedes. Avcoat 5026-39 is the classic one, a quartz and glass fiber filler with phenolic microballoons in an epoxy-novolac resin at 0.50 g/cm³, used across Apollo and now on Orion; PICA is a carbon fiber preform impregnated with phenolic resin at 0.26 g/cm³, flown on Stardust, Mars Science Laboratory, and Crew Dragon as PICA-X; Boeing's Lightweight Ablator is a silicone with silica microballoons at 0.32 g/cm³ on Starliner. A reusable system gives up no material and keeps its shape: a coated silica tile insulates and re-radiates, and the Shuttle's LI-900 was 99.6% pure amorphous silica fiber at 0.14 g/cm³ under a 0.25–0.50 mm reaction cured glass coating, with reinforced carbon-carbon at 1.44–1.60 g/cm³ on the nose cap and wing leading edges where a tile could not survive. Peak heat flux picks the material: SLA-561V is good for roughly 100–200 W/cm², Avcoat about 900 W/cm², PICA about 1,400 W/cm², carbon-carbon up to 10,000 W/cm² for brief exposures, and carbon phenolic up to 30,000 W/cm². Areal mass is the price, and Apollo's shield weighed about 680 kg, over 10% of the command module, at 2.7 inches thick at the stagnation point and 0.7 inches on the lee side.

## Strengths and weaknesses
Ablators are forgiving in the way that matters: they need no mechanism, they work at fluxes nothing else survives, and adding margin means adding thickness. The cost is that they recede, so the outer mold line changes during flight, they are consumed in one entry, and they are sized against the worst trajectory in the corridor rather than the flown one, which makes most of the mass dead weight. Apollo shows the size of that penalty. Across every mission including the lunar returns, less than 20% of the available ablator was used, and engineers later concluded that half the thickness would still have left an acceptable margin. Reusable tiles are far lighter per unit area and survive a hundred flights, but they are brittle, they absorb water unless waterproofed, and each one is bonded to a strain isolation pad because the aluminum airframe expands and the silica does not. Damage is the failure mode rather than wear, which is why the Shuttle carried 30,759 tiles on Columbia at the start of the program and 24,177 by the end, with blankets replacing tiles wherever the heating allowed.

## When to use
If the vehicle flies once and enters above roughly 8 km/s, use an ablator and pick it by peak heat flux: a low-density silicone like SLA-561V below about 200 W/cm², Avcoat or PICA in the hundreds to low thousands, carbon phenolic only when the flux runs into the tens of thousands. If the vehicle is meant to fly many times, do not choose tiles on material cost; choose them on how many hours of inspection per square foot the operation can absorb, because that is the recurring bill. If the answer is "not many", a replaceable ablator on a reusable structure is usually cheaper than a reusable surface, which is the trade a capsule operator makes every flight. If you are designing for a lunar or interplanetary return, size the shield against that entry from the start rather than scaling a low-orbit design, since the heating environment is several times worse (entry 33). And if launch price per kilogram is falling for your program, prefer the thicker, duller, cheaper-to-process option, because the mass penalty is the part of the trade that is getting less expensive.

## Key numbers
Avcoat 5026-39 at 0.50 g/cm³, PICA at 0.26 g/cm³, LI-900 tile at 0.14 g/cm³, reinforced carbon-carbon at 1.44–1.60 g/cm³ · peak flux capability roughly 100–200 W/cm² for SLA-561V, 900 for Avcoat, 1,400 for PICA, up to 10,000 briefly for carbon-carbon · Apollo shield about 680 kg and over 10% of the command module, 2.7 in thick at the stagnation point · less than 20% of Apollo's ablator consumed on any flight · 30,759 Shuttle tiles falling to 24,177 by program end · LI-900 at $1,160/ft² purchase, 91 hr/ft² to install and 2.10 hr/ft² to inspect and repair per flight

## Examples
Avcoat flew on every Apollo command module and returns on Orion, changed from Apollo-style honeycomb cells filled with injection guns to machined blocks bonded to a composite skin for producibility; Artemis I came home with more char loss than predicted, which NASA traced to gas trapped in the material during the skip entry. PICA was developed at NASA Ames and flew on Stardust, Mars Science Laboratory and, as PICA-X, on every Dragon. On the reusable side, the Shuttle's LI-900 and AETB-8 tiles, AFRSI blankets, and reinforced carbon-carbon leading edges remain the only flown reusable system of that scale, and Orion reuses AETB-8 tiles on its back shell.

## Economic profile
Material price is the small term and labor is the large one. A NASA cost study of thirteen TPS options put LI-900 tile at $1,160/ft² to buy, 91 hr/ft² to install, and 2.10 hr/ft² to inspect and repair on every flight; at the study's $100/hr labor rate that is about $208/ft² per flight of recurring inspection against roughly $225/ft² of fabrication amortized over a 100-flight life. Reinforced carbon-carbon costs ten times as much to buy, at $12,000/ft², and needs 0.14 hr/ft² of inspection, so it costs about $14/ft² per flight to keep. The expensive material is cheap to operate and the cheap material is expensive to operate, and that is the whole reusable-TPS trade. Scale it to the orbiter and the point gets sharper: 24,177 tiles at roughly 0.44 ft² each is on the order of 10,000 ft², so 2.10 hr/ft² is roughly 20,000 technician-hours of inspection and repair per flight, arithmetic done here rather than looked up. The largest single line in that study was neither of these, though. It was payload displacement, $705–1,500/ft² per flight at an assumed $1,000/lbm to orbit, which is the cost of the mass the TPS takes from the payload. That term falls directly with launch price, so cheaper launch shifts the optimum toward heavier systems that cost less to fabricate and inspect, and it is one of the few places on this sheet where falling launch cost changes an engineering answer rather than just a budget.

## Videos

- https://www.youtube.com/watch?v=qRgRV1iMpEM — What is a Spacecraft's Heat Shield? (Kennedy Space Center Visitor Complex, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=nvjp_OrVDf8 — Artemis I’s Heat Shield Had an Unexpected Problem (NOVA PBS Official, 3 minutes, 10k+ views)

## Further reading

[History and State of the Art in Advanced Thermal Protection Systems (Oak Ridge National Laboratory)](https://www.osti.gov/biblio/2429808) · [Thermal Protection Systems Technology Transfer from Apollo and Space Shuttle to the Orion Program (NASA)](https://ntrs.nasa.gov/citations/20180006812)
