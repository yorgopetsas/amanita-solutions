export type FaqItem = { q: string; a: string }

export const faqSections: { title: string; items: FaqItem[] }[] = [
  {
    title: 'Buying & scope',
    items: [
      {
        q: 'How fast can we go live?',
        a: 'Most pilots land in 2–6 weeks depending on integrations, data access, and approval workflows. A single well-bounded workflow (e.g. ticket triage) can be faster; multi-agent + regulated data takes longer.',
      },
      {
        q: 'Do you replace our internal team?',
        a: 'No—we pair with your engineers and operators. We bring agent patterns, eval harnesses, and integration playbooks; you keep domain authority and production ownership.',
      },
      {
        q: 'What does pricing include?',
        a: 'Build phases are scoped separately from operate phases. Operate covers monitoring, model drift checks, prompt/tool updates, and on-call for agent incidents. See Pricing for illustrative bands.',
      },
    ],
  },
  {
    title: 'Data, privacy, residency',
    items: [
      {
        q: 'Will our data train public models?',
        a: 'By default we architect flows so customer data stays in your tenancy or contracted provider settings. We document data paths in the security pack and subprocessors list.',
      },
      {
        q: 'Can you support EU / HIPAA / SOC2-style reviews?',
        a: 'Yes—expect a structured questionnaire pass, architecture diagrams, and control mapping. Maturity varies by your cloud and model provider; we surface gaps early.',
      },
      {
        q: 'How do you handle PII?',
        a: 'Redaction, minimization, and scoped memory are design-time choices—not afterthoughts. We align retention to your policies and test leakage paths in eval suites.',
      },
    ],
  },
  {
    title: 'Reliability & oversight',
    items: [
      {
        q: 'What if the agent is wrong?',
        a: 'We design confidence thresholds, human handoff, and reversible actions. Incidents feed a regression suite so the same failure mode is caught in CI next time.',
      },
      {
        q: 'How do you measure quality?',
        a: 'Task success, groundedness/citation where applicable, latency, cost per outcome, and human override rate. Dashboards differ by use case but the discipline is consistent.',
      },
      {
        q: 'Can we turn agents off instantly?',
        a: 'Yes—feature flags, kill switches, and rate limits are part of the deployment pattern. We rehearse rollback in tabletop exercises.',
      },
    ],
  },
]
