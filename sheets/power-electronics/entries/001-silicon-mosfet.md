---
number: 1
name: Silicon MOSFET
part: 1
group: Silicon switches
power: [w, kw]
voltage: [lv, mains]
semiconductor: [si]
uses: [it, cons, ind, ev]
maturity: comm
---

## Description
A power MOSFET is a vertical switch built as a stack on one die: source contacts on the top face, a channel that the gate turns on, a lightly doped n-type drift region that holds off the blocking voltage, and the drain on the back. Only electrons carry the current, so there is no stored minority-carrier charge to sweep out at turn-off and the device switches in tens of nanoseconds. The gate is a capacitor over a thin oxide and draws no steady current, so drive power is just the gate charge times the gate voltage times the switching frequency, normally well under a watt. Conduction loss is the current squared times RDS(on), and RDS(on) is dominated by the drift region: blocking more voltage needs a thicker and more lightly doped drift, and the specific on-resistance of an ideal silicon device rises roughly as the 2.5 power of the breakdown voltage, reaching about 70 mΩ·cm² at 600 V. Modern low-voltage parts use a trench gate instead of a planar one, which packs more channel into the same area: a 30 V trench device in a 5 × 6 mm leadless package is typically 1 mΩ or less, and a 100 V device 2–4 mΩ. Standard ratings sold are 12, 20, 25, 30, 40, 60, 80, 100, 150, 200 and 250 V for trench structures, and 500–900 V for planar ones, though above 400 V nearly all of that volume has moved to superjunction.

## Strengths and weaknesses
The strengths are speed, simple drive, and price. Switching in tens of nanoseconds keeps switching loss low enough to run at 100 kHz to several MHz, which is what shrinks the magnetics; the gate needs a voltage source and a few nanocoulombs and nothing else; and a 60 V, 3 mΩ part in a leadless package sells for roughly $0.50–1.00 in reel quantities. Most parts are also avalanche rated, meaning they can absorb a specified energy when an inductive load drives the drain past breakdown, so a modest clamp is usually enough and a snubber is not needed. The two weaknesses are the drift-region scaling above and the body diode. Every vertical MOSFET carries a parasitic PN diode from the p-body to the drain, and in a hard-switched bridge leg that diode conducts through the dead time and then has to recover, dumping its stored charge Qrr into the opposite switch as extra turn-on loss and a current spike. In a hard-switched half bridge that reverse recovery is often the largest single loss term, which is why designers either choose a part with a fast body diode, add a parallel Schottky, or move to a soft-switched topology.

## When to use
Use a silicon MOSFET as the default anywhere below about 200 V: battery tools, 12 V and 48 V automotive loads, server point-of-load rails, and low-voltage DC motor drives. If you need to block 400 V or more, go to a superjunction device rather than a conventional planar one, because the conventional part needs several times the die area for the same RDS(on) and you pay for that area. If you are hard-switching a half bridge, check Qrr before you optimize RDS(on), since the reverse recovery will usually cost you more than the last milliohm saves. If the current runs past roughly 100 A at 600 V or more, an IGBT is normally cheaper per amp. If you need switching above about 500 kHz at mains voltage, look at GaN instead.

## Key numbers
Trench parts sold at 12–250 V, planar parts at 500–900 V · ideal silicon specific on-resistance rises roughly as breakdown voltage to the 2.5 power, near 70 mΩ·cm² at 600 V · 30 V trench devices at 1 mΩ or below, 100 V devices at 2–4 mΩ · switching in tens of nanoseconds, so 100 kHz to several MHz is normal · a 60 V, 3 mΩ part costs roughly $0.50–1.00 in reels · gate drive power typically well under a watt.

## Examples
Infineon OptiMOS and StrongIRFET, onsemi PowerTrench, Nexperia NextPower, Vishay TrenchFET and Toshiba U-MOS, in 48 V server rails, USB-C chargers, 12 V automotive body electronics, and battery-pack disconnect switches; the synchronous rectifiers in nearly every laptop adapter are low-voltage silicon MOSFETs.

## Economic profile
This is the most commoditized part in power electronics. A 200 mm silicon wafer processed for trench MOSFETs costs a few hundred dollars and yields thousands of die, so the silicon in a 30 V part large enough to carry 60 A costs the maker cents and the package, leadframe, test time and reel together often cost more. Take the $0.50–1.00 price of a 60 V, 3 mΩ device rated near 50 A and the device works out to one or two cents per amp, which is derived from those two figures rather than a published number, but it is the right order of magnitude and it is why nobody redesigns a low-power converter to save on switches. Vendors are interchangeable at a given RDS(on) and package, so second-sourcing is routine and nobody holds pricing power on a standard part. What actually moves cost is die shrink: each trench generation cuts specific on-resistance by roughly 20–30%, so the same RDS(on) comes off a smaller piece of silicon and more parts come off the wafer, which supports a mid-single-digit annual price decline in normal conditions. The exception was 2021–2022, when automotive and industrial demand outran capacity and lead times on ordinary 40–100 V parts went past a year, which is the risk a buyer is really carrying here.

## Videos

- https://www.youtube.com/watch?v=Bfvyj88Hs_o — How a MOSFET Works - with animation! | Intermediate Electronics (CircuitBread, 5 minutes, 500k+ views)
- https://www.youtube.com/watch?v=_GJ7Xc7RupA — Power MOSFET (Basics, Structure, Working, Biasing, Features & Characteristics) Explained (Engineering Funda, 16 minutes, 100k+ views)

## Further reading

[Power MOSFET Basics (Infineon)](https://www.infineon.com/assets/row/public/documents/24/54/infineon-power-mosfet-basics-article-en.pdf) · [Trench Gate Power MOSFET: Recent Advances and Innovations (arXiv)](https://arxiv.org/abs/1208.5553)
