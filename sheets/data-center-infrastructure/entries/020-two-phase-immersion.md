---
number: 20
name: Two-Phase Immersion
part: 4
group: Liquid cooling
density: [ext]
where: [ai]
water: low
retrofit: new
maturity: early
---

## Description
Two-phase immersion puts servers in a sealed tank of low-boiling-point dielectric fluid. The fluid boils on the hot components at around 50 °C, vapor rises to a condenser coil in the tank lid, condenses, and rains back down. There are no pumps in the primary loop, because the phase change moves the heat by itself, and the boiling point pins component temperature to a narrow band regardless of load. Thermally it is the most capable approach in this sheet.

## Strengths and weaknesses
Heat transfer coefficients are the highest available, the tank is nearly silent with no pumps or fans, and temperature control is inherent rather than regulated. The problems are almost entirely about the fluid. The fluorocarbons that boil in the right range are PFAS compounds, 3M announced it would exit PFAS manufacturing by the end of 2025, and European restrictions are advancing, which puts the supply of the enabling material in doubt. The tank must also be sealed against vapor loss, service means opening a vapor space, and fluid cost per tank is high enough that losses matter commercially, not just environmentally.

## When to use
Treat two-phase immersion as parked rather than as an option, unless a non-PFAS fluid with the right boiling point and materials compatibility becomes available and supported. The thermal case was always the strongest of any approach; the commercial case now depends on chemistry that is being regulated out. If extreme heat flux is the requirement today, single-phase direct-to-chip reaches the necessary densities with a supply chain that is not in question, and two-phase direct-to-chip is the nearer alternative if the fluid problem is solved.

## Key numbers
Fluid boils at around 50 °C, pinning component temperature to a narrow band · highest heat transfer coefficient of any approach here · no pumps or fans in the primary loop · enabling fluids are PFAS compounds, with 3M exiting PFAS manufacture by the end of 2025 and EU restrictions advancing · fluid cost makes vapor loss a commercial as well as an environmental issue.

## Examples
Microsoft's two-phase immersion pilot at Quincy, Washington, the best-documented hyperscale trial; Wiwynn and LiquidStack systems; the Open Compute Project's ongoing work on PFAS alternatives, which is where the future of the approach is being decided.

## Videos

- https://www.youtube.com/watch?v=9edXQKLlUZw — Two-Phase Immersion Cooling System (Wiwynn, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=U6LQeFmY-IU — What is it? Immersion Cooling in 60 seconds (GIGABYTE, 1 minute, 100k+ views)
- https://www.youtube.com/watch?v=nCBM_LUeXCU — Immersion Cooling in 60 Seconds (GIGABYTE, 1 minute, 100k+ views)

## Further reading

[Immersion Cooling in Data Centers: A Comprehensive Review of Benefits, Challenges, and Future Directions (Thermal and Fluids Engineering Conference, via NSF PAR)](https://par.nsf.gov/servlets/purl/10654765)
