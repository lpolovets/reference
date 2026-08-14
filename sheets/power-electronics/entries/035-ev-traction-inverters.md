---
number: 35
name: EV Traction Inverters
part: 6
group: Drives & traction
power: [kw, mw]
voltage: [mains]
semiconductor: [sic, si]
uses: [ev]
maturity: scale
---

## Description
An EV traction inverter is a two-level three-phase bridge, six switch positions with several die in parallel in each, turning the battery's DC into the three-phase AC the traction motor needs. The DC link sits at 350–450 V on a 400 V architecture or 700–900 V on an 800 V one, and it is held up by a polypropylene film capacitor rather than electrolytics, because the ripple current is large and the part has to survive the life of the car. Control is field-oriented, running at 5–20 kHz for silicon IGBT designs and higher for silicon carbide, with a resolver on the rotor and phase current sensors closing the loop. Peak ratings are typically 100–300 kW, and the hardware is a power module bolted to a liquid-cooled plate, increasingly inside the same housing as the motor and gearbox. Continuous rating is set by cooling rather than by the die, so a unit that makes 250 kW for ten seconds may only hold 100 kW indefinitely.

## Strengths and weaknesses
The topology is simple and settled, so nearly all the engineering effort goes into heat and packaging rather than circuits. Production inverters reach 7.1–30.1 kW/L against a DOE 2025 target of 100 kW/L at $2.70/kW, and the gap tells you how much of the volume is capacitor, busbar and cold plate rather than semiconductor. The life-limiting mechanism is power cycling: every hard acceleration heats the die and lets it cool, and the mismatch in thermal expansion between silicon, solder and the copper baseplate eventually lifts bond wires or cracks the solder joint, so qualification is counted in thermal cycles rather than hours. That failure is expensive to have, because the inverter is sealed inside a drive unit that carries an 8–10 year warranty. The other weakness is the qualification burden, with AEC-Q101 for discrete devices, AQG 324 for modules and a production part approval process that turns any change of die, substrate or supplier into a multi-month exercise, which is why a new device technology enters the market one vehicle program at a time.

## When to use
If the architecture is 800 V, silicon carbide is close to a requirement, because 1,200 V IGBTs switch slowly and their turn-off loss eats the efficiency the higher voltage was supposed to buy. If the architecture is 400 V and the vehicle is a cost-driven mass-market model, 750 V silicon IGBTs are still the cheapest way to move the power, and they remain most of what ships. Between those cases the decision is range gained per dollar of device: silicon carbide typically buys a few percent of drive-cycle efficiency, and on a 75 kWh pack a 5% gain is worth about 4 kWh of cells, which at roughly $100/kWh is about $400 of battery the maker does not have to buy, an estimate worked here rather than looked up. If the device premium is below that number take silicon carbide, and if it is above take IGBTs. Tesla said at its March 2023 investor day that its next drive unit would use 75% less silicon carbide, which is what a careful look at where in the duty cycle the premium actually pays tends to produce, and hybrid modules mixing silicon carbide and silicon in the same package are now the common middle answer.

## Key numbers
DC link 350–450 V at 400 V or 700–900 V at 800 V · peak 100–300 kW, continuous set by cooling · switching 5–20 kHz for IGBTs, higher for silicon carbide · production power density 7.1–30.1 kW/L · DOE 2025 targets of 100 kW/L at $2.70/kW, against 2020 targets of 13.4 kW/L at $3.30/kW · Tesla announced a 75% cut in silicon carbide content in March 2023

## Examples
The 2017 Tesla Model 3 rear inverter was the first mass-market full silicon-carbide traction inverter, built from 24 small SiC modules with four in parallel per switch position; 800 V production architectures include the Porsche Taycan, the Hyundai and Kia E-GMP platform and the Lucid Air; Tier 1 units include BorgWarner's Viper module family, Vitesco, Denso, Hitachi Astemo and Nidec's integrated e-axle, with devices from Infineon, onsemi, STMicroelectronics, Rohm and Wolfspeed.

## Economic profile
An inverter program is a semiconductor volume business dressed as an automotive one: a single mass-market vehicle line consumes 100,000 or more inverters a year, so device suppliers sign multi-year capacity agreements and often prepay for wafer supply. DOE's cost targets frame the whole discussion, moving from $3.30/kW in 2020 to $2.70/kW in 2025, which for a 100 kW inverter means the complete unit has to land near $270, and that leaves very little for semiconductors after the capacitor, the module substrate, the cold plate, the busbars and the sensors are paid for. Silicon carbide die still cost several times a comparable silicon IGBT per amp, and the entire argument for paying it is the battery capacity the efficiency saves, which is why the premium gets attacked from both ends as cell prices fall and as SiC wafer supply expands. Value is shifting toward whoever integrates: an e-axle that combines motor, gearbox and inverter deletes a housing, a connector set, a cooling loop and a wiring harness, and the company that owns that assembly captures the margin the separate parts used to carry. Several automakers now design the inverter in-house and buy bare die or modules directly, which compresses the Tier 1's position to contract manufacturing. The qualification burden is the moat: eighteen months of testing and a production part approval process mean an incumbent device is hard to displace even when a challenger's data sheet is better.

## Videos

- https://www.youtube.com/watch?v=fj4KBVgJsGA — TESLA Model 3: Inverter Teardown (PE Movies - Nagoya University -, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=zh3owy0nsWk — KIA EV9 Dual-Stage Motor & Inverter Breakdown: Engineering Unveiled (Munro Live, 13 minutes, 100k+ views)

## Further reading

[Electrical and Electronics Technical Team Roadmap (U.S. DRIVE Partnership)](https://www.energy.gov/sites/prod/files/2017/11/f39/EETT%20Roadmap%2010-27-17.pdf) · [Electric Drive Technology Trends, Challenges, and Opportunities for Future Electric Vehicles (Oak Ridge National Laboratory)](https://www.osti.gov/pages/servlets/purl/1763457)
