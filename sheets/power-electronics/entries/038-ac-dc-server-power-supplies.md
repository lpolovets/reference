---
number: 38
name: AC-DC Server Power Supplies
part: 7
group: Low-voltage delivery
power: [kw]
voltage: [mains]
semiconductor: [gan, si, sic]
uses: [it]
maturity: scale
---

## Description
A server power supply turns mains AC into the low-voltage DC bus the servers actually run from, and it does it in two stages. A boost power factor correction front end rectifies the line and holds a bus near 400 V DC while drawing a near-sinusoidal current in phase with the voltage, so the supply looks like a resistor to the utility rather than a pulse load. An isolated DC-DC stage behind it, almost always an LLC resonant converter with synchronous rectification, steps 400 V down to 12 V or, in current AI racks, 48–54 V. Between the two sits the bulk capacitor, sized so the output holds up for at least 10 ms after AC disappears, which is long enough to ride through a lost cycle or a transfer between feeds. Two packages dominate: the CRPS module, a 73.5 mm wide hot-swap brick that slides into a server chassis, and the OCP power shelf, which parallels six 5.5 kW units into a 1 OU shelf feeding the rack busbar, 33 kW from one three-phase 200–480 V input.

## Strengths and weaknesses
Efficiency has moved a long way. 80 PLUS Titanium requires 96% at half load and 91% at full load for a 230 V internal redundant unit, current OCP shelf rectifiers peak near 97.5%, and CLEAResult added an 80 PLUS Ruby tier in January 2025 asking for 96.5% at half load. Raising the output voltage helps everything downstream, since going from 12 V to 54 V cuts busbar current about fourfold and resistive loss about sixteenfold, which is what keeps the busbar on a 130 kW rack to a sane cross section. The weaknesses are hold-up and light load. The bulk capacitor that buys 10 ms of ride-through is the largest component in the box and it does not shrink when the switching frequency rises, so power density stops improving there. Efficiency also falls off below about 20% load, and redundant supplies are deliberately sized for a failure that usually does not happen, so a 1+1 pair typically spends its life at 30–40% load, well left of the point where the certification measured it.

## When to use
If you are building a single server or a small fleet, use a CRPS module and stay inside the second-sourced ecosystem, since the form factor is standard and a failed unit swaps hot. If you are buying racks of one configuration above roughly 20 kW, move to an OCP-style power shelf on a 48–54 V busbar, because the shelf converts once for the whole rack instead of once per server and the busbar copper stops being the constraint. Pay for Titanium or Ruby when the load factor is high and electricity is not cheap, and skip it on a lightly loaded enterprise server that will sit at 15% load and never reach its rated efficiency anyway. If a rack passes about 100 kW, check whether rectification should leave the rack entirely and the hall should distribute DC instead. Whatever you pick, check the transient spec against the load: AI racks swing tens of kilowatts in milliseconds, and a supply qualified on a steady load will sag or trip.

## Key numbers
80 PLUS Titanium requires 96% at half load and 91% at full load on a 230 V internal redundant unit · 80 PLUS Ruby, added January 2025, asks 96.5% at half load · OCP shelf rectifiers peak near 97.5% · six 5.5 kW units per 1 OU shelf, 33 kW from one three-phase 200–480 V input · at least 10 ms hold-up after AC is lost · 12 V to 54 V cuts busbar current about fourfold and resistive loss about sixteenfold · one point of efficiency on a 100 kW rack is roughly 1.1 kW, near 9,600 kWh a year (derived here).

## Examples
Delta and Advanced Energy ORv3 HPR power shelves, six 5.5 kW units to a 33 kW 1 OU shelf; Delta's 5.5 kW unit certified to 80 PLUS Ruby; CRPS modules, the hot-swap standard across Supermicro, Dell and Intel-derived server chassis; the 80 PLUS program administered by CLEAResult; NVIDIA GB200 NVL72 racks, fed by power shelves rather than per-server supplies.

## Economic profile
What a point of efficiency is worth is easy to work out, and it is why anyone cares. Take a rack delivering 100 kW to the servers: at 95% the supplies pull 105.3 kW from the feed, at 96% they pull 104.2 kW, so one point is about 1.1 kW, which over a year is roughly 9,600 kWh, about $770 at $0.08/kWh, and closer to $1,000 once the cooling to remove that extra kilowatt is counted at a PUE of 1.25 (that arithmetic is derived here, not published). Against that the supplies are cheap: redundant server units list around $0.15–0.25 per watt, so a 33 kW shelf is a few thousand dollars sitting under accelerators that cost a thousand times more, which is why buyers argue about efficiency and reliability instead of purchase price. The efficiency came from the semiconductor. A totem-pole PFC is the efficient bridgeless front end, but it only works with a switch that has no body-diode reverse recovery, meaning SiC or GaN, and that is what took Titanium from a specialty part to the default in server supplies. Margin sits with a small group of contract power suppliers such as Delta, Advanced Energy and Lite-On, plus the device makers behind them, and hyperscale buyers hold it down by specifying an open form factor several vendors can build to.

## Videos

- https://www.youtube.com/watch?v=iRpqGF2poJM — Can You Trust 80 Plus? (Techquickie, 6 minutes, 100k+ views)
- https://www.youtube.com/watch?v=UNWGvMmUUIM — 80 PLUS Platinum | Teardown of DELL 495W Server Power Supply (ChargerLAB, 8 minutes, 5k+ views)

## Further reading

[What is 80 PLUS® certification program? (CLEAResult)](https://www.clearesult.com/80plus/program-details) · [GaN Power Devices and Converter Architectures for AI Data Centers: Efficiency, Reliability, and Deployment Pathways (arXiv)](https://arxiv.org/abs/2606.25281)
