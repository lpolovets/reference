---
number: 6
name: 5G Radio Access Networks
part: 2
group: Cellular networks
reach: [metro]
capacity: [mbps, gbps]
medium: rf
latency: sub
maturity: dep
---

## Description
A 5G radio access network is the set of base stations, called gNBs, that connect handsets to a core network over the 3GPP New Radio air interface first specified in Release 15 in 2018. NR works in two frequency ranges, FR1 from 410 MHz to 7.125 GHz and FR2 from 24.25 to 52.6 GHz, with a maximum carrier bandwidth of 100 MHz in FR1 and 400 MHz in FR2, and carriers are aggregated to go beyond that. Its main departure from LTE is scalable numerology: subcarrier spacing is 15 kHz multiplied by a power of two, so 15, 30, 60 or 120 kHz, and because a slot is always 14 symbols, the slot shrinks from 1 ms at 15 kHz spacing to 0.125 ms at 120 kHz. Wider spacing therefore buys shorter transmission opportunities, which is where most of the latency improvement comes from, and it is also what makes millimeter wave workable, since a wide subcarrier tolerates more phase noise. The coding changed too, from turbo codes to LDPC for data and polar codes for control. The base station itself is usually split into a radio unit at the antenna, a distributed unit nearby that runs the time-critical scheduling, and a centralized unit that can sit tens of kilometers away, which is what lets an operator pool baseband across many sites.

## Strengths and weaknesses
The real gains over LTE come from three things at once: more spectrum in a single carrier, massive MIMO in mid-band TDD, and a scheduler that can address a user in a fraction of a slot. The catch is that the headline numbers belong to the standard, not to a deployed network. ITU's IMT-2020 requirements ask for 20 Gbps peak downlink, 100 Mbps user-experienced downlink, and 1 ms user-plane latency for ultra-reliable service, while commercial networks typically deliver 100 to 300 Mbps median download and 15 to 40 ms round-trip latency, because peak rate assumes one user with all the spectrum and the latency figure describes the air interface alone. It also helps to keep per-sector and per-user numbers apart: 100 MHz of mid-band with 64T64R radios produces 400 Mbps to 1 Gbps per sector, and that is shared across everyone in it. The second weakness is uplink. Mid-band is time-division duplex with a downlink-heavy frame pattern, so roughly a fifth to a quarter of the airtime is uplink, and uplink throughput lands well under a tenth of downlink at the cell edge. The third is energy: a mid-band 5G macro site with 64-antenna radios typically draws two to three times what an LTE-only site drew, and the radio access network is where most of an operator's network electricity goes.

## When to use
This is not really a choice for a mobile operator, since 5G is where the device ecosystem and the new spectrum are. The decision that matters is standalone versus non-standalone. If you are adding capacity to an existing LTE network and want coverage on day one, non-standalone is the cheaper path, because the 5G carrier rides as a secondary cell on an LTE anchor and reuses the LTE core, and most of the world's commercial 5G still works this way. If you need network slicing, guaranteed low latency, voice over NR, or a private network with its own core, you need standalone, and you need to budget for a 5G core, a new signaling architecture, and device support that is still uneven. If your problem is indoor coverage or rural reach, do not buy standalone to fix it; buy low-band spectrum or more sites, because the physics is unchanged. And if you are sizing an application around 1 ms latency, measure the deployed network first, since the number in the specification is the air interface and yours will include transport, core and the internet.

## Key numbers
FR1 410 MHz–7.125 GHz with a 100 MHz maximum carrier, FR2 24.25–52.6 GHz with 400 MHz · subcarrier spacing 15, 30, 60 or 120 kHz, so a 14-symbol slot runs 1 ms down to 0.125 ms · IMT-2020 asks for 20 Gbps peak downlink, 100 Mbps user-experienced downlink and 1 ms user-plane latency for ultra-reliable service · deployed networks typically deliver 100–300 Mbps median download and 15–40 ms round trip · 400 Mbps–1 Gbps per sector on 100 MHz of mid-band with 64T64R · roughly a fifth to a quarter of TDD airtime is uplink · a mid-band 5G macro site draws 2–3x an LTE-only site.

## Examples
3GPP Release 15 (the first NR specification, 2018), Release 16 (2020, adding ultra-reliable low-latency and sidelink), Release 17 (2022, extending FR2 to 71 GHz) and Release 18, marketed as 5G-Advanced; T-Mobile US on 2.5 GHz, which launched a standalone core in 2020 and is the usual reference for mid-band coverage; Verizon and AT&T on C-band cleared in FCC Auction 107; China Mobile and Reliance Jio, both of which built standalone from the start; Ericsson, Nokia, Samsung, Huawei and ZTE, which between them supply nearly all the radios.

## Economic profile
The radio access network is where most of a mobile operator's capital goes, typically 60 to 70% of network capital spending, and access networks as a whole absorb 15 to 20% of revenue indefinitely. Within a site the radios are the smaller part: roughly a quarter of what a new macro site costs to build, with land, steel, power, permits, backhaul and the installation crew taking the rest. Upgrading an existing site is much cheaper than building one, which is why nearly every 5G rollout started as a swap of radios on towers that already existed. What makes the arithmetic hard is that the revenue did not move. Average revenue per user is roughly flat in most markets that deployed 5G, so the capital was spent to hold share and to carry traffic that grows 20 to 30% a year at a falling price per gigabyte. Energy is the recurring line that got worse rather than better, since a mid-band massive MIMO site draws two to three times an LTE site, which is why vendors now sell sleep modes and carrier shutdown as features. Vendor margin is concentrated: after the restrictions on Huawei, the practical choices outside China are Ericsson, Nokia and Samsung, and the FCC's program to rip out and replace Chinese equipment was funded at $1.9 billion, priced by carriers near $5 billion, and topped up by Congress in 2023.

## Videos

- https://www.youtube.com/watch?v=jR-AGjZHI8s — 5G SA vs 5G NSA: Difference between standalone & non standalone 5G (Commsbrief Limited Official, 8 minutes, 10k+ views)
- https://www.youtube.com/watch?v=URkJS6YMEBo — Part 6: Standalone and Non-Standalone 5G - 5G for Absolute Beginners (3G4G, 3 minutes, 10k+ views)

## Further reading

[Minimum requirements related to technical performance for IMT-2020 radio interface(s) (International Telecommunication Union)](https://www.itu.int/pub/R-REP-M.2410) · [ETSI TS 138 300: 5G; NR; NR and NG-RAN Overall description (ETSI / 3GPP)](https://www.etsi.org/deliver/etsi_ts/138300_138399/138300/18.10.00_60/ts_138300v181000p.pdf)
