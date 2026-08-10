---
number: 31
name: Hydrogen for Power Generation
part: 7
group: Power
sector: [pwr]
form: [gas]
carbon: none
maturity: comm
cost: low
---

## Description
The power sector is the demand sink most often named in hydrogen strategies and the one with the weakest willingness to pay, and one number explains why. Hydrogen holds 33.3 kWh/kg on a lower heating value basis, and any device that converts it to electricity at around 60% gives back about 20 kWh, so a megawatt-hour takes 50 kg of hydrogen no matter which machine you pick. At $4–6/kg delivered that is $200–300/MWh in fuel before a dollar of capital, several times what a combined cycle costs all in. Two conversion routes exist, gas turbines and stationary fuel cells, and the arithmetic above barely distinguishes them, which is the useful thing to understand about this market. The `power-generation` sheet owns the comparison between those machines and everything else on the grid, entry 023 for hydrogen-fired turbines and entry 032 for stationary fuel cells, with capacity credit, ramp rates, and LCOE against a CCGT. This entry asks the other question: at what delivered price does a generator buy hydrogen at all, and how many tonnes would that be.

## Strengths and weaknesses
The strength is that power is the only sink that could absorb hydrogen in tens of megatonnes if the price ever worked, and it needs no new molecule, no purity spec beyond what a turbine tolerates, and no chemistry. It is also the sink that pairs naturally with underground storage (entry 017), because a plant running a few hundred hours a year needs months of inventory and a salt cavern is the only place to keep it. The weakness is that electricity is a commodity sold by the MWh into a visible merit order, so a generator will not pay a premium it cannot recover, and its alternative is gas at $25–65/MWh of fuel depending on the region. The failure mode is a project that budgets hydrogen at production cost and forgets the 50 kg/MWh multiplier, which turns a $2/kg difference in delivered price into $100/MWh on the bid. Round-trip efficiency is the second problem: power to hydrogen to power runs about 30–35%, so two thirds of the electricity is gone before the plant sells anything.

## When to use
Sell hydrogen into power only when the buyer has a reason other than energy cost. Those reasons exist and they are specific: a capacity market or scarcity price that pays per kW-year for a few hundred hours of firm zero-carbon output, a mandate like Japan's and Korea's co-firing targets, a data center that needs power on a date and cannot wait for an interconnection, or a site with byproduct hydrogen already inside the fence. Outside those, the generator needs roughly $1–2/kg to match gas plus a carbon price, and almost nothing in this sheet is produced in that band. If you are the generator rather than the supplier, buy hydrogen capability rather than hydrogen: a hydrogen-ready combustor costs little on a machine you were buying anyway and preserves the option. And read the `power-generation` sheet before choosing between a turbine and a fuel cell, because that decision turns on dispatch, permits, and lead time rather than on the fuel.

## Variants
### Turbines
Modern F- and H-class machines are sold with combustors certified for 30–50% hydrogen by volume, and GE Vernova, Mitsubishi Power, and Siemens Energy all have 100% machines on their roadmaps. The volumetric arithmetic is what a buyer needs to hold onto: hydrogen carries about a third of methane's energy per unit volume, so 50% hydrogen by volume is only about 24% by energy, and a plant advertised as running on a 50% hydrogen blend is cutting its CO2 by roughly a quarter. The engineering problems at high blends are flashback and NOx, both driven by hydrogen's flame speed being roughly seven times methane's, which pushes the flame back into the dry-low-NOx premixing hardware that the machine needs to meet its emissions limits. Reciprocating engines are the other combustion option, and Wärtsilä has built 100% hydrogen engine plants at utility scale.

### Stationary fuel cells
Fuel cells convert 45–55% for PEM and 55–65% for solid oxide, in modules from 100 kW to 10 MW, with essentially no NOx or particulates and quiet enough to sit inside a building. That efficiency at small scale is real and it is why the product exists. Be honest about the installed base, though: almost all of it, from Bloom Energy, Doosan, and FuelCell Energy, runs on natural gas today and treats hydrogen as a fuel switch that might happen later. The demand pulling those orders in 2025 and 2026 is data centers buying speed to power, not emissions, and a fuel cell on pipeline gas emits roughly as much CO2 per MWh as a combined cycle. When one does run on hydrogen it needs 50 kg/MWh, the same as a turbine, so switching machines does not change the price the fuel has to hit.

## Key numbers
33.3 kWh/kg LHV, about 20 kWh of electricity per kg at 60% conversion, so 50 kg per MWh · at $4–6/kg that is $200–300/MWh of fuel alone · the generator needs roughly $1–2/kg to match gas plus a carbon price · 50% hydrogen by volume is only about 24% by energy · fielded F- and H-class combustors are certified for 30–50% by volume · PEM fuel cells 45–55% electrical, solid oxide 55–65%, in 100 kW to 10 MW modules · power to hydrogen to power round trip about 30–35%.

## Energy and losses
Making a kilogram takes 50–55 kWh of electricity and another 3–4 kWh to compress it into storage, and the generator gets about 20 kWh back, so the power-to-power round trip lands near 33% and closer to 30% once cavern injection, withdrawal, and plant parasitics are counted. A lithium battery returns 85–90% of what it takes, which is why hydrogen only competes for the duration a battery cannot serve rather than for daily cycling. On the demand side the multiplier is what matters: 50 kg/MWh means a 500 MW plant running at a 10% capacity factor burns about 22,000 tonnes of hydrogen a year and the same plant at baseload burns 110,000 tonnes, as much as an entire hydrogen steel plant. If 1% of world electricity came from hydrogen it would take roughly 15 Mt a year, more than fifteen times all the low-carbon hydrogen made today.

## Examples
The Intermountain Power Project at Delta, Utah is the reference plant: two Mitsubishi M501JAC turbines, 840 MW, in commercial operation from 2025 on a 30% hydrogen blend by volume, fed from salt caverns at the adjacent ACES Delta project. Wärtsilä has delivered the first large-scale 100% hydrogen reciprocating engine plants. JERA's Hekinan co-firing program is the largest volume of hydrogen the power sector is actually buying anywhere, and it buys it as ammonia under a Japanese mandate, which entry 019 covers. On the fuel-cell side, Bloom Energy's 2026 data-center agreements with Oracle, AEP, and Brookfield are the commercial story, and all of it is gas-fired. South Australia's canceled 200 MW Whyalla plant is the counter-example worth remembering.

## Economic profile
Hydrogen power is an option contract, not an operating business, and pricing it that way clarifies everything. A hydrogen-ready combustor adds a small premium to a turbine order and buys thirty years of optionality, which is why nearly every new machine ordered in 2025 and 2026 is specified that way while almost none of them burn hydrogen. The operating case needs three things at once, and the projects that died were missing at least one: delivered hydrogen near $1–2/kg, bulk storage in geology rather than in tanks, and a revenue stream that pays per kW-year for firm capacity rather than per MWh for energy. For a hydrogen supplier the implication is blunt. Power is a very large potential market at a price nobody can currently supply, and a much smaller real market today made up of mandated co-firing, byproduct hydrogen burned on site, and data centers paying for speed. Sell into those, and treat bulk power generation as a market that opens only if production costs fall below what any route in this sheet has demonstrated.

## Videos

- https://www.youtube.com/watch?v=IBwY7Et84L4 — Can gas turbines run on hydrogen fuel? | GE Vernova (GE Vernova, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=mIBcUauzwgE — World’s first large-scale 100% hydrogen engine power plant | Wärtsilä (Wärtsilä Corporation, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=uMz_B2PwnCA — Plug's Megawatt-Scale Fuel Cell Power Generation System - Technology Explained (Plug Power, 4 minutes, 5k+ views)

## Further reading

[Hydrogen for Power Generation (GE Vernova)](https://www.gevernova.com/content/dam/gepower-new/global/en_US/downloads/gas-new-site/future-of-energy/hydrogen-for-power-gen-gea34805.pdf) · [Large-Scale Electricity Storage (Royal Society)](https://royalsociety.org/-/media/policy/projects/large-scale-electricity-storage/Large-scale-electricity-storage-report.pdf)
