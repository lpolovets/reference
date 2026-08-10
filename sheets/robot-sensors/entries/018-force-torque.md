---
number: 18
name: Six-Axis Force-Torque Sensors
part: 6
group: Force & touch
uses: [manip, safety]
range: [contact]
compute: low
adoption: common
cost: high
---

## Description
A six-axis F/T sensor is a machined flexure instrumented with strain gauges (or capacitive/optical gaps) that resolves the full contact wrench, three forces and three torques, at kilohertz rates. Mounted between the arm and the tool, it turns a position-controlled robot into a force-controlled one. That enables polishing at constant pressure, inserting pins that would otherwise jam, teaching by hand-guiding, and detecting collisions by their force signature.

## Strengths and weaknesses
You get complete, calibrated contact measurements right at the tool, which is what makes assembly, finishing, and force-feedback teleoperation work, and the sensors drop straight onto standard wrist flanges. The weaknesses: precision flexures are expensive (traditionally $2–15k), and overload during a crash is a warranty event, so the sensor that protects the process is itself fragile. Thermal drift means you have to re-zero regularly, the added compliance and mass sit right where the dynamics are most sensitive to them, and cheap versions have historically been a false economy.

## When to use
Pick a wrist F/T sensor when the process needs calibrated wrench data: precision insertion beyond what passive compliance devices handle, polishing and finishing at a specified pressure, teleoperation with force feedback, and product test stands. Sub-$1k entrants have brought the entry price down from the traditional $2–15k. Spec overload protection if the cell can crash, and budget the re-zeroing into cycle plans. If coarse contact detection is enough, use current-based sensing instead (it's free and every cobot ships it). If the arm has built-in joint-torque sensing (iiwa, Franka class) that already meets your fidelity needs, use that. Save the dedicated sensor for tasks where force accuracy visibly pays.

## Key numbers
Full-scale range roughly 100–600 N and 5–30 Nm on wrist-sized units · force resolution around 0.1 N · output rate 100 Hz to several kHz · overload limit typically a few times full scale · added mass 100–300 g and 30–50 mm of stack height at the wrist · unit cost sub-$1,000 for new entrants, $2,000–15,000 for the industrial standards.

## Failure modes
Collisions overload the sensor, which is the most common way these die. Thermal drift gets misread as force, since strain gauges respond to temperature as well as strain. Cables fatigue at a wrist that moves constantly. Errors in gravity and payload compensation show up as phantom contact forces. Capacitive types are sensitive to temperature and humidity. Slow zero-drift corrupts long tasks without any obvious symptom.

## Examples
ATI (the industrial standard, now Novanta), Robotiq FT-300, Bota Systems and Wacoh compact units, built-in joint-torque sensing on Kuka iiwa and Franka arms (the integrated alternative), Apple-supplier assembly lines full of them.

## Economic profile
This is a profitable niche getting squeezed from two directions: integrated joint-torque sensing (every cobot now ships some version) and current-based sensorless estimation (free but crude). New entrants (Bota, Chinese vendors) have pulled entry prices under $1k. The bull case is humanoids doing contact-rich work, which could mean two wrists' worth of sensors per robot at volume pricing. The bear case is that "good enough" proprioception takes over the mid-market.

## Videos

- https://www.youtube.com/watch?v=4Ro6rQbePqE — ATI Force/Torque Sensors used in Force Controlled Assembly (ATI Industrial Automation, 3 minutes, 10k+ views)
- https://www.youtube.com/watch?v=NNBGrozRyo4 — Product Animation: 6-axis force/torque sensor FTS (SCHUNK, 2 minutes, 1k+ views)
- https://www.youtube.com/watch?v=CRa9djnZRu0 — The Ingenious Design of Strain Gauges (The Efficient Engineer, 20 minutes, 100k+ views)

## Further reading

[How Force/Torque Sensors Are Enhancing Automation (ATI Industrial Automation)](https://ati.novanta.com/how-force-torque-sensors-are-enhancing-automation/) · [What Is a Force Torque Sensor? (Bota Systems)](https://botasys.com/post/force-torque-sensor/)
