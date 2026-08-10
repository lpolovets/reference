---
number: 18
name: Gallium
part: 4
group: Byproduct minor metals
use: [semi, aero]
refining: mono
substitution: poor
volatility: vhigh
---

## Description
Nobody mines gallium. Bauxite carries it at an average of about 50 parts per million, and during Bayer-process alumina refining it accumulates in the recirculating caustic liquor, where it can be stripped out with an ion-exchange resin or a solvent-extraction circuit bolted onto the refinery. A smaller amount comes from zinc-processing residues. The output is low-purity primary gallium, which is then zone-refined and crystallized to 6N or 7N before it is any use in a semiconductor. That means gallium supply is set by aluminum economics and by who chose to install a recovery circuit, not by gallium demand. World primary production was around 900 tonnes in 2025 against installed capacity near 1,700 tonnes, so the constraint is not geology at all — it is which refineries bother to run their gallium circuits.

## Strengths and weaknesses
Gallium's value comes from its compounds. Gallium nitride has a wide bandgap, high breakdown field, and high electron mobility, so a GaN power transistor switches faster and runs hotter than a silicon MOSFET, which is why fast chargers, data-center power supplies, and RF power amplifiers moved to it. Gallium arsenide has direct-bandgap optical properties and very high electron mobility, which makes it the substrate for laser diodes, high-efficiency multijunction solar cells, and the transmit-receive modules in AESA radar. The weakness is that the whole category is a byproduct: a price spike raises recovery rates at existing refineries but opens no new mines, and the response time is however long it takes to build and commission a recovery circuit. Purity is also a separate industry from production, so having gallium metal is not the same as having semiconductor-grade gallium.

## When to use
Design with GaN when switching frequency, power density, or thermal headroom decides the product — chargers, onboard vehicle chargers, data-center power delivery, and RF above a few gigahertz. Use silicon instead where you can afford the efficiency and size penalty and want a supply chain with no policy overhang; silicon superjunction and IGBT parts still win on cost in most sub-kilowatt applications. Use silicon carbide instead when you need high voltage and high current in traction or grid inverters, where SiC has better thermal and breakdown behavior and a different supply chain. For radar, electronic warfare, and satellite solar there is nothing to switch to at high frequency and high power, so the correct response is inventory and qualified second sources rather than a materials study. If you are a Western buyer, price your GaN and GaAs content off the Rotterdam number, not the Chinese one.

## Key numbers
World primary production about 900 t in 2025 against roughly 1,700 t of installed capacity · China roughly 99% of primary low-purity output, with Japan and Russia the only other producers · bauxite carries gallium at about 50 ppm · Rotterdam assessments ran roughly $2,100/kg in early 2026 and about $2,270/kg in August 2026, against Chinese domestic prices around $235–280/kg · US average import unit value about $580/kg in 2025, up roughly 30% on 2024 · integrated circuits took about 73% of US gallium consumption and optoelectronics about 26%.

## Chokepoint
Recovery from Bayer liquor, and it is as concentrated as anything on this sheet: China accounts for roughly 99% of world primary low-purity gallium, with about 1,600 tonnes of the world's 1,700 tonnes of capacity. Japan and Russia together make under 10 tonnes a year. Gallium was the first material China put under export licensing, in August 2023, followed by an outright ban on exports to the United States in December 2024 and a one-year suspension of that ban announced in November 2025 and running to late November 2026. Licensing did not stop material moving; it split the market. In 2026 gallium traded around $2,100–2,270/kg in Rotterdam against roughly $235–280/kg inside China, a gap of eight times or more for the same metal at the same purity, which is a policy price rather than a production cost. The Western alternative is unusually tractable on paper and unusually slow in practice. Most large alumina refineries could recover gallium, and several used to: Germany stopped in 2016, Hungary in 2015, Kazakhstan in 2013, all because it was uneconomic against Chinese supply. Projects have been announced in Australia, Canada, Greece, Kazakhstan, and Korea; the US Department of Energy put up as much as $6 million for research in September 2025 and the Department of War awarded $29.9 million in November 2025 for a Louisiana recovery demonstration plant. Call it 2–4 years to first metal at any single refinery, and longer to reach the purity semiconductor customers need.

## Examples
Chinese alumina refiners operated by Chalco and Hongqiao supply most of the world's primary gallium. Downstream, Wolfspeed, Infineon, Navitas, and Power Integrations sell GaN power devices; Qorvo and Macom sell GaN RF; Raytheon and Northrop Grumman build the GaN AESA arrays in current radar programs. Azur Space and Rocket Lab's Solaero make GaAs multijunction space solar cells. In the US, the only current gallium refining is a single facility in New York that upgrades imported low-purity metal and new scrap; the Department of War's November 2025 award funds a demonstration plant in Louisiana recovering gallium and scandium from industrial waste.

## Economic profile
This is a tiny market in dollars — world primary output at Rotterdam prices is on the order of a couple of billion dollars a year, and at Chinese domestic prices a small fraction of that. Nothing about the price is set by the cost of production, which is a marginal add-on at a refinery that is already running. The two-tier price is the economics: a Western device maker's cost is the Rotterdam number, set by export policy, while a Chinese competitor buys at the domestic number. That gap is a durable cost disadvantage for any device whose bill of materials is gallium-heavy, and it is the strongest argument for Western recovery capacity that exists. The catch is that recovery only pencils out while the gap persists, and the gap can be closed by a policy decision in Beijing faster than a plant can be built, which is exactly why the projects being funded now carry government money rather than private offtake. If you are underwriting one, the question is whether the offtake survives a scenario where Chinese export licensing is lifted entirely.

## Videos

- https://www.youtube.com/watch?v=J4XU-QxXJMw — China's Gallium & Germanium Export Controls (Asianometry, 15 minutes, 100k+ views)
- https://www.youtube.com/watch?v=AYttFnryznM — Is gallium nitride the silicon of the future? (Verge Science, 6 minutes, 100k+ views)
- https://www.youtube.com/watch?v=3aSLZDep7dM — The Gallium Nitride Revolutions (Asianometry, 15 minutes, 100k+ views)

## Further reading

[Gallium, Mineral Commodity Summaries 2026 (USGS)](https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gallium.pdf) · [Gallium, Professional Paper 1802-H (USGS)](https://pubs.usgs.gov/pp/1802/h/pp1802h.pdf)
