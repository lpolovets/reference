---
number: 20
name: Vision-Based Tactile (GelSight-class)
part: 6
group: Force & touch
uses: [manip]
range: [contact]
compute: high
adoption: emerging
cost: med
---

## Description
These sensors measure touch with a camera. A soft, opaque elastomer pad deforms against the object while an internal camera watches that deformation under structured illumination, which recovers contact geometry at optical resolution: surface texture, edges, shear fields, and incipient slip, at a level well past any taxel array. Because the output is an image, the whole deep-learning vision stack applies directly to touch. That's the main reason the approach has dominated manipulation research since GelSight started at MIT.

## Strengths and weaknesses
You get micron-scale contact geometry plus rich shear and slip signals, using commodity cameras and standard CNN tooling, and the sensors can be built from cheap components. The weaknesses: the gel is a consumable that tears, wears, and scuffs its optical coating. The camera needs standoff distance, so fingertips end up thick, which works against dexterity. Frame rate and processing latency both trail dedicated force sensors, each sensor needs its own photometric calibration, and absolute force is inferred from deformation models rather than measured directly.

## When to use
Pick GelSight-class sensing for dexterity work where fine contact geometry pays: in-hand pose estimation, cable and fastener manipulation, texture and defect inspection by touch, and any learned manipulation stack. Since the output is an image, it plugs straight into vision tooling, and $300–500 modules put it within reach of any lab. Hold off in long-duty industrial cells until gel-tip life matches your maintenance intervals, because tips are consumables and sharp or abrasive parts wear them quickly. If you're closing a tight kilohertz force loop, the frame-rate latency will destabilize control, so use a conventional F/T sensor or taxel array there instead.

## Key numbers
Sensing area roughly 15 × 20 mm per fingertip · spatial resolution in the tens of microns, fine enough to read surface texture · frame rate 25–60 fps, well below a dedicated force sensor's kilohertz · fingertip depth 25–40 mm, set by the camera standoff · unit cost $300–500 per module, plus replacement gel pads.

## Failure modes
The gel wears and tears on sharp or abrasive parts, so fleet operators stock replacement tips. Scratches in the coating read as permanent phantom features. Aging illumination LEDs shift the calibration. Condensation or oil films alter the optics. Latency destabilizes tight force loops. Models trained on one gel batch degrade on the next, so manufacturing variance is itself a failure mode.

## Examples
GelSight Inc (Mini as the commercial standard), Meta AI's Digit (open-hardware, low-cost push) and its Digit 360 successor, TacTip (Bristol's pin-based variant), DexIt/9DTact-style academic derivatives, deployment in Amazon and lab bin-picking research.

## Economic profile
The $300–500 module price point made rich touch sensing affordable for any lab, and consumable gel tips give vendors a razor-and-blades revenue line. The open question is whether it's ready for industry: research labs use it heavily, but factories need tip life measured in months. If durability improves, vision-based touch could become the fingertip standard for the same reason it took over research, which is that its output is images, the same format the rest of the learned stack already uses.

## Videos

- https://www.youtube.com/watch?v=w1EBdbe4Nes — GelSight sensor gives robots touch (Massachusetts Institute of Technology (MIT), 2 minutes, 50k+ views)
- https://www.youtube.com/watch?v=eyUZX-lCj4M — Advancing robotics and touch perception | AI Research from Meta FAIR (AI at Meta, 3 minutes, 100k+ views)
- https://www.youtube.com/watch?v=F73kkqiHGwE — DIGIT - a Low-Cost Compact High-Resolution Tactile Sensor (Roberto Calandra, 9 minutes, 5k+ views)

## Further reading

[Tactile Sensing Technology (GelSight)](https://www.gelsight.com/tactile-sensing-technology/) · [Classification of Vision-Based Tactile Sensors: A Review (arXiv)](https://arxiv.org/abs/2509.02478)
