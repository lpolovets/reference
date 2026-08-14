---
number: 29
name: Generative and Computational Design
part: 6
group: Design & data
where: design
building: [mf, com, infra]
gains: [cost, carbon]
capital: low
maturity: early
---

## Description
Computational design means building the geometry with a script instead of by hand, so that changing a parameter regenerates the result. In practice that is Grasshopper running on Rhino or Dynamo running on Revit, and it is ordinary work on any project with repetitive or curved geometry. Generative design is the step beyond it: state an objective and a set of constraints, then let a solver search the option space. Two families do almost all the useful work. Topology optimization treats the structure as a continuum and iteratively removes material from lightly stressed regions, usually with the SIMP method, minimizing deflection for a fixed fraction of the original mass. Combinatorial search runs an evolutionary or physics-inspired algorithm over discrete options such as room layouts, unit mixes, column grids or crane and laydown positions, scoring each against travel distance, daylight, cost or area efficiency. Solve times run from minutes on a laptop to a few hours on a cloud job, which is cheap next to the engineering time to set the problem up.

## Strengths and weaknesses
It works when the objective is a single measurable number and the output is a buildable quantity. Topology optimization on one loaded component typically removes 20% to 50% of its mass at equal stiffness, and layout search on a site or a floor plate produces real reductions in travel distance and wasted area. The savings show up in material quantity, which is why the honest applications are structural: member sizing, slab thickness and reinforcement, truss geometry and connection nodes. Three things limit it. An optimized shape usually has to be redrawn as something a fabricator can actually cut and weld, and that fabrication premium eats the material saving unless the part repeats many times. The objective function is the hard part, and a solver pointed at a number nobody agreed on produces confident nonsense. And most of what is marketed as generative design in architecture is massing studies and facade patterns, which produces images that no downstream fabrication or estimating process consumes.

## When to use
Optimize anything that repeats: a floor plate poured 40 times, a panel type made 2,000 times, a node used at every truss joint. If the element is a one-off, the engineering hours to set up and check the optimization usually cost more than the material it saves, so size it conventionally. If you are chasing embodied carbon, start with the floor slabs, since they are usually the largest single share of a concrete frame's structural emissions, often around half. Use parametric modeling routinely for repetitive or curved geometry, because the payoff there is documentation time rather than optimization. If the thing you want cannot be written as a number a solver can compare, do not use generative search for it; you will get a gallery of options and no basis for picking one.

## Key numbers
20% to 50% of mass removed on a single optimized component at equal stiffness · floor slabs often around half of a concrete frame's structural embodied carbon · roughly 10,000 unique milled acoustic panels on the Elbphilharmonie · solve times from minutes to a few hours · Rhino perpetual license around $1,000 with Grasshopper included, Dynamo free with Revit · computational designer roughly $100,000 to $160,000 fully loaded

## Examples
Grasshopper on Rhino and Dynamo on Revit as the standard scripting environments, with generative design tools inside Revit and Fusion; the 88-line MATLAB SIMP code from the Technical University of Denmark, which is how most engineers first meet topology optimization; the Elbphilharmonie in Hamburg, whose roughly 10,000 unique acoustic panels were milled from a parametric model; the MX3D 3D-printed stainless steel footbridge in Amsterdam, whose form was developed in a parametric model and checked by structural analysis before printing.

## Economic profile
Software is almost free next to labor. A Rhino license is around $1,000 perpetual with Grasshopper included and Dynamo ships with Revit, while a computational designer costs roughly $100,000 to $160,000 fully loaded, plus the engineer of record's time to check and document whatever the solver produced. The saving lands in material quantity, so who keeps it depends entirely on the contract: under a lump-sum contract the builder keeps it, and under a guaranteed maximum price or cost-plus the owner does. The structural problem is on the design side. Architects and engineers are commonly paid a percentage of construction cost, so cutting 15% of the steel tonnage cuts the fee that paid for the analysis, and nothing in a standard agreement pays the designer for a saving the builder banks. That is the clearest reason optimization stays a specialist service bought project by project rather than a default step, and it is fixed only where the delivery model shares savings across parties.

## Videos

- https://www.youtube.com/watch?v=Fe64EMAt5zc — Computational Design vs. Generative Design vs. Parametric Modeling (Chaos Veras, 7 minutes, 50k+ views)
- https://www.youtube.com/watch?v=dWKMGYCynSA — What is Topology Optimization? (Altair, 2 minutes, 100k+ views)

## Further reading

[Efficient topology optimization in MATLAB using 88 lines of code (Technical University of Denmark)](https://orbit.dtu.dk/en/publications/efficient-topology-optimization-in-matlab-using-88-lines-of-code) · [Automated architectural space layout planning using a physics-inspired generative design framework (arXiv)](https://arxiv.org/abs/2406.14840)
