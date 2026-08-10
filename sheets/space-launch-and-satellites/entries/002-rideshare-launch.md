---
number: 2
name: Rideshare launch
part: 1
group: Small-payload access
orbits: [leo, sso]
mass: [nano, small]
buyer: [com, civ, sci, def]
maturity: routine
cost: low
---

## Description
A rideshare launch sells you a seat on a rocket whose mission somebody else defined. SpaceX's Transporter missions fly a Falcon 9 to a sun-synchronous orbit around four times a year carrying a hundred or more payloads on a stack of ESPA-class adapters and CubeSat deployers, and the Bandwagon missions do the same thing to a mid-inclination orbit. Pricing is published rather than negotiated: roughly $350,000 buys the first 50 kg, and mass above that runs about $6,000–7,000/kg as of 2026. Every payload rides to the same drop-off, deploys inside the same short sequence, and slips whenever the mission slips. That standardization is what took launch off the critical path for small satellites, and it is the reason a smallsat industry exists at the scale it does.

## Strengths and weaknesses
The strength is price and availability. At $6,000–7,000/kg a rideshare seat is roughly a quarter the cost of a dedicated small launcher, the price list is public, and there is another mission within a few months if you miss one. The weakness is that you control nothing except your own hardware. You take the mission's orbit, its inclination, its local time of the ascending node, and its schedule, and a delay caused by the primary payload is your delay too. The failure mode worth planning for is not the rocket. It is arriving in an orbit that is close to what you wanted but not close enough, with no propulsion to fix it, which turns a working satellite into a partly useful one for its whole life. The second failure mode is identification: when 143 objects separate within an hour, as they did on Transporter-1, operators can spend days to weeks working out which catalog object is theirs, and you cannot command a satellite you cannot find.

## When to use
Take a rideshare seat as the default for anything under a few hundred kilograms going to LEO or SSO. It is the right answer whenever the mission tolerates a standard drop-off orbit and a launch date that can move by months, which covers most technology demonstrations, most CubeSat science, and most constellation build-out where the satellites have their own propulsion and can spread themselves out afterward. Do not buy a seat if you need a specific plane or a specific LTAN that no Transporter flies to, if the payload cannot legally or physically share a vehicle, or if being late costs more than the launch does; buy a dedicated small launch instead. If you need the orbit but not the date, the usual winner is a rideshare seat plus an orbital transfer vehicle, which adds roughly $0.5–3M and still lands well under a dedicated ticket.

## Key numbers
Roughly $350,000 for the first 50 kg on a Transporter mission · about $6,000–7,000/kg above that as of 2026 · 100+ payloads on a single mission, and 143 on Transporter-1 · about four Transporter missions a year to SSO, plus Bandwagon flights to mid-inclination · roughly $25,000–30,000/kg on a dedicated small launcher for comparison · $0.5–3M for a last-mile tug on top of the seat.

## Regulatory and spectrum
The launch provider holds the FAA Part 450 license and the range agreement; none of that covers your payload. You need your own transmit authorization before integration, and the provider will ask for it in writing. For a US commercial operator that means an FCC license, either a full Part 25 filing or the streamlined small-satellite process for spacecraft under 180 kg on missions under six years that deorbit within five, which is faster and much cheaper but comes with those eligibility limits baked in. Anything that images the Earth also needs a NOAA remote-sensing license, and anything carrying controlled technology needs export authorization, which is the item that most often makes a foreign payload on a US vehicle late. Budget six to twelve months for spectrum authorization and treat it as running in parallel with the build rather than after it, because on a rideshare the rocket is rarely the long pole.

## Examples
SpaceX Transporter (Transporter-1 in January 2021 carried 143 spacecraft, a record at the time) and Bandwagon for mid-inclination orbits. Integrators sit between the customer and the rocket and sell most of the seats: Exolaunch, Maverick Space Systems, Spaceflight Inc., D-Orbit, and Impulse Space's Mira for payloads that want to move after deployment. Non-SpaceX options include Arianespace's Vega C rideshare service using the SSMS dispenser and ISRO's PSLV, and Rocket Lab sells excess Electron capacity when a dedicated mission has margin.

## Economic profile
Rideshare works because the marginal cost of an additional 200 kg on a Falcon 9 already flying to SSO is close to zero, so the operator can price near the floor and still make money on a mission it wanted to fly anyway. That prices the whole small-launch sector off a number it cannot match, and it is why so much of the value in this part of the market moved to the integrators and tug operators who resell and reposition the seats. If you are building a business on rideshare, the risk to underwrite is dependence: a single provider sets the price, the cadence, and the destination orbits, and it also runs the largest satellite constellation in the world. Watch what happens if Neutron and New Glenn reach real cadence, since a second high-volume rideshare provider is the only thing that would change the pricing dynamic.

## Videos

- https://www.youtube.com/watch?v=DB1Aii8NoC0 — SpaceX's Record Breaking* Rideshare Mission Launches 143 Satellites (Scott Manley, 12 minutes, 100k+ views)
- https://www.youtube.com/watch?v=fOeAinwQ9xg — Watch SpaceX deploy Transporter-5 rideshare satellites in space (VideoFromSpace, 8 minutes, 10k+ views)

## Further reading

[Rideshare on NASA Missions: Realities and Triumphs (NASA)](https://ntrs.nasa.gov/citations/20250001132) · [Streamlining Licensing Procedures for Small Satellites: Report and Order (Federal Communications Commission)](https://docs.fcc.gov/public/attachments/FCC-19-81A1.pdf)
