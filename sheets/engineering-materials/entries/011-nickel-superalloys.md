---
number: 11
name: Nickel Superalloys
part: 2
group: Copper and high-temperature alloys
properties: [heat, strong, corr]
strength: high
temperature: vhigh
processing: [cast, form, am]
cost: med
---

## Description
Nickel superalloys are what lets a turbine run with gas hotter than the melting point of the metal in the flow path. Their strength comes from gamma prime, an ordered Ni3(Al,Ti) precipitate that forms coherently inside the nickel matrix at 60–70% by volume in blade alloys and, unusually, gets stronger as it gets hotter up to about 800 °C rather than softening. The family has two poles. Wrought alloys, above all Inconel 718, are forged and machined into discs, casings, shafts, and fasteners; 718 ages to roughly 1,240 MPa, holds useful properties to about 650 °C, costs $35–60/kg, and is somewhere near a third of all superalloy tonnage. Cast alloys go the other way: directional solidification removes the grain boundaries running across the blade, single-crystal casting removes them entirely, and second-generation alloys such as CMSX-4 and René N5 hold 1,050–1,100 °C of metal temperature while the gas around them runs 1,500–1,700 °C, using film cooling through drilled holes and a 100–300 µm yttria-stabilized zirconia thermal barrier coating to bridge the gap.

## Strengths and weaknesses
No other class of metal keeps useful strength at 0.8 of its absolute melting temperature, and the corrosion-oriented members of the family (Inconel 625, Hastelloy C-276) survive chemistry that destroys stainless. The costs are spread across the whole value chain rather than concentrated in the alloy price. Superalloys machine at 5–15 m/min against 150 m/min or more for steel, and they work-harden ahead of the tool so a dwell puts a hard layer where the next pass has to cut, which means tool life is measured in minutes and finished parts cost far more than their material. Density is 8.2–8.9 g/cm³, so specific strength is around 150 kN·m/kg, no better than press-hardened steel. Welding the gamma-prime-rich alloys causes strain-age cracking during post-weld heat treatment, so blade repair is a specialty trade rather than a shop operation. And the manufacturing itself is the moat: single-crystal casting yields are low, closely held, and concentrated in a handful of foundries worldwide.

## When to use
Superalloys are a temperature answer, so start by checking whether you actually need one. Below about 650 °C, stainless or a ferritic-martensitic steel is far cheaper and easier to make parts from, and moving to a superalloy for margin rather than need is the most common way to overspend. Between roughly 650 °C and 900 °C in a rotating or pressure-bearing part, IN718 or Waspaloy is the default and there is no serious alternative. Above 900 °C in a gas path, you are into cast blade alloys with cooling and coatings, and the design question becomes cooling-air budget rather than metal choice. If the requirement is corrosion rather than heat, pick from the solid-solution alloys (625, C-276, alloy 825) instead of the gamma-prime ones, since you are paying for nickel and molybdenum, not for creep strength you will not use. And above about 1,200 °C the metal has run out: a SiC/SiC ceramic matrix composite (028) does that temperature at roughly a third the density, which is why CMC shrouds and liners have started replacing superalloy ones.

## Key numbers
IN718 aged to roughly 1,240 MPa at 8.19 g/cm³, about 150 kN·m/kg, useful to around 650 °C, at $35–60/kg · single-crystal alloys such as CMSX-4 holding 1,050–1,100 °C metal temperature · gas path temperatures of 1,500–1,700 °C, above the alloy's own melting range · gamma prime at 60–70% by volume in blade alloys, and strength rising with temperature to about 800 °C · thermal barrier coatings 100–300 µm thick · machining at 5–15 m/min, roughly a tenth of steel's or less · LME nickel near $16,750 per tonne in early August 2026.

## How it fails
Creep sets the design life, and it is a budget rather than a limit. At blade temperature the metal deforms slowly under centrifugal load until the tip clearance closes and the blade rubs the shroud, so parts are rated in hours at temperature and the industry's rule of thumb is that roughly 25 °C of extra metal temperature halves creep life. That single sensitivity is why cooling-hole blockage from dust or a coating repair that changes hole geometry is treated as a serious defect. The second mechanism is thermal-mechanical fatigue: every start and shutdown cycles the surface against the interior, and cracks initiate at cooling holes and fillets where the constraint is highest, which is why an engine's life is quoted in cycles as well as in hours. Third is hot corrosion, which is faster than oxidation and works differently: sodium sulfate deposits from sea salt or sulfur-bearing fuel flux away the protective alumina scale, in a low-temperature form around 650–800 °C and a high-temperature form around 800–950 °C, and a marine gas turbine can lose a blade set in a fraction of its rated life to it. Finally, the coating usually fails before the metal. A thermal barrier spalls once the thermally grown oxide under it reaches a critical thickness, and the moment the ceramic comes off, the metal underneath is exposed to the full gas temperature and the creep clock runs many times faster.

## Examples
Inconel 718 in compressor and turbine discs, casings, shafts, and fasteners across essentially every gas turbine; CMSX-4 and René N5 single-crystal high-pressure turbine blades; Mar-M247 in directionally solidified blades; Waspaloy and Udimet 720 in discs; Inconel 625 and Hastelloy C-276 in chemical, marine, and flue-gas service where corrosion rather than heat is the problem; Haynes 282 in advanced ultra-supercritical steam plant. Mill products come from Special Metals, ATI, Carpenter Technology, Haynes International, VDM Metals, and Aubert & Duval; investment castings from Precision Castparts, Howmet Aerospace, and Doncasters. In additive manufacturing, 718, 625, and Hastelloy X are the printable ones, and the gamma-prime-rich blade alloys largely are not, because they crack during printing and post-weld heat treatment.

## Economic profile
The metal price is a minority of the cost. LME nickel near $16,750 per tonne would put raw nickel around $17/kg, and IN718 mill product sells at $35–60/kg because of niobium content, double or triple vacuum melting for cleanliness, small lot sizes, and rigorous certification. The finished part then costs several times the billet again, because of machining rates, buy-to-fly, and inspection. Two inputs carry real supply risk: cobalt, most of which comes from the Democratic Republic of the Congo, and rhenium, which appears at 3% in second-generation single-crystal alloys, is produced only as a molybdenum by-product, and costs orders of magnitude more per kilogram than nickel, which is why later alloy generations have worked to use less of it. The durable business position here is not the composition, which is published in the open literature, but the process yield: single-crystal casting, hot isostatic pressing, coating lines, and the certification packages that go with them. That is also why engine aftermarket repair of hot-section parts is a better business than making them, and why any new entrant claiming a better superalloy should be asked who can cast it and who has qualified it.

## Videos

- https://www.youtube.com/watch?v=RB9mZbtcock — The Insane Properties of Superalloys (The Efficient Engineer, 13 minutes, 100k+ views)
- https://www.youtube.com/watch?v=yR5mR-KoNzA — Gas Turbine Blades and their Heat-Defying Single-Crystal Superalloys (Asianometry, 22 minutes, 100k+ views)
- https://www.youtube.com/watch?v=k6m5iJOk24o — The Story of Nickel Superalloys: Saving the World in a Different Way (The Mat Sci Guy, 13 minutes, 50k+ views)

## Further reading

[Superalloys: A Primer and History (TMS)](https://www.tms.org/Meetings/Specialty/Superalloys2000/SuperalloysHistory.html) · [An Overview of Thermal Exposure on Microstructural Degradation and Mechanical Properties in Ni-Based Single Crystal Superalloys (Materials, via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10003985/)
