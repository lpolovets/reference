---
number: 31
name: Regolith Construction and Dust Mitigation
part: 6
group: Surface & resources
orbit: [surf]
scale: [hkg, ht]
autonomy: ground
customer: [civ, def]
maturity: concept
---

## Description
Lunar dust is the near-term problem on this list, and Apollo established how fast it does damage. With no wind or water to round them, grains stay sharp, and micrometeorite impacts weld them into glassy agglutinates, so the material behaves like an abrasive powder that also carries an electrostatic charge from solar ultraviolet and sticks to everything. NASA's catalog of Apollo mission reports sorts the effects into nine categories, including clogging of mechanisms, abrasion, thermal control failures, seal leakage, and inhalation of the fraction below about 5 µm, which is the part that reaches the lungs. The numbers are blunt. Apollo 12's suits were more worn after 8 hours on the surface than the training suits were after 100, worn through the outer layer into the insulation above the boot, and one or two more excursions could have caused a pressure failure. The same suits went from sealing tight to leaking 0.15 psi/min after the first excursion and 0.25 psi/min after the second, against a 0.30 psi/min safety limit. Dust on radiator surfaces ran the Apollo 12 magnetometer about 68 °F hotter than designed, and the Apollo 16 and 17 rover batteries went over temperature because brushing the dust off did not work. Construction from regolith is the longer-term half of this entry, and it is still at the sintered-test-coupon stage.

## Strengths and weaknesses
Dust mitigation has one demonstrated technology and a long list of concepts. NASA's Electrodynamic Dust Shield, developed at Kennedy Space Center, runs a traveling electric field across a surface to lift and sweep charged grains off it, and it removed regolith from glass and thermal radiator samples on the lunar surface during Firefly's Blue Ghost Mission 1 in March 2025. That is the first on-surface demonstration of anything in this field, and it works on the surfaces that matter most, meaning radiators, solar cells, camera windows, and visors. What it does not address is the inside of a mechanism or a seal, which is where Apollo's worst failures were, and the answer there is still tolerance rather than removal: dust-rated bearings, labyrinth seals, and keeping suits outside the habitat entirely. On the construction side, sintering regolith with microwaves, lasers, or concentrated sunlight produces bricks with compressive strengths reported up to 45 MPa, comparable to ordinary structural concrete, so the material is adequate. The gap is the machine, because nothing has been built that sinters at construction rates in vacuum, in one-sixth gravity, on power that has to come from the same reactor as everything else.

## When to use
Design for dust on every surface mission and treat construction as optional. If your hardware has a radiator, a solar array, an optical window, or a visor, plan for dust removal or for a large end-of-life derating, since the Apollo record shows accumulation you cannot brush off. If it has a bearing, a gear, or a seal, plan for tolerance rather than cleaning, and qualify it against a simulant with agglutinates rather than a crushed basalt that has none. Keep dust out of the pressurized volume by architecture, using suitports or a dedicated dust lock, because Apollo's approach of bringing suits inside contaminated the cabin and the crew's lungs on every mission. On the construction side, the first thing worth building is a landing pad, because a lander's plume throws regolith on ballistic trajectories that reach a long way (Apollo 12 landed under 200 m from Surveyor 3 and pitted it), and the second is berms and shielding, where you need bulk mass rather than precision. Leave printed habitat walls for later: if the structure has to hold pressure, a launched shell is far more predictable than a sintered one, and regolith is best used as the shielding piled on top.

## Key numbers
Apollo 12 suits more worn after 8 hours on the surface than training suits after 100 · suit leak rate 0.15 psi/min after the first excursion and 0.25 after the second, against a 0.30 psi/min limit · Apollo 12 magnetometer about 68 °F above design because of dust on thermal surfaces · particles below about 5 µm are the inhalation concern · Electrodynamic Dust Shield demonstrated on the lunar surface in March 2025 on Blue Ghost Mission 1 · sintered regolith simulant reported up to 45 MPa in compression · ICON's NASA construction award $57.2M through 2028

## Examples
The Electrodynamic Dust Shield flew as one of ten NASA payloads on Blue Ghost Mission 1 and cleared regolith from glass and radiator surfaces. SCALPSS, the stereo camera set that measures how a descent engine erodes the surface underneath it, has flown on Blue Ghost and is manifested on Blue Origin's first Blue Moon MK1. For construction, NASA's Moon to Mars Planetary Autonomous Construction Technologies project at Marshall awarded ICON a $57.2M SBIR Phase III contract running through 2028 for its Olympus system, aimed at landing pads, roads, and habitat structures. Sintering research runs on standardized simulants such as JSC-1A and the LHS and LMS highland and mare series.

## Economic profile
Dust is a cost that shows up as shortened hardware life rather than as a line item, which is why it is chronically underfunded until something fails. The Apollo evidence is that a few days of surface activity consumed a meaningful fraction of a suit's life, so on a program planning 30-day stays the replacement cost of soft goods, seals, and bearings is a recurring bill paid at $1.2M per delivered kilogram. That gives dust mitigation an unusually clean business case for a technology at this maturity: a shield that costs a few kilograms and a few watts and doubles a radiator's usable life pays for itself in avoided resupply. Nearly all of the money is agency money, with defense interest in the same technologies for terrestrial sand and dust, and the Electrodynamic Dust Shield was funded through NASA's Game Changing Development program rather than by a customer. Construction is at an earlier and more speculative stage, where ICON's $57.2M over six years is the largest single commitment and is small relative to the problem. The economics only work when there is enough surface activity to amortize a construction machine, since one landing pad built by a machine that had to be landed at $1.2M/kg is a very expensive pad, and the second and tenth pads are what make it cheap.

## Videos

- https://www.youtube.com/watch?v=EFqpgmZAZgo — Apollo, the Lunar Dust and NASA's Dirty Problem (Curious Droid, 8 minutes, 500k+ views)
- https://www.youtube.com/watch?v=rRoz-2rbxeU — This is why moon dust is such a problem for NASA (Verge Science, 9 minutes, 50k+ views)

## Further reading

[The Effects of Lunar Dust on EVA Systems During the Apollo Missions (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20050160460) · [Overview of lunar dust toxicity risk (npj Microgravity)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9718825/)
