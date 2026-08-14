---
number: 12
name: Cryogenic Propellant Transfer
part: 3
group: Propellant transfer
orbit: [leo, cis]
scale: [t, ht]
autonomy: auto
customer: [civ, com]
maturity: planned
---

## Description
Cryogenic transfer moves liquid oxygen, methane, or hydrogen between vehicles, and unlike storable transfer it is a fluid management problem rather than a plumbing problem. At 25 psi, liquid oxygen boils at 95.6 K, methane at 118.4 K, and hydrogen at 22.3 K, so every one of these fluids is sitting at its boiling point inside the tank and any heat that gets in turns liquid into gas. In microgravity the liquid does not settle at the outlet; surface tension pulls it onto the walls and leaves the vapor bubble wherever it happens to be, so before anything flows you either fire small thrusters to settle the propellant under a fraction of a g or you fit a screen-channel liquid acquisition device that holds liquid at the outlet by capillary action until the pressure difference exceeds the screen's bubble point. The receiving tank then has to be chilled down, because a 300 K tank flashes incoming liquid straight to gas and pressurizes itself; the standard methods are charge-hold-vent cycling and spray cooling, and every gram vented during chilldown is propellant you no longer have. Ullage pressure has to be managed the whole time, since the receiver's vapor has to be condensed or vented as liquid comes in, and venting in microgravity risks throwing liquid overboard along with the gas. Nobody has transferred bulk cryogen between two spacecraft. SpaceX moved about 10 t of liquid oxygen between two internal tanks on Starship's third flight in March 2024, RRM-3 stored 42 liters of liquid methane on the ISS at essentially zero boiloff before a cryocooler failure canceled its transfer demonstration, and SHOOT moved 152 liters of superfluid helium between tanks on STS-57 in 1993 using properties no other cryogen has.

## Strengths and weaknesses
The reason to do this at all is performance: liquid oxygen with hydrogen or methane is the only chemical propellant combination with enough specific impulse to make lunar and Mars architectures close, and refilling a stage in orbit lets it launch nearly dry and then leave with a full tank. The weakness is that the losses are set by hardware and elapsed time rather than by how much propellant you deliver. Chilling an aluminum receiver tank from 300 K to 20 K removes roughly 170 kJ per kilogram of tank structure, and the hydrogen doing the cooling carries away between about 1,600 and 4,300 kJ/kg depending on how warm the vent gas leaves, which works out to roughly 0.04 to 0.11 kg of hydrogen spent per kilogram of receiver tank (derived here from published enthalpies, not a published rate). Real chilldowns land at the bad end of that range because up to 85% of the process sits in film boiling, where a vapor blanket insulates the wall from the liquid, and both tanks keep boiling off the entire time the operation runs. Put those together and a slow transfer of a small quantity can consume more propellant than it delivers, which is why the architecture question is always whether you can move a large load quickly rather than whether the transfer works at all. Measurement is the other soft spot: the best flown cryogenic mass gauging, on RRM-3, had about 2% uncertainty, and a 2% error on a 100 t transfer is 2 t of propellant nobody can account for.

## When to use
Use cryogenic transfer only when the mission genuinely needs cryogenic performance, which in practice means a lunar lander, a Mars stage, or a nuclear thermal vehicle, and plan for one large fast transfer rather than a series of small ones. If the receiver is small relative to the amount you want to move, stop and check the chilldown arithmetic, because the cost scales with the receiver's dry mass and can swallow the delivery. Choose settling over a liquid acquisition device if you have thrust and propellant to spare, since settled operations let you reuse mature upper-stage practice and give expulsion efficiencies above 99.5%; choose an acquisition device when a settling burn would cost more delta-v than the propellant it saves. If the spacecraft only needs a few hundred meters per second and can accept a lower specific impulse, use storable propellant and the storable transfer entry instead, because none of these problems arise. Budget active cooling from the start for anything that has to loiter, and see the boiloff control entry for what that costs in watts and kilograms.

## Key numbers
Boiling points at 25 psi of 95.6 K for liquid oxygen, 118.4 K for methane, and 22.3 K for hydrogen · roughly 170 kJ per kg of aluminum tank removed in a 300 K to 20 K chilldown · about 0.04–0.11 kg of hydrogen spent per kg of receiver tank structure (derived here) · up to 85% of line chilldown spent in film boiling · about 10 t of liquid oxygen moved between internal Starship tanks in March 2024 · 42 liters of methane held at zero boiloff by RRM-3 with about 2% gauging uncertainty · expulsion efficiency above 99.5% under settled operations.

## Examples
SpaceX's March 2024 Starship flight, which moved roughly 10 t of liquid oxygen between a header tank and the main tank under NASA's Tipping Point program; NASA's Robotic Refueling Mission 3 on the ISS, which stored liquid methane but lost its cryocooler before the transfer; Eta Space's LOXSAT-1 liquid oxygen fluid management mission; NASA's Reduced Gravity Cryogenic Transfer project, which tests line and tank chilldown with coated tubes and pulsed flow; the SHOOT superfluid helium transfer on STS-57 in 1993.

## Economic profile
This is entirely agency-funded technology development with one commercial vehicle riding on it. NASA's Cryogenic Fluid Management Portfolio Project pays for the component work, the four 2020 Tipping Point awards bought flight demonstrations from industry, and the paying customer for the capability is the Artemis program, which cannot land a crew without it. The cost that decides the architecture is not the transfer hardware but the number of tanker flights: a lunar lander needing a full propellant load in low Earth orbit implies several to many launches per mission, and every percent of propellant lost to chilldown and boiloff adds directly to that count. That is why the money goes into insulation, cryocoolers, and low-loss chilldown rather than into bigger pumps, since reducing losses is what removes launches. There is no service market here and probably will not be one soon, because the only buyers are the two or three organizations building cryogenic exploration vehicles, and each is solving the problem inside its own architecture rather than buying propellant from anyone. Whether refueling makes commercial sense at all is a mission-level question the `space-launch-and-satellites` sheet covers.

## Videos

- https://www.youtube.com/watch?v=u656se4e34M — SpaceX CRS-4 Launch - Fuel Slosh, internal fuel tank camera (5G to 0G) (malu5531, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=m4hvv2AfIhM — Demonstrating Rocket Fuel Transfer in Space (NASA Johnson, 9 minutes, 500k+ views)

## Further reading

[NASA's Developments in Cryogenic Fluid Management Technology (NASA)](https://ntrs.nasa.gov/citations/20240004242) · [Nitrogen flow boiling and chilldown experiments in microgravity using pulse flow and low-thermally conductive coatings (npj Microgravity)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9363417/)
