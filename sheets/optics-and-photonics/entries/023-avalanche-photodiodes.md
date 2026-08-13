---
number: 23
name: Avalanche Photodiodes
part: 5
group: Detectors
band: [vis, swir]
apps: [sense, comms, med, def]
form: comp
cost: u1k
maturity: mature
---

## Description
An avalanche photodiode is a photodiode run at high reverse bias, where a photogenerated carrier is accelerated hard enough to knock more carriers loose, which do the same in turn. The result is internal gain of 10–100 before the signal ever reaches an amplifier, so the amplifier's noise is no longer what limits sensitivity. The price is that the multiplication is a random process, and its randomness appears as excess noise that grows with gain. There is therefore an optimum gain for any given system, not a maximum.

## Strengths and weaknesses
Internal gain buys 10–20 dB of sensitivity over a p-i-n diode at the same bandwidth, which is what makes long-range LiDAR and long-span optical receivers work. Response stays fast, into the gigahertz. The costs are bias and temperature. APDs need 100–400 V depending on material, gain varies sharply with both bias and temperature so a compensation loop is needed, and excess noise means gain past the optimum makes the measurement worse rather than better. Silicon APDs have much better excess noise behavior than InGaAs ones.

## When to use
Use an APD when the signal is weak but not down to individual photons, and bandwidth still matters: automotive and industrial LiDAR, long-span fiber receivers, scintillation detection, and rangefinding. Use a plain photodiode if there is enough light, since it is simpler and cheaper. Use a SPAD or photomultiplier if you are counting single photons, where an APD's excess noise makes it the wrong tool. Always design in temperature compensation of the bias, because uncompensated gain drift will swamp the sensitivity you bought.

## Key numbers
Internal gain typically 10–100, giving 10–20 dB sensitivity improvement over a p-i-n · bias of 100–400 V depending on material · excess noise factor rises with gain, so there is an optimum rather than a maximum · gain varies several percent per degree C, requiring compensation · unit cost tens to hundreds of dollars.

## Examples
APD receivers in long-reach fiber links; automotive LiDAR detectors at 905 nm; silicon photomultipliers, which are arrays of Geiger-mode APDs, in medical imaging and particle physics; laser rangefinders in surveying and defense.

## Videos

- https://www.youtube.com/watch?v=jFV9yJnPBIw — What is Avalanche Photodiode? (Fiber Optics For Sale Co., 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=anypWhEN0bo — Avalanche Photo Diode Explained | Basics, Structure, Working, Gain, Noise, Pros, Cons & Applications (Engineering Funda, 14 minutes, 1k+ views)

## Further reading

[Avalanche Photodiodes (RP Photonics Encyclopedia)](https://www.rp-photonics.com/avalanche_photodiodes.html)
