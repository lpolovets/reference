---
number: 3
name: Silicon IGBT
part: 1
group: Silicon switches
power: [kw, mw]
voltage: [mains, mv]
semiconductor: [si]
uses: [ind, grid, ev]
maturity: comm
---

## Description
An insulated-gate bipolar transistor is a MOS gate driving a wide-base bipolar transistor on the same die. Adding a p-type collector layer under the n drift region turns the drain into an emitter of holes, and those holes flood the drift with an electron-hole plasma that cuts its resistance by more than an order of magnitude. The forward drop is then a junction drop plus a small resistive term, so VCE(sat) sits around 1.5–2.0 V at rated current and barely changes between a 1200 V part and a 3300 V one. That flatness against the MOSFET's 2.5-power scaling is why IGBTs became the standard switch above 600 V. The price is paid at turn-off: closing the gate shuts the channel but cannot remove the stored plasma, so the remaining holes recombine on their own and produce a tail current lasting 0.1–1 µs while the full DC voltage is already across the device, which makes turn-off energy large and caps practical switching at roughly 2–20 kHz. Modern parts use a trench gate plus a thin field-stop layer on a wafer thinned to about 110–120 µm for a 1200 V rating, which shortens the drift and cuts both VCE(sat) and stored charge. An IGBT cannot conduct in reverse at all, so a fast-recovery diode is always co-packed with it, and devices are sold at 600/650, 1200, 1700, 3300, 4500 and 6500 V, from 10 A discretes up to modules of 3600 A at 1700 V.

## Strengths and weaknesses
The strength is conduction loss per dollar above 600 V, and it is a large gap: the silicon area needed to carry 100 A at 1200 V as a MOSFET would be absurd, while as an IGBT it is about a square centimeter. IGBTs also survive a short circuit for a specified time, typically 10 µs and 6 µs on the newest high-efficiency generations, which is long enough for a desaturation detector to notice and turn the gate off, and they take large overloads because the plasma spreads current across the whole die. The weakness is the tail current. Turn-off loss scales with frequency, so a drive runs at 2–8 kHz, the output filter and motor see coarse pulses, and the 2–4 kHz carrier is audible as the whine every industrial drive makes. The second weakness is the knee in the on-state characteristic: the roughly 1.5 V drop is there at 10% load as much as at full load, so light-load efficiency is poor compared with a device whose loss falls as the square of current. Modern trench field-stop parts do have a positive temperature coefficient of VCE(sat) at rated current, which is what allows several die or modules to be paralleled without one hogging the current.

## When to use
Use an IGBT when you have to block 600 V or more and the switching frequency can stay under about 20 kHz. That covers most of industry: variable-frequency drives, solar central inverters, welders, induction heating, UPS, traction converters, and grid-tied storage. A good rule of thumb is that if conduction loss dominates your loss budget, use an IGBT, and if switching loss dominates, use SiC. If the load spends most of its life at light load, as an electric vehicle does, the fixed 1.5–2 V knee costs you real energy and SiC is worth the premium. If you want cheap and forgiving short-circuit protection, the 10 µs withstand gives a desat circuit far more room than the 2–3 µs a SiC MOSFET allows. Below about 250 V, do not use an IGBT at all: a silicon MOSFET has lower loss and switches far faster there.

## Key numbers
VCE(sat) of 1.5–2.0 V at rated current, roughly flat from 1200 V to 3300 V · tail current of 0.1–1 µs at turn-off · practical switching 2–20 kHz, with a 2–4 kHz carrier typical in drives · ratings sold at 600/650, 1200, 1700, 3300, 4500 and 6500 V · modules to 3600 A at 1700 V · 1200 V field-stop die thinned to about 110–120 µm · short-circuit withstand of 10 µs, 6 µs on newer generations.

## Examples
Infineon IGBT7 in EconoDUAL and PrimePACK housings; Mitsubishi Electric X-series and NX modules; Fuji Electric 7th-generation modules; Semikron Danfoss SEMITRANS and SEMIX; Hitachi Energy 6500 V modules and press-pack IGBTs for voltage-source HVDC; the 62 mm module footprint, which several vendors build to so a drive maker can second-source.

## Economic profile
The die is cheap and the module around it is not. A 1200 V IGBT carries roughly 100–150 A per square centimeter of silicon on a standard thinned 200 mm process, and the widely quoted comparison is that a 100 A discrete SiC MOSFET at 650 or 1200 V sells for about three times the equivalent silicon IGBT. In a large module the die is often less than half the price, with the ceramic substrate, baseplate, bond wires, housing and final test making up the rest, which is why packaging is where module vendors compete. At the converter level the arithmetic is friendly: a 1200 V, 600 A half-bridge module runs a few hundred dollars, three of them make the six-pack for a drive of roughly 250 kW, and that works out to something like $2–4 per kilowatt of drive output at the module level, derived from those two figures rather than quoted from a price list. Infineon holds the largest share of the module market, with Mitsubishi, Fuji, Semikron Danfoss and Hitachi Energy behind it and Chinese suppliers such as StarPower and BYD taking large domestic share since 2021. Prices decline slowly, low single digits a year, because the technology is mature and the die shrink is nearly exhausted, and the 2021–2023 shortage pushed them up instead. Designers are moving to SiC at the high-frequency and light-load end, but IGBTs remain the standard choice in industrial drives and grid inverters, where the switching frequency is low, conduction loss dominates, and nobody wants to pay three times as much for efficiency the end customer will not notice.

## Videos

- https://www.youtube.com/watch?v=RxRJW09A_XA — Electronic Basics #28: IGBT and when to use them (GreatScott!, 7 minutes, 1m+ views)
- https://www.youtube.com/watch?v=hcyw5ygmA3M — Semiconductor Devices: The IGBT (Insulated Gate Bipolar Transistor) (Electronics with Professor Fiore, 17 minutes, 10k+ views)

## Further reading

[Fuji IGBT Module Application Manual (Fuji Electric)](https://www.fujielectric.com/products/semiconductors_devices/semiconductor/product_series/REH984g_EN_03.pdf) · [Insulated Gate Bipolar Transistor (IGBT) (NPTEL, IIT Kharagpur)](https://archive.nptel.ac.in/content/storage2/courses/108105066/PDF/L-7%28DK%29%28PE%29%20%28%28EE%29NPTEL%29.pdf)
