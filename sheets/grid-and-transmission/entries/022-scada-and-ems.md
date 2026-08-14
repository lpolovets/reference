---
number: 22
name: SCADA & EMS
part: 5
group: Protection & control
voltage: [mv, uhv]
roles: [vis, prot]
lead: yr
siting: fence
maturity: mature
---

## Description
SCADA is the telemetry layer: remote terminal units in substations report analog measurements and breaker states every two to four seconds and accept control commands back. The energy management system sits on top and turns those numbers into a picture. A state estimator reconciles redundant, slightly inconsistent measurements into a single consistent network model, contingency analysis runs thousands of "what if this line trips" cases against it, and automatic generation control adjusts generator setpoints to hold frequency and interchange. Everything a control room does rests on that estimated model being right.

## Strengths and weaknesses
It gives one operator a coherent view of thousands of devices, and it is the reason contingencies get caught before they happen rather than after. The weaknesses are refresh rate, model quality, and security. A four-second scan cannot see an oscillation that grows in a second, which is what synchrophasors were built for. State estimation depends on a network model that matches reality, and a mis-keyed line impedance or an unreported switch position quietly corrupts every downstream calculation, which is a documented contributor to the 2003 North American blackout. And a control system that can open breakers is a target, which is what happened in Ukraine in 2015.

## When to use
Every transmission operator runs SCADA and an EMS; the questions are scope and refresh. Extend telemetry down into distribution when distributed generation makes the feeder no longer a passive load, which is where an advanced distribution management system starts to pay. Add synchrophasor measurement when the concern is dynamics rather than steady state. Treat model maintenance as an ongoing operational job rather than a project, since a stale model degrades every tool built on it. Keep the security boundary strict: the operational network should not share a path with the corporate one.

## Key numbers
SCADA scan rates of two to four seconds, against 30–60 samples per second for synchrophasors · state estimation typically runs every one to five minutes · contingency analysis screens thousands of cases per cycle · a model error propagates silently into every result · NERC CIP standards govern the security perimeter in North America.

## Examples
Regional control rooms at PJM, MISO, and National Grid ESO; the 2003 Northeast blackout, where a failed alarm system left operators without a working picture for over an hour; the 2015 Ukraine attack, in which intruders operated breakers through the utilities' own control systems.

## Economic profile
Buying the system is the small part of this. An EMS is installed once, then depends on a network model that has to be kept matching the field forever. A mis-keyed line impedance or an unreported switch position corrupts every state estimate and contingency result downstream and raises no alarm, which is what makes model maintenance a permanently staffed job rather than a project line. Security has the same shape, since NERC CIP compliance in North America is an ongoing obligation on people and process rather than a box that gets installed. Justifying any of it is awkward because the benefit is an avoided outage, and the reference cases are events rather than figures: the 2003 blackout, where operators went over an hour without a working picture, and the 2015 Ukraine attack, where intruders operated breakers through the utilities' own control systems. Extending telemetry down into distribution is the one part with a conventional business case, and it starts to pay once distributed generation makes the feeder something other than a passive load.

## Videos

- https://www.youtube.com/watch?v=M2TUCd_hyHQ — What is SCADA In Power System ? Explained | TheElectricalGuy (Gaurav J - TheElectricalGuy, 13 minutes, 50k+ views)
- https://www.youtube.com/watch?v=Qw3enudB9Bc — Inside Georgia Power's Distribution Control Center (11Alive, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=XbZE0Xd5Rls — What is SCADA? (OnLogic, 3 minutes, 100k+ views)

## Further reading

[NERC Energy Management System Performance Special Assessment (2018-2019) (NERC)](https://www.nerc.com/globalassets/our-work/assessments/ems_special_assessment_march2021.pdf) · [Final Report on the August 14, 2003 Blackout in the United States and Canada: Causes and Recommendations (US-Canada Power System Outage Task Force)](https://www.energy.gov/sites/prod/files/oeprod/DocumentsandMedia/BlackoutFinal-Web.pdf)
