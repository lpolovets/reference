---
number: 19
name: Power-tower CSP with molten-salt storage
part: 4
group: Concentrating solar
dispatch: disp
lcoe: med
cf: high
capex: vhigh
build: slow
---

## Description
A power tower surrounds a central receiver with a field of two-axis heliostats that hold the sun's image on it all day. Molten nitrate salt is pumped up the tower, heated from about 290 °C to about 565 °C, and stored in a hot tank, and steam is raised from that tank whenever the operator wants power. The design decision that matters is that the salt is both the heat transfer fluid and the storage medium, so there is no oil-to-salt heat exchanger and the tanks work over a 275 °C temperature difference instead of a trough's 95 °C. Storage therefore costs little more than a bigger tank and more salt, which is why 10–15 hours is normal and capacity factors of 45–70% are achievable, making this the only solar technology that is dispatchable without batteries. The turbine is an ordinary synchronous steam machine, so the plant also supplies inertia and fault current, which is a real product on a grid full of inverters.

## Strengths and weaknesses
Everything the tower does better than a trough comes from temperature: a better steam cycle, cheap storage, and heat grade high enough for industrial use. In operation the salt-storage towers do what they promise, and Cerro Dominador in Chile and Noor III in Morocco both run into the night. The weaknesses are execution and market. Every tower is a first-of-a-kind construction project, with a receiver that sees enormous flux and daily thermal cycling, thousands of heliostats to calibrate and wash, and salt that freezes at about 220 °C, so trace heating has to run for the plant's life or the loop solidifies. Crescent Dunes is the cautionary case: 110 MW with 10 hours of storage, roughly a billion dollars of capital, a hot-salt tank leak, Chapter 11 in January 2026, and a sale for $7 million in cash that March. Ivanpah shows the other failure, which is being on the wrong side of the PV cost curve — 392 MW with no storage at all, and PG&E moved in January 2025 to terminate its contracts and shut two units, though the California PUC has so far rejected those termination agreements.

## When to use
Pick a tower over a trough whenever you want more than about 8 hours of storage or heat above 400 °C, because 565 °C salt makes both cheap and 393 °C oil makes both expensive. Pick a tower over PV plus batteries only in a narrow set of cases: very long daily duration (12+ hours, where salt's cost per kWh-thermal beats cells), a desert grid that specifically needs synchronous inertia and fault current, or a tender that bundles CSP with PV and pays explicitly for the firming. Outside those, PV plus a 4–8 hour battery wins on both cost and schedule, which is why Western tower development effectively stopped after Ivanpah and Crescent Dunes. If you are bidding into China's hybrid CSP-plus-PV tenders the calculation is different, because the CSP block is being bought as the firming asset for a multi-gigawatt renewable base rather than as a generator standing on its own.

## Key numbers
Salt heated from about 290 °C to about 565 °C, a 275 °C storage temperature difference · 10–15 hours of storage typical, giving capacity factors of 45–70% · nitrate salt freezes near 220 °C, so trace heating runs permanently · capital cost above $7,000/kW with LCOE in the $100–200/MWh band · China connected 9 CSP plants in 2025 for 27 total and about 1.74 GW · Crescent Dunes, 110 MW with 10 hours of storage, sold out of bankruptcy for $7M in March 2026.

## Grid integration
This is the most grid-friendly solar plant that exists: a synchronous steam turbine supplying inertia, fault current, reactive power, and in some configurations black start, with 10–15 hours of stored heat behind it, so an operator can schedule it like a gas plant and accredit it near its availability. It ramps in minutes rather than seconds, so it is a load-following resource that still needs something faster alongside it for frequency response. Curtailment exposure is close to zero, because the plant banks heat instead of exporting at midday, and that property is exactly what China's hybrid tenders are buying when they pair a 100 MW CSP block with several hundred MW of PV and wind. What has to be built alongside is transmission, since the direct-normal-irradiance sites are deserts a long way from load.

## Examples
Cerro Dominador in Chile (110 MW with 17.5 hours of storage); Noor III at Ouarzazate, Morocco (150 MW, 7 hours); Redstone in South Africa (100 MW, 12 hours, online 2024–25); Ashalim/Megalim in Israel (121 MW); Crescent Dunes in Nevada (110 MW, the bankruptcy case) and Ivanpah in California (392 MW, direct steam, no storage, being closed unit by unit); and Delingha, Dunhuang, and the 2023–25 wave of Chinese hybrid CSP-plus-PV bases in Qinghai, Gansu, and Xinjiang, which is where nearly all current construction sits.

## Economic profile
Nearly all of a tower's cost is the heliostat field and the receiver-and-tower assembly; the storage is the cheap part, and the energy-storage sheet covers two-tank molten salt on its own terms. That split explains the market. Storage hours are almost free to add and the collector is not, so CSP loses to PV whenever a buyer only wants energy, and wins occasionally when a buyer wants energy and firmness in one contract. Western supply has largely exited — BrightSource, SolarReserve, and Abengoa are gone or restructured — and China now holds the industrial base, with 27 plants connected, about 1.74 GW installed, and a 15 GW target in its next Five-Year Plan. If tower costs come down, that is where it happens. For anyone building a business on CSP components, the addressable market is Chinese and Gulf tenders plus high-temperature industrial heat, not the merchant power market Ivanpah and Crescent Dunes were built for.

## Videos

- https://www.youtube.com/watch?v=QTNU1JMhzxA — Concentrating Solar Power-Power Towers (KeepItCleanCreative, 4 minutes, 100k+ views)
- https://www.youtube.com/watch?v=IiBzmvoWsBU — Solar Reserve Solar Thermal Solar Power tower with molten salt storage based on Solar Two (Matthew Wright, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=oiPSy2bKZkE — This Billion Dollar Solar Plant was an EPIC Failure (Two Bit da Vinci, 13 minutes, 1m+ views)

## Further reading

[Power Tower System Concentrating Solar-Thermal Power Basics (US Department of Energy)](https://www.energy.gov/cmei/systems/power-tower-system-concentrating-solar-thermal-power-basics) · [How solar thermal energy storage works with concentrated solar (SolarPACES)](https://www.solarpaces.org/how-csp-thermal-energy-storage-works/)
