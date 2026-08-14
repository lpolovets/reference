---
number: 18
name: Radioisotope Power
part: 4
group: Power generation & storage
orbit: [surf, deep]
scale: [kg, hkg]
autonomy: auto
customer: [sci, civ]
maturity: ops
---

## Description
A radioisotope thermoelectric generator turns the decay heat of plutonium-238 into electricity with no moving parts. The fuel is plutonium dioxide pressed into ceramic pellets, clad in iridium, and stacked into graphite General Purpose Heat Source modules built to survive a launch failure and reentry intact. The current unit, the Multi-Mission RTG, holds about 4.8 kg of oxide making roughly 2,000 W of heat, which is about 0.42 W per gram, and wraps it in lead telluride thermocouples that convert around 6% of that to 110 W of electricity at beginning of life. The generator weighs about 45 kg, so the specific power is roughly 2.4 W/kg, which is an order of magnitude worse than a solar array in sunlight and the reason nobody uses one where sunlight is available. Output falls about 2% a year, from the 87.7-year half-life of the plutonium plus slow degradation of the thermocouples, so a 14-year mission plans on roughly three quarters of its launch power. Smaller radioisotope heater units, about 1 W of heat each, are used separately to keep components warm without spending electrical power on heaters.

## Strengths and weaknesses
It works where nothing else does: through a 354-hour lunar night, through a Mars dust storm that can cut solar output for weeks, and past Jupiter where sunlight is down to about 50 W/m². It also runs for decades with no mechanism to fail, which is why the Voyagers are still transmitting. The binding weakness is fuel supply, not engineering. The United States stopped making plutonium-238 in the late 1980s and restarted at Oak Ridge decades later; GAO reported in 2017 that the restarted program had produced 100 grams in total against a target of 1.5 kg a year by 2026, and output since has climbed into the hundreds of grams a year rather than kilograms. One MMRTG needs 4.8 kg of oxide, which is roughly 4.2 kg of plutonium, so a single generator is close to three years of the entire national production target and new fuel has to be blended with legacy inventory to reach the required isotopic spec. The practical consequence is blunt: the supply supports something like one MMRTG every two or three years, which is a handful of missions per decade, and units are allocated by NASA rather than bought. The other weakness is conversion efficiency, since 6% means 94% of an extremely scarce material is thrown away as heat.

## When to use
Use radioisotope power when sunlight is unavailable or unreliable and the load is under a few hundred watts, which in practice means the outer planets, a Mars surface mission that has to survive dust storms and winter, or a lunar site that has to run through the night. Do not plan a mission around one until you have confirmed the allocation, because the constraint is fuel rather than money and NASA states in its announcements of opportunity whether a unit is available for that competition. If the load is more than a few hundred watts, an RTG is the wrong tool and fission in entry 19 is the answer, since specific power goes from 2.4 W/kg to roughly 7 W/kg and scales with size rather than against it. If you only need to keep a component warm rather than powered, ask for radioisotope heater units instead, which use grams rather than kilograms. And if the mission can be flown on solar with a larger array, fly it on solar, because that decision frees a unit for a mission that has no alternative.

## Key numbers
About 4.8 kg of plutonium dioxide per MMRTG, roughly 2,000 W thermal at 0.42 W per gram · about 6% thermal-to-electric conversion, 110 W at beginning of life · roughly 45 kg per unit, about 2.4 W/kg · output falling about 2% a year against an 87.7-year half-life · production target of 1.5 kg a year by 2026, against 100 grams produced in total as of GAO's 2017 report · radioisotope heater units about 1 W of heat each · about 50 W/m² of sunlight at Jupiter

## Examples
The MMRTG powers Curiosity, landed 2012, and Perseverance, landed 2021, and is the baseline for Dragonfly at Titan; the earlier GPHS-RTG design flew on Galileo, Ulysses, Cassini, and New Horizons; the Voyagers have been running on RTGs since 1977. The Advanced Stirling Radioisotope Generator, which would have converted about a quarter of the heat instead of 6% and cut the fuel per watt by roughly a factor of four, was canceled in 2013 before flight.

## Economic profile
This is an allocation problem wearing the costume of a market. There is one producer, the Department of Energy, one buyer, NASA, and no price at which more fuel appears, because the constraint is neptunium-237 target fabrication and irradiation capacity at Oak Ridge and Idaho rather than budget in any single year. The cost that shows up in a mission's books is the reimbursement to DOE for the generator and its fuel, and it is large enough that a Discovery-class proposal usually cannot carry one; the cost that does not show up is the opportunity cost, since a unit given to one mission is a unit no competing mission can have for years. Delivery is expensive too: 45 kg on the lunar surface at CLPS prices of $0.5–1.2M/kg is $22–54M of transport alone for 110 W, which is arithmetic done here rather than a published figure. The one real lever is conversion efficiency. A dynamic converter at 25–30% would stretch the same plutonium across four times as many missions, which is why NASA keeps restarting Stirling work after canceling it. Nothing here has a commercial buyer, and the handful of startups proposing radioisotope units for lunar landers face the same fuel queue as everyone else.

## Videos

- https://www.youtube.com/watch?v=l-Puj0uyCAg — How Does a Radioisotope Thermoelectric Generator Work? The Seebeck Effect (JPLraw, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=K79IwXzGBKk — Prepping the Perseverance Power Source (Idaho National Laboratory, 3 minutes, 100k+ views)

## Further reading

[Space and Defense Power Systems (Department of Energy)](https://www.energy.gov/ne/space-and-defense-power-systems) · [Space Exploration: DOE Could Improve Planning and Communication Related to Plutonium-238 and Radioisotope Power Systems Production Challenges (GAO)](https://www.gao.gov/products/gao-17-673)
