---
number: 33
name: IP Transport and Routing
part: 7
group: Networking & operations
reach: [metro, global]
capacity: [gbps, tbps]
latency: sub
maturity: dep
---

## Description
Above the physical layer everything is packets, and the job of an IP network is to get each one to the right next hop. A router reads the destination address and looks it up in a forwarding table by longest prefix match, taking the most specific entry that matches rather than the first one. Inside a single network that table is built by OSPF or IS-IS, which know the whole topology; between networks it is built by BGP, a path-vector protocol in which each autonomous system tells its neighbors which prefixes it can reach and through which networks. About 77,900 autonomous systems were visible in the IPv4 routing system at the end of 2025, and the default-free table they collectively produce held roughly 1,040,000 to 1,050,000 IPv4 prefixes, growing by about 44,000 entries a year; the IPv6 table is near a quarter of a million entries and growing at about 27,000 a year. Those tables have to be searched once per packet, so a line card carrying 10 Tbps has tens of nanoseconds to make each decision, which is why forwarding tables live in content-addressable memory rather than ordinary RAM. Underneath all of it sits a separate optical layer that carries wavelengths between sites and knows nothing about packets, and whether the two layers should stay separate is the longest-running argument in transport network design.

## Strengths and weaknesses
The strength is that nobody has to agree on anything except reachability. Each network sets its own routing policy, prefers whichever neighbors it likes, and announces what it chooses, which is how roughly 78,000 independently owned networks interconnect with no central operator and no negotiated topology. The weakness is the same property, because BGP believes what it is told: a network that announces someone else's prefix, or passes a route learned from one provider on to another, pulls in traffic that was never meant for it. That has happened repeatedly at global scale, and Pakistan Telecom took YouTube off the internet for most of two hours in February 2008 by announcing a more specific prefix than YouTube's own. A leak through a small Pennsylvania network reached Verizon in June 2019 and took large parts of Cloudflare offline, and in October 2021 Facebook withdrew its own prefixes during a configuration change and was unreachable for about six hours. RPKI origin validation now lets a network reject an announcement from an origin not authorized to make it, which removes the simplest hijacks but says nothing about whether the rest of the path is real. The slower problem is table growth: a router bought with a million forwarding entries was comfortable in 2020 and is out of room now, and the fix is new hardware rather than a configuration change.

## When to use
If you connect to exactly one upstream provider, do not run BGP. A default route does the same work, and pulling a million-entry table into a router with one exit costs memory and buys nothing. If you connect to two or more providers, or you hold address space that has to stay reachable through either of them, run BGP and take full tables, because choosing between paths is the whole point of multi-homing. Filter every announcement you accept from a customer against a prefix list, publish route origin authorizations for the address space you hold, and drop RPKI-invalid routes; those three steps are what the MANRS program asks for and they remove most of the accidental incidents. On the layering question, put coherent pluggables straight into the router when you own the fiber, the route needs only a handful of wavelengths, and one team runs both layers. Keep a separate optical line system when the route needs dozens of wavelengths, when you want the optical layer to restore a wavelength without the routers noticing, or when the fiber is leased from someone whose line system you do not control.

## Key numbers
About 77,900 autonomous systems visible in IPv4 at the end of 2025 · default-free table of roughly 1,040,000–1,050,000 IPv4 prefixes, growing about 44,000 a year · IPv6 table near 250,000 entries, growing about 27,000 a year · tens of nanoseconds per forwarding decision on a 10 Tbps line card · 400ZR carries 400 Gbps over roughly 80–120 km of DWDM in a pluggable drawing under about 25 W · IP transit fell from over $1,000 per Mbps per month in the late 1990s to roughly $0.05–0.15 today · a 100 Gbps commitment at $0.10 works out to about $10,000 a month (derived from those two figures).

## Examples
Cisco 8000 with Silicon One, Juniper PTX with Express silicon, Arista 7800 and Nokia's FP5, which carry most core traffic between them; the OIF 400ZR implementation agreement and the OpenZR+ extension, which put coherent optics in a router faceplate; internet exchanges such as DE-CIX Frankfurt, AMS-IX and LINX; RPKI and the MANRS program, which between them define what filtering a well-run network is expected to do.

## Economic profile
Almost all of the cost is the box and the circuit, and the marginal cost of a packet is close to zero once both exist. IP transit, meaning the service of reaching everyone else, fell from over $1,000 per Mbps per month in the late 1990s to roughly $0.05–0.15 today, so a 100 Gbps commitment at $0.10 costs about $10,000 a month (derived from those two figures). Most large content traffic never pays that: it arrives settlement-free over a peering session at an exchange, where a 100 Gbps port typically runs $1,000–2,000 a month, or from a cache the content provider installed inside the access network. That leaves routers as the capital line item, and the money there has moved from custom silicon toward merchant chips, with Broadcom's Jericho and Tomahawk families now carrying a large share of ports that once required a vendor's own ASIC. The layering argument is mostly economic. A 400ZR pluggable carries 400 Gbps over roughly 80–120 km of DWDM, costs a few thousand dollars, and draws under about 25 W, against a transponder port that costs several times more, occupies a shelf and needs its own management system. What the operator gives up is the optical layer's ability to restore a wavelength on its own, and that resilience then has to be bought back at the IP layer instead.

## Videos

- https://www.youtube.com/watch?v=O6tCoD5c_U0 — BGP: Border Gateway Protocol - Computerphile (Computerphile, 16 minutes, 100k+ views)
- https://www.youtube.com/watch?v=JUpi1iULzwY — IP over DWDM: Advantages and challenges (FiberGuide - Fiber Optics | Optical Networking, 6 minutes, 1k+ views)

## Further reading

[BGP in 2025 (APNIC Blog)](https://blog.apnic.net/2026/01/08/bgp-in-2025/) · [A Border Gateway Protocol 4 (BGP-4) (RFC 4271, IETF)](https://www.rfc-editor.org/rfc/rfc4271.html)
