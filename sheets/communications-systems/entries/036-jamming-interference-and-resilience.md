---
number: 36
name: Jamming, Interference and Resilience
part: 7
group: Networking & operations
reach: [short, global]
capacity: [kbps, gbps]
maturity: dep
---

## Description
Interference is anything that raises the noise floor at a receiver or occupies the channel it was going to use, and most of it is accidental. The routine sources are co-channel energy from a neighboring cell, adjacent-channel leakage from a transmitter that is less clean than its specification, passive intermodulation from a corroded connector or a rusted joint on a tower that mixes two strong transmit signals into a product landing in the receive band, and consumer signal boosters installed backwards. Deliberate jamming is the same physics with intent, and the link budget favors the jammer, whose energy travels one way into the victim receiver while the wanted signal has already spent its path loss getting there. What actually takes commercial networks down is a different list. Of 188 major telecom incidents reported to ENISA by European regulators for 2024, 60% were system failures, 19% human error and 13% natural phenomena, while 8%, or 15 incidents, were malicious. The single largest technical cause was cable cuts at 41 incidents, 23% of the total, followed by faulty software changes at 14% and software bugs at 13%.

## Strengths and weaknesses
The tool that works best is route diversity, and it is also the hardest to verify. Two circuits from two carriers routinely share a duct, a bridge crossing, or the single conduit entering the building, because carriers lease capacity from each other and nobody advertises it, so a conduit-level audit is the only real check and it usually finds at least one shared segment. Frequency and space diversity on a microwave hop are cheap and genuinely move availability from about 99.9% to 99.999% (8.8 hours of outage a year down to 5 minutes), but they address fading and do nothing about a backhoe or a substation. Power is the constraint that appears in every multi-day event: a typical cell site holds 4 to 8 hours of battery and only a minority of sites have a generator, so a regional power failure produces a coverage map that degrades hour by hour no matter how the radios were engineered. Anti-jam techniques do work, and adaptive nulling with an antenna array can put 20–40 dB of rejection on a small number of jammers, but they cost an array and a custom waveform and are the wrong purchase for a network whose incidents are 60% system failures. The other honest weakness is detection, since an operator cannot fix interference it cannot find, and direction-finding an intermittent source across a metro area takes days of a specialist's time.

## When to use
If your availability target is 99.99% or better, buy path diversity before anything else, and make the vendor show you the conduit route rather than a logical diagram. If the link is a microwave hop, add space or frequency diversity, which is the cheapest availability on this sheet. If the site has to survive a multi-day power failure, size the battery for the local restoration time and add a generator at the sites carrying the most traffic, because that is where the outage hours accumulate. If a fixed link is being jammed deliberately, changing medium usually beats hardening the waveform: fiber cannot be jammed, and a narrow-beam link at 70/80 GHz is hard to sit in front of. Reserve anti-jam waveforms and nulling arrays for links that have to work while somebody is actively trying to stop them, which on a commercial network is almost never, and see the counter-UAS and electronic warfare sheet for that discipline. If GNSS is the timing source, the resilience question is holdover, which this sheet's timing entry covers.

## Key numbers
188 major telecom incidents reported to ENISA for 2024: 60% system failures, 19% human error, 13% natural phenomena, 8% malicious · cable cuts the largest single technical cause at 41 incidents, 23% of the total · faulty software changes cost 515 million user-hours in 2024 against 331 million for cable cuts · 99.9% availability is 8.8 hours of outage a year, 99.999% is 5 minutes · a typical cell site holds 4–8 hours of battery · adaptive nulling gives roughly 20–40 dB of rejection against a small number of jammers.

## Examples
ENISA's annual telecom incident reporting and the FCC's Network Outage Reporting System, the two public datasets on why networks actually fail; the US 811 call-before-you-dig system; the Balticconnector damage in October 2023 and the C-Lion1 cut in November 2024, both attributed to dragged anchors; the Rogers outage in July 2022, which removed service from about 12 million Canadian subscribers after a configuration change; FCC enforcement against sellers of consumer jammers, which are illegal to market, sell or operate in the United States.

## Economic profile
Resilience is paid for continuously and used rarely, which is why it is chronically underbought. A second diverse path roughly doubles the circuit cost and delivers nothing on the days the first one works, and the contract does not make up the difference: a typical carrier service-level agreement pays credits as a percentage of one month's fee, so a full day of outage returns a few percent of a monthly bill against a loss that is often much larger. That asymmetry is why buyers who genuinely need availability buy a second path rather than negotiate a stronger agreement. On the operator's side the spending is physical, meaning batteries and generators that run into the tens of thousands of dollars per site installed and then need fuel and testing, plus route engineering that costs planning time rather than equipment. The cheapest intervention is administrative: locate services such as 811 are free to the excavator and funded by the facility owners, because a cut costs far more than a mark-out. ENISA's 2024 data puts 331 million user-hours on cable cuts and 515 million on faulty software changes, which makes change control the second cheapest thing to buy. Anti-jam hardware sits at the far end of that scale, and for a commercial operator the money goes further against the two causes behind four out of five incidents.

## Videos

- https://www.youtube.com/watch?v=dsvNPjK0ihM — Network Redundancy - CompTIA Network+ N10-009 - 3.3 (Professor Messer, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=_WRSlY6irwc — What is RF or Wi-Fi Interference? With Bob Young, Founder of FIFO Networks (Nuts About Nets, 3 minutes, 10k+ views)

## Further reading

[Telecom Security Incidents 2024 (European Union Agency for Cybersecurity)](https://www.enisa.europa.eu/publications/telecom-security-incidents-2024) · [Jammer Enforcement (Federal Communications Commission)](https://www.fcc.gov/general/jammer-enforcement)
