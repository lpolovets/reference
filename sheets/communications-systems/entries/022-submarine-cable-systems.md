---
number: 22
name: Submarine Cable Systems
part: 4
group: Subsea
reach: [global]
capacity: [tbps]
medium: fiber
latency: low
maturity: dep
---

## Description
A submarine cable is a small bundle of fiber pairs inside a steel and polyethylene structure wrapped around a copper conductor, and the conductor is there to carry DC power out to the amplifiers rather than to carry signal. In deep water the cable is about the diameter of a garden hose; near shore it gets steel armor and is plowed into the seabed, which is why nothing is visible at the beach. Erbium-doped repeaters sit every 50 to 100 km along the route and are fed a constant current from power equipment at both landing stations, so a single fault that breaks the conductor takes the whole span down rather than one channel. Older systems carry 4 to 8 fiber pairs; modern space-division designs carry 12 to 24, because the binding constraint on a long system is the electrical power that can be pushed out to the repeaters, so more pairs run at lower power each rather than fewer pairs run hard. Capacity per system runs from tens of terabits on older cables to a few hundred on new ones, with MAREA rated at 224 Tbps across 6,600 km. There are more than 600 active and planned systems and over 1.5 million km of cable in service, and the design life of a system is 25 years.

## Strengths and weaknesses
Nothing else moves intercontinental traffic at this price. Submarine cable carries about 99% of it, while the FCC's own filings put satellite at 0.37% of US international capacity, and the reason is capacity per dollar: a few hundred million dollars buys 200 to 400 Tbps on a transatlantic route, while the largest geostationary satellite ever built is designed for about 1 Tbps at a comparable price. Once the cable is wet the marginal cost of another terabit is terminal equipment and electricity. The weaknesses are that the asset is fixed and the wet plant cannot be changed. Fiber pairs are set at manufacture, so all later capacity growth comes from upgrading the terminal equipment, and coherent upgrades have raised installed cable capacity several times over across a system's life. Faults are routine rather than rare, at roughly 200 a year worldwide with about two-thirds caused by fishing gear and ship anchors, and a repair takes weeks because it needs a ship. Every route is also a single line on a map, so resilience comes from buying capacity on several systems rather than from anything inside one of them.

## When to use
If you need intercontinental capacity measured in terabits, this is the only option, and the real decision is whether to build or to buy. Buy capacity on an existing system if you need it inside two years, if your volume is under a fiber pair, or if you are unwilling to hold a construction risk; building takes 2 to 3 years before the first bit moves. Build or join a consortium only when you have anchor traffic that fills at least a pair and a view of demand over a decade, which in practice means a hyperscaler or a group of carriers. For an island or a small market, take a branch off a passing trunk through a branching unit rather than commissioning a dedicated system, since the trunk's ship time is already paid for. Whatever you buy, buy diversity explicitly: two circuits on cables that share a landing station or a beach approach are one circuit in practice. Landing stations, repair economics and how capacity is priced are covered in the next entry.

## Key numbers
Repeater spacing 50–100 km, powered by a constant-current DC feed from both ends · 4–8 fiber pairs on older systems and 12–24 on space-division designs · MAREA rated at 224 Tbps over 6,600 km · more than 600 active and planned systems and over 1.5 million km in service · design life 25 years · roughly 200 faults a year worldwide, about two-thirds from fishing gear and anchors · satellite carries 0.37% of US international capacity against about 99% on cable.

## Examples
MAREA, the 6,600 km Microsoft, Meta and Telxius transatlantic system rated at 224 Tbps; Google's Dunant, the first space-division system with 12 pairs; 2Africa, a roughly 45,000 km system circling the continent; the four suppliers who build essentially all of it, SubCom, Alcatel Submarine Networks (which Nokia agreed in 2024 to sell to the French state), NEC and HMN Technologies; ITU-T G.977, which specifies what an optically amplified submarine system has to do.

## Economic profile
Almost the entire cost is committed before the first bit moves, and the largest single item is ship time rather than glass. A transatlantic system runs a few hundred million dollars over 2 to 3 years covering marine survey, permits, the cable itself, the repeaters and the vessel days to lay it, which works out near $40,000 per km on a 6,600 km route (derived here from those two figures). After that the marginal cost of another terabit is a pair of transponders and the electricity to run them, so the price a buyer pays has far more to do with how much capacity the owner needs to sell than with what the bit costs to carry. Who buys has changed. New systems are increasingly funded by Google, Meta, Microsoft and Amazon rather than by carrier consortia, and the difference is structural: a consortium has to presell capacity to raise the money and therefore builds only what it can contract in advance, while a hyperscaler builds against its own traffic forecast and sells none of it. Because the wet plant is fixed for 25 years and only the terminal equipment improves, cost per delivered bit on a given cable falls steadily over its life without anyone spending capital on the ocean floor, which is also why old systems get retired for being uncompetitive rather than for wearing out.

## Videos

- https://www.youtube.com/watch?v=yd1JhZzoS6A — How The Internet Travels Across Oceans (VISION, 6 minutes, 5m+ views)
- https://www.youtube.com/watch?v=bgRsiGGSgjc — INSIDE the Largest Cable-Laying Ship Ever Built: How Undersea Cables Are Laid (Nauctis, 11 minutes, 50k+ views)

## Further reading

[Frequently Asked Questions (International Cable Protection Committee)](https://www.iscpc.org/information/frequently-asked-questions/) · [G.977: Characteristics of optically amplified optical fibre submarine cable systems (ITU-T)](https://www.itu.int/rec/T-REC-G.977/en)
