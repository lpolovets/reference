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
Direct-to-device means a satellite talking to a phone nobody modified: no dish, no external antenna, no special handset. The difficulty is entirely in the link budget. A handset transmits well under a watt into an antenna with essentially no gain that cannot be pointed, and it is designed to reach a tower a few kilometres away rather than a satellite 500 km up, so the satellite has to supply the whole margin with aperture and receive sensitivity. There are two ways to buy that margin, and the industry has split along them. One is an enormous antenna on a few large satellites: AST SpaceMobile's BlueBird Block 2 is roughly 6,100 kg and unfolds a phased array of about 2,400 sq ft (223 m²), the largest commercial antenna structure in low Earth orbit. The other is a modest array on very many satellites, which is Starlink Direct to Cell, at roughly 650 dedicated spacecraft as of 31 March 2026. Both work by transmitting in spectrum licensed to a terrestrial mobile operator, so the satellite behaves like another cell in the carrier's network and the phone never knows the difference.

## Strengths and weaknesses
The strength is that the addressable market is every phone already in someone's pocket, with no hardware to sell, install, or subsidize. That is a fundamentally different distribution problem from every other satellite service. The weakness is capacity. One beam covers a cell hundreds of kilometres across and shares a few megabits per second across everyone inside it, which makes this a coverage product rather than a capacity product, and it is why first services are messaging, emergency calling, and low-rate data rather than broadband. The failure mode is commercial rather than technical: the spectrum belongs to the carrier, so an operator that has not bought its own spectrum is a supplier to the company that owns the customer relationship, and its economics are whatever the carrier agrees to pay. SpaceX's response was to buy spectrum outright, which tells you how the incumbent reads the risk.

## When to use
If you are a mobile operator, buy direct-to-device as a coverage feature. It closes dead zones, it is a genuine safety product, and it costs far less than building towers into terrain that has none. Do not sell it as a broadband substitute, because a shared beam over a whole region cannot support the traffic your terrestrial network carries, and customers who expect otherwise will churn. If you are an investor, the question that decides the outcome is who holds the spectrum and on what terms, since that determines whether the satellite operator captures the revenue or collects a wholesale fee. And if you need real throughput to a mobile user rather than a fallback, buy a terminal: a flat-panel LEO terminal delivers hundreds of megabits, and the whole reason direct-to-device is hard is that it refuses to use one.

## Key numbers
A handset transmits well under 1 W into a near-omnidirectional antenna · AST's BlueBird Block 2 at about 6,100 kg with a roughly 2,400 sq ft (223 m²) array · roughly 650 Starlink direct-to-cell satellites as of 31 March 2026 · $632M of Starlink Mobile revenue in 2025 across 7.4 million monthly unique devices · $17B paid for 65 MHz of EchoStar AWS-4 and H-block spectrum, approved by the FCC on 12 May 2026 · AST authorized for 248 satellites, with 124 required by 2 August 2030.

## Regulatory and spectrum
This category exists because a regulator invented it. The FCC adopted its Supplemental Coverage from Space framework on 14 March 2024, effective 30 May 2024, the first rules anywhere that let a terrestrial mobile licensee lease its spectrum to a satellite operator so the satellite can serve ordinary handsets, with secondary mobile-satellite allocations added in specific bands and interim 911 routing requirements attached. The framework also fixes where the power sits: the spectrum is the carrier's, so the satellite operator is a tenant unless it buys its own. SpaceX did, paying $17B for 65 MHz of EchoStar's AWS-4 and H-block licences plus $2.6B in stock for 15 MHz of AWS-3, which the FCC approved on 12 May 2026 subject to a $2.4B escrow tied to EchoStar's abandoned terrestrial buildout. That is more money for spectrum than the satellites cost, which is the clearest single statement of what binds in this business. AST took the tenant route with variations, contracting long-term access to up to 45 MHz of Ligado's lower mid-band and coordinating 700 and 800 MHz low-band with AT&T, Verizon, and FirstNet; the FCC granted it commercial authority for a 248-satellite constellation in April 2026 with milestones of 124 satellites by 2 August 2030 and the full system by 2 August 2033. Every other country runs its own version of the same question, so a global service has to be assembled market by market through whoever holds the local mobile license.

## Examples
Starlink Direct to Cell with T-Mobile, commercially launched as T-Satellite in 2025 and now partnered with more than 30 mobile operators; AST SpaceMobile's BlueBird Block 2 satellites with AT&T, Verizon, Vodafone, and Rakuten as partners, the first of which launched in December 2025; Apple's Emergency SOS via satellite over Globalstar; Skylo's narrowband service over geostationary L-band, used for messaging on Android and iOS handsets; and Lynk Global.

## Economic profile
The revenue so far looks like a feature, not a service. SpaceX reported $632M of Starlink Mobile revenue in 2025 across 7.4 million monthly unique devices, and its prospectus projects average revenue per user near $8 a month worldwide, about $18 in high-income markets and $2 in lower-income ones, with its T-Mobile agreement worth around $100M over several years. Those are wholesale-feature numbers rather than standalone-carrier numbers. Costs run the other way: AST's satellites are large and expensive, and SpaceX's spectrum purchase is a capital commitment on the scale of a constellation. So the investable question is whether next-generation satellites raise per-cell throughput enough to sell data rather than messaging, and whether the operator owns spectrum when that happens. If it stays a messaging and emergency feature, the economics belong to the carriers, and the satellite operators are infrastructure suppliers with a single-digit dollar monthly wholesale rate.

## Videos

- https://www.youtube.com/watch?v=rtTyTFBhY6I — Starlink Direct to Cell: How it works, common misconceptions, and answers to your questions (DISHYtech, 17 minutes, 100k+ views)
- https://www.youtube.com/watch?v=0Uy0kWWsFJQ — T-Mobile & Starlink Launch T-Satellite – How It Works & Why It Matters (TEKZOID, 2 minutes, 10k+ views)

## Further reading

[Non-Terrestrial Networks (NTN) (3GPP)](https://www.3gpp.org/technologies/ntn-overview) · [Single Network Future: Supplemental Coverage from Space, Report and Order (Federal Communications Commission)](https://docs.fcc.gov/public/attachments/FCC-24-28A1.pdf)
