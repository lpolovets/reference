---
number: 7
name: Optical multi-patterning
part: 2
group: Optical lithography
devices: [logic, memory]
node: [adv, lead]
wafer: [w300]
toolcost: med
suppliers: one
---

## Description
Multi-patterning is what you do when the pattern is finer than the light. Three families cover almost all of it. Litho-etch-litho-etch splits one design layer into two or more separately printed and etched masks that interleave, with triple and quadruple versions when two is not enough. Self-aligned double patterning prints a mandrel, deposits a conformal spacer over it by ALD (manufacturing-processes 193), etches the spacer back so it survives only on the mandrel sidewalls, removes the mandrel, and uses the remaining spacers as the mask, which halves the pitch and makes both edges of every line a product of one exposure. Self-aligned quadruple patterning runs that trick twice. Each family turns one design layer into several litho, deposition, and etch passes, so the wafer sees more steps rather than a better tool.

## Strengths and weaknesses
It works with tools you already own, which is the entire appeal, and the self-aligned variants actually beat the scanner's own overlay because a single lithography step defines both edges of a feature. The costs are cumulative and large. Litho-etch-litho-etch runs roughly 2.5 times the cost of a single exposure; an advanced node's mask set reached 60–100 reticles; and each pass adds queue time on top of process time, so cycle time stretches. The failure mode is edge placement error: two separately printed features have to land on each other, and when they do not you get shorts and opens that no amount of resolution fixes. Self-aligned patterning has a second constraint that shows up in design rather than manufacturing — spacers naturally produce regular gratings, so layouts become gratings plus cut masks, and the design rules tighten accordingly.

## When to use
If the layer's pitch is finer than 38 nm half-pitch and you have no EUV, you have no choice, so the question is only which family. Use self-aligned double or quadruple patterning where the layout is a regular grating — fins, gate lines, lower metal levels — because the pitch control is better and the mask count is lower. Use litho-etch-litho-etch where it is not, and accept the overlay exposure. If you do have EUV, compare cost per wafer-layer directly: one EUV exposure typically beats three or more optical passes from about N7 down, which is the arithmetic that justified a $200M tool. If you are planning a fab without EUV access, this is your route to an advanced node, and you should model the yield loss and the throughput penalty rather than counting reticles and calling it a plan.

## Key numbers
Litho-etch-litho-etch runs roughly 2.5× the cost of one exposure · self-aligned double patterning halves pitch per round and quadruple patterning quarters it · advanced-node mask sets reached 60–100 reticles · single-exposure floor of 38 nm half-pitch on immersion against about 13 nm on EUV · published estimates for an advanced-node mask set spanning about $10M to $30M.

## Supply chain
Multi-patterning is a process rather than a product, so the supply question inverts: it multiplies demand for tools that already have several suppliers. Every added pass consumes another deposition chamber for the spacer film (Lam, ASM International, Tokyo Electron, Applied Materials), another etch chamber (Lam, Tokyo Electron, Applied Materials, and AMEC in China), and more metrology. Mask capacity is the one genuinely tight input: AGC and Hoya supply roughly 93% of mask blanks, and multi-beam mask writers come from IMS Nanofabrication and NuFlare. The strategic point is that multi-patterning converts capital and cycle time into resolution a fab cannot buy, and no export-control regime can close it, because every input has four or more suppliers and several have domestic Chinese equivalents. That is why restricting lithography slows an advanced node rather than stopping it.

## Examples
Intel patterned fins and lower metal levels with self-aligned quadruple patterning at 14 nm and 10 nm. TSMC's original N7 shipped in volume with immersion multi-patterning before N7+ added EUV. SMIC's N+2 7 nm process, which shipped in the Huawei Kirin 9000s in 2023, is built this way. DRAM makers have used self-aligned double and quadruple patterning on active and bitline layers for years, and still do on the layers EUV has not reached (018).

## Economic profile
The cost here is passes, not machines. Each pass adds tool time, mask cost, metrology, and another chance to create a defect, and cycle time is the underrated part: a wafer that spends longer in the fab ties up working capital and slows the yield learning that makes the next lot better. That is what made a $200M EUV scanner a rational purchase. It is also why denying a fab EUV makes it slower and more expensive rather than stopping it — SMIC's 7 nm parts are real and shipping, and while no reliable yield figure is public, the process is widely understood to run well below what an EUV-based flow achieves at the same node. If you are assessing a fab that patterns this way, ask about cycle time and cost per good die, not about whether it can print the feature.

## Videos

- https://www.youtube.com/watch?v=XI5Ypy77fVE — Multi-Patterning Techniques: Enabling Dimensions Beyond Lithography Resolution Limits (Lam Research, 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=d5uoklMx63I — Double Patterning to the rescue (LELE, LFLE, SADP) - Part 1 (nanolearning, 14 minutes, 100k+ views)
- https://www.youtube.com/watch?v=YDnIYmQ_Ll4 — Double Patterning to the rescue (Self Aligned Double Patterning) - Part 2 (nanolearning, 16 minutes, 10k+ views)

## Further reading

[Continued Scaling with Multiple Patterning (Lam Research)](https://newsroom.lamresearch.com/Continued-Scaling-with-Multiple-Patterning) · [International Roadmap for Devices and Systems 2024: Lithography and Patterning (IEEE)](https://irds.ieee.org/images/files/pdf/2024/2024IRDS_LITHO.pdf)
