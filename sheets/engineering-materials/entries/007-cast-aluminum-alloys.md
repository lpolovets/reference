---
number: 7
name: Cast Aluminum Alloys
part: 2
group: Light alloys
properties: [light, therm, corr]
strength: med
temperature: mod
processing: [cast, mach]
cost: low
---

## Description
Cast aluminum is a different alloy world from wrought aluminum, and most of the aluminum in a car is here rather than in rolled or extruded form. The controlling addition is silicon, at 7–12%, which puts the alloy near the aluminum-silicon eutectic, drops the melting range, and makes the metal fluid enough to fill a thin cavity. Two alloys cover most of the field. A356 is 7% silicon with a little magnesium, cast in sand or permanent molds, heat treatable to about 262 MPa with roughly 5% elongation, and weldable, which makes it the structural casting alloy. A380 and its Japanese equivalent ADC12 are the high-pressure die-casting alloys: 8.5% silicon plus 3.5% copper and, deliberately, up to 1.3% iron, because iron stops the casting from soldering itself to the steel die. That iron is why A380 reaches about 325 MPa but only around 3% elongation. The casting processes themselves are on the manufacturing-processes sheet; what matters here is that the process and the alloy are chosen together, and the process decides which properties you can actually have.

## Strengths and weaknesses
Casting buys geometry. A die casting comes out of the machine as a near-net shape with walls down to about 1.5–2 mm, bosses, ribs, and cored holes already in place, in a cycle measured in tens of seconds, and no other route gets that combination at that cost. The alloys keep aluminum's density and most of its thermal conductivity, and because they tolerate scrap chemistry they are made largely from recycled metal. The weaknesses come from how the metal solidifies. Aluminum shrinks roughly 5–7% by volume on freezing, so sand and permanent-mold castings need risers and a feeding path or they pull voids. High-pressure die casting fills so fast that it entrains air, and that trapped gas means a conventional die casting cannot be solution heat treated (it blisters) and cannot be reliably welded, which is why die-cast parts are used as-cast and joined mechanically. Porosity also blocks pressure-tight applications and ruins a decorative anodized finish. High-vacuum die casting and the structural alloys built for it (Silafont-36, Castasil-37, Aural) are the fix, and they cost more.

## When to use
Cast aluminum when the part is complex, moderately loaded, and made in volume: housings, transmission cases, engine blocks and heads, brackets, wheels, heat sinks, and electronics enclosures. Choose the process first. If the part must be heat treated, welded, pressure-tight, or fatigue-critical, use A356 in a sand or permanent mold and accept the longer cycle and more machining. If it is a high-volume housing where as-cast strength is enough, use A380 or ADC12 in a die and let the die do the work. If it needs die-casting economics and structural properties both, you are into high-vacuum die casting with a structural alloy, and the price goes up accordingly. Zinc is the contrast worth checking before you commit: Zamak 3 casts at about 6.6 g/cm³ against aluminum's 2.7, so parts are heavier, but it pours at around 420 °C instead of 660–700 °C, which is gentle enough that a zinc die outlives an aluminum die by a large multiple, it holds walls down to 0.3–0.6 mm, and it plates directly to a bright finish. For a small, thin, decorative or precise part in high volume, zinc usually beats aluminum on total cost even though it loses on weight. If the part needs full wrought properties, machine it from bar (006) and pay for the chips.

## Key numbers
A356-T6 at about 262 MPa and roughly 5% elongation in permanent mold · A380 and ADC12 die cast at about 325 MPa but only around 3% elongation, giving roughly 118 kN·m/kg · iron held at 0.7–1.3% in die-casting alloys for die release, at a direct cost in ductility · solidification shrinkage roughly 5–7% by volume · die-cast aluminum walls typically 1.5–2 mm against 0.3–0.6 mm for zinc · zinc at 6.6 g/cm³ poured near 420 °C, against 660–700 °C for aluminum · giga-press machines at 6,000–9,000 tonnes of clamping force.

## How it fails
Castings fail from their defects, not from their alloys, and porosity is the defect. Gas porosity comes from air entrained during a turbulent fill and from hydrogen dissolved in the melt; shrinkage porosity comes from a section that froze without a feed path. Either one intersecting a machined sealing face makes the part leak, which is usually discovered on a pressure test at the end of the line after all the machining value has been added, and either one below the surface is a fatigue crack starter, so a casting's fatigue strength is set by its largest defect rather than by its composition. That is why cast fatigue data scatters so widely and why radiographic or CT acceptance classes are written into casting drawings. Two more mechanisms are specific to the process. Trapped gas expands during a solution treatment and blisters the skin, which is the direct reason conventional die castings are not heat treated. And hot tearing opens a ragged crack at a restrained corner or boss while the metal is still semi-solid, so it looks like a casting flaw rather than a fracture. In service, the iron-bearing β-phase platelets in high-iron die-casting alloys behave like internal cracks and are most of the reason A380 breaks at 3% elongation, so a die-cast bracket that is overloaded snaps rather than bends.

## Examples
A356-T6 low-pressure cast road wheels; 319 and A356 engine blocks and cylinder heads; A380 and ADC12 transmission cases, gearbox housings, brackets, and consumer-electronics frames; high-vacuum structural castings in shock towers and body nodes at Audi, Ford, and most European OEMs. The Tesla Model Y underbody giga-castings are the landmark case, replacing on the order of 70 stamped and welded parts with one casting off an IDRA press. Zinc's territory is a good contrast set: locks, hinges, connector shells, zippers, and plated hardware, mostly in Zamak 3 and 5. Casting suppliers include Nemak, Ryobi, and Georg Fischer, with machine builders Bühler and IDRA.

## Economic profile
Cast alloys are the aluminum industry's recycling sink. Silicon-bearing casting compositions tolerate the mixed chemistry of post-consumer scrap that wrought alloys cannot use, so cast alloy prices sit below wrought and carry a much smaller energy and carbon footprint than primary metal. The cost of a casting is tooling plus cycle time plus scrap rate, in that order: a die represents a real capital commitment amortized over the program, cycle time sets the machine rate, and a few percent of scrap is the difference between a profitable job and a loss. Giga-casting pushed all three numbers up together. A 6,000–9,000 tonne press with its cell, robots, and trim tooling is a major installation, and the payoff is deleting assembly line and labor rather than saving metal, which also concentrates risk: one bad casting scraps far more value than one bad stamping, and a damaged structural casting can total a vehicle. The most useful spillover is alloy development. Because a 1.5 meter casting distorts in a solution furnace, giga-casting forced self-hardening alloys that skip heat treatment and tolerate higher recycled-scrap iron, and those alloys make ordinary castings cheaper and greener too.

## Videos

- https://www.youtube.com/watch?v=BnxzUXeGgsU — Which Aluminum Alloy Should You Use? | 319 vs A356 vs A380 Explained (Batesville Products, Inc., 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=KVS0GAjLlao — How to prevent/ manage POROSITY in PRESSURE DIE CASTING | Serious Engineering: Ep 29 (Star Rapid, 7 minutes, 10k+ views)

## Further reading

[Aluminium Automotive Manual: Manufacturing – Casting methods (European Aluminium)](https://european-aluminium.eu/wp-content/uploads/2022/11/aam-manufacturing-1-casting-methods.pdf) · [Microstructural Characteristics of High-Pressure Die Casting with High Strength-Ductility Synergy Properties: A Review (Materials, via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10004674/)
