---
number: 27
name: Laser & Photonic Control Stack
part: 7
group: Enabling stack
temperature: room
uses: [comp, sense, time]
horizon: near
maturity: proto
bottleneck: laser
---

## Description
Every atomic platform, ions, neutral atoms, clocks, and magnetometers, runs on lasers. A trapped-ion machine needs sources for cooling, repumping, state preparation, gates, and readout, each at a specific wavelength, each frequency-stabilized to a reference, each routed through acousto-optic modulators to individual atoms. A research system fills several optical tables. Making these platforms into products means turning that table into a rack, which is the work of integrating lasers, modulators, and switches into photonic chips and delivering light through fiber and waveguides.

## Strengths and weaknesses
This is where the reliability of every atomic platform actually lives, and the trend is favorable: integrated photonics can put beam routing, switching, and delivery on a chip, and trap chips with built-in waveguides have delivered light to ions without any free-space alignment. That removes the drift and the daily realignment that make laboratory systems fragile. The difficulty is that the requirements are severe. Linewidths of hertz, absolute frequency stability, and precise power control at each site are all needed at once, and integrated components have loss and thermal sensitivity that discrete optics do not.

## When to use
Judge any atomic-platform company partly on this stack, because it predicts uptime better than qubit count does. A machine that needs a laser expert on site every morning is not a product. The questions worth asking are how many discrete lasers the system uses, how they are stabilized, whether beam delivery is free space or integrated, and what the demonstrated continuous operating time is. Photonic integration is the direction of travel and is the reason atomic platforms may become rack-mountable this decade.

## Key numbers
A trapped-ion system typically needs five or more distinct wavelengths, each stabilized · linewidths of kilohertz to hertz depending on the transition · research systems occupy several optical tables; product versions target racks · integrated trap chips have delivered gate light to ions with no free-space alignment · continuous operating time without realignment is the honest measure of maturity.

## Examples
Sandia and university trap chips with integrated waveguide delivery; Vescent, Toptica, and M Squared supplying stabilized laser systems to the field; QuEra and Pasqal's laser subsystems for tweezer arrays; the compact laser packages developed for chip-scale atomic clocks, which showed the path.

## Economic profile
For an atomic platform the laser subsystem is usually the largest line in the bill of materials and nearly all of the field service cost. Five or more stabilized wavelengths per trapped-ion system, each bought from a specialist such as Toptica, Vescent or M Squared, means the cost floor of the machine is set by somebody else's price list, and if a system needs a laser expert on site every morning, the customer pays that technician for as long as the system runs. Photonic integration is an attempt to turn that recurring labor into a manufactured part, which is the move compact laser packages already made for chip-scale atomic clocks. Integration improves gross margin and uptime together, and uptime is what lets a supplier sell to customers who do not employ physicists. If you are evaluating an ion or neutral-atom company, ask how many discrete lasers a system uses, whether beam delivery is free space or integrated, and what the demonstrated continuous operating time is, because those three answers predict service cost better than any qubit number.

## Further reading

[Multi-zone trapped-ion qubit control in an integrated photonics QCCD device (arXiv)](https://arxiv.org/abs/2401.18056) · [Multi-site Integrated Optical Addressing of Trapped Ions (arXiv)](https://arxiv.org/abs/2308.14918)
