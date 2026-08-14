---
number: 9
name: Fixed Wireless Access
part: 2
group: Cellular networks
reach: [metro]
capacity: [mbps, gbps]
medium: rf
latency: low
maturity: scale
---

## Description
Fixed wireless access sells home broadband over a mobile network. A customer gets a gateway, a small indoor or window-mounted box holding a 5G modem and a directional antenna, registers it against a street address, and the operator serves it from the same mid-band sector that serves phones. Nothing about the radio link is special: it is ordinary 5G NR, usually on 2.5 GHz or C-band with 64-antenna radios, and the gain comes from the gateway sitting still in a known direction, which lets the base station hold a narrow beam and a higher modulation than it could to a phone in a pocket. The large operators advertise plans mostly in the 100–400 Mbps range at $50–70 a month, the FCC's weighted mean maximum advertised download speed for residential fixed wireless was about 112 Mbps at the end of 2023, and the weighted mean price was $51.28 a month against $93.91 for cable. One-way latency runs 10–30 ms, so a round trip is typically 25–50 ms, which is worse than fiber and far better than a geostationary satellite.

## Strengths and weaknesses
The strength is that almost the entire cost was already paid for something else. The spectrum was bought at auction, the sites were leased and built, and the radios were installed to carry phones, so a new subscriber costs a $200–400 gateway that the customer plugs in themselves. That is why US residential terrestrial fixed wireless connections went from 1.96 million at the end of 2020 to 6.80 million at the end of 2023, roughly 247% growth, while cable's residential connections peaked at 74.6 million in 2021 and fell to 73.4 million by 2023. That took fixed wireless to about 6% of all US fixed residential connections, and 84% of the population could buy it by the end of 2023, 43% of them at 100 Mbps or better. The weakness is on the same page of the same report: the FCC notes plainly that fixed wireless providers do not have enough capacity to connect all their potential subscribers at once. A fixed wireless household uses on the order of 400–700 GB a month against 20–30 GB for a smartphone, so one line consumes what fifteen to thirty phones do, and operators sell it sector by sector only where a sector has headroom. Mobile traffic keeps growing on its own, so that headroom shrinks whether or not any new fixed wireless customers are added, and the fixed wireless traffic is usually deprioritized behind mobile, which means peak-hour speeds fall for those users first.

## When to use
As a consumer or a small business, take it when cable or fiber is expensive or absent at your address, your household is not streaming several 4K feeds at once, and you can tolerate speeds that vary by hour. Avoid it if you need a consistent upload rate for video calls all day, because the time-division duplex frame gives uplink only about a fifth of the airtime. As an operator, sell it where sectors have spare capacity and stop when they do not, and treat it as a way to monetize idle inventory rather than as a broadband product with its own capacity plan. If your coverage plan needs fixed wireless to carry a large share of households in a dense market, price the extra spectrum, sectors and fiber offload that would take, because that is the same construction bill everyone else pays. For rural subsidy programs, fixed wireless is now competing directly with fiber and satellite, since the $42.45 billion BEAD program turned technology-neutral in 2025 and moved money away from fiber toward whatever covers a location cheapest.

## Key numbers
US residential terrestrial fixed wireless connections 1.96 million in 2020 to 6.80 million in 2023, about 247% growth · cable residential connections peaked at 74.6 million in 2021 and fell to 73.4 million in 2023 · fixed wireless was about 6% of US fixed residential connections at the end of 2023 · plans mostly 100–400 Mbps at $50–70 a month, weighted mean maximum advertised download 112 Mbps, weighted mean price $51.28 a month against $93.91 for cable · gateway $200–400, self-installed, against $800–1,500 per home passed for fiber · a fixed wireless household uses 400–700 GB a month, fifteen to thirty times a smartphone · 84% of the US population had fixed wireless available at the end of 2023, and 43% at 100 Mbps or better.

## Examples
T-Mobile 5G Home Internet and Verizon 5G Home, which between them reported roughly 11 million subscribers at the end of 2024 and have publicly targeted 20 million or so by 2028; AT&T Internet Air; the older unlicensed-band WISP industry serving rural America, which is what "terrestrial fixed wireless" mostly meant before 2021; Reliance Jio AirFiber in India, which added millions of connections within two years of launch; and the FCC Urban Rate Survey and Form 477 subscription data, which are the two public datasets the market share numbers come from.

## Economic profile
This is the best unit economics in US broadband and the reason is that the fixed cost is somebody else's. Fiber costs $800–1,500 per home passed plus $150–250 of optics per subscriber and returns its capital over roughly 6–10 years at a 40% take rate. Fixed wireless costs a gateway and a self-install, so the payback on an incremental subscriber is a few months at $50–70 a month, and every dollar after that lands on spectrum and sites that were already going to be paid for. The catch is that this is inventory, not capacity. The operator is selling airtime that phones were not using, and each fixed wireless line displaces roughly twenty phone lines' worth of it, so once a sector fills the choice is to stop selling, buy more spectrum, split the sector, or push traffic onto fiber. That is why the same operators now forecast a ceiling in the low tens of millions of subscribers rather than a cable replacement, and why several of them have started buying or building fiber alongside it. Cable's response has been to sell mobile service back over an MVNO, so the two industries are now each reselling the other's spare capacity. For an investor the question to ask is not what fixed wireless costs today but how many quarters of sector headroom the operator has left in its densest markets.

## Videos

- https://www.youtube.com/watch?v=9qHb6hQTGtk — Is 5G Home Internet BETTER Than Fiber? (Techquickie, 6 minutes, 500k+ views)
- https://www.youtube.com/watch?v=4W1rLYoODaY — 5G Course - Fixed Wireless Access (FWA) Cases Advantages and Disadvantages (5G Understanding, 14 minutes, 5k+ views)

## Further reading

[2024 Communications Marketplace Report (Federal Communications Commission)](https://docs.fcc.gov/public/attachments/FCC-24-136A1.pdf) · [U.S. - The Rise of 5G FWA & The Battle for Fixed Broadband Customers (Ookla)](https://www.ookla.com/articles/fixed-wireless-access-us-q3-2023)
