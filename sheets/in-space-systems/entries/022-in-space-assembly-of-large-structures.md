---
number: 22
name: In-Space Assembly of Large Structures
part: 5
group: In-space assembly
orbit: [leo, geo]
scale: [t, ht]
autonomy: tele
customer: [civ, def]
maturity: demo
---

## Description
In-space assembly means launching a large structure as separate pieces and joining them together in orbit. The argument for it is not that rockets cannot lift enough mass, because they can; it is that the payload has to fit inside a fairing about 5 m across, and that number has barely moved in forty years. The Ariane 5 fairing that carried the James Webb Space Telescope was 5.4 m in diameter and 13 m tall, which is why a 6.5 m mirror had to be folded. Exactly one large structure has ever been assembled in orbit: the International Space Station, 419,725 kg and 109 m end to end around a 94 m truss, delivered on 42 assembly flights, 37 on the Space Shuttle and 5 on Russian Proton and Soyuz rockets, with crew aboard continuously from November 2000. Every structural joint on it was made by an astronaut in a pressure suit or by the Canadarm2 with an operator watching. Robotic assembly is a much shorter list: the SAGE III instrument and its support truss were bolted onto an ISS platform by Canadarm2 in 2017, GITAI's robotic arm assembled a four-panel solar array mockup inside the pressurized Bishop Airlock in 2021 and worked fasteners and connectors outside it in 2024, and the SPIDER payload that was to assemble seven elements into a 3 m communications antenna with a 5 m arm was canceled along with OSAM-1 in 2024.

## Strengths and weaknesses
Assembly breaks the link between aperture size and fairing diameter, and it does it with components that are individually small, individually testable, and individually replaceable if one arrives broken. It also removes the single irreversible deployment: a structure that is bolted together can be stopped, inspected, and continued, where a folded one gets one attempt. The weakness is that the assembler has to exist, and above low Earth orbit it does not. Crew can only reach low orbit, and crew time is expensive even there: NASA prices ISS crew time to commercial users at $130,000 an hour, so a two-person six-and-a-half-hour spacewalk is roughly $1.7M of crew time at that rate, which is arithmetic done here rather than a published cost. Robots avoid that but hit the control problem instead, because contact forces during a join need a loop running at tens to hundreds of hertz and the ground is 0.24 s away at GEO. The deeper problem is precision: an optical telescope needs its segments aligned to a small fraction of a wavelength, and the ISS truss was assembled to millimeters, so the demonstrated skill and the needed skill are several orders of magnitude apart.

## When to use
If the structure fits inside a fairing, launch it whole and stop there. If it does not fit but can be folded, deploy it, because deployment has flown hundreds of times and robotic assembly has not. Reach for assembly when the aperture is past what folding can plausibly reach, when the structure has to be extended or reconfigured after it is built, or when one deployment failure would cost the whole mission and you would rather have a sequence that can be paused. If you are planning assembly beyond low Earth orbit, assume no crew and price the robot and its operations as the main cost, not the structure. And if you are designing any spacecraft that might be assembled or extended later, put the grapple fixtures, fiducials, and standard structural joints on it now, because nothing flying today has them and their absence is what makes every assembly concept start from scratch.

## Key numbers
Fairing diameter about 5 m, Ariane 5 at 5.4 m by 13 m · ISS 419,725 kg, 109 m end to end, 94 m truss · 42 assembly flights, 37 Shuttle and 5 Russian, crewed continuously from November 2000 · SPIDER planned 7 elements into a 3 m antenna using a 5 m arm, canceled 2024 · ISS crew time priced at $130,000/hr, so a two-person 6.5-hour spacewalk is roughly $1.7M of crew time (derived here) · GEO round-trip light time 0.24 s against contact control loops needing tens to hundreds of hertz

## Examples
The ISS Integrated Truss Structure is the only flight example at scale; the EASE and ACCESS experiments on STS-61B in 1985 measured how fast and how tired a suited astronaut gets while bolting truss bays together. Robotic work is thinner: SAGE III on the ISS in 2017 with Canadarm2, GITAI's arm inside and then outside the Bishop Airlock in 2021 and 2024, the canceled SPIDER arm on OSAM-1, DARPA's NOM4D program with a Caltech truss-assembly mission planned for low Earth orbit in 2026, and ground demonstrations at NASA Langley (PASS, SAMURAI) and NASA Ames (ARMADAS).

## Economic profile
Everything here is paid for by civil and defense agencies, and there is no commercial buyer for orbital assembly at any price today. The cost structure is unusual because the structure is the cheap part: standard struts and nodes are ordinary aerospace hardware, while the assembler, the interfaces, and the operations campaign carry almost all of the money and all of the schedule risk. OSAM-1 shows what that risk looks like, since NASA canceled it in 2024 after cost growth without flying the assembly payload it carried. Launch cost cuts help less than they appear to, because launch is typically 10–25% of a program and assembly does not reduce the expensive part, which is engineering labor and qualification. The case closes only where the alternative is impossible rather than merely expensive, which today means apertures beyond roughly 10–15 m and structures that have to grow after they are built. Until a customer buys a second assembly mission with its own money, treat this as a research program with two modest robotic results and one enormous crewed one.

## Videos

- https://www.youtube.com/watch?v=jvhdNuiyNOI — Building the Space Station Truss (and the Solar Panel Tear) (Jared Owen, 19 minutes, 1m+ views)
- https://www.youtube.com/watch?v=xP4_Q7iIlb0 — Building in Space! On-orbit Servicing, Assembly, and Manufacturing (OSAM) (NASA Langley Research Center, 4 minutes, 10k+ views)

## Further reading

[International Space Station Facts and Figures (NASA)](https://www.nasa.gov/international-space-station/space-station-facts-and-figures/) · [In Space Assembled Telescope (ISAT) Study Preliminary Findings (NASA Technical Reports Server)](https://ntrs.nasa.gov/citations/20190001286)
