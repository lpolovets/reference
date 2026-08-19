---
number: 15
name: "Control valves and positioners"
part: 3
group: "Actuation and vision"
layer: field
industries: [proc, hybrid, bldg]
determinism: slow
lockin: open
maturity: std
---

## Description
A control valve is the final element of most process loops: the controller computes a correction and the valve implements it by changing how much fluid passes. A positioner sits on the valve and closes a local loop around stem position, comparing the commanded position against the measured one and driving the actuator until they agree, which removes the effect of friction, packing wear, and varying process forces from the outer loop. Modern positioners are digital and report their own diagnostics, including signatures that reveal a sticking valve before it causes a control problem.

## Strengths and weaknesses
The strength of a positioner is that it makes the valve behave like the linear element the control loop assumes it is, which is most of what determines loop performance in practice. Its diagnostics are the clearest example in the plant of condition monitoring that pays for itself, since a valve degrades gradually and detectably. The weaknesses lie in the valve rather than the electronics: stiction, hysteresis, and wrong sizing are chronic, and an oversized valve operating near its seat controls badly no matter how good the positioner is.

## When to use
Use a positioner on any modulating valve where control quality matters, which is nearly all of them. Size the valve for the actual flow range rather than for the maximum the line could carry, since oversizing is the most common cause of poor loop performance and cannot be corrected downstream. Use the positioner's diagnostics as part of a maintenance routine rather than leaving them unread, and treat a valve signature test as the standard way to decide whether a loop problem is in the controller or the valve.

## Key numbers
The final element in most process loops, so its behavior limits achievable control quality regardless of tuning · positioners closing a local position loop that removes friction and process force effects from the outer loop · stiction and hysteresis chronic failure modes that develop gradually and are detectable before they cause upsets · oversizing a common design error that leaves the valve operating near its seat where control is poorest · diagnostics available on digital positioners and frequently unused.

## Examples
Globe, ball, and butterfly valves with pneumatic actuators and digital positioners are the standard arrangement in process plants. Valve signature testing, in which the positioner sweeps the valve and records the relationship between command and position, is the standard diagnostic.

## Economic profile
Valves are among the more expensive field devices and their poor performance is among the more expensive plant problems, because a badly controlled loop wastes energy and material continuously rather than failing visibly. Positioner diagnostics change the maintenance model from scheduled to condition-based, which reduces both unnecessary work and unplanned failures, and it is one of the few places where the promised value of condition monitoring has been demonstrated repeatedly. The practical obstacle is that the diagnostics require someone to look at them, and plants without that routine buy the capability without the return.

## Further reading
[ISA standards for automation (International Society of Automation)](https://www.isa.org/standards-and-publications/isa-standards) · [PROFINET and PROFIBUS technology (PI)](https://www.profibus.com/technologies/profinet)
