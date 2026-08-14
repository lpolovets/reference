---
number: 24
name: Free-Space Optical Links
part: 5
group: Free-space & specialized
reach: [metro]
capacity: [gbps]
medium: laser
latency: sub
maturity: early
---

## Description
A terrestrial free-space optical link is a pair of small telescopes on rooftops or masts, each aiming a modulated infrared beam at the other through open air. Commercial units work at 850 nm or 1,550 nm and deliver 1–10 Gbps over spans from about 100 m to a few kilometers. Beam divergence is deliberately wide, usually 1–5 milliradians, which spreads the spot to 1–5 m at 1 km so a building swaying in the wind does not walk the beam off the receiver; higher-end products replace that margin with an active tracking gimbal and a narrower beam. Optical frequencies sit above the range the ITU allocates, so there is no license to win and no coordination to sit through, and a link goes in over days rather than months. Air also carries light faster than glass does, about 3.3 microseconds per kilometer against roughly 5, which is why latency-sensitive trading firms have bought open-air hops on routes where the fiber takes a longer path. Everything hard about the technology is the atmosphere in between.

## Strengths and weaknesses
The strengths are real: gigabit capacity with no spectrum fee and no trench, installation in days, a beam only a few meters across that an eavesdropper has to physically stand in, and no radio interference to coordinate. The weakness is fog: attenuation in dense fog runs 100–300 dB/km and higher, and it barely depends on wavelength because fog droplets are close to the size of the light, so moving from 850 to 1,550 nm buys almost nothing. A typical link holds 20–40 dB of margin, which means a 200 m span rides out fog that takes a 1 km span completely off the air. Rain is far easier at 10–25 dB/km even in a downpour, since raindrops are much larger than the wavelength and there are far fewer of them in a cubic meter. Turbulence adds scintillation, intensity swings of several decibels on millisecond timescales that are worst over hot roofs around midday, and the usual fix is several transmit apertures plus a receive aperture large enough to average the speckle out. The failure mode to plan for is not gradual degradation: the link runs at full rate or it is completely down, and the annual outage total is decided by the local fog statistics rather than by the equipment.

## When to use
Use free-space optical when the span is short, the schedule is weeks rather than quarters, and either no spectrum is available or the right of way for fiber is not obtainable. Typical good fits are a campus crossing over a road you cannot trench, a temporary link for an event or a disaster restoration, and a hop where being hard to intercept is worth paying for. If the span is over about 1 km and you have promised 99.9% availability, do not use it alone, because that target allows 8.8 hours of outage a year and one bad fog season will spend all of it. In a coastal or valley climate with regular fog, treat FSO as the backup rather than the primary. The usual alternative is an E-band radio at 70/80 GHz, which carries 1–25 Gbps over 1–5 km for $10k–50k a hop with light-touch registration and keeps working in fog, and it wins most comparisons on those grounds. If you need both high capacity and high availability, run the laser and a millimeter wave radio on the same path, since fog takes out the laser, heavy rain takes out the radio, and the two rarely arrive together.

## Key numbers
1–10 Gbps per link · spans of 100 m to a few km · 850 or 1,550 nm, beam divergence 1–5 mrad · fog 100–300+ dB/km against 10–25 dB/km for heavy rain · link margin 20–40 dB · $30k–100k per link pair installed · 3.3 microseconds per km of path

## Examples
Taara, spun out of Alphabet in 2025 from the optical terminals built for Project Loon, advertises 20 Gbps at up to 20 km and reported carrying about 700 TB across the roughly 5 km Congo River crossing between Brazzaville and Kinshasa in 20 days at 99.9% availability; Canon's Canobeam, LightPointe, fSONA and Mostcom have sold enterprise-scale links for two decades. The 2000–2002 wave is the cautionary half of the record: Terabeam and AirFiber raised and spent hundreds of millions of dollars on metro optical access and neither survived the telecom bust, while Anova Technologies later ran laser and millimeter wave links between the Chicago and New Jersey exchanges for latency-sensitive trading, where the shorter air path is the whole product.

## Economic profile
Almost all of the cost is the terminal pair, roughly $30k–100k installed, plus rooftop rights at both ends. There is no spectrum fee, no permit for a trench, and effectively no marginal cost per bit once the link is up. The comparison that decides most deals is against E-band radio rather than against fiber: $10k–50k a hop, more capacity, and no sensitivity to fog, which is most of why terrestrial optical has stayed a niche. Recurring cost is small in equipment terms, a window cleaning and an occasional realignment, but an operator who needs high availability has to keep a backup circuit running for the hours the laser is down, and that standby circuit can cost more per year than the link it protects. Terrestrial FSO has been described as five years from mass adoption for about thirty years, and the reason has not changed: the hardware works, and the weather record on a particular route decides whether the route does. The money that has been made here came from bounded niches — campus crossings, event and restoration work, trading paths, and rural spans where the alternative is no service at all — rather than from metro access, which is what each funding wave has promised.

## Videos

- https://www.youtube.com/watch?v=_S3xD-QOcnc — Laser Internet: Connecting Rural Areas - with Taara (DW Shift, 5 minutes, 50k+ views)
- https://www.youtube.com/watch?v=lEEumcR7KGA — Free Space Optics: A Critical Technology for Space and Terrestrial Communications (FiberGuide - Fiber Optics | Optical Networking, 6 minutes, 1k+ views)

## Further reading

[Recommendation ITU-R P.1817: Propagation data required for the design of terrestrial free-space optical links (International Telecommunication Union)](https://www.itu.int/rec/R-REC-P.1817/en) · [A Contemporary Survey on Free Space Optical Communication: Potential, Technical Challenges, Recent Advances and Research Direction (arXiv)](https://arxiv.org/abs/2012.00155)
