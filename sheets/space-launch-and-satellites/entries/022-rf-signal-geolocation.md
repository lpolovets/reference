---
number: 22
name: RF signal geolocation
part: 5
group: RF and infrared
orbits: [leo, sso]
mass: [micro]
buyer: [com, def]
maturity: service
cost: low
---

## Description
RF signal geolocation finds transmitters from orbit and works out where they are: ships running with their AIS transponders switched off, GPS jammers, air-defense radars, VSAT terminals, marine radars, push-to-talk radios. The mechanism is timing rather than imaging. Three or more satellites fly in a loose formation, typically spaced about 125 km apart along track, and each records the same emission; the difference in arrival time between a pair of satellites defines one curve on the ground and the difference in Doppler shift defines another, and where the curves from several pairs cross is the emitter. What comes out is a coordinate with a confidence ellipse, a timestamp, and a parametric description of the signal — center frequency, bandwidth, modulation, pulse pattern — rather than a picture. Geometry and signal strength set the accuracy: a longer baseline and a longer, stronger burst both tighten the fix, and commercial systems deliver errors on the order of a kilometre, not metres. Because the payload only listens, the technique works at night, through cloud, and against targets that are deliberately trying not to be seen.

## Strengths and weaknesses
The economics are the strength. A satellite that only has to receive needs no large telescope and no kilowatt transmitter, so the spacecraft are tiny — HawkEye 360's Pathfinder satellites were 13.4 kg each and later clusters run a few tens of kilograms — and a full cluster of three costs roughly what a single sub-metre imaging satellite costs to build many times over. That buys answers imagery cannot give at any price, because a hidden emitter is far easier to detect than to resolve. The failure mode is the negative result. Detection requires the target to transmit during the eight or so minutes a cluster is overhead, so emission control defeats the sensor completely, and an operator who sees nothing cannot tell whether the emitter was silent or whether nobody was watching. A kilometre-wide ellipse in a busy shipping lane can contain a dozen vessels, which is why the data is almost always fused with AIS and with imagery rather than used alone. Dense, overlapping signal environments also make it hard to decide which recorded burst on one satellite matches which on another, and mismatched pairs produce confident, wrong fixes.

## When to use
Buy RF geolocation when the question is "where is the emitter" and you do not need to see the object. It is the right tipping-and-cueing layer above imaging: a cluster pass covers a very wide swath cheaply, and you spend the expensive sub-metre image only on the coordinate it hands you. If the question is what the object is or what it is doing, buy optical or SAR imaging instead, because a one-kilometre fix will not identify a hull. Do not buy it for persistent watch over a small area, since a fleet of ten clusters gives a handful of looks a day at a given point rather than continuous coverage, and do not buy it expecting message content, because commercial operators detect and locate emissions but do not sell demodulated communications. If your target reliably runs silent, this whole category is the wrong purchase and you are back to imaging.

## Key numbers
Clusters of three satellites spaced about 125 km apart along track · 13.4 kg per Pathfinder satellite, a few tens of kilograms on later clusters · more than 30 satellites on orbit as of 2026 · tuning from 70 MHz to 6 GHz, extended to about 18 GHz with a downconverter · geolocation accuracy on the order of a kilometre · $98.7M of HawkEye 360 revenue in 2025, 61% of it from US customers.

## Regulatory and spectrum
This category slipped through the licensing regime that governs imaging. NOAA assessed HawkEye 360's Pathfinder cluster and concluded that a commercial remote sensing operator's license was not required, on the reading that the statute covers sensing the Earth for imagery rather than collecting radio emissions, so RF geolocation operators do not carry the resolution and shutter conditions that constrain optical and SAR licensees. What does bind is ordinary FCC authorization: the payload receives, which needs no transmit license, but the satellite's own telemetry and data downlink is a Part 25 space station license like any other, and the operator must show it will not interfere with the services it is listening to. Export control is the real constraint on the business. Spacecraft with signals-intelligence payloads sit on the US Munitions List under Category XV, so both the hardware and much of the technical data are ITAR-controlled, which is why the customer list is US and allied governments and why cross-border sales move at the speed of State Department approvals. Operators also generally avoid demodulating content: intercepting communications is a criminal matter under US wiretap law, and staying at the detect-and-locate layer keeps the product clear of it.

## Examples
HawkEye 360 is the reference system, flying clusters of three from Cluster 1 through Cluster 13, which launched in January 2026, with SFL Missions under contract for Clusters 14 to 16; it publishes maps of GPS interference around conflict zones and sells maritime dark-vessel detection, and it won a $75M multi-year European defense ministry contract for air-defense and GPS monitoring. Unseenlabs in France sells maritime RF detection to European navies and fisheries authorities, and Spire adds RF collection alongside its AIS and weather payloads. The counterexample matters as much: Kleos Space listed on the ASX, launched four clusters, wrote off satellites that failed on orbit, ran out of cash in July 2023, and was delisted that August.

## Economic profile
The capital intensity is low for space and the operating leverage is high, which is unusual in this sheet. Satellites cost single-digit millions each, a cluster is a few tens of millions including launch, and the same collected pass can be sold to several customers, so revenue scales with analytics and subscriptions rather than with the fleet. HawkEye 360 reported $98.7M of revenue in 2025, roughly double 2024, and $2.7M of net income against a $29M loss the year before, which makes it one of the few commercial remote-sensing businesses to reach profitability at all. The risk sits in customer concentration: US customers, mostly the US government, were 61% of that revenue and Japan another 16%, so this is a defense budget business with a commercial cost structure. Demand has been pulled up by GPS jamming becoming routine over Ukraine, the Baltic, and the eastern Mediterranean, which turned interference mapping into a recurring subscription. If you are evaluating a competitor, the questions are how many independent clusters it can afford to keep in orbit, whether it owns a signal archive deep enough to recognize a specific emitter it has seen before, and what happens to pricing when governments decide to fly the capability themselves.

## Videos

- https://www.youtube.com/watch?v=aWJL1wH1lMs — HawkEye 101: Intro to Radio Frequency | Episode 1 (HawkEye 360, 5 minutes, 5k+ views)
- https://www.youtube.com/watch?v=M-zn9JeXPes — HawkEye 101: Exploiting RF Signals | Episode 2 (HawkEye 360, 6 minutes, 5k+ views)
- https://www.youtube.com/watch?v=MXd5j9elxNM — Introduction to TDOA geolocation with RFeye Site (CRFS - Extraordinary RF Technology, 3 minutes, 5k+ views)

## Further reading

[Making the Invisible Visible: Precision RF-Emitter Geolocation from Space by the HawkEye 360 Pathfinder Mission (Small Satellite Conference)](https://digitalcommons.usu.edu/smallsat/2018/all2018/263/) · [Geolocation of RF Emitters with a Formation-Flying Cluster of Three Microsatellites (Small Satellite Conference)](https://digitalcommons.usu.edu/smallsat/2016/TS6NextOnPad/5/)
