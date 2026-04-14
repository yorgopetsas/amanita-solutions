export type HomeTheme = {
  id: number
  title: string
  palette: string
  vibe: string
  path: string
}

export const homeThemes: HomeTheme[] = [
  { id: 1, title: 'Indigo Gateway', palette: 'Indigo · Emerald · Lilac', vibe: 'Enterprise flat, trust-forward', path: '/home/1' },
  { id: 2, title: 'Neon Noir', palette: 'Electric cyan · Violet · Black', vibe: 'Cyber operations center', path: '/home/2' },
  { id: 3, title: 'Solar Flare', palette: 'Amber · Rose · Cream', vibe: 'Warm, human-centric AI', path: '/home/3' },
  { id: 4, title: 'Mono Brutal', palette: 'Black · White · Acid green', vibe: 'Raw engineering confidence', path: '/home/4' },
  { id: 5, title: 'Glass Aurora', palette: 'Sky · Frost · Pearl', vibe: 'Light glassmorphism SaaS', path: '/home/5' },
  { id: 6, title: 'Neural Bloom', palette: 'Violet · Fuchsia · Ink', vibe: 'Liquid “brain” morph hero', path: '/home/6' },
  { id: 7, title: 'Agent Anatomy', palette: 'Slate · Teal · Coral', vibe: 'Body map + cognitive stack', path: '/home/7' },
  { id: 8, title: 'Bento Pop', palette: 'Multi accent tiles', vibe: 'Color-block product story', path: '/home/8' },
  { id: 9, title: 'Swiss Line', palette: 'Paper white · Ink black', vibe: 'Editorial minimal', path: '/home/9' },
  { id: 10, title: 'Deep Orbit', palette: 'Navy · Gold · Mist', vibe: 'Premium mission control', path: '/home/10' },
  { id: 11, title: 'Aurora Flux', palette: 'Cyan · Electric blue · Magenta', vibe: 'Transparent header + cinematic glow', path: '/home/proposal-aurora' },
  { id: 12, title: 'Legacy Gallery Home', palette: 'Multi', vibe: 'Previous homepage concepts index', path: '/home/12' },
]

export function getLocalizedHomeTheme(theme: HomeTheme, locale: 'en' | 'es' | 'ca'): HomeTheme {
  if (locale === 'en') return theme
  const map: Record<number, { es: { title: string; vibe: string }; ca: { title: string; vibe: string } }> = {
    1: {
      es: { title: 'Puerta Índigo', vibe: 'Enterprise plano, orientado a confianza' },
      ca: { title: 'Porta Índigo', vibe: 'Enterprise pla, orientat a confiança' },
    },
    2: {
      es: { title: 'Neón Noir', vibe: 'Centro de operaciones ciber' },
      ca: { title: 'Neó Noir', vibe: 'Centre d’operacions ciber' },
    },
    3: {
      es: { title: 'Llamarada Solar', vibe: 'IA cálida y centrada en personas' },
      ca: { title: 'Flamarada Solar', vibe: 'IA càlida i centrada en persones' },
    },
    4: {
      es: { title: 'Mono Brutal', vibe: 'Confianza de ingeniería sin filtros' },
      ca: { title: 'Mono Brutal', vibe: 'Confiança d’enginyeria sense filtres' },
    },
    5: {
      es: { title: 'Aurora de Cristal', vibe: 'SaaS claro con glassmorphism' },
      ca: { title: 'Aurora de Vidre', vibe: 'SaaS clar amb glassmorphism' },
    },
    6: {
      es: { title: 'Flor Neural', vibe: 'Hero líquido de “cerebro”' },
      ca: { title: 'Flor Neural', vibe: 'Hero líquid de “cervell”' },
    },
    7: {
      es: { title: 'Anatomía del Agente', vibe: 'Mapa corporal + stack cognitivo' },
      ca: { title: "Anatomia de l'Agent", vibe: 'Mapa corporal + stack cognitiu' },
    },
    8: {
      es: { title: 'Bento Pop', vibe: 'Historia de producto por bloques' },
      ca: { title: 'Bento Pop', vibe: 'Història de producte per blocs' },
    },
    9: {
      es: { title: 'Línea Suiza', vibe: 'Editorial minimalista' },
      ca: { title: 'Línia Suïssa', vibe: 'Editorial minimalista' },
    },
    10: {
      es: { title: 'Órbita Profunda', vibe: 'Control premium de misión' },
      ca: { title: 'Òrbita Profunda', vibe: 'Control premium de missió' },
    },
    11: {
      es: { title: 'Flujo Aurora', vibe: 'Header transparente + brillo cinematográfico' },
      ca: { title: 'Flux Aurora', vibe: 'Header transparent + llum cinematogràfica' },
    },
    12: {
      es: { title: 'Home de Galería Legacy', vibe: 'Índice de homepages anteriores' },
      ca: { title: 'Home de Galeria Legacy', vibe: 'Índex de homepages anteriors' },
    },
  }
  const localized = map[theme.id]?.[locale]
  if (!localized) return theme
  return { ...theme, title: localized.title, vibe: localized.vibe }
}
