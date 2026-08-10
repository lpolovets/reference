---
number: 23
name: Hydrogen-fired gas turbine
part: 5
group: Low-carbon gas
dispatch: fast
lcoe: high
cf: low
capex: med
build: med
---

## Description
A gas turbine burning hydrogen, either blended into methane or on its own. Combustion is mostly a solved problem: modern F- and H-class machines are now sold with combustors rated for 30–50% hydrogen by volume, and GE Vernova's LM6000VELOX aeroderivative package is rated for 100% using a reconfigured single-annular combustor with water injection. What makes hydrogen awkward in a turbine is the flame. It burns roughly seven times faster than methane, which pushes the flame upstream into the premixing hardware (flashback) in exactly the dry-low-NOx combustors machines use to meet their emissions limits, and it burns hotter, which makes more thermal NOx. Hydrogen also carries about a third of methane's energy per unit volume, so fuel skids, valves, and piping grow roughly threefold for the same MW. That volumetric penalty is why a 30% hydrogen blend by volume displaces only about 11% of the fuel energy, and therefore cuts CO2 by about that much.

## Strengths and weaknesses
The plant is an ordinary gas turbine, so you get a synchronous machine, fast starts, a supply chain that already builds it, and the option to keep running on methane. The failure mode is fuel, not hardware. A kilogram of hydrogen holds 33.3 kWh on a lower-heating-value basis, so a 60%-efficient combined cycle gets about 20 kWh of electricity per kilogram; at $4–6/kg delivered that is $200–300/MWh in fuel before any capital. Pure hydrogen also cannot ride the existing gas network, which typically caps blends at 5–20% by volume, so a hydrogen plant needs dedicated production, a dedicated pipe, and bulk storage. Salt caverns are the only cheap bulk storage, which turns fuel into a geography problem. The most instructive data point is the showcase that vanished: South Australia canceled the 200 MW Whyalla hydrogen plant in 2025 and disbanded its hydrogen office when the money went to rescuing the local steelworks.

## When to use
Buy hydrogen capability rather than hydrogen. If you are ordering a turbine that will run for thirty years in a market with a plausible carbon price, spec a combustor rated for 30–50% hydrogen: the adder over a standard machine is small and it preserves the option. Actually running on hydrogen needs three things at once, and if any is missing the project does not work: cheap delivered hydrogen, bulk storage (a cavern, not tube trailers), and a market that pays for a few hundred hours a year of firm zero-carbon output. That describes a seasonal-firming asset at a 5–15% capacity factor, not a replacement for a combined cycle. If the job is bulk low-carbon energy from gas, gas with carbon capture is cheaper because it keeps the cheap fuel. If the job is firm capacity on a date, gas, geothermal, and nuclear all beat it on delivered cost per firm kW.

## Key numbers
Blends of 30–50% hydrogen by volume on most modern F- and H-class combustors, 100% on GE Vernova's LM6000VELOX · about a third of methane's energy per unit volume, so a 30% blend by volume cuts CO2 by only about 11% · hydrogen's flame speed roughly 7× methane's, which drives flashback and thermal NOx · 33.3 kWh/kg LHV, so roughly 20 kWh of electricity per kg at 60% combined-cycle efficiency · $4–6/kg delivered means $200–300/MWh of fuel alone · existing gas networks cap blends at 5–20% by volume.

## Grid integration
It is the same synchronous machine as any gas turbine, so it supplies inertia, fault current, and voltage support and earns close to full capacity credit, but only as far as the fuel behind it stretches. That makes storage rather than the turbine the thing that sets firm capacity: an accredited 200 MW hydrogen plant needs enough cavern or tank inventory to cover the longest lull the system plans for. Everything upstream has to be built alongside the plant (electrolysis, a dedicated hydrogen pipe, and storage) because pure hydrogen cannot be delivered through the methane network. Interconnection is usually the easy part, since these units are retrofits or new machines at existing gas sites with a connection already in place.

## Examples
Intermountain Power Project "IPP Renewed" at Delta, Utah: two Mitsubishi M501JAC turbines, 840 MW combined cycle, in commercial operation from 2025 on a 30% hydrogen blend by volume with a stated path to 100% by 2045, fed from salt caverns at the adjacent ACES Delta project. Mitsubishi Power's 30% co-firing demonstration on a large frame machine at Takasago, and the 50% blend it and Georgia Power reached at Plant McDonough-Atkinson. GE Vernova's LM6000VELOX, ordered by ATCO for the 200 MW Whyalla plant in South Australia before the state canceled it. Germany's planned "H2-ready" gas plant auctions, which pay for turbines specified to convert later.

## Economic profile
The turbine is barely a premium. Hydrogen-capable combustors add a modest amount to a machine you were buying anyway, which is why almost every new order in 2025–26 is specified hydrogen-ready. All the real cost is in the fuel chain, and at $4–6/kg the fuel alone is $200–300/MWh, several times a combined cycle's all-in cost, before the electrolyzers, storage, and pipe. So the technology sells as an option rather than as an operating mode: buyers pay a little now to avoid stranding a thirty-year asset and defer the decision on whether to ever burn hydrogen. Treat delivered hydrogen cost as an input here; the production side is on the hydrogen-and-efuels sheet. If that cost falls far enough, the first real duty for these plants is the last few hundred hours a year that storage and renewables cannot cover, and the revenue for that comes from a capacity market or scarcity pricing, not from selling energy.

## Videos

- https://www.youtube.com/watch?v=IBwY7Et84L4 — Can gas turbines run on hydrogen fuel? | GE Vernova (GE Vernova, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=hUEyQIkvNXY — World's First 30% Hydrogen Co-firing Demonstration Using State-of-the-Art Large Frame Gas Turbine (Mitsubishi Power, 4 minutes, 1k+ views)

## Further reading

[Hydrogen Gas Turbines: ETN Global Report, October 2024 (ETN Global)](https://etn.global/wp-content/uploads/2024/11/ETN-Global-Hydrogen-Gas-Turbines-Report-10-2024.pdf) · [A Literature Review of Hydrogen and Natural Gas Turbines: Current State of the Art with Regard to Performance and NOx Control (NETL)](https://netl.doe.gov/sites/default/files/publication/A-Literature-Review-of-Hydrogen-and-Natural-Gas-Turbines-081222.pdf)
