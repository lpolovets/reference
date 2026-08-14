---
number: 25
name: Waste Heat Reuse
part: 5
group: Heat rejection & water
density: [med, ext]
where: [hyper, colo]
water: none
retrofit: hall
maturity: est
---

## Description
A data center converts almost all the electricity it draws into low-grade heat, and normally throws it away. Heat reuse captures it instead and sells it, usually into a district heating network. Air-cooled halls produce 30–40 °C return air, which is too cool to use directly and needs a heat pump to lift it to the 60–80 °C a network wants. Liquid cooling changes this materially: a direct-to-chip return at 45–50 °C needs far less lifting, and some networks now accept it with a small heat pump or none at all.

## Strengths and weaknesses
The heat exists whether or not anyone uses it, so the marginal carbon benefit of displacing a gas boiler is real and the revenue, while modest, is genuine. In cities with existing district heating this is a straightforward commercial arrangement. The obstacles are geography and mismatch. A network has to exist within a few kilometers, the operator has to want a supply whose availability depends on someone else's business, and heat demand is seasonal while the data center runs flat. Contracts also constrain the data center's own operation, since it must now keep return temperature within the network's specification.

## When to use
Pursue heat reuse where a district network exists nearby and the local regulator or planning authority values it, which describes most of northern Europe. It fits liquid-cooled facilities much better than air-cooled ones, so it belongs in the design conversation when a hall is converting anyway. Do not build a business case around the heat revenue; it is small next to compute revenue. Treat it as a planning and community asset, since in several jurisdictions offering heat has become part of getting permission to build at all.

## Key numbers
Nearly all electricity drawn becomes low-grade heat · air-cooled return air at 30–40 °C needs a heat pump to reach the 60–80 °C district networks want · liquid-cooled return at 45–50 °C needs far less lift · viable only within a few kilometers of an existing network · heat demand is seasonal while data center output is constant.

## Examples
Google's heat recovery project in Hamina, Finland, feeding a local network; Fortum's Espoo scheme taking heat from Microsoft datacenters; Stockholm Data Parks, which built the model; Danish and Dutch planning rules that now expect heat reuse from new facilities.

## Economic profile
Two capital items decide this: the heat pump that lifts return temperature to what the network wants, and the pipe run to the connection point. Pipe cost scales with distance, which is why the practical limit is a few kilometers and why a site outside that radius does not improve with a bigger heat pump. Lift is the recurring cost, so air-cooled return at 30–40 °C against a 60–80 °C network target is the expensive case and liquid-cooled return at 45–50 °C is the cheap one. Heat revenue is small next to compute revenue either way, so it should not carry the business case. The value that does appear is in permitting: Danish and Dutch rules now expect heat reuse from new facilities, so the connection is part of the price of building at all. If a hall is being converted to liquid cooling anyway, price the connection then, since adding it later means opening the plant a second time.

## Videos

- https://www.youtube.com/watch?v=NRQExK4mZrI — Finland’s Big Idea: Turning Data Center Waste Into Heat (Bloomberg Television, 11 minutes, 100k+ views)
- https://www.youtube.com/watch?v=YUmFQM4jvD8 — Google’s first-ever heat recovery project for neighbourhoods in Finland (Google, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=9V31a4QBDxY — Waste heat from data centres (Fortum, 2 minutes, 1k+ views)

## Further reading

[AI: Five charts that put data-centre energy use - and emissions - into context (Carbon Brief)](https://www.carbonbrief.org/ai-five-charts-that-put-data-centre-energy-use-and-emissions-into-context) · [Data center waste heat for district heating networks: A review (Renewable and Sustainable Energy Reviews, via Aalto University)](https://research.aalto.fi/en/publications/data-center-waste-heat-for-district-heating-networks-a-review/)
