---
number: 19
name: Silicon Carbide Power
part: 5
group: Wide-bandgap power
devices: [power]
node: [mature]
wafer: [small, w200]
toolcost: low
suppliers: few
---

## Description
With silicon carbide, the substrate is the product. SiC boules grow by physical vapor transport, subliming a powder source onto a seed at over 2,000 °C, at roughly 0.3–0.5 mm per hour, and they top out around 3–5 cm of usable length. Silicon pulls from a Czochralski melt at 1–2 mm per minute and yields ingots two meters long. That single comparison explains why a SiC wafer has always cost 30–50 times a silicon one. On top of the substrate goes an epitaxial drift layer whose thickness and doping set the blocking voltage, and then a device process that is completely unremarkable by logic standards. A 1200 V SiC MOSFET has feature sizes around a micron, so it is patterned on i-line steppers (004) of the generation logic fabs retired in the late 1990s, on 150 mm wafers. The performance comes from the material, not the linewidth: SiC's bandgap is about three times silicon's and its critical field about ten times, so the drift layer can be roughly ten times thinner and far more heavily doped for the same blocking voltage. That is why every compound-semiconductor entry on this sheet sits in the Mature node band, and it is worth being explicit about what that means. "Advanced semiconductor" and "leading-edge lithography" are different things, and a company can be at the technical frontier of power electronics while buying twenty-year-old steppers.

## Strengths and weaknesses
A thin, heavily doped drift layer means low on-resistance per unit area at 650–1700 V, and a majority-carrier device means no tail current, so switching losses are a fraction of a silicon IGBT's. SiC also conducts heat about three times better than silicon and works at junction temperatures silicon cannot reach. The weaknesses start with the substrate: it is expensive, it is small, and it carries defects that silicon does not, particularly basal plane dislocations that propagate into the epitaxial layer and cause the body diode's forward voltage to drift under bipolar conduction. The standing qualification worry is the gate oxide. The SiC and SiO2 interface has a high trap density and offers a lower barrier to electron injection than silicon's, so the failure mode is threshold voltage drift and eventual gate oxide breakdown after years of biased high-temperature operation. That is exactly the failure automotive qualification exists to catch and exactly the one that is hardest to accelerate honestly in a test.

## When to use
If the system runs above about 650 V and switching losses dominate, SiC wins: EV traction inverters on 800 V architectures, DC fast chargers, solar string inverters, and rail traction. Make the case at system level, because you will not win it at the part. A 100 A SiC MOSFET still sells for roughly three times the equivalent silicon IGBT, and nobody credible expects device price parity; what pays for the premium is smaller magnetics, a smaller cooling system, and more range from the same battery. Below 650 V and above about 100 kHz, GaN (020) is usually the better answer. If the application is cost-driven, low-frequency, or runs at low duty cycle, a silicon IGBT still wins and probably always will.

## Key numbers
PVT growth at roughly 0.3–0.5 mm per hour against 1–2 mm per minute for silicon · usable boule length 3–5 cm · SiC wafers 30–50× the price of silicon wafers · 150 mm substrates around $400 in 2026, after falling more than 60% through 2024 and another 40% in 2025 · devices at 650–1700 V · a 100 A SiC MOSFET at roughly 3× the price of an equivalent silicon IGBT · 200 mm under a few percent of shipments, forecast past 20% by 2030.

## Supply chain
The substrate supplier list is short and it has changed hands fast. SICC, Wolfspeed, TanKeBlue, and Coherent lead it, with SK Siltron CSS, Resonac, and Rohm's SiCrystal behind them. Chinese suppliers went from roughly 10% of substrate revenue in 2021 to something like 40% in 2025, and SICC passed Wolfspeed for the top position. Device makers are a similarly short list: Infineon, STMicroelectronics, onsemi, Rohm, Mitsubishi Electric, Bosch, and Wolfspeed. What makes this entry different from the rest of the sheet is that the cutoff risk is inverted. PVT furnaces are not exotic, the process is well published, and the entry barrier turned out to be capital and patience rather than a tool nobody else can build, so the danger to an incumbent is being undercut rather than being denied supply. Substrate market revenue actually shrank 9% in 2024 to about $1.04B even as volumes grew, upstream utilization sat near 50%, and Wolfspeed went through Chapter 11 and emerged in September 2025 with debt cut about 70%. That is what commoditization looks like from the inside.

## Examples
The Tesla Model 3 inverter, using STMicroelectronics SiC MOSFETs, was the volume proof point for automotive SiC; Tesla's 2023 statement that its next drive unit would use 75% less silicon carbide was an equally useful reminder that designers optimize hard when a part is expensive. Wolfspeed's Mohawk Valley fab and Infineon's Kulim expansion are the flagship 200 mm lines. SICC and TanKeBlue are building 200 mm substrate capacity in China with national fund backing. Chinese EV makers, BYD among them, have driven much of the recent volume.

## Economic profile
The substrate has historically been the single largest line in a SiC die's cost, commonly put at around half, which is why the industry's whole cost roadmap is a substrate roadmap: bigger wafers, faster growth, better yield. The 200 mm transition is the main lever left, and it is still under a few percent of shipments with forecasts putting it past 20% by 2030. The 2024–2026 price collapse changed who can play. When 150 mm substrates fall from over $850 in 2023 to around $400 in 2026, a vertically integrated Western supplier that financed capacity at the old price is in trouble, and a subsidized new entrant with a fresh balance sheet is not. If you are evaluating a SiC business, the question is not whether demand grows, because it does, but whether the company's cost position survives another 40% substrate price decline.

## Videos

- https://www.youtube.com/watch?v=yHn_LvwQMcg — Silicon Carbide: A Power Electronics Revolution (Asianometry, 15 minutes, 100k+ views)
- https://www.youtube.com/watch?v=LeHE-7KmVvE — Spotlight on Silicon Carbide (SiC) crystal growth (ROHM Semiconductor Europe, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=HeSXVKLj8kg — How Silicon Carbide Wafers Are Made at PAM-XIAMEN? (powerwaywafer, 2 minutes, 100k+ views)

## Further reading

[PowerAmerica Strategic Roadmap for Next Generation Wide Bandgap Power Electronics (PowerAmerica)](https://poweramericainstitute.org/wp-content/uploads/2018/02/PowerAmerica_Roadmap_Final-Public-Version-February-2018.pdf) · [Body of Knowledge for Silicon Carbide Power Electronics (NASA NEPP)](https://nepp.nasa.gov/files/27644/NEPP-BOK-2016-GRC-Boomer-SiC-TN35760.pdf)
