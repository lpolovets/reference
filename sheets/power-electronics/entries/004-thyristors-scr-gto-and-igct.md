---
number: 4
name: "Thyristors: SCR, GTO and IGCT"
part: 1
group: Silicon switches
power: [mw]
voltage: [mv, hv]
semiconductor: [si]
uses: [grid, ind]
maturity: comm
---

## Description
A thyristor is a four-layer PNPN structure that behaves as two interlocked transistors feeding each other's base current. A gate pulse starts that regenerative feedback and the device latches on, after which the gate has no further control: it stays on until the current falls below the holding current and reverse voltage is applied long enough for the stored charge to recombine, which takes 200–400 µs on a phase-control part and 20–50 µs on an inverter-grade one. Because all four layers are flooded with plasma, the on-state drop is the lowest of any silicon device, 1.2–1.8 V at current densities no transistor can approach, and a single device made from one 100–150 mm wafer blocks up to 8.5 kV and carries several thousand amps average. The same structure takes enormous surges, typically 10–20 times rated current for one mains half cycle, because the whole wafer conducts. Two later devices added gate turn-off to the same latching structure: the GTO, which needs a negative gate current a third to a fifth of the anode current, and the IGCT, which integrates the gate unit into the housing through a ring of under 5 nH so the entire anode current commutates into the gate in less than a microsecond and the device turns off as a transistor rather than unlatching. All three are normally built as press-pack (hockey-puck) devices clamped between water-cooled heatsinks, which lets them be stacked in series and which matters because a press-pack fails to a stable short circuit rather than an open one.

## Strengths and weaknesses
Nothing else in silicon carries this much power per die, and the gate is nearly free: a few hundred milliamps for a few microseconds latches a device switching megawatts. Press-pack construction and short-circuit failure mode let a stack of hundreds of devices in an HVDC valve keep operating with several shorted, which is the reliability argument that keeps line-commutated converters in service. The weakness of the SCR is that it cannot be turned off by its gate, so the circuit has to commutate it, which restricts you to line-commutated rectifiers and inverters; those draw reactive power of roughly 50–60% of the real power transferred and inject low-order harmonics, so the converter needs large filter and capacitor banks. Phase-angle control makes it worse, because the displacement power factor falls as you phase back. The GTO fixes turn-off but needs a microfarad-scale dv/dt snubber and a gate drive delivering hundreds of amps, and the snubber loss holds switching to roughly 200–500 Hz. The IGCT removes the snubber but still switches at only about 500 Hz in normal use and needs 10–100 W of continuous gate-unit power, so it is a low-frequency device by construction.

## When to use
Use an SCR whenever the current is very large, the frequency is line frequency, and the circuit commutates naturally. That is still a large market: line-commutated HVDC valves, aluminum smelter and chlor-alkali rectifiers running 100 kA and up, motor soft starters, static transfer switches, crowbar protection, and controlled rectifiers for DC arc furnaces. Do not use an SCR anywhere you need to shape the output waveform or control power factor independently, because it physically cannot; that is what an IGBT or IGCT voltage-source converter is for. Reach for an IGCT when you need turn-off capability above a few megawatts at medium voltage, the switching frequency can stay near 500 Hz, and you want the lowest conduction loss and the press-pack failure mode: medium-voltage drives and large STATCOMs are the usual homes. Do not specify a GTO in a new design, since an IGCT does the same job with no dv/dt snubber and a small fraction of the gate energy. Below a few megawatts at 690 V, use IGBTs and stop thinking about latching devices.

## Key numbers
On-state drop 1.2–1.8 V at rated current, the lowest in silicon · single-wafer devices to 8.5 kV and several thousand amps average · surge ratings 10–20 times rated current for one mains half cycle · SCR turn-off time 200–400 µs phase control, 20–50 µs inverter grade · GTO turn-off gate current a third to a fifth of anode current · IGCT gate loop under 5 nH, full commutation in under 1 µs, 10–100 W gate-unit power · line-commutated converters draw reactive power around 50–60% of transferred real power.

## Variants
### SCR
The silicon controlled rectifier is the original and still by far the highest-volume version. It turns on from a gate pulse and off only when the external circuit takes its current to zero, so it belongs in rectifiers, phase-controlled AC regulators, and anything switching at 50 or 60 Hz. Ratings sold run from 1 A logic-triggered parts up to 8.5 kV, several-thousand-amp press-packs for HVDC valves and smelter rectifiers.

### GTO
The gate turn-off thyristor added a heavily interdigitated cathode so a large negative gate pulse can pull the plasma out and break the latch. It dominated medium-voltage drives and traction in the 1990s at ratings around 4.5 kV and 3 kA, but the snubber it needs is a physically large, lossy assembly and the gate driver is its own power converter. New designs use IGCTs instead; GTOs survive mainly as spares for installed traction and drive equipment.

### IGCT
The integrated gate-commutated thyristor puts the gate driver in the same housing as the wafer and connects them through a very low-inductance ring, so the full anode current is diverted into the gate in under a microsecond and the device stops being a thyristor before the voltage rises. That removes the dv/dt snubber entirely and squares up the safe operating area. Commercial parts reach 4.5 kV at 4 kA and 6.5 kV at lower current, usually with a diode integrated in the same press-pack, and Hitachi Energy and Mitsubishi are the main suppliers.

## Examples
Line-commutated HVDC converter valves, including the ±800 kV links built in China and India; the ABB and Hitachi Energy ACS 6000 medium-voltage drive, which is built on IGCTs; aluminum smelter and chlor-alkali rectifiers delivering 100 kA and more at 1,000–1,500 V DC; thyristor-switched capacitors and thyristor-controlled reactors inside static VAR compensators; motor soft starters on large induction machines; crowbar circuits protecting generator excitation systems.

## Economic profile
Cost per kilowatt is the lowest of any switching device, because a single press-pack handles more power than a whole cabinet of anything else. In a line-commutated HVDC station the valves themselves are a modest share of the capital cost; most of the money goes into the converter transformers, the valve hall, and the AC filter and capacitor banks sized for that 50–60% reactive draw, which is the real economic penalty of the technology and the reason voltage-source converters displaced it where controllability matters. The same logic keeps SCRs in electrochemical rectifiers: an aluminum potline needs 100 kA of well-regulated DC at low voltage, the duty is continuous at 50 Hz, and no transistor-based alternative would survive the surge duty at any price. IGCTs are expensive per unit, in the thousands of dollars including the integrated gate unit, but a 6 kV drive uses only a couple of dozen of them and the buyer is comparing against a much larger count of series IGBTs. The market is mature and low volume with long qualification cycles, so there is essentially no learning curve here; prices track wafer diameter, copper, and the molybdenum discs used to match silicon's expansion inside the press-pack. Supply is concentrated in Hitachi Energy, Infineon's Westcode line, Mitsubishi, Toshiba, Powerex, and Dynex under CRRC in China, and the customer is almost always an EPC contractor or a heavy-industry plant owner rather than a consumer product maker.

## Videos

- https://www.youtube.com/watch?v=0AgPUikpvpM — How does a Thyristor work? (Sabin Civil Engineering, 7 minutes, 500k+ views)
- https://www.youtube.com/watch?v=WuOq_k3jj2A — GTO - Gate Turn Off Thyristor (Basics, Symbol, Structure, Working & Characteristics) Explained (Engineering Funda, 19 minutes, 100k+ views)

## Further reading

[Thyristors and Triacs (NPTEL, IIT Kharagpur)](https://archive.nptel.ac.in/content/storage2/courses/108105066/PDF/L-4%28DK%29%28PE%29%20%28%28EE%29NPTEL%29.pdf) · [IGCT – a new, emerging technology for high-power, low-cost inverters (ABB Review)](https://library.e.abb.com/public/97818c82f6fa4e0ec1256ec3002c4fe0/34-42.pdf)
