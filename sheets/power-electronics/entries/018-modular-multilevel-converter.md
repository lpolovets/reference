---
number: 18
name: Modular Multilevel Converter
part: 3
group: Non-isolated converters
power: [mw]
voltage: [mv, hv]
semiconductor: [si]
uses: [grid]
maturity: comm
---

## Description
A modular multilevel converter builds each of its six arms from a series string of identical submodules, and each submodule is a half-bridge with its own DC capacitor. Inserting a submodule adds its capacitor voltage to the arm and bypassing it adds zero, so the arm voltage is a staircase with as many steps as there are submodules. A high-voltage DC converter station typically runs 200–400 submodules per arm at 1.6–2.8 kV each, built from 3.3 kV or 4.5 kV IGBTs, and the resulting waveform is close enough to a sinewave that no AC harmonic filter is fitted. Each device switches only a few times per fundamental cycle, on the order of 100–200 Hz, so switching loss is small and a station typically loses about 1% of throughput against roughly 1.6% for the two-level voltage-source stations it displaced. The capacitors are the bulk of the machine: holding cell voltage ripple near 10% takes roughly 30–40 kJ/MVA of submodule capacitor energy. Arm inductors limit circulating current between arms and slow the rise of DC-side fault current.

## Strengths and weaknesses
Scaling to a new voltage means changing the cell count rather than redesigning the valve, which is why this topology took over voltage-source HVDC within about five years of the 400 MW Trans Bay Cable scheme in 2010. The output needs no AC filter, switching loss is low, and a few percent of spare submodules per arm let a failed cell be shorted out and bypassed so the station keeps running until the next planned outage. The weaknesses are volume, control and DC faults. Capacitors and the valve hall dominate footprint and cost, thousands of cells each need voltage measurement and a fiber link back to the controller, and a half-bridge cell cannot block a DC-side short circuit because fault current flows through the freewheeling diodes whatever the gating says. Blocking DC faults takes full-bridge or hybrid cells, which roughly double the device count and add on the order of 30% to converter loss.

## When to use
For voltage-source HVDC above about 100 MW there is no serious competitor, so the real question is which cell type. Use half-bridge cells for cable schemes, where a DC fault is rare and AC breakers can clear it, and full-bridge or hybrid cells for overhead DC lines and multi-terminal DC grids, where the converter has to interrupt the fault itself. Use a modular multilevel converter at medium voltage for STATCOMs and large drives when the level count you need would force too many series devices in a neutral-point-clamped or flying-capacitor leg. Below a few megawatts, do not: the per-cell controller, the fiber and the capacitor volume are overhead a two-level or three-level bridge avoids entirely. If the open question is whether to build HVDC at all, that is a network planning decision rather than a converter one.

## Key numbers
200–400 submodules per arm at 1.6–2.8 kV each · built from 3.3 kV or 4.5 kV IGBTs · roughly 30–40 kJ/MVA of submodule capacitor energy at about 10% cell voltage ripple · each device switches at roughly 100–200 Hz · station loss about 1% against 1.6% for two-level voltage-source HVDC · no AC harmonic filter fitted

## Examples
Trans Bay Cable, the 400 MW ±200 kV link into San Francisco that was the first modular multilevel HVDC scheme in 2010; the 2 GW ±525 kV converter stations being built for the German offshore grid connections; Siemens Energy HVDC PLUS, Hitachi Energy HVDC Light and GE Vernova's platforms; transmission-voltage STATCOMs built from the same cells.

## Economic profile
Converter stations for voltage-source HVDC run on the order of $100–200/kW, and within that the semiconductors are a smaller share than most people expect: capacitors, the valve hall, cooling and the control system carry most of it, which follows directly from needing 30–40 kJ/MVA of stored energy. The device count is worth working out. A station with 400 cells per arm holds 2,400 cells across its six arms and roughly 4,800 IGBT positions, since each half-bridge cell has two, so cell design and cell yield move the vendor's cost more than any single device price does. Three suppliers, Hitachi Energy, Siemens Energy and GE Vernova, hold nearly all of the market, and the European offshore wind program has pushed lead times to several years and moved buyers to framework agreements signed long before projects are consented. Spare submodules are bought with the station, because a bypassed cell waiting for the next outage is far cheaper than an unplanned one. Cost per kilowatt falls as station rating rises, since buildings, cooling and control do not scale with cell count.

## Videos

- https://www.youtube.com/watch?v=aVby57ERXIo — Modular Multilevel Converter (IEEE Industrial Electronics Society, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=aK6YIxIyIIU — Multilevel Converter (Siemens Knowledge Hub, 2 minutes, 1k+ views)

## Further reading

[Modular Multilevel Converters: Recent Achievements and Challenges (UNSW Sydney)](https://unsworks.unsw.edu.au/handle/1959.4/unsworks_76436) · [Control Oriented Models for Co-Design: Technical Overview of MT HVDC, MVDC, and Solid State Transformer Building Blocks (Pacific Northwest National Laboratory)](https://www.osti.gov/biblio/3001923)
