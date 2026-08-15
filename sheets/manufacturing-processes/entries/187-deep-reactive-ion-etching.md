---
number: 187
name: "Deep reactive-ion etching"
part: 5
group: "Semiconductor & Microscale"
materials: [semi]
volumes: [high, cont]
tooling: high
---

## Description

Alternating etch and passivation steps create deep high-aspect-ratio structures.

## Strengths and weaknesses

Enables deep, nearly vertical silicon features. Sidewall scalloping, cost, process complexity, and material limitations remain concerns.

## When to use

Use DRIE when silicon has to be etched tens to hundreds of microns deep with near-vertical walls and aspect ratios of 10:1 to 30:1 or beyond (through-silicon vias, MEMS proof masses, comb drives, microphone diaphragms, and through-wafer release etches). No other process combines that depth with lithographic lateral precision and orientation independence. Budget for slow, single-wafer processing on expensive ICP tools. If surfaces matter optically or fluidically, you also have to manage the Bosch process's periodic sidewall scallops (typically 100–500 nm), and across mixed feature sizes you have to watch aspect-ratio-dependent etch lag. For shallow features under ~20 µm use standard RIE. If angled sidewalls and crystal-plane geometry are acceptable and cost dominates, KOH or TMAH wet etching is far cheaper. DRIE is essentially a silicon process; glass and compound semiconductors need other chemistries.

## Key numbers

Etch depth from tens of microns to through-wafer at 500–775 µm · aspect ratios 10:1 to 30:1 routinely, past 50:1 with tuned recipes · etch rate 2–10 µm/min, dropping in narrow trenches · Bosch sidewall scallops 100–500 nm · selectivity 50–100:1 to photoresist and 100–200:1 to oxide masks · single-wafer ICP tools roughly $500k to $2M.

## Examples

MEMS sensors, microphones, through-silicon vias.

## Economic profile

Tools are roughly $500k to $2M and the process is slow. At 2–10 µm/min, etching through a 500–775 µm wafer takes an hour or two, and longer in narrow trenches where the rate drops. Throughput is the whole economic problem, which is why DRIE stays a MEMS and advanced-packaging process rather than a mainstream one. It is used where the geometry is impossible any other way, and parts that need it carry prices that absorb the tool time.

## Videos

- https://www.youtube.com/watch?v=QrtyFrndPIA — Deep Reactive Ion Etching system - PlasmaPro 100 Estrelas - Oxford Instruments (Oxford Instruments, 2 minutes, 1k+ views)
- https://www.youtube.com/watch?v=es_L5_ZCPfA — ECT 362|EC465MEMS|Module 5| Deep Reactive Ion Etching(DRIE) (sifna shajahan, 6 minutes, 5k+ views)

## Further reading

[DRIE and the Bosch Process (Oxford Instruments)](https://plasma.oxinst.com/technology/deep-reactive-ion-etching) · [Bosch and Cryo ICP-RIE for Silicon (Caltech KNI Lab)](https://lab.kni.caltech.edu/DRIE:_Bosch_&_Cryo_ICP-RIE_for_Silicon)
