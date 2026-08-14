---
number: 4
name: Antennas and Phased Arrays
part: 1
group: Spectrum & physical layer
reach: [metro, global]
capacity: [mbps, gbps]
medium: rf
maturity: scale
---

## Description
An antenna's gain is set by how large it is compared to the wavelength: gain equals 4π times effective aperture divided by wavelength squared. A 1 m dish at 12 GHz has 0.785 m² of physical area, about 0.47 m² of it effective at 60% efficiency, and a wavelength of 25 mm, which works out to roughly 40 dBi with a beam about 1.75° wide (beamwidth in degrees is roughly 70 times wavelength over diameter). The same dish at 30 GHz gives 8 dB more gain and a beam under a degree, because gain rises with the square of frequency for a fixed aperture. A phased array gets the same aperture a different way, replacing the reflector with many small elements spaced about half a wavelength apart, each fed through its own phase shifter and amplifier, so the beam points wherever the element phases add in step. Array gain over a single element is 10 log10 of the element count, so 1,024 elements give 30 dB. Half-wave spacing means one element per quarter of a wavelength squared, which is about 6,400 elements per square meter at 12 GHz and about 35,000 at 28 GHz.

## Strengths and weaknesses
Electronic steering is the whole reason arrays displaced mechanical mounts. A beam repoints in microseconds instead of seconds, there is nothing to wear out, one aperture can form several beams at once, and losing a few percent of the elements costs a fraction of a decibel rather than the whole antenna. That combination is what makes tracking a low-orbit satellite crossing the sky in minutes practical, and what lets a radar interleave search and track. The weaknesses are scan loss, grating lobes, and cost. Gain falls with the projected aperture as the beam steers off boresight, so about 3 dB is lost at 60° and the beam widens by roughly a factor of two, which means the array has to be sized for its worst scan angle rather than its best. If the elements are spaced further apart than about half a wavelength the array radiates a second unwanted beam, so element count cannot be traded away. And because both cost and DC power scale with element count, a large array at high frequency is expensive to build and hot to run, with the electronics drawing power continuously whether traffic is flowing or not.

## When to use
If the thing you are pointing at does not move and you need only one beam, use a reflector. A 1 m dish is stamped metal and a feed, and no array will beat it on dollars per decibel. Choose an electronically steered array when the target moves, when you need several beams from one aperture, when repointing has to happen faster than a motor can manage, or when a mechanism is unacceptable on a vehicle or an aircraft. Below about 6 GHz the elements are large and cheap and arrays are routine on base stations; above about 20 GHz element count per unit area is four times higher for each doubling of frequency, so packaging and beamformer silicon dominate the bill and the aperture you can afford shrinks. If you need a very large aperture and can accept slow steering, a reflector on a mount, or a reflector with a small phased array as its feed, gets most of the benefit for far less money. For the terminal as a product, with its power, thermal and subsidy economics, see Flat-panel user terminal on the space-launch-and-satellites sheet; the question here is the antenna itself.

## Key numbers
Gain = 4π × effective aperture ÷ wavelength², and beamwidth in degrees is roughly 70 × wavelength ÷ diameter · a 1 m dish at 12 GHz gives roughly 40 dBi and a 1.75° beam, and 8 dB more gain at 30 GHz (both derived here) · array gain = 10 log10(element count), so 30 dB at 1,024 elements · half-wave spacing gives about 6,400 elements per m² at 12 GHz and about 35,000 at 28 GHz · scan loss roughly 3 dB at 60° off boresight, with the beam about twice as wide · commercial silicon beamformer ICs serve 4 to 16 elements each · Starlink terminal build cost fell from about $3,000 to under $1,500 in roughly six months.

## Examples
The Starlink and Amazon Leo consumer terminals, which are Ku-band arrays of thousands of elements; commercial Ku- and Ka-band beamformer chipsets from Anokiwave and Analog Devices, which put 4 to 16 transmit and receive channels on one silicon die; military active electronically scanned array radars such as the AN/APG-81; ThinKom's mechanically scanned variable-inclination arrays, which remain the aviation workhorse because they avoid scan loss; research arrays such as the 256-element Ku- and Ka-band SATCOM panels from UCSD.

## Economic profile
An array's cost is per element, and element count scales with aperture area times the square of frequency, while a reflector's cost scales with area alone. That is what splits the market: reflectors dominate wherever a big aperture is needed and steering is slow, arrays dominate wherever steering matters, and the crossover moves toward reflectors as frequency rises. The historical cost driver was the transmit and receive module, which in military radars was a discrete gallium arsenide assembly priced in the hundreds to thousands of dollars per element, which is why arrays of that era appeared only where nothing else would do. Silicon beamformers changed the slope by integrating 4 to 16 channels per die in a commercial CMOS or SiGe process, so cost per channel now follows semiconductor volume rather than microwave module assembly. SpaceX cutting terminal build cost from about $3,000 to under $1,500 within roughly six months of starting deliveries is the clearest public demonstration of that curve. The margin sits with the beamformer chip vendors and with whoever can yield a multilayer board carrying thousands of controlled-impedance feeds, not with the antenna designer, so the practical read on where array prices go next is the chip roadmap rather than the antenna literature.

## Videos

- https://www.youtube.com/watch?v=jSDLfcNhThw — Phased Arrays - Steering and the Antenna Pattern | An Animated Intro to Phased Arrays (Marshall Bruner, 20 minutes, 100k+ views)
- https://www.youtube.com/watch?v=mHo2-f5V8V4 — What are Antenna Gain, EIRP, and Friis Equation? (Iain Explains Signals, Systems, and Digital Comms, 14 minutes, 10k+ views)

## Further reading

[Web-based Course - Adaptive Antennas and Phased Arrays (MIT Lincoln Laboratory)](https://www.ll.mit.edu/outreach/web-based-course-adaptive-antennas-and-phased-arrays) · [Development of Flat Panel Active Phased Array Antennas Using 5G Silicon RFICs at Ku- and Ka-Bands (IEEE Access)](https://ieeexplore.ieee.org/ielx7/6287639/8948470/09234401.pdf)
