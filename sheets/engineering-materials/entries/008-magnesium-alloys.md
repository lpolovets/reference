---
number: 8
name: Magnesium Alloys
part: 2
group: Light alloys
properties: [light, stiff]
strength: med
temperature: mod
processing: [cast, form, mach]
cost: low
---

## Description
Magnesium is the lightest structural metal at 1.74 g/cm³, about two thirds of aluminum and a quarter of steel, and that is the whole reason anyone uses it. Its modulus is 45 GPa, which works out to about 26 GPa per g/cm³, the same specific stiffness as aluminum, steel, and titanium, so once again the gain comes from being allowed a thicker section in bending rather than from the metal being stiffer per kilogram. The crystal structure is hexagonal close-packed, which leaves too few slip systems for good room-temperature ductility, so magnesium is mostly die cast rather than formed, and sheet has to be worked at 200–300 °C. Alloy names read directly: the ASTM code gives the two main additions by letter and their rounded percentages, so AZ91D is 9% aluminum and 1% zinc in the high-purity D grade, and AM60B trades some strength for elongation. The aluminum in those alloys is also what limits them, because the magnesium-aluminum phase softens and lets the metal creep above roughly 120 °C.

## Strengths and weaknesses
Magnesium die casts better than aluminum in almost every respect: it holds walls of 1–1.5 mm routinely and down to about 0.6 mm, it can run on a hot-chamber machine, its lower heat content gives faster cycles and much longer die life, and it machines faster than any other structural metal. It damps vibration well and shields electromagnetic interference, which is why it ends up in laptop and camera bodies. The weaknesses are why it stays a niche despite being the lightest option. Creep limits standard alloys to about 120 °C, so anything near a powertrain needs a rare-earth or strontium alloy at a price premium. Magnesium is the most anodic structural metal, so every joint with a steel or aluminum fastener is a galvanic cell with the magnesium as the anode. Machining chips and grinding dust ignite, and water-based coolant makes it worse by generating hydrogen, so shops run dry or on mineral oil and keep Class D extinguishers. There is no fatigue endurance limit. And roughly 85–90% of primary magnesium comes from one country.

## When to use
Use magnesium when mass is the binding constraint on a die-cast part running below about 120 °C, and when the part is large and thin enough that a thicker wall in a lighter metal actually wins: instrument-panel cross-car beams, steering-wheel armatures, seat frames, housings, and consumer-electronics enclosures. Pick AM60B when the part must absorb impact or deform, AZ91D when it is a rigid housing, and an AE, AJ, or MRI creep-resistant alloy when a bolted joint will run hot. Do not use it for a bolted joint on a hot component in a standard alloy, because you will lose clamp load rather than break anything. Do not use it in an unprotected joint with steel unless the fastener is isolated or coated. And check two alternatives before committing: aluminum die casting (007) is roughly 50% heavier for the same wall but has none of these problems and a supply chain that will not surprise you, and a 30% glass-filled engineering thermoplastic (015) is lighter still, cheaper, and immune to corrosion, though its modulus is roughly a fifth of magnesium's.

## Key numbers
1.74 g/cm³, about two thirds of aluminum and a quarter of steel · modulus 45 GPa, so about 26 GPa per g/cm³, the same as aluminum, steel, and titanium · AZ91D die cast at roughly 230 MPa with about 3% elongation, around 130 kN·m/kg · standard aluminum-bearing alloys creep above roughly 120 °C · die-cast walls routinely 1–1.5 mm and down to about 0.6 mm · roughly 85–90% of primary magnesium comes from China.

## How it fails
The characteristic magnesium failure has no crack in it. A bolted magnesium housing running above about 120 °C creeps under the clamp load, the bolt tension relaxes over weeks to months, and the joint leaks, buzzes, or loosens while every part in it still measures within drawing. That is the reason a magnesium transmission case needs a creep-resistant alloy rather than a thicker flange, and the reason bolt-load-retention testing, not tensile testing, is what qualifies a magnesium part in a powertrain. The second mechanism is galvanic corrosion, and it is fast. Magnesium sits at the anodic end of the galvanic series, so a steel bolt through a magnesium boss in road salt dissolves a crater around the hole rather than corroding the bolt, and the fix is an isolating washer, an aluminum-coated fastener, or a coating that has to survive assembly. High-purity D-grade alloys, which cap iron, nickel, and copper at very low levels, improved general salt-spray corrosion by orders of magnitude and did nothing about the galvanic problem. The third is not a service failure but a shop one: chips and grinding fines burn, they burn hotter when someone puts water on them, and a magnesium fire in a chip conveyor is a plant-level event. Warning signs to look for are weeping or loosening fasteners on hot assemblies and mounded white corrosion product around fastener holes.

## Examples
AM60B steering-wheel armatures and instrument-panel cross-car beams are the highest-volume automotive uses, since both are large, thin, and lightly loaded. AZ91D shows up in gearbox and accessory housings. The creep-resistant alloys have narrower but well-documented uses: AE44 in the engine cradle of the 2006 Corvette Z06, and AJ62 in BMW's magnesium-aluminum composite inline-six crankcase. Outside vehicles, magnesium bodies are standard on premium laptops, mirrorless camera bodies, and drone frames, where stiffness per unit weight and electromagnetic shielding both matter. Primary production is concentrated in China's Shaanxi cluster; US Magnesium in Utah is the only US primary producer, and Magontec is the main Western alloying and recycling specialist.

## Economic profile
Almost all primary magnesium is made by the Pidgeon process, which reduces calcined dolomite with ferrosilicon in retorts, and it is both the most concentrated and the most carbon-intensive supply chain of any common structural metal. What that concentration means in practice was demonstrated in the autumn of 2021, when power curtailments in Shaanxi cut Chinese output and European spot prices more than quadrupled within weeks, and the shortage hit the aluminum industry harder than it hit die casters, because 5xxx and 6xxx aluminum alloys need magnesium as an alloying addition. That is the key structural fact for anyone specifying it: magnesium parts compete for supply with the entire aluminum industry, so the price is set by a market you are not really in. On top of that sit EU antidumping duties on Chinese magnesium and a US primary supply base of one plant that has already declared force majeure once. The engineering case for magnesium is genuine and narrow; the reason it has not grown is that the supply risk and the corrosion engineering both have to be paid for, and aluminum usually gets close enough.

## Videos

- https://www.youtube.com/watch?v=ZewlcJsfbn8 — The Dark Side of the World’s Lightest Structural Metal (Real Engineering, 15 minutes, 500k+ views)
- https://www.youtube.com/watch?v=pE7cNWPX7FM — Magnesium - lightweight materials of the future (Sciencemovies, 6 minutes, 10k+ views)

## Further reading

[Magnesium Alloys Overview (International Magnesium Association)](https://www.intlmag.org/page/design_mag_all_ima/Magnesium-Alloys-Overview.htm) · [Chromate-Free Corrosion Protection Strategies for Magnesium Alloys—A Review: Part I (Materials, via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9736347/)
