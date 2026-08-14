---
number: 31
name: Remote and Autonomous Operation
part: 6
group: Digital & autonomy
applies: [new, retro]
emissions: small
segments: [roro, off, cont]
capex: med
maturity: early
---

## Description
A maritime autonomous surface ship (MASS) is one where software or a shore operator takes over functions a crew normally performs on board. The IMO's definition is deliberately functional: a ship counts as MASS only when autonomous or remote technology replaces or supports crew functions and the ship holds a MASS Safety Certificate, and more automation on its own does not qualify. In practice the equipment is a sensor stack (radar, AIS, cameras, lidar) feeding a situational awareness and collision avoidance system, an autopilot with track and speed control, an auto-berthing function, and a satellite or 5G link to a remote operations center ashore. The IMO adopted a non-mandatory MASS Code in May 2026, in force from 1 July 2026, which applies to cargo ships covered by SOLAS chapter I, generally over 500 GT on international voyages. The Code keeps the master responsible for the ship whether or not the master is on board, and requires the shore center to be assessed, certified and run under a safety management system. As of that adoption, the IMO's own position is that no commercially operating, internationally trading SOLAS cargo ship runs autonomously or under remote control.

## Strengths and weaknesses
The real argument for this is crew supply rather than crew cost. Japan's coastal fleet has more than half its crew over 50, the trade is unattractive, and roughly 400 inhabited offshore islands need services that are hard to staff, which is why the country funded the largest demonstration program in the world. Human error is cited in 70–80% of maritime accidents, so a system that never gets tired has a plausible safety case. Against that, the demonstrated vessels are small, short-route and heavily supervised: MEGURI2040's Stage 1 tested six vessels including the 749 GT coastal container ship SUZAKU, and Yara Birkeland carries 120 TEU on a route of about 14 km and still sails with people aboard. Removing the crew also removes the people who fix things, and a merchant ship at sea has no roadside assistance. Bandwidth and latency set the limits on what a shore operator can actually do, and the whole architecture inherits the GNSS jamming and cybersecurity problems of the systems it is built on.

## When to use
Take remote support seriously today and full autonomy only on a specific short route. If you run ferries, harbor craft or offshore support vessels on a fixed track with reliable connectivity, automated crossing and auto-berthing are commercially available and worth buying, because they cut the workload on the part of the voyage where accidents happen. If you run deep-sea tonnage, buy the shore-support version instead: a fleet operations center doing route advice, engine diagnostics and condition monitoring reduces crew workload without touching the certificate. Do not plan a crewless newbuild against the current rulebook, because the mandatory MASS Code is not expected to be adopted before 1 July 2030 and enters force on 1 January 2032, and a flag state's approval today is a case-by-case alternative-design exercise. If your interest is uncrewed vessels as a survey or defense platform rather than as cargo carriers, see the `uncrewed-systems` sheet, which covers that class in its own right.

## Key numbers
Non-mandatory MASS Code adopted May 2026, in force 1 July 2026, covering SOLAS cargo ships generally above 500 GT · mandatory Code expected to be adopted by 1 July 2030 and in force 1 January 2032 · no internationally trading SOLAS cargo ship currently operates autonomously or remotely · MEGURI2040 Stage 1 tested six vessels with five consortia from 2020 to 2022, including the 749 GT SUZAKU · Yara Birkeland carries 120 TEU on a route of about 14 km and still sails crewed · human error cited in 70–80% of maritime accidents · more than half of Japan's coastal crew are over 50.

## Examples
The IMO MASS Code, resolution MSC.595(111), preceded by the 2019 interim trial guidelines and the 2021 regulatory scoping exercise; the Nippon Foundation's MEGURI2040 program, with Stage 1 running 2020–2022 and Stage 2 from 2023 to 2026 on collision avoidance and automatic berthing, and a land-based Fleet Operation Center at Makuhari; Yara Birkeland in Norway, running Herøya to Brevik since 2022; automatic crossing systems on Norwegian ferries; remote operations centers offered by Kongsberg, Wärtsilä and ABB.

## Economic profile
Crew is a small share of a large merchant ship's total voyage cost, roughly 5–10% once fuel and capital are counted, so removing it does not transform the economics of a deep-sea trade, and the accommodation block, lifeboats and hotel systems are already built. The money is elsewhere. On a short domestic route, one crew covering two or three vessels from a shore center changes the staffing math for an operator who cannot recruit at all, which is the Japanese and Norwegian case and not a cost-cutting case. On the capital side, the sensor and autonomy package is a modest addition to a newbuild, medium rather than high, while the expensive parts are the shore center, its certification, and the redundancy needed to satisfy a flag state under an alternative-design assessment. Insurance is the quiet blocker: liability rests with a master who may be ashore, the Legal Committee is still working through which conventions need amending, and underwriters price novelty. Until the mandatory Code lands around 2032, the addressable market is domestic and short-sea tonnage under national rules, and the vendors selling into it are selling sensors and software rather than ships.

## Videos

- https://www.youtube.com/watch?v=N1A29GUqIv0 — Self-driving electric container ship sets sail in Norway - BBC News (BBC News, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=LT_xjncYEDI — Yara Birkeland Electric Container Ship Takes Maiden Voyage (Tech Inspection, 10 minutes, 10k+ views)

## Further reading

[FAQ - Autonomous shipping (International Maritime Organization)](https://www.imo.org/en/MediaCentre/HotTopics/Pages/Autonomous-shipping.aspx) · [The Nippon Foundation MEGURI2040 Fully Autonomous Ship Program (The Nippon Foundation)](https://en.nippon-foundation.or.jp/what/projects/ocean/meguri2040)
