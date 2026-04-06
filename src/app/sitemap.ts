import { MetadataRoute } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/posts'

const BASE_URL = 'https://blog.laur.com.br'
const LOCALES = ['pt', 'en', 'es']

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const categories = getAllCategories()

  // Páginas estáticas por locale
  const staticPages = ['', '/sobre', '/contato', '/categorias']
  const staticRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' : 'monthly',
      priority: page === '' ? 1.0 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}${page}`])
        ),
      },
    }))
  )

  // Posts por locale
  const postRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    posts.map((post) => ({
      url: `${BASE_URL}/${locale}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const,
      priority: post.featured ? 0.9 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}/posts/${post.slug}`])
        ),
      },
    }))
  )

  // Categorias por locale
  const categoryRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    categories.map((category) => ({
      url: `${BASE_URL}/${locale}/categoria/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}/categoria/${category.slug}`])
        ),
      },
    }))
  )

  return [...staticRoutes, ...postRoutes, ...categoryRoutes]
}
