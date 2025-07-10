// src/components/SEO.server.tsx
type SEOProps = Readonly<{
  title: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}>

export default function Seo({
  title,
  description = '',
  keywords = '',
  image = '',
  url = ''
}: SEOProps) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
  )
}
