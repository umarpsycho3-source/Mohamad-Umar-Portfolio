import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Hide admin and api routes from search engines
    },
    sitemap: 'https://umar-portfolio.com/sitemap.xml',
  }
}
