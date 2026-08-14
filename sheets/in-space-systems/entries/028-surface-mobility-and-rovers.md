---
number: 28
name: Surface Mobility and Rovers
part: 6
group: Surface & resources
orbit: [surf]
scale: [hkg, t]
autonomy: tele
customer: [civ, sci, com]
maturity: ops
---

## Description
A surface rover is a chassis, a wheel and suspension system, a power supply, and some way of deciding where to put the wheels next. Vacuum removes the two things terrestrial vehicles rely on: tires cannot hold pressure and grease cannot stay in a bearing, so wheels are metal or composite and every joint is a dry or vacuum-rated lubrication problem. The Apollo Lunar Roving Vehicle used woven piano-wire mesh wheels with titanium chevron treads for exactly this reason. Traction comes from loose regolith with low bearing strength, so slope and wheel slip set the limit rather than motor torque: the LRV was designed for 20–23° in favorable conditions with a 25° maximum, and current lunar rovers sit in the same band. Speed is set by what a driver can see and react to. Apollo 15 and 16 averaged 2.0 and 1.7 m/s made good across their traverses against a design capability of 9–13 km/h, and the Apollo 16 mission report records a peak of 14 km/h. Dust is the other constant, because with no air to slow it, regolith thrown by a wheel flies a long ballistic arc, which is why fenders matter and why losing a fender extension on Apollo 16 and 17 covered the crew and the equipment.

## Strengths and weaknesses
Mobility does more for the return on a landing than almost anything else of the same mass. The three Apollo rovers turned walking distance into about 90 km of traverse across Apollo 15 to 17, and Chang'e-4's Yutu-2 has spent years crossing the far side because it can drive to a new site each lunar day rather than measuring one spot forever. The costs are mass, power, and wear. The vehicle has to carry its own energy through a 14-day night or shut down and be revived, the wheels take irreversible damage from sharp rock (Curiosity's aluminum wheels were holed within a few kilometers of driving over bedrock), and dust works into bearings, gears, and seals faster than anything designed on Earth expects. Reliability is not theoretical either: the Apollo 15 rover's front steering did not work at all, and the crew drove the whole mission on rear steering. Light time is the last constraint, and it is what makes the Moon a different product from Mars. A 2.6 s round trip lets an operator drive in a stop-and-look loop, while a 6 to 45 minute round trip to Mars forces the vehicle to plan its own path.

## When to use
Put wheels under an instrument when the science needs more than one place, and leave them off when it does not. If the measurement is of the landing site itself, a fixed instrument or an arm on the lander is far cheaper than a rover and does not have to survive driving. If you need to cover hundreds of meters to a few kilometers within one lunar day, a small solar rover in the 10–100 kg class is usually enough, and you should size it around the traverse you can complete before sunset rather than around top speed. If the route goes into a permanently shadowed region, budget power and heat for operating in the dark from the start, because a solar rover that drives into a cold trap is on a countdown. Plan on teleoperation on the Moon and autonomy on Mars: 2.6 s is workable if you accept a slow duty cycle, and anything faster than that has to run onboard. And check slope against slip, not against the motor rating, since the failure that ends a traverse is usually a wheel digging in on a 20° regolith slope rather than a lack of torque.

## Key numbers
LRV designed for 20–23° slopes, 25° maximum · design speed 9–13 km/h, 14 km/h peak recorded on Apollo 16 · actual speed made good 1.7–2.0 m/s on Apollo 15 and 16 · about 90 km of total Apollo traverse across three rovers · 2.6 s round-trip light time to the Moon against 6–45 minutes to Mars · NASA's first Lunar Terrain Vehicle awards were $219M to Astrolab and $220M to Lunar Outpost, with $188M plus a $280.4M option to Blue Origin for delivery · Astrolab's crewed vehicle about 900 kg and rated above 9.5 km/h

## Examples
Three Apollo Lunar Roving Vehicles (1971–72), the Soviet Lunokhod 1 and 2, which were driven from Earth in a stop-and-go loop, and Chang'e-4's Yutu-2, the longest-lived lunar rover. On Mars, Sojourner through Perseverance, which plans its own routes because nobody can drive it. Currently funded: NASA's Lunar Terrain Vehicle Services awards to Venturi Astrolab (CLV-1, derived from its FLEX architecture, about 900 kg and rated above 9.5 km/h) and Lunar Outpost (Pegasus, rated for up to a year of operation and manual, autonomous, or teleoperated driving), with delivery contracted to Blue Origin under CLPS task order CX-2; Astrolab's FLIP rover rides the Griffin-1 lander, and Lunar Outpost's MAPP rover flew on IM-2.

## Economic profile
NASA buys rover services rather than rovers, the same structure as CLPS, so the vendor builds and owns the vehicle and the agency pays fixed-price milestones for its use. The first phase of Lunar Terrain Vehicle Services went out in May 2026 as $219M to Astrolab and $220M to Lunar Outpost, which is roughly what a mid-size science spacecraft costs and is the largest commercial commitment to surface mobility ever made. Delivery is the other half of the bill and it scales the opposite way from intuition: NASA awarded Blue Origin $188M with a $280.4M option across two task orders to land the vehicles, and if that covers two vehicles of roughly 900 kg each, $468M works out near $260,000 per kilogram, about a fifth of the $1.2M/kg that small CLPS deliveries cost. That division is done here, not published. Bigger landers are cheaper per kilogram, and that is the main reason surface mobility at this scale is affordable now and was not five years ago. The commercial demand is thin. Beyond agency contracts, the paying customers so far are payload hosts renting space on a small rover, such as the Nokia LTE experiment carried by Lunar Outpost's MAPP, and those are marketing budgets rather than operations budgets. The realistic path to a second customer runs through construction and prospecting work, where a rover doing site preparation or hauling regolith is billed by the hour, and none of that exists yet.

## Videos

- https://www.youtube.com/watch?v=u2qs-l0vgGw — How did the Lunar Roving Vehicle work? (NASA) (Jared Owen, 16 minutes, 1m+ views)
- https://www.youtube.com/watch?v=26oQ3m5EHrg — Spacecraft with Wheels: The Lunar Roving Vehicle (archival film) (NASA's Marshall Space Flight Center, 15 minutes, 100k+ views)

## Further reading

[Best Practices for the Testing of Planetary Roving Vehicle Mobility Systems and Tires (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20250003470) · [NASA Provides Update on Moon Base Rovers, Landers, Missions (NASA)](https://www.nasa.gov/news-release/nasa-provides-update-on-moon-base-rovers-landers-missions/)
