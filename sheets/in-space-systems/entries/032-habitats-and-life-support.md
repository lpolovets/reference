---
number: 32
name: Habitats and Life Support
part: 6
group: Surface & resources
orbit: [leo, cis, surf]
scale: [t, ht]
autonomy: crew
customer: [civ, com]
maturity: ops
---

## Description
A habitat is a pressure shell, a thermal system, and a set of machines that keep the air and water inside it usable. The number that describes how good those machines are is closure, the fraction of each consumable recovered rather than resupplied. NASA's baseline figures put one crew member at 0.895 kg of oxygen consumed and 1.085 kg of carbon dioxide produced per day, about 1.56 kg of food as eaten, and roughly 3.2 kg of water for drinking and food preparation, which is about 5.7 kg a day of consumables with no recycling at all. The International Space Station closes those loops very unevenly. Its water recovery system now runs at roughly 96–98% closure, including a brine processor that recovers what the urine processor leaves behind. Oxygen closure sits near 50%, because the Sabatier reactor that recombines carbon dioxide with hydrogen only recovers part of it and the rest vents as methane. Food closure is zero, and every calorie eaten in orbit for 25 years has been launched.

## Strengths and weaknesses
Closure is worth buying and it gets steeply more expensive as it approaches 100%. Water is the easy win because it is the largest single mass flow, so recovering 96–98% of 3.2 kg a day removes roughly 3 kg of daily resupply per crew member for a fixed hardware and power cost. Oxygen is harder, because the recovery step is chemistry rather than filtration, and going past 50% needs a Bosch reactor or plasma pyrolysis that NASA has been developing for decades without flying operationally. What closure costs is mass, power, and spares. Making 0.9 kg of oxygen a day means electrolyzing about a kilogram of water, which at realistic efficiency is roughly 6 kWh, or about 250 W of continuous power per crew member for breathing gas alone (that figure is derived here). The other cost is maintenance, and the station's recycling hardware is among the most repaired equipment on board, so spares mass has to be counted against the resupply mass saved. Food is the loop nobody has closed, because growing a person's calories takes tens of square meters of crop area at a few hundred watts per square meter, which is kilowatts per person against 250 W for oxygen.

## When to use
Decide closure by mission duration and by what a kilogram of resupply costs where you are going. If the mission is weeks and resupply is routine, carry the consumables: open-loop hardware is lighter, simpler, and has almost nothing to break. If the mission is months to years in low Earth orbit, buy water recycling first, since it is the largest flow and the technology is operational. Add oxygen recovery next, and treat anything past about 50% closure as development rather than procurement. Do not plan on growing food to save mass on any mission now funded, because the power and area cost more than the food weighs; grow plants for crew morale, fresh produce, and research, and be honest that those are the reasons. On the shell, use a launched rigid or expandable module wherever the schedule matters, and consider regolith piled on top for radiation shielding on the surface rather than pressurized structure built in place. The market question for commercial stations is covered by Commercial space stations and platforms on this sheet; this entry is about what runs inside them.

## Key numbers
0.895 kg of oxygen consumed and 1.085 kg of carbon dioxide produced per crew member per day · about 1.56 kg of food and roughly 3.2 kg of water for drinking and food preparation · about 5.7 kg a day of consumables with no recycling · ISS water recovery 96–98%, oxygen recovery about 50%, food recovery zero · roughly 6 kWh, or about 250 W continuous per crew member, to electrolyze oxygen, derived here · tens of square meters of crop area per person at a few hundred watts per square meter · ISS operations and resupply averaged about $1.1B a year across FY2016 to FY2020

## Examples
The ISS environmental control and life support system is the only long-duration regenerative system with a real operating record: the Carbon Dioxide Removal Assembly, Oxygen Generation Assembly, Water Processing Assembly, Urine Processing Assembly, and the Brine Processing Assembly that pushed water recovery toward 98%. Shells span rigid aluminum modules such as Destiny, the roughly 1.4 tonne BEAM expandable module that added about 16 m³ to the station in 2016, and larger expandable designs such as Sierra Space's LIFE habitat. On the exploration side, NASA's shift from an orbital lunar strategy to a surface one has redirected Gateway's HALO power and avionics hardware into surface technology demonstrations, including systems meant to survive the lunar night.

## Economic profile
Life support is where the operating cost of human spaceflight actually sits. ISS operations and resupply averaged about $1.1B a year from FY2016 through FY2020, and the reason closure is worth engineering is that every kilogram not resupplied is a kilogram of cargo capacity freed at whatever the launch and delivery price is. In low Earth orbit that price is low enough that closure is a nice-to-have and open-loop systems remain viable for short missions; on the lunar surface, where a delivered kilogram runs about $1.2M, the calculus inverts completely and a system that saves 3 kg a day per crew member removes about 4,400 kg of annual resupply for a four-person crew, which at that delivery price is billions of dollars a year on paper. The catch is that the savings are only real if the hardware does not need its own mass back in spares, which is the calculation the equivalent-system-mass method exists to make, and it is why NASA evaluates a recovery technology on mass plus power plus consumables plus spares rather than on recovery percentage. Development is entirely agency-funded and has been for forty years, with commercial station operators inheriting the technology rather than inventing it. That inheritance is the interesting commercial fact here: a private station buys ECLSS built on ISS heritage, and the failure rates and spares demand come with it.

## Videos

- https://www.youtube.com/watch?v=BCjH3k5gODI — Water Recycling on the ISS (Canadian Space Agency, 2 minutes, 5m+ views)
- https://www.youtube.com/watch?v=CL9yyrFd1ek — How Does The ISS Get Oxygen? (Astro Bytes, 4 minutes, 100k+ views)

## Further reading

[Life Support Baseline Values and Assumptions Document (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20210024855) · [Plant and microbial science and technology as cornerstones to Bioregenerative Life Support Systems in space (npj Microgravity)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10449850/)
