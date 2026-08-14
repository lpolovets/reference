---
number: 31
name: Base Stations, Small Cells and DAS
part: 6
group: Equipment & timing
reach: [short, metro]
capacity: [mbps, gbps]
medium: rf
latency: sub
maturity: dep
---

## Description
A base station is a baseband unit plus one radio per sector, and in 5G the radio is usually an active antenna unit with 32 or 64 transmit chains behind a panel about a meter tall. 3GPP separates base stations into three classes by how close a user is allowed to get: wide area for macro cells, specified against a minimum coupling loss of 70 dB, medium range for micro cells at 53 dB, and local area for pico cells at 45 dB. In practice that maps to power. A macro sector radiates a few hundred watts of RF and covers 1 to 3 km in mid band; a small cell radiates 1 to 10 W from a streetlight or a utility pole and covers 100 to 300 m; a pico or femto cell inside a building radiates under a watt. A distributed antenna system takes a different approach to the same coverage problem: one signal source feeds many small antennas spread through a building, either over coaxial cable and splitters in a passive design or over fiber to remote radio units in an active one. Active systems cost more and carry multiple operators and multiple bands; passive systems are cheaper and usually serve one operator, often fed by a repeater picking up the outdoor macro signal.

## Strengths and weaknesses
Macro cells are the cheapest capacity per bit anyone can build, because one site with 100 MHz of mid band delivers 400 Mbps to 1 Gbps per sector across three sectors and reuses a structure, a power feed and a backhaul circuit that are already paid for. Their weakness is that coverage and capacity are the same resource: when a sector fills, the only fixes are more spectrum, more antenna ports, or another site, and another macro site is the expensive one. Small cells fix capacity exactly where it is needed and nowhere else, which is their strength and their problem, since a network of small cells multiplies the number of leases, power drops, backhaul circuits and maintenance visits without multiplying coverage. Distributed antenna systems are the only clean answer for a large building, because mid-band and millimeter-wave signals lose 15 to 25 dB through modern coated glass and no amount of outdoor power fixes it. Their weakness is that they are construction projects inside somebody else's building, priced per square foot, with a cable plant that is hard to upgrade when a new band arrives.

## When to use
Add capacity to the macro layer first: more spectrum on an existing site, then more antenna ports, then sector splits, because all three reuse a site you already pay for. If a specific place stays congested after that, such as a transit plaza or a stadium concourse, put small cells there and expect the recurring costs rather than the radio to dominate. If the problem is inside a building, size the answer to the building: under roughly 100,000 square feet a passive system fed by a repeater usually suffices at $1 to $2 per square foot, and above about 500,000 square feet, or wherever more than one operator has to be carried, use an active fiber-fed system at $2 to $4. If you own the building and the carriers will not fund it, look at a neutral-host system or a private network on shared spectrum before assuming the coverage problem is theirs to solve, because for anything short of an airport or an arena it will not be. And check the backhaul before buying any of it: a small cell or a DAS head end behind a 1 Gbps circuit delivers 1 Gbps no matter what the radios can do.

## Key numbers
3GPP base station classes at 70 dB minimum coupling loss for wide area, 53 dB medium range, 45 dB local area · macro sector radiates a few hundred watts of RF and covers 1–3 km in mid band, 400 Mbps–1 Gbps per sector on 100 MHz · small cell 1–10 W over 100–300 m · in-building pico and femto cells under 1 W · coated glass costs 15–25 dB above about 3 GHz · in-building DAS typically $1–2 per square foot passive, $2–4 active and multi-operator · FCC caps of $500 for an application covering up to five small wireless facilities and $270 per facility per year for recurring fees.

## Examples
Ericsson AIR, Nokia AirScale and Samsung massive MIMO radios as the volume macro products; the 3GPP wide area, medium range and local area classes in TS 38.104; Corning, CommScope and SOLiD in-building DAS installations in airports and stadiums; neutral-host operators such as Boingo and Freshwave selling in-building coverage back to carriers; CBRS-based private networks used as an alternative to DAS in warehouses and campuses; and the FCC's 2018 Declaratory Ruling and Third Report and Order, which capped small cell fees and set 60- and 90-day shot clocks.

## Economic profile
The radios are the small part of everything on this list. A macro base station's radios and antennas are roughly a quarter of what a new site costs to build, and the rest is steel, foundation, power, permits, backhaul and the crew; upgrading radios on an existing site is therefore far cheaper per delivered bit than anything that needs a new location. Small cells invert the ratio in the worst way: the radio is a few thousand dollars, and the installed cost lands in the tens of thousands once pole attachment, a power drop, fiber and permitting are counted, with a recurring bill of a few thousand dollars a year per unit for site rent, power and backhaul forever. That recurring line is what the FCC's 2018 order attacked, capping application fees at $500 for up to five facilities and recurring right-of-way fees at $270 per facility per year, and setting 60-day and 90-day review deadlines, because municipal fees of $1,000 or more per pole per year were what made dense deployment uneconomic rather than any equipment price. In-building coverage is usually somebody else's problem to fund, and that is the single most useful fact in this entry: carriers pay for DAS in venues where the traffic and the brand exposure justify it, meaning stadiums, airports and convention centers, and decline nearly everywhere else, which leaves the building owner paying $1 to $2 per square foot for a passive system or $2 to $4 for an active multi-operator one. The neutral-host model exists to arbitrage that gap, building the system once and charging each carrier for access, and shared-spectrum private networks compete with it by letting the building owner skip the carriers entirely.

## Videos

- https://www.youtube.com/watch?v=Zs8q1TEllWk — Macrocell vs. Small Cell vs. Femtocell: 5G Base Stations Compared (Eye on Tech, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=GwBbDW9NrI8 — Passive Distributed Antenna System (DAS) – All You Need To Know (Wilson Connectivity, 5 minutes, 100k+ views)

## Further reading

[ETSI TS 138 104: 5G; NR; Base Station (BS) radio transmission and reception (ETSI / 3GPP)](https://www.etsi.org/deliver/etsi_ts/138100_138199/138104/16.04.00_60/ts_138104v160400p.pdf) · [Accelerating Wireless Broadband Deployment by Removing Barriers to Infrastructure Investment: Declaratory Ruling and Third Report and Order, FCC 18-133 (Federal Communications Commission)](https://docs.fcc.gov/public/attachments/FCC-18-133A1.pdf)
