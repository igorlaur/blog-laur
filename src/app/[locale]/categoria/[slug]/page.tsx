import { notFound } from 'next/navigation'
import { getPostsByCategory, getAllCategories } from '@/lib/posts'
import CategoryPostsClient from '@/components/CategoryPostsClient'
import { Metadata } from 'next'

interface CategoryPageProps {
  params: Promise<{
    slug: string
    locale: string
  }>
}

const categoryColors: { [key: string]: string } = {
  'vida-estudantil': 'from-blue-500 to-indigo-600',
  'moradia': 'from-green-500 to-emerald-600',
  'lazer': 'from-purple-500 to-pink-600',
  'comercios': 'from-orange-500 to-red-600',
  'alimentacao': 'from-yellow-500 to-orange-600',
  'transporte': 'from-indigo-500 to-blue-600',
  'saude': 'from-green-600 to-teal-600',
  'servicos': 'from-gray-500 to-slate-600',
  'seguranca': 'from-red-500 to-pink-600',
  'financas': 'from-emerald-500 to-green-600'
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const categories = getAllCategories()
  const cat = categories.find(c => c.slug === slug)
  if (!cat) return {}

  const title = `${cat.name} — Artigos e Guias`
  const description = cat.description || `Todos os artigos sobre ${cat.name} no Butantã. Guias completos para estudantes.`
  const url = `https://blog.laur.com.br/${locale}/categoria/${slug}`

  return {
    title,
    description,
    openGraph: { title, description, url, type: 'website' },
    alternates: {
      canonical: url,
      languages: {
        pt: `https://blog.laur.com.br/pt/categoria/${slug}`,
        en: `https://blog.laur.com.br/en/categoria/${slug}`,
        es: `https://blog.laur.com.br/es/categoria/${slug}`,
      },
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  
  const categories = getAllCategories()
  const currentCategory = categories.find(cat => cat.slug === slug)
  
  if (!currentCategory) notFound()
  
  const posts = getPostsByCategory(currentCategory.name)
  
  if (!posts || posts.length === 0) notFound()
  
  const categoryColor = categoryColors[slug] || 'from-blue-500 to-indigo-600'
  
  return (
    <CategoryPostsClient 
      posts={posts}
      categoryName={currentCategory.name}
      categorySlug={slug}
      categoryColor={categoryColor}
    />
  )
}
