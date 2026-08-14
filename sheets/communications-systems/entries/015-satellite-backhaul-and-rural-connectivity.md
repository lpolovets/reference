---
number: 15
name: Satellite Backhaul and Rural Connectivity
part: 3
group: Satellite links
reach: [long, global]
capacity: [mbps, gbps]
medium: rf
latency: med
maturity: scale
---

## Description
Satellite backhaul puts the transport circuit behind a site on a satellite instead of fiber or microwave. The site itself is ordinary: a normal 4G or 5G radio, a normal core connection, and a satellite modem where the fiber handoff would be. What changes is the budget behind it, because the circuit is now metered and the capacity is shared with everyone else under the same beam. A rural cell carrying voice and light data usually needs 5 to 20 Mbps of backhaul, and a busy one 50 to 200 Mbps, so the satellite circuit and not the radio is what caps the site. Orbit decides whether the result is usable for interactive traffic: geostationary adds 550 to 650 ms to every session, medium orbit around 100 to 150 ms, and low orbit 20 to 50 ms round trip, which is why satellite backhaul went from a last resort to a mainstream option after low-orbit capacity arrived in volume. The same terminal is also sold without a cell site behind it, feeding a village Wi-Fi network, a school, or a clinic directly, and in that form it is the cheapest way to connect a place that no operator will build toward. That is a large market: the ITU counted 2.2 billion people still offline in 2025, and almost all of them live where terrestrial buildout has already been judged uneconomic.

## Strengths and weaknesses
The strength is schedule and indifference to distance. A satellite-backhauled site is live in days rather than the 6 to 24 months a fiber build takes, and the cost is the same whether the site is 5 km past the end of the fiber or 500, which is the opposite of every terrestrial option and the reason satellite keeps winning the hardest 2% of locations. The weakness is that the cost structure is inverted: almost nothing is fixed and almost everything is recurring, so a link that looks cheap to install is the most expensive megabit in the network for as long as the site exists. At $500 to $3,000 a month, ten years of service runs $60,000 to $360,000, which is more than a microwave hop at $10,000 to $50,000 costs to build and more than a fiber spur costs in many places. The other weaknesses are shared: the operator does not control who else is under the beam, so the busy-hour rate is a contract term rather than a physical property, and on a geostationary link the delay degrades voice quality and makes any chatty application feel broken. What has changed the arithmetic is price, since Euroconsult put satellite data capacity at about $260 per megabit per second per month in 2023, down 77% over five years.

## When to use
Work out the ten-year cost before the install cost. If there is line of sight to a fiber point within about 30 km, a microwave or E-band hop almost always wins on a ten-year view, and if fiber can be built at all along an existing right of way it wins by more. Use satellite when the site is genuinely unreachable, meaning an island, a mountain valley, a jungle or desert route with no corridor, or a temporary site, and when restoring service after a cut. Pick the orbit by traffic: if the cell carries voice and interactive data, use low or medium orbit and accept the newer, thinner enterprise feature set; if it carries messaging, telemetry, and overnight bulk, geostationary is fine and usually cheaper per megabit. If you are serving households rather than a cell site, compare against the subsidy available, because at roughly $30,000 per location for rural fiber, a satellite terminal is the cheaper answer at the tail of almost every program, which is what drove BEAD's shift to technology neutrality in 2025.

## Key numbers
5–20 Mbps of backhaul for a rural cell and 50–200 Mbps for a busy one · installed in days · $500–3,000 a month, so $60,000–360,000 over ten years (multiplied out here) against $10,000–50,000 to build a microwave hop · 550–650 ms round trip through geostationary orbit, 100–150 ms at medium orbit, 20–50 ms at low orbit · satellite data capacity at about $260 per Mbps per month in 2023, down 77% over five years · about $30,000 per location for rural fiber · 2.2 billion people offline in 2025.

## Examples
SES sells medium-orbit backhaul over O3b and O3b mPOWER to island and Pacific operators, and Intelsat sells CellBackhaul over geostationary capacity. Gilat and ST Engineering iDirect build the small-cell-over-satellite platforms most rural sites run on, and Kacific serves the Pacific and Southeast Asia from Ka-band geostationary capacity. Starlink is now used for cell backhaul and community gateways in the same markets. On the funding side, the US universal service fund distributes about $8B a year and BEAD put $42.45B toward unserved locations before turning technology-neutral in 2025.

## Economic profile
This entry is the clearest case on the sheet of a link with almost no fixed cost and a high marginal one, which is the inverse of fiber and the reason the two are complements rather than competitors. For the operator, the terminal and install are a few thousand dollars and the circuit is a monthly bill that never ends, so satellite backhaul is bought when the alternative is a capital project that will not be approved rather than when it is cheap. On the supply side the price has fallen fast: Euroconsult put average revenue at about $260 per megabit per second per month for data services in 2023, down 77% over five years, while the cost of supplying high-throughput capacity in North America fell from roughly $40 to about $12 per Mbps per month between 2019 and 2023. Both halves of that matter. Falling prices expanded the set of sites where satellite backhaul makes sense, and falling prices also compressed the margin of the operators selling it, which is why capacity sellers have been buying service providers and moving up into managed services. Most rural deployments are still funded by somebody other than the end customer, through a universal service levy, a national program, or a license condition, so when evaluating one of these businesses the first question is which subsidy it depends on and how long that program runs. The satellite capacity itself, meaning how many beams point where and what a spacecraft costs to build and launch, is on the space launch and satellites sheet.

## Videos

- https://www.youtube.com/watch?v=lKmCokMLqKs — Satellite Cellular Backhaul (YedaCenter, 23 minutes, 5k+ views)

## Further reading

[Measuring digital development: Facts and Figures 2025 (International Telecommunication Union)](https://www.itu.int/en/ITU-D/Statistics/Pages/facts/default.aspx) · [Broadband Equity Access and Deployment Program (BroadbandUSA)](https://broadbandusa.ntia.gov/funding-programs/broadband-equity-access-and-deployment-bead-program)
