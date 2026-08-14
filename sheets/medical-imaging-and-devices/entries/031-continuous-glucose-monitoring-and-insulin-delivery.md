---
number: 31
name: Continuous Glucose Monitoring and Insulin Delivery
part: 6
group: Implants & active devices
uses: [monitor, treat]
invasiveness: [ext, impl]
capex: cheap
regclass: c2
maturity: std
---

## Description
A continuous glucose monitor is a filament a few millimeters long, pushed into subcutaneous fat by a spring-loaded applicator and wired to a coin-sized transmitter stuck to the skin. The filament carries glucose oxidase immobilized over a working electrode: glucose and oxygen react to make hydrogen peroxide, the peroxide is oxidized at the electrode, and the current that flows is proportional to glucose in the interstitial fluid. Interstitial glucose lags blood glucose by about 5 to 15 minutes, which matters most when it is falling fast, and is why alarm thresholds are set with margin. Current sensors report every one to five minutes, are factory-calibrated so the user never pricks a finger to calibrate them, and hold a mean absolute relative difference against a lab reference of about 8%. Wear time is 10 days for Dexcom's G7 and 14 for Abbott's Libre 3; the exception is Senseonics' Eversense, a fluorescence-based sensor placed under the skin of the upper arm in a short office procedure and read through the skin by an external transmitter, which runs 180 days or a full year. Automated insulin delivery closes the loop by feeding the sensor stream to an algorithm on a pump or phone, which adjusts basal insulin every five minutes and gives correction boluses, with the user still announcing meals.

## Strengths and weaknesses
The clinical case is settled. Automated insulin delivery raises the share of the day spent between 70 and 180 mg/dL from roughly 50–60% on injections to 70–75%, and lowers HbA1c by about 0.3–0.6 points, without the extra hypoglycemia that used to be the price of tighter control. The weaknesses are mechanical and behavioral. Sensors fail early or read badly often enough that vendors ship replacements as a routine cost of business, adhesive lets go in heat and water, lying on a sensor produces false lows that wake people up at night, and some drugs interfere with the electrochemistry directly, which is why every sensor carries its own interference list. Insulin delivery is the harder half, because an infusion set can kink or occlude and a stopped basal produces ketoacidosis within hours, whereas a bad reading only produces a bad decision. The algorithm is also bounded by the drug: a rapid-acting analog peaks 60 to 90 minutes after dosing, so no controller can respond to a meal faster than the insulin it is dosing.

## When to use
If a patient has type 1 diabetes, they should be on a sensor, and the only real questions are which one and whether to add a pump. If they are on multiple daily injections and still struggling, moving to automated insulin delivery usually helps more than any further adjustment to the injection regimen. If they have type 2 diabetes and take insulin, Medicare and most commercial plans now cover a sensor, so cost is rarely the obstacle; if they have type 2 on oral agents alone, an over-the-counter sensor is a behavior-change tool rather than a treatment and should be judged against that expectation. Choose the implanted 180-day or one-year sensor when adhesive failure or repeated insertions are what keeps breaking, and accept two office procedures a year in exchange. If the patient will not carry a phone or will not act on alarms, the sensor mostly produces data nobody uses, so fix that before buying hardware.

## Key numbers
Sensor wear 10 days for Dexcom G7 and 14 for Abbott Libre 3, against 180 days or a year for the implanted Eversense · mean absolute relative difference around 8% · interstitial lag of 5–15 minutes · automated delivery lifts time in range from roughly 50–60% to 70–75% and cuts HbA1c 0.3–0.6 points · sensors run roughly $35–75 each at cash retail, or $1,300–3,000 a year · gross margins around 60–65% · the first over-the-counter CGM cleared in March 2024 at about $99 a month.

## Examples
Dexcom G7 and Stelo, the first over-the-counter CGM, cleared in March 2024; Abbott FreeStyle Libre 3 and its consumer versions Lingo and Libre Rio; Senseonics Eversense 365, an implanted sensor rated for a year; Tandem t:slim X2 with Control-IQ, Insulet Omnipod 5 and Medtronic MiniMed 780G automated delivery systems; FDA's 2018 De Novo for integrated CGM, which moved the category out of premarket approval into Class II with special controls.

## Economic profile
This started as a device sold to endocrinologists and became a consumer product, and that shows up in every line of the business. A sensor sells for roughly $35–75 at cash retail against gross margins of about 60–65%, so most of the price is not manufacturing, and the model is a subscription: the reader or transmitter is nearly free, the recurring sensor is where the revenue sits, and continuous wear runs $1,300–3,000 a year at list. Most of the recent volume came from coverage rather than from technology, since Medicare widened CGM coverage in 2023 to essentially every insulin user and to patients with a history of problematic hypoglycemia, which moved a large population from cash-pay to covered overnight. The regulatory structure mattered as much as the coverage: FDA's 2018 De Novo created an integrated CGM class with special controls, which took sensors out of premarket approval and let one company's sensor legally drive another company's pump, and Dexcom, Tandem and Insulet all built businesses on that interoperability. Over-the-counter clearance in 2024 opened the far larger population of type 2 patients not on insulin, where nothing is reimbursed and the product competes with fitness wearables at around $99 a month, which is a different buyer and a much lower price per day. Abbott and Dexcom together sell more than $10 billion of sensors a year and both keep cutting price per day of wear, which is the normal shape of a consumer hardware market and unusual for anything else on this sheet. The strategic question for a new entrant is not accuracy, which is now commoditized around 8%, but distribution, since two companies already sit in the pharmacy channel with a decade of payer contracts behind them.

## Videos

- https://www.youtube.com/watch?v=jGGNYfagqPc — Glucose Sensors Explained (Dhvani Patel, 5 minutes, 10k+ views)
- https://www.youtube.com/watch?v=WQGuP_9oIW0 — Closed-loop insulin delivery in adults with type 1 diabetes (The Lancet, 3 minutes, 10k+ views)

## Further reading

[Continuous Glucose Monitoring (NIDDK)](https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes/continuous-glucose-monitoring) · [Recent advances in closed-loop insulin delivery (Metabolism: Clinical and Experimental)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8792215/)
