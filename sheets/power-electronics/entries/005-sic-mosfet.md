---
number: 5
name: SiC MOSFET
part: 1
group: Wide bandgap switches
power: [kw, mw]
voltage: [mains, mv]
semiconductor: [sic]
uses: [ev, grid, ind]
maturity: scale
---

## Description
A silicon carbide MOSFET is the same vertical structure as a silicon one, built in 4H-SiC instead. The material's critical breakdown field is about 2.8–3 MV/cm against silicon's 0.3, so a drift region blocking the same voltage can be roughly ten times thinner and about a hundred times more heavily doped, and specific on-resistance falls by more than two orders of magnitude. At 1200 V a production SiC MOSFET runs about 2.5–3 mΩ·cm², where an ideal silicon MOSFET at that rating would be near 415 mΩ·cm². It stays a majority-carrier device, so there is no stored plasma and no tail current, and turn-off energy is a fraction of a 1200 V IGBT's, which is what makes 20–100 kHz practical on a 600–1000 V bus. The trade-offs come from the same wide bandgap: the intrinsic body diode has a 3–4.5 V forward drop so third-quadrant conduction is expensive, and the SiC-to-oxide interface traps enough charge that channel mobility is low, gates need +15 to +20 V to fully turn on, and a negative off-state bias of -2 to -5 V is needed to stop the 20–50 V/ns dv/dt from turning the device back on through its gate-drain capacitance. Discretes are sold at 650, 750, 1200, 1700 and 2000–2300 V, modules at 3300 V for rail traction, with 6500 V devices sampling and 10 kV parts still in the lab.

## Strengths and weaknesses
The gain is real and it shows up twice: switching loss falls far enough to raise the frequency and shrink the magnetics, and conduction loss falls as the square of current rather than sitting on a 1.5 V knee, so light-load efficiency improves sharply. That second effect matters more than the first in a car, because a vehicle spends most of its life well below rated torque. The weaknesses start with price, roughly three times a silicon IGBT per amp. Short-circuit withstand is only 2–3 µs against the IGBT's 10, because the current density is so much higher that the die heats faster, so protection has to detect and act inside a microsecond. Gate oxide reliability and threshold voltage drift under bias stress are still qualification items rather than settled ones, the fast dv/dt stresses motor winding insulation and makes EMI harder, and the body diode's history of bipolar degradation, where basal-plane dislocations expand into stacking faults under diode current and slowly raise on-resistance, is controlled by epitaxy screening rather than eliminated.

## When to use
Use SiC when the DC bus is 600 V or higher and either the switching frequency needs to exceed about 20 kHz or light-load efficiency drives your figure of merit. In practice that means EV traction inverters, DC fast-charging stages, on-board chargers, PV string inverters above roughly 10 kW, and grid-tied battery converters. If the vehicle architecture is 800 V, treat SiC as the default rather than an upgrade, because the reported range gain over silicon IGBTs on the same battery runs around 5–10%, and the cells that saves cost more than the extra devices do. If you run an industrial drive at near-rated torque all day below 10 kHz, stay on IGBTs: conduction loss dominates, the SiC premium does not pay back, and you also give up the 10 µs short-circuit margin. Below 650 V and under about 10 kW, look at GaN first, which is cheaper and faster in that window. Whatever you pick, budget for a gate driver with sub-microsecond desaturation response, negative off-state bias, and a layout whose loop inductance is small enough that 20–50 V/ns does not ring the gate.

## Key numbers
Critical field 2.8–3 MV/cm against silicon's 0.3, so the drift is roughly 10 times thinner and 100 times more heavily doped · specific on-resistance 2.5–3 mΩ·cm² at 1200 V, against about 415 mΩ·cm² for ideal silicon · ratings sold at 650–2300 V discrete and 3300 V in modules · body diode drop 3–4.5 V · short-circuit withstand 2–3 µs · dv/dt of 20–50 V/ns · roughly 3 times the price per amp of a silicon IGBT.

## Examples
Tesla's Model 3, which in 2017 put STMicroelectronics SiC MOSFETs into the first mass-market traction inverter; the 800 V Hyundai E-GMP and Porsche Taycan platforms; Wolfspeed C3M and Gen 4 discretes; Infineon CoolSiC; onsemi EliteSiC; ROHM's fourth-generation trench devices; 3.3 kV SiC modules from Mitsubishi and Hitachi Energy for rail traction.

## Economic profile
The substrate is the business. Silicon carbide boules are grown by physical vapor transport above 2,000 °C at a few millimeters an hour, then sliced from a material almost as hard as diamond, so the wafer is roughly 40–50% of the finished device cost, where in silicon it is a small fraction. That is why the cost curve here is a substrate story: 150 mm wafer prices fell from over $1,000 to a few hundred dollars as capacity came on and Chinese suppliers entered, and 200 mm production started between 2023 and 2025, which raises usable area per wafer by about 1.8 times. Devices still sell for roughly three times an equivalent silicon IGBT per amp, and the consensus is that 200 mm plus two device generations roughly halves SiC cost by 2030 without closing that gap. The buyer's arithmetic in a car is not device cost but battery cost: a 5% range gain on a 75 kWh pack is about 3.75 kWh of cells, which at $100/kWh is roughly $375 of avoided battery against a few hundred dollars of extra devices, and that calculation, derived here rather than published, is what made SiC standard on 800 V platforms. The capital needed to get there is enormous, though: Wolfspeed spent billions on a 200 mm fab and a materials plant, filed for Chapter 11 in 2025, and emerged a few months later after restructuring, which is the clearest evidence that owning substrate capacity is where the risk lives. Margin tends to go to the vertically integrated suppliers who make their own wafers, which is why STMicroelectronics, Infineon, onsemi and ROHM all bought or built substrate capacity rather than buying merchant.

## Videos

- https://www.youtube.com/watch?v=yHn_LvwQMcg — Silicon Carbide: A Power Electronics Revolution (Asianometry, 15 minutes, 100k+ views)
- https://www.youtube.com/watch?v=bqdyve-hhZY — Silicon vs Silicon Carbide Transistors - Workbench Wednesdays (element14 presents, 9 minutes, 10k+ views)

## Further reading

[Silicon Carbide Power Modules (Semikron Danfoss)](https://assets.danfoss.com/documents/latest/444237/AB501650292496en-000201.pdf) · [PowerAmerica (Final Technical Report) (US Department of Energy)](https://www.osti.gov/biblio/3012135)
