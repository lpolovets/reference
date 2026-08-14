---
number: 19
name: Coherent Optical Transport
part: 4
group: Fiber networks
reach: [long, global]
capacity: [tbps]
medium: fiber
latency: sub
maturity: dep
---

## Description
A coherent transponder mixes the received light with a local oscillator laser so the receiver recovers amplitude and phase in both polarizations, which gives four independent dimensions per symbol instead of the one that direct detection sees. Everything after that happens in a digital signal processor: chromatic dispersion, polarization-mode dispersion and laser phase noise are undone in the electrical domain, which is why coherent systems removed the dispersion-compensating fiber spools that used to sit in every amplifier hut. Rate comes from three knobs multiplied together, namely bits per symbol, symbols per second, and the two polarizations. Dual-polarization QPSK carries 4 bits per symbol, DP-16QAM carries 8, and DP-64QAM carries 12, so the first commercial coherent line at 100G ran DP-QPSK near 32 Gbaud, 400G runs DP-16QAM near 60 Gbaud, and OIF's 800ZR specifies DP-16QAM at a nominal 118.2 Gbaud. The current top of the range is 1.6 Tbps on one wavelength from a DSP on a leading process node. The other change is packaging: coherent used to mean a line card in a separate transport chassis, and it now also comes as a QSFP-DD or OSFP module that plugs straight into a router port.

## Strengths and weaknesses
Coherent detection is what let capacity per fiber keep rising after direct detection ran out of room, because it recovers the phase and so can use dense constellations that a photodiode cannot see. It also made the optical line simpler, since impairments the DSP can undo no longer need optical hardware to fix. The limits are now information-theoretic and thermal. Spectral efficiency for the pluggable classes is about 5.3 bits per hertz (400G in a 75 GHz slot, 800G in 150 GHz, both derived from the standardized channel plans), and line systems tuned for shorter spans reach 6 to 8, against a nonlinear Shannon limit for the fiber channel near 10 to 11, so the remaining headroom is a factor of two rather than a factor of ten. Denser constellations also need more signal-to-noise, so every step up in bits per symbol costs reach: 400ZR targets 120 km and 800ZR 80 to 120 km, while a line-side transponder with the same DSP family runs thousands of kilometers. And a pluggable coherent module dissipates roughly 20 to 30 W inside a faceplate designed for a client optic, which is what caps how many can go in one router.

## When to use
If the span is a data center interconnect or a metro route under about 120 km and the traffic is Ethernet, put a 400ZR or 800ZR pluggable in the router and delete the transport shelf. If the route is regional, out to roughly 500 km, use OpenZR+ instead, which keeps the same form factor and buys reach with a stronger forward error correction code. If the route is long-haul, submarine, or needs OTN framing, performance monitoring and per-wavelength restoration, keep a line-side transponder, because that is where the extra reach and the operational tooling live. Check who owns the optical layer before you decide: a pluggable in a router means the IP team now owns the link budget, and that only works if there is an open line system underneath it and someone who can plan wavelengths. The laser, modulator and detector inside the module are covered on the optics and photonics sheet under optical transceivers; the question here is the transport system the module sits in.

## Key numbers
DP-QPSK 4 bits per symbol, DP-16QAM 8, DP-64QAM 12 · 100G at about 32 Gbaud, 400G at about 60, 800ZR at a nominal 118.2 Gbaud DP-16QAM · per-wavelength rates of 400G, 800G and 1.6T shipping today · spectral efficiency about 5.3 bits per hertz for ZR-class pluggables and 6–8 for short-span line systems, against a nonlinear Shannon limit near 10–11 · 400ZR reach 120 km, 800ZR 80–120 km, OpenZR+ to roughly 500 km, line-side transponders thousands of km · pluggable coherent module power roughly 20–30 W.

## Examples
OIF's 400ZR and 800ZR implementation agreements and the OpenZR+ MSA, whose original promoters were Acacia, Cisco, Fujitsu Optical Components, InnoLight, Juniper, Lumentum and NTT Innovative Devices; Ciena's WaveLogic, Nokia's PSE and Infinera's ICE DSP families on the line side; Cisco's purchase of Acacia, closed in 2021 at $4.5 billion, and Marvell's purchase of Inphi the same year at roughly $10 billion; Nokia's acquisition of Infinera, closed in 2025.

## Economic profile
The pluggable shift moved money from chassis to silicon. A transponder used to arrive as a line card in a transport shelf with its own power, management and rack space, and the system vendor sold all of it; a coherent pluggable is a module in a router port that the operator already paid for, so the shelf, the client-side optics that fed it, and the floor space all come out of the bill. That is the reason hyperscalers pushed the standards, and it is why the transport equipment market stopped growing with traffic. What did not commoditize is the DSP. Designing one on a 5 or 3 nm node is expensive enough that only about half a dozen companies ship a competitive part, which is why Cisco paid $4.5 billion for Acacia and Marvell about $10 billion for Inphi rather than building one, and why Nokia bought Infinera in 2025. For the operator the unit economics are simple: on an installed fiber, going from 100G to 800G on a wavelength is roughly eight times the capacity for the price of two modules, and no civil work at all. The catch is that reach and spectral efficiency trade against each other, so a network that buys the cheapest module per bit and then finds it cannot reach the far end has bought nothing.

## Videos

- https://www.youtube.com/watch?v=X_vhS3j5ac0 — What is Coherent Optical Technology? (ZCorum, 16 minutes, 10k+ views)
- https://www.youtube.com/watch?v=hcoNpgm9cwA — 400G ZR, Coherent Transport Plug for IPoDWDM Applications in Switches and Routers (Inphi, 10 minutes, 1k+ views)

## Further reading

[About | OpenZR+ (OpenZR+ MSA)](https://openzrplus.org/about/) · [Implementation Agreement for 800ZR Coherent Interfaces (Optical Internetworking Forum)](https://www.oiforum.com/wp-content/uploads/OIF-800ZR-01.0.pdf)
