---
number: 195
name: "Wafer bonding"
part: 5
group: "Semiconductor & Microscale"
materials: [semi]
volumes: [high, cont]
tooling: high
---

## Description

Two wafers are joined through fusion, anodic, adhesive, or metallic bonding.

## Strengths and weaknesses

Enables sealed cavities, multilayer structures, and complex devices. Surfaces must be extremely flat and clean.

## When to use

Bond wafers when the device fundamentally requires joined substrates: hermetic vacuum cavities for gyros and resonators, SOI material, capping of MEMS before dicing, backside-illuminated image sensor stacks, and 3D die stacking via hybrid bonding. Pick the variant by constraint. Fusion bonding gives the highest strength when both wafers tolerate high anneal temperatures and sub-nanometer roughness is achievable. Anodic bonding suits glass-to-silicon MEMS sealing at moderate temperature. Adhesive or eutectic bonding works when surfaces are rough, patterned, or temperature-limited. The flatness and particle requirements are severe: a single micron-scale particle voids square millimeters, so budget for CMP-grade surfaces and meticulous cleaning. If you only need package-level sealing or attachment of a finished die, conventional packaging and die-attach processes are far cheaper than wafer-level bonding.

## Key numbers

Surface roughness under 0.5 nm RMS and bow within a few tens of microns for fusion bonding · anneal temperature 1,000–1,100 °C for fusion, 300–450 °C at 200–1,000 V for anodic, 363 °C for Au-Si eutectic, 200–250 °C for adhesive · bond surface energy 1–2.5 J/m2 after a full fusion anneal · alignment 0.5–2 µm on MEMS aligners and under 200 nm for hybrid bonding · a single micron-scale particle voids square millimeters of bond area · bonders $1–3M.

## Examples

MEMS sensors, microfluidics, image sensors, 3D integration.

## Economic profile

Bonders cost $1–3M, but the number that decides the economics is that a single micron-scale particle voids square millimeters of bond area. Bonding therefore has to run in a cleanliness regime stricter than the steps before it, and the real cost is the cleanroom and the handling rather than the tool. It is also a late step, so a failed bond scraps two finished wafers at once, which makes yield here far more expensive than yield earlier in the flow.

## Videos

- https://www.youtube.com/watch?v=ky0-JlfuuM8 — Discover: die-to-wafer hybrid bonding | CEA-Leti (CEA, 3 minutes, 50k+ views)
- https://www.youtube.com/watch?v=pM--zW-beA4 — Discover: wafer-to-wafer hybrid bonding | CEA-Leti (CEA, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=UVbqgwKMXFI — EVG Gemini Fully Automated Production Bonding System (Lithography Equipment Support, 7 minutes, 5k+ views)

## Further reading

[Wafer Bonding Technology Portfolio (EV Group)](https://www.evgroup.com/technologies/) · [Hybrid and Fusion Bonding Explained (EV Group)](https://www.evgroup.com/technologies/fusion-and-hybrid-bonding)
