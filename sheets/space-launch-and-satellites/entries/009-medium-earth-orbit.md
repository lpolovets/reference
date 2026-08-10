---
number: 9
name: Medium Earth orbit
part: 2
group: Mid and high orbits
orbits: [meo]
buyer: [com, civ, def]
maturity: routine
cost: high
---

## Description
Medium Earth orbit is everything between about 2,000 km and 35,000 km, and it is the compromise almost nobody takes. On paper it looks ideal: one satellite at 8,062 km sees roughly 28% of the Earth's surface, so 20–30 spacecraft give near-global coverage instead of the several hundred a LEO system needs, and round-trip latency of 110–150 ms is fast enough for enterprise traffic, video calls, and most cloud applications. The reason the band is nearly empty is radiation. The inner proton belt peaks near 3,000 km and the outer electron belt is most intense between roughly 15,000 and 25,000 km, so a MEO spacecraft sits inside or between the two most damaging regions in near-Earth space. Two things live there anyway: navigation constellations at 20,200 km, and SES's O3b broadband satellites at 8,062 km, parked in the relatively quiet gap between the belts.

## Strengths and weaknesses
The strength is coverage per satellite. Twenty-something spacecraft is a manageable fleet to build, launch, and operate, the ground antennas track slowly enough that a modest gimballed dish works, and handovers happen every tens of minutes rather than every few minutes. The weakness is that MEO spacecraft carry the heaviest shielding and the most conservative parts of any operational satellites, which makes them heavy, expensive, and a generation behind on electronics. Total ionizing dose over a long MEO mission runs one to two orders of magnitude above a LEO mission of the same length. The specific failure mode is deep dielectric charging: high-energy electrons from the outer belt penetrate a few millimetres of aluminium, deposit charge inside cable insulation and circuit boards, and eventually produce an internal arc that no amount of surface grounding prevents. Nothing decays out of MEO either, so disposal means spending propellant to reach a graveyard orbit.

## When to use
Pick MEO when you need global or near-global coverage from a fleet you can actually afford to build, and when 110–150 ms of latency is acceptable. That describes navigation, which has no realistic alternative, and enterprise and government broadband trunking where the customer wants better than GEO latency without funding a LEO constellation. Do not pick it for consumer broadband, where LEO wins on latency and on capacity per dollar, or for anything short-lived and cheap, because the radiation environment forces exactly the expensive, rad-hard, long-life spacecraft that a cheap mission is trying to avoid. Also check your latitude coverage before assuming global: the original O3b constellation is equatorial, so it serves roughly ±45° of latitude and needs inclined planes to reach higher latitudes.

## Key numbers
2,000–35,000 km by definition, with real traffic at 8,062 km and 20,200 km · inner proton belt peaking near 3,000 km and outer electron belt most intense between roughly 15,000 and 25,000 km · about 28% of the Earth's surface visible from one satellite at 8,062 km · 20–30 satellites for near-global coverage against several hundred in LEO · 110–150 ms round-trip latency in service · GPS orbital period of 11 h 58 m.

## Regulatory and spectrum
MEO carries an interference constraint that LEO and GEO do not, because a MEO satellite crosses the geostationary arc as seen from a ground station and would otherwise transmit straight into a GEO receiver. ITU rules require non-geostationary systems to protect the arc, and O3b complies operationally rather than by design: as a satellite approaches the arc from a gateway's point of view, the network hands that beam off to another satellite and switches the first one off, which costs capacity and complicates scheduling. Navigation is a different regime. GNSS signals live in internationally protected radionavigation satellite service allocations around 1,559–1,610 MHz, and because billions of receivers depend on them, adjacent-band proposals get fought hard, which is what drove the long dispute over Ligado's terrestrial use of nearby L-band spectrum. Disposal is a licensing item too: nothing decays from MEO, so operators must reserve propellant to raise a retired satellite clear of the constellation.

## Examples
GPS at 20,200 km, Galileo at 23,222 km, GLONASS at 19,100 km, and BeiDou's MEO shell at about 21,500 km. On the commercial side, SES's O3b and second-generation O3b mPOWER satellites at 8,062 km sell trunking to cruise ships, remote enterprise sites, cellular backhaul, and government customers. The newest entrant is defense: the US Space Force has begun buying missile warning and tracking satellites for MEO as a middle layer between the traditional GEO assets and the proliferated LEO layer.

## Economic profile
MEO spacecraft cost like GEO spacecraft and cover like a small constellation, which is an awkward place to be commercially. Rad-hard parts, heavier shielding, long design lives, and higher launch energy all push unit cost into the hundreds of millions once launch is included, and there are few suppliers with the qualification heritage to build them. That works when the customer is a government funding a public utility, which is why every navigation system is state-funded, and it works for a niche commercial operator selling high-value trunking where LEO capacity is thin and GEO latency is disqualifying. It does not work for consumer services. If you are evaluating a MEO business, the question is whether the customers who cannot use GEO are also customers who will not be served adequately by LEO within the asset's fifteen-year life.

## Videos

- https://www.youtube.com/watch?v=NFc3oU_wq7I — The Orbits Explained - What is LEO, MEO & GEO? (Global Invacom Group, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=h9YN50xXFJY — How Deadly Are The Van Allen Radiation Belts? (Scott Manley, 15 minutes, 500k+ views)

## Further reading

[Types of orbits (ESA)](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits) · [Mitigating In-Space Charging Effects — A Guideline, NASA-HDBK-4002B (NASA)](https://standards.nasa.gov/sites/default/files/standards/NASA/B/0/2022-06-07-NASA-HDBK-4002B-Approved.pdf)
