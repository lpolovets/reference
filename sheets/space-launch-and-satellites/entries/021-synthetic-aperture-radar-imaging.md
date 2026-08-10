---
number: 21
name: Synthetic aperture radar imaging
part: 5
group: Imaging
orbits: [sso, leo]
mass: [micro, med]
buyer: [com, civ, sci, def]
maturity: routine
cost: med
---

## Description
A SAR satellite carries its own illumination, so it images through cloud and at night, which is why defense buys it and why it has been the fastest-growing segment of commercial remote sensing. The sensing and navigation sheet covers how the technique works; the interesting thing at satellite level is what limits a SAR spacecraft, and the answer is power rather than aperture. A 100 kg radar satellite has to radiate kilowatts during a collection while its solar arrays produce a couple of hundred watts averaged over the orbit, so it charges a battery for most of the orbit and spends it in bursts of seconds. Battery capacity and thermal duty cycle, not antenna size, set how many square kilometers the satellite can collect per orbit, and the resulting data volume then runs straight into downlink capacity. That is why the small-satellite SAR companies converged on similar designs: a deployable antenna a few meters long, a large battery, and an aggressive X-band or laser downlink. ICEYE's satellites are around 85 kg and Capella's around 100 kg, against about 2,300 kg for ESA's Sentinel-1.

## Strengths and weaknesses
Guaranteed collection is the product. If a customer needs to know what is at a location on a specific day, only radar can promise it, and that reliability is worth more to defense, insurance, and maritime customers than sharper pixels would be. Coherent processing also gives products optical cannot: interferometric SAR measures ground motion to a few millimeters by comparing the phase of repeat passes, which is how subsidence, dam deformation, mine walls, and volcanic inflation get monitored, and coherent change detection reveals that soil was disturbed or a vehicle moved between two passes. The weaknesses are interpretation and cost per collection. SAR imagery does not look like a photograph and needs trained analysts or trained models, which limits the buyer pool. And because collection is power-limited, a SAR satellite's daily capacity is small compared with an optical imager sweeping a wide swath, so the cost per square kilometer stays higher.

## When to use
Choose SAR when the answer has to arrive regardless of weather or daylight, when the target area is persistently cloudy, or when the question is about millimeter-scale motion or disturbance rather than appearance. Maritime domain awareness, flood mapping, force monitoring, and infrastructure deformation are the strongest fits. Do not buy SAR when a human analyst needs to identify something visually and the sky is usually clear, because optical is cheaper per square kilometer and every model already understands it. For InSAR specifically, check that the constellation actually flies repeat orbits with tight baselines, since not every SAR satellite can produce interferometric pairs, and a vendor offering deformation products without that geometry is selling something weaker than it sounds. The common architecture is both: optical for wide-area survey and identification, SAR for guaranteed revisit and for change.

## Key numbers
ICEYE satellites around 85 kg, with 48 launched since 2018 for the company and its customers · Capella spacecraft around 100 kg, with four on orbit in 2026 · Sentinel-1 at about 2,300 kg, distributing data free and open · commercial spotlight resolution to 25 cm, and Umbra has publicly released a 16 cm image · InSAR measures ground displacement to a few millimeters across repeat passes · a 100 kg SAR satellite radiates kilowatts in bursts from a couple of hundred watts of orbit-average power.

## Regulatory and spectrum
SAR carries the same NOAA remote sensing license as optical, but it has historically been the harder case, because the tier system keys conditions to whether comparable data is already sold by operators the US does not regulate — and for high-resolution radar there were fewer foreign competitors to point at. That is why Umbra flew under temporary conditions capping what it could sell at 25 cm and barring release of phase history data, the raw complex signal that makes interferometry and coherent change detection possible. The restriction was on a capability rather than on a picture, which is the useful thing to understand about remote sensing licensing: regulators care about what the data enables. When NOAA lifted those conditions, Umbra was able to sell sub-25 cm products and phase history for the first time, and released a 16 cm image. The radar itself needs spectrum too, transmitting in the Earth exploration-satellite (active) allocations, principally 9.3–9.9 GHz at X-band, which are shared with radiolocation services and coordinated accordingly. Export control shapes who can buy the satellites rather than the data: SAR payloads sit at the sensitive end of the spacecraft controls, which is part of why a Finnish operator selling spacecraft directly to national governments has been a viable business model where a US one would face a State Department license for each sale.

## Examples
ICEYE, the largest commercial SAR constellation, which sells satellites to governments as well as data; Capella Space, acquired by IonQ in July 2025 and operating four spacecraft while building the next batch; Umbra, which holds the commercial resolution record; Synspective in Japan; ESA's Sentinel-1, whose free C-band data underpins most civil and academic InSAR; and Airbus TerraSAR-X and the Italian COSMO-SkyMed constellation among the earlier government-backed systems.

## Economic profile
SAR was the category that changed most with small satellites: a capability that used to require a two-tonne government spacecraft now flies at 85–100 kg, and prices per image have fallen by roughly an order of magnitude in a decade. Demand is dominated by defense and intelligence, with insurance, maritime, and infrastructure monitoring as the real but smaller commercial markets, and flood mapping in particular has become a repeatable product because it needs exactly the all-weather property optical lacks. Two moats matter. Constellation size sets revisit, which is what a monitoring customer is actually buying, and the analytic layer turns a hard-to-read image into an answer a non-specialist can act on. A third, less discussed, is that selling satellites rather than imagery converts a subscription business into a capital-equipment business with government buyers, and several operators now run both. Free Sentinel-1 data caps what anyone can charge at coarse resolution, so commercial value concentrates in high resolution, fast tasking, and guaranteed revisit.

## Videos

- https://www.youtube.com/watch?v=u2bUKEi9It4 — Satellites Use 'This Weird Trick' To See More Than They Should - Synthetic Aperture Radar Explained. (Scott Manley, 16 minutes, 1m+ views)
- https://www.youtube.com/watch?v=day11hxuyKU — Capella Overview and Introducing Evolved Satellite Design (Capella Space, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=OpFPvS0X7d0 — ICEYE's Dwell Imaging Mode Explained By Darren Muff [New Product] (ICEYE, 2 minutes, 5k+ views)

## Further reading

[Synthetic Aperture Radar (SAR) (NASA Earthdata)](https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/sar) · [S1 Mission (ESA SentiWiki)](https://sentiwiki.copernicus.eu/web/s1-mission)
