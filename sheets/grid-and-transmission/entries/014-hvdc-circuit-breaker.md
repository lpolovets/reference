---
number: 14
name: HVDC Circuit Breaker
part: 3
group: HVDC apparatus
voltage: [ehv]
roles: [prot]
lead: yr
siting: fence
maturity: early
---

## Description
An AC breaker gets help from physics: current passes through zero a hundred or a hundred and twenty times a second, and the arc goes out at one of those crossings. DC current never does, so a DC breaker has to force a zero itself. The workable design is hybrid. A low-loss mechanical path carries the current normally; on a fault, a small semiconductor commutating circuit pushes the current into a parallel power-electronic branch, the mechanical contacts open with almost no arc, and the semiconductor branch then blocks against a surge arrester bank that absorbs the stored inductive energy. All of it in a few milliseconds.

## Strengths and weaknesses
A working DC breaker is what allows a meshed DC grid to lose one line instead of losing everything, and hybrid designs have demonstrated clearing in 2–5 ms with normal running losses close to a mechanical switch. The problems are size, cost, and count. The energy-absorbing arrester stacks are large, a breaker can cost a meaningful fraction of a converter, and a meshed grid needs one at every line end. The installed base worldwide is small, so failure statistics do not exist. Some system designers avoid them entirely by using fault-blocking converters, which cost more in losses but need no breakers.

## When to use
You need DC breakers only if you are building a meshed or multi-terminal DC network where a single line fault must not shut the whole scheme down. Point-to-point links do not need them, because the AC breakers at each end can clear the fault by de-energizing the converters. Compare the DC breaker route against full-bridge fault-blocking converters early, because the two are alternative answers to the same problem: breakers cost capital and space, blocking converters cost roughly an extra half point of efficiency forever.

## Key numbers
Clearing in about 2–5 ms, against 40–80 ms for AC breakers · on-state losses near those of a mechanical disconnector in hybrid designs · surge arrester banks sized to absorb the DC network's stored inductive energy · commercial installations remain in the low tens worldwide · alternative is a full-bridge converter, which blocks faults at the cost of roughly 0.5 percentage points of efficiency.

## Examples
ABB's hybrid HVDC breaker, the first demonstrated design; the Zhangbei project in China, the largest deployment of DC breakers in a meshed scheme; European research programs including PROMOTioN, which tested competing designs against a common specification.

## Economic profile
The choice is capital now against losses forever, and it is arithmetic a planner can do on one line. A DC breaker costs a meaningful fraction of a converter, a meshed scheme needs one at every line end, and the arrester banks take real space in the station. The alternative is a full-bridge fault-blocking converter, which needs no breakers and gives up roughly half a percentage point of efficiency for the life of the scheme: half a point of a 1 GW link is 5 MW lost continuously. The comparison is usually decided by the operating record rather than by that arithmetic. With commercial installations still in the low tens worldwide there are no failure statistics, so a utility pricing a first-of-a-kind meshed scheme has to carry that uncertainty itself. If the DC network is small, blocking converters are the cheaper answer; breakers are worth their capital once the terminal count is high enough that losing the whole scheme to one line fault is unacceptable.

## Videos

- https://www.youtube.com/watch?v=Uir-BPoTN88 — ABB's Hybrid HVDC breaker (ABB, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=4WVEteb5Yb4 — Hybrid HVDC Breaker, how does it work? (ABB, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=1O5EmOZXipg — Operation and control of an HVDC circuit breaker with Current Flow Control Capability (InnoDC, 10 minutes, 1k+ views)

## Further reading

[Technical brochures (CIGRE)](https://www.cigre.org/GB/publications/technical-brochures) · [Design, test and application of HVDC circuit breaker (CIGRE)](https://electra.cigre.org/323-august-2022/technical-brochures/design-test-and-application-of-hvdc-circuit-breaker.html)
