---
number: 9
name: Lithium-Ion Battery Plant
part: 2
group: UPS & ride-through
density: [low, ext]
where: [hyper, colo, ai]
retrofit: hall
maturity: est
---

## Description
Lithium-ion has largely displaced valve-regulated lead-acid as the energy store behind the UPS. The cells sit in rack-mounted cabinets with a battery management system that monitors every module, and the chemistry is usually lithium iron phosphate rather than the nickel-rich chemistries used in vehicles, because thermal stability matters more than energy density when the pack lives in a building full of servers. Once the plant is large enough, it stops being only a UPS: the same batteries can shave peaks, respond to grid frequency, or shift load.

## Strengths and weaknesses
Compared with lead-acid it takes about a third of the footprint and a quarter of the weight for the same energy, lasts 8–10 years instead of 3–5, tolerates higher ambient temperature, and reports its own state of health. Over a 10-year life the total cost is usually lower despite a higher purchase price. The weaknesses are code and fire. Lithium installations face specific requirements under NFPA 855 and local fire codes, including spacing, detection, and sometimes deflagration venting, and the permitting conversation is materially harder than for lead-acid. Cell supply is also exposed to the same market as vehicles.

## When to use
Use lithium for any new UPS energy store where footprint or replacement labor matters, which is nearly all of them, and specify lithium iron phosphate unless there is a specific reason for a nickel chemistry. Size beyond ride-through if the local market pays for demand response or frequency service, because the incremental cells are cheap relative to the rest of the plant. Engage the fire marshal early rather than late. Keep lead-acid where an existing room and its suppression are sized for it and the replacement cycle is already funded.

## Key numbers
Roughly a third the footprint and a quarter the weight of lead-acid for the same energy · service life 8–10 years against 3–5 · tolerates higher ambient temperature, so the battery room can run warmer · governed by NFPA 855 and local fire code, which drives spacing and detection · large plants can also bid into demand response and frequency markets.

## Examples
Lithium iron phosphate UPS cabinets now standard in new hyperscale builds; Microsoft and Google installations using UPS batteries for grid services; Irish and Dutch facilities offering battery capacity to system operators in exchange for faster connection.

## Videos

- https://www.youtube.com/watch?v=OhawfHC7sMU — What's New with UPS Batteries? (Eaton, 8 minutes, 1k+ views)
- https://www.youtube.com/watch?v=73JuYHLkmt0 — ORR Protection Lithium-Ion Battery Q&A: Data Center Code Compliance (ORR Protection, 12 minutes, under 1k views)

## Further reading

[2024 United States Data Center Energy Usage Report (Berkeley Lab)](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf)
