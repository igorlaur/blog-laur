import { notFound } from 'next/navigation'
import { getPostsByCategory, getAllCategories } from '@/lib/posts'
import CategoryPostsClient from '@/components/CategoryPostsClient'

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
