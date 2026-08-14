---
number: 25
name: Dilution Refrigerators
part: 7
group: Enabling stack
temperature: mk
uses: [comp, sense]
horizon: now
maturity: comm
bottleneck: cryo
---

## Description
A dilution refrigerator reaches 10 mK by exploiting a quirk of helium isotopes: below 0.87 K a mixture of helium-3 and helium-4 separates into two phases, and moving helium-3 across the boundary from the concentrated into the dilute phase absorbs heat, much as evaporation does. Circulating helium-3 continuously gives continuous cooling with no moving parts in the cold section. Modern cryogen-free systems use a pulse tube cooler to reach 4 K first, so no liquid helium bath is needed.

## Strengths and weaknesses
It is the only technology that reaches millikelvin continuously, so every superconducting and spin qubit machine sits inside one. Cryogen-free designs run for months without intervention, which turned the dilution fridge from a specialist instrument into infrastructure. The costs are money, space, and cooling power. A system runs several hundred thousand dollars to over a million, fills a room with compressors and gas handling, and provides only microwatts to a milliwatt of cooling at base, which is what really limits how many control lines a fridge can accept.

## When to use
If your platform needs millikelvin, you need one, so the design questions are cooling power at base and how many coaxial lines the fridge can accept without overwhelming it. That second number, not the qubit chip, is what caps a single-fridge machine at a few thousand qubits today. Watch helium-3 supply, which comes from tritium decay in weapons stockpiles and is genuinely scarce. If a platform can run at 1 K or above, the cooling problem gets dramatically easier, which is a large part of why spin qubits above 1 K are interesting.

## Key numbers
Base temperature 6–20 mK, with cooling power of roughly 10–500 microwatts at 20 mK · cryogen-free systems run months without intervention · system cost from several hundred thousand dollars to over a million · helium-3 supply comes from tritium decay and is scarce · thermal load from control wiring, not the qubit chip, limits how many lines a fridge can take.

## Examples
Bluefors and Oxford Instruments as the dominant suppliers; IBM's Goldeneye, a large-volume fridge built for scaling; Fermilab and academic groups using them for dark matter detection as well as qubits; the multi-fridge halls now being built by every large quantum computing effort.

## Economic profile
A system runs from several hundred thousand dollars to over a million, and that price is close to fixed per refrigerator rather than per qubit, so cost per qubit falls only when more qubits fit inside one fridge. That makes the wiring limit a commercial problem as much as a technical one, since what caps a fridge is thermal load from the control lines rather than the chip, and the number worth tracking is dollars per usable control line rather than dollars per fridge. Supply is concentrated, with Bluefors and Oxford Instruments taking most of the market, and helium-3 comes from tritium decay in weapons stockpiles, so supply barely responds to demand at any price. The demand side is unusual: most buyers are research programs and quantum computing companies spending money raised against future results, so the supplier gets paid whether or not the machines inside the fridges ever work. Anything that lets a platform run at 1 K or above takes most of this line item out of a system's capital cost, which is a large part of why spin qubits above 1 K attract interest.

## Videos

- https://www.youtube.com/watch?v=F6FICjAvkUU — Working Principle of a Dilution Refrigerator. (QEL@UCL, 6 minutes, 10k+ views)
- https://www.youtube.com/watch?v=HSClNB2pq0c — What is a dilution fridge? | Quantum science at Fermilab (Fermilab, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=QbMVJdbHGrs — Behind The Tech : Cryostats (Alice & Bob, 3 minutes, 5k+ views)

## Further reading

[Quantum Computers Glossary (QuEra)](https://www.quera.com/glossary) · [How Does a Dilution Refrigerator Work? (Bluefors)](https://bluefors.com/stories/how-does-a-dilution-refrigerator-work/)
