---
number: 7
name: Open RAN and Disaggregation
part: 2
group: Cellular networks
reach: [metro]
capacity: [mbps, gbps]
medium: rf
latency: sub
maturity: early
---

## Description
Open RAN is an attempt to turn a base station from one vendor's product into a set of parts that different vendors can supply. A conventional gNB is a single supplier's radio, baseband and software, connected by proprietary interfaces. The O-RAN Alliance, formed in 2018, publishes specifications that cut the same box at defined seams: a 7-2x split between the radio unit and the distributed unit over an open fronthaul interface, the 3GPP F1 interface between the distributed unit and the centralized unit, and new interfaces called E2, A1 and O1 that let a RAN intelligent controller and a management system reach into scheduling and configuration. The distributed and centralized units become software running on commodity servers rather than purpose-built baseband cards. The intended result is that an operator buys radios from one company, baseband software from another, servers from a third, and adds optimization applications from a fourth. Nothing in this changes the air interface, so an Open RAN network and a conventional one look identical to a handset.

## Strengths and weaknesses
What has been proven is that the interfaces work and that a network can be built on them: Rakuten Mobile in Japan, EchoStar's Dish network in the United States and 1&1 in Germany all launched on disaggregated architectures, and EchoStar reached the FCC's 70% population coverage milestone in June 2023. What has not been proven is the saving. Rakuten claimed roughly 40% lower capital cost and 30% lower operating cost than a conventional build, and its mobile segment still posted an operating loss near ¥500 billion in 2022 with cumulative losses since launch past ¥1 trillion, so the claim has never shown up anywhere a buyer can check it. The recurring problem in brownfield networks is that integration moves from the vendor to the operator. With one supplier, that supplier owns end-to-end performance and fault isolation; with four, somebody has to own the fronthaul timing budget, the interoperability testing and the finger-pointing, and that somebody is usually the operator or a paid integrator. Feature velocity has also been slower outside greenfield networks, because a new 3GPP feature has to land in several vendors' software before it works. Energy is a real weakness too: a distributed unit running on general-purpose servers draws more power than purpose-built baseband silicon, which is why Intel, Nvidia and Marvell all sell accelerators aimed at closing that gap.

## When to use
If you are building a network from nothing, with no legacy to interwork with and no installed vendor to negotiate against, disaggregation is worth taking seriously, because that is the case where every deployment so far has actually shipped. If you are swapping radios on an existing national network, assume the bill will be integration-heavy and be explicit about who owns end-to-end performance before signing anything. If your goal is vendor diversity rather than a lower price, say so, and check whether the contract actually delivers it: AT&T's flagship open RAN agreement with Ericsson, worth up to $14 billion over five years, went to a single incumbent supplier. If you are an enterprise or a private network buyer, the disaggregation argument matters much less than it does for a carrier, since your site count is small and the integration overhead is the same. And if a vendor quotes a total cost of ownership saving, ask which parts are hardware, which are labor, and whether the comparison is against a greenfield build or against the network you already run.

## Key numbers
O-RAN Alliance formed 2018; the 7-2x fronthaul split plus the E2, A1 and O1 interfaces are the defining seams · Rakuten claimed roughly 40% lower capital cost and 30% lower operating cost · Rakuten's mobile segment operating loss peaked near ¥500 billion in 2022, with cumulative losses past ¥1 trillion · EchoStar reached the FCC's 70% population coverage milestone in June 2023 · AT&T's open RAN contract with Ericsson is worth up to $14 billion over five years to one vendor · Vodafone has committed to open RAN at 30% of its European sites by 2030, starting with about 2,500 UK sites · NTIA's Public Wireless Supply Chain Innovation Fund was appropriated $1.5 billion by the CHIPS and Science Act.

## Examples
Rakuten Mobile, which launched in April 2020 as the first national fully virtualized network and now sells its stack through Rakuten Symphony; EchoStar's Dish 5G network, built cloud-native on AWS, which hit its FCC coverage milestone in 2023 and was largely wound down in 2025 when EchoStar sold spectrum and moved subscribers onto a host network; 1&1 in Germany, which launched on Rakuten Symphony in 2023 and later added national roaming; Vodafone's UK deployment across Wales and South West England, about 2,500 sites using Samsung software on Dell servers, part of a commitment to open RAN at 30% of its European sites by 2030; Deutsche Telekom's O-RAN Town in Neubrandenburg; and the AT&T and Ericsson agreement of December 2023, the largest open RAN contract signed to date.

## Economic profile
The global RAN equipment market is roughly $35–45 billion a year, and the case for Open RAN is that opening the interfaces lets new suppliers take a share of it and drives prices down for everyone. So far Open RAN sits somewhere near a tenth of RAN revenue, and most of that is single-vendor open RAN, meaning an incumbent's own equipment that happens to support the interfaces. That distinction is where the money went: the incumbents captured the demand for openness without giving up the account. The reason is that hardware is the low-margin part of a base station. Radios are increasingly a manufacturing business, while the margin sits in scheduler software, the integrated system and now the RAN intelligent controller, all of which the incumbents still own. Public money has been used to change this, with $1.5 billion appropriated to NTIA's Public Wireless Supply Chain Innovation Fund and a UK target of 35% of national mobile traffic over open RAN by 2030, and both are better read as industrial policy about supply chain concentration than as a cost argument. For a buyer, the honest summary is that disaggregation has demonstrably worked in greenfield networks with cloud-native operations teams, and has so far cost brownfield operators more in integration and slower features than it has returned in equipment discounts.

## Videos

- https://www.youtube.com/watch?v=UteidGTgPC0 — Virtualized RAN, Cloud RAN, and Open RAN: Making Sense of the 5G RAN Alphabet Soup (WoodrowWilsonCenter, 6 minutes, 50k+ views)
- https://www.youtube.com/watch?v=-EDjqsvRxlI — What the @#$% is OpenRAN? And is it really open? (Michael MacDonald, 4 minutes, 50k+ views)

## Further reading

[Understanding O-RAN: Architecture, Interfaces, Algorithms, Security, and Research Challenges (arXiv / IEEE Communications Surveys & Tutorials)](https://arxiv.org/abs/2202.01032) · [Open Radio Access Network Security Considerations (NSA and CISA)](https://www.cisa.gov/sites/default/files/publications/open-radio-access-network-security-considerations_508.pdf)
