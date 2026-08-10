---
number: 21
name: Simple-cycle frame peaker
part: 5
group: Gas turbines
dispatch: fast
lcoe: high
cf: low
capex: low
build: med
---

## Description
A frame peaker is a heavy-duty industrial gas turbine exhausting straight to the stack, with no steam bottoming cycle behind it. It is the same class of machine that sits at the front of a combined-cycle plant — a large single-shaft turbine on a rigid frame, typically 50–300 MW — minus the heat-recovery steam generator and steam turbine that would have recovered the exhaust heat. Dropping that equipment roughly halves the capital cost per kW and cuts efficiency from over 60% to 35–40%, a heat rate of 10,275–11,175 Btu/kWh, about 65% higher than a combined cycle's. It reaches full load in roughly 10–30 minutes, and fast-start packages do better than that. You do not buy this plant to make energy. You buy it to have capacity available, and it earns most of its money by being ready rather than by running.

## Strengths and weaknesses
A frame peaker is the cheapest way to own a dispatchable megawatt: $1,150–1,450/kW, no water-steam cycle to maintain, dual-fuel capability so it can burn stored distillate when the gas system is short, and black-start capability in some configurations. Its weaknesses are the reason it exists in the first place. Fuel cost per MWh is about 65% above a combined cycle's, so LCOE at a realistic duty cycle is $149–251/MWh and the marginal cost of an existing peaker is $47–170/MWh. NOx and noise make urban siting hard, and peakers sit disproportionately in load pockets, which is where the air-quality and environmental-justice objections are loudest. The failure mode that matters most is start reliability: a plant that runs 200 hours a year has to work on the coldest morning of the decade after months of sitting idle, and start failures during cold snaps have driven the largest reliability events in US grids, including Uri in 2021 and Elliott in 2022.

## When to use
Pick a frame peaker when you need firm capacity for the tail of the load-duration curve at the lowest cost per kW, you expect to run it under about 15% of the year, and you can get the emissions permit. Judging it on LCOE is a category error: the product is availability, so the number to model is $/kW-year against the capacity market or scarcity revenue, not $/MWh. Its competitor is now a four-hour battery, which beats it on ramp (seconds against tens of minutes), on emissions, and on siting, and which has already taken most of the daily evening-peak duty in California and Texas. What the battery cannot do is run for three days, which is exactly when a peaker earns its year. If you need starts in under ten minutes, or many starts a day, buy an aeroderivative and accept the higher cost per kW; if you need capacity above roughly 40% utilization, buy a combined cycle; and below about 20 MW, buy reciprocating engines.

## Key numbers
Simple-cycle efficiency 35–40% at 10,275–11,175 Btu/kWh, about 65% above a combined cycle's heat rate · capex $1,150–1,450/kW · LCOE $149–251/MWh at a 10–15% capacity factor, and often far lower utilization than that · marginal cost of an existing peaker $47–170/MWh · full load in roughly 10–30 minutes · unit sizes typically 50–300 MW · PJM's 2026/27 capacity auction cleared at the $329.17/MW-day cap in every zone.

## Grid integration
A peaker's entire purpose is grid integration. It is a synchronous machine accredited near 100% of nameplate, it supplies inertia and fault current whenever it runs, and it is often the black-start resource for a region. In a solar-heavy market its job has moved from covering the summer afternoon, which batteries now do, to covering the multi-day event — a still, cold week, or a winter morning after storage has been drained — so its value is concentrated into a few dozen hours a year and depends entirely on starting when called. That makes fuel security part of the interconnection question: firm pipeline capacity or on-site distillate storage is what turns a nameplate megawatt into an accredited one, and several ISOs have tightened accreditation rules to say so. Because peakers are sited in load pockets to relieve transmission constraints, they generally need less new network than an equivalent renewable project would.

## Examples
GE Vernova's 7E/7F and 9E/9F frames and Siemens Energy's SGT6-5000F in simple-cycle packages are the workhorses of the fleet; the PJM, ERCOT, and CAISO peaker fleets built during the 1999–2003 merchant boom are most of the US installed base; New York City's in-city peakers (Ravenswood, Astoria, Gowanus) are the documented case of urban peakers under environmental-justice pressure, with the state's peaker rule forcing repowering or retirement; and the Texas Energy Fund's loans for new dispatchable capacity are the current example of a state paying directly for peaking plant.

## Economic profile
Peaker economics are capacity-market economics, and the capacity market has repriced hard. PJM's 2026/27 auction cleared at the $329.17/MW-day cap in every zone after two auctions of steep increases, which turns a plant that earns almost nothing on energy into a financeable asset. ERCOT, which has no capacity market, pays for the same thing through scarcity pricing, a much lumpier and less bankable revenue stream. Capital cost per kW is among the lowest of any thermal plant, though a bank of reciprocating engines undercuts it at the bottom of its range, but a peaker order sits in the same OEM queue as a combined cycle, so the delivery constraint applies here too and has pushed buyers toward aeroderivatives and reciprocating engines that can actually be delivered. The strategic question for anyone owning one is how many of its remaining hours storage takes next: four-hour batteries have already absorbed most evening-peak duty in California, and each additional hour of storage duration eats the peaker's niche from the short end.

## Videos

- https://www.youtube.com/watch?v=2Jm5RVHLlcQ — How a gas turbine works | GE Vernova (GE Vernova, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=BUn5-0VG3Hw — What is a Gas Turbine? (For beginners) (RealPars, 10 minutes, 500k+ views)
- https://www.youtube.com/watch?v=zEQj7de2mX4 — What is a Peaker Power Plant? (Clean Energy Group / Clean Energy States Alliance, 6 minutes, 1k+ views)

## Further reading

[Use of natural gas-fired generation differs in the United States by technology and region (US Energy Information Administration)](https://www.eia.gov/todayinenergy/detail.php?id=61444) · [2026/2027 Base Residual Auction Report (PJM)](https://www.pjm.com/-/media/DotCom/markets-ops/rpm/rpm-auction-info/2026-2027/2026-2027-bra-report.pdf)
