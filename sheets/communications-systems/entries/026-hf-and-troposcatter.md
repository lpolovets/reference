---
number: 26
name: HF and Troposcatter
part: 5
group: Free-space & specialized
reach: [long]
capacity: [kbps, mbps]
medium: rf
latency: low
maturity: dep
---

## Description
These are the two ways to get a radio signal hundreds or thousands of kilometers past the horizon without a satellite, a tower chain or a cable. HF, 3 to 30 MHz, refracts off the ionosphere: a wave launched at a low angle bends back to earth 1,000–3,000 km away in one hop, and successive hops reach intercontinental distances. The frequency that works changes through the day, the season and the eleven-year solar cycle, roughly 3–8 MHz at night and 10–25 MHz in daylight, so an HF station chooses its channel continuously rather than once. Near-vertical incidence skywave is the same physics with the antenna aimed almost straight up: at 2–10 MHz the wave comes back over a circle out to about 300 km with no skip zone in the middle, which is how a unit covers a valley or the gap between ground-wave range and ordinary skywave range. Troposcatter works on a different mechanism, aiming a 1–5 GHz beam just above the horizon so that a small fraction of the power scatters off refractive-index irregularities in the troposphere and lands 100–300 km away. Loss on that path is 200–250 dB, which is why troposcatter has always meant high transmit power and large antennas. Neither path adds much propagation delay, since a 3,000 km ionospheric hop takes about 10 ms, but HF modems interleave over seconds to ride out fading, so the delay a user sees is set by the waveform rather than by the distance.

## Strengths and weaknesses
HF's advantage is that it needs no infrastructure whatsoever. A transceiver, a wire antenna and a battery reach across a continent with nothing in between that an adversary can jam from orbit, cut with an anchor, or refuse to sell you. The price is bandwidth: a standard HF channel is 3 kHz wide, which caps throughput in the kilobits and always will, and on top of that the path varies hour to hour, solar flares black the band out for minutes to hours (days at high latitudes during a polar cap absorption event), the band is crowded, and a transmitting station is easy to intercept and direction-find. Troposcatter trades that around. It delivers 10–200 Mbps over 100–300 km with nothing between the two ends and nothing in orbit, and because the useful scatter volume is narrow, a receiver off the great-circle path hears very little. Its weaknesses are power and mass: the scattered signal fades deeply and at random, so quadruple diversity — two antennas and two frequencies, or angle-diversity feeds — is standard equipment rather than an upgrade, amplifiers run from hundreds of watts into the kilowatts, and the terminal is vehicle-sized even now that antennas have come down from the 18 m billboards of the 1950s to 1.2–2.4 m dishes.

## When to use
Use HF when the requirement is a message rather than a file and the path has to work with zero infrastructure behind it: command and control when satcom is denied, maritime and aeronautical long-haul, disaster response after the towers are down. Use near-vertical incidence skywave specifically when the users are within about 300 km of each other in terrain that blocks line of sight, since that is the one case ordinary skywave cannot cover. Do not plan a data service on HF, because 1.2–4.8 kbps in a 3 kHz channel is an order of magnitude short of what applications now assume; wideband HF widens the channel to 24 kHz and reaches roughly 120 kbps in good conditions, which carries email and compressed imagery but not video. Whatever the waveform, use automatic link establishment rather than manual frequency selection: 2G ALE under MIL-STD-188-141 sounds and scans and links in about ten seconds, 3G ALE under STANAG 4538 does it in one or two, and that is the difference between a network and an operator with a propagation chart. Reach for troposcatter when you need tens of megabits over 100–300 km, satellite capacity is jammed or unavailable, and a vehicle-sized terminal can be placed at each end. If line of sight exists at all, use a microwave hop instead, since it costs roughly a tenth as much and needs a tenth of the power.

## Key numbers
HF 3–30 MHz in 3 kHz channels, 1.2–4.8 kbps typical and 9.6 kbps at best · wideband HF in 24 kHz reaching about 120 kbps · single-hop skywave 1,000–3,000 km, usable frequency roughly 3–8 MHz at night and 10–25 MHz by day · NVIS at 2–10 MHz covering out to about 300 km · ALE link setup about 10 s for 2G, 1–2 s for 3G · troposcatter 1–5 GHz over 100–300 km against 200–250 dB of path loss · modern troposcatter 10–200 Mbps on 1.2–2.4 m dishes

## Examples
On the HF side, MIL-STD-188-141 for 2G ALE, STANAG 4538 for 3G, and MIL-STD-188-110 for the modem waveforms including the wideband appendix; the US federal SHARES network run by CISA as an interagency fallback; oceanic air traffic control, which still runs HF voice and HF data link where there is no VHF coverage. On the troposcatter side, the White Alice system across Alaska and NATO's ACE High chain across southern Europe were the Cold War build-outs, both retired once satellite capacity got cheap; the current revival is driven by contested environments, with Comtech supplying the US Army's troposcatter modernization and several NATO members restarting programs of their own.

## Economic profile
Both of these trade a fixed cost for the absence of a recurring one, which is the whole reason they survive. An HF station is $5k–30k for a manpack or vehicle set with an antenna, and after that there is no airtime bill, no lease and, for a government user, no spectrum fee, against $500–3,000 a month for a satellite terminal doing a similar job. That arithmetic is why militaries and emergency services keep HF alongside far better links: the operating cost of a capability you use twice a year is what decides whether you still have it. A troposcatter terminal pair runs from several hundred thousand dollars to a couple of million, expensive next to a satellite terminal, but it buys a link with no space segment to lease and nothing an adversary can deny from orbit, and on a route carrying daily traffic the ten-year total usually comes out ahead. The cost that does not appear in either budget is people. HF networks need operators who understand propagation, and that skill base thinned badly between about 1995 and 2015 while satcom took over, so standing a network back up now takes longer to staff than to equip. Supplier counts are small in both categories, so prices are negotiated rather than competed down.

## Videos

- https://www.youtube.com/watch?v=k3IFj_Z5cLM — Understanding NVIS (Rohde & Schwarz, 20 minutes, 50k+ views)
- https://www.youtube.com/watch?v=qQ9-feIZbsM — The Cold War-era communications system that overcomes satellite jamming (BFBS Forces News, 3 minutes, 50k+ views)

## Further reading

[Recommendation ITU-R P.533: Method for the prediction of the performance of HF circuits (International Telecommunication Union)](https://www.itu.int/rec/R-REC-P.533/en) · [Tropospheric Scatter: Theory vs. Predictive Models, NTIA TR-22-557 (NTIA Institute for Telecommunication Sciences)](https://its.ntia.gov/publications/details?pub=3276)
