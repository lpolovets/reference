---
number: 16
name: Handheld Point-of-Care Ultrasound
part: 4
group: Ultrasound
uses: [diag, guide]
invasiveness: [ext]
capex: cheap
regclass: c2
maturity: grow
---

## Description
In a handheld scanner the probe is the whole machine: array, transmit electronics, beamformer and digitizer all sit in the housing, and a phone or tablet supplies the screen, the storage and the network. Butterfly's iQ took the furthest step by replacing the diced piezoelectric stack with a two-dimensional array of roughly 9,000 individually addressable silicon MEMS membranes fabricated directly on the CMOS that drives them, alongside more than 11,000 amplifiers and over 1,100 analog-to-digital converters on the same die, at 3 W or less. A conventional array is cut from a single block of piezoelectric ceramic and wired element by element, which is slow and expensive at fine pitch; a micromachined array is defined lithographically, so the same die spans the 1–10 MHz range that a cart needs three separate probes to cover. Most competitors kept piezoelectric arrays in a small housing, including Philips Lumify, GE Vscan Air, Mindray TE Air and Clarius, while Exo uses piezoelectric micromachined elements as a third route. Butterfly shipped in 2018 at a $1,999 list price and the current probes sit in the low thousands, against $20,000–250,000 for a cart.

## Strengths and weaknesses
The price and the form factor are the whole argument: a department can hand out twenty probes for what one mid-range cart costs, and the scan happens where the decision is made rather than after a transport and a wait. Image quality is the honest weakness. In a 2024 cross-sectional study, 35 point-of-care ultrasound experts scanned the same standardized patients with six handhelds and rated the images, and no single device came out best across right upper quadrant, cardiac apical four-chamber, and superficial neck and lung views. Chip heating and battery life cap continuous scanning, and small apertures cost penetration in larger patients. The probe is also useless without an active software license, so the buyer takes on a recurring cost that a cart does not carry.

## When to use
Buy handhelds when the clinical questions are close to binary and the value is speed: free fluid, bladder volume, gross left ventricular function, pericardial effusion, and finding a vein or a nerve before you put a needle in. Buy a cart instead when the study has to be a complete diagnostic exam, formally interpreted and archived, because that is what the payment and the medico-legal record are built around. If you are equipping trainees or a low-resource clinic, cost per learner is the deciding number and handhelds win outright. Budget for the subscription, the archive path into the hospital record, and a quality-assurance program before you count any revenue, since a scan with no stored image and no written interpretation cannot be billed under codes like 76705 for a limited abdominal study, which Medicare allowed at about $63 in an office in 2024, or 76942 for needle guidance at about $55. If someone pitches AI guidance as a substitute for training, read the trials first: in the study behind the FDA's first authorization for acquisition guidance, 8 nurses with no prior echocardiography experience produced diagnostic-quality images in 237 of 240 patients, but the endpoints were left ventricular size and function, right ventricular size and pericardial effusion, which is triage rather than a full echocardiogram.

## Key numbers
About 9,000 addressable MEMS elements on one die, with 11,000+ amplifiers and 1,100+ ADCs, at 3 W or less · one probe spans 1–10 MHz, replacing three cart probes · $1,999 launch price in 2018, current probes in the low thousands, against $20,000–250,000 for a cart · per-user software subscription in the hundreds of dollars a year · Medicare allowed roughly $63 for a limited abdominal ultrasound in an office and $55 for ultrasound needle guidance in 2024 · 237 of 240 novice-acquired studies rated diagnostic quality for three gross cardiac findings.

## Examples
Butterfly iQ3, Philips Lumify, GE Vscan Air, Mindray TE Air, Clarius, EchoNous Kosmos and Exo Iris; Caption Guidance, authorized through FDA De Novo DEN190040 in February 2020 as the first AI software to guide image acquisition, whose developer GE HealthCare acquired in 2023.

## Economic profile
This is the clearest case on the sheet of a semiconductor process displacing a hand-assembled one, and it changed the revenue model along with the bill of materials. A cart is a $20,000–250,000 capital sale with a service contract usually running 5–10% of price a year and a replacement cycle measured in the better part of a decade. A handheld is a low-thousands hardware sale plus a per-user subscription in the hundreds of dollars a year, so the vendor's revenue scales with the number of clinicians scanning rather than the number of machines, and the software tiers carry most of the margin because hardware at $2,000–3,000 does not. Wafer economics also mean unit cost falls with volume and yield, which a diced ceramic array does not do. The buyer's case is usually not a billing code, since focused exams pay $50–65 under Medicare and are frequently bundled into the visit, so purchases get justified on time saved, formal studies avoided, and fewer failed procedures. Incumbents answered by shipping their own handhelds rather than cutting cart prices, which is the rational move when the installed base is where the service revenue sits.

## Videos

- https://www.youtube.com/watch?v=MIsLyZKVqbw — Butterfly Network Puts 3D Ultrasound on a Chip with Cadence (EE Journal, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=CrzW-v_5BiQ — Butterfly IQ: Review of the portable handheld ultrasound (Ali Haider MD, 14 minutes, 100k+ views)

## Further reading

[Ultrasound-on-chip platform for medical imaging, analysis, and collective intelligence (Proceedings of the National Academy of Sciences)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8271708/) · [Point of Care Ultrasound (AIUM)](https://www.aium.org/practice-topics/point-of-care-ultrasound)
