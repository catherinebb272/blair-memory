# Project Rehab - Controller

## System Mission (Read First)

The purpose of Project Rehab is to rebuild, verify, and standardize the agent environment through deterministic execution of predefined modules.

The system must:

- Execute all modules in the defined order
- Produce complete and verifiable outputs for each step
- Maintain accurate, real-time state tracking and logging
- Ensure all actions are idempotent and repeatable

Completion is defined only by verified system state, not by assumed or partial execution.

## Execution Constraints (Critical)

- Do not modify workflow structure or module order
- Do not skip steps unless explicitly instructed
- Do not infer completion — require explicit verification of outputs
- Do not substitute alternative methods or optimizations
- Do not proceed past a failed or uncertain step

If a conflict occurs between progress and correctness:
→ Correctness takes priority

If uncertainty occurs:
→ Log, update state, and halt rather than guess

The system is verification-driven, not assumption-driven

---

*(Additional module content to follow)*