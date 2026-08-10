---
number: 24
name: Technical Glass
part: 5
group: Glass and carbon
properties: [opt, corr, heat]
strength: vlow
temperature: vhigh
processing: [form, mach]
cost: low
---

## Description
Technical glass is an amorphous silicate that is transparent, chemically inert, and dimensionally about as stable as any material available, and the property that separates the family is thermal expansion. Soda-lime glass, which is nearly all the glass ever made, expands at about 9 ppm/K. Borosilicate 3.3 drops that to 3.3, which is the whole reason for laboratory glassware and cookware, since a lower expansion coefficient means a smaller stress for the same temperature gradient. Fused silica reaches 0.55 ppm/K and holds continuous service near 1,000 °C, which puts it in furnace tubes, semiconductor process ware, and precision optics. Strength works differently from every other material on this sheet: the Si-O bond is good for several gigapascals, but real glass fails from surface flaws at a few tens of megapascals, so designers work to roughly 7 MPa for annealed glass under sustained load. Everything that makes glass stronger works by putting the surface into compression so those flaws cannot open, which is what thermal tempering and ion exchange do, and the manufacturing-processes sheet covers both as processes.

## Strengths and weaknesses
Glass is transparent from the ultraviolet into the near infrared depending on composition, it resists nearly every chemical except hydrofluoric acid and hot alkali, it does not creep, outgas, or age, and float glass costs $1–2/kg. Borosilicate takes thermal shock that would crack any ceramic in this part of the sheet, and fused silica is the reference material for anything that has to hold a dimension. The weakness is a single one with several faces. Glass has no ductility and a fracture toughness under 1 MPa·√m, roughly a hundredth of structural steel's, so its strength is set by whatever scratch, edge chip, or inclusion happens to be worst. That number is not stable either: under sustained tension in humid air, water attacks the crack tip and existing flaws grow slowly, so a glass part loaded for a year fails at a lower stress than the same part loaded for a minute. Tempering fixes the surface flaws and creates a new failure mode of its own, because once the compressive layer is breached the stored energy dices the whole pane at once.

## When to use
Specify glass when you need optical transmission, chemical inertness, or dimensional stability, and the part can be designed so no surface sees sustained tension. Choose by expansion coefficient first: soda-lime where temperature is stable and cost matters, borosilicate where the part is cycled or heated, and fused silica where you need deep-UV transmission or an expansion coefficient near zero, at ten to a hundred times the price. If the part has to survive impact or handling, do not design against annealed strength; specify thermally tempered glass for roughly 100 MPa of surface compression, or ion exchange for 700–900 MPa in a 30–50 µm case, which is what a phone cover glass is. Remember that a tempered part cannot be cut, drilled, or ground afterwards, so every hole and edge has to exist before the furnace. If the requirement is impact resistance rather than scratch resistance or optical quality, use polycarbonate or PMMA instead and accept that they scratch, yellow, and expand eight times as fast.

## Key numbers
Thermal expansion: soda-lime about 9 ppm/K, borosilicate 3.3, fused silica 0.55 · annealed glass designed to roughly 7 MPa under sustained load, against a theoretical bond strength in the gigapascals · thermal tempering adds roughly 100 MPa of surface compression, ion exchange 700–900 MPa in a 30–50 µm layer · fracture toughness under 1 MPa·√m, against 50–150 for structural steel · continuous service near 500 °C for borosilicate and near 1,000 °C for fused silica · float glass $1–2/kg.

## How it fails
Glass fails in tension from a surface flaw, and the flaw almost always arrives after manufacture: a handling scratch, a chipped edge from a bad cut, or a hard particle dragged across the surface. Because the flaw population sets the strength, measured strengths scatter widely and the design value has to be a low percentile rather than an average, the same Weibull problem the ceramics have with an even lower modulus. Two mechanisms are specific to glass and worth knowing. Static fatigue means a part under constant tension in humid air gets weaker with time, because water reacts at the crack tip and the crack extends subcritically, so a shelf that survived installation can break years later under the same load. And tempered glass carries a rare late failure of its own: a nickel sulfide inclusion left from melting slowly changes phase and expands, and if it sits inside the tensile core it detonates the pane spontaneously, sometimes years after installation, with no impact and nothing to inspect for beforehand.

## Examples
Corning, Schott, AGC, and Nippon Electric Glass supply most of the technical glass in the world. Corning's Gorilla Glass is the volume ion-exchange product, and Schott's Borofloat and Duran are the reference borosilicates. Heraeus and Tosoh make fused silica for semiconductor process tubes, photomask substrates, and deep-UV optics. Type I borosilicate tubing drawn by Schott (Fiolax), Corning (Valor), and NEG becomes pharmaceutical vials and syringes, which is the segment that ran short during COVID vaccine manufacturing. Architectural tempered and laminated glass comes from Guardian, Vitro, Saint-Gobain, Xinyi, and Fuyao, and glass-ceramic cooktops and telescope blanks are a separate branch of the same family.

## Economic profile
Float glass is one of the cheapest engineered materials made, at $1–2/kg, because the process is continuous, enormous, and about a century into its optimization. Cost rises steeply with purity and expansion control: borosilicate tubing runs a few dollars a kilogram, and optical or semiconductor-grade fused silica runs one to two orders of magnitude above that. Float lines and tube-drawing lines are billion-dollar capital assets that cannot be throttled, so the industry is cyclical, regionally traded on freight cost, and consolidated among a handful of firms. Energy is the largest variable cost in melting, which is why European glassmakers were squeezed hard by gas prices after 2022 and why electric and hybrid furnaces are being built now. Two segments have real pricing power: pharmaceutical tubing, where qualification is regulatory and switching suppliers restarts it, and specialty display and optical glass, where composition and forming tolerance are proprietary. Commodity flat glass has neither, and it competes on freight and furnace utilization.

## Videos

- https://www.youtube.com/watch?v=dwKzoQdj1v8 — The Story of Borosilicate Glass: Why Pyrex was Special (The Mat Sci Guy, 12 minutes, 50k+ views)
- https://www.youtube.com/watch?v=y02AXdec1sE — How to chemically strengthen glass (eg Gorilla Glass) (Applied Science, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=Kir5hpVbp4w — How Is Toughened Glass Different To Ordinary Glass? | BBC Earth Science (BBC Earth Science, 2 minutes, 10k+ views)

## Further reading

[Influence of Water on Crack Growth in Glass (NIST)](https://nvlpubs.nist.gov/nistpubs/sp958-lide/181-183.pdf)
