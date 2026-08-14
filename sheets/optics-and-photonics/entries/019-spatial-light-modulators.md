---
number: 19
name: Spatial Light Modulators
part: 4
group: Modulation & scanning
band: [vis, swir]
apps: [med, metro, mfg, cons]
form: mod
cost: u10k
maturity: est
---

## Description
A spatial light modulator imposes a pattern on a beam's amplitude or phase across its cross-section rather than in time. The dominant technology is liquid crystal on silicon: a liquid crystal layer over a CMOS backplane, where the voltage at each pixel rotates the local molecules and changes the optical path length. Load a computed hologram onto the device and the far field becomes whatever pattern you designed. Digital micromirror devices do the amplitude version by tilting millions of tiny mirrors.

## Strengths and weaknesses
Full programmable control of the wavefront is a capability nothing else offers: one device can split a beam into hundreds of traps, correct aberrations in a microscope, or shape a machining spot into a ring. Phase-only modulation wastes no light in principle. The costs are speed and efficiency. Liquid crystal devices update at 60–500 Hz, far slower than a scanner, they are strongly polarization-dependent, and diffraction efficiency into the desired order is typically 60–80% with the rest going into unwanted orders and a zero-order spot that has to be blocked.

## When to use
Use an SLM when the wavefront itself is the thing you want to control: holographic optical tweezers, adaptive optics in microscopy, multi-spot laser processing, and structured illumination. Use a galvo or MEMS scanner instead when you need one spot moved quickly, because scanners are orders of magnitude faster. Budget optical power carefully, since liquid crystal devices have modest damage thresholds, and plan for the zero-order beam in the layout rather than discovering it during alignment.

## Key numbers
Frame rates typically 60–500 Hz for liquid crystal devices, kilohertz for digital micromirror arrays · resolution commonly 1,920 by 1,080 pixels or better, with pixel pitch of a few microns · diffraction efficiency 60–80% into the designed order · phase modulation of at least 2 pi at the design wavelength · strongly polarization-dependent, so the input must be conditioned.

## Examples
Holographic optical tweezers manipulating many particles at once; adaptive optics correcting sample-induced aberrations in deep-tissue microscopy; multi-beam laser processing splitting one source into dozens of spots; digital micromirror devices in projectors and in maskless lithography.

## Economic profile
The panel inside a scientific SLM is close to the panel inside a projector, and most of the price difference is volume and calibration. Consumer LCOS and micromirror engines are made by the million for projectors and headsets, while a phase-only SLM sold to a laboratory is a low-volume variant with a thicker liquid crystal layer, a per-device wavefront calibration, and support from the vendor, which is what puts it in the thousands rather than the tens of dollars. If an application can live with an off-the-shelf projector engine, that substitution is the largest saving available. Two costs beyond the purchase price are worth budgeting. Diffraction efficiency of 60–80% means the rest of the laser power is thrown away, so at high power the buyer pays again in source cost, and the 60–500 Hz update rate caps throughput, so in laser processing an SLM is competing against simply buying more galvo scanners and makes sense only when the job needs many spots at once rather than one spot moved quickly.

## Videos

- https://www.youtube.com/watch?v=lXELRlx28ok — LCOS Spatial Light Modulator working principle (HOLOEYE Photonics AG, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=iX994oL1H-M — EXULUS Spatial Light Modulators – Principles and Applications (Thorlabs, 23 minutes, 10k+ views)
- https://www.youtube.com/watch?v=-KzEcJg1wWM — Polarization Dependence of Phase-Only Spatial Light Modulators (SLM) | Thorlabs Insights Topic Focus (Thorlabs, 5 minutes, 10k+ views)

## Further reading

[Optipedia, free optics information (SPIE Publications)](https://spie.org/publications/spie-publication-resources/optipedia-free-optics-information) · [Liquid Crystal Modulators (RP Photonics Encyclopedia)](https://www.rp-photonics.com/liquid_crystal_modulators.html)
