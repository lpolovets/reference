---
number: 23
name: InP photonics and high-speed
part: 5
group: RF and photonic III-V
devices: [photonic, rf]
node: [mature]
wafer: [small]
toolcost: low
suppliers: duo
---

## Description
Indium phosphide is the only mainstream semiconductor that makes light efficiently at 1310 and 1550 nm, the two wavelengths silica fiber is transparent at, which is why every long-reach optical transceiver has an InP laser somewhere inside it. It is a direct-bandgap material, and the InGaAsP and InGaAlAs alloys that lattice-match to it let a designer place the emission wavelength exactly where the fiber wants it. The same platform makes the electro-absorption modulators and the fast photodiodes on either end of the link, and InP HBTs and HEMTs cover the highest-frequency analog work, including modulator drivers in the fastest optical links and mm-wave front ends. None of this needs fine lithography: devices are built on 2, 3, and 4-inch wafers with i-line and contact tools, because performance comes from epitaxial layer control rather than linewidth. What the platform does depend on is the substrate, and InP substrates are hard to grow. Crystals are pulled by liquid-encapsulated Czochralski or grown by vertical gradient freeze, they twin and crack easily, and single-crystal yields run around 20–25% against silicon's effectively perfect supply.

## Strengths and weaknesses
Nothing else does the job: InP emits at telecom wavelengths, detects at them, and can put laser, modulator, waveguide, and detector on one monolithic chip, with cutoff frequencies high enough for mm-wave work as a bonus. The weaknesses are all downstream of the crystal. Wafers are small and expensive, InP is more brittle than GaAs and much more brittle than silicon so handling losses are real, and it conducts heat roughly half as well as silicon, which limits how hard you can drive a laser. The failure mode to watch is not breakage during fab but slow degradation in the field: dislocations in the substrate propagate into the active region as dark-line defects, so substrate defect density sets laser lifetime, and a batch of marginal wafers shows up as field returns years later rather than as yield loss at test.

## When to use
If the link runs over single-mode fiber past a few hundred meters, or the lane rate is 200 Gb/s and above, you need an InP source and you have no alternative. Use a monolithic InP photonic integrated circuit when the design is a handful of high-performance channels and you want the laser and modulator on the same die. If the design needs dozens of channels or a lot of passive routing (splitters, filters, switches), silicon photonics (029) gives better yield and wafer economics, and you attach an InP laser to it anyway. Below about 100 m over multimode fiber, GaAs VCSELs (022) are cheaper and good enough. In 2026 there is one more rule: check substrate lead times before you commit to a schedule, because InP supply, not design or fab capacity, is what is slipping optical module deliveries.

## Key numbers
A 50 mm optical-grade wafer went from about $800 in early 2025 to $2,300–2,500 by April 2026, with spot quotes above $3,000 · demand ran more than 50% above supply · single-crystal yield roughly 20–25% · three firms hold over 90% of substrate capacity · China refines about 69% of the world's indium · 100–200 Gb/s per lane in shipping parts · moving from 3-inch to 6-inch wafers gives roughly 4× more devices per wafer and over 60% lower cost per chip.

## Supply chain
Sumitomo Electric, AXT, and JX Advanced Metals hold more than 90% of InP substrate capacity, and all three are spending heavily to expand. The concentration is worse than a count of three suggests. AXT grows its crystals in China through its Beijing Tongmei subsidiary, and China both refines roughly 69% of the world's indium and added InP substrates to its export control list in February 2025, so two of the three exposures run through the same jurisdiction. Downstream, Lumentum has said it is shipping about 30% below customer demand and is converting a GaAs line to 6-inch InP, which is the clearest signal of where laser capital is going. If substrate supply is cut, there is no substitute at any price: silicon has an indirect bandgap and cannot lase, and GaAs cannot reach 1550 nm efficiently. The only real hedges are inventory, long-term supply agreements, and qualifying a second substrate vendor, which takes a year or more because laser reliability has to be requalified on the new material.

## Examples
Lumentum and Coherent supply most of the world's transceiver lasers and EMLs. Infinera (now part of Nokia) built the largest commercial monolithic InP PICs, integrating dozens of functions on one chip for coherent line cards. SMART Photonics in Eindhoven runs an open InP foundry on a multi-project-wafer model, and Fraunhofer HHI does the same for research volumes. Substrates come from Sumitomo Electric, AXT (Beijing Tongmei), and JX Advanced Metals. On the analog side, Teledyne and Northrop Grumman use InP HBT and HEMT processes for mm-wave and sub-terahertz front ends.

## Economic profile
The substrate is the cost, which is unusual for a semiconductor. A 2-inch InP wafer at $2,300–2,500 costs more than fifteen times what a 300 mm silicon wafer does, and it has about one thirty-fifth the area, so cost per mm² differs by more than two orders of magnitude. The fab steps that follow are cheap 1990s-vintage lithography by comparison. That makes wafer diameter the single biggest lever on device cost: the 3-inch to 6-inch transition is worth roughly 4× more devices per wafer and over 60% lower cost per chip, which is why every substrate maker is funding it. The 2025–2026 squeeze changed who captures the value. AI cluster optics pushed demand more than 50% above supply, prices roughly tripled in about a year, and margin moved upstream to the three substrate suppliers while module makers absorbed the increase. If you are building a business here, the question is whether you have contracted substrate supply through the expansion, because the expansions being funded now arrive in 2027 and 2028, and prices should ease when they do.

## Videos

- https://www.youtube.com/watch?v=gagV1LjOCMU — How our photonic chips work (SMART Photonics, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=zM60Vs7GhVA — Photonic Integrated Circuits - Inside an Infinera 1.6Tb/s PIC module (EvilmonkeyzDesignz, 11 minutes, 50k+ views)
- https://www.youtube.com/watch?v=EuWI1WPrZ2I — What is a DFB Laser? (Fiber Optics For Sale Co., 3 minutes, 50k+ views)

## Further reading

[Handbook for generic InP-based PIC design (JePPIX)](https://www.jeppix.eu/handbook/) · [Past, present, and future of InP-based photonic integration (APL Photonics)](https://pure.tue.nl/ws/files/128418711/1.5087862.pdf)
