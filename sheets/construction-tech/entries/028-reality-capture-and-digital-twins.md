---
number: 28
name: Reality Capture and Digital Twins
part: 6
group: Design & data
where: design
building: [com, ind, infra]
gains: [quality, cost]
capital: low
maturity: grow
---

## Description
Reality capture means measuring what is physically there and turning it into a point cloud. A tripod-mounted terrestrial laser scanner sweeps a rotating mirror through the space and records range and angle for roughly one to two million points a second, holding a few millimeters of range noise at 10 m on a survey-grade instrument. Multiple setups get registered together using targets or cloud-to-cloud matching, and registration adds its own error, so a whole-building cloud is usually good to about a centimeter rather than to the instrument's published spec. Faster alternatives trade accuracy for coverage: a SLAM-based mobile mapper walked through a building holds roughly 1 to 3 cm, and drone or handheld photogrammetry is cheaper still but needs surface texture and ground control to be trustworthy. A digital twin is meant to be the next step, a model kept coupled to the physical asset by repeated capture or live sensor data, which is what distinguishes it from an as-built model that was correct once.

## Strengths and weaknesses
The scan itself is cheap, and the comparison against the design model is where the value is. Registering the cloud to the model and coloring the result by deviation catches the slab poured 30 mm high or the embed set 50 mm off while the fix is still a grinder and an afternoon, instead of after the curtain wall brackets have been fabricated to the wrong dimension. Scanning is also the only practical way to document existing conditions for a retrofit, where record drawings are usually wrong or missing. Two weaknesses limit it: a scanner sees only what is in line of sight, so anything above a hard ceiling or inside a wall has to be captured before it is closed up, and the office work dominates the cost, running roughly three to ten hours of registration, cleanup and modeling for every hour in the field. Digital twins have a worse problem. Most of what is delivered under that name in construction is a static handover model with no feedback loop, and the National Academies' framing is explicit that a twin needs a two-way flow of data between model and asset, which almost no delivered building has.

## When to use
Scan before you demolish anything and before you close a ceiling, because those are the two moments where the data cannot be recovered later. If you are doing a retrofit or a fit-out in an existing building, scan first: the record drawings are usually wrong, and one missed beam soffit can cost more than the whole survey. If the job is new construction on a clear site, scan progressively at structural milestones and compare against the model, rather than once at the end when nothing can be changed. If a vendor offers you a digital twin, ask what data flows back into it after handover and who is paid to keep it current; with no answer to that, you are buying an as-built model and should price it as one. Use SLAM mobile mapping when you need to cover a lot of floor area quickly and centimeter accuracy is enough, and a tripod scanner when you are checking tolerances.

## Key numbers
Roughly 1 to 2 million points per second on a terrestrial scanner · a few millimeters of range noise at 10 m survey-grade · about 1 cm on a registered whole-building cloud · 1 to 3 cm for SLAM mobile mapping · scanner capital roughly $20,000 to $60,000 · office processing runs about 3 to 10 hours per field hour · £7bn a year claimed from better UK infrastructure data sharing, about 25% of total spend

## Examples
Leica RTC360 and BLK360, Faro Focus and Trimble X7 as terrestrial scanners; NavVis VLX and Leica BLK2GO for SLAM mobile mapping; Autodesk ReCap, Faro Scene and Leica Cyclone for registration and deviation analysis; the ASTM E57 committee's test methods for medium-range 3D imaging systems; the Gemini Principles published by the Centre for Digital Built Britain in 2018.

## Economic profile
A survey-grade terrestrial scanner costs roughly $20,000 to $60,000 depending on range and accuracy, and that capital amortizes over a few hundred scan days, so it is not the constraining cost. Service providers price by area or by day, and a two-person crew covering a floor plate in a day is a small line item against any structural trade. Processing labor is the real cost, at roughly three to ten hours of office work per field hour, which is why the useful question is what decision the scan will change rather than how much area it covers. The contractor who scans to check its own work captures that value directly, in avoided rework and in fabrication dimensions taken from the building instead of the drawings, and that is where reality capture has actually taken hold. Owners who pay for a handover twin capture nothing unless the facilities organization is staffed and paid to use it, which is the same split that leaves BIM handover data unread. The Centre for Digital Built Britain put the prize from better data sharing across UK infrastructure at £7bn a year, about 25% of total spend, but that number describes an ecosystem of connected asset data rather than anything a single project can bank.

## Videos

- https://www.youtube.com/watch?v=0O7big8MUvs — Laser Scanning Adoption in Construction (Bluebeam, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=2hnoGo27uf8 — What is a Digital Twin? (IBM Technology, 7 minutes, 100k+ views)

## Further reading

[Performance Evaluation of Terrestrial Laser Scanners – A Review (NIST)](https://www.nist.gov/publications/performance-evaluation-terrestrial-laser-scanners-review) · [The Gemini Principles (Centre for Digital Built Britain)](https://www.cdbb.cam.ac.uk/system/files/documents/TheGeminiPrinciples.pdf)
