---
number: 2
name: X-Ray Tubes and Detectors
part: 1
group: X-ray & CT
uses: [diag]
invasiveness: [ext]
capex: mid
regclass: c2
maturity: std
---

## Description
Every X-ray system in this class is a tube and a detector with a patient in between. The tube boils electrons off a heated tungsten filament and accelerates them across 40–150 kV into a tungsten-rhenium anode, where under 1% of the beam energy becomes X-rays and the rest becomes heat. Heat is the whole engineering problem: the anode is a disc spinning at 3,000–10,000 rpm so the electron beam paints a track rather than a spot, and CT tubes store 3–8 million heat units and are cooled through the anode directly in some designs. The focal spot is 0.3–1.2 mm, and making it smaller sharpens the image while concentrating the same heat into less metal. On the other side, a modern flat-panel detector is either indirect (a columnar cesium iodide scintillator on an amorphous silicon thin-film transistor array, 100–200 µm pixels) or direct (an amorphous selenium photoconductor, 70–100 µm pixels, used where resolution matters most). Detective quantum efficiency is the figure of merit, and cesium iodide panels reach roughly 60–70% at low spatial frequency against roughly 25–35% for the storage-phosphor plates they replaced.

## Strengths and weaknesses
A tube is still the only practical way to make a bright, energy-tunable X-ray beam from wall power, and it is cheap relative to what it enables. Its weakness is that it is a consumable. A hard-working CT tube lasts roughly one to two years, and replacement runs $50–200k, which is usually the largest single line item inside a scanner's service contract; the failure modes are filament evaporation, bearing wear in vacuum where there is no ordinary lubricant, and anode cracking from thermal cycling. Detectors last much longer but a flat panel is fragile in portable use, and a replacement is $30–90k. Direct-conversion selenium gives excellent resolution and almost no light spreading, but selenium stops high-energy photons poorly, which is why it dominates mammography at 25–35 kV and is absent from general radiography at 120 kV.

## When to use
This is the component layer under every other entry in this class, so the decisions here are purchasing decisions. If you are specifying a general radiography room, buy indirect cesium iodide panels and expect detective quantum efficiency around 60–70%; if you are specifying mammography, you will get amorphous selenium whether you ask for it or not. If you still run computed radiography plates, convert now, because Medicare has cut the technical payment for computed radiography studies by 7% since 2018 and 10% since 2023, and film by 20% since 2017, so the payment system is funding the conversion for you. For CT, negotiate tubes into the service contract rather than buying them separately, since a scanner running 16 hours a day will consume several over its life. If you are sourcing components rather than systems, expect a short supplier list and long lead times.

## Key numbers
40–150 kV tube potential, under 1% of input energy converted to X-rays · anode 3,000–10,000 rpm, focal spot 0.3–1.2 mm · CT anode heat storage 3–8 million heat units · flat-panel pixels 100–200 µm indirect, 70–100 µm direct · detective quantum efficiency roughly 60–70% for cesium iodide panels against 25–35% for storage phosphor · CT tube replacement $50–200k, flat panel $30–90k · Medicare technical payment cut 7% for computed radiography from 2018 and 10% from 2023, 20% for film from 2017.

## Examples
Varex Imaging, the largest merchant supplier of tubes and detectors at roughly $800M of annual revenue; Canon Electron Tubes & Devices; Dunlee, the Philips tube business; the Siemens Straton rotating-envelope CT tube, which cools the anode directly instead of radiating through vacuum; Trixell, the Thales, Siemens and Philips flat-panel joint venture; amorphous selenium mammography detectors from Analogic Canada and Hologic.

## Economic profile
The tube and the detector are the two highest-value parts of any X-ray system and together often account for 30–50% of the bill of materials. Tubes are a consumable business: a CT tube sells for $50–200k and a busy scanner needs one every year or two, so across a 10–15 year service life the aftermarket is worth more than the original tube sale. That is a large part of why manufacturers write full-service contracts at 8–12% of capital a year with the tube included, and why the independent service market stays small. Detector panels work the other way. They usually last most of the system's life, so the margin is in the original sale and in the yield of large-area thin-film transistor manufacturing, which is a display-industry process run at tiny volume, and yield on a 43 cm panel is what sets the price. Varex is the one large independent supplier and sells into a market where its OEM customers keep bringing components in-house, so its volume tracks how much of the market the big four choose not to make themselves. For a startup, the practical consequence is that the components are available to buy but the cost curve belongs to someone else.

## Videos

- https://www.youtube.com/watch?v=oNpwl7hdzZo — Overview of the X-Ray Tube and Components (Clover Learning, 9 minutes, 100k+ views)
- https://www.youtube.com/watch?v=b-TKoCiHSVg — The Anode | X-ray Machine | X-ray physics #3 | Radiology Physics Course #10 (Radiology Tutorials, 8 minutes, 50k+ views)

## Further reading

[X-Ray Tube Heating and Cooling (Sprawls Resources)](https://www.sprawls.org/ppmi2/XRAYHEAT/) · [Diagnostic Radiology Physics: A Handbook for Teachers and Students (IAEA)](https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1564webNew-74666420.pdf)
