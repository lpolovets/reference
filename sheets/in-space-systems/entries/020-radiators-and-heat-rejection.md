---
number: 20
name: Radiators and Heat Rejection
part: 4
group: Thermal control
orbit: [leo, geo, cis, deep]
scale: [kg, t]
autonomy: auto
customer: [civ, def, com, sci]
maturity: ops
---

## Description
Nothing convects in vacuum, so every watt a spacecraft consumes has to leave as infrared radiation from a surface, and the size of that surface follows the Stefan-Boltzmann law rather than any design choice. Radiated flux goes as the fourth power of temperature, so a panel at 300 K with an emissivity of 0.85 sheds about 390 W/m² into empty space. In flight that drops to roughly 100–250 W/m², because the radiator also absorbs sunlight at 1,361 W/m², Earth's infrared at around 237 W/m², albedo, and heat from the rest of its own spacecraft. Getting the absorbed part down is the job of the coating: optical solar reflectors, which are thin quartz tiles silvered on the back, and silvered Teflon and white paints all aim for high infrared emissivity with the lowest solar absorptance available, typically starting near 0.08–0.2. Heat reaches the radiator through conduction, embedded heat pipes, or a pumped loop rather than through the air, which is entry 21. The layout follows from the numbers: a geostationary communications satellite puts its radiators on the north and south faces, which barely see the Sun at that orbit, and a 20 kW satellite needs on the order of 100 m² at 200 W/m², which is why a high-power comsat is a modest box with two large wings for power and two large flat faces for heat.

## Strengths and weaknesses
A radiator is passive, cheap hardware with essentially no failure mode of its own, and its performance is calculable to within a few percent, which is rare on this sheet. Two things make it hard anyway. The first is that the area scales with power and area has to be carried, deployed, and pointed away from the Sun, so above roughly 10 kW the radiators start dictating the spacecraft's shape and the deployment mechanism becomes a single-point failure on the heat rejection path. The second is the temperature exponent. The same surface that sheds 390 W/m² at 300 K sheds about 5 W/m² at 100 K and about 0.15 W/m² at 40 K, so cooling a detector to 40 K takes roughly 2,600 times the area per watt as cooling electronics at room temperature, and that ratio is why cryogenic instruments need a sunshield rather than a bigger radiator. Coatings also degrade: ultraviolet and atomic oxygen raise solar absorptance over a mission, so a radiator sized on day-one properties is undersized at end of life. And a radiator sized for the hot case overcools in the cold case, so the spacecraft burns survival heater power to undo its own thermal design, which is what louvers and variable-conductance heat pipes exist to reduce.

## When to use
Size the radiator at end of life, at the hottest environment the orbit produces, with the coating's degraded absorptance, and then check that the cold case does not cost more heater power than the mission can spare. If the dissipation is under a few hundred watts, use body-mounted panels on faces that avoid the Sun and skip the mechanism entirely. If you are above roughly 5–10 kW, plan on deployable radiators and treat the deployment as you would a solar array deployment, because it fails the same way. If the environment swings hard between hot and cold cases, as it does for a lunar surface system or a vehicle that goes from low orbit to deep space, look at variable-geometry or louvered radiators before you look at a bigger fixed one. If the requirement is a cold detector rather than warm electronics, do not try to solve it with radiator area alone: get as far as you can passively with a sunshield and then use a cryocooler, which is entry 21.

## Key numbers
About 390 W/m² at 300 K with emissivity 0.85, and 100–250 W/m² in practice after environmental heating · absorbed fluxes of 1,361 W/m² solar and around 237 W/m² Earth infrared · coating solar absorptance starting near 0.08–0.2 and rising over the mission · about 5 W/m² at 100 K and 0.15 W/m² at 40 K, roughly 2,600 times the area per watt against a 300 K radiator (derived here) · on the order of 100 m² for a 20 kW satellite at 200 W/m² · roughly 5,000 m² for a 1 MW payload at the same flux (derived here)

## Examples
Geostationary communications platforms such as the Boeing 702 and Airbus Eurostar families carry north and south radiator panels with embedded heat pipes and deployable extensions for the high-power versions; the ISS rejects its external loads through two ammonia loops feeding deployable radiator wings; and JWST reaches roughly 40 K on the cold side of a five-layer sunshield about the size of a tennis court rather than through any radiator that would fit on a spacecraft.

## Economic profile
Radiator hardware is among the cheapest things on a spacecraft, and it is expensive anyway, because what it costs is area and mass that would otherwise have been payload. Aluminum honeycomb panels, embedded constant-conductance heat pipes, and optical solar reflector tiles come from a small set of suppliers at prices measured in thousands of dollars per square meter, against a launch cost of $2,000–6,000/kg to low orbit and $15,000–30,000/kg to GEO for whatever the panel weighs. The trend that matters commercially is that satellite power keeps rising, so heat rejection is a growing share of the bus: a 20 kW communications platform needs about 100 m² of radiator, and the vendors who can deploy that reliably sell the high-power end of the market. The same arithmetic is what stalls the proposals for large computing payloads in orbit. A one-megawatt compute load needs roughly 5,000 m² of radiator at 200 W/m², which is a structure larger than the ISS solar array wings and has to be deployed, pointed, and kept clear of its own spacecraft, so the thermal system rather than the launch cost is the part of those business plans that has not closed.

## Videos

- https://www.youtube.com/watch?v=Jjw4hNxFuH0 — Spacecraft thermal system (Reflective Layer, 7 minutes, 10k+ views)
- https://www.youtube.com/watch?v=w5fvy1ZcIZk — Radiators In Realistic Sci-Fi (And Why You Need Them) (Spacedock, 10 minutes, 100k+ views)

## Further reading

[State-of-the-Art of Small Spacecraft Technology: 7.0 Thermal Control (NASA)](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/) · [Design and Modeling of a Variable Heat Rejection Radiator (NASA)](https://ntrs.nasa.gov/citations/20120004221)
