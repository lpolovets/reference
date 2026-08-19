---
number: 7
name: "Industrial Ethernet"
part: 2
group: "Fieldbus and Ethernet"
layer: field
industries: [disc, proc, hybrid, log, bldg]
determinism: ms10
lockin: multi
maturity: std
---

## Description
Industrial Ethernet carries control traffic over standard Ethernet hardware using protocols that add the determinism plain Ethernet lacks. PROFINET and EtherNet/IP are the two largest, and both run over ordinary cable and switches while defining how cyclic control data is scheduled and prioritized against everything else on the wire. The practical significance is that the control network and the plant's other networks use the same physical technology, so the same cable, connectors, and diagnostic tools serve both, and a controller can be reached from the business network without a protocol gateway in between.

## Strengths and weaknesses
The strengths are bandwidth, distance, diagnostics, and the size of the supplier ecosystem. A device on industrial Ethernet reports its own health in a form a maintenance system can read, which is the largest practical improvement over serial fieldbus. The weaknesses follow from the same convergence: a control network reachable from the business network is reachable by whatever else is on the business network, and the flat architectures that resulted are the subject of most industrial cybersecurity guidance. Determinism also depends on configuration, so a switch replaced by a general-purpose one can quietly break timing.

## When to use
Use it as the default for new discrete and hybrid automation, and for connecting controllers to supervisory systems in any industry. Choose a specifically deterministic protocol where the application needs coordinated motion, since the general industrial Ethernet protocols are comfortable at machine cycle times and not at motion update rates. Segment it from business networks deliberately rather than relying on the convenience that made it attractive, and specify switches that support the protocol's timing features rather than assuming any switch will do.

## Key numbers
100 Mbit/s typical at the device level with gigabit uplinks, against a few megabits on serial fieldbus · cycle times comfortably in the 1–10 ms range for machine control · standard cable, connectors and switches, so tooling and spares are commodity items · device-level diagnostics reported in a form maintenance systems can consume · determinism dependent on switch configuration, which is a common cause of intermittent faults.

## Examples
PROFINET and EtherNet/IP together account for most new installations, split largely along regional and vendor lines. Modbus TCP occupies the low end, being simple enough to implement on anything, and every major controller family supports at least one of the three natively.

## Economic profile
Convergence on Ethernet moved control networking from specialist components to commodity ones, and cable, connectors, and switches are correspondingly cheaper than the fieldbus equivalents they replaced. The saving that matters more is engineering: one physical network with one set of tools and one skill set costs less to install and far less to maintain than several parallel networks. The cost that arrived with it is security, which is a real ongoing expense that was largely absent when control networks were physically separate and spoke a protocol nothing else understood.

## Further reading
[EtherNet/IP technology overview (ODVA)](https://www.odva.org/technology-standards/key-technologies/ethernet-ip/) · [PROFINET and PROFIBUS technology (PI)](https://www.profibus.com/technologies/profinet)
