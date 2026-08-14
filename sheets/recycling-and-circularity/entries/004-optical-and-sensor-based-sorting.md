---
number: 4
name: Optical and Sensor-Based Sorting
part: 1
group: Collection & sorting
output: closed
economics: profit
feed: mixed
drivers: [val, reg]
maturity: comm
---

## Description
A sensor-based sorter looks at every object on a fast belt, decides what it is, and knocks the ones it wants off the end with a puff of compressed air. The workhorse sensor is near-infrared spectroscopy over roughly 1,000–2,500 nm, where the overtones of C–H and O–H bonds give each polymer a distinct absorption pattern, so PET, HDPE, PP, PS and PVC look different to a line-scan spectrometer under halogen light. The belt runs at 2.8–3.5 m/s, the classifier decides in a few milliseconds, and a bank of valves at 6–12 mm pitch fires as the object crosses the discharge. A 2 m unit handles 4–8 tons an hour of containers and reaches 90–98% purity in one pass. The same machine frame takes other sensors for other jobs: color cameras for glass and for natural against colored HDPE, X-ray transmission for atomic number, which is how PVC is picked out by its chlorine and how cast aluminum is separated from wrought, and laser-induced breakdown spectroscopy or X-ray fluorescence for specific alloys.

## Strengths and weaknesses
One machine replaces roughly six to ten hand sorters and holds a purity a person cannot sustain across a shift, which is why a modern MRF has four to eight of them. The failure modes are specific and worth knowing by name. Carbon black absorbs across the whole near-infrared band, so a black item returns no usable spectrum and is invisible to NIR; the detectable black pigments that fix this exist but are not widely adopted. A full-sleeve PET bottle reads as the sleeve polymer, because NIR sees only the surface. Wet or food-soiled surfaces cut the signal, and a thin film lying flat on the belt is often read as the belt. There is also a fixed trade-off between purity and yield: tightening the classifier to raise bale purity always drops recovery, and reaching above about 95% purity usually takes a second pass or a dedicated cleanup unit rather than better settings.

## When to use
Use optical sorting whenever the price gap between a sorted bale and a mixed one is larger than the cost of running the pass, which is most of the time in plastics. Natural HDPE sells for $600–1,400 a tonne against $200–400 for colored, so a color camera is one of the fastest paybacks in a MRF. Use it when a rule sets the output spec rather than a buyer: the EU requires 25% rPET in PET bottles from 2025, food-grade rPET has to come from a positively sorted stream, and no amount of negative sorting reaches that grade. Go to X-ray transmission, XRF or LIBS instead of NIR when the job is metal against metal, since NIR reads nothing useful off a metal surface. Below roughly 1 ton an hour the fixed cost per ton is hard to carry, so hand sorting or a robotic cell is usually cheaper at that scale. If black plastic or sleeved bottles are a large part of the stream, fix that upstream in packaging design and treat the loss as a design problem rather than buying more sensors.

## Key numbers
NIR band roughly 1,000–2,500 nm · belt speed 2.8–3.5 m/s with valves at 6–12 mm pitch · throughput 4–8 tons per hour on a 2 m unit · purity 90–98% in a single pass · installed cost $150,000–400,000 per unit · compressed air 200–600 cfm, commonly 20–40% of a MRF's electricity bill · natural HDPE $600–1,400 a tonne against $200–400 colored, and sorted PET $200–500 against $0–100 for mixed rigids

## Examples
TOMRA AUTOSORT, Steinert UniSort, Pellenc ST, Sesotec and Bühler units on MRF, plastics-wash and e-waste lines; X-ray transmission sorters upgrading mixed nonferrous zorba by separating cast from wrought aluminum; LIBS sorters grading specific aluminum alloys at shredder yards, a route PNNL and Argonne have published test data on; color sorters at glass cullet plants separating flint, amber and green.

## Economic profile
Capital is $150,000–400,000 per installed unit, and the return comes entirely from the spread between a sorted bale and a mixed one. Take a 2 m sorter running 4 tons an hour for 2,000 hours a year, which is 8,000 tonnes through the machine. If it converts 1,000 of those tonnes from mixed rigids at $0–100 a tonne into sorted PET at $200–500, the gain is roughly $200,000–400,000 a year against a machine costing $150,000–400,000, so payback lands somewhere between one and two years. That calculation is done here rather than quoted, and the sensitive input is not the sensor but how much of the throughput actually changes grade. Operating cost is dominated by compressed air, which at 200–600 cfm per large unit is commonly 20–40% of a MRF's electricity bill and is the line most feasibility models leave out. In metals the same equipment is justified by a bigger spread: sorted wrought aluminum typically sells $300–600 a tonne above mixed zorba, which is enough to fund an X-ray or LIBS sorter at a shredder yard on volume that a plastics line could never reach. The regulatory demand matters as much as the price spread, because a recycled-content mandate with a date creates a buyer for high-purity output that would otherwise have none.

## Videos

- https://www.youtube.com/watch?v=KbZxEnoUZ5M — Sorting of plastic waste streams by near-infrared spectroscopy | Online course - MOOC (KU Leuven, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=mLya2NuY4Yk — AUTOSORT Optical Sorting Sensor Detailed Animation (Van Dyk Recycling Solutions, 1 minute, 10k+ views)

## Further reading

[Alloy Selective Optical Sorting of Mixed Post-Consumer Aluminum Scrap Streams (Pacific Northwest National Laboratory)](https://www.osti.gov/servlets/purl/3021470) · [SpectralWaste Dataset: Multimodal Data for Waste Sorting Automation (arXiv)](https://arxiv.org/abs/2403.18033)
