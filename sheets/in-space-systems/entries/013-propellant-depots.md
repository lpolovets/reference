---
number: 13
name: Propellant Depots
part: 3
group: Propellant transfer
orbit: [leo, cis]
scale: [hkg, ht]
autonomy: auto
customer: [civ, com]
maturity: concept
---

## Description
A depot is a tank that stays in orbit, is filled by tankers over weeks or months, and dispenses propellant to customers on demand. The tank is the easy part. Around it you need power, thermal control good enough that the contents survive the wait, attitude control and station-keeping to hold an orbit for years, a docking mechanism and a fluid interface that arriving and departing vehicles both speak, and gauging accurate enough that a buyer knows what was delivered. Thermal design dominates the layout for cryogens: ULA's 2008 depot study put a conical sunshield up to 80 feet long in front of a liquid oxygen tank, parked it at 1,300 km to cut atomic oxygen erosion and drag, and chose a near-zero beta angle for the longest possible eclipse, which brought absorbed sidewall heat flux to about 0.5 BTU per hour per square foot and boiloff below 0.1% of a full tank per day. Storable depots need none of that, because hydrazine and high-test peroxide do not boil off, which is why the only depot ever flown carries a storable. Orbit Fab's Tanker-001 Tenzing went up in June 2021 with high-test peroxide and RAFTI ports and has never transferred fluid to anything. The follow-on, Kamino, is funded through the Defense Innovation Unit's RAPIDS program and is meant to supply 50 kg of hydrazine to a Tetra-5 satellite in geostationary orbit.

## Strengths and weaknesses
A depot separates the rate propellant arrives from the rate it is used, which is the entire point: you can accumulate a load with many small launches and then hand it over in one operation, and a customer can plan a mission that no single launch supports. It also amortizes the expensive parts, since the avionics, thermal system, docking mechanism, and station-keeping propellant are launched once and used many times, where a tanker flown per customer repeats all of it every trip. The weakness is that a depot loses money and propellant while it waits. There is no revenue during an idle period, station-keeping still burns propellant, and for a cryogenic depot the boiloff rate sets a hard shelf life: at 0.1% per day a full load is 3% lighter after a month and 30% lighter after a year. That makes utilization the binding design variable, and utilization depends on customers who do not yet exist.

## When to use
Treat a depot as a business decision, not an engineering one. Build one if you have a committed buyer with a schedule, because the whole case rests on throughput and an unsold depot is worse than no depot. If you have one customer and one delivery, fly a tanker instead and skip the station-keeping, the shelf life, and the years of on-orbit risk. If the propellant is storable, the depot can wait years for a buyer, which is why every near-term commercial depot is a hydrazine or peroxide depot rather than a cryogenic one. If the propellant is cryogenic, size the thermal system against the expected time between fill and sale rather than against a nominal mission duration, and read the boiloff control entry before assuming passive insulation is enough. The `space-launch-and-satellites` sheet covers whether the refueling market exists at all; this entry is about what the hardware has to do if it does.

## Key numbers
Boiloff below 0.1% of a full tank per day in ULA's shielded liquid oxygen depot design · roughly 0.5 BTU per hour per square foot of absorbed sidewall heat flux · a sunshield up to 80 feet long at a 1,300 km orbit · 3% of a load lost per month and about 30% per year at 0.1% per day · one depot flown to date, Tanker-001 Tenzing in June 2021, with zero fluid dispensed · 50 kg of hydrazine planned from the Kamino depot to Tetra-5 · roughly $20M for 100 kg of hydrazine delivered in GEO, which is $200,000 per kilogram, as the only published price target.

## Examples
Orbit Fab's Tanker-001 Tenzing, the first and so far only propellant depot in orbit, and its Kamino successor funded through DIU's RAPIDS program; ULA's cryogenic depot design based on Centaur flight practice, launched on a single medium EELV with no orbital assembly; the Starship propellant depot in NASA's Artemis lander architecture, which is a depot inside one company's mission rather than a facility anyone else can buy from; NASA's long line of unbuilt depot studies going back to the 1970s.

## Economic profile
The honest summary is that this is a commercial problem rather than an engineering one. Nothing about the hardware is beyond what has flown, and every serious study since the 1970s has concluded roughly that, but no customer has committed to buying propellant on a schedule, so no depot gets financed and no spacecraft gets designed assuming one exists. The only published price target in the business is Orbit Fab's roughly $20M for 100 kg of hydrazine delivered in geostationary orbit, which is $200,000 per kilogram and far above the cost of simply launching a fuller tank, and it stays there until a depot is filled once and drained many times. Government is doing what it usually does when a market will not form on its own: DIU is paying for the RAPIDS depot, the Space Force is paying for the Tetra-5 demonstration that will buy from it, and both sides of the first transaction are the same customer. Commercial satellite operators say plainly that they intend to be fast followers, using infrastructure somebody else builds, which is a rational position and also the reason nobody builds it. The thing to watch is the first purchase order from a non-government buyer with a delivery date on it. Another successful demonstration would not move this category; a signed order would.

## Videos

- https://www.youtube.com/watch?v=fjWCEFioT_Y — Starship Orbital Propellant Depot (Eager Space, 19 minutes, 10k+ views)

## Further reading

[A Practical, Affordable Cryogenic Propellant Depot Based on ULA's Flight Experience (NASA)](https://ntrs.nasa.gov/citations/20130010201) · [The Economics of Orbital Mass: How Depots Can Work in LEO and Where to Put Them (COSMIC)](https://cosmicspace.org/wp-content/uploads/2026/03/FINAL_Economics-of-Orbital-Mass.pdf)
