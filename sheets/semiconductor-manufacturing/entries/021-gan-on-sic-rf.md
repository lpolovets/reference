---
number: 21
name: GaN-on-SiC RF
part: 5
group: RF and photonic III-V
devices: [rf]
node: [mature]
wafer: [small]
toolcost: low
suppliers: few
---

## Description
This is the same AlGaN/GaN HEMT as the power device in 020, grown on a semi-insulating silicon carbide substrate instead of a silicon one. RF power amplifiers are thermally limited rather than voltage limited, and SiC conducts heat about three times better than silicon, so the same transistor can be driven far harder before the channel gets too hot. Production MMICs deliver roughly 4 W per millimeter of gate width at 10 GHz, research parts reach about 8 W/mm at 30 GHz, and laboratory devices have shown 30–40 W/mm; GaN-on-silicon's best is about 10 W/mm and only pulsed. The 3–4× gap in production parts is bought entirely with substrate thermal conductivity. Figures an order of magnitude above these circulate on market-report sites and are wrong. The lithography is as ordinary as in the other compound entries: gate lengths of 0.25, 0.15, and 0.1 µm are the standard production offerings, patterned on 100 and 150 mm wafers.

## Strengths and weaknesses
High power density means fewer devices, smaller combiners, and smaller amplifiers for a given output, which is exactly what an active electronically scanned array needs when every element has its own transmit chain. GaN's high breakdown field also lets the drain run at 28 to 50 V, which raises the device impedance and makes matching networks wider-band and less lossy than a GaAs part's. It tolerates load mismatch well. The weaknesses are cost and heat. Semi-insulating SiC is a different and scarcer grade than the conductive SiC that power devices use, wafers are 100 and 150 mm, and die cost stays high because of it. Thermal management remains the design constraint rather than a detail: reliability is specified as a mean time to failure at a stated channel temperature and qualified by extrapolating high-temperature operating life, so the failure mode is a thermal design that runs 20 °C hotter than the model assumed and loses most of the part's rated life without ever failing a bench test.

## When to use
Choose GaN-on-SiC when you need watts of RF output above roughly 2 GHz and the thermal path is what limits you: radar transmit/receive modules, electronic warfare, satcom terminals, and macro-cell base stations. Use GaAs (022) for low-noise and small-signal functions and for handset power amplifiers, where GaN's cost and 28 V drive make no sense at all. Use GaN-on-silicon for lower-frequency, lower-power-density RF where cost matters more than watts per millimeter and you can spread the heat over more die. If the customer is a defense program, the deciding factor is usually not the datasheet. It is whether the fab holds DMEA trusted-foundry accreditation and whether the supply chain is ITAR-compliant, and that takes years to arrange and cannot be bought quickly.

## Key numbers
Roughly 4 W/mm in production MMICs at 10 GHz · about 8 W/mm in research parts at 30 GHz and 30–40 W/mm in the laboratory · GaN-on-silicon's best about 10 W/mm and pulsed · gate lengths of 0.25, 0.15, and 0.1 µm on 100 and 150 mm wafers · RF GaN market about $2.0B in 2025, up from $740M in 2019, with military more than half of it · the top five vendors hold roughly 58–60% of revenue.

## Supply chain
Semi-insulating SiC substrates come from a short list led by Wolfspeed and Coherent, with Chinese suppliers such as SICC and TanKeBlue moving in from the conductive-substrate side. Epitaxy needs MOCVD reactors from Aixtron or Veeco. On the device side, Qorvo, MACOM, NXP, Sumitomo Electric, and Mitsubishi Electric hold most of the merchant market, with in-house lines at RTX and Northrop Grumman and WIN Semiconductors serving fabless customers as a foundry; the top five vendors together are roughly 58–60% of revenue. MACOM bought Wolfspeed's RF business, including the 100 mm GaN fab at Research Triangle Park, for $125M in December 2023, which left Wolfspeed as a substrate supplier to its own former competitors. The binding constraint in this market is usually accreditation rather than capacity: defense programs need trusted-foundry status and long qualification cycles, which rules out most of the merchant world regardless of price. The material exposure is gallium, where China supplied about 98% of low-purity production in 2024 and restricted US exports in December 2024.

## Examples
Raytheon's LTAMDS and Lockheed Martin's SPY-7 and LRDR radars are GaN-based AESAs, and the Patriot family's GaN upgrades are the clearest example of a fielded system re-hosted on the technology. Qorvo sells 0.15 µm and 0.09 µm GaN-on-SiC processes to fabless designers and to its own product lines. MACOM's RTP fab supplies defense and satcom parts. NXP and Sumitomo Electric supply the base-station side. WIN Semiconductors is the largest merchant compound-semiconductor foundry offering GaN-on-SiC alongside its GaAs lines.

## Economic profile
This is not a price-competitive market, and the numbers show it. Revenue passed roughly $2B in 2025 from $740M in 2019, and military applications are more than half of it, so buyers are paying for qualification, supply assurance, and radiation and reliability data rather than for cents per die. Design cycles run years, volumes are modest, and there is consequently no pressure to move off 100 and 150 mm wafers even though die cost would fall on 200 mm. The telecom half of the market is the price-sensitive one, and it shrank when 5G macro build-outs slowed, which is why the mix tilted further toward defense. If you are looking at an RF GaN business, the durable asset is the accreditation and the qualified process, not the transistor.

## Videos

- https://www.youtube.com/watch?v=J7pzD9Xz3S4 — GaN RF Power Transistors for Avionics and Radar (Richardson RFPD, 17 minutes, 1k+ views)
- https://www.youtube.com/watch?v=w5tw3z-Gs9M — Raytheon - Gallium Nitride (GaN) Advantage In Radars [1080p] (arronlee33, 2 minutes, 5k+ views)

## Further reading

[The Evolution of Manufacturing Technology for GaN Electronic Devices (Micromachines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8305582/) · [Effects of Thermal Boundary Resistance on Thermal Management of Gallium-Nitride-Based Semiconductor Devices: A Review (Micromachines)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10673006/)
