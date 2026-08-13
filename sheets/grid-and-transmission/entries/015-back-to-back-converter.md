---
number: 15
name: Back-to-Back Converter
part: 3
group: HVDC apparatus
voltage: [hv, ehv]
roles: [bulk, cong, stab]
lead: yr3
siting: fence
maturity: mature
---

## Description
A back-to-back converter is an HVDC link with no line: rectifier and inverter sit in the same building, connected by a short DC bus. There is no transmission benefit at all. The point is that the two AC systems on either side are now electrically separate, so they can run at different frequencies, different phase angles, or simply out of step, and power still flows between them under full control. It is the standard way to tie asynchronous grids together and to place a controllable valve inside a synchronous grid that would otherwise route power wherever impedance sends it.

## Strengths and weaknesses
Full control of flow is the product. The operator sets megawatts, and unlike an AC tie the number is respected regardless of what the surrounding network does. Faults do not propagate across the link, so a disturbance on one side is contained. Modern VSC versions add reactive support on both sides. The costs are the same converter costs as any HVDC scheme, roughly 1–2% of throughput lost in conversion, plus the fact that you are paying converter prices for zero distance. A back-to-back station is expensive per MW compared with an AC tie that just needs a transformer.

## When to use
Use back-to-back when the two systems cannot be synchronized: the ERCOT ties to the eastern and western US, Japan's 50 Hz and 60 Hz halves, and most cross-border links in developing regions. Inside one synchronous system, use it where loop flow is causing real congestion and a controllable tie is worth the converter cost, which is the argument behind several proposed US seams projects. Do not use it where an AC tie would work and the flow does not need controlling, since the converter is pure added cost and loss.

## Key numbers
No DC line, so no distance-related loss · conversion loss roughly 1–2% total across both converters · typical ratings 100–1,000 MW per station · sets power flow exactly rather than by impedance · isolates faults and frequency disturbances between the two systems.

## Examples
The ERCOT direct-current ties, which let Texas trade with its neighbors without joining them; Japan's Higashi-Shimizu and Sakuma converters between the 50 Hz and 60 Hz systems; the Eagle Pass tie between Texas and Mexico; several Indian regional seam stations installed before the national grid was synchronized.

## Videos

- https://www.youtube.com/watch?v=eAvY5y6u8e8 — HVDC - BACK TO BACK STATION (17E096 SHANMUGA PRIYA T, 10 minutes, under 1k views)
- https://www.youtube.com/watch?v=_2qB_HGHpIg — If HVDC Is Better, Why Don’t We Use It Everywhere? (LifeAda English, 11 minutes, 100k+ views)

## Further reading

[Transmission (ERCOT)](https://www.ercot.com/gridinfo/transmission)
