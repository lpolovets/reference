---
number: 27
name: Underwater Acoustic Communication
part: 5
group: Free-space & specialized
reach: [short, metro]
capacity: [kbps]
medium: sound
latency: high
maturity: dep
---

## Description
Seawater is conductive, so radio dies in it: attenuation at 1 MHz is tens of decibels per meter, and only extremely low frequencies get through at all. The US Navy's 76 Hz system, retired in 2004, reached a submerged submarine and carried a handful of characters in fifteen minutes. Blue-green light does much better but only over 10–100 m in clear water and less in anything turbid. That leaves sound, and an acoustic modem is a transducer, a power amplifier and a signal processor that modulates a carrier somewhere between about 10 and 40 kHz. Three numbers describe the channel, and none of them are close to what a radio engineer expects: sound travels at roughly 1,500 m/s, so one kilometer costs 0.67 seconds each way. Absorption climbs steeply with frequency, from about 1 dB/km at 10 kHz to around 30 dB/km at 100 kHz, so the usable band is kilohertz wide rather than megahertz and shrinks further as range grows. And surface and bottom reflections give delay spreads of 10–100 ms, which at these symbol rates is hundreds of symbols of intersymbol interference that the receiver has to equalize away.

## Strengths and weaknesses
The strength is that nothing else works: acoustics reach kilometers on battery power, they work in water too turbid to see through, and the same hardware gives range measurements for free, which is why acoustic communication and acoustic positioning are usually the same box. Everything else on the list is a cost. Latency is set by the speed of sound and cannot be engineered down, so a 3 km link has a four-second round trip and any protocol that acknowledges each packet spends most of its time waiting, while bandwidth is set by absorption, so more transmit power buys range and not rate. Doppler is roughly a thousand times worse than in radio, because a 2 m/s platform against 1,500 m/s is a fractional shift of 1.3 parts per thousand, and the receiver has to track and resample continuously rather than correct once. Ambient noise comes from shipping below 100 Hz, from wind and breaking waves across most of the band, and in warm shallow water from snapping shrimp. Shallow water is much harder than deep water on every one of these counts, and performance shifts with the sound speed profile through the day, so a link that closed in the morning may not close in the afternoon.

## When to use
Use acoustics whenever a node is submerged, has no cable, and needs to move data more than a few tens of meters: AUV command and telemetry, subsea production monitoring, ocean observatory offload, diver communication, and firing a release on a bottom package. Size the link by the range-rate product rather than by the headline data rate, because commercial modems land at roughly 40–50 km·kbps and the vendor quotes the rate at its shortest range; wanting 5 kbps at 10 km is asking for 50, which is at the edge of what exists. If the requirement is megabits, stop looking at acoustics and either put the node on a tether or a seafloor cable, or bring a vehicle within 10–100 m and use a blue-green optical link. If the requirement is a few hundred bytes a day, an acoustic release plus a satellite-linked surface buoy is usually cheaper than any network. Design the protocol around the delay: batch and pipeline rather than stop-and-wait, and expect retransmission to be expensive in both time and battery. If equipment from different vendors has to interoperate, JANUS (STANAG 4748) is the only standard, and at 11.5 kHz and about 80 bps it is a hailing channel to negotiate with rather than a data link to use.

## Key numbers
Sound at roughly 1,500 m/s, so 0.67 s per kilometer one way and a 4 s round trip at 3 km · carriers of about 10–40 kHz with kilohertz of usable bandwidth · absorption roughly 1 dB/km at 10 kHz and 30 dB/km at 100 kHz · commercial rates from 80 bps to a few tens of kbps · range-rate product roughly 40–50 km·kbps, so 5 kbps at 10 km is at the edge · multipath delay spread 10–100 ms · modems $5k–30k

## Examples
The WHOI Micromodem, widely used in research vehicles, runs 80–5,400 bps in about 4–5 kHz of band and is the reference point most published work compares against; EvoLogics S2C, Teledyne Benthos ATM sets, Sonardyne Modem 6, Kongsberg cNODE and Subnero cover the commercial market. NATO's JANUS became STANAG 4748 in 2017 and is the first standardized digital underwater protocol. NOAA's DART tsunami buoys are the clearest illustration of the trade: a bottom pressure recorder sends short acoustic messages up to a surface buoy, which relays them by satellite, because the acoustic hop is the only part that has to work underwater and it is kept as small as possible.

## Economic profile
A modem is $5k–30k, more with a deep-rated housing and a matched transducer, and that number is small enough to be irrelevant next to the vessel that installs it. A survey vessel costs $30k–150k a day and an ROV support vessel more, so the economic case for an acoustic link is almost always the ship trip it avoids: a bottom node that offloads to a passing AUV or a surface buoy replaces a recovery cruise, and one avoided cruise pays for a great many modems. At the other end of the range, a cabled observatory gives unlimited bandwidth and continuous power but needs a cable ship to install: Ocean Networks Canada's NEPTUNE loop is roughly 800 km of cable and cost in the C$100M range. There is very little in between those two, so the practical choice is tens of thousands of dollars per node with kilobits, or tens of millions once with fiber. Offshore energy is the largest paying customer and defense the second, and both buy on demonstrated reliability rather than on data rate, which keeps prices high and the supplier list short. Anyone forecasting a step change in this market should be asked which of absorption, sound speed or ambient noise they expect to change.

## Videos

- https://www.youtube.com/watch?v=Zn8YWIPPM1s — "What Is An Acoustic Modem?" Popoto Modem explains. (Popoto Modem, 1 minute, 100k+ views)
- https://www.youtube.com/watch?v=eFxo1XRK0p0 — Ocean Acoustics | Ocean Literacy | FuseSchool (FuseSchool - Global Education, 4 minutes, 10k+ views)

## Further reading

[Micromodem Overview (WHOI Acoustic Communications Group)](https://acomms.whoi.edu/micro-modem/) · [A Survey on Underwater Acoustic Sensor Networks: Perspectives on Protocol Design for Signaling, MAC and Routing (arXiv)](https://arxiv.org/abs/1703.08353)
