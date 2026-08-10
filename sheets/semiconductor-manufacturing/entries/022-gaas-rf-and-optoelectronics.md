---
number: 22
name: GaAs RF and Optoelectronics
part: 5
group: RF and photonic III-V
devices: [rf, photonic]
node: [mature]
wafer: [small]
toolcost: low
suppliers: few
---

## Description
Gallium arsenide is the compound platform that already had its volume moment and is now defending it. Electron mobility is several times silicon's and the bandgap is direct, so GaAs does two things well: fast, low-noise, highly linear transistors for radio front ends, and efficient light emission. GaAs heterojunction bipolar transistors are still the standard cellular power amplifier, GaAs pHEMTs the standard switch and low-noise amplifier, and GaAs VCSELs light face-recognition sensors, optical mice, short-range LiDAR, and short-reach datacom links. The fab is defined by its epitaxy rather than its lithography. An Aixtron G10-class MOCVD reactor runs eight 150 mm wafers per batch for roughly €4M, 150 mm is the production standard, and the patterning is the same mature-node stepper work every compound platform uses.

## Strengths and weaknesses
The semi-insulating substrate gives low RF loss, the high mobility gives gain and low noise at frequencies where silicon struggles, and the direct bandgap gives efficient emitters at 850 to 980 nm. A real merchant foundry ecosystem exists too, so a fabless RF company can be built on it, which is not true of most compound platforms. The weakness is competitive rather than physical. GaAs is squeezed from both sides: RF-SOI (003) took antenna switches from under 20% of the market in 2010 to about 95% by 2016, CMOS power amplifiers take the low end of the handset market, and GaN-on-SiC (021) takes the high-power end. Thermal conductivity is about a third of silicon's, which limits power density. The failure mode is a business one. GaAs rarely loses a socket on performance; it loses when a silicon or SOI process becomes just good enough and the customer would rather integrate the function into a die it already buys.

## When to use
Pick GaAs when you need linear RF power or low noise between roughly 0.5 and 100 GHz at handset cost and volume, or when you need an efficient emitter around 850 to 980 nm. Move to GaN-on-SiC (021) when you need watts of output and can pay for the substrate. Move to RF-SOI (003) when the function is switching or tuning rather than amplifying, because that battle is already over. Move to InP (023) when the light has to be at 1310 or 1550 nm, which GaAs cannot reach. The planning rule of thumb: if a CMOS or SOI process can plausibly meet the spec within two product generations, it will eventually take the socket, so treat a GaAs design win as defensible for a generation rather than permanently.

## Key numbers
Electron mobility several times silicon's, with a direct bandgap · 150 mm as the production standard · an Aixtron G10-class MOCVD reactor at eight 150 mm wafers per batch for roughly €4M · RF-SOI took antenna switches from under 20% share in 2010 to about 95% by 2016 · mobile RF front end about $15.4B in 2024 · three substrate suppliers hold most of the GaAs wafer market.

## Supply chain
Substrates come from Sumitomo Electric, Freiberger Compound Materials, and AXT through its Beijing Tongmei subsidiary, and those three hold most of the market between them, with Chinese suppliers expanding at smaller diameters. That AXT's crystal growth sits in China matters more than the corporate domicile suggests, because the feedstock is Chinese too: China produced about 98% of the world's low-purity gallium in 2024, banned exports to the United States in December 2024, and suspended that ban in November 2025 through late November 2026. Epitaxy depends on MOCVD reactors from Aixtron and Veeco. On the device side the merchant foundry model is genuine, with WIN Semiconductors the largest pure-play GaAs foundry and AWSC behind it, alongside integrated makers Skyworks, Qorvo, Sumitomo, and Murata. A gallium cutoff would not stop GaAs immediately, since substrate inventories and recycling absorb some of it, but there is no non-Chinese source at scale and no way to build one quickly.

## Examples
Skyworks and Qorvo front-end modules put GaAs HBT amplifiers and pHEMT switches into most smartphones sold. Lumentum and ams-OSRAM supply the VCSEL arrays behind Face ID and consumer 3D sensing. WIN Semiconductors is the foundry behind much of the fabless RF world. AXT's Beijing Tongmei operation is the substrate supplier that ties the platform to Chinese export policy. Lumentum's conversion of a GaAs line to 6-inch InP is a useful signal about where capital thinks the growth is.

## Economic profile
This is a large market that is not growing fast. The mobile RF front end was about $15.4B in 2024, and every new 5G band adds a socket GaAs can still win while RF-SOI and CMOS take the ones it already has, so the platform's revenue is a running battle rather than a trend. Capital intensity is modest by silicon standards. The expensive tool is a €4M MOCVD reactor, not a €90M scanner, so the business is decided by yield, packaging, and customer relationships rather than by who can raise the most capital. VCSELs are the growth line, tied to consumer 3D sensing and short-reach datacom, and both of those are volatile enough that a single phone design change can move a supplier's year.

## Videos

- https://www.youtube.com/watch?v=XSNuyDA4800 — The Little Vertical Laser That Everyone Uses (Asianometry, 19 minutes, 100k+ views)
- https://www.youtube.com/watch?v=J4XU-QxXJMw — China's Gallium & Germanium Export Controls (Asianometry, 15 minutes, 100k+ views)
- https://www.youtube.com/watch?v=_YBKUfaroEE — RF Front-End Explained in 101 Seconds (Qualcomm, 2 minutes, 10k+ views)

## Further reading

[Gallium, Mineral Commodity Summaries 2026 (USGS)](https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gallium.pdf)
