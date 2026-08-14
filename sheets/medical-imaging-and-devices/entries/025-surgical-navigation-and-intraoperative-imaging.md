---
number: 25
name: Surgical Navigation and Intraoperative Imaging
part: 5
group: Interventional & radiotherapy
uses: [guide]
invasiveness: [ext]
capex: high
regclass: c2
maturity: grow
---

## Description
Navigation puts a preoperative CT or MRI into the same coordinate frame as the patient on the table, then shows where the instrument tip sits inside that volume. Two tracking technologies do the measuring. Optical tracking uses a stereo infrared camera watching retroreflective spheres on rigid bodies clamped to the instrument and to the patient, and is good to a few tenths of a millimeter as long as nothing blocks the line of sight. Electromagnetic tracking puts a field generator near the patient and a tiny coil in the instrument tip, works around corners and inside the body, and is good to roughly half a millimeter to a millimeter unless ferromagnetic metal distorts the field. Neither tracker is the limiting error. The limiting error is registration, which means matching the image volume to the physical patient by touching fiducials or anatomic landmarks or by surface-matching a scanned contour, and everything after that inherits whatever error the registration started with.

## Strengths and weaknesses
Navigation lets a surgeon operate confidently where the anatomy is hidden or destroyed, which is why revision sinus surgery, skull base work and percutaneous spinal fixation adopted it early, and it cuts fluoroscopy dose for the whole room. The failure mode is that navigation error is silent. The screen always draws a crosshair somewhere, whether or not the registration is still valid, and in brain surgery it stops being valid almost immediately: target registration error measured against preoperative MRI runs about 5.9 mm before the dura is opened, 6.2 mm after dural reflection and 7.5 mm after resection has started. Reregistering to an intraoperative ultrasound sweep pulls that back to about 2.7 mm early in the case and 4.2 mm after dural opening, and one series reported mean extent of resection rising from 75.9% to 86.8% with intraoperative ultrasound in use. Bumping the reference array, or moving the patient relative to it, invalidates everything without any warning on the display.

## When to use
Use navigation when the target is not visible and the consequences of missing it are severe: pedicle screws in deformed spines, skull base tumors, revision sinus surgery, biopsy of a deep lesion. Verify the registration against a known landmark before you trust it, and re-verify after any bump to the array, because the display gives you no other way to know. If the anatomy moves during the operation, stop trusting the preoperative scan and update it, with intraoperative ultrasound if you want cheap and fast or intraoperative MRI if you need the same contrast you planned on. If all you need is confirmation that the hardware ended up where you intended, a single intraoperative 3D scan at the end of the case is much cheaper than navigating the whole procedure. Do not buy an intraoperative MRI suite for volume you do not have, since the room is unavailable for ordinary surgery whenever the magnet is in use.

## Key numbers
Optical trackers accurate to a few tenths of a millimeter, electromagnetic trackers to roughly 0.5–1 mm · registration error dominates, not tracker error · target registration error against preoperative MRI about 5.9 mm pre-dura, 6.2 mm post-dura, 7.5 mm after resection begins · intraoperative ultrasound reregistration returns it to about 2.7 mm · extent of resection 86.8% with intraoperative ultrasound against 75.9% without · navigation station a few hundred thousand dollars, an intraoperative MRI suite several million plus the shielded room

## Examples
Medtronic StealthStation with the O-arm mobile CT; Brainlab Curve and Cirq; Stryker Q Guidance; 7D Surgical's machine-vision registration using visible light instead of a scan; NDI Polaris optical and Aurora electromagnetic trackers, which sit inside most of the above; Augmedics xvision, a head-mounted display that draws the trajectory over the surgeon's view of the spine.

## Economic profile
Navigation is rarely bought as a standalone product. Implant vendors place stations and hand out the disposable arrays and clamps because the navigation only works with their instruments, so the station is a channel lock on the screws and cages, in the same pattern as orthopedic robotics. A station that would list at a few hundred thousand dollars often arrives at no separate charge, which is why a hospital switching implant vendors usually finds it is switching navigation systems too. The buyer gets no revenue for using it: the US add-on codes for stereotactic computer-assisted navigation pay the surgeon a small amount and leave the hospital's inpatient DRG payment unchanged, so the business case is fewer revisions, less radiation, and shorter cases. Intraoperative imaging is a different purchase, because it is real capital with an opportunity cost. A mobile intraoperative CT is roughly the price of a fixed imaging room and gets used across many services, while an intraoperative MRI suite costs several million dollars plus a shielded operating room and needs a steady flow of glioma and epilepsy cases to be worth the floor space. Intraoperative ultrasound is the outlier: a probe and a tracking bracket cost a fraction of either, and they recover most of the accuracy the preoperative scan loses.

## Videos

- https://www.youtube.com/watch?v=78TBf6lNTM4 — Surgical Navigation System | Biomedical Engineers TV | (Biomedical Engineers TV, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=3M0ZDI7XsA8 — Using Intraoperative MRI During Brain Surgery (UTMBHealth, 2 minutes, 5k+ views)

## Further reading

[Brain Shift in Neuronavigation of Brain Tumors: An Updated Review of Intra-Operative Ultrasound Applications (Frontiers in Oncology)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7897668/) · [Performance of image guided navigation in laparoscopic liver surgery – A systematic review (Surgical Oncology)](https://discovery.ucl.ac.uk/10132422/1/1-s2.0-S0960740421001262-main.pdf)
