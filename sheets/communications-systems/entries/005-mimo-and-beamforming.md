---
number: 5
name: MIMO and Beamforming
part: 1
group: Spectrum & physical layer
reach: [short, metro]
capacity: [mbps, gbps]
medium: rf
latency: sub
maturity: dep
---

## Description
MIMO uses several antennas at each end of a link to do one of two different things with the same hardware. Spatial multiplexing sends independent data streams on the same frequency at the same time, and the number of streams is limited by the smaller of the transmit and receive antenna counts and by how much the environment scatters, so capacity multiplies rather than adding. Beamforming puts one stream through all the antennas with the phases aligned toward a user, which buys array gain of 10 log10 of the antenna count, 18 dB at 64 antennas, plus the ability to steer nulls at interferers. Massive MIMO does both at once with 32 to 64 antennas at the base station, and its real trick is multi-user operation: instead of trying to give one handset sixteen streams, the base station serves eight or more separate users on the same time and frequency resource by giving each one a beam the others cannot hear. 5G NR defines the channel state information codebooks for up to 32 antenna ports and up to eight layers per user. All of it depends on knowing the channel, because the precoding weights are computed from a channel estimate and are wrong the moment that estimate goes stale.

## Strengths and weaknesses
The strength is that spectral efficiency goes up without buying spectrum or raising transmit power, and the beamforming half also improves cell-edge coverage, which is often the benefit an operator notices first. The weakness starts with channel rank: multiplexing needs rich scattering, so a clean line-of-sight rural link supports one stream no matter how many antennas are bolted to the tower. The marketing number is the port count, and a 64-port radio delivers nothing like 64 times the capacity, because the real limit is how many users the scheduler can find with separable channels in the same slot; sector throughput in loaded urban cells is usually reported at two to four times a four-antenna baseline. Channel state information is the second constraint, and it is why massive MIMO is a mid-band TDD technology: in time-division duplex the base station measures the uplink and reuses it for the downlink by reciprocity, while in frequency-division duplex the handset has to feed back a codebook index whose size grows with antenna count until it eats the gain. The estimate also ages, since at 3.5 GHz and 100 km/h the Doppler shift is about 324 Hz and the channel stays coherent for roughly 1.3 ms, which is a slot or two. Handsets carry two or four receive antennas, so per-user downlink is capped at four layers however many the base station has.

## When to use
Use massive MIMO where the traffic is dense and the environment scatters, which means urban and suburban mid-band TDD, and where the alternative is buying spectrum or building sites. Do not buy it for a rural macro cell with few users and a clear view, where the channel has rank one and a smaller radio with the same beamforming gain does the same job for less money and less weight. If you are in FDD low band, size the benefit on beamforming alone and treat multiplexing as a bonus, because the feedback overhead scales badly. If your users move fast, shorten the sounding period or fall back to wider beams, since a precoder computed from a 1.3 ms-old channel estimate points at where the user was. Before committing, check the tower: a 64-antenna mid-band radio unit is several times heavier than a 4-antenna one, and wind loading has forced more structural upgrades and lease renegotiations than most capacity plans budget for.

## Key numbers
Spatial multiplexing gain = the smaller of transmit antennas, receive antennas and channel rank · beamforming array gain = 10 log10(antenna count), 18 dB at 64 antennas · 5G NR defines codebooks for up to 32 antenna ports and up to 8 layers per user · handsets carry 2 or 4 receive antennas, capping per-user downlink at 4 layers · at 3.5 GHz and 100 km/h, Doppler is about 324 Hz and channel coherence time about 1.3 ms (derived here) · sector throughput in loaded urban cells is usually reported at 2 to 4 times a 4-antenna baseline, not the 16 the port count suggests · 100 MHz of mid-band bought at $0.68 per MHz-POP costs $68 per person covered.

## Examples
64T64R active antenna units on 3.5 GHz TDD from Ericsson, Nokia, Samsung and Huawei, which are the volume massive MIMO deployment worldwide; multi-user MIMO in Wi-Fi 5 onward, which brought the same idea to access points with four to eight antennas; 4x4 MIMO in LTE-Advanced, the first widely deployed spatial multiplexing; the LuMaMi testbed at Lund University and Rice University's Argos, the research systems that produced most of the early measured results.

## Economic profile
Massive MIMO is bought as an alternative to spectrum and sites, and the comparison is worth doing in dollars. At the $0.68 per MHz-POP that 100 MHz of 3.45 GHz cleared for, spectrum costs about $68 per person covered, so doubling the capacity of one sector serving 2,000 people by buying another 100 MHz would cost roughly $136,000 of spectrum, while the radio unit that does at least as much costs tens of thousands. That gap is why every dense network upgraded the radio before buying more spectrum. What the arithmetic leaves out is the site. The heavier unit can trigger a structural analysis, a lease amendment, and a crew with a crane, and those costs land on the operator whether the capacity gets used or not. Power is the recurring item: a mid-band massive MIMO radio draws on the order of a kilowatt at full load, several times a conventional unit, and radio access equipment is a large share of a mobile operator's energy bill, which is why vendors now ship features that switch antenna elements and whole carriers off at night. The margin here sits with the handful of radio vendors who can build these units at scale, since the beamforming happens in vendor-specific silicon and firmware rather than in anything a third party supplies.

## Videos

- https://www.youtube.com/watch?v=MNA0xn7EeyY — What are Spatial Diversity and Spatial Multiplexing in MIMO? (Iain Explains Signals, Systems, and Digital Comms, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=pE_FsnHtTxc — What is Beamforming (Massive MIMO)? Find Out With Mpirical (Mpirical, 13 minutes, 50k+ views)

## Further reading

[Massive MIMO: Ten Myths and One Critical Question (arXiv / IEEE Communications Magazine)](https://arxiv.org/abs/1503.06854) · [ETSI TS 138 214: NR; Physical layer procedures for data (ETSI / 3GPP)](https://www.etsi.org/deliver/etsi_ts/138200_138299/138214/16.02.00_60/ts_138214v160200p.pdf)
