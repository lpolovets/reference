---
number: 26
name: Image Sensors
part: 5
group: Detectors
band: [uv, swir]
apps: [cons, sense, med, metro, def]
form: chip
cost: u100
maturity: mature
---

## Description
An image sensor is a two-dimensional array of photodiodes with readout electronics. CCDs shift accumulated charge across the chip to one amplifier, giving very uniform response; CMOS sensors put an amplifier in every pixel and read them out in parallel, which is faster, cheaper, and lower power. CMOS has won nearly everywhere. Modern devices are backside-illuminated so light does not pass through the wiring, and stacked, with the pixel array bonded onto a separate logic die.

## Strengths and weaknesses
The economics are extraordinary: a sensor with tens of millions of pixels costs a few dollars because phone volumes pay for the fab. Quantum efficiency above 80% and read noise around one electron make scientific CMOS competitive with cooled CCDs for most work. The limits are material and dynamic range. Silicon stops absorbing beyond about 1,100 nm, so short-wave infrared needs InGaAs arrays that cost a thousand times more per pixel. Rolling shutter distorts fast motion unless the sensor has a global shutter, and dark current still forces cooling for long exposures.

## When to use
Use a CMOS sensor for essentially all imaging in the ultraviolet through near-infrared. Choose scientific CMOS when read noise and speed matter together, and a cooled deep-well CCD only for very long exposures where its uniformity still wins. Specify global shutter if the scene or the camera moves quickly. Go to InGaAs only when the wavelength genuinely requires it, since the cost step is enormous, and consider whether an illuminator at a silicon-friendly wavelength would solve the problem instead.

## Key numbers
Silicon responds 200–1,100 nm; InGaAs arrays extend to 1,700 nm at roughly a thousand times the cost per pixel · quantum efficiency above 80% in backside-illuminated devices · read noise around 1 electron in scientific CMOS · pixel pitch from under 1 um in phones to 10–20 um in scientific sensors · dark current halves roughly every 6–8 °C of cooling.

## Examples
Sony's stacked backside-illuminated sensors in most smartphones; scientific CMOS cameras that displaced electron-multiplying CCDs in microscopy; InGaAs arrays for short-wave infrared inspection and surveillance; event cameras, which report per-pixel changes instead of frames.

## Economic profile
Phone volume pays for everything else. A sensor with tens of millions of pixels sells for a few dollars because the fab, the process, and the stacking technology were all developed for the phone market, and scientific, machine-vision, and automotive cameras are built on processes somebody else's volume already paid to develop. The cost cliff is at 1,100 nm. InGaAs arrays run roughly a thousand times more per pixel, partly because indium phosphide has nothing like silicon's manufacturing base, and partly because the array has to be bonded to a separate readout chip instead of being made monolithically. That ratio is large enough that the first question on any short-wave infrared design should be whether an illuminator at a silicon-friendly wavelength solves the problem, since changing the wavelength is usually cheaper than changing the detector material. For a company, competing on volume silicon sensors is not realistic, so the value sits in the SWIR gap, in the optics, or in what gets done with the image.

## Videos

- https://www.youtube.com/watch?v=FKJFIzDfUNE — Image Sensors Explained: How CCD and CMOS Sensors works? CCD vs CMOS (ALL ABOUT ELECTRONICS, 9 minutes, 100k+ views)
- https://www.youtube.com/watch?v=4dX2IsZDBfg — The Chips That See: Rise of the Image Sensor (Asianometry, 18 minutes, 100k+ views)
- https://www.youtube.com/watch?v=Csiv7-7ps40 — #743 Basics: How Image Sensors Work (IMSAI Guy, 15 minutes, 10k+ views)

## Further reading

[Image Sensors (RP Photonics Encyclopedia)](https://www.rp-photonics.com/image_sensors.html) · [A Review of the Pinned Photodiode for CCD and CMOS Image Sensors (Dartmouth Digital Commons)](https://digitalcommons.dartmouth.edu/facoa/2423/)
