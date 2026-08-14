---
number: 21
name: Passive Optical Networks
part: 4
group: Fiber networks
reach: [metro]
capacity: [gbps]
medium: fiber
latency: sub
maturity: dep
---

## Description
A passive optical network runs one fiber from a line terminal in the exchange to a splitter in the field, and from there to 32 or 64 homes, with nothing powered anywhere in between. Downstream traffic is broadcast to every terminal on the tree and each one keeps the frames addressed to it; upstream, the line terminal grants each subscriber terminal a time slot so their bursts arrive without colliding. GPON, in ITU-T G.984, carries 2.488 Gbps down and 1.244 Gbps up. XGS-PON, in G.9807.1, carries 9.953 Gbps in both directions on different wavelengths, 1577 nm down and 1270 nm up against GPON's 1490 and 1310, so the two run on the same fiber at the same time and an operator can migrate subscriber by subscriber. Above that sit the 25GS-PON multi-source agreement and ITU-T's 50G-PON. The link budget is what limits the tree: a 1:32 splitter takes about 17 dB and a 1:64 splitter about 20 dB out of a 28 dB Class B+ budget, which leaves roughly 20 km of reach.

## Strengths and weaknesses
The passive part is the point. Between the exchange and the home there is no power, no battery, no cabinet, no cooling and nothing to fail, so the outside plant has a 25-year-plus life and survives three generations of electronics without being touched. Sharing one line-terminal port and one laser across 32 homes is what brings the electronics cost per subscriber down to a fraction of the plant cost. The weaknesses follow from sharing. Capacity is shared, so a GPON tree with 32 active subscribers has about 78 Mbps each if they all pull at once, and the operator manages that with oversubscription assumptions rather than with dedicated bandwidth. The splitter is also a fault-isolation problem: a break in the feeder takes out every home behind it, and locating a fault through a splitter is harder than on a dedicated fiber. And a shared tree cannot be physically unbundled, which matters in regulatory regimes that require handing a competitor a dedicated fiber.

## When to use
If you are building residential or small-business access at scale, use XGS-PON rather than GPON now, because the outside plant is identical and the electronics are the cheap half of the build. Use a 1:32 split as the default, go to 1:64 in dense areas where the loss budget still closes and take rate is low, and drop to 1:16 where you expect heavy sustained use. If subscribers need guaranteed symmetric multi-gigabit service, or the regulator requires physical unbundling, use point-to-point Ethernet instead and accept more fiber in the feeder and one line-terminal port per subscriber. Treat 50G-PON as a later card swap rather than a reason to delay, since the same fiber and splitters carry it. Whatever you choose, design the splitter locations and fiber counts for the highest split you will ever want, because moving a splitter later means going back into the ground.

## Key numbers
GPON 2.488 Gbps down and 1.244 Gbps up; XGS-PON 9.953 Gbps symmetric · split ratios 1:32 typical, 1:64 common, 1:16 where utilization is high · 1:32 splitter about 17 dB and 1:64 about 20 dB of a 28 dB Class B+ budget, giving roughly 20 km reach · GPON at 1490/1310 nm and XGS-PON at 1577/1270 nm, so both run on one fiber · about 78 Mbps per subscriber if 32 GPON users pull at once (derived here) · outside plant life 25 years or more, across three generations of electronics.

## Examples
ITU-T G.984 for GPON, G.9807.1 for XGS-PON and the G.9804 series for 50G-PON; IEEE 10G-EPON, which dominates in Japan and among US cable operators; the 25GS-PON multi-source agreement, created because 25G arrived faster in the market than in the ITU; XGS-PON overlays across AT&T, Frontier and most large European incumbents; the US BEAD program, which put $42.45 billion toward unserved locations and made access fiber a subsidized asset class.

## Economic profile
The build cost is the trench and the electronics are an afterthought. A US fiber build runs roughly $800 to $1,500 per home passed, nearly all of it labor, permitting and restoration, against $150 to $250 of optics per subscriber, and connecting a subscriber later adds a drop, a terminal and an install visit for a few hundred dollars more. Splitting 32 ways is what produces that ratio, because one line-terminal port and one laser are amortized across 32 homes rather than bought per home. Passive plant then keeps the ratio from decaying: with nothing powered in the field there is no cabinet lease, no battery replacement cycle and no truck roll when the utility drops power, and the same fiber and splitters carry GPON, XGS-PON and 50G-PON in turn, so each capacity upgrade is a card and a customer-premises device rather than a construction project. Returns depend almost entirely on take rate. At 40% take and $60 to $70 a month against $800 to $1,500 per home passed, capital comes back over roughly 6 to 10 years, which is why fiber access is financed like infrastructure and why overbuilding a market someone else already passed rarely works: the second operator pays the same civil cost for half the subscribers.

## Videos

- https://www.youtube.com/watch?v=56bDAoYjvOw — Introduction to Passive Optical Networking (PON) (Tellabs Optical LAN Training, 7 minutes, 10k+ views)
- https://www.youtube.com/watch?v=qs80FBftFek — GPON vs. EPON vs. XGS-PON - ProLabs Podcast Clip (ProLabs, 4 minutes, 10k+ views)

## Further reading

[The FOA Reference For Fiber Optics - Fiber To The Home PON Types (Fiber Optic Association)](https://www.foa.org/tech/ref/appln/FTTH-PON.html) · [G.9807.1: 10-Gigabit-capable symmetric passive optical network (XGS-PON) (ITU-T)](https://www.itu.int/rec/T-REC-G.9807.1/en)
