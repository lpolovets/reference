---
number: 21
name: "Robot cell integration"
part: 4
group: "Process and cell control"
layer: control
industries: [disc, log]
determinism: ms10
lockin: single
maturity: std
related: [robot-end-effectors#automatic-tool-changers]
---

## Description
A robot arrives as an arm and a controller and does nothing useful until it is integrated: a gripper is chosen and built, fixtures are made, the cell is guarded, the safety functions are designed and validated, the robot is taught its positions, and the whole thing is tied into the line's control system so that parts arrive and leave. That work is the project. The arm is typically a minority of the cost, and the integration is where both the schedule and the risk sit, which is why the system integrator rather than the robot vendor is usually the party a manufacturer contracts with.

## Strengths and weaknesses
The strength is flexibility relative to fixed automation: a robot cell can be retasked for a new part with new fixtures and a new program, where a purpose-built machine cannot. Collaborative robots extend that further by reducing the guarding requirement, though only after a risk assessment establishes that the application really qualifies. The weakness is that flexibility is theoretical unless someone can program the cell, and the shortage of people who can is the practical brake on robot adoption in smaller manufacturers far more than the price of arms.

## When to use
Use a robot cell where the task varies, where several similar parts share a line, or where the alternative is a purpose-built machine that would be obsolete when the product changes. Use fixed automation where volume is high and the part will not change, since it is faster and cheaper for that case. Assess collaborative operation honestly, because most cells described as collaborative still end up with guarding once the risk assessment considers the tool and the workpiece rather than the arm alone.

## Key numbers
The arm typically a minority of total cell cost, with gripper, fixturing, guarding, integration, and programming making up the rest · safety validation required before production regardless of whether the robot is collaborative · teaching and programming effort scaling with part variety rather than with cycle time · retooling for a new part usually cheaper than a new machine, which is the flexibility argument · integrator availability rather than robot price the common constraint on adoption.

## Examples
Welding, palletizing, machine tending, and assembly are the volume applications, and machine tending is the one that most often justifies itself in smaller shops because it converts an operator-attended machine into an unattended one. The end-effector sheet covers the grippers and tool changers these cells depend on.

## Economic profile
Cell economics are dominated by integration labor, which is why robot price declines have not produced proportional adoption growth: halving the cost of the arm changes the project total far less than the headline suggests. The businesses that have grown fastest in this market are the ones attacking integration rather than hardware, through standardized cells, simpler programming, and pre-engineered application packages. For a manufacturer, the honest comparison is against the fully loaded cost of the labor being displaced including recruitment and turnover, and in tight labor markets that comparison has moved decisively rather than gradually.

## Further reading
[Machine guarding overview (US Occupational Safety and Health Administration)](https://www.osha.gov/machine-guarding) · [PLCopen: standards for industrial control programming (PLCopen)](https://www.plcopen.org/)
