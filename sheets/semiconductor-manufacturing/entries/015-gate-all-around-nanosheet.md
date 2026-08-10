---
number: 15
name: Gate-All-Around Nanosheet
part: 4
group: Logic transistors
devices: [logic]
node: [lead, front]
wafer: [w300]
toolcost: high
suppliers: duo
---

## Description
A nanosheet transistor stacks two or three thin horizontal silicon sheets and wraps the gate around all four sides of each one, which is as much electrostatic control as you can get from a single channel. Getting there is a long process. Epitaxy grows an alternating SiGe and silicon superlattice, the stack is etched into a fin, cavities are etched back into the SiGe to form inner spacers, source and drain epitaxy is grown on the ends, and then the SiGe is removed by atomic layer etch (011) to release the sheets before the gate stack wraps them. The design win is that sheet width is drawn continuously rather than quantized in fins, so a designer sizes a transistor to what the circuit needs instead of rounding to the next fin (TSMC markets this as NanoFlex). All three leading-edge manufacturers are now in production on it.

## Strengths and weaknesses
At the same gate length a nanosheet turns off harder than a fin, which converts directly into either lower power or more performance. TSMC reports N2 at 35% lower power at the same performance or 15% more performance at the same power against N3E, and says N2 defect density came in below N3 at the same point in the ramp. Continuous width tuning also helps SRAM and analog, where fin quantization was always awkward. The weaknesses are process-control weaknesses, and they are severe. Inner spacers form inside a cavity nobody can inspect, channel release needs angstrom-level etch selectivity between SiGe and silicon across a whole wafer, and anything left behind between two sheets is a killer defect. The failure mode is a yield ramp that takes years instead of quarters: Samsung shipped SF3 first, in 2022, and had well-reported yield trouble for a long time afterward.

## When to use
Pick nanosheet when you need the last increment of performance per watt and your volume can carry a 2 nm mask set and a design NRE commonly estimated around $725M. In practice that means large-volume phone SoCs, AI accelerators, and server CPUs, and very little else. If your bottleneck is memory bandwidth, packaging, or the thermal path rather than the transistor, the money buys more elsewhere, and 026 and 028 are where to spend it. If the bottleneck is power delivery and interconnect resistance, backside power (016) is the cheaper fix. Stay on FinFET (014) for anything cost-sensitive, and treat CFET as a 2030s question rather than a roadmap item you can plan around.

## Key numbers
Two or three stacked sheets per device, with continuously tunable sheet width · TSMC N2 at 35% lower power at the same performance, or 15% more performance at the same power, against N3E · N2 defect density below N3 at the same point in the ramp · three firms in production: Samsung SF3 in 2022, Intel 18A in November 2025, TSMC N2 in December 2025 · about $30,000 for an N2 wafer · CFET around A7 in 2033 on imec's roadmap.

## Supply chain
Two or three companies can build this, and they all depend on the same handful of tool vendors. EUV is required and ASML is the sole source; the superlattice epitaxy comes from Applied Materials and ASM; the channel release depends on atomic layer etch from Lam and TEL; the gate stack depends on ALD, where ASM International has an unusually strong position. Metrology is its own chokepoint, because the critical dimensions are now buried between sheets where a CD-SEM cannot see them, which pushed the industry onto scatterometry and X-ray techniques from KLA, Onto Innovation, and Bruker. No Chinese fab can build nanosheet at scale, because EUV cannot be exported there and multi-patterning at these pitches is impractical rather than merely expensive. If ASML stopped shipping EUV tomorrow, the leading edge would stop advancing everywhere at once, and there is no partial substitute at this node.

## Examples
Samsung's SF3 entered production in 2022 and was the first gate-all-around logic process anywhere. Intel's 18A with RibbonFET went into production in November 2025 and ships in Panther Lake and Clearwater Forest. TSMC's N2 entered production in December 2025. imec's public roadmap puts forksheet as the next extension of nanosheet and CFET, which stacks the n-device over the p-device, at around A7 in 2033. Lam, Applied, and TEL all sell dedicated nanosheet release and inner-spacer process modules.

## Economic profile
An N2 wafer runs about $30,000 against roughly $3,000 at 28 nm, and the extra process steps are the reason the tool-cost tag here is high rather than medium. What you get for it is real but incremental: a node's worth of power or performance, not a step change. The economics only work for products that either ship in enormous volume or sell for enough that a few percent of efficiency is worth hundreds of millions in NRE. That narrow customer list is the reason only three companies build at this level, and the reason those three are all betting that AI accelerator demand keeps their newest fabs full. If it does not, the depreciation on a leading-edge module is the fastest way to lose money in this industry.

## Videos

- https://www.youtube.com/watch?v=5RPFfPtgw7g — The Gate-All-Around Transistor is Coming (Asianometry, 16 minutes, 500k+ views)
- https://www.youtube.com/watch?v=bfkIp_j0Iv8 — Gate-All-Around — The Future of Transistors (High Yield, 12 minutes, 100k+ views)
- https://www.youtube.com/watch?v=xaKyDrWfHes — Engineering the Gate-All-Around Transistor (Applied Materials, 7 minutes, 50k+ views)

## Further reading

[Entering the nanosheet transistor era (imec)](https://www.imec-int.com/en/articles/entering-nanosheet-transistor-era-0) · [A view on the logic technology roadmap (imec)](https://www.imec-int.com/en/articles/view-logic-technology-roadmap)
