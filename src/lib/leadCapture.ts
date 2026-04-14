export type LeadPayload = {
  source: string
  name?: string
  email: string
  message?: string
}

const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL as string | undefined

export async function submitLead(payload: LeadPayload) {
  if (!webhookUrl) {
    return { ok: true, mode: 'demo' as const }
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return { ok: res.ok, mode: 'live' as const }
}

export function getBookingUrl() {
  return (import.meta.env.VITE_CALENDLY_URL as string | undefined) || 'https://calendly.com/'
}
