---
number: 18
name: DRAM Cell Scaling
part: 4
group: Memory arrays
devices: [memory]
node: [adv, lead]
wafer: [w300]
toolcost: high
suppliers: duo
---

## Description
A DRAM cell is one transistor and one capacitor, and the capacitor is the hardest scaling problem in the industry. The stored charge has to stay roughly constant no matter how small the cell footprint gets, because the sense amplifier needs a detectable signal and the cell has to hold it for the whole refresh interval. Constant capacitance in a shrinking footprint means the capacitor grows taller, and aspect ratios are now past 100:1, etched and then filled with high-k dielectric and electrode films that have to be conformal all the way down. Node names stopped being nanometers for the same reason logic node names did: 1α, 1β, and 1γ correspond to roughly 14, 13, and 12 nm half-pitch, and the letters exist because the old labels had stopped tracking any physical dimension. Unlike NAND (017), DRAM has no production path to the third dimension yet.

## Strengths and weaknesses
DRAM is still the only memory with the latency, bandwidth, and effectively unlimited endurance that main memory needs, and the industry has kept cost per bit falling through pure process work rather than architectural change. The weaknesses all trace back to that capacitor. Tall, thin structures lean and touch their neighbours unless a support lattice holds them, so capacitor collapse is a real yield loss mechanism rather than a theoretical one. Refresh power grows as cells get leakier and more numerous. And crowding the cells worsens row hammer, where repeatedly activating one row disturbs charge in its neighbours, which is a security problem as much as a reliability one. The failure mode is charge loss: a cell that cannot hold its level for the refresh interval fails intermittently and at temperature, which is the worst kind of defect to screen for.

## When to use
You do not choose whether to use DRAM, only how much and in what form. If bandwidth per watt is the binding constraint, as it is for any AI accelerator, you are buying HBM (028) and paying several times the per-gigabyte price of commodity parts. If capacity per dollar matters more, DDR5 and LPDDR are the answer and will stay so. The planning advice for 2026 is blunt: assume DRAM supply is set by HBM demand rather than by your own, because the same fabs make both and HBM takes priority. If your product's bill of materials assumes historical DRAM pricing, re-run it.

## Key numbers
One transistor and one capacitor per bit · capacitor aspect ratio past 100:1 · 1α, 1β, and 1γ at roughly 14, 13, and 12 nm half-pitch · three firms make essentially all of it, with CXMT at about 7.7% share and targeting 10% by the end of 2026 · US rules since October 2022 require a license for equipment capable of DRAM below 18 nm half-pitch in China · HBM revenue roughly $35B in 2025 heading toward $60B in 2026.

## Supply chain
Samsung, SK Hynix, and Micron make essentially all the world's DRAM, which makes this one of the most concentrated markets in manufacturing of any kind. CXMT is the only real fourth entrant, at roughly 7.7% of global share and targeting 10% by the end of 2026, and it is boxed in by two separate controls: EUV has been unavailable to it since 2019, and since October 2022 US rules have required a license for equipment capable of producing DRAM below 18 nm half-pitch in China. The result is a DUV multi-patterning process two to three generations behind the leaders. On the leaders' side, EUV is sole-sourced from ASML, and the high-k capacitor precursors come from a short list of specialty chemical suppliers. The US also restricted HBM exports to China in December 2024. What happens if a supplier goes down is not hypothetical: DRAM has no substitute, a single fab outage moves world prices within weeks, and the 2026 shortage has been the demonstration.

## Examples
Samsung, SK Hynix, and Micron are all shipping 1γ-class nodes; Micron was the last of the three to adopt EUV, holding to multi-patterning through 1β and using EUV first at 1γ. SK Hynix supplies the majority of HBM, with its HBM4 base die built on a TSMC logic process rather than a DRAM one. CXMT's DDR5 has been validated by every major motherboard maker in 2026 while remaining hard to buy in the US. The 4F² cell with a vertical channel transistor and, later, 3D DRAM are the two directions everyone agrees are needed around 2030 and nobody has in production.

## Economic profile
HBM now sets the price of everything else. An HBM bit consumes noticeably more wafer area than a DDR5 bit, because the die carries thousands of TSVs and a much wider interface and yields worse, so every wafer diverted to HBM removes more than its face value of commodity DRAM from the market. With HBM revenue running around $35B in 2025 and heading toward $60B in 2026, that diversion is large enough to have inverted the usual heuristic that HBM costs several times DDR5 per gigabyte. For anyone buying DRAM, the practical consequence is that supply is allocated by who is building AI systems, and for anyone selling it, this is the most profitable memory cycle in the industry's history. Both conditions are cyclical and neither should be extrapolated.

## Videos

- https://www.youtube.com/watch?v=uPualBNf1nM — How Semiconductor DRAM Went 3D (Asianometry, 20 minutes, 100k+ views)
- https://www.youtube.com/watch?v=CoZc1RQWdZs — What's Changing In DRAM (Semiconductor Engineering, 14 minutes, 5k+ views)
- https://www.youtube.com/watch?v=kDh7u1W8Xvg — The Physics of DRAM: From 2D Scaling to 3D Memory Architectures (Semi 101) (Lam Research, 3 minutes, 5k+ views)

## Further reading

[What Is DRAM? (Semi 101) (Lam Research)](https://newsroom.lamresearch.com/what-is-dram-semi-101) · [Disrupting the DRAM roadmap with capacitor-less IGZO-DRAM technology (imec)](https://www.imec-int.com/en/articles/disrupting-dram-roadmap-capacitor-less-igzo-dram-technology)
