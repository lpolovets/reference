---
number: 6
name: Dynamic Line Rating
part: 1
group: Overhead lines
voltage: [hv, ehv]
roles: [cong, vis]
lead: fast
siting: exist
maturity: emerg
---

## Description
A line's rating is set by how hot the conductor gets, and that depends on ambient temperature, wind, and sun as much as on current. Static ratings assume a conservative worst case, typically 40 °C still air with full sun, all year. Dynamic line rating measures or forecasts the real conditions and calculates the rating that actually applies right now. Implementations range from ambient-adjusted ratings, which use a temperature forecast alone, to sensor-based systems that measure conductor tension, sag, or the local wind field on the span that governs.

## Strengths and weaknesses
The upside is that wind cools a conductor hard, and wind is highest exactly when wind generation is highest, so the extra capacity tends to arrive when the system wants it. Typical gains run 10–30% and can exceed 50% on windy days, for a cost measured in hundreds of thousands of dollars rather than hundreds of millions. Nothing needs an outage or a permit. The problems are operational rather than physical. Operators have to trust a rating that moves, protection settings and market software must accept time-varying limits, and a rating that increases must never be relied on for a contingency that occurs when the wind drops. Sensors on remote spans need power and communications.

## When to use
Deploy dynamic ratings on lines that are congested for a limited number of hours a year, where the congestion cost is real and a rebuild is years away. It is the cheapest capacity in this sheet and the fastest to install. Do not use it where the constraint is stability or voltage, and do not plan firm capacity around it, since the conservative case is what backs up a contingency. In the US, FERC Order 881 has made ambient-adjusted ratings mandatory for near-term operations, so the baseline has moved and full dynamic rating is the increment above it.

## Key numbers
Static ratings typically assume 40 °C still air with full sun · typical dynamic gain 10–30%, above 50% in high wind · installed cost of a monitored line in the hundreds of thousands of dollars · no outage and no permit needed · FERC Order 881 requires ambient-adjusted ratings for operations within the next 10 days.

## Examples
PPL Electric Utilities' deployment in Pennsylvania, which won industry recognition for congestion savings; National Grid's UK sensor programs; EPRI's dynamic line rating test facility; LineVision and Ampacimon as the main sensor vendors.

## Economic profile
The payback comes from congestion cost avoided, and the capital at risk is tiny: a monitored line costs in the hundreds of thousands of dollars against hundreds of millions for a rebuild, so the extra 10–30% only has to be worth a small fraction of the congestion on that path. The catch is on the benefit side. A dynamic rating cannot be counted as firm capacity, since the wind that created it may not be blowing during the contingency it would have to cover, so it lowers congestion cost without deferring the rebuild in a planning study. That is exactly the kind of benefit a rate case has trouble crediting, and it is why deployment has lagged the arithmetic. FERC Order 881 moved the baseline by making ambient-adjusted ratings mandatory for near-term operations, so a vendor now sells the increment above ambient-adjusted rather than the whole gain. That is a small hardware sale on its own, which is why the sensor companies mostly sell monitoring and software subscriptions instead.

## Videos

- https://www.youtube.com/watch?v=kqfkM7O45rk — Dynamic Line Ratings Test Facility (EPRI, 2 minutes, 1k+ views)
- https://www.youtube.com/watch?v=PrxYdWyJOkQ — PPL Electric Utilities Dynamic Line Ratings - 2023 Edison Award Finalist Project (EEITV, 3 minutes, under 1k views)
- https://www.youtube.com/watch?v=gA-klae4GOI — What is DLR? Dynamic Line Ratings Explained (Pitch Aeronautics, 18 minutes, under 1k views)

## Further reading

[FERC Order No. 881: Managing Transmission Line Ratings (ISO New England)](https://www.iso-ne.com/participate/support/participant-readiness-outlook/ferc-order-no-881-mtlr) · [Dynamic Line Rating: Report to Congress (US Department of Energy)](https://www.energy.gov/sites/prod/files/2019/08/f66/Congressional_DLR_Report_June2019_final_508_0.pdf)
