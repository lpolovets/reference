---
number: 1
name: AESA radar
part: 1
group: Fire-control radar
functions: [search, track, id, term]
range: [med, long]
stealth: fair
jamming: good
cost: vhigh
---

## Description
An active electronically scanned array replaces the single transmitter and mechanical gimbal of a conventional radar with a few hundred to a few thousand transmit-receive modules, each with its own amplifier and phase shifter. Steering the beam becomes a matter of adjusting phase across the array, which takes microseconds instead of the seconds a mechanical scan needs. That speed changes what a radar can do: it can interleave search, track, weather, and datalink functions in the same second, form several beams at once, and hop frequency pulse to pulse across a wide band.

## Strengths and weaknesses
Agility is the main advantage. An AESA can hold tracks on dozens of targets while continuing to search, and pulse-to-pulse frequency agility makes it much harder to jam than a fixed-frequency set. Reliability is also better, because losing 10% of the modules degrades the array gracefully rather than failing it. Low-probability-of-intercept waveforms let it look without being obviously detected. The weaknesses are cost and heat. Modules are the expensive part, gallium nitride devices need serious cooling, and the scan volume is limited to roughly ±60° from boresight before the effective aperture shrinks too far, so wide coverage needs multiple faces.

## When to use
Pick an AESA for any modern fighter, air-defense, or naval fire-control application where multi-function operation and jam resistance justify the cost. If the requirement is simple wide-area surveillance at long range with a modest budget, a mechanically scanned or PESA radar delivers most of the detection performance for a fraction of the price. If the target set is low-observable, an AESA at X-band helps less than people expect — the shaping and coatings on stealth aircraft are optimized precisely against this band, so pair it with VHF/UHF surveillance or passive sensors rather than expecting the fire-control radar to solve it alone.

## Key numbers
X-band 8–12 GHz for fire control · a few hundred to a few thousand transmit-receive modules per array · detection roughly 150–250 km against a 1 m² target on fighter-class sets · beam steering in microseconds · scan volume about ±60° off boresight per face · module cost in the hundreds of dollars at volume, down from thousands · radar cost roughly $2M–10M per fighter set.

## How it is defeated
Digital radio frequency memory jammers replay coherent false targets that look real to the processor. Stand-in jamming from an expendable drone puts noise inside the main beam. Towed decoys pull the track off the aircraft. Against low-observable targets the radar simply does not detect at useful range. Emissions also give the platform away to any electronic support receiver, which usually detects the radar well before the radar detects the target.

## Examples
Raytheon APG-79 and APG-82, Northrop APG-77 (F-22) and APG-81 (F-35), Leonardo Captor-E (Typhoon), Thales RBE2-AA (Rafale), the SPY-6 and SPY-3 naval families, and the ground-based Patriot LTAMDS and Israeli EL/M-2084.

## Economic profile
Transmit-receive module cost dominates the radar. Gallium nitride replaced gallium arsenide over the past decade and roughly tripled power density while improving efficiency, which is the main reason AESA has moved down-market to trainers and drones. Module prices have fallen from thousands of dollars to hundreds at volume. That trend is what enables AESA in missile seekers and small UAVs, and it is the single most useful number to track when assessing anyone's radar roadmap.

## Videos

- https://www.youtube.com/watch?v=3LeKxA9YLsA — AESA radar technology | 3D Animation | Thales | C4Real (C4Real, 4 minutes, 100k+ views)
- https://www.youtube.com/watch?v=9WxWun0E-PM — What Are Phased Arrays? (MATLAB, 18 minutes, 100k+ views)
- https://www.youtube.com/watch?v=XbgoCdvGQQ0 — The insane engineering of the F-35 AESA radars! (Millennium 7 * HistoryTech, 17 minutes, 100k+ views)

## Further reading

[Phased Array Antenna (Radar Tutorial)](https://www.radartutorial.eu/06.antennas/Phased%20Array%20Antenna.en.html) · [Radar Principle (Radar Tutorial)](https://www.radartutorial.eu/01.basics/Radar%20Principle.en.html)
