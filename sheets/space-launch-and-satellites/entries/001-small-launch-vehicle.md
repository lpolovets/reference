---
number: 1
name: Small launch vehicle
part: 1
group: Small-payload access
orbits: [leo, sso]
mass: [small, med]
buyer: [com, sci, def]
maturity: service
cost: med
---

## Description
A small launch vehicle is a dedicated rocket sized to put a few hundred kilograms into low Earth orbit for one customer. Rocket Lab's Electron carries about 300 kg to LEO and roughly 200 kg to a 500 km sun-synchronous orbit; Firefly Alpha is quoted at about 1,030 kg to LEO and 630 kg to SSO; Vega C sits above both at around 2,300 kg to a polar orbit. What the customer is buying is not lift, since a rideshare seat can carry the same satellite. It is control: the orbit, the inclination, the local time of the ascending node, and the launch date are all yours, and nothing else on the vehicle can delay you. That control costs roughly four times as much per kilogram as sharing a ride, which is the whole economics of the category.

## Strengths and weaknesses
The strength is schedule and orbit control, and for a handful of customers that is worth a large premium. A dedicated vehicle also flies payloads that a rideshare provider will not take, whether for classification reasons, hazardous propellants, or an orbit nobody else is going to. The weakness is price per kilogram, at roughly $25,000–30,000/kg against $6,000–7,000/kg on a Transporter seat. The failure mode is not technical, it is commercial: the addressable market for customers who will pay 4× is far smaller than the number of vehicles built to serve it. Dozens of small-launch companies were funded between 2015 and 2022, and two or three now fly regularly. Several reached orbit, could not fill a manifest at a price that covered fixed costs, and shut down or pivoted to larger vehicles.

## When to use
Buy a dedicated small launch when the mission needs a specific orbit plane or a specific LTAN that no rideshare is flying to, when the payload cannot share a vehicle for security or safety reasons, or when a schedule slip costs more than the ticket. Responsive call-up is the clearest case: the Space Force's Victus Nox mission launched 27 hours after the order to go, and no shared mission can do that. If your satellite can accept a standard SSO drop-off and a date that may move by months, take a rideshare seat instead and put the savings into the spacecraft. If you need a specific orbit but not a specific date, the usual winner is a rideshare seat plus an orbital transfer vehicle, which reaches most LEO destinations for a fraction of dedicated launch and is now the default answer for payloads under a few hundred kilograms.

## Key numbers
Electron carries about 300 kg to LEO and roughly 200 kg to a 500 km SSO · Firefly Alpha about 1,030 kg to LEO and 630 kg to SSO · list price $7.5–8.5M per Electron launch · roughly $25,000–30,000/kg against $6,000–7,000/kg on rideshare · Victus Nox launched 27 hours after the call-up order · dozens of small-launch companies funded since 2015, two or three flying regularly.

## Regulatory and spectrum
US launches need an FAA Part 450 vehicle operator license, which covers the vehicle, the trajectory, and the public-safety analysis, plus range access at a federal site (Cape Canaveral, Vandenberg, Wallops) or a licensed commercial spaceport. Vehicle telemetry and flight termination run on range-coordinated S-band and are licensed separately from anything the payload transmits, so a launch license buys you nothing toward an FCC or NOAA payload authorization. The vehicle itself is ITAR-controlled, which is why Rocket Lab operates its New Zealand pad under a bilateral Technology Safeguards Agreement layered on top of New Zealand's own Outer Space and High-altitude Activities Act. If you are flying a foreign payload on a US vehicle, or a US payload from foreign soil, budget months for the export licensing rather than weeks.

## Examples
Rocket Lab Electron (the only Western small launcher with a real flight rate, and the vehicle that flew Victus Nox for the Space Force), Firefly Alpha, Avio's Vega C from Kourou, ISRO's SSLV, and China's Kuaizhou and Ceres-1. The consolidated side of the ledger is just as instructive: Virgin Orbit reached orbit and then went bankrupt in 2023, Astra retired Rocket 3.3 after repeated failures and went private, and Rocket Lab itself is moving up-market to the medium-lift Neutron.

## Economic profile
The fixed costs of a launch company (pad, range, integration, a standing engineering team) barely change with vehicle size, so a small launcher spreads the same overhead across a much smaller ticket. That is why the category needs high flight rate to work at all and why almost nobody achieved it. Rocket Lab is the exception, and its own strategy tells you how the economics run: it is building Neutron, a much larger vehicle, because the margin on a $7.5M launch is thin even at a good cadence. If you are underwriting a small-launch business, the question is not whether the rocket works. It is how many customers per year genuinely need a dedicated orbit, what they will pay, and whether a rideshare-plus-tug combination is going to take that customer away at a third of the price.

## Videos

- https://www.youtube.com/watch?v=U5k1mlu6A7I — Why The Electron Rocket May Be Cheapest Way To Get To Space (Scott Manley, 6 minutes, 500k+ views)
- https://www.youtube.com/watch?v=rNKNsbnvpm8 — Dedicated Launch with Electron (Rocket Lab, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=8qhz9CY8hRs — Rocket Lab | Constellation Deployment with Electron (Rocket Lab, 3 minutes, 10k+ views)

## Further reading

[A Small Launch per Month? - 2022 Edition of the Annual Industry Survey (Small Satellite Conference)](https://digitalcommons.usu.edu/smallsat/2022/all2022/122/) · [Commercial Space Launch and Reentry Regulations: Overview and Select Issues (Congressional Research Service)](https://www.everycrsreport.com/reports/R48582.html)
