---
number: 17
name: Spacecraft Batteries and Power Management
part: 4
group: Power generation & storage
orbit: [leo, geo, cis, deep]
scale: [kg, hkg]
autonomy: auto
customer: [civ, def, com, sci]
maturity: ops
---

## Description
The battery carries the spacecraft through eclipse and through any load the array cannot meet, and the power management electronics decide how the array, the battery, and the loads are connected. Lithium-ion has displaced nickel-hydrogen almost everywhere since about 2005, and a flight pack delivers 100–130 Wh/kg once cells, structure, harness, balancing electronics, and the thermal interface are counted, against 150–270 Wh/kg for the bare commercial cells inside it. The duty cycle is what makes spacecraft batteries unusual. A satellite in low Earth orbit passes through shadow for roughly 35 minutes of every 90-minute orbit, 16 times a day, which is about 5,500 charge and discharge cycles a year and something like 27,500 over a five-year mission. Around that sits the power management: a regulator that either dumps the array's excess (direct energy transfer) or tracks its peak power point, a charge controller that holds each cell inside a narrow voltage window, and a bus that is 28 V on small spacecraft and 100 V or higher on large ones, because at 20 kW a 28 V bus would carry over 700 A of current. Li-ion also has to be held near room temperature, so the battery is usually one of the tightest thermal boxes on the vehicle and draws heater power during the same eclipse it is discharging into.

## Strengths and weaknesses
Li-ion roughly doubled the usable energy per kilogram over nickel-hydrogen and shrank the volume more than that, which is why the ISS replaced its 48 nickel-hydrogen orbital replacement units with Li-ion units two for one starting in December 2016. What it gave up is tolerance. Nickel-hydrogen shrugged off overcharge and deep discharge and delivered tens of thousands of cycles; Li-ion does not, so life is bought by keeping the depth of discharge low. The ISS nickel-hydrogen batteries were designed for ten years at a 35% maximum depth of discharge, and Li-ion packs in low orbit are typically held near 20–30%, which means the pack is sized three to five times larger than the eclipse energy alone would require. The failure mode is also worse: a shorted Li-ion cell can go into thermal runaway and take its neighbors with it, so flight packs carry per-cell fusing, bypass paths, and a management system whose job is mostly to prevent one cell from being driven outside its window. And the qualification is slow, because proving 27,500 cycles at a given depth of discharge and temperature means running a real cycling campaign for years, which is a schedule item rather than an engineering one.

## When to use
Size the pack from the eclipse energy, then divide by the depth of discharge you can defend for the mission life, not the other way around. If you are in low Earth orbit, plan on 20–30% depth of discharge and accept a pack three to five times the naive size, because at 5,500 cycles a year an automotive-style 80% discharge would be worn out inside a year. If you are in GEO the arithmetic is much kinder, since eclipses happen only in two seasons around the equinoxes and run at most 72 minutes, giving on the order of 90 cycles a year, so 60–80% depth of discharge is normal and the pack is far smaller for the same load. If the mission is short and the cost target is aggressive, use screened commercial 18650 or 21700 cells rather than space-qualified ones: NASA has flown Sony, LG, and Panasonic consumer cells on Ingenuity, PACE, and Europa Clipper. If the load has to run through a 354-hour lunar night, stop sizing batteries and read entries 18 and 19, because at 100 Wh/kg the storage alone is about 3.5 kg per watt of continuous load.

## Key numbers
100–130 Wh/kg at the pack, 150–270 Wh/kg at the commercial cell · about 35 minutes of eclipse per 90-minute orbit, 16 orbits a day, roughly 5,500 cycles a year and 27,500 over five years · 20–30% depth of discharge in low orbit against 60–80% in GEO · ISS nickel-hydrogen units designed for ten years at 35% maximum depth of discharge, replaced two for one by Li-ion from December 2016 · GEO eclipses at most 72 minutes, on the order of 90 a year · about 700 A on a 28 V bus at 20 kW, which is why large spacecraft run 100 V or more · roughly 100 kg of pack for a 5 kW low-orbit satellite (derived below)

## Examples
The ISS Li-ion orbital replacement units built around GS Yuasa cells are the largest flight batteries ever used on a crewed vehicle; Saft's VES16 and EaglePicher's space cells cover most Western science and defense spacecraft; and screened consumer cells have flown widely, with Sony US18650 VTC4 on the Ingenuity Mars helicopter, LG ICR18650 B3 on Europa Clipper, and LG INR18650-MJ1 on PACE.

## Economic profile
Two costs dominate, and neither is the cell chemistry. The first is qualification: lot acceptance testing on every cell batch, plus a life-cycle test that has to demonstrate the mission's cycle count at the mission's depth of discharge, which for a low-orbit satellite means years of continuous cycling in a chamber before the design is trusted. The second is mass, since the depth-of-discharge rule multiplies the pack. Work an example: a 5 kW low-orbit satellite draws 5 kW for about 0.58 hours of eclipse, so 2.9 kWh comes out of the pack each orbit; at 25% depth of discharge the pack has to hold 11.7 kWh, and at 120 Wh/kg that is roughly 100 kg, of which the eclipse actually uses a quarter. That arithmetic is done here rather than looked up, and at $2,000–6,000/kg to low orbit the launch cost of the margin alone runs into six figures. The clear cost-down move over the past decade has been screened commercial cells in place of space-qualified ones, which is what constellation operators do and what NASA now does on cost-capped missions. It works because 18650 and 21700 cells are made by the hundreds of millions for cars and tools, so the space buyer inherits a production line nobody in this industry could afford to build. Space-grade suppliers stay in business on the missions where a 15-year life or a crewed vehicle makes the screening argument unacceptable.

## Videos

- https://www.youtube.com/watch?v=47UotH8-9VU — Spacecraft Power (NASA Jet Propulsion Laboratory, 3 minutes, 50k+ views)

## Further reading

[State-of-the-Art of Small Spacecraft Technology: 3.0 Power (NASA)](https://www.nasa.gov/smallsat-institute/sst-soa/power-subsystems/) · [International Space Station Lithium-Ion Battery Status (NASA)](https://ntrs.nasa.gov/citations/20190002835)
