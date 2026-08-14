---
number: 21
name: Satellite QKD
part: 6
group: Communication & security
temperature: k4
uses: [sec, net]
horizon: near
maturity: proto
bottleneck: laser
---

## Description
Fiber attenuates photons exponentially, which caps terrestrial QKD at a couple of hundred kilometers. Free space through vacuum does not, and most of the atmosphere's thickness is in the first ten kilometers, so a satellite link loses far less than the equivalent fiber. A low-Earth-orbit satellite generates entangled photon pairs or prepares BB84 states and sends them to optical ground stations during a pass, distributing keys between stations thousands of kilometers apart without any trusted relay in between.

## Strengths and weaknesses
It solves the range problem and, in the entanglement-based version, removes the need to trust intermediate nodes, which is the strongest security argument in the field. China's Micius demonstrated entanglement distribution over 1,200 km and intercontinental key exchange. The costs are availability and rate. A low-orbit satellite is over a given station for a few minutes per pass, keys accumulate slowly, clouds block the link entirely, and the ground stations are telescopes with tracking systems. Building and launching the satellite is the obvious other cost.

## When to use
Satellite QKD is a national infrastructure decision rather than an enterprise purchase. It is the credible route to intercontinental key distribution without trusted nodes, and several countries are building programs on that basis. If your requirement is protecting data against a future quantum computer, post-quantum cryptography does it today with a software update; satellite QKD addresses a narrower case where a physics-based guarantee across a long distance is worth an orbital asset.

## Key numbers
Loss through the atmosphere is far below the equivalent fiber path, since most of the atmosphere is in the first 10 km · Micius distributed entanglement over 1,200 km and supported intercontinental key exchange · a low-orbit pass gives a few minutes of link time per ground station · cloud cover blocks the link completely · ground segment requires tracking optical telescopes.

## Examples
China's Micius satellite and the Beijing-Vienna video call it secured; the European Union's EuroQCI and IRIS2 programs; the UK and Singapore SpeQtral missions; several commercial ventures proposing constellations for key delivery.

## Economic profile
Nearly all the cost is fixed and sits in two places: building and launching the satellite, and the optical ground stations, which are tracking telescopes rather than antennas. Against that, a low-orbit pass delivers a few minutes of link time per station and nothing at all under cloud, so the number that matters is cost per delivered key bit over a year, and nobody publishes it. That is most of why every program flying today is a national one: Micius, EuroQCI and IRIS2, the UK and Singapore SpeQtral missions. Adding satellites and ground stations improves the ratio, since both add passes and both route around weather, so the economics only work at constellation scale. The comparison a buyer should make is against post-quantum cryptography, which is a software update and covers the whole internet, so an orbital asset is worth it only where a guarantee resting on physics rather than on mathematics has institutional value of its own.

## Videos

- https://www.youtube.com/watch?v=4QlcKuxDGrs — Quantum satellite achieves 'spooky action' at record distance (Science Magazine, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=UiJiXNEm-Go — Quantum Cryptography Explained (Physics Girl, 8 minutes, 100k+ views)
- https://www.youtube.com/watch?v=m6SIOLL_Cio — PhD student explains Quantum Communications (Department for Science, Innovation and Technology, 2 minutes, 50k+ views)

## Further reading

[Quantum Flagship](https://qt.eu/) · [Free-space and Satellite-Based Quantum Communication: Principles, Implementations, and Challenges (arXiv)](https://arxiv.org/abs/2602.01426)
