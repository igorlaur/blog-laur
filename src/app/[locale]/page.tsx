import { getAllPosts, getFeaturedPosts, getAllCategories } from '@/lib/posts'
import Navigation from '@/components/Navigation'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params
  const title = 'Blog Laur — Notícias e dicas sobre o Butantã'
  const description =
    'Moradia, transporte, custo de vida e novidades sobre o Butantã, zona oeste de São Paulo. Para estudantes, jovens profissionais e quem quer morar bem.'
  return {
    title,
    description,
    openGraph: { title, description, url: `https://blog.laur.com.br/${locale}`, type: 'website' },
    alternates: {
      canonical: `https://blog.laur.com.br/${locale}`,
      languages: {
        pt: 'https://blog.laur.com.br/pt',
        en: 'https://blog.laur.com.br/en',
        es: 'https://blog.laur.com.br/es',
      },
    },
  }
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

function CategoryBadge({ name, small = false }: { name: string; small?: boolean }) {
  const cls = categoryColors[name] ?? 'bg-gray-100 text-gray-600'
  return (
    <span
      className={`inline-block rounded-full font-medium ${
        small ? 'text-[11px] px-2 py-0.5' : 'text-xs px-3 py-1'
      } ${cls}`}
    >
      {name}
    </span>
  )
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default async function HomePage() {
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts()
  const categories = getAllCategories()
  const t = await getTranslations('home')

  const heroPost = featuredPosts.find((p) => p.trending) ?? featuredPosts[0] ?? allPosts[0]
  const sidebarPosts = allPosts.filter((p) => p.slug !== heroPost?.slug).slice(0, 3)
  const gridPosts = allPosts
    .filter((p) => p.slug !== heroPost?.slug && !sidebarPosts.find((s) => s.slug === p.slug))
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      <Navigation categories={categories} />

      {/* Hero strip */}
      <div className="border-b border-gray-100 bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            {t('zone')}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Tudo sobre o Butantã
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Notícias, dicas e novidades sobre moradia, transporte e vida no bairro mais
            universitário de São Paulo.
          </p>
        </div>
      </div>

      {/* Em destaque */}
      {heroPost && (
        <section className="py-12 px-4 border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              Em destaque
            </p>
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Hero article */}
              <article className="lg:col-span-2">
                <Link href={`/posts/${heroPost.slug}`} className="group block">
                  {heroPost.image && (
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-gray-100">
                      <Image
                        src={heroPost.image}
                        alt={heroPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        priority
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <CategoryBadge name={heroPost.category} />
                    {heroPost.trending && (
                      <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">
                        Em alta
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {heroPost.title}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-4 line-clamp-3">
                    {heroPost.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {formatDate(heroPost.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="h-3.5 w-3.5" />
                      {heroPost.readingTime}
                    </span>
                  </div>
                </Link>
              </article>

              {/* Sidebar */}
              <div className="flex flex-col divide-y divide-gray-100">
                {sidebarPosts.map((post) => (
                  <article key={post.slug} className="py-5 first:pt-0 last:pb-0">
                    <Link href={`/posts/${post.slug}`} className="group flex gap-4">
                      {post.image && (
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="80px"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <CategoryBadge name={post.category} small />
                        <h3 className="font-semibold text-gray-900 mt-1.5 text-sm leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[11px] text-gray-400 mt-1">{formatDate(post.date)}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mais artigos */}
      {gridPosts.length > 0 && (
        <section className="py-12 px-4 border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Mais artigos
              </p>
              <Link
                href="/categorias"
                className="text-xs text-blue-600 hover:underline flex items-center gap-1"
              >
                {t('allCategoriesBtn')} <ArrowRightIcon className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {gridPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/posts/${post.slug}`} className="block">
                    {post.image && (
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    )}
                    <CategoryBadge name={post.category} small />
                    <h3 className="font-semibold text-gray-900 mt-2 text-sm leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1.5">{formatDate(post.date)}</p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Temas */}
      <section className="py-10 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Explorar por tema
          </p>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categoria/${cat.slug}`}
                className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-all"
              >
                {cat.name}
                <span className="ml-1.5 text-xs text-gray-400">({cat.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-[11px]">BL</span>
                </div>
                <span className="font-bold text-white">Blog Laur</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{t('footerTagline')}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Temas</h3>
              <ul className="space-y-2">
                {categories.slice(0, 6).map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/categoria/${cat.slug}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-4">{t('footerLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/sobre" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {t('footerAbout')}
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {t('footerContact')}
                  </Link>
                </li>
                <li>
                  <Link href="/categorias" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {t('footerCategories')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500">&copy; 2026 Blog Laur. {t('footerRights')}</p>
            <p className="text-xs text-gray-500">Butantã, São Paulo</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
