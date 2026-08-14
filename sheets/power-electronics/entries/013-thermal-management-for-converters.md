---
number: 13
name: Thermal Management for Converters
part: 2
group: Packaging & passives
power: [w, mw]
voltage: [lv, mv]
uses: [ev, it, ind]
maturity: comm
---

## Description
Every watt a converter loses has to travel from a semiconductor junction to the outside world through a stack of thermal resistances in series. In a power module the chain runs junction, die attach, ceramic substrate (alumina, aluminum nitride or silicon nitride), baseplate, thermal interface material, heatsink, coolant. Each layer is quoted in kelvin per watt and the numbers simply add: junction-to-case resistance for a modern module is roughly 0.05–0.3 K/W per switch, and the grease between baseplate and heatsink is often the single largest term in the whole stack, because it is 25–100 µm of a material conducting only 1–5 W/m·K. Junction temperature is capped at 150 °C for older silicon IGBTs and 175 °C for modern silicon and silicon carbide, and in a vehicle the coolant reaching the cold plate is already 65–90 °C, so the design lives inside the 60–100 °C of headroom left over. A converter's continuous rating is a thermal number rather than an electrical one, which is why cooling work usually buys more kilowatts per dollar than a better switch does.

## Strengths and weaknesses
Two changes do most of the work in modern modules. Direct-cooled baseplates put pin fins or an impinging jet straight onto the underside of the module and delete both the grease layer and the separate heatsink, typically cutting junction-to-coolant resistance by 20–40% with no extra die area. Sintered silver die attach replaces the solder layer and survives several times more power cycles, because sintered silver does not creep and fatigue the way a solder joint does. The costs are real: liquid cooling adds a pump, hoses, a radiator and a leak path into a box full of high voltage, and a direct-cooled baseplate locks the design into one vendor's module outline. Interface performance also depends on how the unit is assembled, since bond-line thickness, mounting torque and screw sequence all move it, so the laboratory number and the factory number differ. Grease then pumps out and dries with thermal cycling, which means the resistance a design was signed off on is the best it will ever be.

## When to use
If module losses stay under about 100 W and ambient stays below 50 °C, forced air over an extruded or folded-fin heatsink is the cheapest answer and it remains the cheapest answer. Go liquid above a few hundred watts per module, or whenever the converter sits in a vehicle, since the coolant loop is already there. If the design is liquid-cooled anyway, use a direct-cooled pin-fin baseplate and delete the interface material, because that is the largest single resistance available to remove. With silicon carbide, check transient thermal impedance at short times instead of the steady-state resistance, since the dies are small and heat up in milliseconds. Size on the junction temperature swing the mission profile actually produces rather than on the peak: cycles to failure scale roughly as the swing to the power -4 to -6, so cutting the swing from 80 °C to 60 °C multiplies life by about three to six (1.33^4 is 3.1 and 1.33^6 is 5.6). If you still cannot get the heat out, buy die area or better cooling rather than a faster switch.

## Key numbers
Junction-to-case resistance roughly 0.05–0.3 K/W per switch · interface grease 25–100 µm at 1–5 W/m·K, often the largest single term in the stack · junction limits 150 °C for older silicon IGBTs and 175 °C for modern silicon and SiC · vehicle coolant arrives at 65–90 °C, leaving 60–100 °C of headroom · direct-cooled pin-fin baseplates cut junction-to-coolant resistance 20–40% · cycles to failure scale as temperature swing to the power -4 to -6

## Examples
Infineon's HybridPACK Drive traction module with a pin-fin direct-cooled baseplate; Danfoss ShowerPower jet-impingement cold plates; Semikron Danfoss modules that use sintered silver die attach and pressure contact in place of baseplate solder; ECPE's AQG 324 automotive qualification guideline, which is where power-cycling test requirements for traction modules are written down.

## Economic profile
Cooling hardware is a small share of the bill of materials and it sets a large one. The cold plate, pump, hoses and radiator might be 5–15% of an inverter's cost while the silicon or silicon carbide they keep cool is 30–50%, so removing 20–40% of the thermal resistance lets the same die carry meaningfully more continuous current and is usually the cheapest dollar per kilowatt on the table. The same logic pays for sintered silver: it costs more per module than solder and returns several times the power cycles, which under an 8–10 year traction warranty is a warranty-reserve calculation rather than an engineering preference. Module vendors capture most of that value, because a direct-cooled baseplate is a proprietary outline and changing vendors means redesigning the cold plate around it. Buyers pay for that in second-source risk, which is why large automakers push for standardized module footprints. Thermal interface material is the odd item: it costs almost nothing, contributes the biggest single resistance in a conventional stack, and gets worse with age, so deleting it is worth more than improving it.

## Videos

- https://www.youtube.com/watch?v=JMh9FQPBdd8 — Power Electronics - Thermal Considerations (Power Electronics with Dr. K, 15 minutes, 10k+ views)
- https://www.youtube.com/watch?v=jJNbtRcpkUs — How to Select a Heat Sink (Same Sky, 6 minutes, 10k+ views)

## Further reading

[Thermal Resistance of IGBT Modules: Specification and Modelling (Semikron Danfoss)](https://assets.danfoss.com/documents/latest/444048/AB501651003501en-000201.pdf) · [Thermal Interface Materials for Power Electronics Applications (National Renewable Energy Laboratory)](https://docs.nlr.gov/docs/fy08osti/42972.pdf)
