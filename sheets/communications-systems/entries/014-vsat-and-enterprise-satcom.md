---
number: 14
name: VSAT and Enterprise Satcom
part: 3
group: Satellite links
reach: [long, global]
capacity: [mbps]
medium: rf
latency: high
maturity: dep
---

## Description
A VSAT network is a hub at a teleport plus a large number of small remote terminals, all sharing one satellite's capacity in a star topology where every remote talks to the hub and never to another remote. The terminal is where the name comes from: a very small aperture antenna, typically 0.75 to 2.4 m, with a 0.75 to 1.2 m dish enough at Ka band and 2.4 m or more needed at C band. The outbound direction is one wide carrier, usually DVB-S2X, broadcast to every remote in the beam and time-shared among them, with adaptive coding and modulation switching format frame by frame so a site under rain drops to a more robust mode instead of dropping out. DVB-S2X carries constellations up to 256APSK and roll-off factors down to 0.05, which is what lets an operator sell most of a transponder's theoretical capacity rather than half of it. The return direction is the harder half and runs MF-TDMA under DVB-RCS2: each remote bursts in time and frequency slots the hub assigns it, so return capacity is scheduled rather than owned, and a remote that has nothing to send gives its slots back. Everything about the design follows from the delay, since a geostationary round trip cannot beat 477 ms and services measure 550 to 650 ms.

## Strengths and weaknesses
The strength is that coverage inside a beam is uniform and immediate. A site anywhere in the footprint gets the same service in days with no trenching, no right of way, and no cost penalty for being remote, which is the reverse of every terrestrial option and is the entire reason the category exists. The weaknesses are delay and sharing. TCP will not fill a long path on its own: with the classic 64 KB receive window and a 600 ms round trip, one connection carries 65,536 bytes every 0.6 seconds, which works out to about 0.87 Mbps no matter how much satellite capacity is available. Every VSAT network therefore runs performance-enhancing proxies that terminate TCP locally and acknowledge on the satellite's behalf, and that trick stops working when traffic is encrypted end to end, because TLS 1.3 and QUIC hide the transport the proxy needs to see. The other weakness is oversubscription: capacity is sold contended, often somewhere between 10:1 and 50:1, so the committed information rate is the only number in the contract that describes what the site will actually get in the busy hour.

## When to use
Use VSAT when you have many fixed sites spread over a continent, you need them all on the same network with the same configuration, and terrestrial service is either unavailable or unreliable at enough of them to make one contract simpler than fifty. If the traffic is transactional and small, meaning point of sale, ATM authorizations, telemetry, SCADA polls, and store replication overnight, half a second of delay costs nothing and the economics work. If the traffic is interactive, meaning voice, video calls, remote desktop, or a cloud application that makes many small round trips, do not put it on a geostationary link, because 600 ms is a delay users notice on every keystroke; buy low-orbit service instead and accept a less mature enterprise feature set. Buy committed information rate for the traffic that matters and best effort for the rest, since paying for a committed rate across the whole site is the most common way these contracts get expensive. And if any site has a terrestrial option at all, use it and keep the VSAT terminal as the backup path, which at $1,000 to $5,000 of hardware per site is cheap insurance and is where most enterprise satcom spending now sits.

## Key numbers
Antennas of roughly 0.75–2.4 m, 0.75–1.2 m at Ka band and 2.4 m or more at C band · 477 ms round-trip floor through geostationary orbit and 550–650 ms in service · DVB-S2X up to 256APSK with roll-off down to 0.05 · about 0.87 Mbps per TCP connection at a 64 KB window and 600 ms round trip, derived here from those two figures · contention typically 10:1 to 50:1 · terminals of $1,000–5,000 and capacity at $100–500 per Mbps per month.

## Examples
Hughes JUPITER, ST Engineering iDirect, Gilat SkyEdge and Comtech are the hub and terminal platforms most enterprise networks run on, and Viasat and SES are the largest capacity sellers into them. The standards are ETSI EN 302 307-2 for the DVB-S2X outbound and ETSI EN 301 545-2 for the DVB-RCS2 return. Typical deployments are retail chains and bank branch networks, ATM and lottery terminals, oil and gas and pipeline SCADA, mining sites, and maritime service on Inmarsat Global Xpress and Fleet Xpress, now inside Viasat.

## Economic profile
The fixed cost is split unusually: the customer pays for terminals and installation, and the service provider pays for the hub. A shared hub at a teleport is a seven-figure asset that only makes sense across hundreds or thousands of remotes, which is why almost nobody builds one and most enterprises buy a managed service from an integrator that already has one. The recurring cost is space segment, and its pricing model changed with high-throughput satellites: capacity used to be leased by the megahertz, a whole 36 MHz transponder at a time for a year or more, and is now sold by the megabit as managed capacity. At $100–500 per Mbps per month, a site with 5 Mbps committed runs $500–2,500 a month, which is arithmetic rather than a quoted price and is the number to compare against whatever a terrestrial circuit would cost at the same address. For the satellite operator the marginal cost of another bit is close to zero once the satellite is in orbit, so the price is set by how much paying demand sits under that particular beam, and capacity over empty ocean serves no customers at any price. That is why the spacecraft-side question of how many spot beams point where, covered on the space launch and satellites sheet, decides what this service can be sold for. The margin in the middle goes to the integrator that owns the hub, the field service, and the customer relationship, and low-orbit competition has been compressing it since 2022.

## Videos

- https://www.youtube.com/watch?v=NysmPcwukDY — What is VSAT? (Global Invacom Group, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=AGMT0OPcnwM — VSAT Basics (YedaCenter, 21 minutes, 50k+ views)

## Further reading

[RFC 3135 - Performance Enhancing Proxies Intended to Mitigate Link-Related Degradations (IETF)](https://datatracker.ietf.org/doc/html/rfc3135) · [Second Generation DVB Interactive Satellite System (DVB-RCS2); Part 2: Lower Layers for Satellite standard (ETSI)](https://www.etsi.org/deliver/etsi_en/301500_301599/30154502/01.03.01_60/en_30154502v010301p.pdf)
