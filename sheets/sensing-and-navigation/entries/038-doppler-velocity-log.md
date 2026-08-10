---
number: 38
name: Doppler velocity log
part: 6
group: Odometry
functions: [nav]
jamming: good
cost: med
---

## Description
A Doppler velocity log points four acoustic beams at the seabed and measures the Doppler shift of the returns to derive the vehicle's velocity over ground in three axes. Integrating that velocity gives position with drift proportional to distance travelled rather than to time, which is a much better error growth law than free inertial navigation. Coupled with an inertial unit, a DVL is the backbone of underwater navigation: the inertial unit provides attitude and short-term dynamics, and the DVL bounds its velocity error continuously.

## Strengths and weaknesses
It is the only practical way to get accurate velocity over ground underwater, where GNSS does not penetrate and dead reckoning from a propeller log is badly affected by currents. Accuracy of 0.1–0.3% of distance travelled when bottom-locked is achievable. The weaknesses are altitude and bottom conditions: the beams must reach the seabed, so bottom lock is lost above roughly 30–200 m altitude depending on frequency, and in deep water the vehicle must either fly low or switch to water-track mode, which measures speed relative to the water and therefore inherits the current error the DVL was meant to remove.

## When to use
Fit a DVL on any uncrewed underwater vehicle or submarine that needs accurate navigation, and design the mission so the vehicle can maintain bottom lock during the portions where accuracy matters. If the vehicle transits deep water far from the bottom, plan for degraded water-track performance and periodic surface GNSS fixes or acoustic positioning updates. For very long missions, pair it with a high-grade inertial unit and consider gravity or magnetic map navigation for absolute bounding, since DVL error still grows with distance.

## Key numbers
Velocity-over-ground accuracy 0.1–0.3% of distance travelled when bottom-locked · bottom lock out to roughly 30–200 m altitude depending on frequency · acoustic frequencies typically 300 kHz to 1.2 MHz, with lower frequency buying altitude at the cost of resolution · four beams in a Janus configuration · about $15k for a compact unit, well over $100k for deep-rated long-range systems.

## How it is defeated
Loss of bottom lock in deep water is the main practical limitation, and it is a physical constraint rather than an attack. Soft sediment and steep terrain degrade returns. Water-track mode is contaminated by currents. The acoustic emission is detectable by a listening opponent, which matters for covert operations. Deliberate acoustic interference is possible but rarely relevant, since the geometry required is demanding.

## Examples
Teledyne RDI Workhorse and Pathfinder DVLs, Nortek and Sonardyne units on commercial and military uncrewed underwater vehicles, the navigation suites on survey AUVs and on large military UUVs, and DVL-aided inertial systems on submarines.

## Economic profile
DVLs are a stable, moderately concentrated market serving offshore energy, hydrographic survey, and defense. Prices run from about $15k for compact units suitable for small vehicles up to well over $100k for long-range deep-rated systems. The growth driver is the expansion of uncrewed underwater vehicles for survey, infrastructure inspection, and military use, and compact low-cost DVLs aimed at small vehicles have been the main product development of the past few years.

## Videos

- https://www.youtube.com/watch?v=KsSeUXrpd08 — 5-Minute Guide to a Sonar Series: What is a Doppler Velocity Log? (China Sonar, 6 minutes, under 1k views)
- https://www.youtube.com/watch?v=WE06r6-xQKA — Doppler Speed Log (If I were a MARINER, 3 minutes, 1k+ views)
- https://www.youtube.com/watch?v=qH1Ihrq4Y9A — The Reef: Water Linked DVL A50 (Blue Robotics, 3 minutes, 5k+ views)

## Further reading

[Marine technology solutions (Teledyne Marine)](https://www.teledynemarine.com/) · [Science and technology for exploration (NOAA Ocean Exploration)](https://oceanexplorer.noaa.gov/technology/)
