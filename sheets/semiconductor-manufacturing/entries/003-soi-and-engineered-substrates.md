---
number: 3
name: SOI and engineered substrates
part: 1
group: Silicon substrates
devices: [rf, logic, analog, photonic]
node: [mature, adv]
wafer: [small, w200, w300]
toolcost: low
suppliers: duo
---

## Description
An SOI wafer is a thin single-crystal silicon film sitting on a buried oxide on a handle wafer, and it is built by layer transfer rather than by growth. Soitec's Smart Cut is the dominant route: implant hydrogen to a controlled depth in an oxidized donor wafer, bond the donor face-down to a handle wafer (manufacturing-processes 195), then anneal until the hydrogen-damaged plane splits and lifts off a film of exactly the implant depth, leaving the donor to be reclaimed and used again. Three different markets buy the result and are easy to confuse. RF-SOI puts a thin film over a high-resistivity handle so antenna switches stop coupling into the substrate. FD-SOI puts an undoped 6 nm-class film over a thin buried oxide so the channel is fully depleted and the back gate can be biased at runtime. Photonics-grade SOI is a 220 nm silicon device layer over roughly 2 µm of oxide, where the buried oxide is the waveguide's lower cladding rather than an electrical isolator.

## Strengths and weaknesses
The buried oxide removes substrate coupling and cuts junction capacitance, which is why RF-SOI switches are linear and low-loss and why FD-SOI gets FinFET-like leakage out of a planar process at planar-process cost, with body biasing as a knob you can turn after tape-out. Against that: the wafer costs a multiple of a bulk wafer, the oxide is a thermal insulator so devices self-heat, and the design ecosystem is thinner, with fewer foundries and fewer qualified IP libraries than bulk CMOS. The failure mode is film thickness uniformity. An FD-SOI channel is around 6 nm thick and has to hold roughly ±0.5 nm across a 300 mm wafer, because that variation lands directly on threshold voltage. A wafer vendor's uniformity drift becomes your device's Vt spread, and no fab process step downstream can correct it.

## When to use
If you are building an antenna switch, tuner, or RF front-end module, RF-SOI is the default and there is not much of an argument left to have. If you need FinFET-class leakage but your volume cannot amortize a FinFET mask set and design NRE, FD-SOI at GlobalFoundries 22FDX or Samsung 18FDS is the deliberate decision not to go to the leading edge, and the body-bias knob is worth real power on a battery-powered part. If you are building silicon photonics, you buy photonics-grade SOI because the waveguide needs that buried oxide, and your substrate decision is made for you (029). Avoid SOI for thermally dense parts, where self-heating through the oxide hurts, and for cost-driven digital parts that run happily on bulk planar CMOS (013). Partially depleted SOI is legacy at this point; do not start a new design on it.

## Key numbers
FD-SOI silicon film around 6 nm held to roughly ±0.5 nm across 300 mm · photonics-grade SOI at a 220 nm device layer over about 2 µm of buried oxide · RF-SOI went from under 20% of the antenna-switch market in 2010 to about 95% by 2016 · Soitec reports something over 70% share of RF-SOI · GlobalWafers' Smart Cut license was terminated, with a settlement transition running to June 2027.

## Supply chain
This is the most concentrated substrate on the sheet. Soitec invented Smart Cut with CEA-Leti, owns the patent estate, and licenses it selectively; Shin-Etsu Handotai is the second qualified volume source, SUMCO makes bonded SOI, and Simgui in Shanghai holds a license for 200 mm. The supplier count is shrinking rather than growing: Soitec terminated GlobalWafers' license in October 2023, GlobalWafers litigated, and the July 2025 settlement ended the agreements with a transition period through June 2027. For photonics-grade SOI the count is one. Soitec is the only qualified volume supplier to Tower, GlobalFoundries, and TSMC, and requalifying a photonics substrate means requalifying the PDK built on it, which is a multi-year exercise rather than a purchasing decision. If you are building a silicon photonics business, that single supplier is a risk you have to write down explicitly.

## Examples
Soitec (Bernin, France and Pasir Ris, Singapore) and Shin-Etsu Handotai on the substrate side. GlobalFoundries 22FDX and Samsung 18FDS and 28FDS on the FD-SOI side, with NXP and STMicroelectronics among the larger users. RF-SOI switches from Qorvo, Skyworks, and Broadcom sit in essentially every smartphone. GlobalFoundries Fotonix and Tower's photonics platform both run on Soitec photonics-grade SOI.

## Economic profile
Engineered substrates sell at several times the price of a bulk wafer, and that spread is the whole business: Soitec runs specialty-materials margins on what is physically still a silicon disc, and it holds them because the process is licensed rather than copied. The exposure is end-market concentration. RF-SOI volume tracks smartphone units, which have been flat for years, so the growth case has moved to photonics-grade SOI on AI optical interconnect demand and to SmartSiC, the same layer-transfer trick applied to silicon carbide. For a chip designer the practical consequence is second-sourcing: an FD-SOI design has two credible substrate suppliers and two credible foundries, so treat a dual-source plan as something you have to engineer rather than something you can procure.

## Videos

- https://www.youtube.com/watch?v=uvV7jcpQ7UY — An introduction to FD-SOI (STMicroelectronics, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=T-prNhiLLZ8 — Smart Cut™ Process (Soitec, 1 minute, 1k+ views)

## Further reading

[Smart Cut technology (Soitec)](https://www.soitec.com/home/technology/innovation/smart-cut) · [FD-SOI: A technology setting new standards for IoT, automotive and mobile connectivity applications (Global Semiconductor Alliance)](https://www.gsaglobal.org/forums/fd-soi-a-technology-setting-new-standards-for-iot-automotive-and-mobile-connectivity-applications/)
