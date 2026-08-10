---
number: 4
name: Solid Oxide Electrolysis
part: 1
group: Electrolysis
sector: [chem, mar, steel, exp]
form: [gas]
carbon: zero
maturity: pilot
cost: med
---

## Description
Solid oxide electrolysis splits steam rather than liquid water, at 700–850 °C, in a ceramic cell where oxide ions move through a zirconia electrolyte. Heat does part of the work that electricity does in a low-temperature cell. At 800 °C, the thermodynamics call for roughly 25 kWh/kg of electricity and 9 kWh/kg of heat, against 39.4 kWh/kg of electricity alone at room temperature, and real systems land at 37–42 kWh/kg of electricity where alkaline and PEM need 50–55. The same cell run backwards is a solid oxide fuel cell, and the same stack will co-electrolyze steam and CO2 into syngas in one step, which is why this technology shows up inside e-fuel plants rather than as a standalone hydrogen source. The catch is in the word "heat": the electricity saving is real only if the steam comes from somewhere that was going to reject heat anyway.

## Strengths and weaknesses
The strength is the electricity number, and electricity is 60–75% of the cost of electrolytic hydrogen, so 40 kWh/kg instead of 52 is worth roughly a quarter of the operating cost. Co-electrolysis is the second strength: going straight to syngas removes a separate reverse water-gas-shift step in a methanol or Fischer-Tropsch plant. The weaknesses all come from running a ceramic stack hot. Cell life is measured today in the 20,000–40,000 hour range against 60,000–90,000 for alkaline, degradation accelerates with temperature, and the stack wants to sit at steady load and steady temperature. The failure mode is thermal cycling: ceramic layers with mismatched expansion coefficients crack and seals leak when a stack is heated and cooled, so every unplanned shutdown costs life. A SOEC plant that follows a wind profile is being damaged by design.

## When to use
Pick solid oxide when you have waste heat or steam at temperature next to the electrolyzer and a load you can run flat out. Ammonia synthesis, methanol synthesis, and Fischer-Tropsch loops all reject heat, and a nuclear plant has steam by definition, which is why the US demonstrations sit at power stations. If you want syngas rather than pure hydrogen, co-electrolysis is a strong reason to choose it even before the efficiency argument. Do not pick it for a project running on variable renewables with no heat source, because you will pay for the ceramic and get none of the benefit: raise the steam with an electric boiler and total consumption comes back to roughly 47–50 kWh/kg, which is what a cheaper alkaline plant does with a longer stack life. If flexibility is what you need, buy PEM.

## Key numbers
700–850 °C operating temperature · 37–42 kWh/kg of electricity, plus roughly 9–10 kWh/kg delivered as heat · Sunfire's 720 kW GrInHy2.0 unit at 200 Nm³/h works out near 40 kWh/kg AC · stack life 20,000–40,000 hours against 60,000–90,000 for alkaline · Topsoe's Herning factory rated at 500 MW of stacks a year.

## Energy and losses
Splitting steam at 800 °C needs about 25 kWh/kg as electricity and 9 kWh/kg as heat, so a system that is handed steam consumes 37–42 kWh/kg of electricity, or 79–90% of hydrogen's 33.3 kWh/kg lower heating value counting electricity alone. GrInHy2.0 at Salzgitter is the fielded check on that: 720 kW AC for 200 Nm³/h is about 40 kWh/kg. If the steam has to be raised electrically, add roughly 9–10 kWh/kg and the system lands near 47–50 kWh/kg, which is most of the advantage over alkaline gone. Degradation eats the rest slowly, with the best published large-system tests holding under 0.2% efficiency loss per 1,000 hours.

## Examples
Sunfire delivered the 720 kW GrInHy2.0 unit to Salzgitter Flachstahl, where it ran at 850 °C on steel-mill steam and made close to 100 t of hydrogen before the EU project closed, and has since installed a 2.6 MW SOEC at Neste's biorefinery in Rotterdam under MultiPLHY. Topsoe inaugurated Europe's largest SOEC stack factory at Herning in Denmark in 2025, rated at 500 MW a year, and sells the same cell for co-electrolysis into e-fuel plants. On the nuclear side, Bloom Energy and Idaho National Laboratory tested high-temperature steam electrolysis at INL, and Bloom's system is the one Xcel Energy is demonstrating at the Prairie Island station in Minnesota under a $12 million DOE grant, using plant steam that Xcel expects to be up to 30% more efficient than cold electrolysis.

## Economic profile
Capital cost per kW is higher than alkaline and the stack lasts a third to a half as long, so SOEC only pays where the electricity saving is large and the plant runs at a high capacity factor. The arithmetic is straightforward: saving 13–18 kWh/kg at $40/MWh is $0.50–0.70/kg of operating cost, which has to cover a shorter stack life and more frequent replacement. That pencils at 8,000 hours a year next to free steam and does not pencil at 3,000 hours on curtailed power. Supply is concentrated in a few vendors, mainly Topsoe, Sunfire, and Bloom Energy, with FuelCell Energy in the US, and the manufacturing base is small enough that lead times matter as much as price. For anyone building on it, the durable position is the integrated plant, not the stack: SOEC is worth the most to whoever also owns the heat and the downstream synthesis loop.

## Videos

- https://www.youtube.com/watch?v=XAsfHjj3oeQ — SOEC - THE green hydrogen solution (Topsoe , 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=YU4XcQj42bQ — Lecture 5: Green Hydrogen Production Process, What is Solid Oxide (SOEC) Electrolysis? (allaboutsustainability, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=st0G8OWmjr8 — GrInHy2.0 - The World's Largest High-Temperature Electrolyzer (Sunfire, 5 minutes, 5k+ views)

## Further reading

[Technical Targets for High Temperature Electrolysis (US Department of Energy)](https://www.energy.gov/eere/fuelcells/technical-targets-high-temperature-electrolysis) · [Degradation of solid oxide electrolysis cells: Phenomena, mechanisms, and emerging mitigation strategies—A review (OSTI.GOV)](https://www.osti.gov/pages/biblio/1848765)
