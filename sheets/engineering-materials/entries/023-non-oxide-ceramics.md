---
number: 23
name: Non-Oxide Ceramics
part: 5
group: Technical ceramics
properties: [wear, heat, stiff]
strength: high
temperature: ext
processing: [sint, mach, am]
cost: high
---

## Description
Non-oxide ceramics are carbides and nitrides, and you buy them when alumina runs out of thermal conductivity, thermal shock resistance, or hardness. Silicon carbide carries 120–270 W/m·K depending on how it is densified, with a coefficient of thermal expansion near 4 ppm/K, and that pairing is what lets it shrug off thermal shock: heat leaves fast and the strain per degree is half alumina's, so a temperature gradient generates much less tension. It is also about 2,500 HV hard and 410–450 GPa stiff, which is why it owns mechanical seal faces, kiln furniture, and large lightweight mirrors. Silicon nitride goes the other way, trading some hardness for 800–1,000 MPa flexural strength and 6–7 MPa·√m toughness, which is enough to make it the only ceramic used routinely for rolling-element bearings. Boron carbide is the hardness extreme at roughly 3,000 HV and only 2.52 g/cm³, which is why it is the ceramic in most rifle-rated armor. All of these are strongly covalent and will not sinter on their own, so they are made by reaction bonding, pressureless sintering with additives, or hot pressing, and the route changes the properties as much as the chemistry does.

## Strengths and weaknesses
Nothing else combines this much hardness with this much thermal capability: a SiC seal face runs against another SiC face for years in abrasive slurry, and a silicon nitride ball rolls at 25,000 rpm without the lubrication a steel ball needs. Silicon nitride's low expansion and high strength give it a thermal shock ΔT of 500 °C or more, roughly two and a half times alumina's, and aluminum nitride puts 170–200 W/m·K underneath a power chip while still insulating it electrically. The weaknesses start with price: $50–200/kg for finished parts, two to four times alumina, before the diamond grinding that every tight feature needs. They are still brittle, so the Weibull statistics and the design-in-compression rule from oxide ceramics apply unchanged. And the manufacturing route carries its own limits that datasheets bury: reaction-bonded SiC contains 8–12% free silicon, which softens near 1,400 °C and dissolves in caustic, so a reaction-bonded part fails in service a sintered part would survive.

## When to use
Pick silicon carbide when the requirement is thermal shock, thermal conductivity, abrasion, or dimensional stability at temperature, and you can load it in compression: seal faces, nozzles, kiln furniture, wafer-handling parts, mirror substrates. Pick silicon nitride when there is real contact stress or bending, which in practice means bearings, cutting inserts for nickel alloys, and glow plugs, and specify it in an EV traction motor's bearings when you need to break the shaft-current path electrically rather than add a grounding ring. Pick boron carbide only when mass matters more than anything else, since it is the lightest hard ceramic and also the most expensive and the most temperamental under high-velocity impact. If your temperature is under about 800 °C and the load is mostly compressive, drop back to alumina and save half to three quarters of the cost. If the part has to survive thermal cycling above 1,200 °C with any tensile load at all, a monolithic ceramic is the wrong answer and you want a ceramic matrix composite instead.

## Key numbers
Silicon carbide at 120–270 W/m·K, CTE about 4 ppm/K, roughly 2,500 HV, and 410–450 GPa · silicon nitride at 800–1,000 MPa flexural, 6–7 MPa·√m fracture toughness, CTE about 3.2 ppm/K · thermal shock ΔT roughly 350–400 °C for SiC and 500 °C or more for silicon nitride, against about 200 °C for alumina · boron carbide at 2.52 g/cm³ and roughly 3,000 HV · aluminum nitride at 170–200 W/m·K while electrically insulating · finished parts $50–200/kg.

## How it fails
The brittle statistics are the same as any ceramic, but the practical triggers are different, and most of them are chemical or contact-driven rather than a single overload. A silicon carbide seal face fails when the lubricating film breaks down: friction heating puts a thermal gradient into the face, it heat-checks into a network of radial cracks, and one of them runs. Silicon nitride bearings fail by rolling contact fatigue, where a subsurface inclusion or a machining defect grows a spall over millions of cycles, which is the closest thing this family has to a warning. Two chemical ones catch people out: reaction-bonded SiC loses its free silicon to caustic and to temperatures near 1,400 °C, and aluminum nitride hydrolyzes in water to aluminum hydroxide and ammonia, so an AlN substrate stored or cleaned wet quietly loses the thermal conductivity it was bought for. Boron carbide has its own limit, since above roughly 20 GPa of impact pressure it amorphizes locally and loses strength, which is why the hardest armor ceramic is not automatically the best one against high-velocity threats.

## Examples
Essentially every industrial pump seal has a silicon carbide face, supplied through John Crane, EagleBurgmann, and Flowserve, with the material from Saint-Gobain (Hexoloy), 3M, Schunk, or Morgan Advanced Materials. Mersen Boostec built the 3.5 m SiC primary mirror for ESA's Herschel telescope and Gaia's SiC optical bench, which is the clearest demonstration of the stiffness-per-kilogram case. Toshiba Materials, CoorsTek, and CeramTec supply silicon nitride bearing balls for machine-tool spindles and for the hybrid bearings now standard in EV traction motors. Boron carbide goes into NIJ Level IV armor plates and into reactor control rods as a neutron absorber. Kyocera, Denka, and Maruwa make the aluminum nitride substrates in power modules and RF packages. Single-crystal SiC wafers for power devices are a different product made a different way, and the semiconductor-manufacturing sheet covers those.

## Economic profile
Cost here is dominated by densification and grinding, not by powder. Hot pressing and hot isostatic pressing tie up expensive equipment for hours per batch, pressureless sintering needs tightly controlled powder and additive chemistry, and everything with a tolerance gets diamond ground, so finished parts land at $50–200/kg against $20–60 for alumina. The one part of this family with a real cost curve is aluminum nitride, pulled down by power-electronics volume, and the one with a real growth story is silicon nitride, where EV traction bearings and power-module substrates have both moved from niche to platform in about a decade. Supply is concentrated in a small set of Western and Japanese specialists with Chinese producers moving up the quality ladder, and qualification is slow because the flaw population depends on the specific plant and firing schedule. If you are underwriting a business here, the question is whether the value sits in the powder, the densification know-how, or the finish grinding, because those are three different companies and only the middle one is hard to copy.

## Videos

- https://www.youtube.com/watch?v=zhJhj8J4m9I — Advanced Engineering Ceramics (International Syalons, 2 minutes, 50k+ views)
- https://www.youtube.com/watch?v=FDUNsRRHVPo — The Manufacturing of Silicon Nitride (CTL Amedica, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=nT2NY3U388A — Why Ceramic Armor? Hard but brittle! (Military History Visualized, 12 minutes, 100k+ views)

## Further reading

[Effect of Silicon Nitride Balls and Rollers on Rolling Bearing Life (NASA)](https://ntrs.nasa.gov/citations/20050175860) · [Silicon Carbide Ceramics for Armor Applications: A Review of Sintering Methods and Additive Systems (Molecules)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13075016/)
