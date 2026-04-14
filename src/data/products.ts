export type Product = {
  slug: string
  name: string
  tagline: string
  description: string
  outcomes: string[]
  stack: string[]
  cta: string
}

export const products: Product[] = [
  {
    slug: 'orchestrator',
    name: 'Nexus Orchestrator',
    tagline: 'Multi-agent routing, handoffs, and guardrails in one control plane.',
    description:
      'Design supervisor patterns, delegate to specialists, and enforce policy across every conversation thread. Built for teams that outgrow single-prompt workflows.',
    outcomes: [
      'Visual agent graphs with live health',
      'Human-in-the-loop approvals where it matters',
      'Audit trails mapped to your compliance model',
    ],
    stack: ['OpenAI Agents', 'Azure AI', 'Custom MCP tools'],
    cta: 'Book an orchestration workshop',
  },
  {
    slug: 'memory-layer',
    name: 'Lattice Memory',
    tagline: 'Durable memory that respects privacy, tenancy, and retention.',
    description:
      'Unify episodic recall, structured knowledge, and document grounding with vector + graph hybrid retrieval tuned to your domain.',
    outcomes: [
      'Per-tenant isolation and encryption',
      'TTL policies and redaction pipelines',
      'Eval harness for recall precision',
    ],
    stack: ['pgvector', 'Neo4j', 'S3 + KMS'],
    cta: 'See memory architecture',
  },
  {
    slug: 'retrieval-rag',
    name: 'Signal Retrieval',
    tagline: 'RAG that survives real documents: messy PDFs, wikis, and tickets.',
    description:
      'Chunking strategies, re-rankers, and citation UX wired for operators—not demos. Ship grounded answers your legal team can stand behind.',
    outcomes: ['Hybrid lexical + dense search', 'Citation surfaces in-product', 'Continuous eval on your corpus'],
    stack: ['LlamaIndex patterns', 'Cohere rerank', 'Custom connectors'],
    cta: 'Run a corpus audit',
  },
  {
    slug: 'planning-tools',
    name: 'Trajectory Planning',
    tagline: 'Agents that decompose goals, call tools, and recover from failure.',
    description:
      'Structured planning with tool schemas, retries, and observability. Ideal for ops automation, research copilots, and internal copilots.',
    outcomes: ['Tool registry with versioning', 'Step-level traces', 'Automatic replanning hooks'],
    stack: ['OpenAI function calling', 'Anthropic tool use', 'Temporal workflows'],
    cta: 'Plan a pilot workflow',
  },
  {
    slug: 'connect-mcp',
    name: 'Mesh Connect',
    tagline: 'MCP-native integrations to your CRM, data warehouse, and SaaS stack.',
    description:
      'We package connectors, auth, and rate limits so agents can act safely in production systems—not just read static files.',
    outcomes: ['OAuth and SCIM patterns', 'Per-tool quotas', 'Webhook + event ingestion'],
    stack: ['MCP servers', 'REST + GraphQL', 'Kafka'],
    cta: 'Map your integration surface',
  },
  {
    slug: 'governance',
    name: 'Sentinel Governance',
    tagline: 'Policies, evals, and monitoring for agent fleets at scale.',
    description:
      'Content safety, PII handling, prompt-injection defenses, and regression suites tied to CI. Operate agents like you operate services.',
    outcomes: ['Policy packs by industry', 'Shadow mode rollouts', 'Incident playbooks'],
    stack: ['OpenTelemetry', 'LLM judges', 'Your SIEM'],
    cta: 'Review governance kit',
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}
