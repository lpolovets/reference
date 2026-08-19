---
number: 26
name: "Machine learning compilers"
part: 5
group: "Programming models"
workloads: [train, inf, edge]
scale: [chip, node]
maturity: ship
---

## Description
A machine-learning compiler takes a model expressed as a graph of operations and lowers it to code for a specific device, applying transformations along the way that a human would otherwise apply by hand. The most valuable of these is fusion: combining several operations so intermediate results stay in on-chip memory instead of being written to external memory and read back. Since most models are bandwidth-bound, removing those round trips is often worth more than any improvement to the arithmetic. Modern stacks are built on a common intermediate representation infrastructure so that multiple front ends and multiple hardware back ends can share the same passes.

## Strengths and weaknesses
The strength is that a compiler generalizes where a hand-written kernel does not: it fuses whatever graph it is given, including shapes and combinations nobody anticipated, which is what makes new model architectures usable on day one. Higher-level kernel languages have also made it possible to write a competitive kernel in far less code than the vendor-native path requires, which broadens who can do the work. The weakness is that compilers reliably lose to expert hand-tuning on the few operations that dominate runtime, so production stacks are a mixture: compiled code for the long tail, hand-written kernels for the critical few.

## When to use
Rely on the compiler for everything by default, and profile to find the small number of operations that dominate. Hand-write or specialize those, and leave the rest. Use a portable kernel language where more than one hardware target matters, accepting some peak performance for the portability. For edge deployment, expect the compiler to matter more than on servers, since the runtime and operator coverage on device NPUs is thinner and what the compiler cannot lower simply will not run.

## Key numbers
Fusion removing external memory round trips, which on bandwidth-bound work is usually the largest single win available · compilers typically reaching a good fraction of hand-tuned performance across a whole model while losing on individual hot kernels · higher-level kernel languages reducing kernel source size substantially against vendor-native code · a shared intermediate representation letting one set of passes serve several front ends and back ends · operator coverage rather than speed being the limiting factor on newer hardware.

## Examples
XLA compiles graphs from several frameworks and is the production path for TPUs. MLIR is the shared infrastructure most current compilers are built on. Triton is the higher-level kernel language now widely used to write attention and other custom kernels that reach close to hand-tuned performance.

## Economic profile
Compiler investment is how a hardware vendor converts silicon into a usable product, and it is consistently underestimated in cost and duration. The pattern across challengers is the same: competitive hardware arrives, the compiler covers the common operators, and the workloads customers actually run include enough uncovered cases that measured performance falls short of the specification. For customers, the compiler is what determines whether a new model runs the week it is published or the quarter after, and that lag has real commercial value in a field moving this fast. Shared infrastructure has lowered the entry cost, which is the main reason more credible alternative back ends exist now than five years ago.

## Further reading
[OpenXLA Project](https://openxla.org/xla) · [Triton documentation (Triton)](https://triton-lang.org/main/index.html)
