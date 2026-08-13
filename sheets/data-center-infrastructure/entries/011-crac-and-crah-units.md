---
number: 11
name: CRAC & CRAH Units
part: 3
group: Air cooling
density: [low, med]
where: [colo, ent, edge]
water: low
retrofit: drop
maturity: mature
---

## Description
A computer room air conditioner is a self-contained unit with its own refrigeration circuit: it cools room air with a direct-expansion coil and rejects heat to an outdoor condenser. A computer room air handler has no refrigeration of its own; it is a coil and a fan fed with chilled water from a central plant. Both blow cold air, traditionally into a raised-floor plenum and up through perforated tiles in the cold aisle. The distinction matters because it decides where the compressor lives, and therefore how efficiently the whole site can run.

## Strengths and weaknesses
CRAC units are simple and self-contained, which suits small rooms with no chilled water and edge sites with no plant. CRAH units are more efficient at scale, because a central chiller plant with economization beats many small compressors. Both share the same ceiling: a raised floor and perforated tiles can deliver roughly 5–15 kW per rack before airflow, not cooling capacity, becomes the limit. Bypass air and recirculation waste a large share of the fan energy in most legacy rooms, and the fix is containment rather than more units.

## When to use
Use CRAH units with a central chilled water plant for any facility above a few hundred kilowatts, since that is where economizers and efficient chillers pay. Use CRAC units for small rooms, edge cabinets, and retrofits where running chilled water piping is impractical. In an existing room, fix air management before adding units: blanking panels, sealed floor cutouts, and correctly placed tiles routinely recover more capacity than another CRAH would. Above about 20 kW per rack, plan the move to liquid rather than adding air capacity you cannot use.

## Key numbers
Practical limit of raised-floor air delivery is roughly 5–15 kW per rack · fans are typically 10–20% of cooling energy, and variable speed cuts that sharply · CRAH supply air commonly 18–27 °C under current ASHRAE guidance, up from 13 °C historically · bypass air and recirculation waste a large fraction of airflow in uncontained rooms · CRAC compressors are less efficient at scale than a central chiller plant.

## Examples
Raised-floor rooms in nearly every enterprise facility built between 1990 and 2015; CRAH-plus-chiller designs in colocation halls; ASHRAE's successive widening of the recommended inlet envelope, which allowed most sites to raise supply temperature and save compressor energy.

## Videos

- https://www.youtube.com/watch?v=WNOyBdWZNwE — Computer Room Air Conditioning - How do CRAC units work? (The Engineering Mindset, 7 minutes, 100k+ views)
- https://www.youtube.com/watch?v=0h7xFUx4dNU — CRAC vs CRAH Units Explained (MEP Academy, 8 minutes, 10k+ views)
- https://www.youtube.com/watch?v=q7_uCn1qr9M — The Crucial Role of the CRAH in a Data Center (CoreSite, 1 minute, 10k+ views)

## Further reading

[ASHRAE Data Center Resources, Datacom series (ASHRAE)](https://www.ashrae.org/technical-resources/bookstore/datacom-series) · [Best Practices Guide for Energy-Efficient Data Center Design (Berkeley Lab and FEMP)](https://datacenters.lbl.gov/sites/default/files/2025-07/best-practice-guide-data-center-design.pdf)
