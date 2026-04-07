import { getPostBySlugWithHtml, getAllPosts, getAllCategories } from '@/lib/posts'
import { Link } from '@/i18n/navigation'
import { Metadata } from 'next'
import { ClockIcon, CalendarIcon, ArrowRightIcon, TagIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Navigation from '@/components/Navigation'

interface PostPageProps {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const post = await getPostBySlugWithHtml(slug)

  if (!post) {
    return { title: 'Post não encontrado', description: 'Este post não foi encontrado.' }
  }

  const url = `https://blog.laur.com.br/${locale}/posts/${slug}`

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags?.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
    alternates: {
      canonical: url,
      languages: {
        pt: `https://blog.laur.com.br/pt/posts/${slug}`,
        en: `https://blog.laur.com.br/en/posts/${slug}`,
        es: `https://blog.laur.com.br/es/posts/${slug}`,
      },
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

const categoryColors: Record<string, string> = {
  'Moradia':         'bg-blue-100 text-blue-700',
  'Transporte':      'bg-green-100 text-green-700',
  'Finanças':        'bg-amber-100 text-amber-700',
  'Vida Estudantil': 'bg-purple-100 text-purple-700',
  'Lazer':           'bg-pink-100 text-pink-700',
  'Alimentação':     'bg-orange-100 text-orange-700',
  'Saúde':           'bg-red-100 text-red-700',
  'Serviços':        'bg-slate-100 text-slate-700',
  'Segurança':       'bg-rose-100 text-rose-700',
  'Comércios':       'bg-teal-100 text-teal-700',
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug, locale } = await params
  const post = await getPostBySlugWithHtml(slug)
  const t = await getTranslations('post')
  const categories = getAllCategories()

  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image || undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author || 'Blog Laur',
      url: 'https://blog.laur.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Blog Laur',
      url: 'https://blog.laur.com.br',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://blog.laur.com.br/${locale}/posts/${slug}`,
    },
    keywords: post.tags?.join(', '),
    inLanguage: locale,
    about: {
      '@type': 'Place',
      name: 'Butantã, São Paulo',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
  }

  const catColor = categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <Navigation categories={categories} />

        <article className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">{t('home')}</Link>
            <span>/</span>
            <Link
              href={`/categoria/${post.category.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="hover:text-blue-600 transition-colors"
            >
              {post.category}
            </Link>
            <span>/</span>
            <span className="text-gray-600 line-clamp-1">{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className={`inline-block rounded-full text-xs font-medium px-3 py-1 ${catColor}`}>
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-block rounded-full text-xs font-medium px-3 py-1 bg-amber-100 text-amber-700">
                  Destaque
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-gray-500 mb-6 leading-relaxed">{post.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 pb-6 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4" />
                {post.readingTime}
              </span>
              {post.tags && post.tags.length > 0 && (
                <span className="flex items-center gap-1.5">
                  <TagIcon className="h-4 w-4" />
                  <span className="text-gray-400">{post.tags.slice(0, 3).join(', ')}</span>
                </span>
              )}
            </div>
          </header>

          {/* Cover Image */}
          {post.image && (
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10 bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none text-gray-800 prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:marker:text-blue-500 prose-blockquote:border-l-4 prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50 prose-blockquote:px-4 prose-blockquote:py-1 prose-blockquote:rounded-r-lg prose-code:bg-gray-100 prose-code:text-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-100 space-y-12">
            {/* Back link */}
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                ← Voltar ao Blog
              </Link>
              <Link
                href={`/categoria/${post.category.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline"
              >
                Ver mais em {post.category} <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Related Posts */}
            {getAllPosts()
              .filter((p) => p.slug !== post.slug && p.category === post.category)
              .slice(0, 2).length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-5">{t('relatedPosts')}</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {getAllPosts()
                    .filter((p) => p.slug !== post.slug && p.category === post.category)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <article key={relatedPost.slug}>
                        <Link href={`/posts/${relatedPost.slug}`} className="group block border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                          {relatedPost.image && (
                            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3 bg-gray-100">
                              <Image
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 100vw, 50vw"
                              />
                            </div>
                          )}
                          <span className={`inline-block rounded-full text-[11px] font-medium px-2 py-0.5 mb-2 ${categoryColors[relatedPost.category] ?? 'bg-gray-100 text-gray-600'}`}>
                            {relatedPost.category}
                          </span>
                          <h4 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                        </Link>
                      </article>
                    ))}
                </div>
              </div>
            )}
          </footer>
        </article>
      </div>
    </>
  )
}
