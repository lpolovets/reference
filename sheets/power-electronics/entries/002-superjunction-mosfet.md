---
number: 2
name: Superjunction MOSFET
part: 1
group: Silicon switches
power: [w, kw]
voltage: [mains]
semiconductor: [si]
uses: [it, cons, grid]
maturity: comm
---

## Description
A superjunction MOSFET replaces the plain drift region with alternating n and p columns running down through the die. Under reverse bias the columns deplete each other sideways, so the vertical electric field is nearly flat rather than triangular, and the n column can be doped about ten times more heavily than a conventional drift region while still blocking the same voltage. Conduction happens in that heavily doped n column, so specific on-resistance now scales roughly linearly with breakdown voltage instead of as the 2.5 power of it. The practical effect at 600 V is large: Infineon's CoolMOS C7 generation brought area-specific RDS(on) below 1 Ω·mm², which is 10 mΩ·cm², against roughly 70 mΩ·cm² for an ideal conventional silicon device at the same rating. Making the columns is the hard part, and there are two routes: grow five to seven thin epitaxial layers and implant boron into each one, or etch deep trenches and fill them with p-type epitaxy. Devices are sold at 500, 600, 650, 700, 800 and 900–950 V, which covers rectified single-phase and three-phase mains with margin, and the structure runs out of room above that because the column aspect ratio becomes impractical.

## Strengths and weaknesses
The strength is die area. A 600 V superjunction device needs roughly a fifth to a tenth of the silicon a conventional MOSFET would need for the same RDS(on), so it is cheaper, has less capacitance, and switches faster. The main weakness is the body diode. Those heavily doped columns store a lot of charge, so reverse recovery charge Qrr runs to several microcoulombs on a standard 600 V part, and in a hard-switched bridge leg the recovery current spike can destroy the device outright. Fast-diode grades use electron irradiation or heavy-metal doping to kill carrier lifetime and cut Qrr by roughly five to ten times, at the cost of higher RDS(on) and a worse temperature coefficient. The second weakness is a very nonlinear output capacitance: Coss falls by two to three orders of magnitude as the drain voltage rises from zero to about 50 V, so almost all the stored charge sits at low voltage, which makes zero-voltage-switching transitions abrupt and makes dead-time design and simulation harder than the datasheet curves suggest.

## When to use
Use superjunction as the default 600–650 V silicon switch in anything soft-switched: the LLC primary in a 65 W adapter, a TV supply, or a 3 kW server power supply, where the body diode is commutated gently and never sees hard recovery. Use it in a conventional boost power factor correction stage too, but pair it with a SiC Schottky as the boost diode so the superjunction device is not recovering anything. If you are hard-switching a bridge leg, in a totem-pole PFC or a motor drive, do not reach for a standard part: use a fast-diode grade, or move to SiC or GaN. If you need to block more than about 950 V, superjunction is not sold there and SiC is the answer. If your switching frequency is above roughly 500 kHz, GaN usually wins on gate charge and output capacitance even though the die costs more.

## Key numbers
Ratings sold at 500–950 V · area-specific RDS(on) below 1 Ω·mm² (10 mΩ·cm²) at 600 V, against roughly 70 mΩ·cm² for conventional silicon · a fifth to a tenth the die area of a conventional MOSFET at the same RDS(on) · Qrr of several microcoulombs standard, five to ten times lower on a fast-diode grade · Coss falls two to three orders of magnitude between 0 and about 50 V · five to seven epitaxy-and-implant cycles to build the columns.

## Examples
Infineon CoolMOS (C7, P7, the CFD fast-diode families, and CoolMOS 8); STMicroelectronics MDmesh; onsemi SuperFET; Toshiba DTMOS; ROHM PrestoMOS. They are the primary-side switches in 80 PLUS Titanium server power supplies, in laptop and phone adapters that are not yet GaN, and in the boost stages of residential PV string inverters.

## Economic profile
The process costs more and the die costs less, and the second effect wins. Five to seven epitaxy-and-implant cycles roughly double or triple the wafer cost against a single-epi conventional MOSFET, but the die is five to ten times smaller for a given RDS(on), so far more parts come off the wafer and the finished part is cheaper than the conventional 600 V MOSFET it replaced. Buyers therefore switched on price rather than on performance, which is unusual for a new device structure. A 600 V, 20–30 mΩ device in TO-247 sells for a few dollars in volume, which is roughly a third of what a 650 V SiC MOSFET of comparable on-resistance costs, and that ratio is the entire argument for staying on silicon in a soft-switched converter. Infineon invented the structure in the late 1990s and still holds the largest share and the deepest patent position, with ST, onsemi and Toshiba as the second tier and Chinese foundries pushing hard into the consumer adapter end, which is where prices fall fastest. In a 3 kW server power supply the semiconductors are usually 10–15% of the bill of materials and the superjunction devices are most of the primary-side share, so a designer trading up to SiC there is adding a few dollars to buy back one to two points of efficiency.

## Videos

- https://www.youtube.com/watch?v=FQT47mx9Kf4 — Module 27 Super Junction MOSFETs (CUSP, 20 minutes, 5k+ views)
- https://www.youtube.com/watch?v=xAak8v5IYHI — 600V Super Junction MOSFETs Tech Explainer | ROHM Semiconductor (ROHM Semiconductor, 2 minutes, 10k+ views)

## Further reading

[600 V CoolMOS C7 Design Guide (Infineon)](https://www.infineon.com/assets/row/public/documents/24/42/infineon-application-note-600v-coolmos-c7-applicationnotes-en.pdf) · [Analysis of Superjunction MOSFET (CoolMOS™) Concept Limitations-Part I: Theory (Materials)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12693390/)
