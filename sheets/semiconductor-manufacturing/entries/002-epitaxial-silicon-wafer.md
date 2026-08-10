---
number: 2
name: Epitaxial silicon wafer
part: 1
group: Silicon substrates
devices: [logic, power, analog, memory]
node: [mature, adv, lead, front]
wafer: [small, w200, w300]
toolcost: low
suppliers: few
---

## Description
An epi wafer is a polished prime wafer with a fresh single-crystal silicon layer grown on top of it, usually by CVD at 900–1,150 °C (manufacturing-processes 190 covers the growth itself). The point is that the layer's doping is set by the gas rather than by the crystal, so it can differ from the substrate's by six orders of magnitude. People pay the premium for three reasons. A heavily doped substrate under a lightly doped device layer shunts the parasitic thyristor that causes CMOS latch-up. The grown surface has far fewer crystal-originated pits and oxygen-related defects than a polished surface, which matters enormously to image sensors, where a single defect is a visible bright pixel. And in a power device, the thickness and doping of a lightly doped drift layer are what set blocking voltage, so the epi spec is the device spec.

## Strengths and weaknesses
Epi gives you a doping profile no implant or diffusion can produce, over a surface cleaner than any polish, and it is a mature merchant product you can just buy. The costs are throughput and thermal budget: growth is slow and hot, so a reactor turns out far fewer wafers an hour than a polisher, and thick layers for power devices take proportionally longer. Two mechanisms fight you at the interface. Dopant out-diffusion and autodoping from the heavily doped substrate blur the junction you were trying to make sharp, which sets a floor on how thin a useful layer can be. The failure mode is thermal: a 1,100 °C process across a 300 mm disc creates radial stress, and if the ramp is wrong you get slip lines and stacking faults radiating from the wafer edge, which fail the wafer outright.

## When to use
Buy epi when the device physics needs a doping profile the crystal cannot give. For advanced CMOS logic the decision is already made for you, since essentially all of it runs on epi. For an image sensor, buy epi for the defect surface and treat the specification of that surface as a yield decision. For a power MOSFET or diode above a few tens of volts, size the epi layer to your blocking voltage and expect thickness to run from a few microns for logic to tens of microns for a 1200 V silicon device. Skip epi for a plain mature-node digital or MEMS part that does not latch up and does not care about surface defects, because you are paying for something the device cannot use. If your drift layer is getting thick enough that on-resistance is becoming the problem, that is the signal to price silicon carbide (019) instead of more silicon epi.

## Key numbers
Epi layer roughly 1–5 µm for logic against tens of microns for a 1200 V silicon power device · silicon CVD epitaxy grows at 0.1–5 µm/min at 900–1,150 °C · layer doping controllable from 10^14 to 10^20 cm^-3, independent of the substrate · epi reactors roughly $2–5M each · the same five firms that dominate polished prime (001) supply the merchant epi market.

## Supply chain
Epi wafers come from the same five suppliers as polished prime, who grow the layer as a value-add step, plus a thin layer of specialist houses that buy prime wafers and sell epi. So the substrate concentration from 001 carries straight over, with one extra chokepoint on top: the reactors. Silicon epi tools are effectively a two-supplier market, Applied Materials and ASM International, and compound epitaxy is a separate duopoly in Aixtron and Veeco. Leading-edge fabs also run large in-house epi fleets, because epi is a device process step as well as a substrate purchase. SiGe source/drain stressors and the SiGe/Si superlattice that gate-all-around channels are cut from (015) are both grown in the fab, on the same class of tool. That means a restriction on advanced epi equipment hits a fab's device process, not just its wafer buying, which is why epi reactors sit inside the US advanced-equipment export rules rather than outside them.

## Examples
Merchant epi from Shin-Etsu Handotai, SUMCO, GlobalWafers, Siltronic, and SK Siltron. Applied Materials' Centura epi platform and ASM International's Intrepid are the standard silicon epi reactors. Sony's CMOS image sensors, Infineon and onsemi power MOSFETs, and every advanced logic process at TSMC, Intel, and Samsung are built on epi substrates.

## Economic profile
Epi is sold as a premium over polished prime, and the premium is real but poorly published, so treat any specific multiple you see with suspicion. What is safe to say is the shape: the adder scales with growth time, so a 3 µm logic epi layer is a modest uplift on a $60–150 wafer while a 100 µm power epi layer can dominate the substrate cost. That is the same mechanism that makes silicon carbide epi expensive in 019, just with a cheaper starting wafer and a faster growth rate. For a fab, the interesting question is make-or-buy: merchant epi is cheaper per wafer, captive epi gives you control of a process step that increasingly is the device. Advanced logic has answered that question by doing both.

## Videos

- https://www.youtube.com/watch?v=vpvMeP8Cs_g — ASM tech explainer: All about Epi (ASM, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=6DkYR3xmslY — Epitaxy (Operational Facts, 1 minute, 50k+ views)

## Further reading

[Epitaxy (ASM)](https://www.asm.com/our-technology-products/epitaxy) · [Chapter 3: Epitaxy (City University of Hong Kong)](https://www.cityu.edu.hk/phy/appkchu/AP6120/3.PDF)
