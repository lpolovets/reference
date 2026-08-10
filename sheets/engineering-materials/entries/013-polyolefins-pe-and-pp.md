---
number: 13
name: Polyolefins (PE and PP)
part: 3
group: Commodity plastics
properties: [corr, tough]
strength: low
temperature: low
processing: [mold]
cost: vlow
---

## Description
Polyethylene and polypropylene are the cheapest plastics that do real work, and together they are close to half of all plastic produced. Both are plain hydrocarbon chains with no polar groups on them, and most of their behavior follows from that one fact. There is nothing for acids, bases, or salt solutions to attack, so chemical resistance is excellent and water uptake is essentially zero. There is also nothing for an adhesive or a paint to bond to: surface energy sits near 30 mN/m, and wetting usually needs about 38, which is why polyolefin parts get flame- or plasma-treated before anyone prints on them or glues them. Both are semicrystalline with glass transitions well below room temperature (about -120 °C for PE, near 0 °C for PP), so they stay ductile down to the cold and they creep under sustained load at 20 °C. Density runs 0.90–0.96 g/cm³, which makes them the only common plastics that float.

## Strengths and weaknesses
The case for polyolefins is price at $1–1.6/kg, near-total chemical resistance, no moisture uptake at all (so a molded part is the same size in a desert and a swamp), broad food-contact clearance, fast molding with no resin drying step, and a genuine recycling stream for HDPE and PP. Against that, stiffness is poor: modulus is 1.0–1.5 GPa, roughly one one-hundred-fiftieth of steel's, and continuous service tops out near 90–100 °C for PP and 60–80 °C for HDPE. Nothing sticks to them, so assembly means welding, snap fits, or a surface treatment step. The failure mode that catches people is environmental stress cracking: HDPE held under tensile stress in contact with a detergent or surfactant cracks in weeks at a stress well below yield, and the part passes every static strength test first.

## When to use
Default to a polyolefin for anything that holds a fluid, gets thrown away, or ships in millions of units, as long as stiffness and temperature are not the binding constraints. Use PP when you need the higher service temperature, a living hinge, or a clean autoclave cycle, and HDPE when you need toughness, impact at low temperature, or pipe. Reach for UHMWPE when abrasion is the problem and you can live with a part that is machined or compression molded instead of injection molded. If the part has to be painted, plated, or solvent-bonded, go to ABS (014). If it has to hold a bolt preload or cut a gear tooth, go to nylon or acetal (015). And if it sits outdoors, specify carbon black or accept a two-season life.

## Key numbers
Resin $1–1.6/kg · density 0.90–0.96 g/cm³, so they float · PP tensile about 35 MPa at 0.90 g/cm³, near 39 kN·m/kg · modulus 1.0–1.5 GPa · continuous service 90–100 °C for PP and 60–80 °C for HDPE · surface energy near 30 mN/m against the roughly 38 an adhesive needs · close to half of world plastic volume.

## How it fails
Environmental stress cracking is the mechanism that surprises people. A surfactant or detergent gets into the amorphous regions between crystallites, lets the tie molecules pull apart, and turns a ductile material into a brittle one at a stress well under yield, usually over weeks. Creep is the second: with the glass transition below room temperature, chains keep sliding under load, so a bolted flange loses preload and a loaded shelf sags rather than breaking. Third is photo-oxidation, which chalks and then embrittles an unstabilized part within a season or two outdoors, faster in PP than PE because PP's tertiary hydrogens are easier to abstract; roughly 2–2.5% carbon black is the standard fix and it is why outdoor pipe and geomembrane are black. Watch for a chalky surface, fine crazing at gates and radii, and a part that has visibly changed shape under load.

## Examples
HDPE in milk jugs, jerry cans, PE100 gas and water pipe, and landfill geomembranes. LDPE and LLDPE in film, wire insulation, and rotomolded tanks, kayaks, and Yeti-style coolers. PP in car bumper fascia and battery cases, woven bags, autoclavable labware, spunbond nonwovens for masks and diapers, and living-hinge lids of the Tic Tac type. UHMWPE in hip and knee bearing surfaces, conveyor wear strips, and Dyneema and Spectra fiber for rope and ballistic panels. The producers are ExxonMobil, LyondellBasell, Dow, SABIC, Borealis, Braskem, and Sinopec.

## Economic profile
Polyolefin prices track ethylene and propylene, which track naphtha in Asia and Europe and ethane in the US, so US Gulf Coast crackers running on shale ethane have held a structural cost advantage for a decade. A large capacity build in the US and China between roughly 2017 and 2023 left the industry long, polyethylene margins have been poor since, and several European crackers have closed. For anyone building a product, resin cost is a small share of a molded part's cost, since tooling and cycle time dominate at anything under high volume, so the reason to pick a polyolefin is usually that it molds fast, needs no drying, and survives whatever is in the bottle. The one place the material price does bite is recycled content: food-grade recycled PE and PP carry a premium over virgin resin because supply is short against EU packaging targets, which is the opposite of how recycled material is supposed to price.

## Videos

- https://www.youtube.com/watch?v=fmMPYnl9x7c — What is Polypropylene Plastic | Can it be recycled? (Plascon Plastics, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=umGmyvGEjbQ — How To Bond Polyethylene & Polypropylene Plastics (Phillips Vision: Episode - 123) (Phillips Vision, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=1dOduURR3a8 — What is a Plastic Living Hinge? Hinge Design Basics. (OneMonroe, 4 minutes, 10k+ views)

## Further reading

[Polypropylene (PP) (British Plastics Federation)](https://www.bpf.co.uk/plastipedia/polymers/PP.aspx) · [Handbook of Polyethylene Pipe (Plastics Pipe Institute)](https://plasticpipe.org/common/Uploaded%20files/Technical/PPI%20PEHandbook2022.pdf)
