---
number: 3
name: AEM Electrolysis
part: 1
group: Electrolysis
sector: [chem, veh, pwr]
form: [gas]
carbon: zero
maturity: pilot
cost: med
---

## Description
AEM electrolysis puts PEM's architecture on alkaline's bill of materials. A solid anion-exchange membrane carries hydroxide ions instead of protons, which makes the cell alkaline, and an alkaline cell can use nickel-based catalysts rather than iridium and platinum. The electrolyte is dilute KOH, typically around 1%, or in some designs pure water, so the caustic inventory and the pumps and degassers that go with a 30% KOH loop mostly disappear. Because the membrane is solid, the cell holds a pressure difference the way a PEM cell does: Enapter's modules deliver up to 35 barg with the oxygen side near ambient. The physics is settled and the cell performance is closing on PEM. What is not settled is how long the membrane lasts, because the polymer's cationic groups sit in hot alkali, which attacks them, and that chemical degradation is the reason this entry sits at pilot rather than commercial.

## Strengths and weaknesses
The strength is the materials list. No iridium, no platinum, no titanium flow fields, and no concentrated caustic, while keeping high delivery pressure and fast response. If AEM works at scale it removes the one constraint that caps PEM's growth. The weakness is durability, and it is not a small gap. NREL's baseline pure-water-fed AEM cells degraded roughly 0.67 mV per hour after break-in, while a 40,000-hour stack needs something closer to 2 microvolts per hour, three orders of magnitude better. The failure mode is chemical: hydroxide attacks the quaternary ammonium groups that make the membrane conductive, conductivity falls, cell voltage rises, and efficiency drifts down until the stack is not worth running. Thermal and mechanical degradation add to it, and running hotter to raise performance makes the chemical attack faster.

## When to use
Use AEM today for pilots, for hydrogen at a few hundred kW where module-level redundancy is worth more than efficiency, and for research where you want PEM-like behavior without buying iridium. Do not specify it above a few MW for a project that has to run for 20 years, because the fleet hours to underwrite that do not exist yet. If you are evaluating a supplier, ask for a published multi-thousand-hour degradation curve at the current density and temperature you intend to run, not a cell-level efficiency claim measured at beginning of life, and ask what a stack module costs to replace and how often. For a firm-power project of any real size, alkaline is the cheaper answer; for a variable-power project that has to be bankable now, PEM is the one with the operating history.

## Key numbers
Dilute KOH (roughly 1%) or pure water, nickel-based catalysts, no platinum-group metals · outlet pressure up to 35 barg · 51.3 kWh/kg at system level on Enapter's MW-class AEM Nexus 1000 · 2.4 kW stack modules, 420 of them in a 921.5 kW system · baseline cell degradation near 0.67 mV/h against roughly 2 µV/h for a 40,000-hour life.

## Energy and losses
Enapter quotes 51.3 kWh/kg for the AEM Nexus 1000 including all in-system utilities, which is 65% of the 33.3 kWh/kg lower heating value of hydrogen (77% on the 39.4 kWh higher heating value). That puts AEM roughly level with alkaline and PEM at 50–55 kWh/kg, so efficiency is not the reason to pick it. Delivering at up to 35 barg saves the 1–2 kWh/kg the first compression stage would cost, and the dilute electrolyte loop draws less parasitic power than a 30% KOH circuit. The number that moves over a stack's life is the degradation rate: at 0.67 mV/h on a cell running near 1.9 V, energy per kilogram climbs a few percent within a thousand hours.

## Examples
Enapter is the only supplier shipping AEM in volume. Its approach is mass-produced 2.4 kW modules rather than one large stack: the EL 4 makes 500 NL/h at 99.9% purity, and the AEM Nexus 1000 packs 420 modules around a common balance of plant for 921.5 kW. Protium's installation in the UK is among the larger fielded arrays. On materials, Ionomr Innovations sells Aemion and Aemion+ membranes, Versogen sells its PiperION line, and Dioxide Materials' Sustainion is used in CO2 electrolysis as well as water. Alchemr is a US developer working on the stack itself.

## Economic profile
The cost argument for AEM is a bill-of-materials argument: strip out iridium, platinum, and titanium, and the stack should eventually land nearer alkaline's cost than PEM's while behaving like PEM. Nothing on the market demonstrates that yet, because the volumes are small and modular manufacturing carries its own overhead. If you are building a business here, the value is in the membrane and ionomer rather than the system, since a durable membrane is the scarce part and every stack builder needs one. For a buyer, the honest position is that AEM is not yet a procurement option above a few MW, and the thing that would change that is a published multi-thousand-hour degradation curve from a fielded unit, not another announcement of a record current density.

## Videos

- https://www.youtube.com/watch?v=Zr_YOXh9l8c — AEM Electrolysis Technology | Evonik (Evonik Industries, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=t8j1O7BVEKI — Enapter AEM electrolyser EL 2.1 (Enapter, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=KCeM8yFPA1I — Green Hydrogen using anion exchange membrane (AEM) electrolysis of water (SolFinder Research, 4 minutes, 5k+ views)

## Further reading

[Recent Advances and Challenges in Anion Exchange Membranes Development/Application for Water Electrolysis: A Review (Membranes)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11051812/) · [Elucidating the Degradation Behavior of a 25 cm2 Pure-Water-Fed Non-Precious Metal Anion Exchange Membrane Water Electrolyzer Cell (Small)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12781622/)
