---
number: 19
name: Continuous Multi-Column Chromatography
part: 4
group: Chromatography
products: [protein, vaccine]
scale: [pilot, mid, large]
cogs: med
maturity: emerging
regulatory: validated
---

## Description
Instead of one big column running load, wash, elute, and regenerate in sequence, run three to six small columns in a loop so that one is always loading while the others do everything else. In periodic counter-current capture, the loading column is deliberately run past breakthrough and the product coming out the bottom is caught by the next column in line, so the resin gets used to its actual capacity instead of stopping at the point where breakthrough would start losing product. Batch capture typically achieves 60–80% resin utilization; periodic counter-current setups have reached about 95%. The bind-and-elute variant, multi-column counter-current solvent gradient purification, recycles the overlapping side fractions of a polishing separation back onto the next column instead of discarding them, which lets you take a much sharper cut without giving up yield.

## Strengths and weaknesses
The gain is resin productivity, and on a Protein A column that is directly money. Published studies report resin requirement cut by as much as 92% against batch, specific productivity up by as much as 81%, and a 49% productivity gain sustained over 100 cycles on industrially relevant antibody feed. Smaller columns also mean smaller buffer volumes per gram, which is often the binding constraint on an existing suite. Against that: more valves, more tubing, more sensors, and more ways to fail. The failure mode is that a leaking valve or one column drifting in capacity contaminates the pooled product across the entire run, and because the run is continuous you may not detect it until a large mass has already passed. Switching decisions are made in real time from UV traces, so a drifting sensor silently changes the loading endpoint. Cleaning validation across a manifold with shared lines is harder to argue than cleaning one column. And the cycle count per campaign is far higher, so a validated 200-cycle resin lifetime that used to cover three years of batch manufacturing may now cover a single campaign.

## When to use
Continuous capture pays when one product runs many campaigns at scale, when the upstream is perfusion and already produces a continuous feed, or when resin amortization is one of your top three cost lines. Do not build it for a clinical program running three batches a year: the extra skid, the process development, and the validation will not pay back before the process is frozen for comparability anyway. Batch chromatography also remains the right default for multi-product CDMO suites, because changeover and cross-contamination across a valve manifold is a worse problem than across a single column. If you want most of the benefit with less of the burden, a hybrid process (continuous capture, batch polishing) is the configuration most companies have actually implemented.

## Key numbers
Three to six columns in a loop · resin utilization up to about 95% against 60–80% in batch · reported resin requirement cuts as large as 92% and specific productivity gains up to 81% · a 49% productivity gain sustained over 100 cycles on industrially relevant antibody feed · batch defined by run time, mass processed, or cycle count under ICH Q13 · single-use continuous well ahead of stainless batch on cost of goods at 100 kg a year, and roughly level with it at 3,000 kg a year.

## Regulatory notes
This is a heavily validated choice, and the burden is structural rather than technical. ICH Q13 covers continuous manufacturing of drug substance including therapeutic proteins, and it keeps the existing ICH Q7 definition of a batch, which means you have to define yours by run time, mass processed, or number of cycles rather than by the contents of a vessel. That pulls in a documented state of control, real-time monitoring and process analytical technology, residence time distribution data so you can trace a given input to a given output, and a diversion strategy for material produced while the system is off-spec. Reviewers ask for the traceability data specifically, because it is what makes a recall bounded. Add to that a resin lifetime study run to cycle counts batch processes never reach, and cleaning validation for a manifold rather than a column.

## Examples
Cytiva ÄKTA pcc, MilliporeSigma Cadence BioSMB, Sartorius Resolute BioSMB, YMC/ChromaCon Contichrom with the CaptureSMB and MCSGP modes, and Novasep BioSC. The CoPACaPAnA work is a published implementation of continuous Protein A capture inside an end-to-end single-use GMP downstream process. Sanofi's Framingham plant is the most visible commercial-scale integrated continuous facility, and WuXi Biologics markets its WuXiUP intensified platform on the same principles.

## Economic profile
The skid costs more, the automation costs more, and the development and validation cost a lot more. What comes back is resin, buffer, and floor space. The honest framing comes from published cost-of-goods modeling: at 100 kg a year of antibody demand, single-use continuous and single-use batch facilities both beat stainless-steel batch by a wide margin, and by 3,000 kg a year the continuous, hybrid, and stainless batch options land at broadly similar cost per gram. So continuous is strongest at small and mid demand, where capital efficiency dominates, and its advantage narrows exactly where people assume it should be largest. Treat any vendor model that shows continuous winning at every scale with suspicion, and ask what utilization and what campaign length it assumes.

## Videos

- https://www.youtube.com/watch?v=Cj26kWxKNbo — Traditional Batch vs Multi-Column Chromatography (Sartorius, 3 minutes, 1m+ views)
- https://www.youtube.com/watch?v=1pxFQDTuRvU — Tech Talk: Continuous Multi-Column Chromatography (Merck Life Science, 2 minutes, 1k+ views)

## Further reading

[Continuous Manufacturing of Drug Substances and Drug Products, Q13 (ICH)](https://database.ich.org/sites/default/files/ICH_Q13_Step4_Guideline_2022_1116.pdf) · [Modern Trends in Downstream Processing of Biotherapeutics Through Continuous Chromatography (Trends in Analytical Chemistry via PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7513800/)
