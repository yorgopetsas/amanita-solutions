import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

export function AboutPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'About amanita.barcelona',
      body: 'We are a demo studio site showing how an AI agents agency can structure products, platform briefs, multiple homepage narratives, and conversion paths (pricing, testimonials, chat).',
      principles: 'Principles',
      p1: 'Outcome-owned delivery with evals, not open-ended "AI transformation."',
      p2: 'Memory and governance treated as first-class—not bolt-ons after launch.',
      p3: 'Provider-agnostic routing so you can diversify models responsibly.',
      explore: 'Explore',
      products: 'products',
      platforms: 'platform briefs',
      themes: 'homepage themes',
      tail: 'to see how positioning can flex by brand.',
    },
    es: {
      title: 'Sobre amanita.barcelona',
      body: 'Somos un sitio demo de estudio que muestra cómo una agencia de agentes IA puede estructurar productos, briefs de plataformas, múltiples narrativas de homepage y rutas de conversión (precios, testimonios, chat).',
      principles: 'Principios',
      p1: 'Entrega orientada a resultados con evals, no una "transformación IA" abierta.',
      p2: 'Memoria y gobierno tratados como piezas clave, no añadidos después del lanzamiento.',
      p3: 'Routing agnóstico de proveedor para diversificar modelos de forma responsable.',
      explore: 'Explora',
      products: 'productos',
      platforms: 'briefs de plataformas',
      themes: 'temas de homepage',
      tail: 'para ver cómo el posicionamiento puede adaptarse por marca.',
    },
    ca: {
      title: 'Sobre amanita.barcelona',
      body: "Som un lloc demo d'estudi que mostra com una agència d'agents IA pot estructurar productes, briefs de plataformes, múltiples narratives de homepage i camins de conversió (preus, testimonis, xat).",
      principles: 'Principis',
      p1: 'Lliurament orientat a resultats amb evals, no una "transformació IA" oberta.',
      p2: 'Memòria i govern tractats com a peces clau, no afegits després del llançament.',
      p3: 'Routing agnòstic de proveïdor per diversificar models de manera responsable.',
      explore: 'Explora',
      products: 'productes',
      platforms: 'briefs de plataformes',
      themes: 'temes de homepage',
      tail: 'per veure com el posicionament es pot adaptar per marca.',
    },
  }[locale]
  return (
    <article className="max-w-3xl space-y-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {copy.body}
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{copy.principles}</h2>
      <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
        <li>{copy.p1}</li>
        <li>{copy.p2}</li>
        <li>{copy.p3}</li>
      </ul>
      <p className="text-slate-600 dark:text-slate-300">
        {copy.explore} <Link to="/products" className="font-medium text-violet-600 hover:underline dark:text-violet-300">{copy.products}</Link>,{' '}
        <Link to="/platforms" className="font-medium text-violet-600 hover:underline dark:text-violet-300">{copy.platforms}</Link>, or{' '}
        <Link to="/" className="font-medium text-violet-600 hover:underline dark:text-violet-300">{copy.themes}</Link> {copy.tail}
      </p>
    </article>
  )
}
