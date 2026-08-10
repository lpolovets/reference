---
number: 13
name: Planar Bulk CMOS
part: 4
group: Logic transistors
devices: [analog, power, rf, logic, memory]
node: [mature]
wafer: [w200, w300]
toolcost: med
suppliers: many
---

## Description
Planar bulk CMOS is the ordinary flat MOSFET built directly into a doped silicon substrate: a well, an implanted source and drain, a thin gate dielectric, and a gate on top that controls the channel from one side only. It is the architecture most of the world's wafers still use, and it is what every cost-driven part gets built on. Scaling it stopped working somewhere around 28 nm, because a gate that touches only the top of the channel loses control of it as the gate gets shorter, and the leakage that follows rises exponentially rather than gradually. High-k metal gate at 45 nm and strain engineering bought a few more nodes, and then the industry stood the channel up as a fin (014). 28 nm was the last planar logic node with a broad customer base, and it has stayed the price and performance sweet spot for more than a decade.

## Strengths and weaknesses
The strengths are all economic and industrial rather than technical. Mask counts are low, the processes are decades old and yield well, dozens of companies can build them, and mature lines carry an enormous library of specialty add-ons that leading-edge processes do not offer: high-voltage devices, BCD for power management, embedded flash, thick copper for RF inductors, MEMS structures, and image-sensor pixels. The weakness is that a planar device below about 28 nm cannot hold the channel off. Subthreshold leakage climbs, and threshold voltage spreads out from device to device because the channel contains few enough dopant atoms that their random placement matters. The failure mode that ends the architecture is an SRAM one: as the threshold spread widens, some cells stop being reliably writable at the supply voltage the rest of the chip needs, so the memory fails before the logic does.

## When to use
If the part is a microcontroller, a power-management IC, a display driver, an image sensor, an automotive sensor interface, or anything dominated by analog and I/O, stay on planar bulk at 28 nm to 180 nm and do not think about it again. A shrink has to be justified by performance now, because cost per transistor has been roughly flat since 28 nm: a 28 nm 300 mm wafer runs around $3,000 against about $30,000 at N2, and the density gain does not make up the difference. Move to FinFET (014) when you need modern CPU or GPU performance or the density of a large SoC. Move sideways to FD-SOI (003) when you want FinFET-like leakage and body biasing at close to planar-node cost, which is a common answer for battery-powered and RF-heavy parts.

## Key numbers
28 nm as the last planar logic node with a broad customer base · about $3,000 for a 28 nm 300 mm wafer against roughly $30,000 at N2 · cost per transistor roughly flat from 28 nm onward · dozens of firms can manufacture here against three at the leading edge · Chinese fabs heading toward about 28% of world mature-node capacity.

## Supply chain
This is the least concentrated technology on the sheet, and that is the whole point of it. i-line and KrF scanners come from Nikon and Canon as well as ASML, with SMEE building domestic Chinese equivalents; etch and deposition come from Applied Materials, Lam, and TEL, and increasingly from Naura and AMEC; and a large used-tool market supplies 200 mm lines that nobody builds new equipment for. No export-control regime bites at 28 nm and above. The exposure runs the other way. Western buyers depend on a mature-node supply base that is concentrating in China and Taiwan, and mainland Chinese fabs are heading toward roughly 28% of world mature-node capacity, built with state support and priced accordingly. If that supply is cut off or, more likely, floods the market, the damage is to the margins and survival of incumbent analog and power suppliers rather than to anyone's technical roadmap. The 2021–2022 automotive shortage was a mature-node shortage, not a leading-edge one, which is a fair preview of how this dependency actually hurts.

## Examples
TSMC's 28HPC+ still runs large volumes more than a decade after introduction. GlobalFoundries built its business on 28SLP and 22FDX after leaving the leading edge. SMIC and Hua Hong have expanded mature-node capacity aggressively in China. Automotive and industrial microcontrollers from NXP, Infineon, STMicroelectronics, and Renesas are almost all planar, as are Texas Instruments' 300 mm analog lines in Texas and Utah, and the CMOS image sensors in every phone camera.

## Economic profile
Most of this capacity is fully depreciated. A 28 nm line built between 2011 and 2015 has paid for its tools, so its cash cost per wafer is far below the price a new fab would need, and that is what makes mature nodes profitable and also what makes new entrants dangerous. China's buildout is the live variable: subsidized new capacity at mature nodes competes against depreciated Western capacity, and the winner of that fight is decided by pricing policy rather than by technology. If you are building a business here, the question to answer is not whether you can make the part but what your cost looks like when a competitor with state financing prices at cash cost. Tariff and Section 232 activity aimed at mature-node imports is the policy response, and it is unresolved.

## Videos

- https://www.youtube.com/watch?v=GZACoEuiZMo — Lecture 9 (CHE 323) CMOS Process Flow (Chris Mack, 13 minutes, 50k+ views)
- https://www.youtube.com/watch?v=1Lad28K3Xi0 — CMOS Fabrication Process (Animation) (Solahuddin Jr, 3 minutes, 100k+ views)

## Further reading

[Lecture 22: Integrated circuit fabrication (An-Najah National University)](https://staff-old.najah.edu/sites/default/files/Lec22.pdf) · [China's Mature Semiconductor Overcapacity: Does It Exist and Does It Matter? (CSIS)](https://www.csis.org/analysis/chinas-mature-semiconductor-overcapacity-does-it-exist-and-does-it-matter)
