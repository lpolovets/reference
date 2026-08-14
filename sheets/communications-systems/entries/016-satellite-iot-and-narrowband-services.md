---
number: 16
name: Satellite IoT and Narrowband Services
part: 3
group: Satellite links
reach: [global]
capacity: [kbps]
medium: rf
latency: high
maturity: scale
---

## Description
Satellite IoT moves messages, not streams. A tracker on a shipping container, a well-head pressure sensor, a buoy, or a livestock collar sends tens to a few hundred bytes every few minutes to a few times a day, and the whole system is designed around that shape rather than around throughput. Two architectures deliver it. A crosslinked or geostationary system is always overhead, so the message goes out immediately: Iridium's 66 satellites in six planes of eleven at 783 km cover the poles as well as the equator, and its Short Burst Data service measures better than 0.44 kbit/s mobile-originated and 0.35 kbit/s mobile-terminated in practice, which is a modem speed from 1985 and entirely sufficient for a 200-byte position report. A store-and-forward system skips the crosslinks: a satellite passes over the device, collects the message, and drops it at a ground station on a later orbit, so hardware is much cheaper and delivery takes minutes to hours, because a low-orbit satellite is above a given point for roughly 8 to 12 minutes on 4 to 6 passes a day. Spectrum is mostly L-band around 1.6 GHz and S-band, with some systems in VHF, and 3GPP's narrowband non-terrestrial standards now let ordinary cellular chipsets do the same job, which is covered in the direct-to-cell entry.

## Strengths and weaknesses
The strength is coverage with no infrastructure at all: roughly 10% of the Earth's surface has terrestrial connectivity, and a satellite IoT device works on the other 90% with no site, no tower, and no roaming agreement. Power and cost follow from the small message: a modem transmitting a few seconds a day at 7 W peak runs for years on a battery, and modules have come down to consumer-electronics prices. The weakness is that airtime is priced like nothing else in communications. A representative Iridium Short Burst Data plan ran $19.50 a month with 17 kbytes included and $1.40 per kbyte beyond it, which is about $1,400 per megabyte, so the discipline of the whole design is sending fewer bytes rather than compressing them. The second weakness is that delivery is not guaranteed on any schedule: a store-and-forward system will deliver eventually, and eventually is not a specification an alarm can use. The third is commercial. This is a market of very low revenue per device, so it only works at very large device counts, and a service with 50,000 units on it will not cover its own ground segment.

## When to use
Use satellite IoT when the asset moves outside cellular coverage and the data is small, periodic, and tolerant of delay: containers, rail cars, vessels, remote tanks and pipelines, environmental sensors, and anything on open water. If the asset spends most of its life in coverage and only occasionally leaves it, buy a hybrid module that prefers cellular and falls back to satellite, because you will pay satellite rates only for the gaps. If a message must arrive within seconds, use a crosslinked or geostationary system and pay for it; if hours are acceptable, store-and-forward cuts both hardware and airtime cost substantially. Size the byte budget before choosing anything, since at roughly $1,400 per megabyte the difference between a 20-byte report and a 200-byte one decides the business case. And if you need a live video feed, remote desktop, or anything measured in megabits from a remote site, this is the wrong category entirely and you want VSAT or low-orbit broadband.

## Key numbers
Messages of tens to a few hundred bytes, with 200-byte position reports typical · Iridium at 66 satellites in six planes of eleven at 783 km · Short Burst Data measured above 0.44 kbit/s mobile-originated and 0.35 kbit/s mobile-terminated · a plan at $19.50 a month with 17 kbytes included and $1.40 per kbyte beyond, about $1,400 per megabyte (converted here) · 7 W peak transmit power · 8–12 minutes of visibility on 4–6 passes a day for a store-and-forward satellite · roughly 10% of the Earth's surface covered by terrestrial networks.

## Examples
Iridium Short Burst Data is the reference real-time service, with modules sold to makers as well as to industry, and Orbcomm, Inmarsat and Globalstar are the other incumbents. Berg Insight counted 44 satellite IoT operators and a subscriber base above 3.9 million at the end of 2021, with Iridium at 1.3 million, Orbcomm at 1.1 million across its own and Inmarsat's networks, and Globalstar at 0.42 million, forecasting 21.2 million by 2026. The newer entrants split by architecture: Myriota, Astrocast, Kinéis, Fleet Space and Lacuna Space are store-and-forward, while Skylo and Sateliot sell standards-based narrowband service that ordinary cellular modules can use.

## Economic profile
The fixed cost sits with the operator and the marginal cost sits with the customer, which is the reverse of most of this sheet. A narrowband constellation is cheap by satellite standards because the payload is small and the satellites can be, but the ground segment, the regulatory work, and the device ecosystem still cost the same as a big system, so the operator carries a large fixed base and needs millions of devices to cover it. On the customer side almost nothing is fixed: a module is tens to a few hundred dollars and the airtime is a monthly fee in the low tens of dollars, so the buying decision is per-device and easy to reverse, and switching costs are low. That combination keeps average revenue per device falling while device counts grow, which is exactly the pattern Berg Insight's 40.3% annual growth forecast describes. Two things change the picture from here. Standards-based narrowband service means the module is an ordinary cellular part rather than a proprietary one, which will push module prices toward mass-market silicon and take the hardware margin out. And the incumbents are exposed to that: Iridium reported $165.2M of service revenue in the third quarter of 2025 and withdrew its $1B 2030 revenue target, citing competition it expects to arrive late this decade. If you are evaluating one of these companies, the numbers that matter are devices in service, revenue per device per month, and what fraction of the fleet could be served by a standard cellular chipset instead.

## Videos

- https://www.youtube.com/watch?v=NOJ_VtSikAA — SparkFun Rock Block Satellite Communication Module (SparkFun Electronics, 5 minutes, 50k+ views)
- https://www.youtube.com/watch?v=saBkM5mh7Lw — Iridium Satellite Communication for Arduino (nootropic design, 2 minutes, 10k+ views)

## Further reading

[Lessons Learned Using Iridium to Communicate with a CubeSat in Low Earth Orbit (Lawrence Livermore National Laboratory)](https://www.osti.gov/biblio/1770026) · [Space-Terrestrial Integrated Internet of Things: Challenges and Opportunities (arXiv)](https://arxiv.org/abs/2110.11518)
