---
number: 8
name: LNG Dual-Fuel Engines
part: 2
group: Main engines
applies: [new, retro]
emissions: mid
segments: [cont, gas, tank, roro]
capex: high
maturity: grow
---

## Description
A dual-fuel engine burns natural gas with a small spray of liquid pilot fuel to ignite it, and keeps the full diesel system so it can run on fuel oil when gas is unavailable. There are two ways to get the gas in, and the choice decides almost everything about the emissions result. Low-pressure engines admit gas at 5–16 bar during the scavenging phase, so it mixes with the air before ignition and burns as a lean premixed Otto-cycle charge; high-pressure engines inject gas at about 300 bar directly into the combustion chamber after the pilot has already lit, so it burns as a diffusion flame on the diesel cycle. Premixing is what causes methane slip: some of the charge sits in the piston ring crevices and the cool layer against the liner where the flame never reaches, and it leaves unburned. Measured slip is about 2.5 gCH4/kWh on a low-pressure two-stroke and 5.5 gCH4/kWh on the common medium-speed four-stroke, against 0.2 gCH4/kWh on a high-pressure two-stroke, which works out to roughly 1.5–3.5% of the gas for the Otto-cycle engines and 0.2–0.4% for the diesel-cycle ones.

## Strengths and weaknesses
Burning methane instead of fuel oil removes essentially all the sulfur oxides and most of the particulates, and the lean premixed engines meet IMO Tier III NOx in gas mode with no aftertreatment at all. On carbon, gas has about 25% less carbon per unit of energy than fuel oil, which is where the headline number starts. What it ends at depends on the slip and on the warming horizon you count it over. The industry life-cycle study behind most vendor claims puts the well-to-wake cut at 10–20% for the Otto-cycle engines and up to 23% for the high-pressure two-stroke on a 100-year basis. The ICCT ran the same comparison on a 20-year global warming potential of about 86 for methane, and found no benefit for any engine type: the high-pressure two-stroke came out 4% worse than marine gas oil, and the popular medium-speed four-stroke 70% worse. Both are arithmetically correct and they disagree only about the time horizon, so ask which one a claim used before believing it. The other costs are physical: LNG holds about 21 GJ/m³ against 39 for fuel oil, so tanks and insulation take roughly 2.3 times the space, and the cryogenic fuel system, gas-safe machinery spaces and double-walled piping are most of the capital premium.

## When to use
Specify high-pressure diesel cycle if the emissions claim has to survive 20-year methane accounting or a customer's own supply-chain target, and budget roughly $3–5M more for the 300-bar gas supply system. Specify low-pressure Otto cycle if the driver is cheap gas per gigajoule and compliance with the current 100-year accounting, and ask for the measured slip at the loads this ship actually runs, since slip roughly doubles below about 40% load. If the ship is an LNG carrier, the decision is already made, because cargo boil-off is free fuel and the tanks exist. If the ship is a tramp bulker with no fixed rotation, do not take LNG, because bunkering reaches only about 185 ports and a ship that cannot get gas burns diesel while still paying for the tanks. And if the route is inside the EU, run the FuelEU number with the engine's real slip factor rather than the marketing figure, because the penalty is charged on well-to-wake intensity including methane.

## Key numbers
Slip about 2.5 gCH4/kWh low-pressure two-stroke, 5.5 gCH4/kWh medium-speed four-stroke, 0.2 gCH4/kWh high-pressure two-stroke · roughly 1.5–3.5% of gas slipped on Otto cycle, 0.2–0.4% on diesel cycle · methane 20-year global warming potential about 86 · well-to-wake cut 10–20% Otto cycle and up to 23% high-pressure diesel cycle on a 100-year basis · no benefit on a 20-year basis, with the medium-speed four-stroke 70% worse than gas oil · LNG holds about 21 GJ/m³ against 39 for fuel oil · about 185 bunkering ports

## Examples
MAN B&W ME-GI high-pressure two-strokes on container ships and LNG carriers; WinGD X-DF low-pressure two-strokes including the 12X92DF, with the iCER exhaust-recirculation option added to cut slip; Wärtsilä 50DF and MaK M46DF four-strokes on LNG carriers and cruise ships; the EU-funded GREEN RAY project measuring and reducing slip on ships in service.

## Economic profile
The premium on a large container ship is roughly $15–25M against the conventional version, most of it in the tanks, the cryogenic fuel handling and the gas-safe engine room rather than the engine itself. It pays back through the price spread per gigajoule and through carbon pricing. LNG has generally traded at $8–14/GJ against about $14/GJ for VLSFO at $550 a tonne, so the fuel saving alone is thin and swings with the gas market, which is why the 2022 gas price spike pushed several LNG-capable ships back onto fuel oil. Carbon pricing is the more reliable half: EU ETS at €70 an allowance costs about €220 per tonne of fuel oil burned, so a 20% cut is worth roughly €44 a tonne on top of the fuel spread. Slip is now priced too, since FuelEU counts methane in the intensity number, and that changes the ranking between the two combustion cycles rather than just the size of the prize. Resale is the open risk: an LNG-fueled ship sold in 2035 is worth whatever a buyer then thinks of methane, and nobody is pricing that today.

## Videos

- https://www.youtube.com/watch?v=6mifHJ3MkfE — Dual Fuel Process - Engine on Gas | Wärtsilä (Wärtsilä Corporation, 1 minute, 100k+ views)
- https://www.youtube.com/watch?v=xucarx5ikiU — Mitigating Methane Slip in LNG Engines | GREEN RAY (REVOLVE, 4 minutes, 1k+ views)

## Further reading

[The climate implications of using LNG as a marine fuel (International Council on Clean Transportation)](https://theicct.org/publication/the-climate-implications-of-using-lng-as-a-marine-fuel/) · [Life Cycle GHG Emissions Study on the Use of LNG as Marine Fuel (SEA-LNG)](https://sea-lng.org/reports/life-cycle-ghg-emissions-study-on-the-use-of-lng-as-marine-fuel/)
