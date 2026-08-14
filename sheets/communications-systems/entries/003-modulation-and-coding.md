---
number: 3
name: Modulation and Coding
part: 1
group: Spectrum & physical layer
reach: [short, global]
capacity: [kbps, tbps]
maturity: dep
---

## Description
Shannon's 1948 result gives the ceiling: capacity equals bandwidth times log2 of one plus the signal-to-noise ratio. At 20 dB signal-to-noise that is log2(101), about 6.7 bits per second per hertz, so a 100 MHz channel cannot carry more than roughly 670 Mbps no matter what the radio does. Modulation is how a transmitter approaches that ceiling, by mapping bits onto the amplitude and phase of a carrier: QPSK carries 2 bits per symbol, 16QAM carries 4, 64QAM 6, 256QAM 8, and Wi-Fi 7's 4096QAM carries 12. Each step to a constellation four times denser halves the distance between neighboring points, so it needs roughly 6 dB more signal-to-noise for the same error rate. Coding is the other half, adding redundancy so the receiver can correct the errors that remain, and a long-block LDPC code typically lands within about a decibel of the Shannon bound. In 5G NR the two are chosen together as a modulation and coding scheme, and the standard tables run from 0.2344 bits per second per hertz at the bottom to 5.5547 with 64QAM and 7.4063 with 256QAM.

## Strengths and weaknesses
Adaptive modulation and coding is what lets one radio serve a user 100 m away at 8 bits per symbol and a user at the cell edge at a fraction of a bit, reusing the same hardware. The weakness is that high-order modulation needs a signal-to-noise ratio that only exists near the transmitter, so 256QAM and above are useful across a small part of a cell and contribute little to average throughput. High-order QAM also demands linearity: the amplifier has to reproduce amplitude faithfully, which means backing it off from saturation and losing efficiency, and it demands phase noise low enough that the constellation points do not smear, which gets harder as carrier frequency rises. On the coding side, redundancy costs both spectrum and latency, since a long code block cannot be decoded until it arrives, and that delay is exactly what a low-latency service cannot spend. Retransmission schemes partly hide this by sending extra parity only when the first attempt fails, at the cost of a round trip.

## When to use
Do not pick one modulation and coding scheme. Measure the channel, feed the quality report back, and let the scheduler choose per user per slot, because the useful range of operating points spans about 30 dB. If your link is power-limited rather than bandwidth-limited, such as a deep-space or satellite Internet-of-things link, use low-order modulation with a very strong code and accept fractions of a bit per symbol. If it is bandwidth-limited, such as a fixed microwave hop or an indoor Wi-Fi link, spend the signal-to-noise on constellation order instead. For the code itself, use LDPC for data at high rates, because its decoder parallelizes and holds throughput at gigabit rates where turbo decoding does not, and use polar codes for short control messages of tens of bits, where LDPC and turbo both perform badly. 5G NR does exactly this: the standard assigns LDPC to the uplink and downlink shared channels and polar codes to the broadcast channel and to downlink control information, which is why turbo codes, the workhorse of 3G and LTE, do not appear in NR at all.

## Key numbers
Shannon capacity = bandwidth × log2(1 + signal-to-noise), so 6.7 bits/s/Hz at 20 dB and about 670 Mbps in a 100 MHz channel (derived here) · QPSK 2 bits per symbol, 16QAM 4, 64QAM 6, 256QAM 8, 4096QAM 12 · roughly 6 dB more signal-to-noise per fourfold step in constellation density · 5G NR modulation and coding tables span 0.2344 to 5.5547 bits/s/Hz with 64QAM and reach 7.4063 with 256QAM · LDPC for the shared data channels, polar codes for broadcast and downlink control · long-block LDPC codes typically land within about 1 dB of the Shannon limit.

## Examples
5G NR as specified in 3GPP TS 38.212, which assigns LDPC to UL-SCH and DL-SCH and polar codes to the broadcast channel and control information; DVB-S2 and DVB-S2X, which brought LDPC to satellite television and carrier-grade satellite links; Wi-Fi 6 and Wi-Fi 7, which added 1024QAM and 4096QAM; the CCSDS turbo and LDPC codes NASA uses for deep space, where the link is power-limited and coding gain substitutes for antenna size.

## Economic profile
Coding gain is the cheapest decibel in the whole system, which is why every standards generation spends silicon on it. A decoder is a fixed block of chip area amortized across every unit shipped, while the alternative ways to find 3 dB are doubling transmit power, which costs energy on every site forever, or building 41% more reach into the antenna, which costs steel. That trade is why deep-space missions spend enormous decoding effort to avoid a larger dish, and why a cellular modem devotes a large share of its area to LDPC. The other economic fact is patents. Channel coding is where the essential-patent fights land, since a code is written into the specification and cannot be designed around, so modem vendors pay royalties on a per-device basis into pools that are a meaningful fraction of the chip's price. For a system designer, the practical consequence is that this layer is something you buy rather than build: the standard fixes the codes, the merchant modem implements them, and the differentiation left is in channel estimation and scheduling, which decide which modulation and coding scheme gets picked and therefore what fraction of the theoretical capacity a network actually delivers.

## Videos

- https://www.youtube.com/watch?v=HSoog0OqgV0 — The Shannon Limit - Bell Labs - Future Impossible (Nokia Bell Labs, 6 minutes, 50k+ views)
- https://www.youtube.com/watch?v=9_478TsTNPw — What is QAM modulation? (Wireless Explained, 7 minutes, 100k+ views)

## Further reading

[A Mathematical Theory of Communication (Bell System Technical Journal)](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf) · [ETSI TS 138 212: NR; Multiplexing and channel coding (ETSI / 3GPP)](https://www.etsi.org/deliver/etsi_ts/138200_138299/138212/16.02.00_60/ts_138212v160200p.pdf)
