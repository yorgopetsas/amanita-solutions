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
