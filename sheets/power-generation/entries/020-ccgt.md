---
number: 20
name: Combined-cycle gas turbine (CCGT)
part: 5
group: Gas turbines
dispatch: disp
lcoe: low
cf: high
capex: med
build: med
---

## Description
A combined-cycle plant is a gas turbine whose exhaust, still around 600 °C, raises steam in a heat-recovery steam generator to drive a second, steam turbine. That bottoming cycle is the whole invention: it lifts fuel-to-electricity conversion from the 35–44% a gas turbine manages on its own to 60–64% on a lower-heating-value basis with a modern H-class machine, the highest of any thermal power plant ever built. A 1x1 block (one gas turbine, one steam turbine) runs 400–850 MW depending on frame size, and a 2x1 runs two gas turbines into one steam turbine for 800–1,700 MW. This is the reference dispatchable plant, the thing every clean-firm proposal gets benchmarked against, because it is cheap per MW, cheap per MWh at reasonable gas prices, follows load over minutes to hours, and can be built in about two years once the turbine arrives. Everything hard about a CCGT in 2026 is in that last clause.

## Strengths and weaknesses
The efficiency is the strength and it compounds. At the 6,475–6,550 Btu/kWh Lazard models, a combined cycle burns roughly 40% less gas per MWh than a simple-cycle peaker, which is why it can run 60% of the year and still make money, and its CO2 per MWh is less than half a coal plant's. It is also flexible enough for a renewables-heavy grid: a warm start to full load in 30–60 minutes, ramp rates of tens of MW a minute, and a minimum stable load around 30–40%. The weaknesses are exposures rather than engineering flaws. Fuel is a pass-through, so every $1/MMBtu of gas price moves the cost of power by about $6.50/MWh and a gas LCOE is really a gas-price forecast. Frequent cycling is what actually breaks these plants: the heat-recovery steam generator's thick-walled headers and drums crack from thermal fatigue when the plant starts daily instead of seasonally, and that maintenance bill is usually missing from the original model. And a new plant is a 30-year carbon commitment in jurisdictions that keep changing their minds about carbon.

## When to use
Pick a CCGT when you need bulk dispatchable energy at a capacity factor above roughly 40%, you have firm gas supply, and you can get a delivery slot. It is the cheapest firm power available at $48–109/MWh and nothing clean is close. Two things should stop you. First, delivery: roughly 80 GW of turbines were ordered in 2024 against about 30 GW a year of OEM capacity, GE Vernova's backlog passed 116 GW by mid-2026, Siemens quotes lead times over 40 months, and slots are being negotiated for 2029–30 with reservation deposits around 20% of the equipment price. If you need power before 2030, you may simply not be able to buy one. Second, the benchmark you are really competing against: an existing CCGT's marginal cost is $24–39/MWh, so a new plant has to beat the incumbent fleet's fuel bill, not just its own LCOE. If your capacity factor will be under about 15%, buy a frame peaker or a battery instead, because the steam bottoming cycle only pays for itself on running hours.

## Key numbers
60–64% LHV efficiency on H-class machines, against 35–44% in simple cycle · heat rate 6,475–6,550 Btu/kWh in Lazard's 2025 model · unsubsidized LCOE $48–109/MWh · capex $1,200–1,600/kW nominal, $2,400–2,600/kW for post-2028 operation, with installed cost having moved from about $1,000/kW to $2,000–2,800 · US fleet capacity factor 58.4% in 2025 · about $6.50/MWh of cost per $1/MMBtu of gas price · marginal cost of an existing plant $24–39/MWh.

## Grid integration
A CCGT is a large synchronous machine, so it supplies inertia, fault current, reactive power, and governor response as a by-product of running, and operators accredit it near 100% of nameplate for resource adequacy — which is why a system can replace one CCGT with several times its nameplate in solar and still be short of firm capacity. It follows load well but not instantly: 30–60 minutes from a warm start, tens of MW a minute once running, and a floor near 30–40% load, so it needs batteries or engines alongside it for second-to-minute regulation. Its main integration cost is upstream rather than on the wires, in firm gas supply and pipeline capacity for a winter peak, which is what failed in Texas in 2021 and across the US Southeast in 2022. On the wires it is an advantage: one large interconnection close to load, against the new transmission an equivalent amount of remote renewable capacity would need.

## Examples
GE Vernova's 9HA and 7HA, Siemens Energy's SGT-9000HL, and Mitsubishi Power's M501/701 JAC are the three H-class lines that take nearly all new orders; EDF's Bouchain and Chubu Electric's Nishi-Nagoya were the first plants certified above 62% and 63% net efficiency; the roughly 280 GW US combined-cycle fleet is the largest dispatchable resource in any grid on earth; and the 2024–26 US buildout is dominated by data-center-adjacent projects such as the Chevron and Engine No. 1 development in West Texas and the Homer City redevelopment in Pennsylvania.

## Economic profile
The cost structure inverted between 2021 and 2026. A CCGT used to be a cheap, quickly delivered plant whose economics were dominated by fuel; now the equipment is scarce, the installed capital number has roughly doubled from about $1,000/kW to $2,000–2,800, and gas is still the swing cost on top. Three OEMs — GE Vernova, Siemens Energy, and Mitsubishi Power — hold effectively the entire H-class market, and having been burned by the 2015–2020 downturn they have chosen to convert scarcity into price and 20% reservation deposits rather than into new factories. For a developer, that means the scarce assets are the turbine slot and the interconnection, not the engineering. For anyone selling clean-firm power, the consequence is favourable: the benchmark competitor cannot be delivered until 2030, which is why geothermal, nuclear, and fuel cells are signing contracts at prices a combined cycle would have beaten easily in 2021.

## Videos

- https://www.youtube.com/watch?v=bnR-CLpZE9I — Combined Cycle Power Plants Theory Overview (complete guide for power engineering) (Technical Engineering School, 5 minutes, 100k+ views)
- https://www.youtube.com/watch?v=ZQzg5hPeGi0 — Journey to the heart of Energy - How a combined cycle gas turbine power plant works (EDF, 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=As_AJS7E7Cw — Heat Recovery Steam Generator (HRSG) Explained (saVRee, 5 minutes, 50k+ views)

## Further reading

[Natural gas combined-cycle power plants increased utilization with improved technology (US Energy Information Administration)](https://www.eia.gov/todayinenergy/detail.php?id=60984) · [Cost and Performance Baseline for Fossil Energy Plants, Volume 1: Bituminous Coal and Natural Gas to Electricity (NETL, 2022)](https://netl.doe.gov/projects/files/CostAndPerformanceBaselineForFossilEnergyPlantsVolume1BituminousCoalAndNaturalGasToElectricity_101422.pdf)
