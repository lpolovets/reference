---
number: 32
name: Brain-Computer Interfaces
part: 6
group: Implants & active devices
uses: [treat, monitor]
invasiveness: [impl]
regclass: c3
maturity: res
---

## Description
A brain-computer interface records electrical activity from motor or speech cortex and decodes the intended movement or word from it, so a paralyzed person can drive a cursor, a robot arm or a speech synthesizer. The workhorse recording device is the Utah array, a 4 by 4 mm silicon block with 96 electrodes on shanks about 1 to 1.5 mm long that penetrate the cortical surface, wired out to a connector bolted to the skull. Decoding is a supervised learning problem: the participant attempts a movement, the system fits a model from firing rates to intended velocity or phoneme, and the model is retrained regularly as the recorded population drifts. Three device architectures are being tried at once. Penetrating arrays give the highest information rate and the most surgical risk, Neuralink's N1 puts 1,024 electrodes on 64 flexible polymer threads inserted by a robot and transmits wirelessly with no percutaneous connector, and two lower-risk approaches avoid penetrating cortex at all: Synchron threads a 16-electrode stent up the jugular into the vein running over motor cortex, and Precision Neuroscience lays a 1,024-contact thin film on the cortical surface. The recent results are real: speech has been decoded at 60 to 80 words per minute from participants who cannot speak. They also come from a very small number of people.

## Strengths and weaknesses
For someone with locked-in syndrome or high tetraplegia there is no competing technology, so the comparison is against no communication at all, which is why participants and reviewers both tolerate a high risk profile. The unsolved problem is that the electrodes do not last. Penetrating shanks provoke a foreign-body response that encapsulates them in glial scar, and in the largest pooled study of Utah arrays, covering 55 arrays and nearly nine years of recordings, the average usable recording lifespan was 622 days, with some arrays running past 1,000 days and one to 9 years. A device that stops working after two years and needs a craniotomy to replace is a research tool, not a treatment. The other honest limits are scale and setting: total human experience across every group is on the order of a hundred people, most sessions still involve engineers in the room, and decoders need periodic recalibration that a patient at home cannot perform.

## When to use
Treat this as a research program, not a purchase. If you are a clinician, the only route today is enrolling a patient in a trial under an investigational device exemption, and the right candidates are people with severe paralysis and intact cognition who can commit to years of sessions. If you are an investor, discount channel count and decoding accuracy, because both improve reliably and neither is the constraint; ask instead how long the arrays hold signal in the specific animals or people implanted, and how many were revised. If a company's plan depends on Medicare, ask which benefit category it expects to fall into, because there isn't one yet and the answer determines whether payment takes three years or ten. If the application is restoring communication rather than dexterous control, weigh an endovascular or surface device with fewer channels against a penetrating array, since a device that yields fewer bits but avoids opening the dura may be the better trade for that use.

## Key numbers
Utah array of 96 electrodes on a 4 by 4 mm base, shanks about 1–1.5 mm · Neuralink N1 with 1,024 electrodes on 64 flexible threads, Synchron's endovascular device with 16 · speech decoded at 60–80 words per minute · average usable recording lifespan of 622 days across 55 pooled Utah arrays, with some past 1,000 days and one to 9 years · total human experience on the order of a hundred people worldwide · no CPT code, no Medicare benefit category, and no list price, because nothing is for sale.

## Examples
The BrainGate consortium, which has run intracortical trials since 2004 and produced most of the published human results; Neuralink's N1, first implanted in a person in January 2024, whose initial participant lost usable channels when threads retracted; Synchron's Stentrode and its COMMAND trial; Precision Neuroscience's Layer 7 surface array, cleared by FDA in 2025 for use up to 30 days; Blackrock Neurotech, which supplies the Utah arrays nearly every academic group uses.

## Economic profile
There is no revenue in this field and no price to quote, so the economics are entirely about who funds the gap between a trial and a product. The field has raised well over a billion dollars in private capital, mostly against a story about restoring function to a few hundred thousand people with severe paralysis in the US, which is a real but small population and not one that supports a consumer price. The harder problem is that no payment pathway exists. A brain-computer interface does not fit cleanly into any Medicare benefit category — it is not durable medical equipment in the usual sense, not a prosthetic limb, and not an inpatient procedure with an existing code — and until it fits one, an approved device would have no rate attached. CMS's Transitional Coverage for Emerging Technologies pathway gave Breakthrough-designated devices a faster route to a national coverage determination, and was paused for new candidates in August 2026 in favor of the RAPID coverage pathway. Either one takes only a handful of devices a year and still ends in a coverage decision. A credible milestone would not be a higher channel count or a faster typing rate, since both improve steadily. It would be arrays holding usable signal for five years without surgical revision in a double-digit number of participants, systems that work unattended at home for weeks, and a named Medicare benefit category with a payment rate. Until those three exist, the sensible assumption is that this is a decade from a product, and that the electrode-materials work matters more to that timeline than the decoding work does.

## Videos

- https://www.youtube.com/watch?v=iTZ2N-HJbwA — How a Brain Implant and AI Gave a Woman with Paralysis Her Voice Back (UC San Francisco (UCSF), 5 minutes, 5m+ views)
- https://www.youtube.com/watch?v=DmqSYgM8QHc — Neuralink brain chip's first human patient. How does it work? | About That (CBC News, 13 minutes, 100k+ views)

## Further reading

[Implanted Brain-Computer Interface (BCI) Devices for Patients with Paralysis or Amputation - Non-clinical Testing and Clinical Consideration (FDA)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/implanted-brain-computer-interface-bci-devices-patients-paralysis-or-amputation-non-clinical-testing) · [Longevity and reliability of chronic unit recordings using the Utah, intracortical multi-electrode arrays (Journal of Neural Engineering)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8981395/)
