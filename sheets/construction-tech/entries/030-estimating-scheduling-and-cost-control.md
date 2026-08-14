---
number: 30
name: Estimating, Scheduling and Cost Control
part: 6
group: Delivery & commercial
where: design
building: [res, mf, com, ind, infra]
gains: [cost]
capital: low
maturity: std
---

## Description
An estimate starts with a quantity takeoff, prices each quantity with labor, material, equipment and subcontract rates, and then loads the total with general conditions, overhead and fee. Unit rates come from a firm's own historical cost data or from a published database such as RSMeans, adjusted by a city cost index. Estimates are classified by how complete the design is, and the accuracy range moves with it: a concept estimate carries a band on the order of minus 50% to plus 100%, and a bid-stage estimate on the order of minus 5% to plus 15%. The schedule is a critical path network: activities with durations and logic, a forward and backward pass producing early and late dates, and the longest path through the network, the one with no float, setting the completion date. Cost control then runs monthly, with the contractor billing against a schedule of values, the owner's representative certifying percent complete, and retainage of typically 5% to 10% withheld until the work is accepted.

## Strengths and weaknesses
The methods are mature and the arithmetic is rarely where projects go wrong. The failure is systematic. Flyvbjerg's data on transport infrastructure put average cost forecast inaccuracy at 44.7% for rail, 33.8% for bridges and tunnels and 20.4% for roads, and across the 70 years for which data exist that accuracy has not improved. The mechanism is selection rather than incompetence: optimism bias makes the internal build-up low, strategic misrepresentation makes the presented number lower still, and the projects that get funded are disproportionately the ones with the lowest numbers. Demand forecasts are worse than cost forecasts, with rail passenger forecasts averaging 51.4% below outturn and 84% of rail projects wrong by more than 20% in one direction or the other. The schedule carries a parallel problem, because it is a contract document as much as a plan: the baseline is submitted and accepted, updates drive progress payments, and delay claims are argued against it, so activity logic often gets written to protect a claim position rather than to describe how the work will be built.

## When to use
Use a bottom-up estimate to set the contract price and a reference class forecast to set the budget you commit to. Reference class forecasting ignores the project's own build-up and applies the distribution of outcomes from comparable completed projects, which is why the UK Department for Transport adopted optimism bias uplifts in 2004: 32% on a road scheme and 57% on a metro rail scheme at 80% confidence. If the work is genuinely novel and no reference class exists, say so and widen the contingency instead of pretending the build-up is precise. If you are the owner, hold contingency at your level and release it against defined triggers, because contingency buried in a contractor's price is defended rather than spent. On schedule, insist that the baseline reflects the intended means and methods, and re-baseline formally when the plan changes, since an accepted baseline nobody follows is the most expensive document on the job.

## Key numbers
Cost forecast inaccuracy averaging 44.7% for rail, 33.8% for bridges and tunnels, 20.4% for roads · no improvement across 70 years of data · UK optimism bias uplifts of 32% on roads and 57% on metro rail at 80% confidence · rail passenger forecasts averaging 51.4% below outturn · concept estimates roughly minus 50% to plus 100%, bid estimates roughly minus 5% to plus 15% · retainage typically 5% to 10%

## Examples
RSMeans data from Gordian for unit rates and city cost indexes; Oracle Primavera P6, Asta Powerproject and Microsoft Project for critical path scheduling; AACE International's recommended practices for estimate classification and forensic schedule analysis; the GAO Cost Estimating and Assessment Guide, which US federal programs are assessed against; HM Treasury's Green Book optimism bias guidance, applied by the UK Department for Transport from 2004.

## Economic profile
A general contractor's estimating department is a cost of sale. Hard-bid hit rates often run one in five to one in ten, so every winning bid carries the cost of the losing ones, which is one reason competitively bid fee lands in the low single digits as a percentage of cost. The larger number is contingency: 5% to 10% on a $100 million project is $5 million to $10 million, and who holds it changes behavior, since an owner's contingency tends to get spent on scope while a contractor's contingency inside a guaranteed maximum price gets defended when unspent amounts are shared or returned. Scheduling itself is cheap, with P6 seats at a few thousand dollars a year and a project scheduler at roughly $130,000 to $180,000 fully loaded. The tail is not cheap. A delay dispute on a large job turns into forensic schedule analysis and expert testimony, and the legal cost alone reaches seven figures before anyone argues about the work. Reference class forecasting costs almost nothing to apply and is applied rarely, because the party preparing the business case is usually the party that wants the project approved.

## Videos

- https://www.youtube.com/watch?v=cbCZbaIoBm4 — How To Estimate Jobs For Contractors | Estimating 101 (SoCal Contracting Academy, 7 minutes, 50k+ views)
- https://www.youtube.com/watch?v=rxGcV0tuxRU — What is the Critical Path Method (CPM)? (Online PM Courses - Mike Clayton, 5 minutes, 100k+ views)

## Further reading

[Cost Estimating and Assessment Guide: Best Practices for Developing and Managing Program Costs (U.S. GAO)](https://www.gao.gov/products/gao-20-195g) · [From Nobel Prize to Project Management: Getting Risks Right (Project Management Journal, via arXiv)](https://arxiv.org/abs/1302.3642)
