---
number: 20
name: Shunt Reactors & Capacitor Banks
part: 4
group: Substation apparatus
voltage: [mv, ehv]
roles: [volt]
lead: yr
siting: fence
maturity: mature
---

## Description
Reactive power does not travel well, so voltage has to be managed locally, and the cheapest way is to switch fixed devices in and out. Shunt capacitor banks supply reactive power and raise voltage; they are what utilities add when a heavily loaded feeder or substation sags. Shunt reactors absorb reactive power and lower voltage; they are what a lightly loaded long line or cable needs, because its own capacitance generates reactive power and pushes voltage up. Both are simple, both are switched by a breaker, and both are sized in coarse steps.

## Strengths and weaknesses
Cost per MVAr is the lowest of any reactive device by a wide margin, roughly a tenth of a STATCOM, and there is almost nothing to maintain. Reliability is excellent. The weaknesses come from being passive and discrete. A capacitor's output falls with the square of voltage, so it delivers least exactly when a sagging system needs it most, which is why capacitors alone cannot hold a system through a voltage collapse. Switching produces transients that stress nearby equipment, and control is stepwise rather than continuous, so voltage rides a sawtooth. Capacitors can also resonate with system inductance at harmonic frequencies.

## When to use
Use fixed and switched banks as the base layer of reactive support everywhere: they carry the steady-state reactive load at the lowest cost. Add reactors wherever long lines or cables run lightly loaded, and remember that cable getaways need them permanently. Reach for a STATCOM or SVC only for the dynamic increment, when the requirement is fast response after a fault or support during a voltage dip. The usual right answer is a layered design: banks for bulk MVArs, dynamic devices for the last fast part.

## Key numbers
Capacitor output falls with the square of voltage, so a 10% dip gives 19% less support · cost roughly a tenth of a STATCOM per MVAr · switching in discrete steps, commonly 25–150 MVAr per bank at transmission voltage · reactors are effectively mandatory on long cable circuits · resonance with system inductance requires a harmonic study on large banks.

## Examples
Capacitor banks on distribution feeders, the single most common reactive device on any grid; shunt reactors at both ends of long 400 and 500 kV lines and on nearly every EHV cable circuit; switched banks used seasonally to follow summer air-conditioning load.

## Videos

- https://www.youtube.com/watch?v=Rdl540lDIAM — Why Are Shunt Reactors Used in Power Systems? | TheElectricalGuy (Gaurav J - TheElectricalGuy, 19 minutes, 50k+ views)
- https://www.youtube.com/watch?v=AA4KLxbo7cw — Shunt Reactors/Capacitors (Bobsdecline - Lineman blogger, 13 minutes, 10k+ views)
- https://www.youtube.com/watch?v=nmFMbknvIo8 — Why are Reactors Connected with Capacitor Banks in Substations | Inrush Current Explained (Circuit Masterclass, 7 minutes, 10k+ views)

## Further reading

[Substations (T&D World)](https://www.tdworld.com/substations)
