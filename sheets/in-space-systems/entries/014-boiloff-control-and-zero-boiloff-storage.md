---
number: 14
name: Boiloff Control and Zero-Boiloff Storage
part: 3
group: Propellant transfer
orbit: [leo, cis, deep]
scale: [hkg, ht]
autonomy: auto
customer: [civ, com]
maturity: planned
---

## Description
A cryogenic tank holds liquid at its boiling point, so every watt that gets in turns liquid into vapor, and the vapor has to be vented before it bursts the tank. Passive control slows the leak: multilayer insulation, a sunshield, low-conductivity struts, thermal coatings, and vapor-cooled shields that route the escaping cold gas through the structure so it intercepts heat on the way out. Active control removes the heat instead of resisting it, using a cryocooler connected to the tank either as tubing bonded to the wall or as a cooled shield buried inside the insulation, an arrangement NASA calls broad area cooling. The two are usually stacked, because a 90 K cooler is far more efficient than a 20 K one, so a 90 K shield intercepts most of the incoming heat and a smaller 20 K machine finishes the job for hydrogen. Scale matters more than anything else here: heat leak grows with surface area while capacity grows with volume, so small tanks lose a much larger fraction per day than big ones, and hydrogen loses roughly eight times the volume fraction that oxygen does because its latent heat per unit volume is about 32 MJ/m³ against oxygen's 243 MJ/m³. NASA's own analysis puts an 8.4 m diameter liquid hydrogen tank at a few hundred watts of heat leak without a 90 K shield and over 1,000 W if the surrounding structure is aluminum, which on the roughly 22 t such a tank holds works out to about 0.26% per day at 300 W and 0.88% per day at 1,000 W (arithmetic derived here from hydrogen's 446 kJ/kg latent heat, not a published rate).

## Strengths and weaknesses
Passive measures are cheap, weightless in operating terms, and cannot fail, but they only slow the loss. Ground testing on NASA's SHIIVER rig cut the boiloff rate of a large hydrogen tank by about 46% at half-full by adding multilayer insulation to the domes, and a 90 K broad-area-cooling shield with cooled penetration straps cut it by about 60% in the reduced-boiloff tests, which still leaves a rate that accumulates over a mission measured in hundreds of days. Only a cryocooler reaches zero, and it is paid for in power and mass. Flight cryocoolers available today lift less than 1 W at 20 K and about 20 W at 90 K; NASA's development articles are more than an order of magnitude beyond that, and the Creare reverse turbo-Brayton machine built for liquid hydrogen delivered 19.2 W at 20 K for about 1.8 kW of input power, at a flight-projected 106 kg and 5.5 kg per watt of lift. That 1.8 kW has to come from a solar array and leave through a radiator, so the real system mass is well above the cooler itself, and the machine is a single point of failure that takes the propellant with it: RRM-3 held 42 liters of liquid methane at essentially zero boiloff on the ISS for four months and then lost its cryocooler, which ended the mission's transfer demonstration.

## When to use
If the cryogenic phase of the mission lasts days, insulate and accept the loss, because a cryocooler and its power system will mass more than the propellant they save. If it lasts months, add a 90 K shield with broad area cooling, which is the cheapest large reduction available and is efficient enough to be worth its power. If it lasts a year or more, or if the propellant is hydrogen, plan for full zero-boiloff from the start, because passive insulation cannot get the rate to zero and losses accumulate linearly with time while insulation improvements do not. Size the 90 K stage first and let it knock the load down before the 20 K stage sees it, since a 20 K watt costs several times what a 90 K watt costs. Budget the radiator and array alongside the cooler rather than after it, and see the radiators and the two-phase loops entries for what rejecting a couple of kilowatts actually takes.

## Key numbers
Hydrogen's latent heat is about 32 MJ/m³ against oxygen's 243 MJ/m³, roughly an 8:1 boiloff penalty by volume · a few hundred watts of heat leak on an 8.4 m hydrogen tank, over 1,000 W with aluminum structure · about 0.26%/day at 300 W and 0.88%/day at 1,000 W on a 22 t load (derived here) · dome multilayer insulation cut boiloff about 46% in SHIIVER testing, a 90 K cooled shield about 60% · today's flight cryocoolers lift under 1 W at 20 K and about 20 W at 90 K · 19.2 W at 20 K for 1.8 kW input, 106 kg flight projection and 5.5 kg per watt · 42 liters of methane held at zero boiloff on the ISS for four months by RRM-3.

## Examples
NASA Glenn's SMiRF facility reduced-boiloff and zero-boiloff tests, which achieved steady-state zero boiloff on a 1.4 m³ hydrogen tank with a tube-on-tank cryocooler; the SHIIVER rig, which tested dome insulation and vapor-cooled skirts on an upper-stage-scale tank; Creare's 20 W at 20 K reverse turbo-Brayton cryocooler and the parallel 150 W at 90 K developments for oxygen and methane; RRM-3's zero-boiloff methane storage on the ISS; NASA's planned large integrated flight demonstration, which pairs 20 K and 90 K broad area cooling on a 261 kg liquid hydrogen load.

## Economic profile
The currency here is mass and watts rather than dollars, because there is no catalog price for a space cryocooler and the units are effectively hand-built to order. What a program pays is roughly 5.5 kg per watt of 20 K lift plus the array and radiator to serve 1.8 kW, and what it buys back is propellant that would otherwise be vented, so the trade closes as soon as the mission is long enough that the vented mass exceeds the cooling system mass. That is why hydrogen architectures carry coolers and short-duration oxygen stages do not. Development is funded almost entirely by NASA's Cryogenic Fluid Management portfolio, spread across two vendors and two cycles, Brayton from Creare and Stirling from Converter Source, which is a deliberate second-source strategy in a market too small to support competition on its own. The one thing that could widen that market is in-situ propellant production, since liquefying oxygen or methane on the Moon or Mars needs the same 90 K machines at similar capacity, and liquefying 0.3 kg of hydrogen an hour needs 150 to 300 W at 20 K. If those two demand sources arrive together, the per-unit cost falls for both; if neither arrives, this stays a portfolio of technology contracts.

## Videos

- https://www.youtube.com/watch?v=BXl4cS57PVw — Why Is It So Difficult to Store Rocket Fuel in Space? - SpaceX & Blue Origin's Biggest Headache (Space Beetle, 9 minutes, 1k+ views)

## Further reading

[NASA Cryocooler Technology Developments and Goals to Achieve Zero Boil-Off and to Liquefy Cryogenic Propellants for Space Exploration (NASA)](https://ntrs.nasa.gov/citations/20180004709) · [Cryogenic Fluid Management (CFM) (NASA)](https://www.nasa.gov/space-technology-mission-directorate/tdm/cryogenic-fluid-management-cfm/)
