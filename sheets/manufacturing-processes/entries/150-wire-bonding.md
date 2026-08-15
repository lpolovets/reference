---
number: 150
name: "Wire bonding"
part: 3
group: "Electronics Packaging & Assembly"
materials: [semi]
volumes: [high, cont]
tooling: low
---

## Description

Fine gold, copper, or aluminum wire is bonded between a die and package using ultrasonic energy, heat, pressure, or combinations of them.

## Strengths and weaknesses

Mature, flexible, inexpensive, and well understood. Adds electrical inductance and package height and is limited at extreme interconnect density.

## When to use

Wire bonding is the default die-to-package interconnect for cost-sensitive and moderate-pin-count devices (analog, sensors, LEDs, MEMS), and heavy aluminum wire is still standard in power modules. It needs no wafer bumping, and a routing change takes a program edit rather than a new mask. Move to flip-chip when pin counts run into the high hundreds, when interconnect inductance limits high-frequency or high-current performance, or when package height is critical.

## Key numbers

Wire 15–50 µm gold or copper for ball bonding, 100–500 µm aluminum in power modules · 10–20 wires per second on production bonders · pad pitch down to about 35 µm at 100–300 µm loop height · thermosonic bonding at 125–175 °C with ultrasonic drive near 60 kHz · loop inductance roughly 1 nH per mm of wire · bonders $100k–300k.

## Examples

Analog ICs, sensors, LEDs, MEMS, power devices.

## Economic profile

Bonders at $100–300k placing 10–20 wires per second make cost per wire very low, which is why wire bonding stays the default interconnect for most packages despite being the oldest method available. The economics turn on the wire itself: gold prices pushed the industry to copper, which bonds harder and needs tighter process control, so part of the material saving came back as yield and equipment cost. Bond count per package is the real driver.

## Videos

- https://www.youtube.com/watch?v=tp_Yv0cyvFw — Wirebonding Overview Animation (Semitracks Inc., 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=mvZ1dJuvenw — Wire Bonding Basics - Manual Wedge Bonding ICs (Sam Zeloof, 13 minutes, 100k+ views)
- https://www.youtube.com/watch?v=Xt0So1S76L0 — WIRE BONDING (PART 1) (WATCH LEARN  'N PLAY, 16 minutes, 50k+ views)

## Further reading

[Wire Bonding: Ball and Wedge Processes (Semiconductor Digest)](https://sst.semiconductor-digest.com/2000/04/wire-bonding/)
