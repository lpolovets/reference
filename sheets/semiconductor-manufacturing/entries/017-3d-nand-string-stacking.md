---
number: 17
name: 3D NAND String Stacking
part: 4
group: Memory arrays
devices: [memory]
node: [mature]
wafer: [w300]
toolcost: med
suppliers: few
---

## Description
NAND flash stopped scaling sideways around 2013 and started scaling upward instead. A 3D NAND array is a stack of alternating oxide and nitride films with vertical channel holes etched down through all of them, and every intersection of a hole with a word-line layer is one cell. Capacity comes from layer count, which has gone from 24 a decade ago to over 300 in production, with Samsung's tenth-generation V-NAND at 400. Two tricks made that possible. String stacking builds the array as two or three separate decks that are etched and aligned in sequence, because a single high-aspect-ratio etch (010) cannot get through the whole stack in one pass. And the CMOS periphery moved out from beside the array to underneath it or onto a separate bonded wafer (CMOS-under-array, and YMTC's wafer-bonded Xtacking), so control logic stops consuming die area that could hold bits.

## Strengths and weaknesses
The economics are the strength. Cost per bit falls with layer count, and layers cost deposition and etch time rather than lithography, so NAND's cost curve is decoupled from EUV entirely. This is the one high-density memory technology you can advance without ASML's hardest tool. The weaknesses are mechanical and thermal. A stack of several hundred alternating films carries enough intrinsic stress to bow a 300 mm wafer, channel holes taper and go out of round toward the bottom, each deck boundary is an alignment risk, and the etch runs tens of minutes per wafer, which is why a NAND fab buys an extraordinary number of etch chambers. The device-level cost of pushing capacity is QLC. Four bits per cell is 33% more capacity than TLC at the same array, paid for with endurance in the hundreds of program/erase cycles rather than the low thousands, and slower reads because more voltage levels have to be resolved.

## When to use
NAND is the only viable bulk non-volatile storage at scale, so the real decision is bits per cell. If the workload is read-heavy and capacity-driven (AI training data sets, warm storage, read-intensive enterprise SSDs), QLC gives you the lowest dollars per terabyte and its endurance limit will not bind. If the workload writes constantly or cares about tail latency, pay for TLC, because a QLC drive that hits its endurance rating is a replacement rather than a repair. Do not design around NAND behaving like DRAM: read latency is microseconds rather than nanoseconds, and erase happens in large blocks, so the controller and the filesystem have to be built for it.

## Key numbers
Layer counts from 24 a decade ago to over 300 in production, with Samsung's tenth generation at 400 · two or three decks per device · channel holes past 60:1 aspect ratio through several microns of stacked film · etch times of tens of minutes per wafer · QLC adds 33% more bits per cell than TLC, at hundreds rather than thousands of program/erase cycles · five firms make it.

## Supply chain
Five companies make 3D NAND: Samsung at roughly 32% of the market in Q3 2025, SK Hynix at about 19% (with Solidigm), Kioxia at about 15% (with SanDisk), Micron, and China's YMTC. Equipment is more concentrated than the device makers are. Lam Research is the largest dry-etch supplier and, with TEL, effectively owns the high-aspect-ratio channel etch; deposition comes from Lam, Applied Materials, ASM, and Kokusai; and the wafer bonders that make Xtacking and bonded-array designs possible come from EV Group and SUSS MicroTec. Because none of this needs EUV, NAND is the technology where Chinese domestic capability goes furthest: YMTC was added to the US Entity List in December 2022 and has kept advancing anyway. That is exactly why US rules have targeted etch and deposition equipment for China alongside lithography. A Lam or TEL cutoff would stop a NAND roadmap; an ASML cutoff would not.

## Examples
Samsung's V-NAND generations, now at 400 layers in its tenth generation. SK Hynix's 321-layer TLC. Kioxia and SanDisk's BiCS10 at 332 layers, which reaches over 37 Gb/mm² of areal density and beats higher-layer-count parts on density per layer. Micron at 276 layers. YMTC's Xtacking, which bonds a separately built CMOS wafer to the array wafer rather than building the periphery underneath it.

## Economic profile
Cost per bit falls with layers, and the capital that buys layers is etch and deposition chambers rather than scanners, so a NAND fab's capex profile looks nothing like a logic fab's. That also makes the industry violently cyclical: capacity comes in large increments, bits per wafer jump with each generation, and prices have collapsed repeatedly when supply outran demand. The 2025 and 2026 memory upcycle has been driven more by DRAM and HBM than by NAND, and the capital that HBM is absorbing (018, 028) is capital not going into NAND layers. If you are building on NAND, assume the price per terabyte keeps falling on a multi-year trend and swings violently around it, and do not build a business that needs the trend line to hold in any given quarter.

## Videos

- https://www.youtube.com/watch?v=KCWDzWG1BcI — 3D NAND: The Most Scalable Semiconductor (Asianometry, 20 minutes, 100k+ views)
- https://www.youtube.com/watch?v=YtBysgPOKx4 — How does NAND Flash Work? Reading from TLC : Triple Level Cells || Exploring Solid State Drives (Branch Education, 13 minutes, 100k+ views)
- https://www.youtube.com/watch?v=ANHzVOiUwGI — 3D NAND: Key Process Steps (Lam Research, 2 minutes, 50k+ views)

## Further reading

[Tech Brief: Memory "Grows Up" with 3D NAND (Lam Research)](https://newsroom.lamresearch.com/Tech-Brief-Memory-Grows-Up-with-3D-NAND) · [Unlocking z-pitch scaling for next-generation 3D NAND flash (imec)](https://www.imec-int.com/en/articles/unlocking-z-pitch-scaling-next-generation-3d-nand-flash)
