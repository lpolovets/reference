---
number: 18
name: Direct-to-device
part: 4
group: Mobile and protected
orbits: [leo]
mass: [med]
buyer: [com]
maturity: emerging
cost: med
---

## Description
Direct-to-device means a satellite talking to a phone nobody modified: no dish, no external antenna, no special handset. The difficulty is entirely in the link budget. A handset transmits well under a watt into an antenna with essentially no gain that cannot be pointed, and it is designed to reach a tower a few kilometers away rather than a satellite 500 km up, so the satellite has to supply the whole margin with aperture and receive sensitivity. There are two ways to buy that margin, and the industry has split along them. One is an enormous antenna on a few large satellites: AST SpaceMobile's BlueBird Block 2 is roughly 6,100 kg and unfolds a phased array of about 2,400 sq ft (223 m²), the largest commercial antenna structure in low Earth orbit. The other is a modest array on very many satellites, which is Starlink Direct to Cell, at roughly 650 dedicated spacecraft as of 31 March 2026. Both work by transmitting in spectrum licensed to a terrestrial mobile operator, so the satellite behaves like another cell in the carrier's network and the phone never knows the difference. The standard that lets it behave that way, the lease that grants it the spectrum, and what a carrier pays for the service are covered on the communications systems sheet. This entry is about the spacecraft that has to close the link.

## Strengths and weaknesses
The strength is that the addressable market is every phone already in someone's pocket, with no hardware to sell, install, or subsidize. That is a fundamentally different distribution problem from every other satellite service. The weakness is capacity. One beam covers a cell hundreds of kilometers across and shares a few megabits per second across everyone inside it, which makes this a coverage product rather than a capacity product, and it is why first services are messaging, emergency calling, and low-rate data rather than broadband. The failure mode is commercial rather than technical: the spectrum belongs to the carrier, so an operator that has not bought its own spectrum is a supplier to the company that owns the customer relationship, and its economics are whatever the carrier agrees to pay. SpaceX's response was to buy spectrum outright, which tells you how the incumbent reads the risk.

## When to use
If you are a mobile operator, buy direct-to-device as a coverage feature. It closes dead zones, it is a genuine safety product, and it costs far less than building towers into terrain that has none. Do not sell it as a broadband substitute, because a shared beam over a whole region cannot support the traffic your terrestrial network carries, and customers who expect otherwise will churn. If you are an investor, the question that decides the outcome is who holds the spectrum and on what terms, since that determines whether the satellite operator captures the revenue or collects a wholesale fee. And if you need real throughput to a mobile user rather than a fallback, buy a terminal: a flat-panel LEO terminal delivers hundreds of megabits, and the whole reason direct-to-device is hard is that it refuses to use one.

## Key numbers
A handset transmits well under 1 W into a near-omnidirectional antenna · AST's BlueBird Block 2 at about 6,100 kg with a roughly 2,400 sq ft (223 m²) array · roughly 650 Starlink direct-to-cell satellites as of 31 March 2026 · $632M of Starlink Mobile revenue in 2025 across 7.4 million monthly unique devices · $17B paid for 65 MHz of EchoStar AWS-4 and H-block spectrum, approved by the FCC on 12 May 2026 · AST authorized for 248 satellites, with 124 required by 2 August 2030.

## Regulatory and spectrum
This category exists because a regulator invented it. The framework itself is on the communications systems sheet: the FCC's Supplemental Coverage from Space order of 14 March 2024, the secondary allocations it added, and the lease that makes a satellite operator a tenant of whichever carrier holds the spectrum. Three consequences land on the spacecraft. The first is aperture. These services run in low-band and PCS spectrum a carrier already owns, at frequencies where a handset antenna has no gain and cannot be pointed, so the satellite supplies the entire link margin in antenna area and receive sensitivity. That is why AST unfolds 223 m² and why SpaceX built roughly 650 dedicated satellites rather than adding a mode to the ones already flying. The second is the build schedule. The FCC granted AST commercial authority for 248 satellites in April 2026, with 124 required by 2 August 2030 and the full system by 2 August 2033, so the constellation carries a deadline that a spacecraft production line has to hit. The third is where the money goes: SpaceX paid $17B for 65 MHz of EchoStar's AWS-4 and H-block licenses plus $2.6B in stock for 15 MHz of AWS-3, approved by the FCC on 12 May 2026, which is more than the satellites cost. And because each country licenses its own mobile spectrum, a global service is assembled market by market, which sets how many bands the payload has to support before anyone has sold a subscription.

## Examples
Starlink Direct to Cell with T-Mobile, commercially launched as T-Satellite in 2025 and now partnered with more than 30 mobile operators; AST SpaceMobile's BlueBird Block 2 satellites with AT&T, Verizon, Vodafone, and Rakuten as partners, the first of which launched in December 2025; Apple's Emergency SOS via satellite over Globalstar; Skylo's narrowband service over geostationary L-band, used for messaging on Android and iOS handsets; and Lynk Global.

## Economic profile
The expensive half of this business is the spacecraft, and the two approaches price very differently. AST builds large satellites in small numbers: Block 2 runs about 6,100 kg with a 223 m² deployable array, and 124 of them are due by August 2030, which is a flagship-class build at constellation cadence. SpaceX added direct-to-cell payloads to a line already turning out Starlink spacecraft, so its marginal cost was a payload variant rather than a new program, and it had roughly 650 of them flying by 31 March 2026. Against that sits revenue that still bills like a feature: $632M of Starlink Mobile revenue in 2025 across 7.4 million monthly unique devices. What a carrier pays for that, and who keeps the subscriber relationship, is worked through on the communications systems sheet. The question here is narrower and harder to escape: whether a spacecraft line this large can be built and then continuously replaced on a single-digit dollar monthly wholesale rate, and whether the next generation carries enough antenna to sell data rather than messages.

## Videos

- https://www.youtube.com/watch?v=rtTyTFBhY6I — Starlink Direct to Cell: How it works, common misconceptions, and answers to your questions (DISHYtech, 17 minutes, 100k+ views)
- https://www.youtube.com/watch?v=0Uy0kWWsFJQ — T-Mobile & Starlink Launch T-Satellite – How It Works & Why It Matters (TEKZOID, 2 minutes, 10k+ views)

## Further reading

[Non-Terrestrial Networks (NTN) (3GPP)](https://www.3gpp.org/technologies/ntn-overview) · [Single Network Future: Supplemental Coverage from Space, Report and Order (Federal Communications Commission)](https://docs.fcc.gov/public/attachments/FCC-24-28A1.pdf)
