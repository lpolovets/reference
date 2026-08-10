---
number: 11
name: Welding & Cutting Torches
part: 5
group: Process tools
tasks: [proc, metal]
versatility: narrow
reliability: proven
maturity: std
cost: med
---

## Description
This is the end effector that built robotic automation. MIG/MAG torches, spot-weld guns, laser heads, and plasma cutters at the wrist made welding the first and still one of the largest robot applications on earth. A torch is a process instrument rather than a gripper, since wire feed, shielding gas, current waveform, and seam tracking all flow through it. The surrounding ecosystem (positioners, cleaners, calibration, offline programming) is what a "welding robot" actually is.

## Strengths and weaknesses
Decades of refinement have made these reliable in a harsh environment of spatter, heat, and fumes, and process quality exceeds hand-welding consistency. Vendors offer complete ecosystems from the torch through the software. On the cost side, spatter and tip wear make consumables (tips, nozzles, liners) a perpetual expense. Torch collisions and calibration drift ruin seams without any obvious warning. Each process (MIG, TIG, spot, laser) is its own product line and skill base. And the adoption bottleneck is programming and fixturing effort rather than the torch, which is what cobot welding startups target.

## When to use
Automate the torch when part volume and seam repeatability can repay the cell engineering (body-in-white, EV battery trays, recurring fab-shop weldments), or when the welder shortage makes a $120k cobot welding package cheaper than a position you can't fill. Judge feasibility on fixturing and programming effort rather than on torch capability, because that is where projects die. Match the process to the product deliberately: MIG for job shops, spot for sheet assemblies, laser for battery and precision work. For true one-offs with a heavy fixturing burden, a human welder is still the right tool unless modern cobot software genuinely closes the programming gap for your parts.

## Key numbers
Robotic MIG torch rated 300–500 A, water-cooled types at 100% duty cycle · wire feed 2–15 m/min and travel speed 0.3–1.5 m/min · spot gun electrode force 2–6 kN with weld times of 200–400 ms · torch $1–5k, robot spot gun $15–30k · complete cobot welding package around $120k.

## Examples
Fronius, Lincoln, ESAB, and Binzel robotic torch lines; resistance spot-guns by the hundred thousand in every car body shop; laser welding heads (IPG, Trumpf) on EV battery trays; cobot welding packages (Vectis, Hirebotics, Cobot Systems) bringing torches to job shops.

## Economic profile
This is a mature, consumables-rich market riding two growth waves: EV battery and body welding, and the welder-shortage-driven cobot welding boom that brings automation to five-person fab shops. The torch itself sits in a stable oligopoly. The venture action is in the software and fixturing wrapper that makes a $120k welding cell deployable by a shop with no robotics engineer.

## Videos

- https://www.youtube.com/watch?v=21hTsTvx_iI — Robotic Spot Welding of An Automotive Body Side – FANUC America (FANUC America Corporation, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=-JcKlSKwofI — Air-Cooled vs Water-Cooled Robotic MIG Torches (ABICOR BINZEL, 5 minutes, 1k+ views)
- https://www.youtube.com/watch?v=fo69_knE3c0 — Can I Out-Weld a $100,000 Robot? (TimWelds, 9 minutes, 50k+ views)

## Further reading

[Robotic Welding Systems Overview (Fronius)](https://www.fronius.com/en/welding/products/robotic-welding) · [Active Visual Sensing Methods for Robotic Welding: Review and Tutorial (arXiv)](https://arxiv.org/abs/2405.00685)
