---
number: 20
name: Photoacoustic and Diffuse Optical Imaging
part: 4
group: Optical imaging
uses: [diag]
invasiveness: [ext]
capex: mid
regclass: c3
maturity: res
---

## Description
Photoacoustic imaging fires a nanosecond laser pulse, typically 5–10 ns somewhere in the 680–970 nm window, into tissue. Hemoglobin, melanin or lipid absorbs it, heats by a few millikelvins, expands, and launches a broadband ultrasound pulse that an ordinary clinical ultrasound array picks up. The result has optical contrast, meaning it shows what absorbs light, at ultrasonic resolution and depth, and acquiring at several wavelengths separates oxygenated from deoxygenated hemoglobin, so the image is a map of blood oxygen saturation with no injected agent. Useful depth is about 3–5 cm, because skin exposure limits cap the pulse energy at roughly 20 mJ/cm² in the near infrared and light attenuates steeply below that. Diffuse optical methods give up on forming an image from unscattered light entirely: shine near-infrared light in at one point, collect it centimeters away, and fit a photon-diffusion model to recover bulk absorption and scattering, which yields spectroscopy with roughly 1 cm of localization rather than a picture. Pulse oximetry and cerebral tissue oximetry are the two members of that family that became routine clinical equipment, and both report a number rather than an image.

## Strengths and weaknesses
The appeal of photoacoustics is that it gets functional contrast, hemoglobin concentration and oxygenation, at depths where pure optical imaging has long since diffused into noise, and it does so on detection hardware that already sits in every hospital. The unsolved problem is quantification: signal amplitude scales with the local light fluence, and the fluence at depth depends on the tissue's own optical properties, which is exactly what you were trying to measure. That circularity is why oxygen saturation numbers from deep photoacoustic images are still not trustworthy, and no amount of better detection fixes it. Practical limits stack on top: tunable nanosecond lasers are large and expensive, pulse repetition rates constrain frame rate, and surface melanin absorbs a large share of the light before it gets anywhere. Diffuse optical methods have the opposite profile, cheap and wearable and safe, with resolution so coarse that they can report a trend at a fixed site and cannot localize a lesion.

## When to use
If you need oxygenation trends at one anatomical site and a single number is enough, use near-infrared tissue oximetry, which is commercial, inexpensive, and already used routinely in cardiac surgery and neonatal intensive care. If you are characterizing a breast mass at one of the few sites with the equipment, opto-acoustic imaging added to ultrasound is the single photoacoustic application with a US premarket approval, and everything else you read about is investigational. If you are building in this area, pick an indication where the current comparator is genuinely bad, because adding a modality on top of ultrasound only pays when it changes a decision ultrasound gets wrong, and in breast imaging the comparator is a cheap core needle biopsy that answers the question outright. If you are evaluating a company, ask which code it bills under and which trial supports the claim; without both, it is an instrument business selling to grant-funded labs, which is a real business but a much smaller one.

## Key numbers
Pulses of 5–10 ns in the 680–970 nm window · optical contrast at ultrasonic resolution, useful depth about 3–5 cm · skin exposure limited to roughly 20 mJ/cm² in the near infrared · diffuse optical localization about 1 cm · one US premarket approval for a photoacoustic imaging system, granted in January 2021 · research and clinical-research systems typically $150,000–500,000.

## Examples
Seno Medical's Imagio Breast Imaging System, approved under PMA P200003 in January 2021, which overlays opto-acoustic maps on B-mode ultrasound to help classify breast masses; iThera Medical's MSOT systems and FUJIFILM VisualSonics Vevo LAZR, both sold as research instruments; Medtronic INVOS and Edwards ForeSight cerebral oximeters, which are the diffuse-optical technology that actually reached the bedside; functional near-infrared spectroscopy and diffuse optical tomography of the breast, both still research.

## Economic profile
As of today this is an instrument business rather than a device business. Systems sell at $150,000–500,000 to research groups and academic medical centers, the buyer is a grant rather than a capital committee, the sales cycle follows funding cycles, and the worldwide installed base is in the hundreds. The bill of materials is dominated by the light source, since a tunable nanosecond optical parametric oscillator is a large share of system cost and most of its bulk, which is why nearly every roadmap points at pulsed laser diodes and LEDs that cost one to two orders of magnitude less and deliver far less pulse energy, trading depth for price. Detection is close to free by comparison, because a standard clinical ultrasound array works, so a photoacoustic front end can be added to a cart the hospital already owns. The one part of this family with durable clinical revenue is tissue oximetry, sold as a monitor with disposable sensor pads at tens of dollars each, which is a consumable model with predictable margins. For photoacoustics to become a device business it needs an indication where the alternative is invasive or unavailable, a pivotal trial, and eventually a Category I code; until then the honest description is that one product has an approval and the rest of the field is funded by research budgets.

## Videos

- https://www.youtube.com/watch?v=WHtmgv7eiZk — The Incredible Cancer-Detecting Potential of Photoacoustic Imaging | Lei Li | TED (TED, 7 minutes, 50k+ views)
- https://www.youtube.com/watch?v=sJ9ZWnvZkRI — Photoacoustic Imaging BIMA2016 (Turku Bioimaging, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=y_mTFjNN5dc — Functional Near Infrared Spectroscopy (fNIRS) Explained! | Neuroscience Methods 101 (Psyched!, 4 minutes, 10k+ views)

## Further reading

[Optical Imaging (National Institute of Biomedical Imaging and Bioengineering)](https://www.nibib.nih.gov/science-education/science-topics/optical-imaging) · [Clinical photoacoustic imaging (Photoacoustics)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7317224/)
