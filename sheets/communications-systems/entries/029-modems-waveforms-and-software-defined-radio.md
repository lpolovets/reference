---
number: 29
name: Modems, Waveforms and Software-Defined Radio
part: 6
group: Equipment & timing
reach: [short, global]
capacity: [kbps, gbps]
medium: rf
maturity: dep
---

## Description
A modem turns bits into a signal and back, and a waveform is the whole recipe it follows: carrier frequency, modulation, coding, framing, access method, and any hopping or spreading on top. In a software-defined radio the antenna and the analog front end still exist, but the signal is digitized early and everything after that point is arithmetic on samples rather than a circuit. Sampling has to run at least twice the bandwidth, so a 100 MHz channel needs roughly 200 million complex samples per second, and at 12 to 14 bits per sample that is 3 to 6 Gbps of raw data arriving before any demodulation happens. Older designs mixed the signal down to an intermediate frequency first and sampled at tens of megasamples per second; current parts sample the radio frequency directly at 2 to 6 gigasamples per second, which removes a whole analog mixing stage. Once the samples are in, filtering, demodulation, error correction and framing are all code, running on an FPGA for the sample-rate work and a CPU or DSP for everything slower. That is what makes a waveform a software artifact you can load, which is the idea NASA's STRS architecture and the military's Software Communications Architecture both formalized.

## Strengths and weaknesses
The strength is that one box handles many waveforms and takes new ones by software load, so a base station gets a standards release without a truck roll and a military radio takes a new hopping pattern without new hardware. Prototyping got cheap in the same move: a $30 RTL-SDR dongle covering 24 MHz to 1.7 GHz at 2.4 megasamples per second is a real receiver, and a $1,000 to $10,000 USRP-class board gives 56 to 200 MHz of instantaneous bandwidth with transmit. The weakness is energy. A demodulator running as general-purpose code costs one to two orders of magnitude more energy per bit than the same function as fixed silicon, which is why a phone's physical layer is hard-wired and only the protocol stack above it is software. Four things also stayed analog: the antenna, the low-noise amplifier, the filters, and the power amplifier. Filters need physical resonators, so a phone still carries dozens of discrete acoustic filters and duplexers, one per band combination, and a power amplifier runs at 30 to 50% efficiency and gets worse the more linearity a dense constellation demands. A wideband front end with no preselector also desensitizes easily, because a strong nearby transmitter consumes the converter's dynamic range and nothing in software gets it back.

## When to use
If the waveform is fixed by a standard and you are shipping over a million units, buy a hard-wired modem chip and put the software effort into the stack above it. If you need several waveforms in one box, or the standard is still moving, or the same platform ships to customers in different bands, use a software-defined radio and accept the power penalty. If you are prototyping, monitoring spectrum, or teaching, start with a $30 dongle and move to a USRP-class board only when you need transmit or more than a few megahertz. If the device runs on a battery for years, such as a narrowband Internet-of-things sensor, use a fixed-function part, because the flexibility buys nothing and the current draw is the whole design. Whatever you pick, budget separately for the RF front end per band: a radio that is wideband on paper still needs its own filter, its own amplifier and its own matching for each band it actually operates in, and that hardware is usually where the schedule and the bill of materials go.

## Key numbers
Sampling at 2× bandwidth, so about 200 Msps complex for a 100 MHz channel, and 3–6 Gbps of raw samples at 12–14 bits (derived here) · direct RF sampling converters at 2–6 Gsps · RTL-SDR dongle about $30, 24 MHz–1.7 GHz, 2.4 Msps, 8-bit · USRP-class board $1,000–10,000 with 56–200 MHz instantaneous bandwidth · software demodulation costs 1–2 orders of magnitude more energy per bit than fixed silicon · power amplifiers run at 30–50% efficiency and lose more as constellation density rises · RF front-end content in a 5G phone is typically $20–35, above the modem die itself.

## Examples
GNU Radio and the Ettus USRP family, which together became the default research and prototyping platform; the RTL-SDR, a repurposed DVB-T television tuner chip that turned into a $30 general-purpose receiver; AMD Zynq RFSoC parts with eight direct-sampling converters on the same die as the FPGA fabric and Arm cores; NASA's Space Telecommunications Radio System and the SCaN Testbed flown on the International Space Station; the US military's Joint Tactical Radio System and its Software Communications Architecture; and every O-RAN radio unit, which is an SDR with a standardized interface to the baseband.

## Economic profile
The cost curve that made software-defined radio the default was in the data converters. A 14-bit gigasample converter was a five-figure defense part in the 2000s, and the same capability now ships eight channels at a time inside a $2,000 to $10,000 RFSoC, with a $30 dongle at the bottom of the market because the television industry paid for that silicon first. For a systems company the effect is to move money from per-waveform hardware development to a platform plus software: one board, then engineering effort per waveform, which is why defense radio programs stopped buying a new box for every network. The margin sits with the merchant silicon vendors rather than the box builders, since almost everyone integrates the same handful of transceiver and RFSoC parts and differentiates on algorithms, calibration and integration. The part software never absorbed is where the remaining hardware profit went: filters, switches and power amplifiers are a separate supply chain dominated by Qorvo, Skyworks, Broadcom and Murata, and the RF front-end content in a 5G phone, typically $20 to $35, now runs above the modem die itself. If you are evaluating an SDR product claim, the useful question is what fraction of the bill of materials is still per-band analog hardware, because that fraction sets how much of the flexibility is real.

## Videos

- https://www.youtube.com/watch?v=h_7d-m1ehoY — #170: Basics of IQ Signals and IQ modulation & demodulation - A tutorial (w2aew, 19 minutes, 500k+ views)
- https://www.youtube.com/watch?v=nB6XQSEFwVA — The Beginner's Guide To Software Defined Radio RTL-SDR (Tech Minds, 15 minutes, 500k+ views)

## Further reading

[IQ Sampling (PySDR: A Guide to SDR and DSP using Python)](https://pysdr.org/content/sampling.html) · [Space Telecommunications Radio System (STRS) Architecture Standard, Release 1.02.1 (NASA/TM-2010-216809/REV1)](https://ntrs.nasa.gov/api/citations/20110002806/downloads/20110002806.pdf)
