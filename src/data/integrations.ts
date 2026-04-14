export type Integration = {
  name: string
  category: 'CRM' | 'Data' | 'Comms' | 'Support' | 'Dev' | 'MCP'
  description: string
  status: 'GA' | 'Beta' | 'Partner roadmap'
}

export const integrations: Integration[] = [
  { name: 'Salesforce', category: 'CRM', description: 'Read/update records, tasks, and custom objects via governed service user.', status: 'GA' },
  { name: 'HubSpot', category: 'CRM', description: 'Lifecycle workflows, deal notes, and marketing handoffs.', status: 'GA' },
  { name: 'Snowflake', category: 'Data', description: 'Parameterized queries and semantic views—no ad-hoc SQL from the model.', status: 'GA' },
  { name: 'BigQuery', category: 'Data', description: 'Warehouse-grounded answers with project-scoped credentials.', status: 'GA' },
  { name: 'Slack', category: 'Comms', description: 'Channel digests, approvals, and human-in-the-loop prompts.', status: 'GA' },
  { name: 'Microsoft Teams', category: 'Comms', description: 'Enterprise messaging with Entra-scoped apps.', status: 'Beta' },
  { name: 'Zendesk', category: 'Support', description: 'Ticket triage, macros suggestions, and escalation policies.', status: 'GA' },
  { name: 'Intercom', category: 'Support', description: 'Conversation tagging and operator assist.', status: 'Beta' },
  { name: 'Jira', category: 'Dev', description: 'Issue creation, linking, and sprint hygiene automations.', status: 'GA' },
  { name: 'Linear', category: 'Dev', description: 'Agent-generated issues with guardrailed fields.', status: 'Partner roadmap' },
  { name: 'GitHub', category: 'Dev', description: 'PR summaries, changelog drafts, and CODEOWNERS-aware routing.', status: 'GA' },
  { name: 'Notion', category: 'MCP', description: 'Curated knowledge sync via MCP connector templates.', status: 'Beta' },
  { name: 'Google Drive', category: 'MCP', description: 'Document retrieval with shared-drive boundaries.', status: 'GA' },
  { name: 'Custom MCP', category: 'MCP', description: 'First-party tools with typed schemas, auth, and per-tenant quotas.', status: 'GA' },
]
