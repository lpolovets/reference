---
number: 34
name: Non-Wires Alternatives
part: 7
group: Distribution & edge
voltage: [mv, hv]
roles: [cong, deliv, vis]
lead: yr
siting: exist
maturity: emerg
---

## Description
A non-wires alternative meets a grid need with something other than new grid equipment. The classic case is a substation forecast to overload in three years for forty hours a year: instead of rebuilding it, the utility contracts batteries, demand response, targeted efficiency, and local solar to shave those hours. Making that work at scale needs a distributed energy resource management system, which forecasts what the resources will do, dispatches them against a distribution model, and verifies delivery. The technology is mostly software; the hard part is procurement and cost recovery.

## Strengths and weaknesses
Deferring a rebuild for a few hundred hours a year of relief is often much cheaper than the rebuild, and the resources arrive in months rather than years. Contracts are modular, so the utility can buy more if load grows faster and stop if it does not, which is real option value against an uncertain forecast. The weaknesses are performance risk and regulation. A wire is available 99.99% of the time and a portfolio of customer-owned devices is not, so contracts need penalties and headroom. Utilities also earn a return on capital rather than on contracts, so the regulatory model has to be adjusted or the incentive points the wrong way.

## When to use
Use a non-wires approach where the driver is a small number of hours, where load growth is uncertain enough that deferral has option value, and where enough customer-side resource exists in the right electrical location. Location matters: relief must be downstream of the constraint. Do not use it where the need is continuous capacity or where reliability standards demand firm deliverability, and be honest that it defers rather than eliminates the investment. Where load growth is fast and certain, build the wire.

## Key numbers
Typically targets 50–200 hours of constraint per year · deferral value depends on the utility's cost of capital and the length of the deferral · contracted resources deliver at 90–99% availability against a wire's 99.99% · deployment in 6–24 months · resources have to sit downstream of the constraint to count.

## Examples
Con Edison's Brooklyn-Queens Demand Management program, the best-documented US deferral case; National Grid's UK flexibility tenders; California's distribution deferral framework; the growing set of utilities running DERMS platforms to dispatch and settle these portfolios.

## Economic profile
Deferral value is straightforward arithmetic: the utility's cost of capital times the size of the avoided investment times the number of years it is pushed out. That makes the case strongest where a constraint binds for 50 to 200 hours a year and weakest where the deferral is short, since delaying a rebuild that happens anyway by two years saves only two years of carrying cost. The second source of value is optionality, because contracts are bought a year at a time and a wire is bought once, so a load forecast that turns out to be wrong costs much less. The obstacle is not the arithmetic. A utility earns a return on capital and not on contracted services, so a program that avoids capital reduces its own earnings, and until a regulator fixes that with shared savings or a performance incentive the incentive points at the wire. Con Edison's Brooklyn-Queens program is the best-documented US case, and what it mostly documents is the regulatory work rather than the technology. Price the performance gap honestly too, since contracted resources deliver at 90–99% against a wire's 99.99% and closing that gap means buying headroom.

## Videos

- https://www.youtube.com/watch?v=Hbn7KGKoBZg — Distributed energy resources (DERs) explained | Eaton PSEC (Eaton, 16 minutes, 10k+ views)
- https://www.youtube.com/watch?v=OfhMB3TEhZw — Two Minutes or Less: ADMS and DERMS (POWER Engineers, 2 minutes, 5k+ views)
- https://www.youtube.com/watch?v=qVAMvswlqBg — Distributed Energy Resource Management System (DERMS) (Energy Research Institute at NTU, 3 minutes, 1k+ views)

## Further reading

[BQDM program demonstrates benefits of non-traditional utility investments (Utility Dive)](https://www.utilitydive.com/news/bqdm-program-demonstrates-benefits-of-non-traditional-utility-investments/550110/) · [Locational Value of Distributed Energy Resources (Lawrence Berkeley National Laboratory)](https://www.osti.gov/biblio/1765585)
