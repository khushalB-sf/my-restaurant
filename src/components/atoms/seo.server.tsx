// src/components/SEO.tsx
import { useEffect } from 'react'

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
  useEffect(() => {
    document.title = title

    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMeta('description', description)
    updateMeta('keywords', keywords)
    updateMeta('viewport', 'width=device-width, initial-scale=1.0')

    const updateProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateProperty('og:title', title)
    updateProperty('og:description', description)
    updateProperty('og:image', image)
    updateProperty('og:url', url)

    updateMeta('twitter:card', 'summary_large_image')
  }, [title, description, keywords, image, url])

  return null
}
