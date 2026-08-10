---
number: 196
name: "Wafer dicing and singulation"
part: 5
group: "Semiconductor & Microscale"
materials: [semi]
volumes: [high, cont]
tooling: low
---

## Description

Finished wafers are separated into individual dies by saw, laser, plasma, or stealth dicing.

## Strengths and weaknesses

Mechanical sawing is mature and inexpensive; laser and plasma methods support thinner wafers and narrower streets. Chipping, kerf loss, debris, and thermal damage can reduce yield.

## When to use

Default to blade sawing. For standard-thickness silicon with streets of 50 µm or more it is the cheapest, best-understood option. Switch to stealth (laser-internal) dicing for thin wafers below roughly 100 µm, for memory and stacked-die products where edge chipping costs too much yield, and for dry processes where cooling water would damage MEMS. Use ablation lasers for hard or brittle materials like SiC and glass, where blades wear fast. Plasma dicing is worth its cost when die are tiny and numerous, because narrow streets and simultaneous singulation of the whole wafer reclaim several percent of area and improve die strength. Avoid blade sawing on cantilevered or released MEMS structures and on wafers where microcracks would propagate in service. Choose the singulation method before street width is frozen in layout.

## Key numbers

Blade kerf 20–50 µm, needing streets of at least 50 µm, while stealth and plasma dicing work with 5–20 µm streets · blade feed 20–100 mm/s, while plasma singulates a whole wafer in 10–30 minutes regardless of die count · wafer thickness above 100 µm for blades and 20–100 µm for stealth dicing · front-side chipping under 20 µm on a well-set blade, near zero with stealth or plasma · die break strength roughly 300–500 MPa after sawing versus 700–1,000 MPa after plasma dicing.

## Examples

Logic chips, sensors, MEMS, power devices.

## Videos

- https://www.youtube.com/watch?v=Jh4uJZR_OYs — [Eng Sub] Wafer Sawing Process: Blade saw, Laser saw, Plasma saw (Semicon Talk, 4 minutes, 10k+ views)
- https://www.youtube.com/watch?v=GzHk1PpFAUg — microDICE - Wafer dicing system for SiC (3D-Micromac AG, 4 minutes, 50k+ views)
- https://www.youtube.com/watch?v=luGmSikiJvY — Wafer Sawing Overview Animation (Semitracks Inc., 1 minute, 10k+ views)

## Further reading

[Dicing Application Library (DISCO)](https://www.disco.co.jp/eg/solution/library/index.html)
