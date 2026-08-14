---
number: 30
name: Integrated Bridge and E-Navigation
part: 6
group: Digital & autonomy
applies: [new, retro]
emissions: none
segments: [cont, bulk, tank, gas, roro, off]
capex: low
maturity: std
---

## Description
An integrated bridge system puts the ship's navigation sensors and controls on one network and one set of workstations, so the officer of the watch reads radar, electronic chart, position, heading, depth, speed and autopilot from the same console instead of six separate boxes. The core is ECDIS, the electronic chart display and information system, which SOLAS made mandatory on a phased schedule between 2012 and 2018 and which now carries the passage plan, the safety contour and the depth and crossing alarms. Around it sit radar with automatic tracking, AIS (mandatory on cargo ships over 300 GT in international trade since the end of 2004), a GNSS receiver, a gyro or fiber-optic compass, an echo sounder, a voyage data recorder, and track control that steers the planned route. E-navigation is the IMO's program to harmonize all of that and to connect it to shore services: the Strategy Implementation Plan defines five solutions covering bridge design, standardized reporting, equipment reliability, graphical presentation of information received over communications links, and improved vessel traffic service communication. The chart data itself is moving from the old S-57 format to the IHO's S-100 model, which lets bathymetry, currents, ice and route information layer onto the same display.

## Strengths and weaknesses
One console with one interaction style reduces the number of ways a watchkeeper can misread the situation, and route monitoring against a planned track catches errors a paper chart never would. The equipment is also cheap relative to the ship, which makes it the easiest safety upgrade on this sheet to justify. The failure modes are real and well documented. Alarm flooding is the classic one, where an integrated system generates so many alerts that the crew silences them as routine, which is why IMO wrote a separate bridge alert management standard. ECDIS-assisted groundings recur in accident reports when the safety contour or the depth alarms were set wrong or switched off, so the display's authority exceeds its reliability. And nearly everything on the bridge ultimately depends on GNSS: jamming and spoofing are now routine across the Baltic, the eastern Mediterranean and the Black Sea, and a spoofed position propagates into the chart, the AIS transmission, and the autopilot at the same time.

## When to use
Specify a full integrated bridge on any newbuild, since the incremental cost over separate units is small and the wiring is decided once. On an existing ship, retrofit ECDIS and radar to a common workstation at a scheduled drydock, and treat crew training as the larger half of the budget, because ECDIS type-specific familiarization is where most of the accident reports point. Set the safety contour, safety depth and alarm limits as a fleet standard rather than leaving them to each watchkeeper, and audit them, because a ship-by-ship setting is how the wrong contour survives a whole voyage. Keep an independent position check that does not use GNSS, whether radar fixes, a terrestrial system or an inertial unit, and expect to use it in the areas where jamming is now normal. If the fleet is small and the ships are old, buy standalone ECDIS and radar rather than an integrated suite, since the integration payoff needs a bridge team trained on it.

## Key numbers
ECDIS carriage phased in under SOLAS between 2012 and 2018 · AIS mandatory on cargo ships over 300 GT in international trade since the end of 2004 · five e-navigation solutions in the IMO Strategy Implementation Plan · chart data moving from S-57 to the IHO S-100 model · GNSS jamming and spoofing now routine across the Baltic, Mediterranean and Black Sea · capital cost is small next to a hull, which is why this is the cheapest safety upgrade available.

## Examples
ECDIS and integrated bridges from Furuno, Wärtsilä, Kongsberg, JRC and Raytheon Anschütz; the IHO S-100 Universal Hydrographic Data Model and the S-101 electronic navigational chart specification built on it; VDES, the VHF Data Exchange System extending AIS to two-way data; IMO's bridge alert management performance standard; the UK Marine Accident Investigation Branch's series of ECDIS-assisted grounding reports; Baltic Sea GNSS interference reporting by national maritime administrations.

## Economic profile
This is the rare item on a ship's specification where the hardware is cheap and the training is expensive. An integrated bridge is a small fraction of a newbuild price, well under a percent on a large merchant ship, and the recurring cost sits in chart licenses, software maintenance, and type-specific ECDIS training for every officer who joins. Chart data is a subscription business: hydrographic offices sell electronic navigational charts through regional coordinating centers, and a worldwide folio for a tramp trader costs real money every year, which is why some owners buy regional coverage and update it per voyage. The vendors make their margin on the service contract rather than the box, since a bridge suite has a 15-year life and a software support agreement that runs the whole time. For a buyer, the number worth calculating is not the purchase price but the cost of a single grounding, because hull and machinery deductibles alone run into the millions and the cheapest control available is a correctly configured alarm setting.

## Videos

- https://www.youtube.com/watch?v=R8DcFEe3KsM — ECDIS and Other Connected Navigational Equipment (Camote XPrez, 6 minutes, 50k+ views)
- https://www.youtube.com/watch?v=3Ahwu9bhlGg — Navigation Equipment and Resources Used Onboard in a Modern Ships (Part 1) (Marine Knows, 8 minutes, 50k+ views)

## Further reading

[E-navigation (International Maritime Organization)](https://www.imo.org/en/OurWork/Safety/Pages/eNavigation.aspx) · [GNSS Jamming and Spoofing Situational Awareness Maps (TransNav, International Journal on Marine Navigation and Safety of Sea Transportation)](https://www.transnav.eu/files/GNSS_Jamming_and_Spoofing_Situational_Awareness_Maps,1664.pdf)
