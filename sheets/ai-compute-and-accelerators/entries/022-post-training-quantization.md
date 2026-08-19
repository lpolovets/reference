---
number: 22
name: "Post-training quantization"
part: 4
group: "Model-level techniques"
workloads: [inf, edge]
precision: [fp8, fp4]
scale: [chip, node]
maturity: ship
---

## Description
Post-training quantization converts a model trained at 16-bit into a lower-precision form without retraining it. The naive approach, rounding every weight to the nearest representable value, degrades quality more than it needs to, because errors in different weights matter unequally. The methods in production use exploit that. One class solves for the rounding that minimizes the error in each layer's output on a small calibration set, correcting for the interaction between weights rather than treating them independently. Another observes that a small fraction of activation channels carry outsized magnitudes and protects the weights those channels touch, or migrates the difficulty from activations into weights where it is easier to handle.

## Strengths and weaknesses
The strength is that it takes hours on a single machine and needs no training data beyond a small calibration sample, which puts it within reach of any team that can run the model. It is the cheapest large cost reduction available in serving. The weakness is that the quality effect is model-specific and task-specific, and aggregate benchmarks hide it. A quantized model can score within a point of the original while behaving noticeably worse on long context or on the specific task a product depends on, and only a task-relevant evaluation reveals that.

## When to use
Use it whenever a model is being served at volume and the evaluation infrastructure exists to check the result. Start with weight-only quantization, which is the safest and covers most of the memory saving, and treat activation and KV-cache quantization as separate steps with separate evidence. Prefer quantization-aware training only when post-training methods have been tried and the loss is unacceptable, since the cost is far higher. Do not ship a quantized model on benchmark averages alone.

## Key numbers
Calibration sets of a few hundred samples typically sufficient, against the full training set for quantization-aware training · runtime measured in hours on one machine for models of tens of billions of parameters · weight-only quantization to 4 bits reported close to lossless on many models · a small fraction of activation channels carrying outsized magnitudes, which is what the outlier-aware methods target · degradation concentrated in long-context and rare-token behavior rather than spread evenly.

## Examples
GPTQ solves layer-wise for the rounding that minimizes output error. AWQ protects the weights associated with the most significant activation channels. SmoothQuant migrates quantization difficulty from activations into weights, and LLM.int8() isolates outlier channels into higher precision. All four are implemented in mainstream serving stacks.

## Economic profile
The return on this work is unusually high: an engineer-week of quantization and evaluation can halve or quarter the memory a served model occupies, which reduces the accelerator count for the same traffic in direct proportion. Compared with any hardware purchase, the ratio of saving to cost is not close. What limits adoption is the evaluation rather than the quantization, since an organization that cannot measure quality on its own task cannot safely take the saving and will keep serving at 16-bit. That makes a good task-specific evaluation harness a piece of cost infrastructure rather than a quality nicety.

## Videos

- https://www.youtube.com/watch?v=K75j8MkwgJ0 — Optimize Your AI - Quantization Explained (Matt Williams, 12 minutes, 500k+ views)
- https://www.youtube.com/watch?v=qqN63hbziaI — What is LLM quantization? (Airtrain AI, 5 minutes, 10k+ views)

## Further reading
[GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers (arXiv)](https://arxiv.org/abs/2210.17323) · [SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models (arXiv)](https://arxiv.org/abs/2211.10438)
