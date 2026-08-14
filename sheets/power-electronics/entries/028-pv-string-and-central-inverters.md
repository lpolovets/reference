---
number: 28
name: PV String and Central Inverters
part: 5
group: Grid converters
power: [kw, mw]
voltage: [mains]
semiconductor: [si, sic]
uses: [grid]
maturity: comm
---

## Description
A grid-tied PV inverter takes DC from series strings of modules, holds each string near its maximum power point, and inverts it to 50 or 60 Hz AC through a three-phase bridge and an LCL filter. Two architectures split the utility market. A string inverter is a 50–350 kW box with 6–16 independent MPPT inputs, bolted to the racking beside the array; a central inverter is a 1–5 MW cabinet fed through combiner boxes and long DC runs, with one or two MPPT channels covering a whole block. Both work at up to 1,500 V DC, which replaced 1,000 V across the industry between roughly 2015 and 2020 because higher string voltage means lower current and less copper. Silicon IGBTs do most of the switching, and silicon carbide turns up in string inverters where a higher switching frequency shrinks the filter inductors enough to matter for a part a technician has to lift. Plants are built with more DC than AC on purpose: the inverter loading ratio, DC watts divided by AC rating, usually runs 1.2–1.4, and NREL's Q1 2023 utility benchmark models 1.34. Above the AC rating the inverter holds its output flat and the surplus DC goes unused, which is called clipping.

## Strengths and weaknesses
Central inverters are cheaper per watt of AC rating and there are far fewer of them to monitor, which is why they held utility scale for a decade. Their weakness is granularity, in two senses. One failure takes 1–5 MW off line until a specialist arrives with a spare, and one or two MPPT channels averaged across a whole block give up energy whenever rows are mismatched by soiling, terrain, or a stuck tracker. String inverters trade the other way: 40 units per 10 MW means a single failure costs about 2.5% of the block, a two-person crew swaps one in an hour with no crane, and 6–16 MPPT channels per unit follow uneven ground. What string adds is unit count, more AC cabling, and more connections that can fail. The wear-out mechanisms are the same in both, and they are the boring ones: cooling fans, DC-link capacitors, and bond-wire fatigue in the IGBT modules from daily thermal cycling, which is why an inverter is normally replaced once or twice inside a plant's 30-year life.

## When to use
If the site is flat, uniform, and above roughly 50 MW, with a crew and spares kept on site, central inverters still compete on installed cost per watt. If the terrain rolls, the array is broken into odd shapes, or there is no crane access, use string inverters; the MPPT granularity and the one-hour swap are usually worth more than the price gap. Under about 1 MW, including commercial rooftops, string inverters are the only sensible answer. Size the inverter loading ratio to the offtake rather than to a default: 1.2–1.3 for a tracked plant selling into a market that still pays for midday energy, 1.3–1.4 or higher where midday prices are low or a co-located battery can absorb what would otherwise be clipped. Check the AC interconnection limit before you model any of it, because in a curtailed market the clipping you can design around is smaller than the curtailment you cannot.

## Key numbers
String inverters 50–350 kW with 6–16 MPPT channels, central inverters 1–5 MW with one or two · DC bus up to 1,500 V, replacing 1,000 V between roughly 2015 and 2020 · inverter loading ratio typically 1.2–1.4, with NREL's Q1 2023 utility benchmark at 1.34 · that benchmark puts a 100 MWdc tracked plant at $1.16/Wdc · one central inverter failure takes 1–5 MW off line, against about 2.5% of a block for one string unit in 40 · inverter replaced once or twice in a 30-year plant life.

## Examples
SMA's Sunny Central and Sunny Tripower lines; Sungrow's SG350HX string and SG3600UD central products; Huawei SUN2000; Power Electronics FS series; TMEIC utility central inverters. Certification runs through UL 1741 and IEC 62109, with grid behavior set by IEEE 1547 in the US.

## Economic profile
The inverter is a small line item that decides much larger ones. NREL's Q1 2023 benchmark puts a 100 MWdc single-axis-tracking plant with central inverters at $1.16/Wdc all in, and the inverter itself is usually under 10% of that, well behind modules, electrical balance of system, and fieldwork. Central hardware is cheaper per watt than string hardware, but a fair comparison has to add the DC cabling, the combiner boxes, and the crane and specialist a repair needs, and once those are in the two are close enough that developers pick on site conditions and O&M model rather than on sticker price. What actually moves project returns is availability and MPPT granularity, because a 1% difference in annual energy over a 30-year PPA is worth several times the price gap between the architectures. The cost that gets left out of early models is replacement: inverters do not last 30 years, so the financial model needs at least one mid-life swap, and a developer who bought the cheapest unit from a vendor that has since left the market pays for that in spares. Standard warranties run 5–10 years with extensions sold out to 20, and the price of the extension is a reasonable read on what the manufacturer thinks its own failure rate is.

## Videos

- https://www.youtube.com/watch?v=Zla5vDsiKbo — How does an inverter and MPPT of a PV system Work? - Sustainable Energy - TU Delft (EnergyX: Sustainable Energy: Design A Renewable Future, 12 minutes, 100k+ views)
- https://www.youtube.com/watch?v=YLoFV6dXm5c — String Inverters Explained: Advantages and differences with other inverters (Solar Solution, 8 minutes, 10k+ views)
- https://www.youtube.com/watch?v=g6rImvYQY9c — Solar Clipping Explained (Pacific Sun Technologies, 7 minutes, 10k+ views)

## Further reading

[U.S. Solar Photovoltaic System and Energy Storage Cost Benchmarks, With Minimum Sustainable Price Analysis: Q1 2023 (National Renewable Energy Laboratory)](https://docs.nlr.gov/docs/fy23osti/87303.pdf) · [DC to AC Conversion (PV Performance Modeling Collaborative)](https://pvpmc.sandia.gov/modeling-guide/dc-to-ac-conversion/)
