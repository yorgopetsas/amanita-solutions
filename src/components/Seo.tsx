import { Helmet } from 'react-helmet-async'

type SeoProps = {
  title: string
  description: string
  path: string
  image?: string
}

const SITE_NAME = 'amanita.barcelona'
const BASE_URL = 'https://www.amanita.barcelona'
const DEFAULT_IMAGE = `${BASE_URL}/favicon.svg`

export function Seo({ title, description, path, image }: SeoProps) {
  const canonical = `${BASE_URL}${path}`
  const ogImage = image ?? DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
