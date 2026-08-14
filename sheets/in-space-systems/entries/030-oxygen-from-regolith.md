---
number: 30
name: Oxygen from Regolith
part: 6
group: Surface & resources
orbit: [surf]
scale: [t]
autonomy: ground
customer: [civ]
maturity: concept
---

## Description
Lunar regolith is 40–45% oxygen by mass, locked into silicates and oxides everywhere on the Moon rather than concentrated at the poles, so any route that breaks those bonds turns ordinary dirt into propellant oxidizer and breathing gas. Three routes are seriously studied. Hydrogen reduction passes hydrogen over regolith at 900–1,000 °C, strips oxygen from the iron in ilmenite as water, and electrolyzes the water; it runs cool and it is the most ground-tested, but it only touches one mineral, so a NASA plant model gives about 1% overall yield and needs 50,000 kg of regolith a year to make 500 kg of oxygen. Carbothermal reduction runs far hotter, around 1,600 °C, using methane in a recycled loop to pull oxygen out as carbon monoxide; the same NASA model gives about 10% yield, so 5,000 kg of regolith a year for the same 500 kg of oxygen. Molten regolith electrolysis skips the reagent entirely and passes current directly through molten silicate, releasing oxygen at the anode and leaving an iron-silicon alloy at the cathode. Energy per kilogram of oxygen is the number that decides whether any of this is worth landing, and NASA's own plant sizing of 1.63 kg an hour on 25.8 kW works out to about 16 kWh/kg.

## Strengths and weaknesses
The strength is that the feedstock is everywhere and sunlit, which makes this a much easier place to work than a 40 K permanently shadowed crater, and oxygen is most of the mass of a propellant load in the first place. The routes also separate cleanly on what they cost you. Hydrogen reduction has the mildest reactor and the worst yield, so its 200 kg of regolith a day puts the burden on the excavator; carbothermal moves ten times less regolith, about 20 kg a day for the same output, but needs a reactor at 1,600 °C and a working methane recovery loop. Molten regolith electrolysis has the best thermodynamics and gives structural metal as a byproduct, and its unsolved problem is the anode, because nothing cheap survives molten silicate at 1,600 °C for years and yttria-stabilized zirconia degrades in test. The weakness they share is energy. The thermodynamic floor for splitting silicate is roughly 5–7 kWh per kilogram of oxygen, worked out here from the free energy of silica dissociation, so a real plant at 16 kWh/kg is spending most of its input on heating regolith and on losses, which is also why the three routes land closer together in practice than their chemistry suggests.

## When to use
Make oxygen locally only when there is a customer on the surface consuming tonnes a year, which describes no mission funded today. If the need is breathing gas for a small crew, bring it: a person consumes about 0.9 kg of oxygen a day, so a four-person crew for a month is 108 kg, and landing that costs far less than landing a plant and its reactor. If the need is ascent propellant, the arithmetic changes, because a crewed ascent stage needs tonnes and the oxidizer is most of it. Pick hydrogen reduction if you are flying a first demonstration and want the lowest reactor temperature and the most test heritage, and accept that your excavator does most of the work. Pick carbothermal if excavation and regolith handling are the constraint rather than reactor temperature. Pick molten regolith electrolysis if you also want metal, and only after somebody shows an anode with a multi-year life. In every case size the power system first, because 25 kW continuous through a 14-day night is a fission reactor question, not a solar array question.

## Key numbers
Regolith is 40–45% oxygen by mass · about 16 kWh per kilogram of oxygen at NASA's plant sizing of 1.63 kg/h on 25.8 kW · hydrogen reduction about 1% yield, 50,000 kg of regolith a year for 500 kg of oxygen, roughly 200 kg a day · carbothermal about 10% yield, 5,000 kg a year, roughly 20 kg a day · hydrogen reduction at 900–1,000 °C, carbothermal and molten electrolysis near 1,600 °C · thermodynamic floor roughly 5–7 kWh/kg of oxygen, derived here · a 500 kg/yr plant modeled at about 260 kg total mass including excavator and hoppers

## Examples
NASA's Carbothermal Reduction Demonstration ran an automated reactor in a vacuum chamber at Johnson Space Center with Sierra Space and extracted oxygen from simulant. Molten regolith electrolysis work at NASA and in industry, including Lunar Resources in Houston and Helios in Israel, is at laboratory scale and largely focused on anode life; NASA testing of zirconia-based anodes is published. On another planet the precedent already exists: MOXIE on Perseverance made about 122 g of oxygen across 16 runs from Martian atmosphere rather than regolith, which is the only in-situ oxygen production anyone has demonstrated off Earth. ESA's PROSPECT package will drill and measure at Mons Mouton, which is the prospecting step this depends on.

## Economic profile
No paying customer exists, and that is the honest starting point: every dollar in this field is a civil agency's. The value proposition is delivered mass, since a kilogram of oxygen made on the surface displaces a kilogram that would otherwise cost roughly $1.2M to land on a CLPS task order. A 500 kg/yr plant therefore displaces something like $600M a year of delivered mass, against a modeled plant mass near 260 kg, which lands for about $300M. That looks like a six-month payback and it is not, because the plant number excludes the thing that actually dominates: 25 kW continuously through a 14-day night means a fission surface power unit in the tonnes, plus radiators, plus the spares for machinery that has to run unattended for years in abrasive dust. The other missing piece is demand. Oxygen is only worth making at the rate somebody burns it, and nothing planned this decade consumes tonnes a year on the surface, so a plant sized for a real customer is being designed ahead of the customer by roughly a decade. What would change the picture is a reusable lander refueling on the surface, because that single customer would consume tens of tonnes a year and would justify the reactor on its own.

## Videos

- https://www.youtube.com/watch?v=VbK8GR7vWcI — NASA Extracts Oxygen From Lunar Soil Simulant (NASA Johnson, 3 minutes, 10k+ views)

## Further reading

[Component and System Sensitivity Considerations for Design of a Lunar ISRU Oxygen Production Plant (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20120012846) · [Hybrid lunar ISRU plant: a comparative analysis with carbothermal reduction and water extraction (arXiv)](https://arxiv.org/abs/2408.04936)
