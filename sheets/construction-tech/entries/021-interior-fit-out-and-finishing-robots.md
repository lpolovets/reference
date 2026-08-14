---
number: 21
name: Interior Fit-Out and Finishing Robots
part: 4
group: Envelope & services
where: site
building: [mf, com]
gains: [labor]
capital: low
maturity: early
---

## Description
Interior fit-out is partitions, drywall hanging and finishing, ceilings, doors, flooring, painting and casework, commonly 15–25% of a commercial building's construction cost and most of the schedule after the building is enclosed. It is the least automated trade group on a job site, and the machines that exist do one narrow slice each: applying and sanding joint compound, spraying paint on large flat walls, and, in demonstrations only, lifting and fixing gypsum board. The hardware is consistent — a mobile base with a lift column carrying a six- or seven-axis arm, a lidar or structured-light scanner that maps the surface, and an end effector that trowels, sprays or sands under force control. The hard problems are localizing against a blank wall that gives a scanner nothing to lock onto, holding contact force on a surface that is not flat, and everything within a few inches of another material. Finish quality is graded against the Gypsum Association's GA-214 levels 0 through 5, and Level 5 is judged by a person looking at the wall in raking light, so the machine cannot close the loop on its own acceptance test.

## Strengths and weaknesses
On a large, flat, unobstructed wall these robots work, and the gain that shows up first is not cost. Sanding joint compound generates a lot of respirable dust and is done overhead off a ladder or stilts, so handing the field of the wall to a machine takes a genuine exposure and ergonomics problem off a person. The weakness is coverage: a 2025 University of Sherbrooke prototype presented at ISARC does the first pass of compound sanding on vertical walls and needs two or three passes to cover most seams, with the fine detail still done by hand with a sanding block. Every corner, edge, outlet, ceiling transition and door surround stays manual, and on a typical floor plate that is a large share of the linear footage, so the hours saved are far smaller than the wall area suggests. The other weakness is duty cycle. The machine needs a clear, powered, swept floor, each reposition costs minutes of setup and re-localization, and it can only work during that trade's window, which is a few weeks per floor.

## When to use
Pilot a finishing robot where the floor plates are big and repetitive and the walls are tall and mostly unbroken: data centers, warehouses, hospitals, airport terminals, big-box retail. Skip it on residential and small-room commercial work, where the wall area per setup is small and the corner fraction is high, so the robot spends most of its time moving. If the objective is cost per square foot, expect roughly a wash today and plan the pilot as a measurement exercise rather than a saving. If the objective is silica and gypsum dust exposure, retaining finishers who are tired of overhead work, or getting a short-handed crew through more area, the case is much better and is the one most current deployments actually rest on. The real alternative is not a better robot but moving the work off site, since prefabricated wall panels, bathroom pods and pre-finished ceilings put the same surfaces on a horizontal bench with fixed tooling. If you do want on-site automation, start with the tasks that are already single-purpose and repetitive, such as layout marking, rather than with finishing.

## Key numbers
Interior partitions, ceilings and finishes commonly 15–25% of a commercial building's construction cost · GA-214 defines six levels of finish, 0 through 5 · a 2025 ISARC sanding prototype does the first pass only, two or three passes per seam · TAMIR sprayed paint at 0.14 min/m² of operator plus 0.52 min/m² of laborer against 6 min/m² by hand, in the laboratory · TAMIR covered about 5 m² of wall and 4 m² of ceiling per workstation · a US drywall finisher costs roughly $40–70/hour fully burdened · a single-task robot works only during that trade's window, a few weeks per floor.

## Examples
Canvas, whose drywall finishing robots have been run by union finishers on Bay Area projects; Okibo's plastering and painting robot; AIST's HRP-5P humanoid, which demonstrated fixing a sheet of gypsum board in 2018; Technion's TAMIR interior finishing robot, evaluated on full-scale experiments and reported at ISARC in 1992 by Rosenfeld, Warszawski and Zajicek.

## Economic profile
Interior trades are the largest labor pool on a building and have the worst measured productivity, which is why this category keeps getting funded, and the arithmetic is why it keeps not working. A US drywall finisher costs roughly $40–70 per hour fully burdened, so a machine has to displace two or three of them full time to pay back over a couple of years, and it does not: a human still walks behind it doing corners and details, and it sits idle between trade windows. Per-unit capital is modest, since the base is a cart and the arm is a commodity collaborative robot, so the constraint is utilization rather than capital, the same constraint that decides every other automation entry on this sheet. The business models that hold up are labor-inclusive, where the vendor sells finished square footage with its own trained operators and carries the utilization risk while the contractor buys a known unit rate. That matters because the drywall subcontractor is the party who would capture a labor saving inside its own bid, which is the right incentive, but the saving is not yet large enough to fund the machine, so most deployments are still paid for by venture capital or by an owner who wants to be the first to try it. The 1992 Technion experiments are the clearest warning here. Under laboratory conditions TAMIR sprayed paint using 0.14 minutes per square meter of operator time plus 0.52 minutes of a laborer, against 6 minutes per square meter by hand, which is a nine-fold labor advantage; it also had to be led by hand between workstations that each covered about 5 m² of wall and 4 m² of ceiling. Nobody paints buildings this way 35 years later, so the missing cost was in the parts of the job the experiment excluded, and that is still where it is.

## Videos

- https://www.youtube.com/watch?v=Q3FVKiu_kbc — Side by Side Comparison: Canvas vs. Traditional Drywall Finishing (Canvas, 3 minutes, 5k+ views)
- https://www.youtube.com/watch?v=zj_94spdXKE — Robots Are Taking Over Drywallers Jobs? Not Joking guys (That Kilted Guy DIY Home Improvement, 10 minutes, 10k+ views)

## Further reading

[GA-214-2022 Quick Reference Guide Levels of Finish (Gypsum Association)](https://gypsum.org/2019/04/ga-214-2017-quick-reference-guide-levels-of-finish/) · [Drywall finishing with collaborative robot arm in off-site construction (International Association for Automation and Robotics in Construction)](https://www.iaarc.org/publications/fulltext/204_Drywall_finishing_with_collaborative_robot_arm_in_off-site_construction.pdf)
