---
number: 5
name: Diesel Generators
part: 2
group: Standby generation
density: [low, ext]
where: [hyper, colo, ent]
water: none
retrofit: new
maturity: mature
---

## Description
Standby diesel generators are what carry a data center through a utility outage longer than the batteries can. A 2–3 MW unit in an outdoor enclosure or generator room starts on a signal from the transfer switch, reaches rated speed and voltage in about 10 seconds, and picks up load through an automatic transfer switch. A large campus has dozens of them in N+1 or 2N arrangements, plus fuel storage sized for 24–72 hours of full-load running and a contract for resupply.

## Strengths and weaknesses
Diesel generation is the most proven backup there is: fuel is dense and storable, starting is reliable when the maintenance is done, and the units run for years at very low duty. Nothing else combines that availability with on-site fuel. The costs are permitting and testing. Generators are permitted air emission sources with hour limits, and monthly load-bank testing burns fuel and produces the emissions everybody notices. Fuel goes stale and needs polishing, wet stacking damages engines run lightly, and in constrained air-quality districts a large generator plant can be the hardest permit on the project.

## When to use
Diesel remains the default for standby duty and should be assumed unless there is a specific reason not to. Sizing follows the redundancy target: N+1 for concurrent maintainability, 2N where the design has to survive a failure during maintenance. Look at alternatives where air permits are the binding constraint, where the site cannot store fuel, or where the utility will pay for the capacity: in some markets, generators enrolled in a demand-response program earn enough to change the business case. Batteries and fuel cells substitute for part of the duty but not for a multi-day outage.

## Key numbers
Typical unit 2–3 MW, with dozens per campus · start to full load in about 10 seconds · fuel stored for 24–72 hours at full load · monthly testing under load is standard practice · permitted run hours are usually the binding regulatory constraint · capital roughly $500–900 per kW installed.

## Examples
Generator yards at every large colocation and hyperscale campus; Manhattan data centers with generators on the roof and fuel in the basement; Irish and Dutch facilities where generator air permits became a public planning fight; demand-response programs that pay generator fleets to run at peak.

## Videos

- https://www.youtube.com/watch?v=LYncuYp0UVo — A DAY in the LIFE of the DATA CENTRE | GENERATOR TESTING with ASH! (Custodian Data Centres, 13 minutes, 100k+ views)
- https://www.youtube.com/watch?v=Ns0FdLSdcoY — What is a Generator and How It Works in a Data Center 1080p (CoreSite, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=rQXEL3-wpf4 — Cat® Diesel Generator Sets Supply Emergency Power to Manhattan’s Data Center (Cat Electric Power, 6 minutes, 100k+ views)

## Further reading

[Uptime Institute Global Data Center Survey 2025 (Uptime Institute)](https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2025.Annual.Survey.Report.pdf?version=0)
