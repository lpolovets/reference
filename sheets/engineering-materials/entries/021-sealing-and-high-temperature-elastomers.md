---
number: 21
name: Sealing and High-Temperature Elastomers
part: 4
group: Elastomers
properties: [seal, corr, heat]
strength: none
temperature: high
processing: [mold]
cost: med
---

## Description
These are the elastomers you specify when the fluid or the temperature rules out cheap rubber, and the family is best read as a price ladder. Nitrile handles oil and fuel to about 100–120 °C at $3–5/kg and is the default O-ring compound. Hydrogenated nitrile removes the leftover double bonds and buys roughly 150 °C. Fluoroelastomer, usually called FKM or by the Viton trade name, reaches 200–230 °C with excellent fuel and oil resistance at $30–60/kg. Silicone spans -60 to 230 °C and is physiologically inert, but it tears easily and swells in oil. Perfluoroelastomer reaches 327 °C with near-universal chemical resistance at over $1,000/kg, which puts individual O-rings in the tens to hundreds of dollars. Every step up that ladder is bought for a specific incompatibility, and the seal works because the elastomer is squeezed and pushes back, so the property that actually matters is not strength but how much of that push-back survives the service condition.

## Strengths and weaknesses
The strength of the family is coverage: between nitrile, EPDM, silicone, FKM, and FFKM there is a compound for nearly every fluid and temperature combination a machine will see, in standard sizes off a shelf. The weakness is that compatibility is a pairing rather than a rating, and the good compounds have sharp holes in them. FKM is superb in fuel and oil and poor in hot water, steam, amines, and brake fluid; EPDM is the opposite; silicone is inert and clean and has tear strength around 10–30 kN/m, well below a reinforced natural rubber compound, so it fails on installation damage rather than on chemistry. Cost climbs faster than temperature does, roughly ten times from nitrile to FKM and another twenty from FKM to FFKM. And low-temperature performance moves the wrong way as heat resistance improves: a standard FKM stiffens near -20 °C, which is why cold-climate applications reach for a low-temperature grade or for fluorosilicone.

## When to use
Start from the fluid, not the temperature. If it is petroleum oil or fuel below 120 °C, use nitrile and stop. If it is oil above that, or refrigerant, use hydrogenated nitrile. If it is fuel, engine oil, or aggressive chemistry to 200–230 °C, use FKM, and check separately that it never sees steam, hot water, amines, or glycol brake fluid. If it is water, steam, glycol, or brake fluid, use EPDM (020), which is cheaper and better than anything on this list for those. If it is food, medical, or purely thermal service from -60 °C upward with no oil, use silicone. Reserve FFKM for semiconductor plasma chambers and aggressive chemical process where a failure costs more than the seal by orders of magnitude. And if elasticity is not required, a PTFE or spring-energized seal (017) will beat all of them on chemistry.

## Key numbers
Nitrile to 100–120 °C at $3–5/kg · hydrogenated nitrile to about 150 °C · FKM to 200–230 °C at $30–60/kg · silicone -60 to 230 °C with tear strength around 10–30 kN/m · FFKM to 327 °C at over $1,000/kg · squeeze typically 15–30% for a static seal, with gland fill around 75–85%.

## How it fails
Compression set is the mechanism behind most seal failures and it is why a seal that passed on the bench leaks in the field. The elastomer, held squeezed and hot, gradually rearranges its crosslink network into the deformed shape, so the stored elastic force decays; the seal still fills the groove but has stopped pushing on the sealing face, and the leak appears on the first cool-down when the metal contracts and the rubber does not follow. Set rises steeply with temperature, so a compound that shows 15% after 22 hours at 70 °C can show several times that at its rated maximum. The second mode is dimensional change from the fluid, and shrinkage is far more dangerous than swell, because a compound losing plasticizer or extractables to the fluid pulls away from the gland while a swollen one at least stays in contact. The third is explosive decompression in high-pressure gas: gas dissolves into the elastomer under pressure and nucleates into bubbles when the pressure drops quickly, splitting the seal from the inside, which is why oilfield, carbon dioxide, and hydrogen service call out resistant compounds and a maximum depressurization rate. And a large share of what gets logged as seal failure is really geometry, since an extrusion gap that is too wide at pressure, a groove that is over- or under-filled, or a sealing surface rougher than about Ra 0.8 µm will kill a correctly chosen compound.

## Examples
Nitrile in hydraulic cylinder seals, fuel-system O-rings, and shaft seals across industrial equipment. Hydrogenated nitrile in air-conditioning systems, timing belts, and downhole packers. FKM as Viton, Tecnoflon, and Dai-El in engine and transmission seals, fuel injectors, turbocharger hoses, and chemical pumps. Silicone in food and pharmaceutical gaskets, medical tubing, implantable devices, and oven and appliance seals, with fluorosilicone in aerospace fuel systems for the low-temperature end. FFKM as Kalrez, Chemraz, Isolast, and Perlast in semiconductor etch and deposition chambers and in aggressive chemical process equipment. The polymer producers are Chemours, Daikin, Syensqo, AGC, and ARLANXEO, with DuPont, Greene Tweed, Trelleborg, Parker Hannifin, and Precision Polymer Engineering converting them into seals.

## Economic profile
Seals are a small fraction of the cost of the machine and a large fraction of its unplanned downtime, which is why this market prices on consequence rather than on material. An FFKM O-ring at several hundred dollars is trivial against a semiconductor chamber that is down for a shift, and the same logic sets the willingness to pay in oilfield, aerospace, and pharmaceutical service. The value sits in the compound and the qualification, not in the base polymer: manufacturers keep hundreds of proprietary formulations, publish compatibility data, and get designed in by part number, so switching suppliers means requalifying the joint. The live risk is the same one that hangs over fluoropolymers (017), since FKM and FFKM are fluorinated and fall inside the scope of the EU PFAS restriction proposal, and 3M's exit from fluoropolymer and fluoroelastomer manufacturing has already tightened supply. There is no drop-in replacement for FFKM at 300 °C in an etch chamber, so the realistic outcome is a carve-out plus higher prices rather than substitution, but any program that depends on a fluoroelastomer should be carrying that as a named risk.

## Videos

- https://www.youtube.com/watch?v=aweDWuNkPw0 — O-Rings? O-Yeah! How to Select, Design, and Install O-Ring Seals (tarkka, 7 minutes, 1m+ views)
- https://www.youtube.com/watch?v=QZX0RoQxbAM — A Guide to Common Seal Materials (Totally Seals, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=tJAkn2YQ8Eo — What is Compression Set? (Precision Polymer Engineering Ltd, 7 minutes, 5k+ views)

## Further reading

[Characteristics of Elastomer Seals Exposed to Space Environments (NASA)](https://ntrs.nasa.gov/citations/20080012742) · [Degradation Mechanism of Perfluoroelastomer (FFKM) in the Acidic SC2 Solution of Semiconductor Radio Corporation of America (RCA) Cleaning (Polymers)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12656503/)
