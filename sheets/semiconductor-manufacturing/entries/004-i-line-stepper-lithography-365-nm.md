---
number: 4
name: i-line stepper lithography (365 nm)
part: 2
group: Optical lithography
devices: [power, analog, rf, photonic]
node: [mature]
wafer: [small, w200]
toolcost: low
suppliers: duo
---

## Description
An i-line stepper filters a mercury arc lamp down to its 365 nm emission line and projects a reticle image onto resist one field at a time, stepping across the wafer between exposures (manufacturing-processes 184 covers the resist process itself). It resolves roughly 350 nm, which sounds hopeless next to the rest of this part and is exactly what a large share of the world's silicon needs. A power MOSFET, an analog or mixed-signal part, a MEMS device, an LED, and a packaging redistribution layer all have minimum features well above that, and none of them get better if you print them finer. i-line also handles thick resists, tens of microns deep, that deep-UV tools cannot expose, which is what plating-based redistribution and MEMS structures require. The tool sells for around $3.8M against roughly $90M for an immersion scanner, and that ratio, not the resolution, is the reason it survives.

## Strengths and weaknesses
Everything about i-line is cheap and boring, which is the point: cheap tools, cheap masks, mature resists, no pellicle problems, high uptime, and a fleet that has been depreciating for decades. Against that, 350 nm is a hard floor, and depth of focus is shallow enough that wafer flatness and topography still matter. The real constraint is not the stepper's optics, it is the ecosystem around it. About 220 i-line steppers sold in 2024, so it remains a live product line, but the 200 mm tools that surround it — tracks, implanters, furnaces, metrology — have been scarce and expensive since 2020, and a mature-node fab expansion is more often gated by finding a used implanter than by lithography.

## When to use
If your smallest feature is above roughly 0.35 µm, use i-line and stop looking. That covers power MOSFETs and IGBTs, most analog and mixed-signal, MEMS, LED and photonic device layers, image-sensor microlenses, and fan-out redistribution. If you are building on silicon carbide or gallium nitride, the device's performance comes from the material's breakdown field and mobility rather than from linewidth, so a finer scanner buys you nothing at all and you should spend the money on substrate and epi instead (019, 020). Move up to KrF (005) when a layer needs roughly 0.25 µm or below, or when your process has to run on 300 mm, since new i-line tools are a 200 mm-and-below product. Use direct-write laser or e-beam lithography instead only for one-offs and prototypes where you are trying to avoid a mask set entirely.

## Key numbers
365 nm mercury i-line, resolving roughly 350 nm · about $3.8M average selling price across roughly 220 units sold in 2024 · against about €11M for a KrF scanner and roughly $90M for an ArF immersion scanner · resist thickness from under a micron to tens of microns · Nikon and Canon are the two suppliers of new tools.

## Supply chain
Nikon and Canon build essentially all new i-line steppers; ASML left this segment long ago and does not want it back. Below the tool, every input is multi-sourced: mercury lamps, chrome-on-quartz masks, and i-line resists from Tokyo Ohka, JSR, Shin-Etsu, Sumitomo, Fujifilm, and Dow. There is also a deep secondhand market with brokers and refurbishers who will sell you a twenty-year-old stepper with a service contract. This is the one lithography rung where export control has no leverage: China's SMEE builds i-line tools domestically and they are good enough for this class of work, so a fully domestic Chinese power or analog fab is not a hypothetical. The practical bottleneck is the rest of the 200 mm line rather than the scanner, which is why used-equipment prices, not tool list prices, are the number to watch if you are planning mature-node capacity.

## Examples
Canon's FPA series and Nikon's NSR i-line steppers are the two current product families. The fabs that run them are power and analog lines at Infineon, onsemi, Bosch, Rohm, and STMicroelectronics; MEMS lines at Bosch and ST; LED fabs across Taiwan and China; and the redistribution-layer lithography in fan-out packaging at ASE and Amkor (025).

## Economic profile
At roughly $4M a tool running a hundred-plus wafers an hour, depreciation per wafer-layer is measured in cents, and a mask at this generation costs thousands of dollars rather than the hundreds of thousands an EUV reticle costs. That combination is what makes low-volume and long-lifetime products viable: an industrial sensor selling 50,000 units a year can amortize an i-line mask set, and cannot amortize anything above it. Tool prices here barely move from year to year and the installed base lasts decades, so the cost pressure on this rung comes from the device side rather than the equipment side. Chinese mature-node capacity has been driving down prices for exactly the parts i-line builds, which is a margin problem for incumbents and has nothing to do with lithography at all.

## Videos

- https://www.youtube.com/watch?v=PsaOWZv9vH0 — How Photolithography works | Part 2/6 – Photolithography Basics (ZEISS Group, 15 minutes, 50k+ views)
- https://www.youtube.com/watch?v=oBKhN4n-EGI — Photolithography: Step by step (Jae-Hwang Lee, 5 minutes, 500k+ views)

## Further reading

[The Basics of Microlithography (Chris Mack)](https://www.lithoguru.com/scientist/lithobasics.html) · [Light and lasers (ASML)](https://www.asml.com/en/technology/lithography-principles/light-and-lasers)
