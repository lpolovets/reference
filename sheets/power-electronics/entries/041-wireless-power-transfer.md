---
number: 41
name: Wireless Power Transfer
part: 7
group: Low-voltage delivery
power: [w, kw]
voltage: [lv, mains]
semiconductor: [gan, si]
uses: [cons, ev, ind]
maturity: early
---

## Description
Wireless power moves energy through a magnetic field between two coils, with an inverter driving the transmitter and a rectifier behind the receiver. Both sides are tuned to resonance with series or parallel capacitors, which cancels the leakage inductance; without that, the field that fails to link the second coil circulates reactive current and the link delivers almost nothing. How well it can possibly work depends on one number, the product of the coupling coefficient k between the coils and their quality factor Q. Best-case efficiency rises with kQ and then saturates: kQ of 10 caps the link at about 82%, 30 at about 94%, and 100 at about 98% (those three follow from the standard two-coil efficiency formula, worked here rather than quoted). A phone on a Qi pad has k near 0.5 across a 3–5 mm gap; an EV pad sitting 100–250 mm below the vehicle has k of roughly 0.1–0.3 and makes up for it with very high-Q litz wire and ferrite coils, which is why an 11 kW car pad and a 15 W phone pad land at similar coil-to-coil efficiencies.

## Strengths and weaknesses
The strength is that nothing has to touch, so there is no connector to wear out, corrode, or be plugged in by a person. That suits sealed devices, implants, washdown industrial equipment, and anything that docks dozens of times a day. The weakness is that every stage loses something and the losses stack: inverter, coils, rectifier, regulation, plus foreign-object detection that has to run continuously in case a coin lands in the field. A phone on a Qi pad typically returns 50–70% of what leaves the wall against about 90% for a cable, and measurements by iFixit put the extra draw near 50% more energy for the same charge, most of which arrives as heat in the phone and throttles the charge rate. Alignment is the other problem: k falls steeply with lateral offset, so a few millimeters off center can cost 20–30% of the delivered power, which is why Qi2 added a ring of magnets rather than a better control loop.

## When to use
Use wireless power when the connector is the problem, not when the cable is merely inconvenient. If the device is sealed, implanted, rotating, submerged, or washed down, there is no competing option and the efficiency loss is worth paying. For consumer electronics under about 15 W, Qi2 is the answer, and the magnetic alignment profile is worth specifying over bare Qi because it removes the misalignment loss mechanically; Qi2 25 W, added in 2025, raises that ceiling. If charge speed or energy cost matters, use a cable: a wired USB-C link runs near 90% and carries up to 240 W, while a phone pad is stuck at 15–25 W and 50–70%. For vehicles, restrict it to duty cycles high enough to repay the hardware, which today means transit buses, shuttle and robotaxi fleets, and warehouse AGVs; a private car that sits in a garage overnight is served by a wall box at a tenth of the cost.

## Key numbers
kQ of 10 caps the link at about 82%, 30 at about 94%, and 100 at about 98% (worked from the formula) · phone pad coupling near 0.5 across a 3–5 mm gap, EV pad 0.1–0.3 across 100–250 mm · Qi and Qi2 at 15 W, with Qi2 25 W added in 2025 · SAE J2954 at 85 kHz, with WPT1, WPT2 and WPT3 at 3.7, 7.7 and 11 kW · a phone pad returns 50–70% wall to battery against about 90% for a cable · Porsche's 11 kW car system runs about €7,000 installed in Germany, roughly ten times an AC wall box.

## Examples
Qi and Qi2 from the Wireless Power Consortium, which cover essentially every phone sold; SAE J2954, the 85 kHz light-duty vehicle standard, which defines WPT1, WPT2 and WPT3 at 3.7, 7.7 and 11 kW and was last revised in 2024; Porsche's inductive charging option on the Cayenne Electric, 11 kW at about 90%; BMW's 3.2 kW GroundPad, offered as a lease option on the 530e from 2018 and not carried forward; Electreon's dynamic road-charging pilots; wireless chargers for warehouse AGVs and forklifts from Wiferion; Oak Ridge National Laboratory's high-power wireless charging program.

## Economic profile
The consumer side works because the parts are nearly free. A receiver coil and its IC add a couple of dollars to a phone that sells for hundreds, the pad retails for $15–40, and the buyer treats the convenience as worth a few points of electricity. The vehicle side does not work, and the numbers say why plainly. Porsche's 11 kW system for the Cayenne Electric is roughly €5,000 for the ground plate plus €2,000 for the vehicle-side receiver, about €7,000 in Germany, against €500–1,000 for an AC wall box that delivers the same 11 kW at higher efficiency. The cost is also split across two parties who each need the other to move first: the automaker pays for the receiver, the site owner pays for the pad, and neither sees a benefit until both have spent. Interoperability stopped being the excuse when SAE J2954 became a published recommended practice in 2020 and was revised in 2024, and the price did not move, which is the same pattern as BMW's 3.2 kW lease option in 2018. Where the money does work is industrial: an AGV charging opportunistically forty times a shift wears out a connector, and removing the connector removes both a maintenance item and the labor of plugging in. The case that could change the vehicle picture is autonomy, since a robotaxi has nobody aboard to plug it in, and there the competing option is a robot arm rather than a cable.

## Videos

- https://www.youtube.com/watch?v=vhKVuT8-H1g — How Wireless Charging Works and Why It's Terrible (iFixit, 5 minutes, 1m+ views)
- https://www.youtube.com/watch?v=TYA8wq7YYdI — Qi Wireless Charging EXPLAINED! | Electronics for the back of the class. (AvE, 5 minutes, 100k+ views)

## Further reading

[Download the Qi Specifications (Wireless Power Consortium)](https://www.wirelesspowerconsortium.com/knowledge-base/specifications/download-the-qi-specifications/) · [A Review of High-Power Wireless Power Transfer (Oak Ridge National Laboratory)](https://www.osti.gov/servlets/purl/1399989)
