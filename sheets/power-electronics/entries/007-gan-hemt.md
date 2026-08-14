---
number: 7
name: GaN HEMT
part: 1
group: Wide bandgap switches
power: [w, kw]
voltage: [lv, mains]
semiconductor: [gan]
uses: [cons, it, ev]
maturity: scale
---

## Description
A gallium nitride high-electron-mobility transistor carries current in a two-dimensional electron gas that forms where an AlGaN layer meets a GaN layer. The polarization difference between the two materials pulls electrons into a sheet at that interface, roughly 10^13 cm^-2 of them, with mobility around 1,500–2,000 cm^2/V·s, and because no dopants are needed to make the channel there is nothing in it for the electrons to scatter off. Current flows sideways from source to drain, which makes this a lateral device, unlike the vertical silicon and SiC transistors it competes with. Almost all of it is grown on 150 mm or 200 mm silicon wafers over a thick transition buffer, so the die can be made on depreciated CMOS equipment rather than on a specialty substrate. The natural device is normally on, which is unusable in a converter, so every commercial part is made normally off in one of two ways: a p-type GaN layer under the gate, or a normally-on GaN die stacked in series with a low-voltage silicon MOSFET in a cascode.

## Strengths and weaknesses
Charge is the strength. A 650 V GaN transistor carries roughly a fifth to a tenth the gate and output charge of a superjunction silicon MOSFET with the same on-resistance, and it has no body diode, so there is no reverse recovery charge to dump into the opposite switch. That is what allows hard switching at 300 kHz to 1 MHz where silicon sits at 65–100 kHz. The weaknesses start at the gate: enhancement-mode parts are driven at 5–6 V against an absolute maximum near 7 V, so a couple of volts of gate ringing destroys the device and layout stops being a matter of preference; a cascode keeps the familiar 0–12 V drive but adds the silicon MOSFET's output capacitance and its recovery charge back into the loop. Reverse conduction runs through the channel rather than a diode and costs 2–3 V or more, so dead time is expensive and has to be kept short. And the datasheet on-resistance understates what the part does in a converter: charge trapped in the buffer and at the surface during the off state raises resistance transiently after every switching event, by tens of percent depending on off-state voltage, dwell time, temperature and frequency, which is why JEDEC wrote JEP173 to define how to measure it.

## When to use
Reach for GaN when what you are being paid for is size rather than efficiency. In a 65–300 W adapter, a server supply, or an on-board charger, going from 100 kHz to 500 kHz shrinks the transformer and the input capacitor enough to halve the enclosure, while the efficiency gain over a good superjunction MOSFET is often only a few tenths of a point. Use enhancement-mode parts with a driver built for them if you control the layout and can hold the gate loop to a few nanohenries; use a cascode if keeping a standard driver matters more than the extra charge it brings. Above 650 V, do not plan on GaN, because commercial lateral parts stop there and SiC is the answer at 1,200 V. If the converter is soft-switched at low frequency and the box has room, silicon is still cheaper per amp and always will be.

## Key numbers
Two-dimensional electron gas around 10^13 cm^-2 with mobility 1,500–2,000 cm^2/V·s · commercial lateral ratings stop at 650 V · gate and output charge roughly a fifth to a tenth of a superjunction MOSFET at equal on-resistance · enhancement-mode gate driven at 5–6 V against an absolute maximum near 7 V · reverse conduction drop of 2–3 V through the channel · hard switching at 300 kHz–1 MHz against 65–100 kHz for silicon · dynamic on-resistance rises tens of percent after switching

## Examples
Navitas, Power Integrations and Innoscience parts in USB-C fast chargers, which is where GaN first reached consumer volume; Infineon's CoolGaN and the cascode families from onsemi and Transphorm; Texas Instruments' integrated GaN half bridges in 80 PLUS Titanium server supplies; JEDEC JC-70's JEP173 and JEP180, written because silicon qualification does not cover charge trapping; imec's work moving GaN-on-Si epitaxy to 300 mm wafers.

## Economic profile
The die is cheap, and what gets sold is the saving everywhere else. GaN-on-Si grows on 150–200 mm silicon wafers on existing CMOS equipment, and a 650 V GaN die is small because its on-resistance per unit area is low, so at volume the wafer cost behind each part can approach silicon's. What has held prices up is epitaxy yield rather than the substrate. The saving shows up in the rest of the bill of materials: a 65 W charger at 500 kHz needs a smaller transformer, smaller output capacitors and a smaller case, and the thing a consumer actually buys is a charger a third the size for the same money. That is why the volume arrived in adapters first, then in server supplies where 80 PLUS Titanium is worth real money to a data center operator, and only later in automotive on-board chargers where qualification takes years. The commercial risk is that this is a commodity race with no substrate moat: several Chinese suppliers are pricing 650 V GaN aggressively, and anyone with a silicon fab and the epitaxy recipe can enter.

## Videos

- https://www.youtube.com/watch?v=UJqY00xPWmY — GaN Power devices - the HEMT (Power Devices and Circuits, 20 minutes, 10k+ views)
- https://www.youtube.com/watch?v=pCVtudewe_4 — What is Gallium Nitride (GaN) ? GaN in Electronics (ALL ABOUT ELECTRONICS, 7 minutes, 10k+ views)

## Further reading

[GaN technology for next-gen power electronics (imec)](https://www.imec-int.com/en/articles/unlocking-full-potential-gan-technology-next-gen-power-electronics) · [GaN power devices and applications reliability (PowerAmerica)](https://poweramericainstitute.org/wp-content/uploads/2021/11/9.-GaN-reliability-tutorial-BAHL-1.pdf)
