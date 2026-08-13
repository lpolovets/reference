---
number: 31
name: Distribution Voltage Regulation
part: 7
group: Distribution & edge
voltage: [mv, lv]
roles: [volt, deliv]
lead: fast
siting: exist
maturity: mature
---

## Description
Voltage falls along a loaded feeder and has to stay inside a legal band, typically 114–126 V on a 120 V nominal service in North America. Utilities hold it there with three tools: load tap changers on the substation transformer, step voltage regulators partway down long feeders, and switched capacitor banks that raise voltage by supplying reactive power. All three were designed for one-way flow from substation to customer. Rooftop solar reverses that on sunny afternoons, and voltage can now be highest at the far end of the feeder rather than the near end.

## Strengths and weaknesses
The conventional kit is cheap, robust, and universally understood, and tap changers have decades of operating life. The weakness is that mechanical devices operate in discrete steps and wear out with use: a regulator rated for a few hundred thousand operations will not survive following a cloudy day's solar output minute by minute. Smart inverters solve that from the other end, absorbing or supplying reactive power continuously in response to local voltage with no moving parts, but their settings interact, and a feeder where every inverter fights the tap changer is a real and documented failure mode.

## When to use
Use tap changers and regulators as the backbone everywhere, and add capacitors for the reactive component of load. Turn on smart inverter volt-VAr functions once distributed generation is high enough to cause reverse flow, and coordinate the settings centrally rather than device by device. Where a feeder is long and rural, a regulator remains the practical answer. Where the problem is a dense cluster of rooftop solar in a suburb, inverter-based control plus feeder monitoring usually beats adding another mechanical device that will now cycle far more often.

## Key numbers
Service voltage held to roughly 114–126 V on a 120 V nominal system · step regulators typically give plus or minus 10% in 32 steps · mechanical regulators rated for a few hundred thousand operations over a 30-year life · smart inverter volt-VAr response is continuous and has no wear mechanism · reverse flow from rooftop solar can raise end-of-feeder voltage above the substation's.

## Examples
Step voltage regulators on long rural feeders across North America; Hawaii's rules requiring advanced inverter functions after high rooftop solar caused voltage excursions; IEEE 1547-2018, which made volt-VAr capability a default expectation for new distributed generation; California Rule 21.

## Videos

- https://www.youtube.com/watch?v=I-h_9eMuT0c — Pole Top Equipment - Voltage Regulators [PREVIEW] (T&D PowerSkills, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=LrVknr-WvQM — Distribution Voltage Regulators and Capacitors Converted (Michael Jones, 6 minutes, 1k+ views)

## Further reading

[Microgrids (National Laboratory of the Rockies)](https://www.nlr.gov/grid/microgrids)
