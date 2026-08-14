---
number: 28
name: Terahertz and 6G Research Links
part: 5
group: Free-space & specialized
reach: [short, metro]
capacity: [gbps, tbps]
medium: rf
latency: sub
maturity: res
---

## Description
In a communications context terahertz means roughly 100 GHz to 1 THz, and the part being standardized sits at the bottom of that: D-band at 110–170 GHz, plus the 137 GHz of spectrum between 275 and 450 GHz that WRC-19 identified for fixed and land mobile use. IEEE 802.15.3d-2017 defines a point-to-point link across 252–325 GHz with channels from 2.16 up to 69.12 GHz wide, aimed at 100 Gbps. The attraction is bandwidth arithmetic: one 69 GHz channel is more spectrum than all the licensed mobile spectrum below 6 GHz combined, and at 5 bits per hertz that single carrier would deliver about 345 Gbps. What stops it is the air. Atmospheric absorption rises with frequency and is punctuated by water-vapor lines, so 183 GHz and 325 GHz are effectively walls, and the usable windows near 140, 220 and 300 GHz run from a few dB/km up to roughly 10 dB/km at ordinary humidity before rain is added. Solid objects are worse: a human body takes more than 30 dB out at 300 GHz and foliage is opaque, so these links are pencil beams a fraction of a degree wide and beam alignment rather than the modem is the hard engineering. The sources and detectors themselves are covered on the optics and photonics sheet.

## Strengths and weaknesses
The bandwidth is genuinely there, it is largely unclaimed because nobody uses it yet, and the same narrow beam that makes pointing difficult also makes interception difficult and lets many links share the same space without coordinating. Against that sit three hardware problems that have not moved much in a decade. Transmit power is the worst: CMOS and SiGe transceivers run out of gain somewhere around 100–200 GHz and deliver roughly 0 to +10 dBm, InP HEMT and HBT parts go higher at much higher cost and without integrating with the digital baseband, and the photonic route that produces the cleanest high-rate signals in the laboratory works by beating two lasers in a photodiode and needs an optical bench to do it. Phase noise from the frequency multiplier chains limits how high the modulation order can go, which caps spectral efficiency well below what the same modem achieves at 30 GHz. And the data converters are their own wall, because turning 100 GHz of bandwidth into bits calls for hundreds of gigasamples per second at usable resolution, which today costs tens of watts. Even with all of that solved, gas absorption and rain hold outdoor spans to hundreds of meters and low single-digit kilometers.

## When to use
For a system that has to work now, do not use it. If you need multi-gigabit wireless today, buy an E-band link at 70/80 GHz, which carries 1–25 Gbps over 1–5 km with commercial hardware and light-touch licensing, or 60 GHz unlicensed for short indoor hops. If you are writing a 6G plan, note that 3GPP's own focus for 6G is the upper mid-band at 7–15 GHz rather than terahertz, because site count and coverage drive network cost far more than peak rate does. Put terahertz in the plan where its weaknesses do not bite: fixed short links, fronthaul between closely spaced radios, rack-to-rack inside a data center, and kiosk-style bulk transfer over a meter. When evaluating any claimed result, ask three questions before believing it applies to a product — how far did the link actually run, was it indoors, and was the transmitter a chip or a laboratory photonic bench. If the number quoted is a terabit, ask how many carriers were aggregated and over how many centimeters.

## Key numbers
Roughly 100 GHz–1 THz, with 137 GHz between 275 and 450 GHz identified at WRC-19 · IEEE 802.15.3d channels of 2.16–69.12 GHz across 252–325 GHz, targeting 100 Gbps · one 69 GHz channel at 5 bits/Hz works out to about 345 Gbps, computed here · gas absorption a few dB/km at 140 GHz and roughly 10 dB/km near 300 GHz, effectively opaque at 183 and 325 GHz · body blockage over 30 dB at 300 GHz · silicon transceiver output around 0 to +10 dBm · reported outdoor demonstrations of 100 Gbps over about 100 m and lower-rate links to 500 m

## Examples
IEEE 802.15.3d-2017 is the first standard written for these bands, and WRC-19's identification of 275–450 GHz is what makes them usable outside a laboratory. The funding vehicles are the visible part: the EU's Smart Networks and Services Joint Undertaking put €900M of public money behind 2021–2027 work, matched by industry, through projects including Hexa-X and TERAPOD, and NSF's RINGS program plays a similar role in the US alongside national programs in Japan, Korea and China. On results, NTT DOCOMO with NEC, NTT and Fujitsu reported 100 Gbps links at 100 GHz and 300 GHz over about 100 m in 2024, and LG with Fraunhofer HHI reported outdoor 6G transmission over 320 m in 2022 and 500 m in 2023 in the 155–175 GHz range.

## Economic profile
Nobody is selling terahertz links, so the money in this category is public research funding and vendor R&D budgets: €900M from the EU for 2021–2027 with matched industry spending, plus the US, Japanese, Korean and Chinese equivalents. The first revenue that actually changes hands is test and measurement, because a 300 GHz frequency extender for a vector network analyzer is a six-figure instrument and the instrument makers get paid years before any radio ships. When a product does arrive, its economics will look like E-band's rather than 5G's, since the value is a fixed link that avoids a fiber build and the buyer is comparing a $20k radio against past $200k a mile for trenching in a city. Two things gate that arrival: solid-state transmit power at a price a link can carry, and an application that an E-band radio does not already serve at a tenth of the difficulty. The second is the harder one, and it is the question to put to any business plan in this space. A plan that treats terahertz as the capacity layer of 6G should also explain why 3GPP is working at 7–15 GHz instead, because a band that stops at a leaf does not reduce the site count that sets what a network costs.

## Videos

- https://www.youtube.com/watch?v=km-RRC7BIsk — Which will be the new spectrum for 6G? A practical review (Rohde & Schwarz, 7 minutes, 1k+ views)
- https://www.youtube.com/watch?v=bLR0_5qa5WE — Terahertz Communications (Proceedings of the IEEE, 8 minutes, under 1k views)

## Further reading

[Recommendation ITU-R P.676: Attenuation by atmospheric gases and related effects (International Telecommunication Union)](https://www.itu.int/rec/R-REC-P.676/en) · [A Survey on Advancements in THz Technology for 6G: Systems, Circuits, Antennas, and Experiments (arXiv)](https://arxiv.org/abs/2407.01957)
