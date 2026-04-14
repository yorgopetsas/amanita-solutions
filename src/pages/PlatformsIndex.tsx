import { Link } from 'react-router-dom'
import { platforms } from '../data/platforms'
import { useI18n } from '../i18n/I18nProvider'

export function PlatformsIndex() {
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'Platforms & model families',
      body: 'Browse the major AI platforms with quick briefs and visual identity. Each card links to a deeper implementation note.',
      open: 'Open platform brief',
      logoFallback: 'Logo unavailable',
    },
    es: {
      title: 'Plataformas y familias de modelos',
      body: 'Explora las principales plataformas de IA con briefs rápidos e identidad visual. Cada tarjeta enlaza a una nota de implementación más profunda.',
      open: 'Abrir brief de plataforma',
      logoFallback: 'Logo no disponible',
    },
    ca: {
      title: 'Plataformes i famílies de models',
      body: "Explora les principals plataformes d'IA amb briefs ràpids i identitat visual. Cada targeta enllaça a una nota d'implementació més profunda.",
      open: 'Obrir brief de plataforma',
      logoFallback: 'Logo no disponible',
    },
  }[locale]

  const localizedPlatforms =
    locale === 'en'
      ? platforms
      : locale === 'es'
        ? platforms.map((pl) => ({
            ...pl,
            headline: {
              openai: 'Modelos GPT, Assistants y el stack emergente de agentes.',
              microsoft: 'Azure AI, extensibilidad de Copilot e identidad enterprise.',
              google: 'Gemini, Vertex AI Search y respuestas con base en BigQuery.',
              anthropic: 'Claude para workflows de contexto largo y tool use cuidadoso.',
              openclaw: 'Runtime abierto para agentes encadenados y servidores comunitarios.',
              meta: 'Pesos abiertos para on-prem, air-gapped y rutas de coste optimizado.',
              mistral: 'Opcionalidad europea con latencia y pricing competitivos.',
              'amazon-bedrock': 'Marketplace de modelos dentro de los límites de tu cuenta AWS.',
              cohere: 'Embeddings, rerank y ergonomía enterprise para retrieval.',
              xai: 'Alternativa frontier para equipos que experimentan nuevos stacks.',
            }[pl.slug] ?? pl.headline,
          }))
        : platforms.map((pl) => ({
            ...pl,
            headline: {
              openai: "Models GPT, Assistants i l'stack emergent d'agents.",
              microsoft: "Azure AI, extensibilitat de Copilot i identitat enterprise.",
              google: 'Gemini, Vertex AI Search i respostes fonamentades en BigQuery.',
              anthropic: "Claude per a workflows de context llarg i tool use curós.",
              openclaw: 'Runtime obert per a agents encadenats i servidors comunitaris.',
              meta: 'Pesos oberts per a on-prem, air-gapped i rutes de cost optimitzat.',
              mistral: 'Opcionalitat europea amb latència i pricing competitius.',
              'amazon-bedrock': "Marketplace de models dins els límits del teu compte AWS.",
              cohere: 'Embeddings, rerank i ergonomia enterprise per a retrieval.',
              xai: 'Alternativa frontier per a equips que experimenten nous stacks.',
            }[pl.slug] ?? pl.headline,
          }))

  const logos: Record<string, string> = {
    openai: 'https://cdn.simpleicons.org/openai',
    microsoft: 'https://cdn.simpleicons.org/microsoft',
    google: 'https://cdn.simpleicons.org/google',
    anthropic: 'https://cdn.simpleicons.org/anthropic',
    openclaw: 'https://cdn.simpleicons.org/github',
    meta: 'https://cdn.simpleicons.org/meta',
    mistral: 'https://cdn.simpleicons.org/mistralai',
    'amazon-bedrock': 'https://cdn.simpleicons.org/amazonwebservices',
    cohere: 'https://cdn.simpleicons.org/cohere',
    xai: 'https://cdn.simpleicons.org/x',
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {localizedPlatforms.map((pl) => (
          <li key={pl.slug}>
            <Link
              to={`/platforms/${pl.slug}`}
              className="block cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-violet-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-500/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                  {logos[pl.slug] ? (
                    <img
                      src={logos[pl.slug]}
                      alt={`${pl.name} logo`}
                      className="h-6 w-6 object-contain"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="text-[10px] font-semibold uppercase text-slate-500">{copy.logoFallback}</span>
                  )}
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">{pl.name}</h2>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{pl.headline}</p>
              <p className="mt-3 text-sm font-semibold text-violet-700 dark:text-violet-300">{copy.open} to</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
