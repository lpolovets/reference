---
number: 8
name: Sun-synchronous orbit
part: 2
group: Low Earth orbits
orbits: [leo, sso]
buyer: [com, civ, sci, def]
maturity: routine
cost: low
---

## Description
A sun-synchronous orbit is a near-polar LEO, typically 500–800 km at a retrograde inclination of 97.4–98.6°, chosen so that the orbit plane rotates at exactly the rate the Earth moves around the Sun. The Earth is not a sphere, and its equatorial bulge tugs on an inclined orbit hard enough to make the orbit plane precess; picking the right inclination for a given altitude tunes that precession to 0.9856° per day, which is 360° in a year. The result is that the satellite crosses the equator at the same local solar time on every pass, forever, without spending any propellant to maintain it. That fixed lighting is the product. It is why nearly all Earth observation flies here, and it is the clearest example in this sheet of an orbital-mechanics side effect becoming a commercial requirement.

## Strengths and weaknesses
Identical illumination on every pass is what makes change detection work: two images of the same field taken three weeks apart differ because the field changed, not because the shadows moved. The dawn-dusk variant, flying along the day-night terminator, keeps the solar arrays in near-continuous sunlight and avoids most eclipse cycling, which suits power-hungry radar satellites well. The costs are real. Launching retrograde gives up roughly 400 m/s of free velocity from the Earth's rotation, so a vehicle's quoted SSO payload typically lands 20–40% below its LEO figure, part from the retrograde launch and part from the higher altitude. The failure mode is congestion rather than physics: the mid-morning shell around 10:30 local time is the most crowded piece of sky there is, because every optical imaging program wants the same lighting, and that concentration drives both conjunction rates and downlink contention.

## When to use
Choose SSO when consistent lighting matters, which covers optical imaging, most multispectral and hyperspectral work, and any time series where a human or an algorithm compares images taken weeks apart. Choose the dawn-dusk variant for SAR and for any payload whose power budget benefits from continuous sun. Do not pay the SSO launch penalty if you do not need the lighting: a communications constellation gains nothing from it, and a mid-inclination LEO covers populated latitudes with fewer satellites and better launch performance. If revisit rate matters more than lighting consistency, a mix of inclinations usually beats piling more satellites into the same sun-synchronous plane, because satellites in one plane all pass over a site at nearly the same time of day.

## Key numbers
Typically 500–800 km altitude · 97.4–98.6° retrograde inclination, rising with altitude · plane precession of 0.9856° per day, matching the Earth's motion around the Sun · roughly 400 m/s of Earth-rotation assist given up at launch · quoted SSO payload 20–40% below the same vehicle's LEO figure · the 10:30 local-time shell as the most congested band · X-band downlinks at 8,025–8,400 MHz.

## Regulatory and spectrum
Two things bind here that do not bind elsewhere. The first is downlink spectrum: Earth observation satellites share a narrow X-band allocation at 8,025–8,400 MHz, and with hundreds of imaging satellites in nearly the same plane wanting the same polar ground stations at the same moments, contention is a real scheduling constraint rather than a paper one. Ka-band at 25.5–27.0 GHz is the growth path and is where high-rate missions are moving. The second is imaging licensing: any US commercial remote-sensing system needs a NOAA license under 15 CFR Part 960, which since the 2020 rewrite sorts systems into three tiers by whether comparable capability is already available elsewhere, and which is what permitted sub-25 cm imagery to be sold commercially. The license carries conditions the government can invoke, including limits on imaging specific areas, and foreign customers add export-control review on top. Everything else, the FCC filing, the ITU coordination, the five-year disposal expectation, is the same as any LEO mission.

## Examples
Landsat 8 and 9 and the Sentinel-2 pair at mid-morning local time, Sentinel-1 in a dawn-dusk orbit for radar, NOAA's JPSS weather satellites at 13:30, and essentially the whole commercial imaging fleet: Planet's SuperDoves and SkySats, Maxar's WorldView Legion, Airbus's Pléiades Neo, and the ICEYE and Capella SAR constellations. SpaceX's Transporter rideshare missions fly to SSO for exactly this reason, and the polar ground station sites at Svalbard, Inuvik, Punta Arenas, and Troll exist because a sun-synchronous satellite passes over them on every single orbit.

## Economic profile
The launch penalty is a fixed tax on the orbit and shows up directly in the price per kilogram, which is part of why rideshare took over this segment: aggregating a hundred small payloads onto one SSO mission spreads the penalty across all of them. The more interesting cost is downstream. Because everyone wants the same local time, imaging companies compete for the same lighting, the same ground contacts, and increasingly the same customers, and image prices have fallen faster than the capital cost of collecting them. If you are building an SSO imaging business, the differentiator is rarely the orbit or the sensor. It is revisit rate, tasking latency, and whether you own the analytics that turn pixels into something a customer will pay a subscription for.

## Videos

- https://www.youtube.com/watch?v=PZAkiXNJIqc — Geostationary, Molniya, Tundra, Polar & Sun Synchronous Orbits Explained (Scott Manley, 15 minutes, 500k+ views)
- https://www.youtube.com/watch?v=4K5FyNbV0nA — Space: Prograde, Retrograde, and Sun-Synchronous Orbits (astronow, 6 minutes, 50k+ views)
- https://www.youtube.com/watch?v=w2vCCKSTImQ — Sun Synchronous Orbits | Orbital Mechanics with Python 34 V2.0 (Alfonso Gonzalez - Astrodynamics & SE Podcast, 14 minutes, 10k+ views)

## Further reading

[Catalog of Earth Satellite Orbits (NASA Earth Observatory)](https://science.nasa.gov/earth/earth-observatory/catalog-of-earth-satellite-orbits) · [Licensing of Private Remote Sensing Space Systems: Final Rule (NOAA)](https://www.govinfo.gov/content/pkg/FR-2020-05-20/pdf/2020-10703.pdf)
