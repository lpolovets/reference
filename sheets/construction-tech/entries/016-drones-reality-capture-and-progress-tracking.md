---
number: 16
name: Drones, Reality Capture and Progress Tracking
part: 3
group: Site robotics
where: site
building: [mf, com, ind, infra]
gains: [quality, cost]
capital: low
maturity: grow
---

## Description
A small drone flies a programmed grid over the site and takes overlapping photographs; structure-from-motion software turns them into a point cloud and an orthomosaic, tied to real coordinates by ground control points on the ground or a survey-grade GNSS receiver on the aircraft. Out of that come surfaces, cut and fill volumes, stockpile volumes and a dated image of the whole job. Accuracy is good enough to pay on: FHWA reports UAS-derived volumes varying 1–2% against conventional methods, and one stockpile comparison against terrestrial LiDAR found an average vertical difference of 2 mm with a 31 mm standard deviation. LiDAR payloads split into survey grade at 5–10 mm and mapping grade at 1–3 cm. Indoors the same idea runs on a 360-degree camera clipped to a hard hat: someone walks the floor, software pins each frame to the floor plan, and the project gets a searchable dated record of every room. Nearly all state DOTs now use small UAS on construction work.

## Strengths and weaknesses
Speed is the obvious gain. Traditional ground survey takes days on site and weeks to process and deliver, and a drone flight over the same ground takes an hour. The limits are optical: photogrammetry measures only what the camera can see, so vegetation, standing water, and anything under a roof or a deck comes back wrong or missing, and accuracy depends heavily on control. FHWA suggests five or more well-distributed ground control points and notes that acquiring them can run 10–50% of total project cost when it is required, which is the argument for RTK-capable aircraft that reduce the number needed. Flights need an FAA Part 107 certificated remote pilot and airspace authorization near airports. The hardest part is not technical: the value comes from capturing on the same day every week, and that discipline is what most projects drop by month four.

## When to use
Fly the site before you bid it, so your earthwork quantities come from measured topography rather than the designer's assumption, and fly it weekly through the dirt phase. Use 360-degree walkthroughs on any interior fit-out where work gets covered, because the cheapest time to record a wall cavity is the day before it is closed. If you are buying this for management insight, be skeptical, since the superintendent usually already knows the job is behind; buy it because you will want the record when a pay application is questioned or a delay claim is filed. Do not buy an analytics platform before you have a reliable capture habit, and do not expect photogrammetry to give you anything under a deck or through a canopy. Where the job is small and mostly indoors, a phone camera and a filing convention will do.

## Key numbers
UAS-derived volumes vary 1–2% against conventional methods · stockpile volume within 2 mm mean vertical difference of terrestrial LiDAR, 31 mm standard deviation · survey-grade LiDAR 5–10 mm, mapping-grade 1–3 cm · five or more ground control points recommended, and acquiring them can be 10–50% of total project cost · traditional ground survey takes days on site plus weeks to process, against about an hour of flight · retainage of typically 5–10% withheld until the work is certified complete.

## Examples
DroneDeploy and Propeller Aero for site photogrammetry and earthwork quantities; OpenSpace and Buildots for 360-degree interior capture pinned to the floor plan; FHWA's tech brief series on small UAS for construction quantity estimation, written because nearly every state DOT is already doing this; Utah DOT's use of UAS surfaces for construction cross-sections and quantity calculation.

## Economic profile
Progress tracking is mostly bought to move money, not to manage work. Contractors get paid monthly against a schedule of values, an owner's representative and often a lender's inspector certify percent complete before a draw is released, and retainage of typically 5–10% is held back until the end. A disagreement about percent complete stalls a draw for weeks while the contractor keeps paying crews, so the ability to show a dated, measured record of what exists is worth more than any insight the software offers. On unit-price infrastructure work this is literal: FHWA states that earthwork quantity estimates are used for project payments, and UAS is used at closeout to verify quantities for final payment. Delay and disruption claims turn on what was built on what date, and dated georeferenced imagery is contemporaneous evidence that costs almost nothing next to a claim. The economics are the easiest on this sheet. An enterprise drone with RTK and a photogrammetry subscription runs a few thousand to low tens of thousands of dollars a year, a 360-degree camera costs a few hundred, and the draw it protects is hundreds of thousands to millions of dollars a month. Unusually for construction, the general contractor who pays for it is also the party who gets paid faster, and the owner and the lender want the same record, so nobody in the chain has a reason to resist it.

## Videos

- https://www.youtube.com/watch?v=OkhuTr9YkNk — Drone Mapping for Construction: Complete Guide (The Drone Life, 20 minutes, 100k+ views)
- https://www.youtube.com/watch?v=xLFgF_93luE — How OpenSpace Automates Jobsite Documentation in 360° (OpenSpace, 6 minutes, 100k+ views)

## Further reading

[Use of Small Unmanned Aircraft Systems for Construction Quantity Estimation (Federal Highway Administration)](https://www.fhwa.dot.gov/uas/resources/hif23058.pdf) · [Certificated Remote Pilots including Commercial Operators (Federal Aviation Administration)](https://www.faa.gov/uas/commercial_operators)
