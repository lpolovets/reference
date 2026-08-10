---
number: 10
name: High-aspect-ratio plasma etch
part: 3
group: Process modules
devices: [memory]
node: [mature, adv]
wafer: [w300]
toolcost: low
suppliers: duo
---

## Description
High-aspect-ratio etch is the single hardest removal step in the industry, and it is what actually limits 3D NAND layer count. A channel hole has to go through a few hundred alternating oxide and nitride films — several microns of material at aspect ratios past 60:1, in holes roughly 100 nm across — and come out straight, round, and the same diameter top and bottom, repeated billions of times across a 300 mm wafer with no misses. This is the same physics as DRIE (manufacturing-processes 187) about two orders of magnitude harder, and it does not work the same way: there is no Bosch-style etch-passivate cycling here, just a continuously tuned high-energy plasma. The current answer is cryogenic etch, which chills the wafer far below room temperature so passivation sticks to the sidewall and the etch runs faster and straighter than it does warm.

## Strengths and weaknesses
Nothing else makes a 3D NAND stack or a modern DRAM capacitor, so on capability there is no competition. The costs are time and uniformity. An etch of this depth takes tens of minutes per wafer — Tokyo Electron presented a 10 µm-deep channel-hole etch in 33 minutes as a speed breakthrough — which is why a NAND fab buys so many etch chambers and why etch is its largest equipment line item. The failure modes are all geometric and all fatal to the string: bowing, where the hole balloons in the middle; twisting, where it wanders off vertical deep in the stack; incomplete etch at the bottom; and aspect-ratio-dependent lag, where the slowest holes on the wafer finish long after the fastest ones. Each one gets worse as the stack gets taller, which is the real reason layer count is hard.

## When to use
You do not choose this, the architecture chooses it for you. If you are building 3D NAND above roughly a hundred layers or a DRAM capacitor at current pitch, HAR etch is the gating capability, and the layer count you can ship is set by how deep you can etch straight rather than by anything in the lithography module. When the stack exceeds what one etch can do, the answer is string stacking — etch two or three decks separately and align them (017) — which costs you an alignment step and a resistance discontinuity. If your structure is tens of microns deep in bulk silicon rather than through a stacked film, as with through-silicon vias and MEMS, use DRIE instead: it is a far more forgiving problem on far cheaper tools.

## Key numbers
Aspect ratios past 60:1 in 3D NAND channel holes and past 100:1 in DRAM capacitors · a few hundred alternating oxide and nitride layers, several microns thick, in holes roughly 100 nm across · tens of minutes of etch per wafer, with 10 µm demonstrated in 33 minutes · etch clusters at a few million dollars each, bought by the dozen rather than singly · Lam the largest dry-etch supplier, with the top three at roughly 90% of the market.

## Supply chain
Lam Research and Tokyo Electron are the two that matter for HAR dielectric etch, with Applied Materials third; Lam is the largest supplier and the three together hold roughly 90% of the market. Published shares for Lam alone run from about a third to more than half, depending on whether wet etch and clean are counted in the denominator, so treat any single figure with care. Lam has owned NAND channel-hole etch for most of a decade and Tokyo Electron has been taking share, winning process-of-record positions for cryogenic channel-hole etch for 2026, which is the first serious contest in that application in years. In China, AMEC builds credible dielectric etchers and is the closest thing to a domestic alternative at this rung, which is one reason etch is a harder thing to embargo than lithography. Cryogenic etch specifically is a policy target: the MATCH Act introduced in April 2026 would bar cryogenic etch exports to any facility in China alongside immersion lithography. Consumables are their own chain — fluorocarbon gases, high-purity helium, and chamber parts in silicon, quartz, and yttria coatings, most of which come from a short list of Japanese and US suppliers.

## Examples
Lam's Akara platform and its Lam Cryo 3.0 process are the current cryogenic dielectric etch products. Tokyo Electron demonstrated a 10 µm-deep memory channel hole etch in 33 minutes aimed at stacks beyond 400 layers. The customers are the NAND lines at Samsung, SK Hynix, Micron, Kioxia, and YMTC, and the capacitor etch at all three DRAM makers.

## Economic profile
Etch is the largest equipment category in a NAND fab and among the largest in wafer fab equipment overall, and HAR etch is most of the reason. Every added deck adds etch time, so cost per bit keeps falling with layer count only as long as etch time per layer keeps falling with it. That race decides NAND's cost curve; lithography barely enters into it. For investors, Lam's revenue is more memory-levered than any other large equipment maker, which makes it the cleanest read on the NAND and DRAM capex cycle, and Tokyo Electron's cryogenic wins are the first credible threat to that position in years. For a fab operator, the number that matters is chambers per wafer start, because that is what an extra hundred layers actually costs you.

## Videos

- https://www.youtube.com/watch?v=TWibpFrn45U — Lam Research's Akara Features Breakthrough Innovation in Plasma Etch for the 3D Chipmaking Era (Lam Research, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=hglK1cf3meM — Making High Volume Production of 3D NAND Devices a Reality (Lam Research, 2 minutes, 50k+ views)

## Further reading

[Lam Cryo 3.0: What You Need to Know (Lam Research)](https://newsroom.lamresearch.com/introducing-lam-cryogenic-etching) · [Cryogenic Etching (Tokyo Electron)](https://www.tel.com/blog/all/20241021_001.html)
