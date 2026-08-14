---
number: 14
name: Economization
part: 3
group: Air cooling
density: [low, high]
where: [hyper, colo, ent]
water: low
retrofit: hall
maturity: mature
---

## Description
Economization means using the outdoor environment to do the cooling instead of running a compressor. Air-side economization draws filtered outside air into the hall directly whenever it is cool enough, and exhausts the hot air rather than recirculating it. Water-side economization keeps the building sealed and instead bypasses the chiller when the cooling tower or dry cooler can make cold enough water on its own, usually through a plate heat exchanger. Both trade capital and controls complexity for compressor hours.

## Strengths and weaknesses
Compressors are the single largest mechanical load in a data center, and in a cool climate economization can eliminate most of their run hours. Sites in the Pacific Northwest, the Nordics, and northern Europe run essentially chillerless for much of the year, and this is most of the reason those regions attract capacity. The weaknesses split by type. Air-side brings the outdoors inside, so filtration, humidity control, and contamination all need attention, and a smoke event or a chemical release means shutting the dampers. Water-side avoids that but achieves fewer free hours because it needs a bigger temperature difference to work.

## When to use
Design for economization anywhere the climate offers meaningful hours, which is most of the temperate world once supply temperature is raised. Prefer water-side where air quality, coastal salt, or humidity control argue against bringing outside air in; prefer air-side where the climate is dry and clean and the extra hours are worth the filtration. The prerequisite for both is a warm supply temperature and good air management, so contain the aisles and raise the set point first. Economization added to a room running 13 °C supply air gets a fraction of the benefit it would at 24 °C.

## Key numbers
Compressors are typically the largest mechanical load, so free-cooling hours translate directly into PUE · northern climates achieve several thousand economizer hours a year, and some sites run chillerless · air-side needs filtration and humidity control, plus a shutdown plan for outdoor air events · water-side needs a larger approach temperature and delivers fewer hours · benefits scale with how warm the supply temperature is allowed to run.

## Examples
Facebook's Prineville, Oregon facility, which popularized air-side economization at hyperscale; Nordic sites running with almost no compressor hours; water-side economizers retrofitted into existing chilled water plants as the cheapest available efficiency project.

## Economic profile
Economization is a capital and controls cost bought against compressor kilowatt-hours, so the payback is close to a straight function of how many hours a year the outdoor air can do the work. In a cool climate that is several thousand hours, and some Nordic sites run essentially chillerless, which is most of the reason capacity keeps going to those regions rather than to cheaper land. In a hot humid climate the same equipment buys far fewer hours and often does not pay for itself. The order of spending matters more than the choice between air-side and water-side: containment and a raised set point cost very little, recover 20–40% of cooling energy in a legacy room, and raise the number of economizer hours the next project can claim. An economizer added to a hall still running 13 °C supply air delivers a fraction of the hours it would at 24 °C, so fix the set point first and size the economizer against the fixed room.

## Videos

- https://www.youtube.com/watch?v=2UCmNs8qGBk — Air Side Economizer (MEP Academy, 8 minutes, 10k+ views)
- https://www.youtube.com/watch?v=JKnzhDetvjQ — How Waterside Economizers Work (MEP Academy, 11 minutes, 10k+ views)
- https://www.youtube.com/watch?v=zy4JegBNGb8 — Free Cooling - How Does It Work? (ICS Cool Energy Ltd, 3 minutes, 50k+ views)

## Further reading

[ASHRAE Data Center Resources, Datacom series (ASHRAE)](https://www.ashrae.org/technical-resources/bookstore/datacom-series) · [Energy Implications of Economizer Use in California Data Centers (Berkeley Lab)](https://www.osti.gov/biblio/937579)
