---
number: 1
name: Carbon and Low-Alloy Steel
part: 1
group: Carbon and alloy steel
properties: [strong, tough, stiff]
strength: low
temperature: vhigh
processing: [form, mach, am]
cost: vlow
---

## Description
Carbon steel is iron with 0.05–1.0% carbon and very little else; low-alloy steel adds a few percent of chromium, molybdenum, or nickel so that the hardening reaches the middle of a thick section. Two facts set everything else on this sheet. Young's modulus is 200–210 GPa regardless of grade, alloy content, or heat treatment, so no steel is stiffer than any other steel and a stiffness problem can only be solved with a bigger section. And carbon plus a quench-and-temper cycle moves yield strength from 250 MPa in mild A36 to roughly 1,600 MPa in 4340, inside one alloy family, using furnaces every heat treater already owns. The AISI-SAE numbering encodes the recipe: 10xx is plain carbon with the last two digits giving hundredths of a percent carbon, 41xx adds chromium and molybdenum, 43xx adds nickel on top. At roughly $1/kg for hot-rolled product it is the cheapest structural metal there is, which makes it the baseline every other material here has to beat.

## Strengths and weaknesses
Steel is cheap, stiff, tough, weldable, available in every form from 0.2 mm strip to 300 mm plate, and recycled at full value. It also has a fatigue endurance limit at roughly half its tensile strength, so a steel part can be designed for infinite life instead of for a finite life plus an inspection interval, and aluminum, magnesium, and polymers cannot do that. The weaknesses are density and rust. At 7.85 g/cm³ its specific strength is about 50 kN·m/kg, the lowest of any structural metal on the sheet, and bare steel corrodes at a rate you have to design around, so paint, zinc, or oil is not optional outdoors. The failure mode that catches people out is brittle fracture: carbon steel is body-centered cubic and has a ductile-to-brittle transition, typically somewhere between -50 °C and +20 °C depending on grade, section thickness, and steelmaking cleanliness, so a plate that is ductile in a room-temperature tensile test can fracture with no warning on a cold morning. Weldability also falls as strength rises. Above a carbon equivalent of roughly 0.45 you need preheat and controlled cooling or the heat-affected zone cracks.

## When to use
Start here and make everything else justify a premium. Pick carbon steel whenever the part is limited by strength, stiffness, or cost and the environment is dry, painted, or oiled: frames, brackets, shafts, gears, fasteners, pressure vessels, buildings, and anything welded. If it needs to be harder or stronger, change the heat treatment before you change the material, because 4140 hardened to 45 HRC costs nearly the same per kilogram as 1018. Leave the family only when one specific constraint binds. If that constraint is corrosion, price paint or hot-dip galvanizing first and move to stainless (004) only when a coating cannot be inspected or maintained, since stainless costs three to six times as much per kilogram. If it is weight, aluminum (006) has the same stiffness per kilogram at a third the density, so it helps only where you can afford a thicker section. If the part is a stamped body panel, the answer is advanced high-strength sheet (002) rather than mild steel. And if service runs below about -20 °C, specify Charpy impact energy at the service temperature rather than assuming the room-temperature datasheet applies.

## Key numbers
Young's modulus 200–210 GPa across every grade and heat treatment · density 7.85 g/cm³, so specific strength about 50 kN·m/kg for mild steel · yield strength 250 MPa for A36 up to roughly 1,600 MPa for quenched-and-tempered 4340 · fatigue endurance limit near half the tensile strength · ductile-to-brittle transition typically between -50 °C and +20 °C · carbon equivalent above roughly 0.45 needs preheat to weld · US hot-rolled coil around $1,150 per short ton in early August 2026, about $1.25/kg, against a longer-run $0.7–1.2/kg range.

## How it fails
Three mechanisms account for most steel failures. General corrosion thins the section from the outside, which is easy to see and easy to prevent, so it rarely causes surprises; pitting and crevice attack under a failing coating or inside a lap joint do, because the lost section is hidden until something leaks or buckles. Brittle fracture is the one that takes down structures. Below the transition temperature a crack runs the length of a plate in a fraction of a second with essentially no plastic deformation and no prior warning, which is what split the Liberty ships and why pressure-vessel and arctic codes are written around notch toughness rather than tensile strength. The third is hydrogen embrittlement in high-strength grades. Above roughly 1,200 MPa, hydrogen absorbed during electroplating, pickling, or cathodic protection migrates to the most highly stressed region and cracks the part hours to days after assembly under a load it has already carried, which is why plated high-strength fasteners are baked within hours of plating. The warning signs worth looking for are rust staining bleeding out of faying surfaces, cracks starting at weld toes and at any abrupt change of section, and beach marks on a fracture face, which point straight back to where the fatigue crack started.

## Examples
A36 and A992 hot-rolled sections in buildings and bridges; API 5L line pipe; 1018 and 1045 bar for shafting; 4140 and 4340 in axles, crankshafts, and landing-gear forgings; 8620 case-carburized gears; A516 pressure-vessel plate; and rebar, which is the largest single tonnage of all. The producers are among the largest industrial companies on earth: China Baowu, ArcelorMittal, Nippon Steel (which completed its acquisition of U.S. Steel in 2025), HBIS, POSCO, Nucor, and Steel Dynamics.

## Economic profile
Steel is made two ways and the split drives the economics. Integrated mills reduce iron ore with coking coal in a blast furnace and refine it in a basic oxygen furnace, which is capital-heavy, has to run continuously, and emits roughly 1.8–2.3 tonnes of CO2 per tonne of steel. Electric arc furnaces melt scrap, cost far less to build, can follow the power price, and emit a fraction of that; they are about 70% of US production and a much smaller share of China's. Price is set regionally by scrap and iron-ore cost plus trade policy, and policy currently dominates: US Section 232 duties went to 50% in 2025 and were extended to a long list of derivative products, which is why US hot-rolled coil sat near $1,150 per short ton in mid-2026 while world prices ran well below that. China produces about 52% of world crude steel, and its export volumes set the floor everywhere else. Three practical consequences for anyone building on steel: the material is a small share of a finished part's cost, so machining and coating decisions matter more; scrap carries real resale value at end of life, which composites do not; and the green-steel projects (HYBRIT, Stegra, and several hydrogen direct-reduction plants behind them) are selling a carbon attribute at a premium rather than a better material, so their customers are the ones with scope-3 targets rather than the ones with engineering problems.

## Videos

- https://www.youtube.com/watch?v=VRBpqM6ESrg — Understanding Steels and Heat Treatment (The Efficient Engineer, 25 minutes, 500k+ views)
- https://www.youtube.com/watch?v=86igaLqe_dc — Steel Numbering System (Jason Lonon Toolmaker, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=NntC3T0J7zw — How carbon content affects mechanical properties in steel microstructures (Taylor Sparks, 6 minutes, 10k+ views)

## Further reading

[Steel material properties for structural design and performance (SteelConstruction.info)](https://www.steelconstruction.info/Steel_material_properties) · [Ferrous Alloys, Part IB lecture notes (University of Cambridge)](https://www.phase-trans.msm.cam.ac.uk/abstracts/L10.pdf)
