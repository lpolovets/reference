---
number: 20
name: "PID and advanced process control"
part: 4
group: "Process and cell control"
layer: control
industries: [proc, hybrid, bldg]
determinism: ms100
lockin: open
maturity: std
---

## Description
The proportional-integral-derivative controller remains the workhorse of process control: it acts on the present error, the accumulated past error, and the rate of change, and it does so with three parameters an engineer can reason about. Advanced process control sits above it, most commonly as model predictive control, which uses a model of the process to compute a sequence of moves that optimizes a cost function over a horizon while respecting constraints. The advanced layer does not replace the PID loops; it sets their targets, so the base layer keeps working if the advanced layer is switched off.

## Strengths and weaknesses
PID's strengths are that it needs no model, that it is understood everywhere, and that it degrades gracefully. Its weaknesses appear on processes with long dead time, strong interaction between loops, or hard constraints, all of which it handles poorly. Model predictive control addresses exactly those and its weakness is the model: building one requires plant tests, and maintaining it requires noticing when the plant has changed. An advanced controller running on a stale model gradually stops helping, and the usual failure is that operators switch it off rather than report it.

## When to use
Use PID for essentially all single loops, and spend the effort on tuning and on the valve rather than on a more sophisticated algorithm, since most poorly performing loops are badly tuned or have a sticking final element rather than needing better control theory. Use model predictive control where loops interact strongly, where constraints are what limits throughput, or where dead time dominates, which describes distillation, blending, and many continuous units. Budget for model maintenance from the start, since an advanced control project without it delivers benefit for a year and then quietly stops.

## Key numbers
Three tunable parameters in a PID, which is much of why it survived every proposed replacement · derivative action frequently disabled in practice because it amplifies measurement noise · a large share of industrial loops running in manual or badly tuned, which is the first thing an audit usually finds · model predictive control operating above the base loops and setting their targets rather than replacing them · plant tests required to identify the model, and repeated when the process changes.

## Examples
Distillation columns, blending, and crude units are the classic model predictive control applications, where constraint handling translates directly into throughput. Loop performance auditing, which identifies loops in manual or oscillating, is a routine service in process plants for the same reason.

## Economic profile
Advanced process control is one of the few automation investments with a directly measurable return, because it usually pays through pushing a unit closer to a constraint: running nearer a quality or capacity limit without crossing it is worth a percentage of throughput on a continuous unit, and that is a large number. The catch is sustainability. The benefit decays as the plant changes unless someone owns the models, and projects that deliver a strong first-year result and no second-year result are common enough that experienced buyers now contract for the maintenance rather than only the implementation.

## Further reading
[ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards) · [Open Process Automation Forum (The Open Group)](https://www.opengroup.org/forum/open-process-automation-forum)
