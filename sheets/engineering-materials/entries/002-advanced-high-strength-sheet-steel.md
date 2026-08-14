---
number: 2
name: Advanced High-Strength Sheet Steel
part: 1
group: Carbon and alloy steel
properties: [strong, tough]
strength: med
temperature: vhigh
processing: [form]
cost: vlow
---

## Description
Advanced high-strength steel is automotive sheet whose strength comes from a controlled mixture of phases rather than from carbon content, which is what lets it stay formable and weldable at strengths that plain high-carbon steel cannot reach without becoming glass. Dual-phase grades put 10–20% hard martensite islands in a soft ferrite matrix, so the sheet yields low, work-hardens fast, and ends up strong in the finished stamping. TRIP grades hold retained austenite that transforms to martensite as the part deforms, buying elongation at a given strength. Press-hardened steel takes a different route: a boron-alloyed 22MnB5 blank is austenitized near 900 °C, formed in a water-cooled die, and quenched in the die in a few seconds, coming out fully martensitic at about 1,500 MPa where the incoming coil was around 500. This is the reason the volume car body is still steel. Mild sheet is roughly 270 MPa; the same body in AHSS runs 600–1,500 MPa for a premium of a few tenths of a dollar per kilogram, and it stamps on presses the plant already owns. The forming operations themselves are on the manufacturing-processes sheet.

## Strengths and weaknesses
The case for AHSS is entirely economic. It removes mass from a vehicle at roughly $2–4 per kilogram saved against $8–15 for aluminum and well above $30 for carbon fiber, it drops into an existing stamping and spot-welding plant, and it recycles into the same scrap stream as everything else. The physical cost is ductility. Total elongation falls from around 40% for mild sheet to 5–8% at 1,500 MPa, so the strength-versus-elongation "banana" curve is the real design chart: first-generation grades (DP, TRIP, CP, martensitic) sit along the lower band, second-generation TWIP sits high but needs 15–25% manganese and has never gone volume, and third-generation grades built on quenching-and-partitioning or medium manganese are filling the middle at 980–1,180 MPa with enough elongation to cold-form. Higher yield strength also means more elastic springback, so dies get compensated by simulation and recut, and abrasive high-strength sheet wears tooling far faster than mild steel does. Above roughly 1,200 MPa hydrogen embrittlement becomes a live design constraint rather than a footnote.

## When to use
Use AHSS when the part is a formed sheet-metal structure carrying crash or fatigue load and mass matters: rockers, B-pillars, roof rails, bumper beams, door intrusion beams, seat structures, and battery-enclosure frames. The decision inside the family is mostly about how the part fails. If it has to absorb energy by crushing, pick a dual-phase or TRIP grade in the 600–980 MPa range, because the structure needs to fold rather than fracture. If it has to not deform at all, which is the passenger cell, pick press-hardened 22MnB5 and accept that the part is formed hot in a dedicated line. If you need 980 MPa or more but cannot justify a hot-stamping line, look at third-generation cold-formable grades first. Skip AHSS for outer skin panels, where dent resistance and surface finish, not strength, decide, and for anything where the tooling is amortized over a few thousand parts and the die wear will not pay back. And if the mass target survives all of that, the next step up is an aluminum body (006), which is what Ford did on the F-150, at roughly four times the cost per kilogram saved.

## Key numbers
Mild sheet around 270 MPa against press-hardened 22MnB5 at about 1,500 MPa · premium of roughly $0.1–0.4/kg over mild sheet · about $2–4 per kilogram of mass removed, against $8–15 for aluminum · total elongation falls from roughly 40% in mild sheet to 5–8% at 1,500 MPa · specific strength 75–125 kN·m/kg for common dual-phase grades and about 190 for press-hardened · hydrogen embrittlement becomes a design constraint above roughly 1,200 MPa · press-hardening blanks austenitized near 900 °C and die-quenched in a few seconds.

## How it fails
The failures that matter are all delayed or invisible, which is what makes them expensive. Hydrogen-assisted delayed cracking is the headline one: in grades above roughly 1,200 MPa, hydrogen picked up in pickling, coating, or service migrates to the highest-stress location and opens a crack hours or days after the part was made, with no change in load, usually starting at a sheared edge or a hole where residual stress is highest. Liquid metal embrittlement is the second: when zinc-coated high-strength steel is resistance spot welded, molten zinc penetrates the austenite grain boundaries in the heat-affected zone and leaves cracks that are hard to see from outside the joint, which is why weld schedules and coating choices get requalified for every new grade. Third is edge cracking. A punched or sheared edge carries a damaged, heavily work-hardened layer, so a flange splits during forming even though the coil passed its tensile test; the number that predicts it is hole expansion ratio, not elongation, and dual-phase grades score badly on it because cracks run along the hard-soft phase boundaries. And the most common failure of all is dimensional rather than structural: the stamping springs back out of tolerance and will not assemble.

## Examples
ArcelorMittal's Usibor 1500 press-hardened steel and Ductibor for tailored blanks, SSAB's Docol range, thyssenkrupp, POSCO, and Nippon Steel supply most of the coil. Gestamp and Benteler are the large independent hot-stamping tier-ones, and TWB Company and ArcelorMittal Tailored Blanks laser-weld blanks of different grade and thickness into one stamping so the soft zone lands where the part is meant to fold. Volvo's boron-steel safety cage and Honda's ACE body structure are the well-documented early production applications, and WorldAutoSteel's FutureSteelVehicle and Steel E-Motive programs are the industry's public design studies for how far the material can go.

## Economic profile
AHSS is the steel industry's answer to losing body-in-white volume to aluminum, and it has largely worked: a mill sells a commodity product at a premium of a few tenths of a dollar per kilogram, using the same casters and rolling mills, by controlling cooling on the run-out table and the annealing line. The capital moves downstream instead. A hot-stamping line needs a roller-hearth furnace, a transfer system, and water-cooled dies, so press-hardened parts come from tier-one suppliers with dedicated cells rather than from the OEM's own press shop, and that is why third-generation cold-formable grades are commercially interesting even where they are slightly heavier: they avoid the line. Trade policy sits on top of all of it, with US Section 232 duties at 50% since 2025 covering steel and a long list of derivative parts. If you are evaluating anyone selling into this market, the durable position is the qualification package and the forming know-how, not the composition, since grade chemistries are published and the hard part is proving a die and a weld schedule that make a million parts.

## Videos

- https://www.youtube.com/watch?v=5rLDOClgm7U — The mad metallurgy of advanced high strength steel in modern cars | Auto Expert John cadogan (Auto Expert John Cadogan, 26 minutes, 50k+ views)
- https://www.youtube.com/watch?v=qVPpaA3ONTY — Hot Stamping in eight seconds (ANDRITZ Schuler, 1 minute, 50k+ views)
- https://www.youtube.com/watch?v=EtRZDlB7Wjk — Dual Phase Steel (Metallurgical Engineering, 7 minutes, 1k+ views)

## Further reading

[AHSS Application Guidelines (WorldAutoSteel)](https://ahssinsights.org/) · [Multi-Scale Microstructural Tailoring and Associated Properties of Press-Hardened Steels: A Review (Materials, via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10221764/)
