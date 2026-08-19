---
number: 22
name: "Safety relays and light curtains"
part: 5
group: "Machine safety"
layer: field
industries: [disc, log, hybrid]
determinism: ms10
lockin: open
maturity: std
---

## Description
The hardwired end of machine safety: a light curtain projects a grid of infrared beams across an opening and signals when one is broken, an interlock switch reports whether a guard door is closed, an emergency stop button provides a deliberate manual trip, and a safety relay combines those signals and drives contactors that remove power. Every element is built so that a fault within it is detected: dual channels compared continuously, contacts mechanically linked so a welded one cannot be misreported, and a deliberate reset required rather than automatic restart when the condition clears.

## Strengths and weaknesses
The strengths are simplicity and transparency. A hardwired safety circuit can be traced with a meter and understood from a drawing, needs no software validation, and fails in a direction that stops the machine. For a small number of functions it is also the cheapest option by a wide margin. The weaknesses appear as the function count grows: a dozen interacting zones become an unmaintainable relay panel, changes mean rewiring, and diagnostics are limited to which relay dropped out rather than which device caused it.

## When to use
Use hardwired safety relays where there are one or two simple functions and they will not change, which covers a great many machines. Move to a safety controller once zones interact, once muting or partial shutdown is required, or once the panel would exceed a handful of relays. Use light curtains where operators need frequent access and a physical guard would be defeated, and use fixed guarding where access is rare, since a fixed guard is cheaper and cannot be bypassed. Size the curtain's position from the calculated safety distance rather than from convenience.

## Key numbers
Dual-channel monitoring with continuous cross-checking so that an internal fault is detected rather than ignored · mechanically linked contacts, so a welded contact cannot be reported as open · safety distance calculated from approach speed and total stopping time, which is what sets where a light curtain may be mounted · deliberate reset required after a trip rather than automatic restart · cheapest option for a small number of functions and rapidly the most expensive as functions multiply.

## Examples
Light curtains, safety interlock switches, safety mats, two-hand controls, and rope pulls are the standard device set, combined by safety relays or a safety controller. Muting, in which the protective function is suspended while a pallet passes, is the classic case where relays stop being sufficient.

## Economic profile
Safety devices are a modest cost and the compliance work around them is not, since the risk assessment, the validation, and the documentation apply whether the implementation is a relay or a controller. The economic decision is therefore rarely about device price and usually about change: a plant that reconfigures cells frequently pays repeatedly for rewiring with relays, and a plant with static machines does not. The cost that dominates everything, and that the whole exercise exists to avoid, is an injury, which carries legal, insurance, and production consequences far beyond any equipment budget.

## Videos

- https://www.youtube.com/watch?v=F3pWKAMqa7o — What Is A Safety Light Curtain? from AutomationDirect (AutomationDirect.com, 4 minutes, 1k+ views)
- https://www.youtube.com/watch?v=KRP1hmwmsbI — Machine Safety: Banner Light Curtains Principles of Operations (Banner Engineering, 4 minutes, 5k+ views)

## Further reading
[Machine guarding overview (US Occupational Safety and Health Administration)](https://www.osha.gov/machine-guarding) · [Control of hazardous energy, lockout and tagout (US Occupational Safety and Health Administration)](https://www.osha.gov/control-hazardous-energy)
