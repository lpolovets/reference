---
number: 28
name: HBM stacks
part: 6
group: Heterogeneous integration
devices: [memory, logic]
node: [adv, lead, front]
wafer: [w300]
toolcost: low
suppliers: duo
---

## Description
High-bandwidth memory is DRAM sold as a packaging problem. Take 8, 12, or 16 DRAM dies, thin them to about 30 µm, run thousands of through-silicon vias straight down through the stack, and bond them onto a base die that talks to the processor. The result exposes a very wide, relatively slow bus instead of the narrow fast one a DDR module uses, which is how you get terabytes per second at tolerable power: signaling energy scales badly with frequency, so 1,024 wires at 10 Gb/s beats 64 wires at 160 Gb/s by a wide margin. The stack only works next to the processor, on an interposer or bridge (026), because a bus that wide cannot travel far. Two details define the current generation. The stacking method is still contested, with SK Hynix using mass reflow with molded underfill while others use thermocompression with non-conductive film, and the base die has moved from a DRAM process to a foundry logic process (TSMC N12 and N5 for HBM4), which turns the bottom of a memory stack into a logic chip.

## Strengths and weaknesses
Nothing else delivers this bandwidth per watt, and for an AI accelerator that is the entire ballgame, since the model weights have to come off memory faster than the arithmetic units can consume them. The costs start with area: the DRAM die carries TSVs and a very wide interface, so bit density per mm² is worse than commodity DRAM, and you are also buying interposer area and assembly. Capacity per stack is limited by how many dies fit inside JEDEC's 775 µm height allowance once they are thinned, which is the constraint that has driven die thinning to 30 µm. Thermally, HBM sits next to a kilowatt-class die and DRAM retention gets worse with temperature, so cooling design partly determines achievable speed. The failure mode that shapes the industry is unrecoverable: a stack is bonded, not socketed, so one bad DRAM die scraps eleven good ones and, if it is caught after assembly, an accelerator package worth thousands of dollars with it. That is why known-good-die testing (031) became mandatory rather than optional.

## When to use
If you are designing anything that streams large working sets through a lot of arithmetic (training accelerators, inference accelerators, HPC processors, high-end networking), you need HBM and there is no substitute. If your workload is latency-sensitive rather than bandwidth-sensitive, or your working set fits in cache, HBM is a waste of money and package area; DDR5 or LPDDR gives you far more capacity per dollar. The real 2026 decision is usually not whether to use HBM but how much you can get: supply is allocated years ahead, three companies make it, and qualification with a given accelerator takes many months, so treat HBM allocation as a gating commercial item on the same footing as CoWoS capacity. If capacity per dollar matters more than bandwidth, look at conventional DRAM (018) and accept the bandwidth wall.

## Key numbers
HBM3E runs a 1,024-bit interface at 9.2–12.4 Gb/s for roughly 1.2 TB/s per stack in 24 or 36 GB · HBM4 doubles the interface to 2,048 bits across 32 channels for about 2 TB/s at the JEDEC spec, with shipping parts at 10–11 Gb/s and Micron quoting over 2.8 TB/s · 8, 12, or 16 dies thinned to about 30 µm inside a 775 µm package height · HBM3E contract pricing has run around $13–17 per GB · HBM revenue roughly $35B in 2025 heading toward $60B in 2026 · SK Hynix holds something near 70% share.

## Supply chain
Three companies make HBM: SK Hynix, Samsung, and Micron, and all three went into HBM4 production in early 2026. SK Hynix holds something close to 70% of the market, largely on the strength of its MR-MUF stacking process and its position as NVIDIA's lead supplier. That is a narrower base than DRAM generally, because HBM requires TSV processing, thinning, stacking, and qualification with a specific accelerator, and the qualification is the real barrier: a new supplier's parts take many months of joint work with the accelerator vendor before they ship. The chain has a second concentration point at the base die, which for HBM4 is manufactured by TSMC on a logic process, so a memory product now depends on leading-edge foundry capacity. HBM demand also sets DRAM supply for everyone else, because an HBM die spends area on TSVs and a very wide interface, so the same number of bits consumes considerably more wafer than commodity DRAM does. That is how AI spending ended up raising the price of laptop memory. Export controls apply directly: US rules restrict HBM shipments to China, making this one of the few finished components covered rather than a tool.

## Examples
SK Hynix supplies most of the HBM in NVIDIA's H100, H200, and Blackwell parts and pioneered mass reflow with molded underfill. Micron's HBM3E and HBM4 lines ramped hard through 2025 and 2026. Samsung uses thermocompression with non-conductive film and returned to volume supply after well-publicized qualification difficulty. AMD's Instinct MI300 and MI350 series, Google's TPUs, and Intel's Gaudi parts all use HBM. On the standards side, JEDEC's HBM3E and HBM4 specifications define the interface width, height allowance, and speed grades that everyone builds to.

## Economic profile
HBM inverted the usual memory business model. Commodity DRAM is a cyclical, undifferentiated product sold at spot prices; HBM is contracted a year or more ahead at negotiated prices, with margins several times higher, which is why SK Hynix's profitability diverged so sharply from the industry's historic pattern. HBM3E has been contracting around $13–17 per GB, and revenue is running roughly $35B in 2025 toward $60B in 2026. The old heuristic that HBM costs several times DDR5 per gigabyte stopped holding during the 2026 DRAM shortage, when commodity prices rose faster than contracted HBM prices. For anyone modeling an accelerator's bill of materials, memory is the largest line: across the 2025 volume mix, memory was about 63% of component cost against 15% for packaging and 13% for the leading-edge logic die. The chip everyone argues about is the cheapest part of the package.

## Videos

- https://www.youtube.com/watch?v=yAw63F1W_Us — The Special Memory Powering the AI Revolution (Asianometry, 13 minutes, 100k+ views)
- https://www.youtube.com/watch?v=5hqhhLH3nZ8 — What is High-Bandwidth Memory (HBM)? HBM vs. GDDR (Eye on Tech, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=-mKb75P7wT0 — Why The Fastest Memory Isn't In Your PC (HBM explained) (Techquickie, 5 minutes, 50k+ views)

## Further reading

[How MR-MUF's Heat Control Breakthrough Elevated HBM to New Heights (SK hynix)](https://news.skhynix.com/rulebreaker-revolutions-mr-muf-unlocks-hbm-heat-control/)
