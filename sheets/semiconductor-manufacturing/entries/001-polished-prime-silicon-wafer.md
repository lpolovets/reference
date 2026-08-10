---
number: 1
name: Polished prime silicon wafer
part: 1
group: Silicon substrates
devices: [logic, memory, power, rf, photonic, analog]
node: [mature, adv, lead, front]
wafer: [small, w200, w300]
toolcost: low
suppliers: few
---

## Description
A polished prime wafer is a single-crystal silicon disc, grown and sliced as described in manufacturing-processes 014, then lapped, edge-profiled, etched, polished to a mirror on one side, cleaned, and shipped against a written spec. The spec is what you are actually buying. "Prime" means total thickness variation under about a micron, site flatness held to tens of nanometers over an exposure-field-sized area, a 1–2 mm edge exclusion zone outside which nothing is guaranteed, interstitial oxygen controlled to a narrow band, and a particle count in the low tens of adders above a few tens of nanometers. Flatness is a lithography spec rather than a mechanical one: a scanner focuses over a field a few centimeters across, so a wafer out of site flatness prints defocused features across whole die. A standard 300 mm wafer is 775 µm thick and costs $60–150, which makes it the cheapest thing in a leading-edge fab by a wide margin.

## Strengths and weaknesses
Silicon is the only semiconductor that arrives essentially defect-free at commodity prices, in unlimited quantity, at 300 mm diameter. Nothing else on this sheet comes close on any of those three. The weakness is that everything is set at the crystal: doping type and level are fixed when the ingot is pulled, so you cannot have a lightly doped device region over a heavily doped substrate, and bulk CMOS built on it is vulnerable to latch-up. The failure mode to watch is not the wafer breaking, it is a spec excursion you find three months later. A flatness or particle drift at the wafer vendor shows up as focus and defect signatures across every lot that ran on it, and by then the wafers are finished product.

## When to use
Default to polished prime and only move off it when a device requirement forces you. If the doping the crystal gives you is the doping the device wants, buy prime. Go to an epitaxial wafer (002) when the device layer and the substrate need different doping, when a CMOS design needs latch-up immunity, or when an image sensor needs a surface with fewer crystal-originated defects. Go to SOI (003) when you need a buried oxide, either as electrical isolation for RF and FD-SOI or as the lower cladding of a waveguide. Buy 300 mm whenever your process is qualified there, because it gives 2.25 times the usable area of 200 mm for only slightly more processing cost per wafer. Stay on 200 mm when your process, your device physics, or your customer qualification lives there, and budget extra time for equipment, because the used 200 mm market has been tight since 2020.

## Key numbers
300 mm polished prime $60–150 a wafer at 775 µm thick · 300 mm carries 2.25× the area of 200 mm · total thickness variation under roughly 1 µm, site flatness in tens of nanometers, edge exclusion 1–2 mm · global capacity roughly 9.6M 300 mm wafer starts a month in 2026 against more than 7.7M at 200 mm · five firms supply roughly 90% of the market · the G450C 450 mm consortium spent about $4.8B over five years and wound down at the end of 2016.

## Supply chain
Shin-Etsu Handotai, SUMCO, GlobalWafers, Siltronic, and SK Siltron sell roughly 90% of the world's prime silicon, and the two Japanese firms alone hold more than half of 300 mm capacity. Concentration is high but the product is closer to a commodity than most steps on this sheet, so the risk is not a single supplier refusing to sell. It is that every fab qualifies each wafer vendor per process, and requalifying a substitute takes months of split lots. That turns a plant outage into a shortage: when the 2011 Tohoku earthquake stopped Shin-Etsu's Shirakawa plant, which then supplied a large share of world 300 mm wafers, customers could not simply buy elsewhere. Feedstock polysilicon is a separate and less concentrated market (Wacker, Hemlock, Tokuyama, OCI, plus large Chinese producers who mostly serve solar). Chinese wafer makers, mainly National Silicon Industry Group and TCL Zhonghuan, are scaling 300 mm and are the one part of this supply chain getting less concentrated rather than more.

## Examples
Shin-Etsu Handotai and SUMCO (Japan), GlobalWafers (Taiwan, with a CHIPS Act-supported 300 mm fab in Sherman, Texas), Siltronic (Germany, with its FabNext plant in Singapore), SK Siltron (Korea). The G450C consortium at SUNY Poly in Albany was the industry's attempt at 450 mm; Intel, TSMC, Samsung, IBM, and GlobalFoundries funded it and no foundry has 450 mm on a roadmap today.

## Economic profile
At $60–150 for a 300 mm wafer, the substrate is a rounding error at the leading edge: an N2 wafer sells for around $30,000, so the silicon it starts on is well under 1% of the price. At mature nodes the ratio is different but still small, a few percent of a $3,000 wafer. That is why wafer cost is almost never the lever anyone should pull, and why the interesting number is availability rather than price. The wafer makers run a capital-heavy, cyclical business with long-term supply agreements, and they went through a hard inventory correction in 2023–24 before AI demand pulled 300 mm capacity back up. If you are building a business on silicon, assume the substrate stays cheap and plentiful, then notice how differently the compound-semiconductor entries (019, 023) read, where the substrate is most of the cost and the whole constraint.

## Videos

- https://www.youtube.com/watch?v=0s5TO9h6fco — The 300mm Silicon Wafer Transition (Asianometry, 15 minutes, 100k+ views)
- https://www.youtube.com/watch?v=CoNST-yt5-U — Why Don't We Have 450mm / 18-inch wafers? (TechTechPotato, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=jnnXZa_hWq4 — #300mm Silicon #Wafer Manufacturing Process (Semiconductor, 4 minutes, 50k+ views)

## Further reading

[Chapter 2: Crystal Growth and Wafer Preparation (City University of Hong Kong)](https://www.cityu.edu.hk/phy/appkchu/AP6120/2.PDF) · [Semiconductor: Supply Chain Deep Dive Assessment (US Department of Energy)](https://www.energy.gov/sites/default/files/2022-02/Semiconductor%20Supply%20Chain%20Report%20-%20Final.pdf)
