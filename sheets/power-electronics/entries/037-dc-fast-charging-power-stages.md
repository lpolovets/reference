---
number: 37
name: DC Fast-Charging Power Stages
part: 6
group: Drives & traction
power: [kw, mw]
voltage: [mains]
semiconductor: [sic, si]
uses: [ev]
maturity: scale
---

## Description
A DC fast charger does the AC-DC conversion off the vehicle, so the car only has to close a contactor, negotiate over the communication line and let the charger regulate current straight into the pack. The cabinet takes 480 V three-phase and holds a stack of identical power modules, usually 30–75 kW each, and every module is itself two stages: an active front end doing power factor correction, then an isolated DC-DC converter with a medium-frequency transformer, now mostly built from silicon carbide. Modules are paralleled onto a common DC bus and allocated to dispensers through contactors, so one cabinet can put 350 kW into a single car or split into 175 kW for each of two. The top of the range is 350 kW at up to 920 V and 500 A, and 500 A through a connector a person has to lift means a liquid-cooled cable. Cabinet efficiency is typically 95–96%, so a 350 kW unit at full output is rejecting 15–18 kW of heat through its own cooling system.

## Strengths and weaknesses
Modularity is why this architecture won: one 30–75 kW module design ships inside 60 kW, 180 kW and 400 kW cabinets, a failed module takes only its own share of the site offline, and field service is a swap rather than a repair. The weakness is that the cabinet is the cheap part of the site. NREL's cost assumptions put a 350 kW port at $116,400–167,400 of hardware and $63,700–117,900 of installation, and they explicitly exclude utility upgrades, which at a site with no existing three-phase capacity can be the largest line of all. The 350 kW rating is also mostly unused, because a 400 V vehicle typically draws 150–250 kW, an 800 V vehicle holds peak power only for a few minutes near a low state of charge, and average session power across a day is far below the nameplate. Then there is the tariff: demand charges run from about $2/kW in Seattle to $8/kW in New York and higher elsewhere, and at low utilization that bill is spread across very few kilowatt-hours.

## When to use
If you are siting a corridor charger, size the electrical service first, because the pad transformer, the service upgrade and the permitting are the long-lead items and the cabinet is not. If the traffic is mostly 400 V vehicles, 150–200 kW per stall delivers nearly the same session time as 350 kW at much lower hardware and service cost. Specify 350 kW where 800 V vehicles are a real share of traffic and where minutes are what you are selling, which usually means highway plazas rather than retail parking. If projected utilization is under roughly 10%, model the demand charge before the energy charge, and price on-site battery storage against the peak it would shave. If you are charging heavy trucks, do not try to scale CCS, since 500 A is the practical connector limit and the Megawatt Charging System exists for exactly that gap.

## Key numbers
Power modules typically 30–75 kW each · cabinets from 60 kW to 400 kW, allocated across dispensers · 350 kW means 500 A at up to 920 V and a liquid-cooled cable · cabinet efficiency 95–96% · hardware $116,400–167,400 and installation $63,700–117,900 per 350 kW port, excluding utility upgrades · demand charges roughly $2/kW in Seattle to $8/kW in New York · $27–44 billion for the 182,000 US public fast-charging ports projected for 2030

## Examples
Alpitronic's HYC400 and megawatt-class HYC1000, ABB's Terra 360 and A400, the Tesla V4 Supercharger, and Kempower's separate power unit with satellite dispensers are the reference designs; power modules come from Infypower, UUGreenPower and Sinexcel among others; Tritium, which built its own modules, went into administration in 2024; the US NEVI program requires four 150 kW ports per site, and CharIN's Megawatt Charging System targets heavy trucks.

## Economic profile
Hardware alone works out to $333–478/kW for a 350 kW port on NREL's numbers, dividing $116,400–167,400 by 350 kW, which is roughly ten times the per-kilowatt cost of the converter a car carries on board. Installation adds $63,700–117,900 per port before any utility work, and the utility side (service upgrade, pad transformer, trenching, switchgear and the interconnection study) is excluded from those figures and often exceeds them. It is also the schedule: transformer lead times and utility engineering queues run 12–24 months while the cabinet ships in weeks. Revenue is the spread between the retail price per kilowatt-hour and delivered cost, and delivered cost is dominated by the demand charge whenever utilization is low, which is why so much of the industry's engineering effort has gone into on-site batteries rather than into better converters. Margin in the hardware chain sits mostly with the module makers, several of them Chinese, while cabinet builders integrate, cool, certify and write the software; that is a thin position to hold, and Tritium's 2024 administration is the cautionary case. NREL's national figure of $27–44 billion for 182,000 public fast-charging ports by 2030 comes to roughly $150,000–240,000 per port, which lines up with the per-port costs above and still leaves utility upgrades out.

## Videos

- https://www.youtube.com/watch?v=_43-CPgqp4g — Everything You Need to Know About DC Fast Charging (Aging Wheels, 18 minutes, 100k+ views)
- https://www.youtube.com/watch?v=JLGlykqTnHw — Alpitronic Shows Off Its Megawatt HYC1000 Fast Charger At The EV Charging Summit (State Of Charge, 9 minutes, 5k+ views)

## Further reading

[Enabling Fast Charging: A Technology Gap Assessment (U.S. Department of Energy)](https://www.energy.gov/sites/default/files/2017/10/f38/XFC%20Technology%20Gap%20Assessment%20Report_FINAL_10202017.pdf) · [The 2030 National Charging Network: Estimating U.S. Light-Duty Demand for Electric Vehicle Charging Infrastructure (National Renewable Energy Laboratory)](https://docs.nlr.gov/docs/fy23osti/85654.pdf)
