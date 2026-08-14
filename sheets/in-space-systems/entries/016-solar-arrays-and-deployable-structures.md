---
number: 16
name: Solar Arrays and Deployable Structures
part: 4
group: Power generation & storage
orbit: [leo, geo, cis, deep]
scale: [kg, t]
autonomy: auto
customer: [civ, def, com, sci]
maturity: ops
---

## Description
A spacecraft solar array is a set of triple-junction cells carried on a structure that has to survive launch folded and then open exactly once. The cells are gallium indium phosphide on gallium arsenide on a germanium substrate, roughly 30% efficient, and at Earth's distance the Sun delivers 1,361 W/m², so a packed array makes about 400 W/m² at the start of life. What separates one design from another is the structure, and the number that matters is watts per kilogram. Cells bonded to the spacecraft's own skin give 20–40 W/kg and need no mechanism at all. Rigid deployable panels, usually aluminum honeycomb with composite face sheets on a hinged yoke, give 30–70 W/kg. Flexible blankets give the most: Redwire's Roll-Out Solar Array stores strain energy in two composite booms that unroll the blanket with no motor driving the deployment, and reaches about 100 W/kg. The six roll-out arrays retrofitted to the ISS produce over 20 kW each and take the station from 160 kW to 215 kW. NASA's survey of flown missions found they cluster near 30 W/kg overall, with the best array ever flown around 200 W/kg, and nothing below 1 W/kg.

## Strengths and weaknesses
Solar is by a wide margin the cheapest watt available in space, it consumes nothing, and it fades slowly enough to predict, so a triple-junction array in GEO is usually sized to lose 1–2% of its output a year and specified to hold 75–85% of beginning-of-life power at 15 years. The weakness is the deployment. Anything folded has to unfold once with no repair, through hinges, latches, tie-down cutters, and a synchronizing cable that cannot be fully tested in the configuration it flies, because on the ground the structure is carrying its own weight. Lucy launched in 2021 with one of its two circular fan arrays unlatched; after a year of attempts NASA stopped at over 98% deployed and committed to flying the 12-year mission in that state, and Mars Global Surveyor flew with a panel a broken damper had left short of its latch, which forced a gentler and much longer aerobraking plan. Output also falls with the square of distance, to roughly 50 W/m² at Jupiter, and area costs something even close to Earth, since a large array in low orbit adds drag and a solar-pressure torque the attitude system has to trim. Strings fail individually over a long life as well: on the ISS each failed string costs about 300 W.

## When to use
If the load is under a few hundred watts and you would rather have no deployment failure mode at all, mount the cells on the body and accept 20–40 W/kg. If you need kilowatts, use a deployable, and pick rigid panels when stowed volume is not the binding constraint and a roll-out or fan-fold blanket when it is, since a blanket stows in a fraction of the volume and roughly doubles the watts per kilogram. Size the array at end of life, with degraded cells and the worst sun angle, because a GEO array sized at beginning of life is 15–25% short in the year that matters. Past roughly 3–5 AU stop asking the question, because the flux is too low and radioisotope power in entry 18 is the alternative. On a surface with a long night, the array is not what sizes the system; the storage is, which is the arithmetic in entries 17 and 19.

## Key numbers
About 30% triple-junction cell efficiency and roughly 400 W/m² at Earth distance · 20–40 W/kg body-mounted, 30–70 W/kg rigid deployable, about 100 W/kg for a roll-out blanket · flown missions cluster near 30 W/kg, best about 200 W/kg · six iROSA arrays at over 20 kW each, taking the ISS from 160 kW to 215 kW · 1–2% loss a year in GEO, so 75–85% of beginning-of-life power at 15 years · about 50 W/m² of sunlight at Jupiter · order $500–1,000 per watt installed

## Examples
NASA's ROSA flight experiment deployed on the ISS in June 2017, and six ISS Roll-Out Solar Arrays were installed by spacewalk from 2021 onward over the original arrays, which were designed for 15 years and had been flying since December 2000; each new array produces over 20 kW and the set takes the station from 160 kW to 215 kW. DART carried two ROSA wings to its impact with Dimorphos, Lucy flies two circular fan-fold arrays, and Juno reached Jupiter on three rigid panels holding roughly 60 m² of cells.

## Economic profile
An installed array runs on the order of $500–1,000 per watt, roughly five thousand times what a terrestrial PV module costs per watt, and the cell is not where the money goes. Space triple-junction cells are grown by metal-organic vapor phase epitaxy on germanium wafers, in low volume, by three or four suppliers worldwide, so they are expensive; the panel substrate, hinges, dampers, harness, and above all the qualification and deployment test campaign are the larger share. That is why constellation volume moves the price more than a better cell does. A program buying identical panels by the thousand amortizes one qualification campaign across all of them, while a one-off science mission pays for its own. Supply is concentrated: Rocket Lab bought SolAero for about $80M to own a cell and panel line rather than buy from one, Azur Space and CESI cover most of Europe, and Boeing's Spectrolab supplies much of the rest. Redwire sells ROSA as a catalog product, which makes it one of the few places on this sheet where a real specific-power improvement has been bought rather than promised. The buyer is almost always the spacecraft prime rather than the operator, so array cost is negotiated as part of a bus, not as a line item the end customer sees.

## Videos

- https://www.youtube.com/watch?v=1Pm4MbIwRDw — Roll-Out Solar Array Experiment (ROSA) Deploys on International Space Station (NASA Johnson, 8 minutes, 50k+ views)
- https://www.youtube.com/watch?v=dPKxPKx8VEw — Impact Story: Roll-Out Solar Arrays (NASA Video, 1 minute, 10k+ views)

## Further reading

[New Solar Arrays to Power NASA's International Space Station Research (NASA)](https://www.nasa.gov/missions/station/new-solar-arrays-to-power-nasas-international-space-station-research/) · [On Orbit Flight Testing of the Roll-Out Solar Array (NASA)](https://ntrs.nasa.gov/citations/20205003936)
