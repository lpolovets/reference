---
number: 40
name: GaN Adapters and USB-C Power Delivery
part: 7
group: Low-voltage delivery
power: [w]
voltage: [mains]
semiconductor: [gan, si]
uses: [cons]
maturity: comm
---

## Description
A phone or laptop adapter is a flyback converter: a switch chops the rectified mains into a small transformer's primary, energy goes into the core during the on-time, and a rectifier on the secondary side releases it to the output. Gallium nitride changed the numbers rather than the topology. A 650 or 750 V GaN HEMT has no body-diode reverse recovery and roughly a tenth the gate and output charge of a superjunction MOSFET of the same rating, so the same flyback runs at 300 kHz to 1 MHz instead of 65–100 kHz. Transformer volume falls roughly in proportion to frequency and switching losses fall far enough that the heatsink can go, so a modern GaN adapter reaches 14–28 W per cubic inch, and a published 240 W reference design hits 27.7 W per cubic inch, against roughly 5–10 W per cubic inch for the silicon bricks it replaced. USB Power Delivery is the other half of the story: PD 3.0 negotiated up to 100 W at 20 V, and PD 3.1's Extended Power Range added 28, 36 and 48 V levels topping out at 240 W at 48 V and 5 A, which is what let one adapter and one cable cover a phone and a workstation laptop.

## Strengths and weaknesses
The gains are size, weight and one connector instead of five, and they are big enough that buyers notice: at those power densities a 65 W GaN adapter is a third to a half the volume of the brick it replaced. The costs are less visible. Higher dV/dt and higher frequency make EMI harder at exactly the moment the enclosure has shrunk and left less room for a filter, so compliance work becomes a real part of the schedule. Most GaN HEMTs have no avalanche rating, so a line surge has to be clamped externally rather than absorbed by the switch. And a smaller enclosure has less surface area, so a 240 W adapter runs hot in ordinary use and the plastic, the potting and the creepage distances become the design constraint instead of the semiconductor.

## When to use
If the output is under about 30 W and unit cost decides the design, stay on a silicon flyback, since the transformer is already small and the GaN premium is not repaid. Between 30 and 100 W, a GaN quasi-resonant or active-clamp flyback is the default now, and the size difference is what the customer is paying for. Above 100 W, use an active-clamp flyback or a half-bridge LLC, and expect the bulk capacitor and the EMI filter rather than the switch to set how small the product gets. If the design has to exceed 100 W over USB-C, build to PD 3.1 EPR at 28, 36 or 48 V and specify a 5 A e-marked cable, because a legacy cable silently caps the negotiation and the user sees a slow charge with no error. Do not carry a consumer GaN qualification into an automotive or industrial product, where AEC-Q101 and a decade of field life are a different problem.

## Key numbers
650–750 V GaN HEMTs with roughly a tenth the gate and output charge of an equivalent superjunction MOSFET · switching at 300 kHz–1 MHz against 65–100 kHz for silicon · 14–28 W per cubic inch against roughly 5–10 W per cubic inch for silicon adapters, with a published 240 W GaN design at 27.7 W per cubic inch · USB PD 3.1 EPR levels at 28, 36 and 48 V, up to 240 W at 48 V and 5 A · a GaN switch costs roughly two to three times the silicon MOSFET it replaces · a 65 W GaN adapter is a third to a half the volume of the brick it replaced.

## Examples
Power Integrations' InnoSwitch parts built on PowiGaN switches; Navitas GaNFast ICs; Innoscience InnoGaN devices, which the company says have passed roughly 2 billion cumulative shipments; retail GaN adapters from Anker, Ugreen, Baseus and Apple; the USB-IF's PD 3.1 specification, which defines the 240 W Extended Power Range.

## Economic profile
The consumer charger became GaN's first volume market for reasons that have little to do with power electronics. The voltage class is right: 650 V is where a lateral GaN-on-silicon HEMT is cheapest to build, and above roughly 900 V the area penalty of a lateral device hands the job to SiC. The die is tiny, a few square millimeters for a 65 W adapter switch on a 150 or 200 mm silicon wafer, so a device costs well under a dollar even at modest yield. Qualification takes months rather than the AEC-Q101 plus years of field data an automotive part needs, and a failed charger is a warranty claim rather than a recall. The customer also pays for size directly, which is rare in power electronics, since nobody chooses a data center on how small its rectifiers are. The teardown arithmetic is close to a wash: the GaN switch runs roughly two to three times the price of the superjunction MOSFET, but dropping the heatsink, shrinking the transformer and bobbin, and using a smaller enclosure and EMI filter gives most of that back, so the adapter got about half as big without getting more expensive, and the changeover took only a few product cycles. That volume funded the yield learning now being carried into 48 V data center converters and motor drives, and it left the margin with the device makers (Power Integrations, Navitas, Innoscience and Infineon) while the adapter brands compete on retail price.

## Videos

- https://www.youtube.com/watch?v=jMRNYwhDkOU — Are BULKY Chargers Going Away? - Gallium Nitride (GaN) (Techquickie, 4 minutes, 100k+ views)
- https://www.youtube.com/watch?v=OkZvMqQ_uAc — What Is GaN Charger And How It Works? - ChargerLAB Explained (ChargerLAB, 5 minutes, 50k+ views)

## Further reading

[USB Power Delivery (USB-IF)](https://www.usb.org/document-library/usb-power-delivery) · [USB-C 240W Power Delivery 3.1 Extended Power Range Protocol (Renesas)](https://www.renesas.com/en/document/apn/usb-c-240w-power-delivery-31-extended-power-range-protocol)
