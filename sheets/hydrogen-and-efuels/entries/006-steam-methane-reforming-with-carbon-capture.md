---
number: 6
name: Steam Methane Reforming with Carbon Capture
part: 2
group: Reforming
sector: [ref, chem, steel]
form: [gas]
carbon: part
maturity: comm
cost: low
---

## Description
Bolting carbon capture onto a steam methane reformer means choosing which of the plant's two CO2 streams to treat. The shifted syngas leaving the water-gas shift reactors is 15–20% CO2 at 20–30 bar, and the PSA tail gas is more concentrated still, so an amine or vacuum-swing unit on either stream recovers 90%+ of the carbon in it at low cost, because concentration and partial pressure are what set capture cost. The reformer furnace's flue gas is different: a few percent CO2, at atmospheric pressure, in a large volume of nitrogen. Capturing that too is what takes a plant from roughly half its carbon to 90%, and it roughly doubles the cost of capture per tonne. Every operating SMR retrofit in the world took the cheap half. That is why the technology's reputation and its published capture rates disagree so often: the equipment does hit 90%+ on the stream it treats, and the plant does not.

## Strengths and weaknesses
The strength is that it is a retrofit on proven equipment with a known cost, using amine or adsorption units that chemical plants have run for decades, and it is the cheapest low-carbon hydrogen available at scale today. The weakness is the ceiling. Because the furnace flue gas carries roughly a third of a reformer's CO2, a process-stream-only retrofit leaves 4–5 kg of direct CO2 per kg of hydrogen in the air, and once upstream methane production and transport are counted most operating plants land at 4–6 kg CO2e/kg. The failure mode is regulatory rather than mechanical: at 4–6 kg the hydrogen fails the EU's RFNBO ceiling of 3.38 and the US 45V cutoff of 4, so a plant built to capture "up to 90%" can be fully operational, meeting its own design spec, and still qualify for nothing. Capture also costs steam and power, which pushes gas consumption per kg up by a few percent.

## When to use
Choose an SMR retrofit when you already own a reformer, you have a CO2 offtake or storage site within reach, and the objective is a real emissions reduction at the lowest dollars per tonne. It is the best value in that framing and nothing else comes close. Do not choose it when the objective is a certificate. If your project needs to clear 3.38 kg CO2e/kg in Europe or 4 kg for 45V in the US, run the numbers on the flue gas capture as well before you commit, and if the answer is that you need 90%+ plant-wide, build an autothermal reformer instead (entry 007), because a purpose-built ATR gets there with one capture unit rather than two. As a rule of thumb, retrofit for tonnes and build new for qualification.

## Key numbers
Shifted syngas at 15–20% CO2 and 20–30 bar against a few percent in flue gas at 1 bar · 90%+ recovery from the process stream, roughly half to 60% of plant CO2 · most operating plants land at 4–6 kg CO2e/kg H2 · fails the EU's 3.38 ceiling and the US 45V cutoff of 4 · roughly $0.3–0.8/kg over unabated hydrogen.

## Energy and losses
Capture does not change the reforming itself: the plant still burns roughly 0.18 MMBtu of gas per kg of hydrogen. What it adds is regeneration steam and CO2 compression, typically a few percent on gas consumption and 0.1–0.2 kWh of electricity per kg of CO2 compressed to pipeline pressure, so the delivered hydrogen costs slightly more energy per kg than the unabated case. The carbon accounting is where the losses actually show. Starting from about 9 kg direct CO2 per kg of hydrogen, capturing the process stream removes 4–5 kg and leaves 4–5 kg going up the stack, and upstream methane emissions add another 1–2 kg on a typical gas supply, which is how a plant with a "90% capture" unit reports 4–6 kg CO2e/kg.

## Examples
Shell's Quest at the Scotford upgrader in Alberta is the longest-running reference: an amine unit on the reformers' process stream, designed for at least 1 Mt CO2/yr, which is about 80% of the hydrogen units' emissions and about 35% of the whole upgrader's. Between 2015 and 2019 it captured 5 Mt of the 7.5 Mt those reformers produced, an average of 67%. Air Products' Port Arthur project retrofitted two SMRs with vacuum swing adsorption on the process gas in 2012–2013, capturing about 1 Mt/yr at 95% purity and over 90% recovery from that stream, with the CO2 delivered to Denbury for enhanced oil recovery; the furnace flue gas is not captured. Both are the standard the technology is judged against, and both are process-stream-only designs.

## Economic profile
Capture adds roughly $0.3–0.8/kg to hydrogen made this way, and the spread inside that range is almost entirely about how much of the flue gas you take and what CO2 transport and storage costs in your basin. Published avoidance costs for SMR with conventional capture sit around $60–75 per tonne of CO2, which is why the 45Q credit and the EU carbon price are the variables projects are actually underwriting against rather than the hydrogen price. The commercial risk is that the qualification thresholds move faster than the plant can be modified: a retrofit is a 20-year asset priced against rules that have already tightened twice. If you are financing one, the question to answer first is what the plant does if the threshold drops to 2 kg, and the honest answer for a process-stream-only design is that it becomes an ordinary reformer with an expensive amine unit attached.

## Videos

- https://www.youtube.com/watch?v=txZCuFEtrjk — How is blue hydrogen produced? (Future Energy & Technology, 4 minutes, 5k+ views)
- https://www.youtube.com/watch?v=EyPI20h9kx0 — Carbon Capture & Storage - How It Works (Shell, 2 minutes, 100k+ views)
- https://www.youtube.com/watch?v=7j3OTLmaE-g — Carbon capture and storage research at the British Geological Survey (British Geological Survey, 2 minutes, 50k+ views)

## Further reading

[Quest Carbon Capture and Storage project: annual report, 2024 (Government of Alberta)](https://open.alberta.ca/publications/quest-carbon-capture-and-storage-project-annual-report-2024) · [Techno-Economic Evaluation of SMR Based Standalone (Merchant) Hydrogen Plant with CCS (IEAGHG)](https://ieaghg.org/publications/techno-economic-evaluation-of-smr-based-standalone-merchant-hydrogen-plant-with-ccs/)
