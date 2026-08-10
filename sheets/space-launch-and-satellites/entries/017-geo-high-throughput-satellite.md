---
number: 17
name: GEO high-throughput satellite
part: 4
group: Broadband
orbits: [geo]
mass: [med]
buyer: [com, civ, def]
maturity: routine
cost: high
---

## Description
A high-throughput satellite replaces the wide beams of a classic communications satellite with dozens or hundreds of narrow spot beams, each covering a few hundred kilometers. Beams far enough apart can reuse the same frequencies without interfering, so total capacity scales with the reuse factor rather than with the spectrum you were licensed, and a narrower beam has more gain, which puts more power on a smaller terminal. That is what took a single geostationary satellite from a few gigabits per second to Hughes' Jupiter 3 at more than 500 Gbps and the ViaSat-3 class designed for over 1 Tbps. The trade is that the beam layout is baked into the reflector and feed geometry at build, so the satellite is a fifteen-year bet on where demand will be. Latency is set by geometry and cannot be engineered away: 477 ms is the round-trip speed-of-light floor through GEO and services measure 550–650 ms.

## Strengths and weaknesses
Capacity per dollar of capital is genuinely good when the beams sit over paying traffic, and one satellite, one launch, one license, and one set of gateways is a far simpler operation than a constellation. Fifteen years of revenue from a single asset also finances well. The weaknesses are latency, inflexibility, and concentration. GEO lost consumer broadband on latency and is not getting it back. Beams cannot be moved unless the payload is software-defined, so a demand forecast that was wrong in year three is wrong for twelve more years. And the whole investment rides on one deployment sequence: ViaSat-3 F1 reached orbit in 2023 and lost more than 90% of its designed capacity when a reflector failed to deploy, triggering a $421M insurance claim and leaving the operator's capacity plan years behind. There is no partial credit in this architecture.

## When to use
Choose GEO high throughput when traffic concentrates over a fixed area and the application tolerates half a second of delay. In-flight and maritime connectivity along established routes, video distribution and broadcast, cellular backhaul, enterprise VSAT networks, and government leases where one asset parked over one theater is exactly the product all still work. Do not choose it for consumer internet or anything interactive, because LEO wins on latency by an order of magnitude and the price gap has closed. If the coverage requirement might move, buy a software-defined payload or a small GEO platform instead of a large fixed-beam satellite, and accept lower peak capacity in exchange for being able to re-point. The honest way to run the comparison against LEO is capex per gigabit per second delivered over the asset's whole life, counting the fraction of beams that will actually be sold.

## Key numbers
Jupiter 3 at about 9,200 kg launch mass and more than 500 Gbps · ViaSat-3 designed for over 1 Tbps per satellite · Viasat's estimate of $1.2–1.4B all-in for two ViaSat-3 satellites including launches, insurance, and ground infrastructure · a $421M insurance claim after ViaSat-3 F1's reflector failed · 550–650 ms round-trip latency against a 477 ms physics floor · 15-year design life.

## Regulatory and spectrum
Geostationary operators are the incumbents, and their regulatory position is an asset in itself. Under Article 22 of the Radio Regulations, non-geostationary systems must keep their emissions below equivalent power flux density limits designed to protect GSO networks, which is what stops a LEO constellation from simply overwhelming a GEO link in shared Ku and Ka spectrum. WRC-27, meeting in Shanghai from 11 October to 12 November 2027, is scheduled to review those limits, and that review is the single largest regulatory question facing GEO operators; SES and other incumbents have campaigned publicly to keep them, and the LEO operators want them relaxed. The rest of the GEO position is slot and market rights. Slots sit about 2° apart, so only so many satellites can serve one market on the same frequencies; an assignment must be brought into use within seven years of filing by keeping a capable satellite at the notified position for a continuous 90 days; and selling capacity in any country requires that country's landing rights. An incumbent holding landing rights in dozens of markets owns something a new entrant cannot replicate on a satellite-build timescale, and that is a large part of why the traditional operators remain valuable even as consumer broadband leaves.

## Examples
Hughes JUPITER 3 (EchoStar 24), the ViaSat-3 series with F1 crippled in 2023 and F2 entering service in 2026 over the Americas, Eutelsat KONNECT VHTS, SES-17, the Inmarsat Global Xpress fleet now inside Viasat, and Intelsat's EpicNG satellites now inside SES. Consolidation has been the sector's response to LEO: Viasat completed its acquisition of Inmarsat in 2023, and SES completed its acquisition of Intelsat in July 2025 to form a roughly 120-satellite GEO and MEO fleet.

## Economic profile
The metric that decides these programs is capex per delivered gigabit per second across fifteen years, and it improved enormously from wide-beam satellites to HTS, which is why the architecture persisted. What changed is the competition: LEO capacity is now abundant and priced against terrestrial broadband, so the GEO business retreated to the segments where a fixed footprint and a long-lived asset are advantages rather than liabilities. Consolidation followed, and the surviving operators sell multi-orbit service, reselling or partnering for LEO capacity while keeping the GEO fleet for broadcast, mobility, and government. If you are evaluating a GEO program today, look at how much of the capacity is contracted before launch, how much of the revenue is government or mobility rather than consumer, and whether the payload can be re-pointed if the forecast turns out wrong.

## Videos

- https://www.youtube.com/watch?v=H8eMEXz6Byo — KA-SAT The 1st high throughput satellite for Europe (Tooway Official, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=8zGZOupjMLs — Faster and More Powerful Satellite Internet Is on Its Way, Here’s How (Seeker, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=A1iAQZDJkiM — Introduction to Ka Band Satellites Part 1 (YedaCenter, 13 minutes, 10k+ views)

## Further reading

[Modernizing Spectrum Sharing for Satellite Broadband: Report and Order (Federal Communications Commission)](https://docs.fcc.gov/public/attachments/FCC-26-26A1.pdf) · [Resolution 76 (Rev.WRC-23): Protection of geostationary networks from the aggregate epfd of non-GSO systems (ITU Radio Regulations)](https://www.itu.int/dms_pub/itu-r/oth/0C/0A/R0C0A0000110050PDFE.pdf)
