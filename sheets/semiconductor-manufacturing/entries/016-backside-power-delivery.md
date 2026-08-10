---
number: 16
name: Backside Power Delivery
part: 4
group: Logic transistors
devices: [logic]
node: [front]
wafer: [w300]
toolcost: high
suppliers: duo
---

## Description
Backside power delivery moves the power distribution network off the front of the die and onto the back, so signal wiring and power wiring stop competing for the same congested metal levels. On a conventional die, thick low-resistance power rails have to come down through all 15 to 20 levels of interconnect (012) and end up right on top of the transistors, in exactly the layers where signal routing is tightest. The backside version bonds the finished wafer face-down onto a carrier, grinds the silicon away from its original 775 µm until the tips of previously buried nano-through-silicon-vias are exposed, and then builds the power metal on the newly revealed back surface. Signals keep the front-side stack, power comes up from behind, and the two stop interfering. It is the clearest case on this sheet of integration rather than lithography buying a node's worth of improvement.

## Strengths and weaknesses
Intel's published PowerVia test-chip results are about 30% less IR drop, 5–10% better standard-cell utilization, and up to roughly 4% more performance at constant power. TSMC claims 8–10% more speed at the same voltage or 15–20% less power at the same speed for A16 with Super Power Rail. Those are node-sized gains from integration, not from a smaller feature. The costs are all in handling a wafer that has been made structurally fragile. Bonding adds a step and a defect source, the thinning has to stop precisely at the nano-TSV tips across 300 mm, and the resulting stack warps enough that lithography on the backside needs die-by-die overlay compensation. The thermal path also gets worse, because heat that used to leave through bulk silicon now has to cross a metal stack. The expensive failure mode is that all of this happens after the front end is complete, so a thinning or bonding excursion scraps wafers that already carry their full processing cost.

## When to use
Buy it when the design is power-delivery-limited: high-current, high-frequency CPU and GPU cores where IR drop already forces you to over-provision supply voltage, and where routing congestion in the lower metal levels is what your place-and-route team complains about. Do not buy it for low-power, analog-heavy, or thermally marginal parts, where the added process cost and the worse heat path buy nothing. TSMC's own N2X variant deliberately keeps front-side power for the highest-voltage high-performance segment, which is a useful signal that the trade is not universal. If interconnect resistance rather than power delivery is your problem, the cheaper answer is more or wider metal levels (012).

## Key numbers
Wafer thinned from its original 775 µm down to the nano-TSV tips · Intel PowerVia at about 30% less IR drop, 5–10% better standard-cell utilization, and up to roughly 4% more performance at constant power · TSMC A16 at 8–10% more speed at the same voltage or 15–20% less power at the same speed · in production on Intel 18A from November 2025 · TSMC A16 slipped from late 2026 to 2027 · Samsung SF2Z targeted for 2027.

## Supply chain
Two companies are in or near production and a third is close behind, and they share a narrow equipment base. Wafer-to-carrier bonding comes from EV Group and SUSS MicroTec, precision grinding and thinning from Disco and Okamoto with Disco holding most of that market, and the nano-TSV reveal depends on etch and CMP control from the same vendors as the rest of the back end. Backside lithography on a warped wafer is an ASML problem and an OPC problem at the same time. The awkward part is that this equipment is the same base technology advanced packaging uses for hybrid bonding (027), so leading-edge logic and packaging are now bidding for the same bonders and grinders from the same two or three suppliers, and that capacity is already tight. Nobody outside Intel, TSMC, and Samsung has both a leading-edge front end and a qualified bonding line, and there is no path to backside power without both.

## Examples
Intel demonstrated PowerVia on the Blue Sky Creek E-core test chip in 2023 and shipped it in volume on 18A from November 2025, in Panther Lake. TSMC's Super Power Rail arrives with A16, whose volume production moved from late 2026 to 2027. Samsung has SF2Z on its roadmap for 2027. imec did much of the early public work on buried power rails and nano-TSVs that all three implementations descend from.

## Economic profile
This adds steps to the most expensive wafers in the world, which is why the tool-cost tag is high. The argument for paying is straightforward: if bonding, thinning, and backside metal cost less than the next lithography generation and deliver a similar performance gain, you do it, and right now they do. The strategic argument matters more. Intel got here first and used it as the headline feature of 18A, which is the first time in a decade Intel has led on a process capability, and TSMC's slip means the gap is real for at least a year. For everyone else, the lesson is that the remaining gains at the frontier increasingly come from integration and packaging rather than from printing smaller features, and the companies that own bonding and thinning capability are positioned for both.

## Videos

- https://www.youtube.com/watch?v=fc_xzN6UErI — Intel’s Next Breakthrough: Backside Power Delivery (Asianometry, 19 minutes, 100k+ views)
- https://www.youtube.com/watch?v=hyZlQY2xmWQ — Why next-gen chips separate Data & Power (High Yield, 19 minutes, 100k+ views)
- https://www.youtube.com/watch?v=Rt-7c9Wgnds — Introducing RibbonFET and PowerVia | Intel Technology (Intel Technology, 3 minutes, 10k+ views)

## Further reading

[Backside power delivery (imec)](https://www.imec-int.com/en/articles/how-power-chips-backside) · [PowerVia Test Shows Industry-Leading Performance (Intel)](https://newsroom.intel.com/client-computing/powervia-test-shows-industry-leading-performance)
