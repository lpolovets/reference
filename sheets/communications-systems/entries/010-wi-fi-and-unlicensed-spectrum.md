---
number: 10
name: Wi-Fi and Unlicensed Spectrum
part: 2
group: Fixed & tactical wireless
reach: [short]
capacity: [mbps, gbps]
medium: rf
latency: sub
maturity: dep
---

## Description
Unlicensed spectrum is spectrum anyone may transmit in provided the equipment obeys power and behavior rules, and Wi-Fi is what most of it carries. In the United States that means about 83.5 MHz at 2.4 GHz, roughly 500 MHz usable across the 5 GHz U-NII bands, and 1,200 MHz at 5.925–7.125 GHz that the FCC opened to unlicensed use in April 2020. The 6 GHz rules show how sharing is enforced without licenses: low-power indoor devices are capped at 5 dBm per megahertz and 30 dBm total effective radiated power with no external antenna, standard-power outdoor devices may reach 36 dBm but only after an Automated Frequency Coordination database checks them against the incumbent fixed microwave links in that location, and very-low-power devices are held to 14 dBm. Access to the air is by listen-before-talk with random backoff, so every device in range shares the same airtime and nobody has a reservation. The IEEE 802.11 standards set the rest: Wi-Fi 6 added OFDMA, 1024-QAM and 160 MHz channels for a 9.6 Gbps physical-layer maximum, and Wi-Fi 7 added 320 MHz channels, 4096-QAM and multi-link operation for roughly 46 Gbps.

## Strengths and weaknesses
The spectrum is free, the silicon ships in billions of units a year, and the result is the lowest cost per bit of anything in radio: a consumer router is $80–300 and an enterprise 6 GHz access point is $500–1,500 plus $300–800 for the cable drop and the install. Range is short, 10–50 m indoors and shortest at 6 GHz, which suits a building and rules out anything else. The weakness is that listen-before-talk gives no guarantee. Throughput per device falls as devices are added because they divide the same airtime, and latency under load has a long tail with no ceiling, so a link that measures 800 Mbps in an empty office measures something else at 9 am. Real rates also sit well below the headline: media access overhead takes 30–40% of the physical-layer rate, so a Wi-Fi 6 client in the same room typically gets 300–900 Mbps and a Wi-Fi 7 client on 320 MHz gets 2–4 Gbps. And the band is shared with everything else that uses it, from Bluetooth and Zigbee to microwave ovens at 2.45 GHz, so capacity depends on who else shows up and that changes without notice.

## When to use
Use Wi-Fi as the default for anything inside a building you control, because the spectrum costs nothing, the client radio is already in every device, and the labor pool to run it is large. Move to 6 GHz when the 5 GHz band is congested and the clients support it, since 1,200 MHz of clean spectrum is the single biggest capacity upgrade available and it does not reach outside the building, which is a feature. If your application needs a latency ceiling rather than a latency average, or a machine must not lose its session while moving across a large site, use private cellular instead and accept the per-device cost. If you are covering an outdoor yard or a campus, do not try to solve it with more access points; the link budget and the contention both get worse with distance. And when you size a deployment, plan around the number of simultaneously active clients per access point rather than the coverage map, because contention rather than signal strength is what usually makes a network feel slow.

## Key numbers
About 83.5 MHz at 2.4 GHz, roughly 500 MHz usable at 5 GHz, and 1,200 MHz at 5.925–7.125 GHz opened in April 2020 · 6 GHz power limits: 5 dBm/MHz with a 30 dBm cap indoors, up to 36 dBm outdoors under Automated Frequency Coordination, 14 dBm for very-low-power devices · Wi-Fi 6 physical-layer maximum 9.6 Gbps, Wi-Fi 7 about 46 Gbps on 320 MHz with 4096-QAM · media access overhead takes 30–40% of the physical-layer rate, so 300–900 Mbps per Wi-Fi 6 client and 2–4 Gbps per Wi-Fi 7 client in the same room · range 10–50 m indoors · consumer router $80–300, enterprise 6 GHz access point $500–1,500 plus $300–800 to install · spectrum cost zero.

## Examples
FCC 20-51, the April 2020 Report and Order that opened 6 GHz, and the AFC systems now run by Broadcom, Federated Wireless, Google, Qualcomm and others; IEEE 802.11ax and 802.11be, certified by the Wi-Fi Alliance as Wi-Fi 6/6E and Wi-Fi 7, with 802.11bn aimed at reliability rather than peak rate; Europe's decision to open only the lower 500 MHz at 5945–6425 MHz, which splits the device market; and the unlicensed cellular variants LAA and NR-U, which put 3GPP scheduling into the same bands.

## Economic profile
Wi-Fi is the case where the fixed cost of spectrum is exactly zero, and almost everything about the industry follows from that. Nobody bid for the band, so nobody has to earn a return on it, and the equipment competes on volume rather than on scarcity. Chipsets come from a handful of suppliers, Qualcomm, Broadcom and MediaTek among them, at thin margins on enormous unit counts, and the money in enterprise Wi-Fi has moved from the access point to the controller, the cloud management subscription and the analytics on top. For a building owner the installed cost is dominated by cabling and labor rather than by the radios, which is why access point count, not access point price, is the number that decides a budget. The strategic value is offload: the majority of smartphone data never touches a cellular network, and every gigabyte that lands on unlicensed spectrum is a gigabyte an operator did not have to buy spectrum and sites to carry. What the free band cannot buy is certainty, so anyone whose revenue depends on a latency guarantee ends up paying for licensed or shared spectrum instead, and that boundary is where buyers choose private cellular.

## Videos

- https://www.youtube.com/watch?v=Y7OWUg_kmK4 — WiFi 6 Explained (PowerCert Animated Videos, 8 minutes, 1m+ views)
- https://www.youtube.com/watch?v=gVBEcvMHKr0 — WiFi 7 Explained (PowerCert Animated Videos, 9 minutes, 100k+ views)

## Further reading

[Unlicensed Use of the 6 GHz Band: Report and Order and Further Notice of Proposed Rulemaking, FCC 20-51 (Federal Communications Commission)](https://docs.fcc.gov/public/attachments/FCC-20-51A1.pdf) · [IEEE 802.11-2020: Wireless LAN Medium Access Control (MAC) and Physical Layer (PHY) Specifications (IEEE Standards Association)](https://standards.ieee.org/ieee/802.11/7028/)
