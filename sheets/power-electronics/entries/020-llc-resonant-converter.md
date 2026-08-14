---
number: 20
name: LLC Resonant Converter
part: 3
group: Isolated converters
power: [w, kw]
voltage: [mains]
semiconductor: [si, gan, sic]
uses: [it, cons, ev]
maturity: comm
---

## Description
An LLC drives a resonant tank with a half-bridge or full-bridge square wave. The tank is a series inductor and capacitor plus the transformer's magnetizing inductance, and those two inductances give the circuit two resonant frequencies, which is what the name refers to. Because tank current lags the applied square wave, it discharges the switch output capacitance before turn-on, so the primary devices turn on at zero volts and turn-on loss essentially disappears. The secondary rectifiers commutate at zero current, so reverse recovery stops being a problem too. Output is regulated by changing frequency rather than duty cycle: at the series resonant frequency the gain is 1 and efficiency is at its peak, below it the magnetizing inductance participates and gain rises, above it gain falls. Typical designs switch at 100–500 kHz on silicon or silicon carbide and up to about 1 MHz on gallium nitride, and a well-built kilowatt-class stage reaches 97–98%.

## Strengths and weaknesses
Removing turn-on loss lets frequency go up, and higher frequency is what shrinks the transformer and the output capacitors, so an LLC stage is both more efficient and smaller than the hard-switched half-bridge it replaced. Transformer leakage inductance becomes part of the resonant tank instead of a parasitic that has to be snubbed, and the soft edges cut conducted EMI, so the input filter shrinks as well. The weakness is regulation range. Gain is set by frequency, so a wide input or output range forces a wide frequency sweep, and at the extremes circulating current rises, zero-voltage switching can be lost, and efficiency falls off quickly; roughly a 2:1 range is what one stage handles well. Light load needs burst mode to stay efficient, and start-up and short circuit need explicit handling, because near resonance the tank does not limit its own current.

## When to use
Use an LLC for the isolated DC-DC stage that follows a power factor correction front end, where the input is held near 380–400 V and the output is fixed. That is the single most common place it appears, and above about 200 W it beats a forward or a hard-switched half-bridge on efficiency and size at once. If the output has to swing widely, as an EV battery does from roughly 250 V to 850 V, do not try to cover it with frequency alone: add a regulating stage ahead of it, switch transformer taps, or use a phase-shift full bridge or a dual active bridge instead. If power has to flow both ways, an LLC is the wrong choice and a CLLC or dual active bridge is the right one. If the target is 80 PLUS Titanium or an equivalent hyperscale spec, plan on resonant conversion from the start, because hard switching does not get there.

## Key numbers
Switching 100–500 kHz on silicon or silicon carbide, up to about 1 MHz on gallium nitride · 97–98% at kilowatt class · zero-voltage turn-on on the primary, zero-current commutation on the secondary rectifiers · gain of 1 at the series resonant frequency · practical regulation range roughly 2:1 · input usually held at 380–400 V by the PFC stage

## Examples
The DC-DC stage in almost every 80 PLUS Titanium and Open Compute server power supply from Delta, Lite-On, Flex and Artesyn; EV on-board chargers, many of them using the bidirectional CLLC variant; TV and LED driver supplies, which is where the topology first went to volume; controllers such as onsemi's NCP1399, Infineon's ICE families and ST's L6699.

## Economic profile
In a two-stage AC-DC supply the LLC stage is typically 30–40% of the bill of materials, and what the buyer is paying for is efficiency and volume rather than parts count. The controller is cheap at roughly $0.50–2, so the money sits in the transformer and the synchronous rectifiers; at high volume the transformer goes planar, which turns a wound part carrying labor content into a PCB stack-up carrying none. Efficiency has direct value in the data center: one point on a 3 kW supply is 30 W per unit, paid continuously in energy and again in cooling. Because Titanium-class efficiency is out of reach for hard switching, the specification effectively mandates the topology, which is why LLC ships in enormous volume and no vendor charges a premium for the circuit itself. In EV on-board chargers the same argument runs on weight and space in the vehicle and produces the same answer.

## Videos

- https://www.youtube.com/watch?v=TVQuPWtxN34 — What is LLC Resonant Converter? LLC Resonant converter advantages (Foolish Engineer, 11 minutes, 50k+ views)
- https://www.youtube.com/watch?v=MWoHzOSMKqw — LLC Topology Overview (Texas Instruments, 9 minutes, 10k+ views)

## Further reading

[Understanding the LLC Structure in Resonant Applications (onsemi)](https://www.onsemi.com/download/application-notes/pdf/and8311-d.pdf) · [An introduction to LLC resonant half-bridge converter (STMicroelectronics)](https://www.st.com/resource/en/application_note/an2644-an-introduction-to-llc-resonant-halfbridge-converter-stmicroelectronics.pdf)
