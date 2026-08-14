---
number: 26
name: EMI Filtering and Layout
part: 4
group: Control & protection
power: [w, mw]
voltage: [lv, mv]
semiconductor: [si, sic, gan]
uses: [ev, it, ind, cons]
maturity: comm
---

## Description
Every switching converter is a broadband noise source, because the fast voltage edge that makes it efficient is also what generates the interference. Regulators split the problem at 30 MHz: below that, emissions are measured as voltage conducted back onto the supply line from 150 kHz to 30 MHz through a 50 microhenry, 50 ohm line impedance stabilization network, and above it they are measured as a radiated field in a chamber. FCC Part 15 allows a Class B residential device 56 dB microvolts quasi-peak from 0.5 to 5 MHz, which is about 0.6 mV, and a Class A industrial device 73 dB microvolts; CISPR 32 carries essentially the same limits internationally, with CISPR 11 covering industrial equipment and CISPR 25 automotive components. The noise itself splits two ways. Differential-mode current flows out one supply line and back the other, and a series inductor plus an X-capacitor handles it. Common-mode current flows out both lines together and returns through earth, and it is set by parasitic capacitance: switch-node copper and the device tab couple to a grounded heat sink at roughly 50–200 pF, and motor windings couple to the frame at a few nanofarads, so a 10 V/ns edge across 100 pF drives 1 A of common-mode current.

## Strengths and weaknesses
Filtering works, and a well-designed common-mode choke with Y-capacitors will take roughly 40 dB out of the conducted spectrum. The problem is that Y-capacitance is capped by safety rather than by engineering: touch-current limits allow around 3.5 mA of earth leakage on grounded industrial equipment, and since the leakage current is 2 pi f C V, at 230 V and 50 Hz that permits only about 48 nF in total, with much less on portable equipment. Past that cap, more filtering means more choke, and chokes saturate, take volume and cost money. Layout attacks the source instead: shrinking the switch-node copper reduces the capacitance that generates the common-mode current in the first place, and putting the return plane directly under the commutation loop cuts loop inductance and the ringing that fills the 30–100 MHz radiated band. A converter that fails by 20 dB usually has a layout problem, and the filter that would cover it costs more than the board respin.

## When to use
Budget for EMI from the first schematic rather than the first failed test: decide the commutation loop and its return path before placing anything else, and keep the switch node as small as the copper allows. If you are moving from silicon to SiC or GaN, expect the conducted spectrum to get worse at the same power, because edge rate rises several times and common-mode current scales directly with it, so redesign the filter instead of reusing it. Use a common-mode choke first and Y-capacitors second, since the Y-capacitance you are allowed is fixed by leakage limits while choke impedance is a design choice. If a design fails by less than about 6 dB, slowing the gate with a larger resistor is usually the cheapest fix and costs a fraction of a point of efficiency; if it fails by more than that, fix the layout. Book pre-compliance time on a LISN and a spectrum analyzer early, because chamber time runs a few thousand dollars a day and finding the problem there is the expensive way.

## Key numbers
Conducted emissions measured 150 kHz to 30 MHz through a 50 microhenry, 50 ohm LISN, radiated above 30 MHz · FCC Part 15 Class B allows 56 dB microvolts quasi-peak from 0.5 to 5 MHz, about 0.6 mV, and Class A 73 dB microvolts · switch-node to heat-sink capacitance typically 50–200 pF, motor winding to frame a few nanofarads · a 10 V/ns edge across 100 pF drives 1 A of common-mode current (derived here) · about 48 nF of total Y capacitance allowed by a 3.5 mA leakage limit at 230 V and 50 Hz (derived from 2 pi f C V) · a common-mode choke with Y-capacitors buys roughly 40 dB.

## Examples
FCC Part 15 Subpart B in the United States and CISPR 32 for information technology equipment internationally; CISPR 11 for industrial, scientific and medical equipment and CISPR 25 for automotive components, which is the standard a vehicle inverter is designed against; ROHM's EMC design guideline for automotive motor drives, which walks a reference board from failing CISPR 25 to passing it using layout changes.

## Economic profile
The EMI filter is one of the least glamorous and most expensive parts of a converter, often 10–30% of its volume and a similar share of the passive bill of materials. Every dB of margin bought with copper and ferrite is money on every unit, and every dB bought with layout is free after the first board spin, which is why companies that are good at this build converters much more cheaply than companies that are not. The failure cost is asymmetric: a design found non-compliant at a certification lab needs a respin, a retest and a slip in the launch date, and chamber time runs a few thousand dollars a day. Wide-bandgap devices made this harder, since the faster edge is exactly what sells SiC and GaN and exactly what raises common-mode current, so part of the efficiency gain gets spent filtering it back down. The customer never sees any of this, which is why EMI work tends to be under-resourced until the first failed test.

## Videos

- https://www.youtube.com/watch?v=JQkNqY0I02Y — EMC Filter Design Part 1: Understanding Common Mode and Differential Mode Noise (Biricha, 5 minutes, 100k+ views)
- https://www.youtube.com/watch?v=QPJzp66Yvzs — Understanding LISNs (Rohde & Schwarz, 7 minutes, 10k+ views)

## Further reading

[eCFR :: 47 CFR 15.107 -- Conducted limits (Electronic Code of Federal Regulations)](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15/subpart-B/section-15.107) · [Automotive Motor Solution EMC Design Guideline (ROHM)](https://fscdn.rohm.com/en/products/databook/applinote/common/automotive_motor_solution_emc_design_guideline_an-e.pdf)
