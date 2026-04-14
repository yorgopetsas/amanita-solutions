export type ShowreelItem = {
  slug: string
  client: string
  title: string
  tags: string[]
  accent: string
}

export const showreelItems: ShowreelItem[] = [
  { slug: 'orchestrator-reel', client: 'Vertex Rail', title: 'Fleet health command', tags: ['Multi-agent', 'Realtime'], accent: 'from-violet-500 to-indigo-600' },
  { slug: 'rag-premiere', client: 'Harbor Health', title: 'Clinical memo grounding', tags: ['RAG', 'Compliance'], accent: 'from-teal-500 to-cyan-600' },
  { slug: 'handoff-titles', client: 'Lumen Bank', title: 'Human-in-the-loop handoffs', tags: ['UX', 'Policy'], accent: 'from-amber-500 to-orange-600' },
  { slug: 'mesh-ident', client: 'Kite Security', title: 'MCP mesh identity', tags: ['MCP', 'Auth'], accent: 'from-fuchsia-500 to-pink-600' },
  { slug: 'eval-sequence', client: 'Nova Grid', title: 'Eval harness titles', tags: ['Evals', 'CI'], accent: 'from-emerald-500 to-green-600' },
  { slug: 'memory-short', client: 'Cedar Ed', title: 'Lattice memory story', tags: ['Memory', 'TTL'], accent: 'from-sky-500 to-blue-600' },
  { slug: 'planning-bumper', client: 'Atlas Freight', title: 'Planning trajectory', tags: ['Tools', 'Retry'], accent: 'from-rose-500 to-red-600' },
  { slug: 'voice-social', client: 'Blue Canopy', title: 'Brand voice social pack', tags: ['Voice', 'Content'], accent: 'from-violet-400 to-fuchsia-500' },
]
