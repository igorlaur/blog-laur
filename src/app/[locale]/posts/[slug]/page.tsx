import { getPostBySlugWithHtml, getAllPosts } from '@/lib/posts'
import { Link } from '@/i18n/navigation'
import { Metadata } from 'next'
import { ClockIcon, UserIcon, ArrowLeftIcon, TagIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

interface PostPageProps {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlugWithHtml(slug)
  
  if (!post) {
    return { title: 'Post não encontrado', description: 'Este post não foi encontrado.' }
  }

  return {
    title: `${post.title} | Blog Laur`,
    description: post.description,
    keywords: post.tags?.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    }
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlugWithHtml(slug)
  const t = await getTranslations('post')
  
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-2">
                <span className="text-white font-bold text-xl">🎓</span>
              </div>
              <div>
                <span className="text-xl font-bold text-slate-800">Blog Laur</span>
                <p className="text-xs text-slate-500">Vida Estudantil</p>
              </div>
            </Link>
            <Link 
              href="/"
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium flex items-center gap-2"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              {t('backToBlog')}
            </Link>
          </div>
        </nav>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">{t('home')}</Link>
          <span>/</span>
          <Link href="/posts" className="hover:text-blue-600 transition-colors">{t('posts')}</Link>
          <span>/</span>
          <span className="text-slate-800">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
            {post.featured && (
              <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                ⭐ Destaque
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">{post.description}</p>

          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📖</span>
              <span>{post.readingTime}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <TagIcon className="w-4 h-4" />
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none text-slate-800 prose-headings:text-slate-900 prose-h2:text-slate-900 prose-h3:text-slate-900 prose-p:text-slate-800 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-800 prose-ol:text-slate-800 prose-li:text-slate-800 prose-li:marker:text-blue-600 prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50/50 prose-code:bg-slate-100 prose-code:text-slate-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Gostou deste post?</h3>
            <p className="text-slate-600 mb-6">Compartilhe com seus amigos e continue explorando nosso blog!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Ver mais posts
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('relatedPosts')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {getAllPosts()
                .filter(p => p.slug !== post.slug && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <article key={relatedPost.slug} className="group">
                    <Link href={`/posts/${relatedPost.slug}`}>
                      <div className="border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">{relatedPost.category}</span>
                          <span className="text-slate-400 text-xs">{relatedPost.date}</span>
                        </div>
                        <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{relatedPost.title}</h4>
                        <p className="text-slate-600 text-sm line-clamp-2">{relatedPost.description}</p>
                      </div>
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}
