import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { Post, PostMetadata, CategoryData, TagData } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkHtml).process(markdown)
  return result.toString()
}

export function getAllPosts(): Post[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.(md|mdx)$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content: rawContent } = matter(fileContents)
        
        const readTime = readingTime(rawContent)
        const excerpt = rawContent.substring(0, 160).replace(/\n/g, ' ') + '...'

        // Convert markdown to HTML synchronously for now
        // In a real app, you might want to do this asynchronously
        const content = rawContent

        return {
          slug,
          content,
          excerpt,
          readingTime: readTime.text,
          ...data,
        } as Post
      })

    return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export async function getPostBySlugWithHtml(slug: string): Promise<Post | null> {
  try {
    const posts = getAllPosts()
    const post = posts.find(post => post.slug === slug)
    if (!post) return null

    // Convert markdown to HTML
    const htmlContent = await markdownToHtml(post.content)
    
    return {
      ...post,
      content: htmlContent
    }
  } catch (error) {
    console.error('Error getting post by slug:', error)
    return null
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const posts = getAllPosts()
    return posts.find(post => post.slug === slug) || null
  } catch (error) {
    console.error('Error getting post by slug:', error)
    return null
  }
}

export function getFeaturedPosts(): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => post.featured).slice(0, 3)
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => 
    post.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllCategories(): CategoryData[] {
  const posts = getAllPosts()
  const categoryCounts: { [key: string]: number } = {}

  posts.forEach(post => {
    const category = post.category
    categoryCounts[category] = (categoryCounts[category] || 0) + 1
  })

  return Object.entries(categoryCounts).map(([name, count]) => ({
  name: name as PostCategory,
    count,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    description: getCategoryDescription(name),
    icon: getCategoryIcon(name),
    color: getCategoryColor(name)
  }))
}

export function getAllTags(): TagData[] {
  const posts = getAllPosts()
  const tagCounts: { [key: string]: number } = {}
  
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  return Object.entries(tagCounts).map(([name, count]) => ({
    name,
    count,
    slug: name.toLowerCase().replace(/\s+/g, '-')
  }))
}

export function searchPosts(query: string): Post[] {
  const posts = getAllPosts()
  const searchTerm = query.toLowerCase()
  
  return posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.toLowerCase().includes(searchTerm)
  )
}

export function getTrendingPosts(): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => post.trending).slice(0, 5)
}

export function getPostsByDifficulty(difficulty: string): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => 
    post.difficulty?.toLowerCase() === difficulty.toLowerCase()
  )
}

export function getPostsBySubcategory(subcategory: string): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => 
    post.subcategory?.toLowerCase() === subcategory.toLowerCase()
  )
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  const posts = getAllPosts()
  return posts
    .filter(post => 
      post.slug !== currentPost.slug && 
      (post.category === currentPost.category ||
       post.tags?.some(tag => currentPost.tags?.includes(tag)))
    )
    .slice(0, limit)
}

function getCategoryDescription(category: string): string {
  const descriptions: { [key: string]: string } = {
    'vida-estudantil': 'Guias sobre USP, Acadepol, São Judas e vida universitária no Butantã',
    'moradia': 'Tudo sobre kitnets, repúblicas e moradia estudantil na região',
    'lazer': 'Lugares de entretenimento, eventos e diversão no Butantã e arredores',
    'comércios': 'Lojas, mercados, farmácias e estabelecimentos comerciais locais',
    'alimentação': 'Restaurantes, lanchonetes, delivery e opções gastronômicas',
    'transporte': 'Metrô, ônibus, apps de transporte e mobilidade no Butantã',
    'saúde': 'Hospitais, UBS, clínicas e serviços de saúde da região',
    'serviços': 'Bancos, correios, cartórios e serviços essenciais',
    'segurança': 'Dicas de segurança, delegacias e contatos de emergência',
    'finanças': 'Dicas financeiras para estudantes, bolsas e economia'
  }
  
  return descriptions[category.toLowerCase()] || 'Informações úteis para vida no Butantã'
}

function getCategoryIcon(category: string): string {
  const icons: { [key: string]: string } = {
    'vida-estudantil': '🎓',
    'moradia': '🏠',
    'lazer': '🎮',
    'comércios': '🏪',
    'alimentação': '🍽️',
    'transporte': '🚌',
    'saúde': '🏥',
    'serviços': '🏛️',
    'segurança': '🛡️',
    'finanças': '💰'
  }
  return icons[category.toLowerCase()] || '📝'
}

function getCategoryColor(category: string): string {
  const colors: { [key: string]: string } = {
    'vida-estudantil': '#3B82F6',
    'moradia': '#10B981',
    'lazer': '#8B5CF6',
    'comércios': '#F59E0B',
    'alimentação': '#EF4444',
    'transporte': '#06B6D4',
    'saúde': '#EC4899',
    'serviços': '#6B7280',
    'segurança': '#F97316',
    'finanças': '#84CC16'
  }
  return colors[category.toLowerCase()] || '#6B7280'
}