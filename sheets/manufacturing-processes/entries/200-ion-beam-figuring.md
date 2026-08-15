---
number: 200
name: "Ion-beam figuring"
part: 6
group: "Precision Optics"
materials: [glass]
volumes: [proto, low]
tooling: high
---

## Description

An ion beam sputters tiny quantities of material from selected areas to correct optical figure.

## Strengths and weaknesses

Noncontact and capable of nanometer-level correction. Slow, expensive, and vacuum-intensive.

## When to use

IBF is the final-correction process for the most demanding optics. Use it when the figure error budget is in single-digit nanometers RMS or below (EUV lithography mirrors, space telescope segments, synchrotron and high-energy laser optics), and when a contact process would print through on lightweighted or thin substrates. The ion beam applies no force and produces no edge roll, which is why it works on those substrates. It removes only tens to hundreds of nanometers per run inside a vacuum chamber, so the optic must arrive already polished to excellent finish and near-final figure by conventional means or MRF. If you don't need that last bit of figure correction, MRF is faster and cheaper. IBF also does not improve roughness, so pair it with smoothing steps when microroughness matters too.

## Key numbers

Residual figure error 0.5–2 nm RMS after correction · removal of tens to hundreds of nanometers per run · ion beam diameter 1–30 mm, which sets the smallest correctable spatial period · 80–90% of the remaining figure error removed per iteration · run time hours to tens of hours in a chamber at about 10^-4 mbar · part sizes to roughly 1.5 m, machines several million dollars.

## Examples

Space telescope mirrors, EUV optics, high-energy laser optics.

## Economic profile

Machines run to several million dollars and a run takes hours to tens of hours in vacuum, so throughput is very low and cost per part is high. It is used at the end of the chain on parts where nothing else will meet the figure, which in practice means space telescopes, lithography optics, and large astronomical mirrors. Removing 80–90% of the remaining error per iteration is what makes the schedule predictable, and on programs of that size schedule certainty is worth more than the machine time.

## Videos

- https://www.youtube.com/watch?v=5CRa1c_Ac1E — Automatic Ion Beam Figuring Process (Bühler Alzenau GmbH, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=7uX3PkIjlHY — Ion beam figuring for telescope mirrors of different sizes (scia Systems, 15 minutes, under 1k views)
- https://www.youtube.com/watch?v=RQ0jB97qli0 — Ion Beam Figuring Process Concave Sample (Bühler Alzenau GmbH, 2 minutes, 1k+ views)

## Further reading

[The Technology of Ion Beam Figuring (scia Systems)](https://www.scia-systems.com/learning/ionbeamfiguring)
