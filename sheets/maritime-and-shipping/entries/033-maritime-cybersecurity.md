---
number: 33
name: Maritime Cybersecurity
part: 6
group: Digital & autonomy
applies: [retro, ops]
emissions: none
segments: [cont, bulk, tank, gas, roro, off]
capex: low
maturity: grow
---

## Description
Cyber risk became a shipboard compliance item through the safety management system rather than through a separate rule. IMO Resolution MSC.428(98) requires cyber risks to be addressed in the company's safety management system, checked at the first annual verification of the Document of Compliance after 1 January 2021, with the practical detail left to the guidelines in MSC-FAL.1/Circ.3. The exposure on a ship is operational technology, not the office network: ECDIS, radar, AIS, the voyage data recorder, GNSS receivers, the engine alarm and monitoring system, and propulsion, steering and cargo control. Much of that equipment runs old embedded Windows on a flat network with no segmentation, and takes chart and software updates from a USB stick or a service engineer's laptop, which are the two ingress paths that show up in real incidents. The buses between the boxes make it worse, because NMEA 0183 and NMEA 2000 carry position and heading with no authentication at all, so anything on the wire is believed. IACS unified requirements E26 and E27 push a fix into newbuilds by requiring cyber resilience of the ship and of individual equipment for ships contracted from 1 July 2024, which means the existing fleet is covered only by the management-system rule.

## Strengths and weaknesses
The rules are cheap to satisfy on paper and hard to satisfy in fact, because an audit checks that procedures exist while the vulnerability is in twenty-year-old equipment nobody will replace before scrapping. The incidents that have actually cost money were IT, not OT: Maersk's NotPetya infection in 2017 ran to roughly $250–300M and took about 45,000 PCs and 4,000 servers to rebuild, and the Port of Nagoya ransomware attack in 2023 stopped container handling for about two days. Nothing public has yet grounded or sunk a ship through compromised shipboard control systems, so the honest risk ranking puts shoreside ransomware first and OT compromise second. The routine operational problem is GNSS: jamming and spoofing are now everyday conditions in the eastern Mediterranean, the Black Sea, the Gulf and the Strait of Hormuz, the Baltic near Kaliningrad, and around the Korean peninsula, and the bridge sees a position that jumps, an AIS track that puts the ship inland, and an autopilot disagreeing with the gyro. That is not an attack on any one ship and there is no patch for it, which is why the mitigations are procedural rather than technical.

## When to use
Do the safety-management-system work first, because it is the audit item and it forces an inventory of what is actually on the ship's networks. Then segment: put the bridge and engine networks behind a boundary from crew wifi and the business network, since a flat network turns one infected laptop into a bridge problem. Control the two ingress paths that matter, which are removable media and vendor remote access, before buying any detection product, because a monitoring service on an unmapped network reports noise. If the ship trades in a spoofing region, train the bridge team to cross-check GNSS against radar parallel indexing and visual bearings and to log the event, since multi-constellation receivers and inertial aiding reduce the problem without removing it. And if you are specifying a newbuild, ask for E26 and E27 compliance in the shipbuilding contract, because retrofitting segmentation and secure update paths into a delivered ship costs several times what designing them in does. None of this is expensive by shipping standards: a risk assessment runs $10,000–30,000 per ship, segmentation hardware and engineering $20,000–60,000, and a managed monitoring service $5,000–20,000 per ship per year, so the decision is about sequencing rather than budget.

## Key numbers
MSC.428(98) applies from the first Document of Compliance verification after 1 January 2021 · IACS UR E26 and E27 for ships contracted from 1 July 2024 · cyber risk assessment typically $10,000–30,000 per ship · segmentation and hardware $20,000–60,000 per ship · managed monitoring $5,000–20,000 per ship per year · Maersk's 2017 NotPetya loss roughly $250–300M and about 45,000 PCs rebuilt

## Examples
IMO Resolution MSC.428(98) and the guidelines in MSC-FAL.1/Circ.3; IACS unified requirements E26 and E27; the industry Guidelines on Cyber Security Onboard Ships published by BIMCO, ICS and other associations; the US Coast Guard's 2025 cybersecurity rule for US-flagged vessels and regulated facilities; the 2017 NotPetya infection of Maersk and the 2023 Port of Nagoya ransomware shutdown.

## Economic profile
The whole program is small money against the asset, which is exactly why it is treated as compliance rather than as an investment case. A risk assessment runs $10,000–30,000 per ship, segmentation hardware and the engineering behind it $20,000–60,000, and a managed monitoring service $5,000–20,000 per ship per year, against a ship worth $50–200M. Nobody buys it on expected loss, because the loss distribution is one large shoreside event every few years rather than a steady drip, and the 2017 Maersk figure of $250–300M is the only public number large enough to anchor on. The demand actually comes from audits and vetting: flag and class check the management system, tanker charterers check it through TMSA, dry bulk charterers through RightShip, and hull and war-risk policies now carry cyber exclusions that make the coverage question explicit. Vendors sell managed detection and response by the ship-year, which suits a fleet operator with no security staff and produces a recurring revenue line that scales with fleet size rather than with risk.

## Videos

- https://www.youtube.com/watch?v=ctw9ECgJ8L0 — Spoofing on the High Seas (Texas Engineering, 2 minutes, 500k+ views)
- https://www.youtube.com/watch?v=luCCz5wg7UM — Maritime Transportation System Cybersecurity: An Overview (1/3) (NCyTE Center, 19 minutes, 5k+ views)

## Further reading

[Maritime cyber risk (IMO)](https://www.imo.org/en/OurWork/Security/Pages/Cyber-security.aspx) · [Raising Awareness on Cyber Security of ECDIS (TransNav, the International Journal on Marine Navigation and Safety of Sea Transportation)](https://www.transnav.eu/files/Raising_Awareness_on_Cyber_Security_of_ECDIS,894.pdf)
