---
number: 6
name: Wrought Aluminum Alloys
part: 2
group: Light alloys
properties: [light, corr, therm]
strength: med
temperature: mod
processing: [form, mach, am]
cost: low
---

## Description
Wrought aluminum is the default lightweight structural metal: 2.70 g/cm³, a modulus of 69 GPa, no ductile-to-brittle transition, and an oxide film that protects it in ordinary atmospheres without any coating. The alloy series tells you the strengthening mechanism and therefore what the metal can do. 1xxx is nearly pure and gets used for conductors; 3xxx and 5xxx are strengthened by solid solution and cold work, so they are formable and weldable but capped around 200–300 MPa; 2xxx, 6xxx, and 7xxx are precipitation hardened, which is where the strength lives, and the T-temper suffix records the heat treatment that produced it. The misconception worth correcting up front is stiffness. Aluminum's modulus per unit density is about 26 GPa per g/cm³, and steel's is also about 26, as are titanium's and magnesium's. Swapping steel for aluminum buys nothing on deflection unless you can make the section thicker, which is exactly why aluminum wins in beams and panels, where a thicker section is worth more than the density penalty, and does not win in a tension member.

## Strengths and weaknesses
The real advantages are density, extrudability, and corrosion behavior. Aluminum extrudes into complex hollow profiles that would be a welded assembly in steel, which routinely saves more cost than the material premium costs, and it conducts heat at 237 W/m·K for pure metal and around 167 for 6061-T6, so it doubles as a heat sink. Recycling takes roughly 5% of the energy of primary smelting, so scrap has real value. The weaknesses are all temperature, joining, and fatigue. Aluminum loses about half its strength by 200 °C and creeps well below that, so it is out of the running for anything hot. Welding softens 6xxx back toward its T4 condition, and 2xxx and 7xxx are not reliably fusion weldable at all, so high-strength aluminum structures are riveted, bolted, bonded, or friction stir welded. It expands at 23 ppm/K, about twice steel, which matters at every mixed-material joint. And there is no fatigue endurance limit: the S-N curve keeps falling, so an aluminum structure is designed to a finite life with an inspection interval rather than to infinite life.

## When to use
Reach for aluminum when mass matters and the part runs below roughly 150 °C: chassis and frames, housings, heat sinks, marine hulls and superstructures, aircraft skins and machined structure, bicycle and vehicle frames, and anything extruded. Pick the alloy from the process, not the datasheet. If it will be extruded or welded, use 6061 or 6063; if it will be formed and welded and see salt water, use 5052 or 5083; if it will be machined from solid and strength governs, use 7075 or 7050; if it is aircraft skin loaded in fatigue, 2024-T3 has better damage tolerance than 7075. Avoid aluminum if the part is stiffness-limited and cannot get thicker, since you gain nothing per kilogram; if it runs hot, where titanium (009) or steel take over; or if it will be fastened directly to steel or carbon fiber in a wet environment without isolation, because aluminum will be the anode. And check whether the mass target justifies the price: aluminum takes weight out of a vehicle body at roughly $8–15 per kilogram saved against $2–4 for advanced high-strength steel (002).

## Key numbers
2.70 g/cm³ and 69 GPa modulus, so about 26 GPa per g/cm³, the same as steel, titanium, and magnesium · 6061-T6 at 310 MPa tensile and 276 MPa yield, about 115 kN·m/kg · 7075-T6 at 572 MPa and 2.81 g/cm³, about 205 kN·m/kg · thermal conductivity 237 W/m·K for pure aluminum and roughly 167 for 6061-T6 · thermal expansion 23 ppm/K, about twice steel's · LME aluminum near $3,280 per tonne in early August 2026, with common mill product roughly $4–8/kg · no fatigue endurance limit, so structures get a finite life and an inspection interval.

## How it fails
Fatigue is the one that defines how aluminum structures are managed. Because there is no endurance limit, every cyclically loaded part is accumulating damage at any stress, so the design deliverable is a life and an inspection program rather than a safe stress. The Aloha Airlines 737 that lost most of its upper fuselage in 1988 is the reference case: fatigue cracks at rows of lap-joint rivet holes linked up into one long crack, and the industry's aging-aircraft inspection rules were rewritten around it. The second mechanism is stress-corrosion cracking in the 7xxx series, which needs sustained tension in the short-transverse direction, meaning through the thickness of a plate or across the grain flow of a forging, plus ordinary humid air. It shows up in thick machined parts and in interference-fit bushings and bolts, and it is the reason T73 and T7351 overaged tempers exist: they trade roughly 10–15% of strength for immunity. Related is exfoliation corrosion, where attack runs along the elongated grain boundaries of rolled plate and lifts the metal apart in leaves, jacking a joint open from inside. Finally, aluminum sits low in the galvanic series, so at any wet joint with steel or carbon fiber the aluminum dissolves; the warning sign is white powdery product bleeding out of a fastener line. In a welded 6xxx structure, expect the failure at the weld toe, because the heat-affected zone is the softest metal in the part.

## Examples
6061-T6 in machined structure, frames, and fixtures; 6063 in architectural and heat-sink extrusion; 5052 and 5083 in boat hulls, tanks, and cryogenic vessels; 2024-T3 in aircraft skins; 7075 and 7050 in wing spars, ribs, and machined aerospace structure; 3104-H19 can bodies with 5182 ends, which is one of the highest-volume single products in metals. The Ford F-150 aluminum body from the 2015 model year is the best-documented mass-market switch, taking about 700 lb out of the truck and forcing self-piercing rivets, structural adhesive, and a rewritten collision-repair network with it. Primary producers are Alcoa, Rio Tinto, Norsk Hydro, Chalco, and Hongqiao; rolled and extruded product comes from Novelis, Constellium, Kaiser Aluminum, and a long tail of regional extruders.

## Economic profile
Aluminum is mostly electricity: smelting takes roughly 13–15 kWh per kilogram, which is why smelters sit next to hydro power in Norway, Iceland, Quebec, and the Pacific Northwest, and why a smelter's viability tracks the power contract more than the metal price. Price is the LME figure plus a regional physical premium plus a fabrication charge, and the premium is where trade policy lands: US Section 232 duties went to 50% in 2025, which raised landed cost for US buyers without changing anything about the metal. China produces roughly 60% of the world's primary aluminum against a self-imposed capacity cap near 45 million tonnes, so incremental global supply increasingly has to come from recycling or from new smelters in places with cheap power. Recycling is the structurally important fact for anyone building a business here: secondary aluminum uses about 5% of the primary energy, scrap trades at a large fraction of primary value, and the constraint on using more of it is sorting and alloy contamination rather than availability. That is also why extrusion and rolling capacity is regional: profiles and coil are expensive to ship relative to their value, so the local converter, not the smelter, is usually who you are actually buying from.

## Videos

- https://www.youtube.com/watch?v=24XHSgFcw5Y — Intro to Wrought Aluminum Alloys - 7075 - 7050 - 6061 - 2024 - Guide to Aluminum (Michlin Metals Inc, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=d9EYBEzJ4yI — Introduction to Aluminum The Heat Treated Tempers - 6061-T6 - 7075-T7351- 2024-T4 (Michlin Metals Inc, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=CoWpdUxxpOk — Which Aluminum Grade Should I Use | Metal Supermarkets (Metal Supermarkets, 5 minutes, 100k+ views)

## Further reading

[Teal Sheets: alloy designations and composition limits (The Aluminum Association)](https://www.aluminum.org/teal-sheets) · [Aluminium Automotive Manual: Materials – Microstructure and properties (European Aluminium)](https://european-aluminium.eu/wp-content/uploads/2022/11/aam-materials-4-microstructure-and-properties.pdf)
