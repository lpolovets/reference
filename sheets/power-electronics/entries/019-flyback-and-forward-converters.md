---
number: 19
name: Flyback and Forward Converters
part: 3
group: Isolated converters
power: [w]
voltage: [lv, mains]
semiconductor: [si, gan]
uses: [cons, it, ind]
maturity: comm
---

## Description
Both topologies put a transformer between input and output so the load is galvanically isolated from the line, and they differ in what that transformer does. A flyback transformer is really a gapped coupled inductor: while the switch is on it stores energy in the gap, and when the switch turns off the energy is delivered to the secondary through the output diode. A forward converter uses the transformer the ordinary way, passing power across while the switch is on, so it needs an output inductor and a freewheel diode to filter, and it needs a way to reset the core each cycle, whether a tertiary winding, an RCD clamp, an active clamp, or a second switch. A single-switch forward with a 1:1 reset winding is limited to under 50% duty cycle and its switch sees twice the input voltage. Flybacks are practical from about 5 W to 150 W, or 250 W with quasi-resonant or active-clamp control; forwards cover roughly 50–500 W, and the two-switch version reaches about 1 kW.

## Strengths and weaknesses
The flyback is the cheapest isolated converter there is: one switch, one magnetic component, one output diode, plus a controller and an optocoupler. It tolerates a wide input range and gives an extra output for the price of another winding. Its weaknesses all follow from storing energy in the transformer, which makes the core larger than a forward transformer of the same rating, puts high ripple current into the output capacitor, and leaves leakage inductance to be snubbed, which burns power and radiates. Typical efficiency is 80–90%, against 85–92% for a forward and 92–94% for an active-clamp forward with synchronous rectification. What the forward costs is parts: the reset scheme, the output inductor and the second rectifier.

## When to use
Under about 75 W, use a flyback. Nothing has a lower parts count and the efficiency penalty is small in absolute watts at that power. Between roughly 75 W and 200 W, if output ripple or efficiency is specified tightly, use a forward, and pick the two-switch or active-clamp version so the switch voltage stress stays bounded. Above 200–300 W, stop using either and move to a half-bridge or an LLC resonant converter, where switching loss stops scaling the way it does here. If you need several isolated outputs cheaply and their loads are not tightly regulated, the flyback stays the right answer across all of these powers. If the design has to hit a no-load draw under about 30 mW for DoE Level VI or the EU Code of Conduct, pick a controller with burst mode at the start rather than trying to trim milliwatts at the end.

## Key numbers
Flyback practical from about 5 W to 150 W, 250 W with quasi-resonant or active-clamp control · forward roughly 50–500 W, two-switch to about 1 kW · single-switch forward under 50% duty cycle with 2x input voltage on the switch · efficiency 80–90% flyback, 85–92% forward, 92–94% active-clamp forward with synchronous rectification · no-load draw under 30 mW achievable

## Examples
Nearly every phone charger and laptop adapter under 65 W; the housekeeping and gate-drive bias supplies inside larger converters, including EV on-board chargers and industrial drives; two-switch forwards in 200–500 W telecom and server auxiliary supplies and in welding inverters; controller families such as onsemi's NCP1252 and FPS parts and ST's L6590 and L5991A.

## Economic profile
This is a bill-of-materials business with short design cycles and thin margins. A 10 W flyback adapter's electronics come to roughly $1–2 at volume, with the transformer and the enclosure the two largest pieces and the controller IC at $0.10–0.50. Because the parts count is already minimal, the way anyone takes cost out is by raising switching frequency so the transformer shrinks, which is what gallium nitride bought: 65 W chargers went from roughly 100 cm³ to about 30 cm³ over a few product generations, and the smaller enclosure and lighter shipping weight offset a more expensive switch. Efficiency rules put a floor under the category, since DoE Level VI and the EU Code of Conduct Tier 2 made the cheapest possible design non-compliant, so the race to the bottom stops somewhere. Forward converters sell instead into telecom, industrial and medical, where the customer specifies ripple and efficiency and will pay another dollar for them. In both, the margin sits with the controller vendors and with the few transformer manufacturers who can wind to a safety standard at volume.

## Videos

- https://www.youtube.com/watch?v=DnVTRwo9aiU — Flyback Converter Operation and Voltage Equation (Engineering with Prof. Kim, 8 minutes, 50k+ views)
- https://www.youtube.com/watch?v=iutzeMAYANw — How does a Forward converter work? | Forward Converter Working | Forward Converter Waveforms (Foolish Engineer, 9 minutes, 10k+ views)

## Further reading

[Design Guidelines for Off-line Flyback Converters Using Fairchild Power Switch (FPS) (onsemi)](https://www.onsemi.com/download/application-notes/pdf/an-4137.pdf) · [300W Secondary Controlled Two-Switch Forward Converter with L5991A (STMicroelectronics)](https://www.st.com/resource/en/application_note/an1621-300w-secondary-controlled-twoswitch-forward-converter-with-l5991a-stmicroelectronics.pdf)
