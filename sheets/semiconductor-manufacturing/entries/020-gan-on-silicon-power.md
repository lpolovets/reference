---
number: 20
name: GaN-on-Silicon Power
part: 5
group: Wide-bandgap power
devices: [power]
node: [mature]
wafer: [small, w200, w300]
toolcost: low
suppliers: few
---

## Description
A power GaN device is a lateral high-electron-mobility transistor grown on an ordinary silicon wafer. There is no doped p-n junction doing the work. An AlGaN layer grown on GaN creates a two-dimensional electron gas at the interface through polarization, the electrons in that sheet are both dense and very mobile, and the gate depletes them to turn the device off. Growing GaN on silicon means bridging a large lattice and thermal-expansion mismatch with a stack of buffer layers, which is what limits how thick the GaN can be and therefore how much voltage it can hold. The economic argument is the entire point of the platform: it runs in existing depreciated 200 mm CMOS lines at roughly 98% line yield instead of needing a bespoke substrate, and Infineon produced the first 300 mm power GaN wafers with customer samples in late 2025, getting 2.3 times the die per wafer. Like SiC (019), the lithography is ordinary and the performance comes from the material.

## Strengths and weaknesses
A lateral GaN HEMT has very low gate charge and no body diode, so it has no reverse-recovery charge at all. That combination is what lets a converter run at hundreds of kilohertz to megahertz, where the magnetics and capacitors shrink by more than the semiconductor costs, which is why the phone charger got small. The weakness is structural. The device is lateral, so the drift region takes die area rather than die thickness, and every volt of blocking capability costs area. That caps the practical ceiling at about 650 V today and makes die area, not material cost, the binding constraint. There are two device-level catches worth knowing. Dynamic on-resistance rises when charge gets trapped in the buffer under hard switching, and most parts have no avalanche rating. The field failure mode follows from the first one: a design that met its thermal budget on the bench sees on-resistance drift up over months of hard-switched operation at high bus voltage, and the heatsink that was adequate stops being adequate.

## When to use
Below 650 V and above roughly 100 kHz, GaN is the default now: chargers, adapters, and increasingly server and telecom power supplies. Above about 650 to 900 V, go to SiC (019), because the lateral structure runs out of area efficiency and you end up paying for silicon you cannot use. If the design is low-frequency and cost-driven, a silicon superjunction MOSFET is still cheaper and will stay cheaper. Do not pick GaN for high-current DC or low-frequency applications where conduction loss dominates and switching loss barely registers, because you are paying for a switching advantage you will never collect. And check the gate drive requirements early; p-GaN gate devices have a narrow drive window and are less forgiving than a silicon MOSFET.

## Key numbers
Lateral HEMT with a 2DEG at an AlGaN/GaN heterojunction, and no body diode · practical ceiling about 650 V today · roughly 98% line yield in existing 200 mm CMOS lines · Infineon's first 300 mm power GaN wafers sampled in late 2025, at 2.3× the die per wafer · Innoscience at about 30% of the power GaN device market and gross-margin negative in 2024 · TSMC exiting GaN foundry entirely by July 2027.

## Supply chain
Gallium is the exposure. China produced about 98% of the world's low-purity gallium in 2024, banned exports of it to the United States in December 2024, and suspended that ban in November 2025 through late November 2026, which means the constraint is currently a policy decision rather than a physical shortage. Epitaxy depends on MOCVD reactors from Aixtron and Veeco, with AMEC building domestic Chinese equivalents. The device supply base is unusually China-weighted for a Western-invented technology: Innoscience holds about 30% of the power GaN market from a 200 mm fab in China, and STMicroelectronics signed a GaN development and manufacturing agreement with it in March 2025. Meanwhile the foundry model is contracting. TSMC is out by July 2027, Navitas moved its foundry to Taiwan's PSMC in July 2025, and the industry is consolidating on integrated device makers (Infineon, Power Integrations, onsemi, Nexperia). Vertical GaN, which would need a bulk GaN substrate and would break the 650 V ceiling, has effectively failed as a category so far: NexGen went bankrupt and onsemi bought its fab for $20M, and Power Integrations absorbed Odyssey.

## Examples
Phone and laptop chargers are the volume market, using parts from Navitas, Power Integrations, Innoscience, and Infineon. EPC's eGaN family put GaN into DC-DC and motor drive applications. Infineon's CoolGaN is the flagship of the 300 mm push. The market everyone is fighting for is data-center power, where 48 V architectures and the 800 V HVDC distribution NVIDIA has been pushing both favour GaN, with first commercial rollouts expected around 2027.

## Economic profile
Prices are very low, and that is not an accident. GaN-on-silicon's whole pitch was that it uses cheap substrates in depreciated fabs, and a low barrier to entry is exactly what that produces. Innoscience holds roughly 30% share and was still gross-margin negative in 2024, which tells you what the price competition looks like at the top of the market. Because the device is area-limited rather than materials-limited, the only real cost lever left is wafer size, which is why Infineon's 300 mm move matters more than any device improvement on the roadmap. If you are evaluating a GaN business, the questions are whether it has a defensible wafer-cost position, whether it owns its fab, and whether it is exposed to a charger market where the customer switches suppliers over a few cents.

## Videos

- https://www.youtube.com/watch?v=3aSLZDep7dM — The Gallium Nitride Revolutions (Asianometry, 15 minutes, 100k+ views)
- https://www.youtube.com/watch?v=UJqY00xPWmY — GaN Power devices - the HEMT (Power Devices and Circuits, 20 minutes, 10k+ views)
- https://www.youtube.com/watch?v=QivKAyS2sEM — How to GaN 02 – Building a Gallium Nitride (GaN) Transistor (EPC Corporation, 8 minutes, 10k+ views)

## Further reading

[Fundamentals of Gallium Nitride Power Transistors (Efficient Power Conversion)](https://epc-co.com/epc/Portals/0/epc/documents/product-training/appnote_ganfundamentals.pdf) · [Unlocking the full potential of GaN technology for next-gen power electronics (imec)](https://www.imec-int.com/en/articles/unlocking-full-potential-gan-technology-next-gen-power-electronics)
