---
number: 33
name: "FDA Pathways: 510(k), De Novo and PMA"
part: 7
group: Regulation & software
uses: [diag, treat]
invasiveness: [ext, impl]
maturity: std
---

## Description
The FDA sorts devices into three risk classes and gives each a route to market. Most devices go through a 510(k) premarket notification, which asks the sponsor to show the device is substantially equivalent to a legally marketed predicate rather than to show it works: same intended use, and either the same technological characteristics or different ones that raise no new questions of safety and effectiveness. A De Novo request covers a low-to-moderate-risk device with no predicate, and the FDA grants it along with special controls, creating a new classification that later devices can then use as a predicate. A premarket approval application (PMA) is the Class III route, and it asks for independent evidence of a reasonable assurance of safety and effectiveness, which in practice means a clinical trial. The volumes are lopsided. In calendar 2025 the FDA cleared 3,186 devices by 510(k), granted 27 De Novo requests, and approved 38 original PMAs, so roughly 98% of premarket authorizations that year were 510(k)s (the three counts come from FDA's own databases; the percentage is arithmetic on them). FY2026 user fees are $26,067 for a 510(k), $173,782 for a De Novo and $579,272 for a PMA, with qualified small businesses paying a quarter of each.

## Strengths and weaknesses
The 510(k) is fast and cheap relative to what it authorizes. Across the 3,183 clearances issued in 2025 with usable dates, the median time from submission to decision was 126 days and the mean 146, both computed here from FDA's clearance records, so a company with a clean predicate can plan on four to six months. The cost of that speed is that the claim is bounded by the predicate: if the device does something the predicate did not, the FDA can find it not substantially equivalent, and the sponsor lands in De Novo or PMA anyway. The chain of comparisons is the structural weakness, because each clearance is a small step from the last and a device several predicates down the line can differ substantially from whatever the chain started with. That is predicate creep, and it is why the 2011 National Academies review of the program and a run of high-profile recalls left the FDA under pressure to tighten predicate selection. PMA fixes the evidence problem and creates a schedule problem: original PMAs approved between 2023 and 2025 took a median of 307 days at the agency, and that clock only starts after a pivotal trial that a 2015 analysis of priority-review devices found ran a median of three years and enrolled a median of 297 patients.

## When to use
Start in FDA's classification database and find the product code that describes what your device does. If a product code exists and a marketed predicate shares your intended use, write the 510(k) and budget four to six months of review, because that is the cheapest marketing authorization available and it is worth contorting an indication statement to stay inside it. If the technology is genuinely new but the risk is moderate and nothing fits as a predicate, file a De Novo: expect to wait roughly twice as long, and note that the special controls written into the new classification become the bar every follower has to clear. If the device is implanted, life-sustaining, or otherwise Class III, plan the PMA from the beginning, since bolting a pivotal trial onto a program designed around a 510(k) costs more than designing for the trial. Request Breakthrough designation if the device treats or diagnoses a life-threatening or irreversibly debilitating condition, but treat it as schedule help rather than a lower bar: it buys interactive review and queue priority, and it does not change the evidence standard or get you paid.

## Key numbers
3,186 510(k) clearances, 27 De Novo grants and 38 original PMAs in calendar 2025, so 510(k) is about 98% of authorizations · FY2026 user fees $26,067 / $173,782 / $579,272, a quarter of that for small businesses · 510(k) median 126 days to decision, original PMA median 307 · PMA pivotal trials median 297 patients over 3 years · 1,284 Breakthrough designations against 198 marketing authorizations · PMA supplements $86,891 for a 180-day, $463,418 for a panel-track.

## Examples
Intuitive's da Vinci systems, whose predicate chain a 2023 PLOS ONE case study used to demonstrate a method for detecting predicate creep; FDA's Safety and Performance Based Pathway, which lets some well-understood device types clear against published performance criteria instead of a named predicate; the September 2023 guidance on best practices for selecting a predicate device; the Breakthrough Devices Program, which had granted 1,284 designations and seen 198 of those devices reach marketing authorization as of March 31, 2026.

## Economic profile
The user fee is the smallest line in either budget. A traditional 510(k) program is mostly bench testing, biocompatibility, sterilization validation and the people who write the submission, and a straightforward one runs a few hundred thousand dollars all in. A PMA program is the pivotal trial, and a median 297-patient trial over three years is a tens-of-millions-of-dollars line before anyone has manufactured at scale, which is a planning estimate rather than a published figure. That gap sets how the company gets financed: a 510(k) product can reach revenue on a seed and a Series A, while a PMA product needs the trial funded as its own tranche, which is why Class III startups usually sell to a strategic acquirer at approval rather than before it. The Class III cost is also permanent, since every meaningful change needs a supplement at $86,891 for a 180-day review or $463,418 for a panel-track one, and the FDA approved roughly 800 PMA supplements a year against 33 to 38 originals over 2023 to 2025. De Novo buys a head start rather than exclusivity, because the classification it creates is public and the next company files a 510(k) against it, so the protection is the two or three years of lead plus whatever clinical evidence and billing codes you accumulate meanwhile. Breakthrough designation moves the review queue and not the payer, so it belongs in the schedule model and not the revenue model.

## Videos

- https://www.youtube.com/watch?v=frFzB37JXy4 — Basics of 510(k) Clearance Process (Stanford Biodesign, 2 minutes, 10k+ views)
- https://www.youtube.com/watch?v=05kw8zA27Cg — Key differences between 510(k) and PMA pathways at the FDA (Stanford Biodesign, 3 minutes, 10k+ views)

## Further reading

[Premarket Notification 510(k) (FDA)](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k) · [Identification of predicate creep under the 510(k) process: A case study of a robotic surgical device (PLOS ONE)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10047502/)
