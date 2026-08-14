---
number: 31
name: Wind Turbine Converters
part: 5
group: Grid converters
power: [mw]
voltage: [mains, mv]
semiconductor: [si]
uses: [grid]
maturity: comm
---

## Description
A wind rotor turns at whatever speed the wind allows, so something has to decouple it from a fixed grid frequency, and two designs did that at scale. In a doubly fed induction generator, the Type 3 machine, the stator connects straight to the grid and a back-to-back converter feeds the wound rotor through slip rings, so the converter only handles the slip power, roughly 25–30% of turbine rating, across a speed range of about plus or minus 30% around synchronous. In a full-converter turbine, Type 4, all of the output passes through a back-to-back voltage-source converter, which lets the generator be a permanent-magnet machine running at any speed and isolates it completely from the grid. Electrically the two converters are the same thing: two IGBT bridges sharing a DC link, the machine-side bridge controlling torque and the grid-side bridge holding DC-link voltage and setting reactive power. Most run at 690 V with modules paralleled to carry the current, and the largest offshore machines, now around 15 MW, move to three-level topologies or to 3.3 kV to keep that current manageable.

## Strengths and weaknesses
The DFIG's advantage is that the owner only pays for about a third of a converter, which means fewer devices, less cooling, and a smaller share of the energy passing through a lossy stage. That advantage stopped deciding the choice once grid codes tightened. A DFIG's stator is bolted to the grid, so a voltage dip drives large rotor currents, and the standard protection is a crowbar that shorts the rotor and gives up control of the machine for the length of the fault, which is exactly when the network needs reactive current. A full converter rides the fault through in software, can inject reactive current during it, supports grid-forming control, and allows the direct-drive and medium-speed permanent-magnet trains that remove or shrink the gearbox. What it costs is a converter rated for the full output, roughly three times the semiconductor area, and about 2–3% of annual energy in converter loss at 97–98% efficiency, where a DFIG passes under a third of the power through the same kind of stage. The DFIG also carries brushes and slip rings on the rotor, which need service on the order of every 6–12 months.

## When to use
If you are specifying a new utility-scale turbine, take the full converter. The grid code will require fault ride-through and reactive support that a DFIG meets awkwardly, and any offshore or weak-grid connection makes that case stronger. DFIG is still defensible in one place: onshore machines in markets with light interconnection requirements, where the cheaper converter and the smaller nacelle electronics still show up in the price. If the turbine is going offshore, onto a long export cable, or into a network that will need grid-forming behavior, choose a full converter and stop arguing about it. Whichever you pick, specify the converter's cooling and enclosure sealing for the actual site, because the electrical system is consistently one of the largest contributors to turbine downtime and salt and humidity are what kill it offshore.

## Key numbers
DFIG converter rated at 25–30% of turbine power for roughly plus or minus 30% speed range; full converter rated at 100% · back-to-back converter efficiency roughly 97–98%, so full conversion costs about 2–3% of annual output · most converters at 690 V, with 3.3 kV and three-level designs on the largest machines · largest offshore turbines around 15 MW · average new US turbine 3.4 MW with a 133.8 m rotor in 2023 · DFIG slip rings and brushes serviced roughly every 6–12 months.

## Examples
Vestas' older V90 DFIG platform against its full-converter EnVentus machines; Siemens Gamesa's direct-drive offshore turbines and GE's Haliade-X, both full conversion; converter suppliers including ABB, Ingeteam, and The Switch, alongside turbine makers' in-house designs; IEC 61400-27, the standard for the electrical simulation models grid operators use to represent these machines.

## Economic profile
The converter is a small part of a turbine's price and a large part of its downtime. Power electronics are usually estimated at around 5% of turbine capital cost, well behind blades, tower, gearbox, and generator, so moving from partial to full conversion changes the purchase price by low single-digit percent. Reliability surveys keep putting the electrical system and the converter among the top contributors to turbine failures, normally with short repair times but high frequency, and offshore a short repair still means a vessel and a weather window. That is why the industry paid for full conversion anyway: it enabled the direct-drive and medium-speed permanent-magnet trains that take the gearbox out of the O&M budget, and it met grid codes that would otherwise have blocked interconnection. Scale helps the turbine maker more than the owner, because the average new US turbine reached 3.4 MW in 2023 with a 133.8 m rotor, and a larger machine spreads a converter's fixed engineering, enclosure, and certification cost across more megawatts. The supply base is thin, with a handful of specialist converter builders plus in-house designs, so lead times move with the same IGBT module and magnetics shortages that hit every other grid converter.

## Videos

- https://www.youtube.com/watch?v=JJr4PIuQp2w — Wind turbine generators, HOW DO THEY WORK? (DOB-Academy, 4 minutes, 100k+ views)
- https://www.youtube.com/watch?v=ZSYY1pyYIss — Doubly-Fed Induction Generator (DFIG) wind-turbine control (EMTP, 16 minutes, 10k+ views)
- https://www.youtube.com/watch?v=-HljEywnEf0 — 21. Grid connection of wind power (DTU Wind and Energy Systems, 10 minutes, 100k+ views)

## Further reading

[Wind turbine drivetrains: state-of-the-art technologies and future development trends (Wind Energy Science)](https://wes.copernicus.org/articles/7/387/2022/) · [Land-Based Wind Market Report 2024: Edition (US Department of Energy)](https://www.energy.gov/cmei/systems/land-based-wind-market-report-2024-edition)
