---
number: 8
name: Private Cellular Networks
part: 2
group: Cellular networks
reach: [short, metro]
capacity: [mbps, gbps]
medium: rf
latency: sub
maturity: scale
---

## Description
A private cellular network is an LTE or 5G network with its own core, its own SIM credentials and its own spectrum, serving one organization at one set of sites. 3GPP calls it a non-public network, and there are two shapes: a standalone network with its own identity and core, and a network that shares an operator's radios or spectrum but keeps its own slice and subscriber database. The spectrum comes from a regulator that has set aside a local-licensing route rather than from an auction. In the United States that route is CBRS, 150 MHz at 3550–3700 MHz shared in three tiers: naval radar and satellite earth stations are protected incumbents, 70 MHz is sold as ten-year county-level Priority Access Licenses, and the remaining 80 MHz plus any unused licensed channels are free General Authorized Access. Nobody transmits until a Spectrum Access System, a cloud database, grants a specific channel and power level, and coastal sensors tell the database to clear channels when a Navy radar appears. Germany, the UK and Japan run similar local-license schemes in nearby bands, generally at fees measured in hundreds or low thousands of currency units per year rather than the billions an exclusive national license costs.

## Strengths and weaknesses
The strengths over Wi-Fi are scheduling and mobility rather than raw speed. Airtime is assigned by the base station instead of contended for, so latency under heavy load has a bounded tail, and handover is decided by the network in tens of milliseconds where Wi-Fi roaming is decided by the client and can stall a session for 100 ms or more, which is what breaks automated guided vehicles and remote-controlled cranes. Coverage per radio is also much larger, so an outdoor yard, a port or a mine is a handful of radios instead of dozens of access points. The weakness is on the device side, and it is decisive in ordinary buildings. Every laptop, phone and tablet already has Wi-Fi, while a private cellular endpoint needs a module costing $50–200 or a gateway box, plus a SIM to issue and manage. The second weakness is operations: Wi-Fi is an IT function with a deep labor pool, while a private network needs core operations, subscriber management, SAS coordination and RF planning, which is why most enterprises buy it as a managed service instead of running it.

## When to use
Compare the two on cost per square meter of coverage and cost per connected device, because those two numbers point in opposite directions. If the space is large, open and sparsely populated with devices, such as a port, a mine, a rail yard, a utility substation or a 50,000 m² warehouse with a few hundred vehicles, private cellular is usually cheaper, since one radio at $2,000–5,000 covering roughly 5,000–15,000 m² replaces several access points at $500–1,500 each covering roughly 1,000–2,000 m². If the space is an office full of laptops and phones, use Wi-Fi 6E, because the per-device cost of cellular dominates everything else and Wi-Fi's contention problem is not what limits an office. Pick private cellular whenever a mobile machine must not drop its session while moving, or when the application needs a latency ceiling rather than a latency average. If you only need a few hundred meters of outdoor coverage and have no radio staff, price a managed service before buying equipment, and check whether your integrator or your own team owns the core. In the United States, start on free GAA spectrum and buy a Priority Access License only if measurements show that contention is actually costing you throughput.

## Key numbers
CBRS is 150 MHz at 3550–3700 MHz in three tiers: protected incumbents, 70 MHz of ten-year county-level Priority Access Licenses, and 80 MHz of free General Authorized Access · PALs cleared about $0.21 per MHz-POP · a CBRS small cell runs $2,000–5,000 and covers roughly 5,000–15,000 m² of open indoor space · an enterprise Wi-Fi 6E access point runs $500–1,500 and covers roughly 1,000–2,000 m² · a cellular module adds $50–200 per endpoint against zero for Wi-Fi · a private core is $50,000–200,000 bought outright, or a monthly subscription · network-controlled handover takes tens of milliseconds against 100 ms or more for client-decided Wi-Fi roaming.

## Examples
FCC Part 96 CBRS with Spectrum Access Systems run by Google, Federated Wireless and others; Germany's 3.7–3.8 GHz local licenses from the Bundesnetzagentur, of which several hundred have been assigned to industrial sites; Ofcom Shared Access licenses in the UK and local 5G in Japan; the Port of Rotterdam and the Port of Hamburg; Mercedes-Benz Factory 56 in Sindelfingen and BMW's plants; mining networks at Rio Tinto and Boliden; and Nokia and Ericsson, which supply most of the equipment, alongside Celona, Betacom and the US carriers selling it as a managed service.

## Economic profile
The fixed cost is the core and the integration, and the marginal cost is a radio plus a module per device, which is the opposite shape to a public network where spectrum dominates. Local licenses are cheap by design: CBRS Priority Access cleared at about $0.21 per MHz-POP against $0.68–0.94 for exclusive mid-band, and General Authorized Access costs nothing, so spectrum stops being the barrier to entry that it is for a carrier. A core bought outright runs roughly $50,000–200,000, or a monthly subscription if somebody else runs it, and for a large industrial site the first deployment is usually integration-heavy, with the equipment often the smaller half of the invoice once RF survey, cabling, device provisioning and application work are counted. The recurring money is in the managed service rather than the hardware, which is why carriers and system integrators have chased this market harder than the equipment vendors have. Scale is the honest caveat: trade bodies count on the order of one to two thousand organizations worldwide with a deployed private network, against millions of enterprise Wi-Fi installations, and most of the deployments are in a handful of verticals where a dropped session costs real money. If a business case rests on replacing Wi-Fi generally rather than on a specific machine that cannot tolerate a roaming gap, it usually does not survive the device-cost arithmetic.

## Videos

- https://www.youtube.com/watch?v=UCLtahIJfYY — What is Private 5G? Private 5G vs. Wi-Fi (Eye on Tech, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=6n0OTiIEea8 — What is CBRS? (OnGo Alliance, 2 minutes, 10k+ views)

## Further reading

[3.5 GHz Band Overview (Federal Communications Commission)](https://www.fcc.gov/wireless/bureau-divisions/mobility-division/35-ghz-band/35-ghz-band-overview) · [47 CFR Part 96: Citizens Broadband Radio Service (Electronic Code of Federal Regulations)](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-96)
