export type Platform = {
  slug: string
  name: string
  headline: string
  summary: string
  strengths: string[]
  watchouts: string[]
  amanitaAngle: string
}

export const platforms: Platform[] = [
  {
    slug: 'openai',
    name: 'OpenAI',
    headline: 'GPT models, Assistants, and the emerging agents stack.',
    summary:
      'Best-in-class general reasoning with a mature API surface. We help you move from playground prompts to production-grade agents with evals and cost controls.',
    strengths: ['Broad model choice', 'Strong tool-use patterns', 'Large ecosystem'],
    watchouts: ['Rate limits and spend caps need design', 'Latency sensitivity for voice/realtime'],
    amanitaAngle: 'We blueprint agent roles, memory boundaries, and evaluation loops on top of OpenAI APIs.',
  },
  {
    slug: 'microsoft',
    name: 'Microsoft',
    headline: 'Azure AI, Copilot extensibility, and enterprise identity.',
    summary:
      'When Entra ID, private networking, and Microsoft 365 matter, Azure AI becomes the natural backbone. We wire agents into Teams, SharePoint, and Dataverse responsibly.',
    strengths: ['Enterprise contracts', 'Private endpoints', 'M365 graph context'],
    watchouts: ['Quotas vary by SKU', 'Multi-tenant patterns need care'],
    amanitaAngle: 'Landing patterns for Copilot Studio + custom agents with unified observability.',
  },
  {
    slug: 'google',
    name: 'Google',
    headline: 'Gemini, Vertex AI Search, and BigQuery-grounded answers.',
    summary:
      'Vertex gives you managed models plus search and analytics adjacency. We design retrieval that spans Drive, Gmail, and your warehouse without sprawl.',
    strengths: ['Multimodal', 'Search product depth', 'BigQuery federation'],
    watchouts: ['Grounding configs differ by surface', 'Org policy alignment'],
    amanitaAngle: 'Agent blueprints that pair Gemini with your Google Cloud data plane.',
  },
  {
    slug: 'anthropic',
    name: 'Anthropic (Claude)',
    headline: 'Claude for long-context workflows and careful tool use.',
    summary:
      'Ideal for document-heavy processes, policy drafting, and multi-step reasoning with large prompts. We tune prompts, tools, and safety rails for regulated teams.',
    strengths: ['Long context', 'Strong writing quality', 'Thoughtful safety defaults'],
    watchouts: ['Cost at max context', 'Latency for huge prompts'],
    amanitaAngle: 'Specialist agents with artifact outputs, reviews, and human checkpoints.',
  },
  {
    slug: 'openclaw',
    name: 'OpenClaw',
    headline: 'Open runtime for chained agents and community tool servers.',
    summary:
      'OpenClaw focuses on portable agent graphs and open connectors—great when you want to avoid vendor lock-in while still moving fast.',
    strengths: ['Composable graphs', 'Open connectors', 'Hackable core'],
    watchouts: ['You own more ops', 'Smaller managed surface than hyperscalers'],
    amanitaAngle: 'We harden OpenClaw deployments with auth, quotas, and production tracing.',
  },
  {
    slug: 'meta',
    name: 'Meta (Llama)',
    headline: 'Open weights for on-prem, air-gapped, and cost-optimized paths.',
    summary:
      'When data residency or unit economics dominate, Llama-class models shine. We help you pick sizes, fine-tune responsibly, and serve efficiently.',
    strengths: ['Deploy anywhere', 'Tunable cost curve', 'Active research community'],
    watchouts: ['Ops overhead', 'Evaluation burden shifts to you'],
    amanitaAngle: 'Reference stacks for vLLM/TGI, safety filters, and domain adaptation.',
  },
  {
    slug: 'mistral',
    name: 'Mistral AI',
    headline: 'European optionality with competitive latency and pricing.',
    summary:
      'Strong choice for EU-first programs needing credible data residency narratives without sacrificing capability.',
    strengths: ['EU footprint narrative', 'Efficient smaller models', 'Simple API ergonomics'],
    watchouts: ['Ecosystem smaller than US giants', 'Feature velocity varies'],
    amanitaAngle: 'Regional deployments with bilingual workflows and local compliance packs.',
  },
  {
    slug: 'amazon-bedrock',
    name: 'Amazon Bedrock',
    headline: 'Model marketplace inside your AWS account boundaries.',
    summary:
      'Pick models from multiple vendors with IAM-native access. We integrate Bedrock Agents, Knowledge Bases, and your existing AWS data services.',
    strengths: ['Single AWS bill', 'PrivateLink patterns', 'Knowledge Bases product'],
    watchouts: ['Cross-region behavior', 'KB sync semantics'],
    amanitaAngle: 'Agent + Knowledge Base architectures with IaC and drift detection.',
  },
  {
    slug: 'cohere',
    name: 'Cohere',
    headline: 'Embeddings, rerank, and enterprise retrieval ergonomics.',
    summary:
      'When retrieval quality is the bottleneck, Cohere rerank often pays for itself. We pair it with your vector store and observability.',
    strengths: ['Rerank quality', 'Embedding SKUs', 'Enterprise focus'],
    watchouts: ['Model matrix changes', 'Compare TCO vs bundled clouds'],
    amanitaAngle: 'Retrieval stacks with rerank-first design and offline eval suites.',
  },
  {
    slug: 'xai',
    name: 'xAI (Grok)',
    headline: 'Alternative frontier for teams experimenting with new stacks.',
    summary:
      'Useful when you want diversification across providers or specific latency/cost profiles. We keep prompts portable and monitor quality drift.',
    strengths: ['Frontier experimentation', 'Provider diversification'],
    watchouts: ['Evolving enterprise surface', 'Comparative evals required'],
    amanitaAngle: 'Multi-provider routing with fallbacks and per-task eval dashboards.',
  },
]

export function getPlatform(slug: string) {
  return platforms.find((p) => p.slug === slug)
}
