---
number: 12
name: Aisle Containment
part: 3
group: Air cooling
density: [low, high]
where: [hyper, colo, ent]
retrofit: drop
maturity: mature
---

## Description
Containment puts a physical barrier between the cold air going into the servers and the hot air coming out. Cold aisle containment encloses the cold aisle with doors and a roof, so the rest of the room becomes a hot return plenum. Hot aisle containment does the reverse, ducting the hot aisle back to the cooling units and leaving the room cold. Add blanking panels in empty rack units and brushes in floor cutouts and the two air streams stop mixing, which is the entire point.

## Strengths and weaknesses
It is the cheapest large efficiency gain available in an air-cooled room. Because supply and return no longer mix, supply temperature can rise several degrees, the delta across the coil widens, fans slow down, and chillers spend more hours on economizer. Sites routinely cut cooling energy 20–40% and gain rack capacity they already paid for. The costs are modest and mostly practical: hot aisle containment makes the contained aisle genuinely hot to work in, fire suppression and sprinkler coverage have to be reviewed, and containment reduces the thermal buffer, so a cooling failure raises inlet temperatures within a minute rather than several.

## When to use
Contain every air-cooled hall. There is essentially no case against it in a new build, and in a retrofit it is usually the first thing to do, before adding cooling units or raising set points. Choose hot aisle containment where the room will be occupied and staff comfort matters, and cold aisle containment where retrofitting is easier because the existing units already feed a raised floor. Review fire suppression with the containment in place, and model what happens to inlet temperature during a cooling outage before relying on ride-through assumptions written for an uncontained room.

## Key numbers
Cooling energy savings commonly 20–40% in a previously uncontained room · lets supply temperature rise several degrees, which extends economizer hours substantially · payback often under two years · thermal ride-through shrinks to roughly a minute after a cooling failure · blanking panels and sealed cutouts deliver much of the benefit for very little money.

## Examples
Universal in hyperscale design since the early 2010s; colocation retrofits where containment released stranded capacity without new mechanical plant; Berkeley Lab's data center best-practice guidance, which puts air management ahead of equipment upgrades.

## Videos

- https://www.youtube.com/watch?v=qzTpqpHnRdU — Hot Aisle vs Cold Aisle Containment Explained (MEP Academy, 5 minutes, 5k+ views)
- https://www.youtube.com/watch?v=vZkA0z9JRgw — Data Center Cooling - how are data centre cooled cold aisle containment hvacr (The Engineering Mindset, 10 minutes, 100k+ views)
- https://www.youtube.com/watch?v=PaYxIFFWf2w — Hot and cold aisle in data center explained in simple terms (NETWORKING WITH H, 4 minutes, 10k+ views)

## Further reading

[Data Center Energy Efficiency Toolkit (Berkeley Lab Center of Expertise)](https://datacenters.lbl.gov/tools)
