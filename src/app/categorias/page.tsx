import Link from 'next/link'
import { Metadata } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/posts'
import { 
  GraduationCapIcon,
  BriefcaseIcon,
  MapPinIcon,
  SearchIcon,
  TrendingUpIcon,
  HeartIcon
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Categorias | Blog Laur - Explore por Tema',
  description: 'Explore todos os temas do Blog Laur: Vida Estudantil, Carreira, Acadepol, Tecnologia, Gastronomia, Transporte e muito mais.',
  keywords: 'categorias, temas, vida estudantil, carreira, acadepol, tecnologia, gastronomia, transporte',
}

export default function CategoriasPage() {
  const allPosts = getAllPosts()
  const categories = getAllCategories()

  // Definir ícones e cores para cada categoria
  const categoryConfig = {
    'Vida Estudantil': {
      icon: '🎓',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      description: 'Dicas sobre moradia, estudos, alimentação e vida universitária'
    },
    'Carreira': {
      icon: '💼',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      description: 'Desenvolvimento profissional, networking e oportunidades de trabalho'
    },
    'Acadepol': {
      icon: '⚖️',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      description: 'Preparação para concursos policiais e carreira na segurança pública'
    },
    'Tecnologia': {
      icon: '💻',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100',
      description: 'Inovação, startups, programação e tendências tecnológicas'
    },
    'Gastronomia': {
      icon: '🍽️',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      description: 'Restaurantes, receitas, cultura culinária e guias gastronômicos'
    },
    'Transporte': {
      icon: '🚇',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100',
      description: 'Mobilidade urbana, transporte público e dicas de locomoção'
    },
    'Finanças': {
      icon: '💰',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      description: 'Educação financeira, investimentos e controle de gastos'
    },
    'Saúde e Bem-estar': {
      icon: '🏥',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100',
      description: 'Saúde física e mental, exercícios e qualidade de vida'
    },
    'Cultura': {
      icon: '🎭',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
      description: 'Eventos culturais, arte, música e entretenimento'
    },
    'Turismo': {
      icon: '✈️',
      color: 'from-sky-500 to-sky-600',
      bgColor: 'from-sky-50 to-sky-100',
      description: 'Viagens, destinos, dicas de turismo e experiências'
    }
  }

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
                <p className="text-xs text-slate-500">Vida Urbana & Carreira</p>
              </div>
            </Link>
            <div className="flex items-center gap-6">
              <Link 
                href="/"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Início
              </Link>
              <Link 
                href="/sobre"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Sobre
              </Link>
              <Link 
                href="/contato"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Contato
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Explore por <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Categoria</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Encontre exatamente o que você procura! Navegue por nossas categorias 
            e descubra conteúdos relevantes para sua área de interesse.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Estatísticas Rápidas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{allPosts.length}</div>
                <div className="text-slate-600">Posts Publicados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length}</div>
                <div className="text-slate-600">Categorias Ativas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {allPosts.filter(post => post.featured).length}
                </div>
                <div className="text-slate-600">Posts em Destaque</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-slate-600">Horas de Leitura</div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de Categorias */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Nossas Categorias
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const config = categoryConfig[category.name as keyof typeof categoryConfig] || {
                icon: '📝',
                color: 'from-gray-500 to-gray-600',
                bgColor: 'from-gray-50 to-gray-100',
                description: 'Conteúdo diverso e interessante'
              }

              return (
                <Link 
                  key={category.slug} 
                  href={`/categoria/${category.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                    <div className={`bg-gradient-to-r ${config.bgColor} p-6`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{config.icon}</span>
                        <div className={`bg-gradient-to-r ${config.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                          {category.count} posts
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {config.description}
                      </p>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>Ver posts</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Posts Mais Populares por Categoria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Posts Mais Populares
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts
              .filter(post => post.featured || post.trending)
              .slice(0, 6)
              .map((post) => {
                const config = categoryConfig[post.category as keyof typeof categoryConfig] || {
                  icon: '📝',
                  color: 'from-gray-500 to-gray-600'
                }

                return (
                  <Link 
                    key={post.slug} 
                    href={`/posts/${post.slug}`}
                    className="group"
                  >
                    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{config.icon}</span>
                          <span className={`bg-gradient-to-r ${config.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                            {post.category}
                          </span>
                          {post.featured && (
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                              ⭐ Destaque
                            </span>
                          )}
                          {post.trending && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                              🔥 Trending
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                          {post.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span>{post.date}</span>
                          <span>{post.readingTime}</span>
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              })}
          </div>
        </section>

        {/* Filtros e Busca */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <SearchIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-800">Encontre o que procura</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">🔍 Busca Avançada</h3>
                <p className="text-slate-600 mb-4">
                  Use nossa busca para encontrar posts específicos por palavra-chave, categoria ou autor.
                </p>
                <Link 
                  href="/busca"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <SearchIcon className="w-4 h-4" />
                  Buscar Posts
                </Link>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">📊 Filtros Inteligentes</h3>
                <p className="text-slate-600 mb-4">
                  Filtre por nível de dificuldade, tempo de leitura, data de publicação e muito mais.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Por Categoria
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Por Dificuldade
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Por Data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              📧 Não perca nenhum conteúdo novo!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Receba notificações sempre que publicarmos novos posts nas suas categorias favoritas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-full text-slate-800 outline-none"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
            <p className="text-xs text-blue-200 mt-4">
              * Sem spam. Cancele a qualquer momento.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}