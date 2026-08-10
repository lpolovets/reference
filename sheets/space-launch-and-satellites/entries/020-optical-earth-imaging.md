---
number: 20
name: Optical Earth imaging
part: 5
group: Imaging
orbits: [sso, leo]
mass: [nano, med]
buyer: [com, civ, sci, def]
maturity: routine
cost: med
---

## Description
Optical Earth imaging is the oldest commercial remote-sensing business, and its whole structure follows from one equation. Ground sample distance scales with altitude and inversely with aperture, so at visible wavelengths a 30 cm pixel from 500 km takes roughly a metre of telescope, while a 3 m pixel needs only a few centimetres. That split the industry cleanly in two. On one side sit small, cheap, numerous satellites: Planet flies about 200 SuperDoves of roughly 5 kg each at 3 m resolution and images the world's land surface every day. On the other sit large, expensive ones: the six WorldView Legion satellites now operated by Vantor deliver 30 cm-class imagery and up to 15 revisits a day over some locations, collecting several million square kilometres daily. Adjacent to both is spectral imaging, where the value is chemistry rather than sharpness — hyperspectral satellites such as Planet's Tanager, Pixxel's constellation, and GHGSat's methane monitors identify materials and gas plumes at spatial resolutions a customer would otherwise consider useless. The sensing and navigation sheet covers how these sensors work; what matters here is the constellation, the revisit rate, and who pays.

## Strengths and weaknesses
A visible-band image is interpretable by any human and by every off-the-shelf vision model, which is not true of radar, and that keeps optical the default product for anything a person has to look at. Costs at the low-resolution end have collapsed. The weakness is the atmosphere, and it is not fixable: cloud blocks the sensor entirely, and roughly two-thirds of the planet is cloud-covered at any moment, so a promised daily revisit can mean a useful image every several days over the places customers most want to watch. Darkness removes half the orbit. The commercial failure mode is subtler and has hurt more companies: the price of an image fell faster than the capital cost of collecting one. High-resolution constellations were built on the assumption of a large commercial market that never materialized at the projected size, and most of the revenue in the category still comes from government contracts.

## When to use
Choose optical when a human or an analytic model needs to identify what something is, when the target area has reasonable cloud statistics, and when the question tolerates gaps. If the requirement is a guaranteed look at a specific time, put SAR in the architecture, because optical cannot promise a cloud-free pass. If the question is about material composition rather than shape — methane leaks, crop stress, mineralogy, effluent — buy spectral imagery and accept 30 m pixels, since resolution is not what answers that question. Before committing to a constellation, check cloud climatology over the target area and multiply the nominal revisit by the clear-sky fraction; that number, not the advertised revisit, is what the customer actually receives. And check the archive first: archive imagery runs 40–60% below tasking, and a large share of requests are answered by something already collected.

## Key numbers
A 30 cm pixel from 500 km takes roughly a 1 m aperture at visible wavelengths · Planet's roughly 200 SuperDoves at 3 m from about 5 kg spacecraft, covering the land surface daily · six WorldView Legion satellites giving up to 15 revisits a day and up to 3.6 million km² of 30 cm-class imagery daily · 50 cm archive imagery around $8–18 per km², with 30 cm tasking above $50 and minimum orders near 25 km² · BlackSky's NRO imagery contract worth up to $1.021B over ten years on an $85.5M five-year base · Planet revenue near $300M in fiscal 2026.

## Regulatory and spectrum
Imaging carries a license that communications satellites do not. Under the Land Remote Sensing Policy Act, a US operator needs a remote sensing license from NOAA's Office of Space Commerce, and the 2020 rewrite replaced case-by-case national security conditions with three tiers keyed to whether comparable data is already available from sources the US does not regulate. Tier 1 systems, whose data is substantially the same as what foreign operators already sell, get minimal conditions and NOAA has issued dozens of them; Tier 2 adds a single condition; Tier 3 covers genuinely unique capability and can carry temporary restrictions. In 2023 NOAA removed most of the remaining temporary conditions, which is what allowed US companies to sell their best products, including imagery below 25 cm. The statute still contains shutter control — the government's authority to restrict collection or dissemination on national security grounds — and it is the reason imagery contracts carry government-priority clauses. On top of the imaging license sit an FCC authorization for the downlink, usually X-band or Ka-band, and export control on the payload: space-qualified optics above certain performance thresholds remain on the US Munitions List even though most spacecraft moved to the Commerce Control List in 2014, so selling a high-resolution imaging satellite abroad is a State Department decision.

## Examples
Planet's roughly 200 SuperDoves at 3 m, about 21 SkySats at 0.5 m, and Pelican high-resolution satellites; Vantor (formerly Maxar Intelligence) with six WorldView Legion satellites plus the older WorldView fleet; Airbus with two operational 30 cm Pléiades Neo satellites and a 20 cm-class Pléiades Neo Next planned from 2028; BlackSky, built around high revisit rather than maximum resolution; the free Landsat and Sentinel-2 programs, which set the floor price at zero for anything above 10 m; and on the spectral side Planet's Tanager, Pixxel, GHGSat, and NASA's EMIT instrument on the ISS.

## Economic profile
The revenue is mostly government, and the contracts are large and long: the NRO's Electro-Optical Commercial Layer awards run ten years, with BlackSky's worth up to $1.021B on an $85.5M five-year base and Maxar's carrying a year-five value above $300M. Commercial demand exists in insurance, agriculture, energy, and finance, but it has consistently been smaller than the projections used to raise capital for high-resolution constellations. Two structural facts drive the economics. Free imagery from Landsat and Sentinel sets the price at zero above about 10 m, so a commercial operator has to be sharper, faster, or spectrally different to charge anything. And the value has migrated from pixels to answers: customers increasingly buy detections, counts, and change alerts rather than scenes, which favors operators with large archives and analytic pipelines over those with the best telescope. If you are underwriting a company here, look at the fraction of revenue that is recurring subscription rather than per-scene, and how much of it renews without a government appropriation.

## Videos

- https://www.youtube.com/watch?v=q7AT3XHguxU — What Satellites Can See From Space Is Troubling (Astrum, 16 minutes, 1m+ views)
- https://www.youtube.com/watch?v=UHkEbemburs — Tiny satellites that photograph the entire planet, every day | Will Marshall (TED, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=EnF_ljgk3gk — How do you observe the Earth with satellites? (FutureLearn, 4 minutes, 10k+ views)

## Further reading

[Fundamentals of Remote Sensing (NASA ARSET)](https://appliedsciences.nasa.gov/sites/default/files/2023-02/Fundamentals_of_RS.pdf) · [Commercial Remote Sensing Regulatory Affairs (NOAA Office of Space Commerce)](https://www.space.commerce.gov/regulations/commercial-remote-sensing-regulatory-affairs/)
