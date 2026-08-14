---
number: 19
name: Heat Pumps and Building HVAC
part: 4
group: Envelope & services
where: site
building: [res, mf, com]
gains: [carbon]
capital: low
maturity: grow
---

## Description
A heat pump is an air conditioner that runs in both directions: a compressor circulates refrigerant around a loop and a reversing valve decides which coil evaporates and which one condenses. Efficiency is stated as coefficient of performance, the heat delivered divided by the electricity consumed, and a modern air-source unit does COP 3 to 4 with outdoor air at 47 °F. COP falls as it gets colder, because the compressor has to lift heat across a bigger temperature difference and the refrigerant entering it is less dense, so it drops toward 2 by the time outdoor air is near 17 °F and capacity drops with it, at exactly the hours the building needs the most heat. Cold-climate units fight that with variable-speed inverter compressors and vapor injection; the NEEP cold-climate specification asks for a COP of at least 1.75 at 5 °F, and good units hold most of their rated capacity down there. Below the balance point the shortfall is made up by electric resistance strips at COP 1.0, and every hour spent on resistance heat pulls the seasonal average down hard. Ground-source systems avoid the whole problem by exchanging heat with soil that stays near 45–55 °F year-round, holding COP 3.5 to 5, and pay for it in drilling.

## Strengths and weaknesses
At COP 3 you buy one unit of electricity and get three units of heat, which beats any combustion appliance on delivered energy and beats a gas furnace on carbon almost anywhere the grid is not coal-heavy. One machine also covers heating and cooling, so a replacement that adds air conditioning costs little more than the air conditioner alone. The weaknesses are all downstream of falling capacity. A unit sized on the cooling load will not carry the heating load at design temperature, and the strip heat that covers the gap is the reason customers end up with a January bill that convinces them heat pumps do not work. The second weakness is electrical: a heat pump plus backup strips can add 40 to 60 A to a house with a 100 A service, and the panel, not the equipment, is what decides whether the job is affordable. The third is refrigerant. R-410A has a global warming potential of 2,088 and is being displaced under the AIM Act by R-454B and R-32 at roughly 466 and 675, which are A2L mildly flammable and carry charge limits and installation rules the trade is still learning.

## When to use
If an air conditioner is being replaced anywhere in the country, buy a heat pump instead: the incremental cost over a straight AC swap is small and the heating comes free. If the heating design temperature is above about 20 °F, an ordinary unit is fine and the cold-climate premium is wasted. If it is below about 5 °F, specify a cold-climate unit, size it against the heating load rather than the cooling load, and check the electrical service before signing anything. Insulate and air seal first, because every kW of load removed shrinks the equipment and can be the difference between needing a service upgrade and not. If the service upgrade comes back at $5,000 or more, look at a dual-fuel setup that keeps the existing furnace as the backup instead of strips, which removes the electrical problem entirely and costs almost nothing. Reserve ground-source for owners with land, a long horizon, and a heating-dominated climate.

## Key numbers
COP roughly 3–4 at 47 °F, falling toward 2 as it gets colder · NEEP cold-climate specification requires COP of at least 1.75 at 5 °F · electric resistance backup COP 1.0 · ground-source COP 3.5–5 against 45–55 °F soil · ducted replacement roughly $8,000–18,000 installed, ductless mini-split $4,000–8,000 · a 100 A to 200 A service upgrade roughly $2,000–5,000, more when the utility drop or transformer changes · R-410A GWP 2,088 against R-454B at about 466.

## Examples
Mitsubishi Hyper-Heat, Daikin and Fujitsu cold-climate lines; the DOE Residential Cold Climate Heat Pump Challenge, which took prototypes from Lennox, Carrier, Trane and others through cold-chamber and field testing; Maine, which hit its 100,000-heat-pump target in 2023, two years early, and then raised it.

## Economic profile
The equipment is a commodity and the money is in the installation. A ducted replacement runs roughly $8,000 to $18,000 installed and a ductless mini-split $4,000 to $8,000 for one or two zones, but the item that decides the project is the electrical work, and it is the one nobody quotes at the start. A panel or service upgrade is roughly $2,000 to $5,000, and considerably more when the utility has to replace the service drop or the transformer serving the house. In multifamily buildings the building service and the riser are the binding constraint, so the first unit to convert can be asked to pay for capacity that every later unit uses, which is a split incentive with no obvious owner and a real reason conversions stall. Running cost turns on the ratio of electricity to gas price, and the arithmetic is worth doing rather than guessing: a therm is 29.3 kWh, a 95% furnace delivers about 27.8 kWh of heat from it, and a COP-3 heat pump delivers the same 27.8 kWh from 9.3 kWh of electricity, so at $1.50/therm the heat pump is cheaper to run below about $0.16/kWh. That is derived here, not a published figure, and it moves with both prices. The homeowner captures the bill saving and the carbon; the utility inherits a winter peak it may not have planned for, which is why some of the strongest programs pay for controls and staged backup rather than for the equipment.

## Videos

- https://www.youtube.com/watch?v=H3jIRRzF6d0 — Major Advances with Heat Pumps in the Extreme Cold (Undecided with Matt Ferrell, 15 minutes, 500k+ views)
- https://www.youtube.com/watch?v=g49hVAYENIM — An introduction to cold climate heat pumps (NaturalResourcesCa, 4 minutes, 10k+ views)

## Further reading

[ccASHP Specification & Product List (Northeast Energy Efficiency Partnerships)](https://neep.org/heating-electrification/ccashp-specification-product-list) · [Minimizing Auxiliary Heat Use for Cold Climate Operation of Air Source Heat Pumps: Preprint (National Renewable Energy Laboratory)](https://www.osti.gov/servlets/purl/2588994)
