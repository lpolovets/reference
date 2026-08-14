---
number: 18
name: Two-Phase Direct-to-Chip
part: 4
group: Liquid cooling
density: [ext]
where: [ai, hyper]
water: low
retrofit: new
maturity: early
---

## Description
Two-phase direct-to-chip uses a dielectric fluid that boils inside the cold plate. Because evaporation absorbs far more heat per kilogram than a temperature rise does, the same flow removes several times the heat, and the plate holds a nearly constant temperature across its surface while boiling. The vapor travels to a condenser, gives up its heat, and returns as liquid. Flow can be driven by a pump or, in some designs, by the density difference between vapor and liquid alone.

## Strengths and weaknesses
Heat flux capability is the reason to look at it: chip powers past 1,500 W and future packages with several accelerators in one module are where single-phase plates start to struggle, and boiling handles them with a smaller temperature difference. Uniform plate temperature also reduces thermal stress on the package. The problems are fluid and containment. The working fluids are engineered dielectrics, several of which are PFAS compounds now facing restriction in Europe, they are expensive, and a two-phase loop must be sealed against vapor loss in a way a water loop does not. Field experience is thin and mostly vendor-run.

## When to use
Watch it, pilot it if the roadmap includes packages beyond what single-phase can hold, and do not build a hall around it yet. The decision hinges on fluid availability more than thermodynamics: a system designed around a fluid that gets restricted is a stranded asset, so ask what the fluid is, what its regulatory status is, and what the replacement path would be. For everything shipping today, single-phase direct-to-chip is the lower-risk answer and reaches the required densities.

## Key numbers
Boiling removes several times the heat per unit flow compared with a sensible-heat loop · holds a nearly constant plate temperature across the boiling surface · targets chip powers above roughly 1,500 W where single-phase plates get difficult · fluids are engineered dielectrics, several of them PFAS compounds under regulatory pressure · deployments are pilots rather than fleets.

## Examples
ZutaCore and Accelsius two-phase cold plate systems; Advanced Cooling Technologies' 200 kW two-phase coolant distribution unit; Open Compute Project working sessions on two-phase performance metrics and PFAS sustainability, which is where the fluid question is being argued out.

## Economic profile
The economics of two-phase direct-to-chip turn on the fluid rather than on the hardware. Engineered dielectrics cost far more per liter than water or a glycol mix, a sealed loop has to hold vapor rather than merely contain liquid, and anything lost is a purchase rather than a top-up from the tap. Sitting on top of that price is regulatory exposure: several of the candidate fluids are PFAS compounds facing restriction in Europe, so an operator who builds around one of them can end up with equipment that cannot legally be refilled. That is why deployments are pilots rather than fleets, and why the diligence question is the fluid's regulatory status and replacement path rather than its heat flux. Since single-phase cold plates already reach the densities shipping today at a known price, two-phase is worth committing to only if chip packages go past what a single-phase plate can hold and a fluid without the regulatory problem arrives with them.

## Videos

- https://www.youtube.com/watch?v=w_Us94JgYzc — A Closer Look at Two-Phase Liquid Cooling (Data Center Richness, 7 minutes, 10k+ views)
- https://www.youtube.com/watch?v=DIpVsKdsK_8 — The Future of Data Center Cooling Starts Here | ACT’s 200 kW Two-Phase CDU (Advanced Cooling Technologies Inc., 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=eceETJbSXGI — Direct-to-chip, Two-Phase Cooling Performance Metrics and PFAS Sustainability (Open Compute Project, 21 minutes, 10k+ views)

## Further reading

[Immersion Cooling in Data Centers: A Comprehensive Review of Benefits, Challenges, and Future Directions (Thermal and Fluids Engineering Conference, via NSF PAR)](https://par.nsf.gov/servlets/purl/10654765) · [Pumped Two-Phase Learning Center (Advanced Cooling Technologies)](https://www.1-act.com/resources/learning-center/pumped-two-phase/)
