---
number: 11
name: Samarium-Cobalt and Ferrite Magnets
part: 2
group: Permanent magnets
use: [mag, aero]
refining: mono
substitution: part
volatility: med
---

## Description
These are the two magnets you reach for when neodymium-iron-boron is not available or not suitable, and they sit at opposite ends of the price range. Ferrite, also called ceramic, is strontium or barium hexaferrite: iron oxide mixed with a carbonate, calcined, wet milled, pressed in a magnetic field, and sintered. It contains no rare earths and no cobalt, the raw materials are among the cheapest in industry, and it has been made in enormous volumes for loudspeakers, small motors, and holding applications for sixty years. Samarium-cobalt is the opposite: a sintered rare-earth magnet in either the SmCo5 or the Sm2Co17 family, made by much the same powder route as NdFeB but with samarium in place of neodymium and cobalt making up roughly half to two-thirds of the mass. It gives up energy product to gain temperature capability and corrosion resistance. The whole point of this entry is what the substitution costs, because both of these are genuinely available alternatives and neither is free.

## Strengths and weaknesses
Ferrite's strengths are price and supply: a few dollars a kilogram against tens for NdFeB, no rare earths, no cobalt, no corrosion coating needed. Its weakness is that its energy product is roughly 3.5–5 MGOe against 35–50 for NdFeB, so for the same air-gap flux you need far more magnet volume and a heavier rotor, and the machine grows. It also has an unusual failure mode: ferrite loses coercivity as it gets colder rather than hotter, so a ferrite motor can irreversibly demagnetize on a cold start, which is a real automotive constraint rather than a footnote. Samarium-cobalt keeps working to 300–350 °C where NdFeB has long since given up, holds its magnetization with very little temperature drift, and resists corrosion well enough that it often ships uncoated. Its weaknesses are that it costs more than NdFeB per unit of energy, it is brittle and chips and cracks in machining and assembly, and it carries two supply exposures instead of one — samarium went onto China's export control list in April 2025, and cobalt is the material in entry 003.

## When to use
Pick ferrite when volume and mass are cheap and cost is the binding constraint: pumps, fans, appliance motors, holding and separation, and traction motors where the designer has explicitly accepted a larger machine to eliminate rare earths. If you go that way, check the cold-temperature demagnetization limit early, because it constrains the design more than the room-temperature numbers suggest. Pick samarium-cobalt when the part sees temperatures above roughly 150–180 °C, when the environment is corrosive and a coating cannot be relied on, or when magnetic output has to stay stable across a wide temperature range — missile and aircraft actuators, downhole tools, high-temperature sensors, and travelling-wave tubes. Do not pick either one as a supply-chain fix on its own. Both are still made overwhelmingly in China, SmCo swaps neodymium exposure for samarium and cobalt exposure, and only ferrite actually removes rare earths from the bill of materials.

## Key numbers
Ferrite energy product roughly 3.5–5 MGOe, samarium-cobalt 16–32 MGOe, sintered NdFeB 35–50 MGOe · SmCo works to 300–350 °C against roughly 150–200 °C for automotive NdFeB grades · ferrite costs a few dollars a kilogram against tens of dollars for NdFeB · SmCo is roughly half to two-thirds cobalt by mass · ferrite loses coercivity as temperature falls, so cold-start demagnetization is the design limit · samarium was one of the seven elements China placed under export licensing on 4 April 2025.

## Chokepoint
Swapping magnet chemistry does not move the country. China makes the large majority of the world's ferrite magnets as well as its neodymium ones, because ferrite is a low-margin, high-volume, energy-intensive ceramic business that Western producers exited decades ago, and the samarium-cobalt supply chain runs through the same separation plants as everything else in entry 009. Samarium specifically was named in China's 4 April 2025 export controls, so the "rare-earth-free" pitch does not apply to SmCo at all. What ferrite does buy is a different kind of exposure: its inputs are iron oxide and strontium or barium carbonate, which are cheap, widely available, and not export controlled, so a ferrite plant can in principle be built anywhere on ordinary industrial timelines of two to three years, with no separation step behind it. That is a much shorter path than the three to six years a rare-earth separation plant takes. The cost of walking it is a heavier machine, and that is the trade a buyer has to be willing to make before the alternative supply chain is worth anything.

## Examples
Tesla said at its 2023 Investor Day that its next-generation drive unit would use a permanent-magnet motor containing no rare earths; it has not named the material publicly, and ferrite is the usual assumption. TDK, Proterial, and Hitachi Metals in ferrite, alongside a large Chinese industry led by producers such as BGRIMM and Sinomag. Arnold Magnetic Technologies, Electron Energy Corporation, and Vacuumschmelze in samarium-cobalt for aerospace and defense. SmCo is standard in missile fin actuators, aircraft generators and starter-generators, downhole logging tools, and travelling-wave tube focusing magnets. Niron Magnetics is developing iron-nitride magnets as a third rare-earth-free option, targeting energy products above ferrite's, and is not yet shipping at scale.

## Economic profile
Ferrite is a commodity: prices track iron oxide, strontium carbonate, and industrial power, they move within a narrow band, and margins are thin enough that the business only works at very high volume with cheap energy. Samarium-cobalt is the opposite — small volumes, long-qualified aerospace and defense customers, prices set in bilateral contracts, and a cost that swings with cobalt and samarium rather than with any exchange. Because samarium is a low-value byproduct of separating the more wanted rare earths, its supply is set by NdPr demand, so an SmCo buyer is exposed to a market it does not participate in. Blended across the two, price movement over the past five years has been moderate compared with the neodymium chain. The commercial question for anyone designing around these is straightforward: ferrite trades capital and mass for supply security, SmCo trades money for temperature, and neither is a cheaper version of NdFeB.

## Videos

- https://www.youtube.com/watch?v=b2XaJUkJLfg — How to produce ferrite magnetic arc, magnet? (Zhengxi Press Channel, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=ZjBeb782YpE — HOW IT'S MADE: Magnets (How It's Made, 9 minutes, 100k+ views)

## Further reading

[Permanent Magnet Materials and Current Challenges (Arnold Magnetic Technologies)](https://www.arnoldmagnetics.com/wp-content/uploads/2017/10/Permanent-Magnet-Materials-and-Current-Challenges-Constantinides-and-DeLeon-PowderMet-2011-ppr.pdf) · [Progress and prospects of hard hexaferrites for permanent magnet applications (Journal of Physics D: Applied Physics)](https://iopscience.iop.org/article/10.1088/1361-6463/abd272)
