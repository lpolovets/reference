---
number: 2
name: Propagation and Path Loss
part: 1
group: Spectrum & physical layer
reach: [short, global]
capacity: [kbps, tbps]
medium: rf
maturity: dep
---

## Description
Free-space path loss is the baseline every radio link starts from: loss in decibels equals 32.44 plus 20 log10 of the distance in kilometers plus 20 log10 of the frequency in megahertz. Doubling the distance costs 6 dB and doubling the frequency costs another 6 dB, so a 1 km link loses about 89 dB at 700 MHz and about 121 dB at 28 GHz. The frequency term comes from the receiving antenna's effective area shrinking with the square of the wavelength rather than from the wave itself weakening, which is why a fixed-size dish actually gains at high frequency while a fixed-gain handset antenna loses. Real environments are worse than free space in most cases and better in a few. The 3GPP channel models fit a distance exponent to measured data: 2.0 in free space, about 2.2 for an urban macro cell with line of sight, 3.9 once the line of sight is blocked, 3.5 in an urban street canyon without line of sight, and 1.7 indoors along a corridor, where the walls act as a waveguide. On top of that sits shadow fading, a log-normal spread with a standard deviation of 4 to 8 dB that describes how much two locations at the same distance differ.

## Strengths and weaknesses
The models are good enough to plan a network with, and that is a real achievement: an operator can predict median coverage over a city to within a few decibels and size a site grid from a map. What they do not predict is any individual location, because the 4 to 8 dB shadow fading standard deviation means a house behind a hill or a desk behind a metal partition can be 15 dB off the median. The sharpest failure is material penetration, which gets far worse with frequency. Using the 3GPP figures, concrete costs 5 + 4f dB with f in gigahertz, so a wall takes about 8 dB out of a 700 MHz signal and about 117 dB out of a 28 GHz one, which is the whole reason millimeter wave does not serve indoor users from outdoors. Ordinary glass is transparent by comparison at 2 + 0.2f dB, about 8 dB at 28 GHz, while the infrared-reflective glass in modern buildings costs 23 + 0.3f dB, about 31 dB. Above roughly 10 GHz weather joins in, and above 50 GHz the atmosphere itself does.

## When to use
Use free-space path loss only for satellite links, microwave hops with clear line of sight, and sanity checks. For terrestrial cellular planning, use the 3GPP TR 38.901 urban macro, urban micro, rural and indoor models, pick the non-line-of-sight branch as the default, and add shadow fading margin for the coverage percentile you actually promise rather than the median. If your link runs above about 10 GHz, budget rain: at a 25 mm/h rain rate the ITU-R model gives roughly 0.7 dB/km at 10 GHz, 2.8 dB/km at 20 GHz, 4.6 dB/km at 28 GHz and 7.2 dB/km at 40 GHz, so a 3 km 28 GHz hop needs about 14 dB of margin for that rain rate alone. Avoid 60 GHz for anything longer than a few hundred meters, because oxygen absorption there costs roughly 15 dB/km on top of everything else, though that same absorption is useful when you want a link that does not travel far enough to interfere. Whatever the band, the link budget is the arithmetic that decides the design: add transmit power and antenna gains, subtract path loss and everything the air and the walls take out, then compare the result against a noise floor that starts at −174 dBm per hertz and works out to −94 dBm across a 100 MHz channel before the receiver's own noise figure. The honest test of a plan is whether the remaining margin survives rain, a wall, and a body at the same time.

## Key numbers
Free-space loss = 32.44 + 20 log10(d in km) + 20 log10(f in MHz), so 89 dB at 1 km and 700 MHz against 121 dB at 1 km and 28 GHz · path loss exponent 2.0 free space, about 2.2 urban macro line of sight, 3.9 urban macro blocked, 1.7 indoor corridor · shadow fading standard deviation 4–8 dB · concrete penetration 5 + 4f dB, about 8 dB at 700 MHz and 117 dB at 28 GHz · rain at 25 mm/h roughly 0.7 dB/km at 10 GHz, 2.8 at 20 GHz, 4.6 at 28 GHz, 7.2 at 40 GHz · oxygen absorption roughly 15 dB/km at 60 GHz · thermal noise floor −174 dBm/Hz, so −94 dBm in a 100 MHz channel (rain figures computed here from ITU-R P.838-3).

## Examples
3GPP TR 38.901, the channel model behind every 5G coverage tool, covering 0.5 to 100 GHz with urban macro, urban micro, rural, indoor office and indoor factory cases; ITU-R P.838 for rain attenuation and P.676 for atmospheric gases; the Longley-Rice irregular terrain model still used for broadcast and federal coordination; the NYU Wireless and Nokia Bell Labs 28 and 73 GHz measurement campaigns that produced the millimeter wave numbers 38.901 fits.

## Economic profile
Propagation sets site count, and site count is most of a wireless network's capital cost. Coverage area goes as the square of cell radius, so if a 700 MHz macro cell reaches 5 km and a 28 GHz cell reaches 200 m, covering the same ground takes about 625 times as many sites, which is the arithmetic that confined millimeter wave to stadiums, airports and dense downtown blocks rather than nationwide coverage. That is why low-band spectrum sells for roughly what mid-band sells for while millimeter wave sells for a hundredth as much: buyers are pricing sites they will not have to build. Each macro site carries a ground lease, power, backhaul and a zoning process, so the recurring cost keeps running whether the site is busy or not, and adding margin in software is free while adding it in sites is not. The practical lever is antenna height and gain, both of which buy decibels far more cheaply than transmit power does, since power costs energy continuously and is capped by emission limits. When a coverage plan fails, the usual cause is a penetration or shadowing assumption rather than a mistake in the free-space term.

## Videos

- https://www.youtube.com/watch?v=s83CsDGy93o — What is Path Loss? (Carl Oliver, 5 minutes, 50k+ views)
- https://www.youtube.com/watch?v=H7Vh-7kiejQ — Wireless propagation losses [Part 2, Fundamentals of mmWave communication] (Wireless Future, 14 minutes, 5k+ views)

## Further reading

[ETSI TR 138 901: Study on channel model for frequencies from 0.5 to 100 GHz (ETSI / 3GPP)](https://www.etsi.org/deliver/etsi_tr/138900_138999/138901/16.01.00_60/tr_138901v160100p.pdf) · [Recommendation ITU-R P.838-3: Specific attenuation model for rain for use in prediction methods (International Telecommunication Union)](https://www.itu.int/rec/R-REC-P.838/en)
