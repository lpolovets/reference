---
number: 5
name: Cast Iron
part: 1
group: Cast iron
properties: [wear, stiff, strong]
strength: low
temperature: vhigh
processing: [cast, mach]
cost: vlow
---

## Description
Cast iron is iron with 2–4% carbon and 1–3% silicon, which is more carbon than the metal can hold in solution, so the excess comes out as free graphite while it solidifies. The shape that graphite takes decides everything. Flakes give gray iron, nodules give ductile iron, short thick worms give compacted graphite iron, and suppressing graphite entirely gives white iron, which is used only where abrasion matters. Ductile iron is not a different alloy so much as a different treatment: about 0.03–0.05% residual magnesium added to the ladle changes the graphite from flakes to spheres and turns a brittle material into one with real elongation. The composition sits near the iron-carbon eutectic, so it melts at 1,150–1,200 °C rather than the roughly 1,500 °C steel needs, which means cheaper furnaces, thinner walls, and better fill. Casting is the only way it is made, and the manufacturing-processes sheet covers those processes; here the point is that no other material gets you a complex, stiff, damped, machinable shape for this little money.

## Strengths and weaknesses
Cast iron is the cheapest route to a complicated part that has to hold its shape. Gray iron's graphite flakes damp vibration roughly an order of magnitude better than steel, which is why machine-tool bases have been gray iron for 150 years and still are, and they break the chip and lubricate the cut, so gray iron machines faster than almost anything else. Compressive strength runs three to four times tensile, which suits the frames, housings, and bases it is used for. The weaknesses follow from the same graphite. Gray iron has essentially no tensile ductility, so it does not bend before it breaks. Its modulus is 80–145 GPa depending on class, well below steel's 200–210, so the stiffness advantage comes from being able to afford a deep ribbed section rather than from the alloy. It is section-sensitive, meaning a thick wall cools slowly, grows coarser graphite, and ends up weaker than the separately cast test bar that qualified the heat. And it is not practically weldable, since the heat-affected zone forms martensite and cracks, so a repair is a specialty operation rather than a shop-floor fix.

## When to use
Choose cast iron when the part is geometrically complex, needs stiffness and damping more than tensile strength, and the volume will pay for a pattern: machine-tool bases and columns, engine blocks and heads, housings, pump and valve bodies, brake rotors, counterweights, and pipe. Pick gray iron when damping, machinability, and thermal conductivity matter and the loading is compressive: bases, blocks, rotors, and manifolds. Pick ductile iron whenever the part sees tension, impact, or a bolted joint that someone will over-torque: crankshafts, suspension knuckles, pipe, wind-turbine hubs. Pick compacted graphite iron only if you are chasing higher cylinder pressure in a diesel block and can pay for the process control, because it is markedly harder to machine than gray iron. Do not use cast iron for a one-off or a low-volume part, where a steel weldment gives you more strength with no tooling; do not use it where the part will be welded into an assembly; and if the driver is weight rather than cost, look at cast aluminum (007), which will be roughly a third the density and several times the price per kilogram.

## Key numbers
Gray iron 150–400 MPa tensile with essentially no elongation · ductile iron 400–900 MPa, with elongation of about 18% at the low-strength end falling to roughly 2% at the top · gray iron modulus 80–145 GPa and ductile iron about 170 GPa, against 200–210 GPa for steel · melts at 1,150–1,200 °C against roughly 1,500 °C for steel · compressive strength three to four times tensile in gray iron · liquid metal under $1/kg, with tooling and machining setting what a casting actually costs.

## How it fails
Gray iron fails by brittle fracture, and the mechanism is built into the microstructure: every graphite flake is effectively a pre-existing crack, so the material has no yield plateau and no plastic reserve. Over-torque a bolt into a gray-iron boss, drop a casting on a corner, or load a base in tension and it breaks cleanly with no bending to warn you. In hot service the failure is growth and heat crazing. Repeated heating lets oxygen run in along the graphite flakes, the casting permanently swells by a percent or more, and the surface develops a network of thermal-fatigue cracks, which is why brake rotors and exhaust manifolds are consumable parts. Ductile iron adds a failure that is specific to how it is made: magnesium fades from the treated melt over roughly ten to twenty minutes, so castings poured late from a ladle can have degenerate graphite and a fraction of the expected elongation while looking identical from outside, which is why foundries run nodularity checks per pour rather than per heat. And section sensitivity means the part often breaks at the place the drawing called thickest, because that section cooled slowest and has the coarsest graphite. Warning signs are a dull gray fracture face with no shear lip, and casting defects, shrinkage porosity, cold shuts, and sand inclusions, which turn up on a machined face after most of the value has been added.

## Examples
Machine-tool bases, columns, and lathe beds from Haas, DMG Mori, and Mazak; engine blocks, heads, and crankshafts; brake rotors and drums; ductile iron water and sewer pipe from McWane, U.S. Pipe, and Saint-Gobain PAM; manhole covers and hydrants; wind-turbine hubs and main frames, which are among the largest ductile iron castings made at 10–40 tonnes apiece; high-chromium white iron mill liners and slurry-pump parts. Compacted graphite iron is the specialty case, with SinterCast process control used in the Ford 6.7L Power Stroke and Audi V6 TDI blocks, where the higher strength lets the block take more cylinder pressure at the same size. The common specifications to know are ASTM A48 for gray iron and ASTM A536 for ductile.

## Economic profile
The metal itself is close to free by engineering-material standards: scrap and pig iron melted in a cupola or an induction furnace, with in-house returns remelted, so the foundry's real input cost is the delta between what it buys and what it ships. Everything else is the foundry. Pattern and core tooling, molding line time, cleaning, and machining set the price, which is why cast iron only makes sense above a few hundred parts and why quoted casting prices are several times the metal price. The structural trend is consolidation: gray iron foundries in the US and Europe have been closing for two decades on energy, labor, and air-permitting costs, and China and India have taken the volume, so lead times and minimum order quantities have stretched even though the material is cheap. Two things follow for anyone building on it. Casting yield, meaning shipped weight divided by poured weight, and machining stock are where a foundry's margin actually lives, so design changes that improve either are worth more than a price negotiation. And the competitive threat to iron castings is not another iron; it is aluminum castings taking weight-driven parts and fabricated steel taking low-volume ones.

## Videos

- https://www.youtube.com/watch?v=GPuX9WncHfE — Types Of Cast Iron And Their Differences | An Overview. (James Sword Engineering , 8 minutes, 50k+ views)
- https://www.youtube.com/watch?v=zn5QMt-byyY — How to Identify Cast Iron, Ductile or Grey Iron (Fireball Tool, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=nk7LUcy3mlg — What is Ductile Iron? || THORS Ductile Iron Fundamentals Course Preview (THORS eLearning Solutions, 4 minutes, 10k+ views)

## Further reading

[Ductile Iron Data (Ductile Iron Society)](https://www.ductile.org/ductile-iron-data/) · [Cast Irons (University of Cambridge)](https://www.phase-trans.msm.cam.ac.uk/2001/adi/cast.iron.html)
