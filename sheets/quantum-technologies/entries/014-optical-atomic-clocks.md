---
number: 14
name: Optical Atomic Clocks
part: 5
group: Clocks
temperature: laser
uses: [time, sense]
horizon: now
maturity: early
bottleneck: laser
---

## Description
An atomic clock counts oscillations of an atomic transition. Cesium microwave clocks, which define the SI second, tick at 9.2 GHz. Optical clocks use a transition in the visible, around 500 THz, so each tick is 50,000 times shorter and the same fractional stability buys far more precision. Strontium and ytterbium lattice clocks hold thousands of atoms in an optical lattice; aluminum and ytterbium ion clocks use one trapped ion. An optical frequency comb converts the optical tick down to a countable microwave signal.

## Strengths and weaknesses
These are the most accurate measuring devices humans have built, reaching fractional uncertainty around 10^-19, which corresponds to gaining or losing under a second over the age of the universe. That sensitivity makes them instruments as well as clocks: at this level the clock rate changes measurably with a centimeter of height in Earth's gravity, so they measure geopotential. The costs are size and fragility. A record-setting clock fills a laboratory, needs several stabilized lasers and an ultra-stable cavity, and takes expert operators. Transportable versions exist but are far from a product.

## When to use
Optical clocks matter to you if you care about the redefinition of the second, about geodesy, or about tests of fundamental physics. Commercially, they are entering the market as compact optical clocks that outperform rubidium and cesium standards for holdover in telecom and defense timing, which is the real near-term application: staying accurate when GPS is denied. For ordinary timing, a chip-scale or rubidium clock is orders of magnitude cheaper and entirely sufficient.

## Key numbers
Optical transitions near 500 THz against 9.2 GHz for cesium, so roughly 50,000 times more ticks per second · fractional uncertainty around 10^-19 in the best ion clocks, 41% better than the previous record set in 2025 · sensitive enough to detect a 1 cm change in elevation through gravitational time dilation · laboratory systems fill a room; transportable versions are demonstration hardware.

## Examples
NIST's aluminum ion quantum logic clock, the current accuracy record holder; strontium lattice clocks at JILA and PTB; the international effort toward redefining the SI second on an optical transition; transportable clocks used for relativistic geodesy field campaigns.

## Economic profile
The cost of a laboratory optical clock is mostly the laser stack: several stabilized lasers, an ultra-stable reference cavity, a frequency comb, and people who can keep all of it running. Those systems are not sold as products, because national metrology institutes build them and the funding is science funding rather than a purchase order. The commercial version is the compact optical clock, and it is sold against rubidium and cesium standards on one question, which is how much holdover accuracy a buyer gets per dollar and per watt when GPS is denied. Most timing requirements do not need anything close to 10^-19, so the addressable market is narrow (telecom, defense, and metrology) and a chip-scale or rubidium clock is orders of magnitude cheaper for everything else. The lever that would widen it is integrated photonics: putting the lasers, the cavity, and the comb onto chips is what takes the price from a laboratory number to an instrument number, so progress on those components predicts this market better than any new accuracy record does.

## Videos

- https://www.youtube.com/watch?v=Yr2Qo-PYJWw — How optical clocks are redefining time and physics (New Scientist, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=Z_EnP7JG42Q — Operating principle of an optical atomic clock (AQuRA, 5 minutes, under 1k views)
- https://www.youtube.com/watch?v=8IrbreXO6x8 — How does the NIST-F4 fountain clock work? (National Institute of Standards and Technology, 3 minutes, 1k+ views)

## Further reading

[NIST Ion Clock Sets New Record for Most Accurate Clock in the World (NIST)](https://www.nist.gov/news-events/news/2025/07/nist-ion-clock-sets-new-record-most-accurate-clock-world) · [Portable Optical Lattice Clock (NIST)](https://www.nist.gov/programs-projects/portable-optical-lattice-clock)
