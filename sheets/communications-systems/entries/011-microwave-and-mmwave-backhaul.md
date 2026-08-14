---
number: 11
name: Microwave and mmWave Backhaul
part: 2
group: Fixed & tactical wireless
reach: [metro]
capacity: [mbps, gbps]
medium: rf
latency: sub
maturity: dep
---

## Description
A microwave backhaul link is two dishes pointed at each other across clear line of sight, carrying Ethernet between a cell site and a fiber point of presence or between two buildings. Classic microwave uses licensed bands from 6 to 42 GHz in channels of 7 to 112 MHz, which delivers 100 Mbps to 1 Gbps per path in ordinary use and up to about 2.5 Gbps with 4096-QAM and cross-polarization interference cancellation. E-band, at 71–76 and 81–86 GHz, has 10 GHz of spectrum available in channels of 250 MHz to 2 GHz, which puts 1–10 Gbps on an ordinary link and up to 25 Gbps with channel aggregation and dual-polarization MIMO. Antennas run 0.3 to 1.8 m; a 0.3 m dish at 80 GHz has roughly 45 dBi of gain and a beam under one degree wide, so alignment and tower sway become design problems rather than installation details. Latency is under 100 microseconds per hop, because radio crosses air at essentially the speed of light instead of the two-thirds of it that light manages in glass.

## Strengths and weaknesses
The strength is schedule and cost against fiber: a hop costs $10,000–50,000 for both ends and goes in within 1–6 weeks including the license, against roughly $30,000 per mile for aerial fiber and past $200,000 per mile buried in a city, on a permitting schedule measured in quarters. Latency also beats fiber over the same geography, which is why trading firms pay for microwave chains. The weakness is rain, and it is what sets every link length. Rain attenuation rises steeply with frequency: at a 25 mm/h rain rate it costs roughly 4.6 dB/km at 28 GHz and about 10 dB/km at 80 GHz, so the fade margin needed depends on the rain rate exceeded at the availability target you promise, and those targets are strict: 99.9% availability allows 8.8 hours of outage a year, 99.99% allows 53 minutes, and 99.999% allows about 5. That gives a clear ladder. A 6–11 GHz link runs 30–80 km and is limited by multipath and terrain rather than rain; 18–23 GHz runs 5–15 km; E-band runs 3–5 km at 99.99% availability in a temperate climate and 1.5–3 km at 99.999%, and under 1 km in a tropical rain zone. Adaptive modulation softens this by dropping from 4096-QAM to QPSK during a fade, which keeps the link alive at roughly a sixth of the throughput, so the availability figure for the full rate and for any rate at all are two different numbers and vendors quote whichever is flattering.

## When to use
Use microwave when fiber does not already pass the site and the traffic requirement is a gigabit or two for the length of the site lease. Use E-band when there is 1–5 km of clear line of sight to a fiber point of presence and the site needs multiple gigabits now rather than after a construction cycle; it is the cheapest multi-gigabit hop available and the registration is light-touch. Use 6–11 GHz when the span is tens of kilometers and a few hundred megabits is enough, which is still how most cell sites outside North America are fed. Do not plan an E-band link in a tropical rain zone at more than about a kilometer, and do not accept a link budget without seeing which rain rate and which availability target it was computed against. If the site will carry 10 Gbps or more for a decade and the right of way is obtainable, build fiber, because the radio's capacity ceiling arrives well before the lease does. Whatever the band, check the backhaul against what the radios on the tower can actually produce: a 1 Gbps hop behind a sector capable of 2 Gbps wastes the spectrum the operator paid for.

## Key numbers
6–42 GHz on 7–112 MHz channels gives 100 Mbps–1 Gbps, or about 2.5 Gbps at best; E-band at 71–76 and 81–86 GHz gives 1–10 Gbps typical and up to 25 Gbps · rain at 25 mm/h costs roughly 4.6 dB/km at 28 GHz and about 10 dB/km at 80 GHz · 99.9% availability is 8.8 hours of outage a year, 99.99% is 53 minutes, 99.999% is about 5 minutes · link lengths 30–80 km at 6–11 GHz, 5–15 km at 18–23 GHz, 3–5 km at E-band for 99.99% in a temperate climate and 1.5–3 km for 99.999% · adaptive modulation holds the link through a fade at roughly a sixth of the throughput · latency under 100 microseconds per hop · $10,000–50,000 per hop, installed in 1–6 weeks.

## Examples
Ericsson MINI-LINK, Nokia Wavence, Ceragon, Aviat, SIAE and Huawei, which supply nearly all of the market; FCC Part 101 fixed microwave licensing, which requires prior frequency coordination on each path, against the light-touch registration used for 70/80 GHz; ITU-R P.530, the recommendation every link budget in the industry is computed from; and the Chicago-to-New Jersey trading routes, where microwave chains carry a round trip in roughly 8 milliseconds against about 13 milliseconds on the fastest fiber.

## Economic profile
Microwave is what an operator buys when the money is fine but the schedule is not. Almost all of the cost is up front and one-time: radios and antennas are usually about half the invoice, with the structural survey, the path survey, the frequency coordination fee and the crew making up the rest, and the only meaningful recurring items are the license and the rooftop or tower rent. That shape is why it still carries a large share of the world's cell sites, roughly 40–50% globally and well over half in much of Asia and Africa, while sitting under 10% in the United States, Japan and Korea where fiber is already dense. The comparison that decides most cases is against a leased circuit rather than against building fiber: a $30,000 E-band hop against a leased Ethernet circuit at $500–1,500 a month pays for itself in roughly two to five years, which is the arithmetic behind most tower-company backhaul decisions and is derived here rather than published. E-band prices fell when the radios moved from gallium arsenide onto silicon processes, and that is the main reason multi-gigabit hops stopped being a specialty product. The margin sits with a handful of vendors who can build a 1-degree-beamwidth antenna and a 4096-QAM modem cheaply, and increasingly with the tower companies who own the rooftops both ends have to sit on.

## Videos

- https://www.youtube.com/watch?v=MpQsSAv5x10 — Backhaul 101- Wireless Backhaul Explained (Ceragon Networks, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=v-Jog34Ovco — Backhaul Basics (Streakwave, 4 minutes, 100k+ views)

## Further reading

[Recommendation ITU-R P.530: Propagation data and prediction methods required for the design of terrestrial line-of-sight systems (International Telecommunication Union)](https://www.itu.int/rec/R-REC-P.530/en) · [ETSI EN 302 217-2: Fixed Radio Systems; Characteristics and requirements for point-to-point equipment and antennas (ETSI)](https://www.etsi.org/deliver/etsi_en/302200_302299/30221702/03.04.01_60/en_30221702v030401p.pdf)
