---
number: 26
name: Flat-panel user terminal
part: 6
group: Ground stations and terminals
orbits: [leo, geo, gnd]
buyer: [com, civ, def]
maturity: routine
cost: vlow
---

## Description
A flat-panel user terminal is the antenna that lets an ordinary customer use a satellite that is moving. A geostationary dish can be bolted to a wall and aimed once, because the satellite never moves in the sky. A low-orbit satellite crosses from horizon to horizon in a few minutes at several degrees per second, and the terminal has to follow it, then hand over to the next one without dropping the session. Doing that mechanically is possible but slow, noisy, and unreliable in the field, so the answer is an electronically steered phased array: hundreds or thousands of small radiating elements spaced about half a wavelength apart, roughly a centimetre at Ku band, each fed through a phase shifter so the beam can be pointed by changing the timing of the signals rather than by moving anything. That makes the terminal a semiconductor product. Most of its cost sits in beamformer chips, the RF front end, and a multilayer board with thousands of controlled-impedance feeds, so its price follows silicon economics rather than aerospace ones, and it falls with volume in a way that a satellite bus does not.

## Strengths and weaknesses
The strength is that once the array exists, everything downstream gets easier: no moving parts to fail, instant beam switching for handover, the ability to track two satellites at once during a make-before-break handover, and a package a customer can install on a roof in an hour. The weaknesses are cost, power, and heat. A Ku-band array needs an element roughly every centimetre, so aperture and element count scale together and there is no cheap way to build a big array; the electronics draw roughly 50 to 100 W continuously, which matters on a boat, an aircraft, or an off-grid site; and that power comes out as heat in a sealed flat panel sitting in the sun. The commercial failure mode is subsidy. If the terminal costs more to build than the customer pays, every new subscriber consumes cash up front, so growth is funded from the balance sheet until manufacturing volume closes the gap. That is exactly the trap that stalled earlier consumer satellite ventures, and it is why terminal cost, not satellite cost, is the gate on reaching consumers.

## When to use
If your users are fixed, in one country, and happy with a dish on a pole, a conventional parabolic antenna is still cheaper by a wide margin and you should use it. Choose a flat-panel electronically steered terminal when the satellite moves, when the user moves, or when the installation cannot tolerate a mechanism: consumer low-orbit broadband, ships, aircraft, vehicles, and anything that has to switch between satellites or between constellations. If you are building a constellation, treat the terminal as a program on the critical path with a cost target attached, not as an accessory. A useful rule of thumb: your terminal bill of materials at your projected annual volume, minus what the market will pay for hardware, is the cash you will spend per subscriber before service revenue starts, and if that number is in the thousands you do not have a consumer business no matter how good the satellites are.

## Key numbers
Starlink standard kits selling for roughly $349–599, against a production cost SpaceX put above $1,500 in the early years and $3,000 at the 2020 beta · high-performance business and maritime terminals at about $2,500 · aviation terminals around $150,000 for the hardware · elements spaced about half a wavelength apart, roughly 1 cm at Ku band, giving thousands of elements in a consumer panel · roughly 50–100 W of continuous power draw · satellites crossing at several degrees per second with a handover every few minutes.

## Regulatory and spectrum
User terminals are earth stations, and licensing millions of them individually would be impossible, so regulators grant blanket authorizations: one FCC license covers an unlimited number of identical terminals operating with a specified satellite system, which is why terminals are locked to a network and cannot simply be pointed at someone else's satellite. Terminals that move are a separate regime. Earth stations in motion on aircraft, ships, and vehicles carry their own rules on pointing accuracy and off-axis emissions, because a mispointed moving array interferes with adjacent satellites along the geostationary arc. Every country requires its own type approval and its own landing rights for the service, so terminals are geofenced in firmware and a unit that works in one country goes dark across a border, which is the main reason coverage maps have political holes. Aviation adds a certification cost that dwarfs the radio approval, since mounting anything on a pressurized fuselage needs a supplemental type certificate from the aviation authority, and that process usually takes longer than building the terminal.

## Examples
Starlink's standard kit, the smaller Starlink Mini, and the high-performance dish sold for business, maritime, and aviation use are the volume reference. Amazon Leo has published a family of three terminals, from a small low-rate unit to an enterprise model, with a stated goal of building the standard one for a few hundred dollars. On the specialist side, ThinKom's mechanically scanned variable-inclination arrays dominate commercial aviation connectivity, Kymeta sells metamaterial-based electronically steered antennas for vehicles, and All.Space and ALCAN Systems build multi-beam and low-cost steerable panels. Military terminals from Viasat, L3Harris, and others cover the protected and multi-orbit end, where a single terminal has to work across several constellations and bands.

## Economic profile
This is a consumer electronics business attached to a space business, and the two have opposite cost curves. Satellites get modestly cheaper with volume; phased arrays get dramatically cheaper, because the cost sits in silicon, board fabrication, and assembly yield, all of which improve with scale and process generation. SpaceX reported cutting terminal production cost by more than half within about six months of starting deliveries, from $3,000 to under $1,500, and the retail price has since sat in the $349–599 range with periodic promotions below that. The strategic consequence is that whoever ships the most terminals gets the cheapest terminals, which compounds. For a challenger the practical options are to buy terminals from a merchant supplier and accept a higher bill of materials, to target markets where the customer tolerates a $2,500 or $150,000 terminal because the alternative is nothing, or to sell wholesale into networks that already own the customer relationship. Watch the beamformer chip suppliers rather than the satellite manufacturers if you want an early read on where this cost curve goes next.

## Videos

- https://www.youtube.com/watch?v=jSDLfcNhThw — Phased Arrays - Steering and the Antenna Pattern | An Animated Intro to Phased Arrays (Marshall Bruner, 20 minutes, 100k+ views)
- https://www.youtube.com/watch?v=cCRoGL55O6k — How Starlink Tracks 40 Satellites at Once (With No Moving Parts) (The Backstory Lab, 12 minutes, 1k+ views)

## Further reading

[Earth Stations in Motion: Report and Order (Federal Communications Commission)](https://docs.fcc.gov/public/attachments/FCC-18-138A1.pdf) · [Adaptive Antennas and Phased Arrays (MIT Lincoln Laboratory)](https://www.ll.mit.edu/outreach/web-based-course-adaptive-antennas-and-phased-arrays)
