---
number: 6
name: ArF immersion lithography (193i)
part: 2
group: Optical lithography
devices: [logic, memory, analog]
node: [mature, adv, lead, front]
wafer: [w300]
toolcost: med
suppliers: one
---

## Description
Immersion lithography fills the gap between the final lens element and the resist with purified water, whose refractive index of about 1.44 lets the system collect a wider cone of light and pushes numerical aperture from roughly 0.93 to 1.35. At 193 nm that gives 38 nm half-pitch in a single exposure, and nothing optical goes finer (manufacturing-processes 184 covers the underlying resist process). This is the most important tool in the industry by wafer count. Every leading-edge fab bought EUV and still runs the majority of its layers on immersion, because most layers do not need to be finer than 38 nm and an immersion exposure is far cheaper and faster than an EUV one. Anything below that floor has to be built with multi-patterning (007) or printed with EUV (008).

## Strengths and weaknesses
Immersion combines resolution, throughput, and overlay in a way nothing else matches: at least 295 wafers an hour on an NXT:2100i, with overlay of about 1.3 nm machine-to-machine and 1.7 nm on product, which is what makes multi-patterning possible at all. The resist, OPC, and mask ecosystem around 193 nm has had twenty years of investment. The weaknesses are the 38 nm floor and the water. Bubbles, watermarks, and material leaching out of the resist into the water all print as defects, and the immersion hood has to scan across the wafer at meters per second without leaving a droplet behind. Defectivity work on the water system is a permanent part of running these tools rather than a start-up problem you solve once.

## When to use
If the layer prints at 38 nm half-pitch or coarser, expose it once on immersion and stop, because that is the cheapest way to get that resolution. If it prints finer, the decision is between multi-patterning and EUV, and you make it on cost per wafer-layer, cycle time, and edge placement error — EUV usually wins from about N7 down. Do not buy immersion for a line that KrF (005) can print, since the tool costs seven times as much and buys you nothing you will use. If you have no EUV access, immersion plus multi-patterning is the only route to an advanced node, and you should model the yield and cycle-time cost honestly rather than counting mask layers.

## Key numbers
193 nm ArF with water raising numerical aperture to 1.35 · 38 nm half-pitch in a single exposure · at least 295 wafers an hour on an NXT:2100i · overlay about 1.3 nm machine-to-machine and 1.7 nm on product · roughly €83M per system, about $90M · ASML shipped roughly 130 immersion systems in 2025 against 48 EUV.

## Supply chain
ASML is effectively the sole supplier. Nikon still builds immersion scanners and ships a handful a year, against ASML's dozens per quarter, and Canon never competed here, so a fab planning capacity has one realistic vendor. One level down, Zeiss SMT is the sole optics supplier and Cymer and Gigaphoton the light sources. Immersion is also where export control actually bites, which surprises people who think the rules are only about EUV: the Netherlands has required licences for advanced immersion tools since September 2023, and the MATCH Act introduced in April 2026 would bar immersion exports to any facility in China outright. ASML's China share of system sales fell from 36% in Q4 2025 to 19% in Q1 2026 as that regime tightened. There is no domestic Chinese alternative in production — SMEE's 28 nm immersion tool has been announced several times without a confirmed shipment — which makes second-hand immersion scanners the most contested capital good in the industry.

## Examples
ASML TWINSCAN NXT:2100i and NXT:2050i; Nikon's NSR-S636E. Every leading-edge fab runs them, including TSMC, Samsung, Intel, SK Hynix, and Micron, usually for the large majority of their layer count. SMIC's 7 nm process is built entirely on immersion plus multi-patterning, which is the clearest demonstration of both what the tool can do and what it costs to push it that far.

## Economic profile
Immersion is where ASML's unit volume and much of its installed-base service revenue come from, so the EUV headlines and the immersion cash flow are two different stories about the same company. Per wafer-layer, an immersion exposure is the cheapest fine-resolution step available, which is exactly why the multi-patterning-versus-EUV argument stays close and why extending low-NA EUV rather than buying High-NA (009) is a defensible position. For anyone tracking capacity: immersion shipments are a better proxy for total advanced wafer starts than EUV shipments are, because most layers on an advanced wafer are still printed this way.

## Videos

- https://www.youtube.com/watch?v=1WJWYMTLeOg — Semiconductor Immersion Lithography (Asianometry, 16 minutes, 100k+ views)
- https://www.youtube.com/watch?v=8JlZcRd8o94 — Tricks in Lithography : Part 1 (Immersion Lithography) (nanolearning, 7 minutes, 10k+ views)

## Further reading

[How immersion lithography saved Moore's Law (ASML)](https://www.asml.com/en/news/stories/2023/how-immersion-lithography-saved-moores-law) · [The True Impact of Allied Export Controls on the U.S. and Chinese Semiconductor Manufacturing Equipment Industries (CSIS)](https://www.csis.org/analysis/true-impact-allied-export-controls-us-and-chinese-semiconductor-manufacturing-equipment)
