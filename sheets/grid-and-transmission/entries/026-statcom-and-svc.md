---
number: 26
name: STATCOM & SVC
part: 6
group: Stability & grid services
voltage: [hv, ehv]
roles: [volt, stab]
lead: yr
siting: fence
maturity: mature
---

## Description
Both devices supply or absorb reactive power on command, and the difference is how. A static VAr compensator switches thyristor-controlled reactors and thyristor-switched capacitors, so it is a fast, continuously adjustable version of a capacitor bank, and like a capacitor its output falls with the square of voltage. A STATCOM is a voltage-source converter, the same hardware family as VSC HVDC, that synthesizes a controlled AC voltage behind a reactance. Because it is a current source, it holds its reactive current down to very low system voltage, which is where the two part company.

## Strengths and weaknesses
STATCOMs respond in a few milliseconds, keep full output during a deep voltage dip, take a small footprint, and can add short-term overload capability. SVCs cost less per MVAr, use rugged thyristors, and have a long operating record. The weaknesses mirror those strengths. An SVC's output collapses exactly when the system is in trouble, so it needs oversizing for a voltage-support duty. A STATCOM costs more per MVAr, has converter losses of around 1%, and depends on control software whose interaction with nearby inverters has caused real oscillation events.

## When to use
Use a STATCOM where fast dynamic support during and after a fault decides the outcome: weak grids, large inverter-based plants, arc furnace and traction loads, and points where voltage collapse is the limiting contingency. Use an SVC where the duty is slower voltage regulation at lower cost and the system stays reasonably strong. In both cases put the bulk MVArs on mechanically switched banks and buy only the dynamic increment from power electronics, since a device that is ten times the cost per MVAr should not be doing steady-state work.

## Key numbers
STATCOM response in about 2–5 ms; SVC in roughly one to two cycles · STATCOM holds rated reactive current down to very low voltage, while SVC output falls with voltage squared · converter losses around 1% for a STATCOM · cost roughly ten times a mechanically switched capacitor bank per MVAr · typical ratings 50–400 MVAr.

## Examples
STATCOMs installed across the UK and Australian networks specifically to firm up weak grids around wind and solar; SVCs on long-standing transmission corridors and at arc furnace sites; converter-based reactive support built into offshore wind export systems.

## Videos

- https://www.youtube.com/watch?v=uJKBTKYQBrk — HOW STATCOM CAN SOLVE DYNAMIC GRID PROBLEMS (Amjad Marmash, 22 minutes, 50k+ views)
- https://www.youtube.com/watch?v=M2b83aymC8w — STATCOM Working Principle Explained | Reactive Power Control & FACTS Devices (Easy Derivation) (Circuit Masterclass, 5 minutes, 1k+ views)
- https://www.youtube.com/watch?v=LfbHcI8EQiY — STATCOM vs SVC | Reactive Power Compensation | Comparative Analysis of STATCOM & SVC Operation (Power System Operation Slides, 10 minutes, 1k+ views)

## Further reading

[System Operations Reports (ENTSO-E)](https://www.entsoe.eu/publications/system-operations-reports/)
