---
number: 15
name: Power Factor Correction
part: 3
group: Non-isolated converters
power: [w, kw]
voltage: [mains]
semiconductor: [si, gan, sic]
uses: [it, cons, ev]
maturity: comm
---

## Description
A diode bridge feeding a bulk capacitor draws current only near the peaks of the AC waveform, in short tall spikes, which gives a power factor of 0.5–0.65 and a current total harmonic distortion above 100%. Power factor correction forces the input current to follow the shape of the line voltage instead. The standard circuit is a boost converter placed after the bridge, with its current loop commanded to track a scaled copy of the rectified line voltage, which yields a power factor around 0.99, THD under 5%, and a 390–400 V DC bus from anything between 90 and 265 V AC in. The reason it exists is regulation: IEC 61000-3-2 caps harmonic current for equipment drawing up to 16 A per phase, and the Class D limits covering PCs, televisions and monitors are written in milliamps per watt of input power and apply above 75 W, which no passive front end meets. The fixed bus is a useful side effect, because the converter downstream then sees one input voltage rather than a 3:1 range and can be designed for it.

## Strengths and weaknesses
Active PFC makes a switching load look resistive to the utility and hands the next stage a fixed bus, and above 75 W in Europe and most other markets it is not optional. It costs an inductor, a switch, a diode, a bulk capacitor and a controller, usually 5–10% of a power supply's bill of materials, plus efficiency. The efficiency loss has a specific cause: current passes through two bridge diodes and the boost switch at all times, three semiconductor drops in the conduction path, which caps a good boost PFC at 96–97%. Bridgeless topologies delete the bridge, and the totem-pole arrangement is the one that won, using a fast leg of two wide-bandgap switches plus a slow leg commutating at line frequency, so only two drops remain and 98–99% is reachable. It was impractical in continuous conduction with silicon superjunction MOSFETs, whose body diode recovers far too slowly, and became a product only once gallium nitride HEMTs (which have no body diode) and silicon carbide were available. Its remaining weakness is control, since current has to reverse cleanly at every line zero crossing and a mishandled transition puts a large spike through the fast leg.

## When to use
If you are building anything above 75 W that plugs into a wall socket in Europe, and in practice in most other markets, you need active PFC and there is no compliant way around it. Below 75 W, a passive valley-fill circuit or nothing at all is the right answer. Between roughly 75 W and 300 W where cost decides, use a critical-conduction-mode boost: one switch, no diode reverse-recovery loss, and a cheap controller. Above about 300–500 W, move to continuous conduction mode with a silicon carbide Schottky diode, or interleave two phases to halve the input ripple current and share the load. Go totem-pole with gallium nitride or silicon carbide when the target is 80 PLUS Titanium or an EV on-board charger, and budget engineering time for the zero-crossing control instead of assuming a reference design transfers. If power has to flow backwards, as it does for vehicle-to-grid or vehicle-to-load, totem-pole is the only one of these that runs in reverse as an inverter.

## Key numbers
Uncorrected diode-bridge front end gives 0.5–0.65 power factor and over 100% current THD · active PFC gives about 0.99 power factor and under 5% THD · 390–400 V DC bus from a 90–265 V AC input · IEC 61000-3-2 Class D limits apply above 75 W · classic boost PFC peaks at 96–97%, totem-pole reaches 98–99% · the stage is roughly 5–10% of a power supply's bill of materials

## Examples
80 PLUS Titanium server and desktop power supplies; gallium nitride totem-pole front ends in EV on-board chargers from suppliers such as Delta Electronics and BorgWarner; critical-conduction-mode boost controllers from onsemi and Infineon in televisions, monitors and LED drivers; IEC 61000-3-2 and its European version EN 61000-3-2, which are what make the stage mandatory.

## Economic profile
The PFC stage adds roughly $2–8 of parts to a 500 W to 1 kW supply and produces no output of its own, so on a cost sheet it reads as pure compliance. At the high end the efficiency argument pays for it a second time. A 1 kW load running continuously consumes 8,760 kWh a year, two points of efficiency is about 175 kWh of that, and at $0.08/kWh that is roughly $14 a year (arithmetic done here, not a published figure), which covers a $10–20 premium for a better front end within two years and covers it again in reduced cooling load. That is the calculation that pulled gallium nitride into totem-pole PFC, because a hyperscale buyer is the rare customer who runs the numbers over a machine's whole life rather than at purchase. The margin sits with the controller and switch vendors rather than the supply builders, who work on contract-manufacturing margins: onsemi, Infineon, Texas Instruments and Monolithic Power Systems price the controller cheaply and the switches at a premium. For the gallium nitride suppliers, adapters and PFC front ends are the volume business that funds the rest of the roadmap.

## Videos

- https://www.youtube.com/watch?v=U5cqrrhq9TA — The Most Important Circuit for our Electrical Future?! (PFC) EB#55 (GreatScott!, 11 minutes, 1m+ views)
- https://www.youtube.com/watch?v=eI_LQWrQam4 — Fixing the Full Bridge Rectifier’s Big Flaw - Active Power Factor Correction (ElectrArc240, 12 minutes, 500k+ views)
- https://www.youtube.com/watch?v=W-wbEphS1fc — High-Power PFC: Totem-Pole PFC vs. Interleaved Boost PFC (Monolithic Power Systems | MPS, 2 minutes, 50k+ views)

## Further reading

[Power Factor Correction: Optimization Options (onsemi)](https://www.onsemi.com/download/white-papers/pdf/tnd6278-d.pdf) · [IEC 61000-3-2:2018, Limits for harmonic current emissions (International Electrotechnical Commission)](https://webstore.iec.ch/en/publication/28164)
