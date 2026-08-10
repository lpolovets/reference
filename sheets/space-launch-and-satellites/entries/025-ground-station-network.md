---
number: 25
name: Ground station network
part: 6
group: Ground stations and terminals
orbits: [leo, sso, meo, geo, deep, gnd]
buyer: [com, civ, sci, def]
maturity: routine
cost: low
---

## Description
A ground station network is the set of tracking antennas that talk to a spacecraft, plus the scheduling, modems, and backhaul that turn a few minutes of visibility into data on a server. For anything in low orbit the fundamental limit is geometry. A satellite at 550 km circles the Earth about 15 times a day, but from a single mid-latitude site only 4 to 6 of those orbits come high enough over the horizon to use, and each usable pass lasts 8 to 12 minutes above a 5 to 10 degree elevation mask. Move the antenna to a high-latitude site and the numbers change completely: from Svalbard at 78 degrees north, a polar-orbiting satellite is visible on 10 to 14 of its 15 orbits, which is why the two most valuable pieces of ground-station real estate on Earth are Svalbard and Antarctica. What flows through that window is set by band and antenna size, roughly 100 Mbps to 1.2 Gbps on an X-band downlink and up to about 2.5 Gbps on Ka. Geostationary and deep-space missions have the opposite problem: the satellite is always visible from the right site, so the scarce resource is antenna time on a shared network rather than passes.

## Strengths and weaknesses
Renting antenna time removed what used to be a hard prerequisite for operating a satellite. A ground-station-as-a-service provider sells scheduled contacts by the minute across a network of licensed sites, so a company with one 6U CubeSat gets the same global coverage as an agency with its own stations, and the fixed cost of building, permitting, and staffing a site disappears. The weakness is that contact time, not sensor performance, is what usually limits revenue on a high-rate mission. A modern SAR or high-resolution optical satellite can collect far more data per orbit than it can push through 10 minutes of X-band, so the spacecraft spends most of its life with a full recorder, and adding aperture or collection capacity buys nothing until you add downlink. The other weakness is that a shared network is shared: contention for the same Svalbard passes at the same 10:30 local time crossing is real, on-demand pricing is two to three times reserved pricing, and a provider's coverage map is only as good as the countries that granted it site licenses.

## When to use
Rent by default. If you fly fewer than a few dozen satellites, ground-station-as-a-service is cheaper and faster than building anything, and the pricing makes the comparison easy: reserved capacity runs about $3 per minute for narrowband and $10 for wideband, so even a heavy user buying 3,000 minutes a month of wideband spends around $360k a year, which is less than the lifetime cost of two staffed sites. Build your own when one of three things is true: you have enough constellation traffic that antenna-minute bills exceed the amortized cost of sites you would use around the clock, your data is classified or export-controlled and cannot transit a commercial provider's backhaul, or latency from collection to customer is your product and you need a station where the satellites are, not where the provider has one. Most large operators end up with both, owning stations at the high-value polar sites and renting the rest. If contact time is the binding constraint and you have already bought all the passes there are, the next lever is an optical downlink or an inter-satellite relay rather than another antenna.

## Key numbers
4–6 usable passes a day from one mid-latitude site against 10–14 from Svalbard, out of about 15 orbits · 8–12 minutes per pass above a 5–10 degree elevation mask · X-band downlinks of roughly 100 Mbps–1.2 Gbps and Ka-band up to about 2.5 Gbps · reserved ground-station-as-a-service pricing near $3 per minute narrowband and $10 wideband · on-demand pricing near $10 and $22 · a 40 MHz instantaneous bandwidth threshold dividing the two tiers.

## Regulatory and spectrum
Every antenna needs a license in the country it stands in, and that portfolio of licensed sites is the actual product a ground-station provider sells. In the US an earth station is authorized under FCC Part 25, with a separate showing under the rules covering US stations that communicate with non-US satellites, and the same pattern repeats jurisdiction by jurisdiction, which is why a provider's coverage map has gaps that have nothing to do with orbital mechanics. The spectrum itself is shared rather than exclusive. The Earth exploration-satellite downlink band at 8,025–8,400 MHz sits alongside terrestrial fixed service in most countries, so a new site has to be coordinated against existing microwave links and sometimes cannot be sited where you want it. The clearest example of what that risk looks like is C-band: when the US reallocated 3.7–3.98 GHz to terrestrial 5G, teleports that had operated there for decades had to move or filter. Government work adds a second gate, since classified missions need an accredited facility and cleared operators, which is a large part of why defense customers still build stations instead of renting them.

## Examples
KSAT operates the Svalbard and Antarctic sites that anchor polar coverage and sells passes worldwide. AWS Ground Station sells antenna-minutes with data delivered straight into a customer's cloud account. Viasat Real-Time Earth, Atlas Space Operations, Leaf Space, and RBC Signals compete on network coverage and price. NASA's Near Space Network and the Deep Space Network's 34 m and 70 m antennas are the science and exploration equivalent, and deep-space antenna time is rationed rather than sold. The instructive failure is Microsoft's: Azure Orbital Ground Station launched in 2020, was retired in December 2024, and its 10 tracking antennas were sold off to be operated by others, which is a useful signal about how thin the margins are in renting antenna time.

## Economic profile
The cost structure is a fixed asset sold by the minute, so utilization is everything. A site costs money whether or not anyone books it, its capacity is capped at roughly the number of visible passes per day, and the price per minute is set by competition, so a provider's economics come down to how many customers it can stack onto the same antenna and how many sites it can share fixed engineering across. That is a hard business, and one of the two hyperscalers that entered it exited within four years. The durable advantages are geographic and regulatory rather than technical: a licensed antenna at 78 degrees north is scarce in a way that a licensed antenna in Virginia is not. On the cost curve, software-defined modems, cheaper antennas, and cloud backhaul keep pushing the price per minute down, and optical downlink is the real threat to the wideband tier, since a laser terminal moves in seconds what an X-band pass moves in ten minutes. If you are building a satellite business, model downlink as a per-image or per-scene cost from the start, because it scales with data volume and not with the number of satellites.

## Videos

- https://www.youtube.com/watch?v=pWzDdmASlA8 — Introduction to AWS Ground Station (Amazon Web Services, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=NFucaVLza3I — Ground Stations Explained How Does Satellite Data Travel from Space to Earth (Geoawesome, 2 minutes, 5k+ views)
- https://www.youtube.com/watch?v=1tw4SmS4Pc4 — LEO Satellite Networks: Brief Introduction to Communications Challenges (Iain Explains Signals, Systems, and Digital Comms, 18 minutes, 10k+ views)

## Further reading

[State-of-the-Art of Small Spacecraft Technology: Ground Data Systems and Mission Operations (NASA)](https://www.nasa.gov/smallsat-institute/sst-soa/ground-data-systems-and-mission-operations/) · [Deep Space Network (NASA)](https://www.nasa.gov/communicating-with-missions/dsn/)
