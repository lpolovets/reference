---
number: 17
name: High-Purity Quartz
part: 4
group: Silicon feedstock
use: [semi, grid]
refining: mono
mining: mono
substitution: none
volatility: low
---

## Description
High-purity quartz is quartz sand refined to total impurities in the low parts per million, and its main job is to hold molten silicon without contaminating it. In the Czochralski process, polysilicon is melted at about 1,420 °C in a fused-quartz crucible and a seed crystal is slowly pulled and rotated out of it over roughly a week to grow a single-crystal ingot. The crucible is in contact with the melt for that entire pull, so any aluminum, sodium, titanium, or iron in the quartz has time to migrate into the silicon and ruin it. Ordinary quartz sand cannot do this at any price. The Spruce Pine pegmatites in North Carolina are geologically unusual: they crystallized slowly enough, and with few enough trace elements, that the quartz can be processed into crucible grade at commercial volumes. Two companies mine and refine it there, Sibelco under the IOTA brand and The Quartz Corp, a joint venture of Imerys and Norsk Mineral.

## Strengths and weaknesses
The material does something nothing else does economically: it survives a week at 1,420 °C against molten silicon while contributing almost no contamination, which is why the semiconductor and solar industries both standardized on it. Its weaknesses are economic and geographic rather than technical. Volumes are tiny relative to the value they enable, prices are set in bilateral contracts rather than on an exchange, and the industry is famously secretive, so published figures are estimates and should be treated that way. The failure mode is a single-location outage. Both mines sit in the same small area of the same county, exposed to the same weather and the same power grid, and Hurricane Helene proved in September 2024 that this is not a theoretical concern.

## When to use
This is not a material anyone chooses; it is a dependency to map. If you pull silicon ingots, audit how many weeks of crucible inventory you and your crucible supplier hold, because the exposure sits at your supplier rather than on your own purchase orders. If you build synthetic quartz into a plan, verify which grade you actually mean: synthetic and cultured quartz already serve some semiconductor consumables, but for large Czochralski crucibles they cost roughly 5–10x natural high-purity quartz, which prices them out of solar entirely and makes them a partial answer even in chips. For everything else on your bill of materials, this entry is mainly useful as a calibration point. A chokepoint held by a friendly country with two competing operators is a different kind of risk from one held by a strategic rival, and it deserves a different response.

## Key numbers
Spruce Pine supplies roughly 70–90% of world high-purity quartz, most estimates above 80% · crucibles hold molten silicon at about 1,420 °C for a Czochralski pull of roughly a week · crucibles have been estimated at about 30% of the manufacturing cost of a monocrystalline silicon ingot · synthetic quartz costs roughly 5–10x natural at crucible grade · production is on the order of tens of thousands of tonnes a year, with two operators · mines shut on 26 September 2024 after Hurricane Helene and restarted within about two weeks.

## Chokepoint
A near-monopoly held by the United States, which is the reason this entry is on the sheet. Estimates of the Spruce Pine share of world crucible-grade quartz run from about 70% to about 90%, and the honest answer is that nobody outside the two companies knows precisely, because neither publishes volumes. Hurricane Helene shut both operations on 26 September 2024, and for about two weeks it was a front-page semiconductor risk; Sibelco restarted production and shipments in early October and ramped back to full rate, and no chip fab actually stopped. That near-miss is the useful data point. A disruption here does not halt wafer production immediately, because crucible makers and ingot pullers hold inventory, but a multi-month outage would work its way through both the chip and solar supply chains with no available substitute. Be precise about what the dependence covers: it is the crucible, not the silicon. The silicon in a wafer comes from polysilicon made in Germany, the US, Japan, Korea, and China, and Spruce Pine quartz never enters the chip. Alternatives are under development in Norway (Drag), India, and elsewhere, plus expanded synthetic capacity, and Sibelco committed about $200 million in 2023 to roughly double its Spruce Pine capacity. None of them arrives quickly, because qualifying a new quartz source with a crucible maker and then with an ingot puller is a multi-year exercise in trace-element chemistry.

## Examples
Sibelco's IOTA products and The Quartz Corp are the two Spruce Pine operators. Downstream, crucible makers such as Shin-Etsu Quartz, Momentive, and a growing set of Chinese producers turn the sand into fused-quartz crucibles, which then go to ingot pullers including Shin-Etsu Handotai, SUMCO, GlobalWafers, and the large Chinese wafer companies. Norway's Drag deposit, operated by The Quartz Corp, is the most-cited non-US source, and Australian and Indian projects have been announced repeatedly without displacing Spruce Pine. Hurricane Helene in September 2024 is the reference disruption, and China's steadily widening export-licensing list is the reason people started asking who else holds materials like this.

## Economic profile
The market is small in revenue and enormous in leverage: tens of thousands of tonnes a year of a material that gates hundreds of billions of dollars of wafer and module production. There is no exchange price and no price reporting agency assessment worth much, because volumes move on multi-year bilateral contracts between a handful of counterparties, which is also why this material is invisible in commodity databases and in most critical-minerals policy documents. Prices are stable in a way that nothing else on this sheet is, and that stability is the point of the entry: the two operators have priced for long-term relationships rather than for extraction, and their customers have not felt the need to build alternatives. Compare that with a chokepoint of similar tightness held by a strategic rival, where buyers pay a two-tier price and carry inventory against a policy decision. Niobium is the other entry on this sheet that makes the same point, from Brazil rather than the United States, and with an even tighter single-company share. So the concentration number on its own does not tell you how exposed you are; you also have to ask who holds it and what they want from the relationship.

## Videos

- https://www.youtube.com/watch?v=pPh3llHq5vc — Why You Need Sand from This Town to Make a Computer (Half as Interesting, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=MZf3ksYsHz8 — Sibelco Spruce Pine IOTA HPQ (Sibelco Group, 6 minutes, 5k+ views)
- https://www.youtube.com/watch?v=lzHqhNoyx2o — How to make pure, synthetic quartz (Nikkei Asia, 8 minutes, 100k+ views)

## Further reading

[Geology of the Spruce Pine District, Avery, Mitchell, and Yancey Counties, North Carolina (U.S. Geological Survey)](https://pubs.usgs.gov/bul/1122a/report.pdf) · [Quartz resources in Norway (Geological Survey of Norway)](https://www.ngu.no/en/geological-resources/quartz-resources-norway)
