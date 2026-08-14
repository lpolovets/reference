---
number: 17
name: Multilevel Converters
part: 3
group: Non-isolated converters
power: [kw, mw]
voltage: [mains, mv]
semiconductor: [si, sic]
uses: [grid, ind]
maturity: scale
---

## Description
A multilevel leg can tie its output to three or more DC potentials instead of two, so each switching edge moves a smaller step. The three-level neutral-point-clamped leg stacks four switches in series and adds two diodes that clamp the middle of the string to the DC-link center tap, so each device blocks half the bus. The T-type leg keeps two outer switches that block the full bus and adds a bidirectional pair to the midpoint, which puts fewer devices in the conduction path at low modulation. The flying-capacitor leg makes its middle level from a floating capacitor charged to half the bus, and the modulation has to keep that capacitor balanced while it does everything else. All three double the switch count against a two-level bridge, to twelve devices for three phases instead of six, and all three halve the voltage step. Halving the step cuts output harmonics enough that the filter inductor typically shrinks by a factor of two to four at the same switching frequency.

## Strengths and weaknesses
Lower-voltage devices switch faster and cost less per amp, so a three-level bridge built from 650 V parts on a 1,000 V bus can beat a two-level bridge built from 1,200 V parts on efficiency and on filter size at once; three-level PV inverters normally run 98.5–99% against 97.5–98.5% for two-level. Halving dv/dt at the output also takes pressure off motor insulation. The costs are real: twice the switches, twice the gate drivers with more isolation domains, and a neutral-point balancing problem, because low-order current drawn from the DC-link midpoint makes the two halves of the bus drift apart. The neutral-point-clamped leg also loads its inner and outer devices unevenly, which is why active NPC replaces the clamp diodes with switches to spread the heat. A flying capacitor has to be precharged before start and can fail short, and there is no graceful way to ride that through.

## When to use
Go three-level when the DC bus is above roughly 1,000 V, when the output filter or the cooling is what limits the size of the box, or when dv/dt at the motor terminals is the complaint. Below 1,000 V and under about 50 kW a two-level bridge is almost always cheaper, and doubling the device count to fix harmonics you could fix by raising switching frequency is a bad trade. Choose T-type below about 1,000 V DC at moderate switching frequency, where the short conduction path wins, and neutral-point-clamped above that, where full-bus blocking on the T-type's outer devices becomes the limit. Reach for a flying capacitor when you want more levels without extra DC-link taps, which is where recent gallium nitride designs have gone. If the level count has to keep climbing at medium voltage, stop here and look at a modular multilevel converter.

## Key numbers
3 or more output levels against 2 · 12 switches for a three-phase bridge against 6 · devices block half the bus in NPC, so 650 V parts serve a 1,000 V bus · filter inductance typically 2–4x smaller at the same switching frequency · 98.5–99% efficiency against 97.5–98.5% for two-level · usually worth it above roughly 1,000 V DC or 50 kW

## Examples
1500 V PV string and central inverters from SMA, Sungrow and Huawei, most of which use three-level T-type or neutral-point-clamped legs; Fuji Electric's AT-NPC modules built around reverse-blocking IGBTs; ABB's ACS2000 medium-voltage drive; 480 V three-level UPS, where the topology is what puts 97% efficiency within reach.

## Economic profile
Doubling the switch count sounds like doubling the cost and usually is not, because each device blocks half the voltage and silicon cost per amp falls steeply as blocking voltage drops. What does clearly rise is the gate-drive and isolation count, at roughly $1–3 per channel, plus the assembly and board area for twelve devices instead of six. The savings arrive in the passives: a filter inductor two to four times smaller is copper and core taken out of the bill of materials, and lower switching loss shrinks the heatsink behind it. A good rule of thumb is that three-level is worth it above about 1,000 V DC or above about 50 kW, and below that the extra parts do not come back. The industry's move to 1500 V utility PV is what turned this from a specialty into the default, because 1500 V cuts DC-side wiring cost and three-level is what makes 1500 V workable with 1,200 V devices.

## Videos

- https://www.youtube.com/watch?v=K8rRuTfE1TU — Multilevel Inverter (Sumit Kumar Maitra, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=hH_s3jlVPx4 — Three-Phase T-Type Inverter (Plexim, 5 minutes, 5k+ views)
- https://www.youtube.com/watch?v=pwzKAAhyTtU — Intuitive explanation of a flying capacitor three level Buck converters (Sam Ben-Yaakov, 18 minutes, 10k+ views)

## Further reading

[3-Level Modules with Authentic RB-IGBT (Fuji Electric)](https://www.fujielectric.com/products/semiconductor/model/igbt/application/box/doc/pdf/3level/MT5F30875_E.pdf) · [The Age of Multilevel Converters Arrives (Universidad de Sevilla)](https://idus.us.es/handle/11441/85471)
