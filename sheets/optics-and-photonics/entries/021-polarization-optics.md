---
number: 21
name: Polarization Optics
part: 4
group: Modulation & scanning
band: [uv, swir]
apps: [comms, metro, mfg, sense]
form: comp
cost: u1k
maturity: mature
---

## Description
Polarization is the orientation of the light's electric field, and a small set of components controls it. Polarizers pass one orientation and reject the other. Waveplates retard one axis relative to the other, turning linear into circular polarization or rotating linear by a chosen angle. Faraday rotators use a magnetic field in a glass to rotate polarization in a direction that does not reverse when the light comes back, which is what makes an optical isolator possible: a one-way valve for light.

## Strengths and weaknesses
Isolators are what stop a laser from being destabilized or destroyed by its own reflected light, which in high-power and single-frequency systems is not optional. Polarization control also makes beam combining and switching possible without loss, since two polarizations can share a path and be separated cleanly. The costs are wavelength and power. Waveplates are wavelength-specific and temperature-sensitive, isolators need a strong permanent magnet and a Faraday material with real absorption, and at high power that absorption causes thermal lensing and depolarization inside the isolator itself.

## When to use
Put an isolator immediately after any laser whose output can see a reflective target, which includes essentially all fiber lasers, single-frequency sources, and amplifier chains. Use polarizing beamsplitters and waveplates whenever you need lossless combining or switching, and to build variable attenuators that do not change beam pointing. Specify components at the working wavelength rather than a nearby one, and for high-power isolators ask about thermal depolarization at your average power, not just the small-signal isolation.

## Key numbers
Isolation typically 30–40 dB for a single stage, 50–60 dB for a double stage · insertion loss around 0.5–1 dB · waveplates are specified at one wavelength and drift with temperature · Faraday rotators need a strong permanent magnet, which sets the size · high average power causes thermal depolarization and reduces isolation.

## Examples
Isolators protecting every fiber laser and telecom transmitter; polarizing beamsplitters combining two diode bars into one beam; quarter-wave plates converting to circular polarization so that reflected light returns in the orthogonal state; polarization-maintaining fiber in interferometric sensors.

## Videos

- https://www.youtube.com/watch?v=G9kl6-lRHNs — Optics: Optical isolator | MIT Video Demonstrations in Lasers and Optics (MIT OpenCourseWare, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=JPKo9nQV1kE — Faraday Isolator - TDTR Short Course (Joseph Feser, 6 minutes, 1k+ views)
- https://www.youtube.com/watch?v=tueywXYpVsk — Optics. Faraday effect (Physics with Andrés Aragoneses, 5 minutes, 5k+ views)

## Further reading

[Faraday Isolators (RP Photonics Encyclopedia)](https://www.rp-photonics.com/faraday_isolators.html)
