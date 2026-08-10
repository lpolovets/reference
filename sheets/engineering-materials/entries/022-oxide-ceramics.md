---
number: 22
name: Oxide Ceramics
part: 5
group: Technical ceramics
properties: [wear, elec, heat]
strength: med
temperature: ext
processing: [sint, mach, am]
cost: med
---

## Description
Oxide ceramics are metal oxides pressed or molded from powder and fired to near full density, and alumina is most of what actually ships. Depending on purity, a 96–99.5% Al2O3 part runs about 1,500 HV hard and up to 370 GPa stiff, insulates at roughly 15 kV/mm while still passing 25–30 W/m·K of heat, and holds its shape to about 1,600 °C. Zirconia is the other one worth knowing. Yttria-stabilized 3Y-TZP gives up nearly all of that thermal conductivity, running 2–3 W/m·K, and buys 900–1,200 MPa flexural strength and 8–10 MPa·√m fracture toughness, the toughest monolithic ceramic in common use. It gets there by transformation toughening: the stress field ahead of a crack tip flips metastable tetragonal grains to the monoclinic phase, and the roughly 4% volume increase that comes with the flip clamps the crack shut. Both families are shaped green and then sintered, which the manufacturing-processes sheet covers as a process, and the part shrinks 15–20% linearly in the kiln, so any surface that has to hold a fit gets diamond ground afterward. Neither one yields, because the ionic and covalent bonding blocks dislocation motion at room temperature, so the material goes from elastic straight to fractured.

## Strengths and weaknesses
Alumina is the cheapest way to get hardness, electrical insulation, and dimensional stability at temperature in one part, and at $20–60/kg for a finished piece it is affordable enough to design in rather than to argue for. It is inert to almost everything below its use temperature, it does not creep where steel would, and its stiffness barely moves with heat. The weaknesses all come from having no ductility. Tensile strength is a statistic rather than a property, with a Weibull modulus typically 5–15, so nominally identical parts break over a wide spread and the design stress has to sit well under the mean measured strength. There is no crack-tolerant regime either, so a scratch from a steel tool, a chipped edge, or a bolt torqued past spec is a starter crack rather than a blemish. Zirconia adds one of its own: it degrades hydrothermally in 100–200 °C water or steam, where the surface transforms back to monoclinic over months and roughens and microcracks, which makes it a poor choice on the steam side of anything even though its room-temperature numbers look excellent.

## When to use
Reach for alumina when a part has to be hard, electrically insulating, and stable hot, and you can load it in compression: seal faces, insulators, wear plates, circuit substrates, furnace fixtures, pump components. If the part sees bending or tension, size it against a design stress far below the average measured strength and expect to defend the safety factor, or move to zirconia and pay two to three times more per kilogram for the toughness. Pick zirconia when the duty cycle looks more like a metal's, such as a cutting edge, a small structural pin, or a dental crown, and skip it when the service environment is hot water or steam. If what you actually need is thermal conductivity or thermal shock resistance rather than hardness, this is the wrong family and the answer is silicon carbide or silicon nitride at two to four times the price. And if the part could be hardened tool steel at 60 HRC instead, use the steel: it costs roughly a fifth as much, it tolerates a crack, and it can be cut to size rather than ground.

## Key numbers
96–99.5% alumina at roughly 1,500 HV, up to 370 GPa, and 300–400 MPa flexural strength · alumina thermal conductivity 25–30 W/m·K, dielectric strength around 15 kV/mm, useful to about 1,600 °C · 3Y-TZP zirconia at 900–1,200 MPa flexural and 8–10 MPa·√m fracture toughness, but only 2–3 W/m·K · 15–20% linear shrinkage during sintering · Weibull modulus typically 5–15 · finished alumina parts $20–60/kg.

## How it fails
Almost every failure is a brittle fracture from the largest flaw the part happens to carry, and that flaw is usually on a surface someone handled. Because strength is a distribution rather than a number, nominally identical parts break at stresses a factor of two or three apart, which is what a Weibull modulus of 5–15 means in practice and why the allowable sits so far under the average. The second mechanism is thermal shock: quench a hot part and the surface contracts against a still-hot interior, and for alumina the tension that generates exceeds the strength at a ΔT of roughly 200 °C, which is easy to reach by spraying coolant onto a hot fixture. The warning signs are edge chips, tool marks, and grinding scratches, all of which are starter cracks, plus one specific to zirconia: a surface that has gone rough and chalky after months in hot water is hydrothermal aging in progress.

## Examples
Spark plug insulators from NGK and Bosch are the highest-volume alumina part in the world, at roughly 95% Al2O3. CoorsTek, Kyocera Fine Ceramics, CeramTec, Morgan Advanced Materials, and Maruwa supply most industrial alumina and zirconia components: mechanical seal faces, pump plungers, thread guides, circuit substrates, and semiconductor process-chamber parts. Zirconia ships as fiber-optic connector ferrules by the billion and as dental crowns, with Tosoh supplying much of the world's 3Y-TZP powder, and yttria-stabilized zirconia is the sensing element in every automotive oxygen sensor and the standard thermal barrier coating sprayed onto turbine blades.

## Economic profile
Powder is a small part of the cost. Calcined alumina powder runs a few dollars a kilogram and zirconia powder many times that, but a finished alumina part sells for $20–60/kg because the money goes into tooling, firing, and grinding. Diamond grinding after firing is the item that surprises people; on a part with several tight fits it can be most of the piece price, so the useful design skill in this family is knowing which features can be left as-fired. Tooling amortization and kiln time make the cost curve steep in volume and flat over calendar time, since this is a mature industry with no learning curve left to ride. Supply is a handful of Western and Japanese specialists plus a large and improving Chinese base, and moving between them is a requalification rather than a purchase order, because each supplier's powder and firing schedule produce a different flaw population and therefore a different strength distribution. If you are building a business here, the durable asset is process control and the yield data behind it, not the composition.

## Videos

- https://www.youtube.com/watch?v=TIeYnDauwQM — Alumina Ceramic Producing Process ｜How to Make High Density Alumina Ceramic Pieces (csceramic co.,ltd, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=e7Zc0ngnm78 — transformation toughening (MSE Frary, 9 minutes, 5k+ views)
- https://www.youtube.com/watch?v=QfGuXc71qNg — Diamond Grinding & Green Machining of Advanced Ceramics | International Ceramic Engineering ICE | MA (Part Gurus, 4 minutes, 5k+ views)

## Further reading

[Brittle Fracture (DoITPoMS, University of Cambridge)](https://www.doitpoms.ac.uk/tlplib/brittle_fracture/index.php) · [CARES/LIFE Ceramics Analysis and Reliability Evaluation of Structures Life Prediction Program (NASA)](https://ntrs.nasa.gov/citations/20030014949)
