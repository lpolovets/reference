---
number: 10
name: Thermal Cameras
part: 3
group: Cameras
uses: [perception, safety]
range: [near, mid, far]
compute: med
adoption: common
cost: med
---

## Description
Thermal cameras see heat instead of light. Microbolometer arrays image long-wave infrared (8–14 µm), which everything above absolute zero emits, so they need no illumination at all. A pedestrian glows against a cold road at midnight, in fog, or through smoke, all conditions that defeat every visible-light sensor. Uncooled microbolometers made the capability affordable, and export regulations (thermal imaging is dual-use) still shape which resolutions and frame rates you can buy.

## Strengths and weaknesses
It sees warm-blooded life and machinery in zero light, smoke, dust, and most fog, it's passive and unjammable, and it doubles as a temperature-measurement instrument (overheating motors, battery fires). The weaknesses: resolution is low and the germanium optics are expensive. There's no texture or color to recognize things by, glass is opaque, and polished metal acts as a thermal mirror. Scene contrast collapses when everything equilibrates (rain-soaked scenes, 37 °C air), and frame rates are export-capped on many parts.

## When to use
Pick thermal when the job is finding warm things where light fails: pedestrian detection at night, search-and-rescue and firefighting drones, security patrol, and condition monitoring of motors, substations, and battery installations. A ~$200 Lepton-class module covers detection, while recognition-grade work needs $1k+ resolution and germanium optics. It is also the only camera that doubles as a thermometer. Avoid it as a general perception sensor, since it gives no color or texture, glass is a wall, and dawn/dusk crossover erases contrast. Pair it with a visible camera rather than replacing one, and check export caps on resolution and frame rate before designing it in.

## Key numbers
Wavelength 8–14 µm · resolution 160×120 on entry modules up to 640×512 and above · thermal sensitivity (NETD) typically under 50 mK · frame rate 30–60 Hz, or 9 Hz on export-capped parts · power draw roughly 0.15–1.5 W · unit cost about $200 for a Lepton-class module, $1,000 and up for recognition-grade resolution with germanium optics.

## Failure modes
Thermal crossover at dawn and dusk erases the contrast between targets and background. Reflective metal surfaces show the sky's temperature rather than their own. Glass blocks the view entirely. Sun-heated clutter creates false positives for any "warm object" logic. Uniformity drift requires periodic shutter-based recalibration, which blinds the camera for a moment each time. Low resolution merges adjacent objects at range.

## Examples
FLIR (Teledyne) Lepton/Boson modules, the dominant supplier; automotive night vision (Autoliv/Veoneer systems in premium cars), AEB-pedestrian research after high-profile nighttime failures, firefighting and SAR drones (DJI thermal payloads), battery-plant and substation monitoring robots.

## Economic profile
Leptons brought entry thermal to ~$200, but automotive-grade resolution is still a $1k+ story driven by germanium optics and regulation. A genuine volume driver (NHTSA's pedestrian-AEB night requirements pushing thermal into mainstream cars) could finally bring those costs down. In robotics it is a specialist worth carrying wherever robots share darkness with living things.

## Videos

- https://www.youtube.com/watch?v=__VED_DsX0g — Ask an Expert: What is a Microbolometer? (Sierra-Olympia Technologies, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=Rb_O1wv5UsM — #1486 Micro Bolometer Thermal Camera Sensor (IMSAI Guy, 15 minutes, 5k+ views)
- https://www.youtube.com/watch?v=ZSozrAIfigE — How Do Thermal Imaging Goggles Work? (SciShow, 3 minutes, 100k+ views)

## Further reading

[How Do Thermal Cameras Work? (Teledyne FLIR)](https://www.flir.com/discover/rd-science/how-do-thermal-cameras-work/) · [Choosing the Right Thermal Imager (Teledyne FLIR OEM)](https://oem.flir.com/learn/discover/choosing-the-right-thermal-imager-for-your-integrated-project/)
