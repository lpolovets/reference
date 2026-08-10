---
number: 15
name: Engineering Thermoplastics
part: 3
group: Engineering plastics
properties: [wear, strong, tough]
strength: low
temperature: mod
processing: [mold, mach, am]
cost: low
---

## Description
Engineering thermoplastics are the mid-tier: molded parts that carry real mechanical load at $3–6/kg, with tensile strengths of 60–80 MPa and moduli of 2.4–3.3 GPa instead of the commodity plastics' 1.0–1.5. They differ from polyolefins by having polar groups on the chain, which is where the strength, the stiffness, and every one of their problems comes from. Polar groups mean the chains attract each other, so the material is strong; they also mean water, solvents, and acids have something to interact with. Nylon takes up water and changes size, acetal comes apart in acid and in chlorinated water, and polycarbonate cracks in the wrong cleaner. The differences inside this family are larger than the difference between the family and the one below it, so picking "an engineering plastic" is not a decision, and picking nylon over acetal usually is.

## Strengths and weaknesses
This family is where you get a part that replaces a small machined metal one: a gear, a bearing, a latch, a connector body, a housing that has to survive a drop. Strength is 60–80 MPa, they mold to tight tolerance, and 30% short glass fiber roughly triples modulus (nylon 6/6 goes from about 3 GPa to 9–10) and raises heat deflection by a hundred degrees or more, because the fiber carries load above the glass transition. The price of glass fill is elongation, which falls from tens of percent to 2–3%, so a filled part is strong and brittle and it warps, since the fibers align with flow and the shrinkage differs along and across it. The weakness that costs the most money is that the datasheet number is a dry, room-temperature, injection-molded test bar. Nylon 6/6 quotes 80 MPa dry, but at 50% relative humidity it holds about 2.5% water, loses roughly half its modulus, and grows 0.5–0.7% in every dimension, which is enough to close a bearing clearance.

## When to use
Reach for this family when a polyolefin is not stiff or strong enough and PEEK is not worth $80/kg. Then choose inside it by the thing that will actually go wrong. If the part must hold a dimension, pick acetal, because it takes up almost no water. If it must absorb impact and take abuse, pick nylon, and specify PA6 for toughness or PA66 for heat. If it must be transparent or survive a hammer, pick polycarbonate, and then check every fluid it will ever touch against a stress-cracking chart before you commit. If it must be dimensionally stable and hold a connector pin, pick glass-filled PBT. If it must be optically clear outdoors, pick PMMA and accept brittleness. Go to PPS or PEEK (016) once continuous service passes about 120 °C, and back down to polypropylene (013) if you only wanted chemical resistance.

## Key numbers
Resin $3–6/kg · tensile 60–80 MPa, modulus 2.4–3.3 GPa · nylon 6/6 at 80 MPa dry, holding 2.5% water at 50% RH, losing roughly half its modulus and growing 0.5–0.7% · 30% glass fiber roughly triples modulus and cuts elongation to 2–3% · polycarbonate glass transition 147 °C, about 90% light transmission · acetal depolymerizes above roughly 230–240 °C · continuous service 90–125 °C across the family.

## Variants
### Nylon (PA6, PA66)
The tough one, and the moisture problem. PA66 melts at 260 °C and serves to about 120 °C; PA6 melts at 220 °C, absorbs more water, and is tougher and cheaper. Both need drying before molding and both change dimension with humidity, so tolerance stacks get quoted at a stated moisture content. PA11 and PA12 take up around 1% instead of 2.5% and cost more, which is why fuel lines and laser-sintering powders use them.

### Acetal (POM)
The dimensional-stability and low-friction choice, and the default for gears, cams, and small mechanisms. It takes up under 1% water, has a friction coefficient near 0.2 against steel, and springs back over millions of cycles. Homopolymer runs about 70 MPa and copolymer about 62 with better resistance to hot water and base. It cannot be solvent-bonded, it is attacked by acids and by chlorinated water, and it depolymerizes to formaldehyde in an overheated barrel.

### Polycarbonate (PC)
Amorphous, transparent at about 90% transmission, and by far the toughest of the group, with a glass transition of 147 °C and useful service to roughly 115–125 °C. It is also the textbook environmental-stress-cracking material: many cleaners, solvents, adhesives, and mold releases will craze a stressed part. It hydrolyzes in hot water and steam, and it must be dried to about 0.02% moisture before molding or the carbonate link breaks in the barrel and the parts come out brittle.

### PBT
The connector and electrical-housing resin. Low moisture uptake, fast crystallization for short cycles, good dimensional stability, and heat deflection above 200 °C when glass-filled. Its weakness is hydrolysis in hot wet service, which limits it under the hood in coolant-adjacent locations unless a hydrolysis-stabilized grade is used.

### PMMA (acrylic)
The optical one. Light transmission is about 92%, the best of any polymer, and UV stability is far better than polycarbonate's, which is why outdoor signage and automotive lenses are acrylic and machine guards are polycarbonate. It is brittle, scratches easily, and stress-cracks in alcohols and ammonia-based cleaners.

## How it fails
Moisture, temperature, and chemistry, in that order, and none of them show up on the front page of a datasheet. Nylon reaches equilibrium with ambient humidity over weeks, which plasticizes it: strength and modulus drop by roughly half and the part grows, so a press fit that was correct on the bench is loose after a summer. Environmental stress cracking is the polycarbonate failure and it needs stress plus a specific fluid at the same time, so a part passes every mechanical test and then crazes when someone wipes it with the wrong cleaner. Hydrolysis is the slow one, and it applies to polycarbonate, PBT, and to a lesser extent nylon: hot water cleaves the chain, molecular weight falls, and a part that looks unchanged fractures with no yielding after a year or two of steam or coolant exposure. Check for surface crazing near stress concentrations, brittle fracture surfaces on a normally ductile resin, and dimensions that have drifted in one direction.

## Examples
Nylon 6/6 in cable ties, automotive intake manifolds and radiator end tanks, and power-tool housings. Acetal in gears, seat-belt and buckle mechanisms, fuel-system components, and zipper teeth, sold as Delrin (a standalone company since DuPont divested it in 2023), Celcon, and Hostaform. Polycarbonate in machine guarding, headlamp lenses, safety glazing, and medical device housings. Glass-filled PBT in automotive and appliance connectors, sold as Valox and Crastin. PMMA in signage, tail lamps, and aquarium glazing, from Röhm and Mitsubishi Chemical. The nylon chain runs through Invista, Ascend, BASF, and Asahi Kasei; acetal and PBT through Celanese, Polyplastics, and BASF; polycarbonate through Covestro, SABIC, and Wanhua.

## Economic profile
This family sits in the awkward middle: expensive enough that resin cost shows up in a bill of materials, cheap enough that nobody qualifies a second source for years. Nylon 6/6 is the volatile one, because its supply chain runs through adiponitrile, which only a handful of plants in the world make; an outage at one of them moves the price by 50% or more within a quarter, as happened after the 2021 Texas freeze. Chinese capacity has been added across polycarbonate, PBT, and nylon 6 since about 2020, which has compressed Western producer margins and made the commodity grades cheap while the specialty compounds (flame-retardant, hydrolysis-stabilized, laser-weldable, medical-grade) hold their pricing. The durable business here is in compounding rather than polymerization, because a validated grade with a regulatory clearance and a color match is expensive to displace, and switching it restarts an automotive part approval or a medical filing.

## Videos

- https://www.youtube.com/watch?v=MAZn3U8rhus — ABS, POM, Polycarbonate, Teflon and PEEK for CNC machining (Protolabs, 14 minutes, 10k+ views)
- https://www.youtube.com/watch?v=Q7sJMH7Tpz8 — What is Polycarbonate Plastic? | Polycarbonate vs Acrylic? What are the Differences? (Plascon Plastics, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=J48l5xXTI9E — Boedeker TECH Talk Episode 6 | Understanding the Moisture Absorption of Plastics ASTM D570 (Boedeker Plastics, 7 minutes, 5k+ views)

## Further reading

[Nylons (Polyamide) (British Plastics Federation)](https://www.bpf.co.uk/plastipedia/polymers/Polyamides.aspx) · [Characterisation and Modelling of Moisture Gradients in Polyamide 6 (Polymers, via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8468858/)
