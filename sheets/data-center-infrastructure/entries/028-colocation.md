---
number: 28
name: Colocation
part: 6
group: Facility & siting
density: [low, high]
where: [colo, ent, ai]
water: med
retrofit: hall
maturity: mature
---

## Description
Colocation is renting space, power, and cooling in someone else's building while owning the servers yourself. Retail colocation sells by the cabinet or the cage, with the operator providing everything up to the rack. Wholesale sells whole halls or buildings, typically 1 MW and up, with the tenant taking on more of the fit-out and operations. Contracts are priced primarily on committed kilowatts rather than on floor area, which tells you what the operator is really selling.

## Strengths and weaknesses
It converts capital into operating expense, gives access to carrier-dense interconnection points that would be impossible to replicate, and removes the need to run a critical facility. Deployment takes weeks instead of years. The costs are per-kilowatt price and constraint. Colocation power is more expensive than self-build at scale, halls built for 5–10 kW racks often cannot take modern density, and liquid cooling in a shared hall requires the operator's cooperation on piping, water treatment, and leak response. Long contracts also lock in a density specification that may age badly.

## When to use
Colocate when the requirement is under roughly 5–10 MW, when interconnection to many networks matters, or when speed matters more than unit cost. It is also the right way to enter a new geography before committing to a build. Check three things before signing: the hall's actual per-rack power and cooling limit, whether liquid cooling is supported and on what terms, and how power is billed, since metered against committed changes the economics substantially. Above about 10 MW with a stable forecast, build or lease a whole facility instead.

## Key numbers
Retail sold by cabinet, wholesale from about 1 MW · priced on committed kW rather than floor area · deployment in weeks against years for a build · legacy halls commonly cap at 5–15 kW per rack, which excludes current AI hardware · liquid cooling support varies widely and is a contract term, not a given.

## Examples
Equinix and Digital Realty in the retail and interconnection market; CyrusOne, Vantage, and QTS in wholesale; the Ashburn and Slough interconnection clusters, where colocation exists mainly for who else is in the building; colocation halls now retrofitting rear-door heat exchangers to take AI tenants.

## Economic profile
Colocation is sold by the committed kilowatt, so the contract is a power lease with a building attached and floor area barely enters the price. That is why the crossover with self-build sits around 5–10 MW: below it, paying the operator's margin costs less than building and staffing a critical facility, and above it self-build wins on unit cost as long as the demand forecast holds. Two contract terms move the economics more than the headline rate does. Metered against committed billing decides who carries the cost of unused capacity, and a hall capped at 5–15 kW per rack can quote an attractive price per kW that means nothing if the hardware you want does not fit in it. Liquid cooling is also a contract term rather than a given, so a tenant who expects to run AI hardware in year three should get piping, water treatment, and leak response written in at signing. The one thing colocation sells that self-build cannot is interconnection: in Ashburn or Slough part of the rent is for who else is in the building, and no capital budget substitutes for that.

## Videos

- https://www.youtube.com/watch?v=kALRlKQ0mQY — What is Colocation & How Does It Work? (Interxion: A Digital Realty Company, 1 minute, 500k+ views)
- https://www.youtube.com/watch?v=orsNmJSDpws — The 4 Types of Data Centers Explained | Enterprise, Colocation, Hyperscale & Edge (Data Center Resources, 2 minutes, 5k+ views)
- https://www.youtube.com/watch?v=Vgx45ZPzWEE — Understanding Colocation Data Centers (Provision Networks, 2 minutes, 1k+ views)

## Further reading

[Uptime Institute Global Data Center Survey 2025 (Uptime Institute)](https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2025.Annual.Survey.Report.pdf?version=0) · [Colocation Data Centers (Better Buildings, US Department of Energy)](https://betterbuildingssolutioncenter.energy.gov/data-center-toolkit/colocation)
