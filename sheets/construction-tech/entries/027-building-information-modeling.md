---
number: 27
name: Building Information Modeling
part: 6
group: Design & data
where: design
building: [mf, com, ind, infra]
gains: [quality, cost]
capital: low
maturity: std
---

## Description
Building information modeling means a 3D model in which every element carries data: a wall knows its type, fire rating and layer build-up, and a duct knows its size and which system it belongs to. Each discipline authors its own model in Revit, ArchiCAD, Tekla or a Bentley product, and those models are federated into one coordination model where geometry gets checked against geometry. Two standards carry most of the practical weight. IFC (ISO 16739) is the vendor-neutral exchange format, and the ISO 19650 series defines how information is named, exchanged and approved between parties. The AIA and BIMForum Level of Development scale, LOD 100 through 500, states how far a given element can be relied on: a duct at LOD 200 is a placeholder, and the same duct at LOD 400 is a fabrication instruction. Modeling hours scale with that number, so most of the argument on a project is about which systems have to reach LOD 350 or 400 and who pays for the extra detail.

## Strengths and weaknesses
The one well-evidenced benefit is clash detection. Running a federated model through Navisworks or Solibri finds hard conflicts between structure, ductwork, pipe, conduit and sprinkler before anyone installs them, and on a dense mechanical floor that is hundreds to thousands of conflicts. A conflict found in the model costs a coordinator an hour of work; the same conflict found in the field costs a crew a day, plus the rework and the trades queued behind it. The weakness is that a federated model is only as reliable as its worst discipline, so combining three models at LOD 200 with one at LOD 400 produces a clash report that is mostly noise, and teams then stop reading it. NIST's 2004 study put the cost of inadequate interoperability in the US capital facilities industry at $15.8 billion a year in 2002, and two-thirds of that fell on owners and operators during operation rather than on the people producing the data. That split explains the adoption pattern: coordination is well adopted because the contractor benefits directly, and asset handover data is thin because the contractor does not.

## When to use
Use BIM coordination on anything with dense services: hospitals, labs, data centers, and any building with a mechanical penthouse. If the project is a repetitive warehouse or a simple frame with little above the ceiling, coordination modeling usually costs more than the clashes it finds, and 2D overlay is enough. If you are the owner and you want a usable asset model at handover, write the information requirements into the contract at the start and pay for them as a separate line; asking for it at closeout gets you a file nobody maintains. If you are a subcontractor who fabricates from the model, model your own work to LOD 400 whether or not the contract requires it, because the spool sheets and cut lists come out of it. Do not read a national mandate as evidence that the model is being used: the UK required fully collaborative 3D BIM on centrally procured government work from 2016, and on most jobs the day-to-day use is still clash detection and drawing production.

## Key numbers
LOD 100 to 500 sets how far an element can be relied on · $15.8 billion a year in US interoperability cost in 2002 · two-thirds of it borne by owners and operators · UK required fully collaborative 3D BIM on central government projects from 2016 · IFC is ISO 16739, information management is ISO 19650 · plan errors and omissions ran 0.9% of award value on design-bid-build highway projects against 0.5% on best-value design-build

## Examples
Autodesk Revit, Graphisoft ArchiCAD, Trimble Tekla Structures and Bentley OpenBuildings as authoring tools, with Navisworks and Solibri for clash detection; the UK Government Construction Strategy of 2011, which set the 2016 requirement; Singapore's BCA electronic submission requirement; buildingSMART's IFC schema, ISO 19650 and COBie handover spreadsheets.

## Economic profile
The money goes to labor, not to software. A seat of Autodesk's AEC Collection runs a few thousand dollars a year, while a full-time VDC coordinator in the US costs roughly $120,000 to $180,000 fully loaded, and a large project carries several of them. Most of the detailed modeling is done by trade subcontractors, because sheet metal, pipe and sprinkler shops fabricate directly from their own models, so those firms capture the saving in shop hours and field labor. The designer pays to model in more detail and sees none of that saving, which is why design fees and model detail get negotiated separately from the coordination scope. Owners pay twice: once for the coordination that reduces their change orders, and once for a handover model that in most portfolios is never opened again, because facilities teams run a maintenance management system and a building automation system rather than a geometry model. FHWA's study of 291 US highway projects found change orders for plan errors and omissions at 0.9% of award value under design-bid-build against 0.5% under best-value design-build, which is roughly the size of the prize from better coordinated documents. On a $100 million job that is real money, and it is also small enough that a team under fee pressure cuts the modeling scope first.

## Videos

- https://www.youtube.com/watch?v=suNadRnHy-U — What Is BIM (Building Information Modeling)? (Autodesk Building Solutions, 3 minutes, 1m+ views)
- https://www.youtube.com/watch?v=l489GxRcB3E — Clash detection tutorial with Navisworks Manage 2023 in 10mn (How To BIM, 11 minutes, 50k+ views)

## Further reading

[Cost Analysis of Inadequate Interoperability in the U.S. Capital Facilities Industry (NIST)](https://www.nist.gov/publications/cost-analysis-inadequate-interoperability-us-capital-facilities-industry) · [Government Construction Strategy (Cabinet Office)](https://www.gov.uk/government/publications/government-construction-strategy)
