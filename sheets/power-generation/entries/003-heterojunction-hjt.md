---
number: 3
name: Heterojunction (HJT)
part: 1
group: Crystalline silicon
dispatch: var
lcoe: vlow
cf: low
capex: low
build: med
---

## Description
Heterojunction cells sandwich an n-type crystalline wafer between thin films of amorphous silicon. A few nanometers of intrinsic hydrogenated amorphous silicon on each face passivate the crystalline surface chemically, doped amorphous layers on top of those decide which carrier leaves each side, and a transparent conductive oxide carries current sideways to low-temperature silver paste fingers. Amorphous silicon passivates better than any diffused junction, so open-circuit voltage reaches 740–750 mV against roughly 690 mV for PERC, and LONGi's record HJT cell hit 26.81% in 2022. The structure is symmetric, which is why HJT tolerates wafers as thin as 100–130 µm without bowing and why its bifaciality reaches about 90%. Every process step runs below roughly 200 °C, so an HJT line shares almost nothing with a PERC line and has to be built from scratch.

## Strengths and weaknesses
HJT has the best temperature coefficient in mass production, around -0.25%/°C against PERC's -0.34, the highest bifaciality of any commercial cell, and very low first-year and annual degradation, so it delivers more kWh per installed watt than TOPCon at hot, bright, high-albedo sites. The gain is usually a few percent and it is worth modeling site by site rather than assuming. Against that, HJT consumes the most silver per watt of any mainstream cell, because low-temperature paste is both less conductive and more expensive, and its transparent conductive oxide normally contains indium, a constrained byproduct metal. The commercial failure mode has already happened more than once: with no retrofit path, an HJT maker has to fund a whole new line and then sell at a premium, and Meyer Burger ran out of money trying, shutting its US module plant and putting its main German subsidiaries into insolvency in 2025. Technically, watch the cell interconnection, because low-temperature soldering and busbar-less designs mean the joint often ages faster than the cell.

## When to use
Pick HJT when the site is hot, the ground is bright, and the offtake pays for energy rather than capacity. Desert utility projects, high-altitude sites, and snow-covered ground are where the temperature coefficient and the 90% bifaciality turn into revenue. The test is arithmetic: take the module price premium over TOPCon in $/W, divide it by the modeled extra kWh per watt over 25 years, and compare the result to your PPA price. In most temperate markets that premium does not clear. Don't pick HJT on datasheet efficiency, since TOPCon has closed most of that gap; pick it on modeled energy yield, and if the yield model doesn't clear the premium, buy TOPCon.

## Key numbers
Intrinsic amorphous silicon passivation layers a few nanometers thick on both faces · open-circuit voltage 740–750 mV against roughly 690 mV for PERC · record cell 26.81% (LONGi, 2022), production modules around 22.5–24% · temperature coefficient near -0.25%/°C against PERC's -0.34 · bifaciality about 90% · wafers as thin as 100–130 µm · every process step below roughly 200 °C.

## Grid integration
Temperature coefficient decides how much of a plant's nameplate is actually available at the system peak, because peaks land on the hottest afternoons. At a 65 °C cell temperature, which is ordinary in summer, an HJT module at -0.25%/°C is down about 10% from its rating while a PERC module at -0.34%/°C is down about 14%, and that gap falls in exactly the hours that set capacity accreditation and the highest prices. Bifacial gain near 90% adds to the morning and evening shoulders over bright ground, shifting a little output away from the midday hours most likely to be curtailed. Everything else is the same as any silicon plant: inverter-coupled, no native inertia, and a capacity credit that falls as solar penetration rises.

## Examples
Huasun is the largest HJT producer and Risen Energy's Hyper-ion is the best-known module line. Panasonic invented the structure as HIT in the 1990s and its core patents expired around 2010–2011, which is what let everyone else build it. Meyer Burger was the Western attempt to industrialize it and failed in 2025. HJT also underpins several research records, including LONGi's 26.81% cell, and heterojunction passivation is what the highest-efficiency back-contact cells are now built on.

## Economic profile
HJT has to be paid for twice: a greenfield low-temperature line instead of a PERC retrofit, then a bill of materials carrying more silver and some indium. Silver is the swing item, and the industry's answer is silver-coated copper paste and electroplated copper metallization, both in production at some Chinese makers and both of which change the cost picture only if they hold up for 25 years outdoors. So HJT is really a bet on two things arriving together: copper metallization removing the silver premium, and a market that pays for energy yield rather than $/W. If either fails, TOPCon absorbs the volume, which is roughly what happened between 2022 and 2025.

## Videos

- https://www.youtube.com/watch?v=FfU9jxGnYzs — HIT (Heterostructure with Intrinsic Thin Layer) solar cell: Part 1 (nanolearning, 12 minutes, 10k+ views)
- https://www.youtube.com/watch?v=hTcyWunuU8U — What is Hetero Junction Technology in Solar Panels? (WAAREE Energies Limited, 19 minutes, 5k+ views)
- https://www.youtube.com/watch?v=B6BAYz563Yg — Different Types of Solar Panels: What is PERC, TOPCon, N-Type, HJT,... (Cleversolarpower by Nick, 10 minutes, 10k+ views)

## Further reading

[Silicon-based heterojunction solar cells (EPFL PV-Lab)](https://www.epfl.ch/labs/pvlab/research/heterojunction_solar_cells/) · [Degradation and Failure Modes in New Photovoltaic Cell and Module Technologies, 2025 (IEA-PVPS Task 13)](https://iea-pvps.org/wp-content/uploads/2025/02/IEA-PVPS-T13-30-2025-REPORT-Degradation-and-Failure.pdf)
