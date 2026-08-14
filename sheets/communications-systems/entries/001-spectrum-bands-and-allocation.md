---
number: 1
name: Spectrum Bands and Allocation
part: 1
group: Spectrum & physical layer
reach: [short, global]
capacity: [kbps, tbps]
medium: rf
maturity: dep
---

## Description
Radio spectrum is a legal object as much as a physical one. The ITU Radio Regulations are a treaty that divides everything from 8.3 kHz upward into allocations by service, separately for three world Regions, and the treaty is renegotiated at a World Radiocommunication Conference roughly every four years. National regulators then assign licenses inside those allocations, which in the United States means the FCC for non-federal users and NTIA for federal ones, both printed on the same frequency allocation chart. Physics decides what each band is good for. Below about 1 GHz a wave diffracts around buildings and passes through ordinary walls, so one site covers many kilometers; above about 20 GHz it does neither, so a site covers a few hundred meters and needs line of sight. Channel width runs the other way, because 100 MHz is a seventh of all the spectrum below 700 MHz and an ordinary block at 28 GHz, so low band gives coverage, mid band from 1.7 to 4.2 GHz carries most of the traffic, and millimeter wave gives peak rate in a small area.

## Strengths and weaknesses
The system's real product is harmonization. When most countries allocate the same band to the same service, a chipmaker builds one radio for a global market, and that scale is why a 5G modem covering dozens of bands is a commodity part costing tens of dollars rather than a separate design per country. Allocation also gives interference protection with legal force, which is what lets an operator plan a network against a known noise floor instead of whatever the neighbors do. The weakness is that moving a band takes about a decade and the incumbents have to be paid. Clearing 280 MHz of C-band took an FCC proceeding opened in 2018, an auction that closed in February 2021, and $9.7 billion in accelerated relocation payments to satellite operators on top of the auction price. The other weakness is path dependence: a band is only worth what handsets already support, so a newly allocated band with no device ecosystem sells cheap even when the physics is good.

## When to use
If you need coverage per site, pick low band at 600 to 900 MHz and accept 5 to 20 MHz channels. If you need capacity across a city, pick mid band at 1.7 to 4.2 GHz, where 100 MHz channels are available and a macro site still reaches roughly a kilometer. If you need peak rate in a stadium or a plaza and can afford a site every few hundred meters, use millimeter wave at 24 to 47 GHz, where 400 to 850 MHz blocks are routine. If you cannot buy an exclusive license at all, use unlicensed spectrum at 5 and 6 GHz, where the FCC opened 1,200 MHz in 2020, or shared spectrum such as CBRS, and design for interference you do not control. For satellite, C-band at 4 and 6 GHz survives rain, Ku at 11 and 14 GHz is the volume band for consumer and enterprise service, and Ka at 20 and 30 GHz is where high-throughput capacity is, so pick by rain climate and by how much fade margin the link budget can carry. Below 30 MHz, HF is the only band that reaches over the horizon with no infrastructure, at a few kilobits per second.

## Key numbers
Low band 600–900 MHz, mid band 1.7–4.2 GHz, millimeter wave 24–47 GHz · Auction 107 sold 280 MHz of C-band for $81.2 billion in gross bids, about $0.88 per MHz-POP · Auction 1002 sold 70 MHz at 600 MHz for $19.8 billion, about $0.86 per MHz-POP · Auction 110 sold 100 MHz at 3.45 GHz for $22.5 billion, about $0.68 per MHz-POP · Auction 103 sold 3,400 MHz at 37, 39 and 47 GHz for $7.6 billion, under one cent per MHz-POP · CBRS priority access licenses cleared about $0.21 per MHz-POP · winners paid $9.7 billion in accelerated relocation payments on top of the C-band price (per-MHz-POP figures derived here from FCC gross bid totals).

## Examples
FCC Auction 107 (3.7–3.98 GHz C-band, $81.2 billion, 5,684 licenses, closed February 2021), Auction 1002 (the 600 MHz forward auction, $19.8 billion for 70 MHz, closed 2017, funded by $10.1 billion paid to broadcasters in the paired reverse auction), Auction 110 (3.45 GHz, $22.5 billion), Auction 105 (CBRS priority access, $4.9 billion for 20,625 county-level licenses) and Auction 103 (upper 37, 39 and 47 GHz, $7.6 billion for 3,400 MHz). Those totals are gross bids; net proceeds run several percent lower after bidding credits, so Auction 105 appears as $4.86 billion gross and $4.54 billion net. The NTIA frequency allocation chart and ITU Radio Regulations Article 5 are the two reference tables everything else points at.

## Economic profile
Spectrum is a balance sheet asset with no maintenance cost and no depreciation in the ordinary sense, which is why carriers borrow against it and why auction totals dwarf the equipment budgets they enable. The arithmetic that matters is dollars per megahertz per covered person: $81.2 billion for 280 MHz across roughly 330 million people is about $0.88 per MHz-POP, and $19.8 billion for 70 MHz across the same population is about $0.86. Those two numbers landing within a few cents of each other is the useful result, because it says buyers valued coverage spectrum and capacity spectrum about equally while millimeter wave, at under a cent per MHz-POP in Auction 103, was valued at roughly a hundredth as much. Between those poles, 100 MHz at 3.45 GHz cleared for $22.5 billion, about $0.68 per MHz-POP, and CBRS priority access licenses cleared at about $0.21, discounted because those licenses are county-sized, ten years long, and shared with naval radar. The money flows to the US Treasury, minus what goes to incumbents: broadcasters received $10.1 billion to vacate 600 MHz and satellite operators $9.7 billion to clear C-band early. For an operator the practical consequence is that spectrum is usually the largest single line item in a decade of capital spending, it is paid years before the first customer, and buildout conditions attached to the license mean it cannot simply be held.

## Videos

- https://www.youtube.com/watch?v=LH3G9JzEFTw — 5G Frequency Bands: What Are They Used For? (Wireless Future, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=E0ePePS1Iys — Understanding the Radio Frequency Spectrum (#715) (David Casler Ask Dave, 17 minutes, 100k+ views)

## Further reading

[United States Frequency Allocation Chart (National Telecommunications and Information Administration)](https://www.ntia.gov/page/united-states-frequency-allocation-chart) · [Auction 107: 3.7 GHz Service - Lower C-Band (Federal Communications Commission)](https://www.fcc.gov/auction/107)
