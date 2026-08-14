---
number: 27
name: Solid-State Circuit Breakers
part: 4
group: Control & protection
power: [kw, mw]
voltage: [lv, mv]
semiconductor: [si, sic]
uses: [grid, ev, it, aero]
maturity: early
---

## Description
A solid-state circuit breaker replaces the moving contacts of a conventional breaker with semiconductor switches that carry the load current continuously and stop it on command. There is no arc to extinguish and no mass to accelerate, so interruption takes microseconds instead of the tens of milliseconds a mechanical breaker needs, and the fault current never reaches its prospective peak. An ARPA-E project at Illinois Institute of Technology demonstrated 380 V DC/20 A and 1000 V DC/10 A bidirectional units on GaN switches with response under 10 microseconds, against a program goal of a thousandfold faster response and a fivefold cost reduction relative to mechanical breakers. Blocking voltage in both directions takes two devices back to back, and the energy stored in line inductance has to go somewhere when current stops that fast, so a real breaker also carries a metal-oxide varistor or a snubber to absorb it. Hybrid designs keep a mechanical contact in parallel for the on-state and commutate current into the semiconductor only when a fault appears, trading some speed for much lower conduction loss.

## Strengths and weaknesses
Microsecond interruption changes what the rest of the system has to survive, because a fault cleared in 10 microseconds never develops the peak current a mechanical breaker allows, so cables, busbars and converters can be rated for less. In a DC system there is also no current zero to help a mechanical contact clear, which is why DC breakers above a few hundred volts are hard to build any other way. The cost is conduction loss, paid every second the system runs. The IIT prototypes held on-resistance under 10 milliohms in the 380 V unit and under 50 milliohms in the 1000 V one, for efficiency above 99.9%, so a 380 V, 20 A breaker dissipates a few watts continuously where a mechanical breaker's contacts dissipate a small fraction of that. Semiconductors also fail short rather than open, so a solid-state breaker usually still needs a mechanical isolator behind it to give a verified open point for maintenance, and the device stack has to be rated for full system voltage plus surge margin, which is what makes the parts expensive.

## When to use
Use a solid-state breaker where DC and speed are both requirements: battery systems, shipboard and aircraft DC distribution, DC microgrids, and data center DC busses where a fault has to clear before it disturbs the rest of the hall. Consider a hybrid breaker when the system runs near rated current continuously and the 0.1% conduction loss matters more than the last microsecond of clearing time. Stay with a mechanical breaker for ordinary AC distribution, where the current zero every half cycle does the interrupting for free and the price difference is several fold. If you do specify one, budget for the isolator behind it and for the thermal design around the always-on loss, because both are routinely left out of a first cost estimate. And check the surge rating separately, since a device that comfortably interrupts a fault can still be destroyed by a lightning transient, which is a different rating entirely.

## Key numbers
Interruption in microseconds against tens of milliseconds for a mechanical breaker · ARPA-E prototypes at 380 V DC/20 A and 1000 V DC/10 A with response under 10 microseconds · program targets of 1,000 times faster response and 5 times lower cost than mechanical breakers · on-resistance under 10 milliohms at 380 V and under 50 milliohms at 1000 V, for efficiency above 99.9% · a few watts of continuous loss on a 380 V, 20 A unit, roughly 70 kWh a year (derived from 0.1% of 7.6 kW over 8,760 hours) · two devices back to back for bidirectional blocking, plus a varistor or snubber.

## Examples
ARPA-E's BREAKERS program, which funded medium-voltage DC breaker work at Eaton, GE Global Research, Georgia Tech, Sandia, Drexel, Marquette, Ohio State and Illinois Institute of Technology; the IIT and Transphorm GaN breaker, which also produced a 750 V/250 A SiC switch module for hybrid-electric aircraft. Commercial products exist at low voltage from Atom Power, BLIXT and Astrol, and AMETEK ships solid-state power controllers for aircraft secondary distribution.

## Economic profile
The cost is almost entirely semiconductor area. A breaker has to conduct rated current with acceptable loss and block full system voltage with margin, and both push toward more die, which is why a solid-state breaker typically costs several times a mechanical one of the same rating; the ARPA-E program set a fivefold cost reduction as its target because that gap is the barrier. Against that sits an operating cost that never stops: at 99.9% efficiency a unit passing 380 V and 20 A dissipates about 8 W, which is roughly 70 kWh a year plus the cooling to remove it. That arithmetic rules it out for ordinary AC distribution, where a mechanical breaker sits at near-zero loss for thirty years. It works where the alternative is worse, since in DC systems there is no cheap mechanical answer, so the comparison is against a much more expensive DC breaker or against not building the system at all. The market that decides this is probably data center DC distribution and battery systems, both growing fast enough that volume could bring the die cost down.

## Videos

- https://www.youtube.com/watch?v=MWrRkA5gjgA — Solid-State Circuit Breakers v. Traditional Electromechanical Circuit Breakers (Richardson RFPD, 8 minutes, 1k+ views)
- https://www.youtube.com/watch?v=SEmopALlFdY — Aircraft Wire Protection: Thermal Circuit Breakers vs. Solid State Technology - Full Version (AMETEK PDS, 7 minutes, 5k+ views)

## Further reading

[BREAKERS (ARPA-E)](https://arpa-e.energy.gov/programs-and-initiatives/view-all-programs/breakers) · [Wide Bandgap Solid State Circuit Breakers for AC and DC Microgrids (Illinois Institute of Technology)](https://www.osti.gov/biblio/2566596)
