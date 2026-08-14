---
number: 32
name: Optical Interconnect
part: 7
group: Racks & operations
density: [low, ext]
where: [ai, hyper, colo, ent]
retrofit: drop
maturity: mature
---

## Description
Inside a data center, almost everything past a few meters is optical. Structured cabling runs single-mode or multimode fiber from rack to row to spine in a fixed hierarchy, and pluggable transceivers at each end convert electrical signals to light and back. Rates have climbed from 10G through 100G and 400G to 800G per port, and AI clusters have made the network a first-order design problem rather than a utility, because training performance depends on how fast thousands of accelerators can exchange gradients.

## Strengths and weaknesses
Fiber carries far more bandwidth per strand than copper, over distances copper cannot reach, with no crosstalk and a very long service life; the cabling plant usually outlives several generations of transceiver. Structured design means adding capacity is a patch rather than a pull. The costs are optics and power. Transceivers are a large share of network capital cost, they consume real power at high rates, and at 800G and above the pluggable module's power becomes a rack-level concern, which is what is pushing co-packaged optics. Cleanliness matters more than people expect; a contaminated connector is the most common fault in the plant.

## When to use
Design a structured cabling plant once, generously, and treat it as a 15-year asset while transceivers turn over every few years. Use single-mode where reach or future rate is uncertain, since it costs a little more to install and removes the distance ceiling. In AI clusters, design the network topology alongside the compute rather than after it, and check the optics power budget per rack, because at 800G it is no longer negligible. For short intra-rack links, direct-attach copper remains cheaper and lower power.

## Key numbers
Port rates now 400G and 800G, with 1.6T in development · single-mode reaches kilometers, multimode tens to hundreds of meters · transceivers are a large share of network capital and consume meaningful rack power at high rates · cabling plant typically lasts 15 years across several transceiver generations · connector contamination is the most common cause of link faults.

## Examples
Spine-and-leaf fabrics in every hyperscale facility; InfiniBand and Ethernet fabrics inside AI training clusters, where interconnect bandwidth limits scaling; co-packaged optics programs from Broadcom and NVIDIA aimed at the transceiver power problem; TIA-942 structured cabling practice, which defines the hierarchy most facilities follow.

## Economic profile
The money splits across two very different lifetimes. The cabling plant is a 15-year asset whose cost is mostly labor, and pulling fiber into a live hall later costs far more than over-specifying it at build, which is why single-mode is usually the right call even where multimode would reach today. Transceivers are the other half: they turn over every few years, they are a large share of network capital, and at 800G their power draw becomes a rack-level line item. That matters more here than in most buildings, because when power is the binding constraint every watt spent in an optical module is a watt not sold as compute, which is the whole argument behind co-packaged optics. Two smaller items are worth budgeting honestly. Direct-attach copper is cheaper and lower power for short intra-rack links, and connector cleaning discipline is one of the cheapest reliability measures in the building, since contamination causes more link faults than anything else.

## Videos

- https://www.youtube.com/watch?v=SyfWmbfWmds — Structured Cabling for Large Data Centers: An Inside Look (Ep. 49) (CABLExpress, 1 minute, 10k+ views)
- https://www.youtube.com/watch?v=HOn2sRyDx50 — Fiber Optic Cabling Solutions for Data Centers | FS (FS_com, 3 minutes, 1k+ views)
- https://www.youtube.com/watch?v=k8mCWycc3gU — What is structured cabling in networking? (Structured Data Cabling) (NM Cabling Solutions, 8 minutes, 50k+ views)

## Further reading

[2024 United States Data Center Energy Usage Report (Berkeley Lab)](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf) · [Co-packaged optics (CPO): status, challenges, and solutions (Frontiers of Optoelectronics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10027985/)
