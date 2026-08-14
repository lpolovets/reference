---
number: 9
name: NV Centers in Diamond
part: 3
group: Solid-state spins
temperature: room
uses: [sense, net, comp]
horizon: now
maturity: early
bottleneck: mat
---

## Description
A nitrogen-vacancy center is a point defect in diamond: a nitrogen atom next to a missing carbon atom. The resulting electron spin can be initialized with green light, read out through the brightness of its red fluorescence, and manipulated with microwaves, all at room temperature. Its energy levels shift with magnetic field, electric field, temperature, and strain, which makes it a sensor as much as a qubit. Diamond's stiff lattice and low spin-orbit coupling are what allow room-temperature operation, and nothing else offers that.

## Strengths and weaknesses
Room-temperature quantum coherence with optical readout is the unique property, and it makes NV centers the most commercially deployed quantum device outside atomic clocks. Sensitivity is combined with nanoscale spatial resolution, since a single defect can sit within nanometers of a sample. The costs are material and photon budget. Diamond has to be grown with controlled nitrogen and isotopic purity, placing defects precisely is still imperfect, and only a few percent of the emitted photons are usable for coherent networking, which is why entanglement rates between NV nodes remain slow.

## When to use
Use NV centers when you need magnetic or thermal sensing at micron or nanometer scale, at room temperature, with no cryogenics: current imaging in chips, magnetic microscopy of geological and biological samples, and battery and motor diagnostics. Watch them as network nodes, where they combine a long-lived spin memory with an optical interface. Do not choose them as a computing platform, where coherence per defect is good but scaling to many coupled defects has no established path.

## Key numbers
Operates at room temperature with optical initialization and readout · coherence up to milliseconds in isotopically purified diamond · magnetic sensitivity in the nanotesla per root hertz range for ensembles, with single defects giving nanometer spatial resolution · responds to magnetic field, electric field, temperature, and strain · only a small fraction of emitted photons are usable for entanglement.

## Examples
Element Six and Adamas supplying engineered diamond material; SandboxAQ's NV magnetometry for navigation and medical sensing; Delft's entanglement of NV nodes over kilometers, a milestone toward a quantum network; scanning NV microscopes imaging currents in devices.

## Economic profile
Removing cryogenics changes what kind of product this can be. With no fridge and no vacuum system, an NV instrument is priced and sized like an instrument rather than like a facility, which is a large part of why NV magnetometry is one of the few quantum products with commercial customers today. The cost that remains is material. Diamond grown with controlled nitrogen and isotopic purity comes from a small number of suppliers such as Element Six and Adamas, and defect placement is still imperfect, so yield on the sensing element is a real line item. Against competing sensors the trade is sensitivity for access: a SERF magnetometer reaches femtotesla per root hertz but needs a shielded, field-nulled room, while NV sits at picotesla per root hertz and works pressed against a chip or a rock, so it is worth buying whenever the measurement has to happen at the sample and a shielded room is not available. The networking side has worse economics, because only a small fraction of NV photons are usable for entanglement, so the rate per node is low and a link costs more nodes and more time than the same link built from a telecom-band emitter.

## Videos

- https://www.youtube.com/watch?v=T2KQCOq1hRA — NV center qubits | QuTech Academy (QuTech Academy, 7 minutes, 10k+ views)
- https://www.youtube.com/watch?v=VCT0wDLyvSs — The quantum world of diamonds (nature video, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=tWd0SkoI0HY — Operations on NV center qubits | QuTech Academy (QuTech Academy, 7 minutes, 10k+ views)

## Further reading

[The nitrogen-vacancy colour centre in diamond (arXiv)](https://arxiv.org/abs/1302.3288) · [Sensitivity Optimization for NV-Diamond Magnetometry (arXiv)](https://arxiv.org/abs/1903.08176)
