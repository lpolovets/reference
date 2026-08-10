---
number: 14
name: FinFET
part: 4
group: Logic transistors
devices: [logic, memory]
node: [adv, lead]
wafer: [w300]
toolcost: med
suppliers: duo
---

## Description
A FinFET stands the channel up as a thin vertical fin and wraps the gate around three of its sides. Because the gate is now close to the whole channel body instead of just its top surface, it regains electrostatic control at gate lengths where a planar device leaks, which let supply voltage keep falling and leakage stay bounded for another decade of scaling. Intel put it into production at 22 nm in 2011 with a 60 nm fin pitch and a 90 nm contacted poly pitch, TSMC and Samsung followed at 16 and 14 nm, and the architecture carried the industry all the way to 3 nm. Fins are not printed directly; they come from self-aligned multi-patterning (007), which is why fin pitch scaled faster than lithography did. The design consequence that matters most is quantization: a fin has a fixed effective width, so drive strength comes in whole fins and a designer picks one, two, or three of them rather than a width.

## Strengths and weaknesses
FinFETs deliver a much steeper subthreshold slope than planar devices, so the same leakage budget buys a lower threshold and a lower supply voltage, and drive current per unit of layout area went up because the fin is taller than it is wide. Ten years of volume manufacturing means the yields are excellent and the design ecosystem is complete. The architecture ran out for three reasons that compounded. Quantized widths make analog, I/O, and SRAM sizing awkward, and each node's fin depopulation (three fins per device down to two) made the granularity coarser. Parasitic capacitance between the gate and the source and drain epitaxy grew every node as pitches tightened, so the switching-speed gain kept getting eaten. And the gate never controlled the bottom of the fin well, so leakage flows underneath the channel unless you put a doped punch-through stop there, which degrades mobility in exchange.

## When to use
If you are picking a node in 2026, FinFET is what you buy anywhere from 16 nm to 3 nm, and that covers most digital SoCs that are not chasing the frontier. The value point is the N7 and N5 family: the tools are depreciated, the design flows are mature, and the wafer costs roughly half what a 2 nm wafer does. Go to nanosheet (015) only when the last increment of performance per watt matters and your volume can amortize a 2 nm mask set and design NRE. Go back to planar (013) or FD-SOI (003) when the part is dominated by analog and I/O, because you will pay FinFET prices for transistors whose quantized widths make your analog blocks harder to design.

## Key numbers
In production at 22 nm from 2011, with 60 nm fin pitch and 90 nm contacted poly pitch on that first node · used from 16 nm down to 3 nm · drive current quantized in whole fins, with fin count per device falling from three to two across nodes · three firms build it at 5 nm and below · SMIC reached 7 nm with DUV multi-patterning and no EUV · commonly cited design NRE of roughly $249M at 7 nm and $449M at 5 nm.

## Supply chain
FinFET at 16 to 10 nm is an all-DUV technology: immersion scanners plus self-aligned multi-patterning, which is why SMIC could reach 7 nm without EUV, at a yield and throughput penalty. From 7 nm down, the tightest layers use EUV, and ASML is the only company on earth that builds one. The rest of the module list is a short oligopoly too: atomic-layer etch and deposition from Lam, TEL, Applied, and ASM International, and high-k metal gate ALD where ASM is unusually strong. Only TSMC, Samsung, and Intel run FinFET at 5 nm and below. GlobalFoundries stopped at 14 and 12 nm in 2018 and UMC never went past 14 nm, which is a reminder that the constraint is capital and learning rather than knowledge. The policy consequence is specific: cutting off EUV does not stop FinFET, because a determined fab can multi-pattern its way to 7 nm, which is why US export controls have moved toward immersion scanners and advanced etch rather than EUV alone.

## Examples
Intel's 22 nm Ivy Bridge was the first tri-gate product. Apple's A9 in 2015 was dual-sourced across TSMC 16FF and Samsung 14LPE, which is the clearest side-by-side the industry has ever had. AMD's Zen line was built on GlobalFoundries 14 nm and then moved to TSMC N7. TSMC's N7, N6, N5, and N4 remain the volume workhorses for phone SoCs, GPUs, and networking silicon. SMIC's N+2 7 nm process in Huawei's Kirin 9000s in 2023 showed what multi-patterned FinFET looks like without EUV.

## Economic profile
FinFET is where most leading-edge revenue still sits, and it will stay there for years because the N5 and N4 capacity is largely paid for while N2 capacity is not. The fixed costs are the whole story at this level: commonly cited estimates put chip design NRE at roughly $249M at 7 nm and $449M at 5 nm, so the node you can afford is set by your unit volume rather than by what the foundry offers. If you are shipping tens of millions of units at high ASPs, the leading edge pays; if you are shipping hundreds of thousands, a depreciated FinFET node almost always beats a newer one. The same logic is what pushed large designs into chiplets, where only the blocks that benefit sit on the newest node.

## Videos

- https://www.youtube.com/watch?v=i3dDslo9ibw — The 3-D Transistor Transition (Asianometry, 14 minutes, 100k+ views)
- https://www.youtube.com/watch?v=knkmlG6ItYo — Understanding The FinFet Semiconductor Process (ts2019, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=YssB6YR0fTg — FinFET Technology (Basics, Structure, Characteristics, Merits, Demerits & Applications) Explained (Engineering Funda, 19 minutes, 50k+ views)

## Further reading

[Intel Reinvents Transistors Using New 3-D Structure (Intel)](https://www.intc.com/news-events/press-releases/detail/655/intel-reinvents-transistors-using-new-3-d-structure) · [International Roadmap for Devices and Systems 2024: More Moore (IEEE)](https://irds.ieee.org/images/files/pdf/2024/2024IRDS_MM.pdf)
