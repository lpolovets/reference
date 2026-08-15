---
number: 151
name: "Flip-chip bonding"
part: 3
group: "Electronics Packaging & Assembly"
materials: [semi]
volumes: [high]
tooling: high
---

## Description

Solder bumps, copper pillars, or similar interconnects on a die are bonded directly to a substrate.

## Strengths and weaknesses

Enables high density, short electrical paths, and strong thermal performance. Alignment, warpage, underfill, bump reliability, and inspection are difficult.

## When to use

Choose flip-chip when wire bonds cannot deliver what the die needs: interconnect counts from the high hundreds into the thousands, minimal inductance for high-frequency or high-current paths, or heat extraction through the exposed die back. Typical parts are CPUs, GPUs, RF front ends, and chiplet assemblies. Flip-chip requires wafer bumping, fine-alignment assembly, and underfill development, so for low-pin-count cost-driven devices wire bonding is still the economical default.

## Key numbers

Bump pitch typically 130–200 µm with solder bumps and down to about 40 µm with copper pillars · interconnect counts from several hundred to over 10,000 on large processors · placement accuracy ±5–10 µm on mass-reflow lines and 1–3 µm on thermocompression bonders · throughput roughly 2,000–6,000 dies per hour on mass reflow, well under 1,000 on thermocompression · underfill cure 30–60 minutes at about 150 °C · die sizes from a few mm on a side up to roughly 30 mm.

## Examples

CPUs, GPUs, RF devices, image sensors, chiplets.

## Economic profile

Throughput splits the economics. Mass reflow at 2,000–6,000 dies per hour is a production process, while thermocompression bonding at well under 1,000 is reserved for the finest pitches and the highest die values. Underfill cure of 30–60 minutes at about 150 °C adds a batch step to an otherwise continuous line. Flip chip costs more per die than wire bonding and is bought for interconnect count, which reaches over 10,000 on large processors.

## Videos

- https://www.youtube.com/watch?v=Yr_1vcYdbvI — [Eng Sub] Flipchip die attach process: Bump, MR(Mass Reflow), TCNCP,… (Semicon Talk, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=4Dn9NK0XGzA — INTRODUCTION TO FLIP CHIP TECHNOLOGY (WATCH LEARN  'N PLAY, 15 minutes, 10k+ views)
- https://www.youtube.com/watch?v=SKb5qHvvyqo — Flip-Chip Underfill: Pushing Boundaries in Semicon Packaging in cooperation… (DELO Industrie Klebstoffe | DELO Industrial Adhesives, 2 minutes, 1k+ views)

## Further reading

[Flip Chip: The Ultimate Guide (AnySilicon)](https://anysilicon.com/flip-chip/)
