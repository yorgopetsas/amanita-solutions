export type EventItem = {
  slug: string
  image: string
  imageAlt: string
  sourceUrl: string
}

export const events: EventItem[] = [
  {
    slug: 'ai-summit-barcelona-2026',
    image: 'https://ai-summit-barcelona-public.b-cdn.net/og-image.jpg',
    imageAlt: 'AI Summit Barcelona visual from official website',
    sourceUrl: 'https://aisummitbarcelona.com/',
  },
  {
    slug: 'mobile-world-congress',
    image: 'https://event-assets.gsma.com/_1200x630_crop_center-center_82_none/mwc-barcelona-press-zone-video-cameras-700x467.jpg?mtime=1750068067',
    imageAlt: 'Mobile World Congress press zone visual',
    sourceUrl: 'https://www.mwcbarcelona.com/press-zone',
  },
  {
    slug: '4yfn-startup-event',
    image: 'https://event-assets.gsma.com/4YFN/logos/_1200x630_crop_center-center_82_none/4yfn-logo-card-800x533.jpg?mtime=1750066362',
    imageAlt: '4YFN official event visual',
    sourceUrl: 'https://www.4yfn.com/',
  },
  {
    slug: 'barcelona-ai-week',
    image: '/magic-fountain-montjuic.jpg',
    imageAlt: 'Magic Fountain of Montjuic in Barcelona',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fuente_Magica_-_Magic_Fountain_in_Barcelona_at_Montjuic.jpg',
  },
  {
    slug: 'applied-agents-meetup',
    image: '/waterfall-parc-ciutadella.jpg',
    imageAlt: 'Waterfall in Parc de la Ciutadella',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Barcelona_Parc_Ciutadella_cascada.jpg',
  },
  {
    slug: 'enterprise-ai-roundtable',
    image: 'https://event-assets.gsma.com/_1200x630_crop_center-center_82_none/mwc-barcelona-press-zone-video-cameras-700x467.jpg?mtime=1750068067',
    imageAlt: 'Busy conference hall for enterprise AI roundtable',
    sourceUrl: 'https://www.mwcbarcelona.com/press-zone',
  },
]
