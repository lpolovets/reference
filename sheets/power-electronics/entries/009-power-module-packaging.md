---
number: 9
name: Power Module Packaging
part: 2
group: Packaging & passives
power: [kw, mw]
voltage: [mains, mv]
semiconductor: [si, sic]
uses: [ev, ind, grid]
maturity: scale
---

## Description
A power module is the assembly that turns bare transistor and diode dies into a part someone can bolt to a heatsink. In the standard construction the die is soldered or silver-sintered onto a direct-bonded-copper substrate, a ceramic sheet with copper foil bonded to both faces, which carries current on top, passes heat down, and holds off the module's voltage between the two. That substrate is soldered to a copper or AlSiC baseplate, the top of each die is connected with aluminum wire bonds a few hundred micrometers thick, and the whole stack is covered in silicone gel inside a plastic housing. Ceramic choice sets both the heat path and the ruggedness: alumina is cheap and conducts about 24 W/m·K, aluminum nitride reaches roughly 170 but is brittle, and silicon nitride at about 80–90 W/m·K is the automotive default because it survives thermal cycling that cracks AlN. Every interface in that stack joins materials with different thermal expansion, and the module heats and cools every time the load changes.

## Strengths and weaknesses
A module hands the designer a tested half bridge or six-pack with a known thermal resistance, a defined creepage distance, and one mounting operation instead of dozens of solder joints. It also hands over its own lifetime. Aluminum expands at about 23 ppm/K against 3–4 ppm/K for the die, so every temperature swing works the bond wire heel back and forth until it cracks or lifts, and the solder under the die fatigues the same way; both are packaging failures, and the silicon or SiC inside is usually still good. Life falls steeply with the size of the swing, roughly as the junction temperature swing to the fourth to sixth power, so cutting a 100 K swing to 80 K multiplies cycles by (100/80)^4 to (100/80)^6, or 2.4x to 3.8x (arithmetic done here, not a published figure). The other weakness is inductance: a wire-bonded commutation loop usually measures 10–30 nH, and at the 5–10 kA/µs a SiC module switches, that is enough voltage overshoot to force derating; planar and multilayer interconnects bring the same loop under 5 nH.

## When to use
Use a module rather than paralleled discretes once you are above roughly 20–30 kW or at 1,200 V, where the layout, bus bar and assembly labor for discrete packages cost more than the module premium. Specify silver-sintered die attach and copper wire bonds for anything with an automotive or traction duty cycle: the price is a sinter press and a copper-metallized die, and the return is power cycling capability roughly 10–40x the soldered aluminum-bonded stack. Choose active-metal-brazed silicon nitride over alumina where the module sees large temperature swings, and over aluminum nitride where it sees mechanical stress, since AlN conducts better and cracks sooner. Move to a planar interconnect, meaning a copper clip, a sintered flexible sheet, or a double-sided cooled sandwich, when stray inductance or the single-sided heat path is what limits the design, and expect the tooling and qualification to cost far more than the parts. If the application is a slow industrial drive with modest cycling, the ordinary soldered and aluminum-bonded module is cheaper and lasts long enough.

## Key numbers
Alumina about 24 W/m·K, silicon nitride 80–90, aluminum nitride roughly 170 but brittle · aluminum wire expands at about 23 ppm/K against 3–4 for the die · life goes as the junction temperature swing to the fourth to sixth power, so 100 K to 80 K is 2.4–3.8x the cycles (derived here) · silver sinter plus copper wire raises power cycling roughly 10–40x over solder and aluminum · wire-bonded loop inductance usually 10–30 nH against under 5 nH for planar designs · modules displace discretes above roughly 20–30 kW

## Examples
Infineon's HybridPACK and PrimePACK families and its .XT interconnect, which pairs sintered die attach with copper wire bonds; Semikron Danfoss's SKiN modules, which replace the wire bonds with a sintered flexible sheet; Denso's double-sided cooled modules in Toyota hybrids; ECPE's AQG 324 guideline, which is what an automotive traction module is actually qualified against.

## Economic profile
Packaging is where the cost of a silicon module and the warranty risk of every module both sit. In a silicon IGBT module the dies are usually a minority of the cost and the substrate, baseplate, assembly and test are the rest, so packaging improvements move the price directly; in a SiC module the die can be most of the cost, which flips the calculation and makes it worth paying for packaging that lets a smaller die run hotter. Silver sinter costs a paste that is mostly silver plus a press that handles one module at a time, and it is bought because the alternative is a warranty claim: a traction module that fails at year eight is a recall, not a spare part. Planar and double-sided-cooled construction costs more again and is justified mainly where the vehicle maker is selling power density. Buyers are concentrated, since a handful of automakers and drive builders take most of the volume, so module prices are negotiated against multi-year programs rather than listed. Costs also fall slowly here compared with the die, because the improvements are assembly equipment and qualification time rather than a lithographic shrink.

## Videos

- https://www.youtube.com/watch?v=xFNS1S0xedY — 3-Phase IGBT Module Teardown - Fuji 7MBP50RA120 From 3 kW Omron Servo Drive - Isolation, Day 36 (Kaizer Power Electronics, 10 minutes, 10k+ views)
- https://www.youtube.com/watch?v=cvTGQYs1dHc — HITACHI Inverter Teardown!! Audi e-tron. Wow it's Made in JAPAN ! (DENKI OTAKU, 13 minutes, 50k+ views)

## Further reading

[Thermomechanical Reliability Aspects of Automotive Power Electronics: Current Status and Future Trends (National Renewable Energy Laboratory)](https://www.osti.gov/biblio/2283032) · [Review of Packaging Schemes for Power Module (University of Twente)](https://ris.utwente.nl/ws/files/249969490/Hou2020review.pdf)
