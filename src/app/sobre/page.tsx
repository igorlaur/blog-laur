import Link from 'next/link'
import { Metadata } from 'next'
import { 
  UserIcon, 
  HeartIcon, 
  LightbulbIcon,
  GlobeIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  MapPinIcon,
  MailIcon
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre o Blog Laur | Nossa História e Missão',
  description: 'Conheça a história do Blog Laur, nossa missão de informar e conectar pessoas através de conteúdo relevante sobre vida urbana, carreira, tecnologia e muito mais.',
  keywords: 'sobre, blog laur, missão, história, equipe, são paulo',
}

export default function SobrePage() {
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
                href="/posts"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Posts
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
            Sobre o <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog Laur</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Conectando pessoas através de informação relevante sobre vida urbana, carreira, 
            tecnologia e oportunidades em São Paulo e além.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Nossa História */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-100 p-3 rounded-xl">
                <HeartIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Nossa História</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  O <strong>Blog Laur</strong> nasceu da necessidade de democratizar informações essenciais 
                  para quem vive, estuda ou trabalha em grandes centros urbanos, especialmente São Paulo.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Fundado em 2024, começamos focando na vida estudantil no Butantã e região da USP, 
                  mas rapidamente expandimos para abranger temas como carreira profissional, tecnologia, 
                  gastronomia, transporte urbano e até preparação para concursos como a Acadepol.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Hoje, somos uma referência em conteúdo prático e atualizado para milhares de leitores 
                  que buscam informações confiáveis para tomar melhores decisões em suas vidas pessoais e profissionais.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Marcos Importantes</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-600">
                      <strong>2024:</strong> Lançamento do blog
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="text-slate-600">
                      <strong>2024:</strong> Expansão para múltiplas categorias
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span className="text-slate-600">
                      <strong>2025:</strong> +10.000 leitores mensais
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Missão */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-purple-100 p-3 rounded-xl">
                <LightbulbIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Missão, Visão e Valores</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightbulbIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Missão</h3>
                <p className="text-slate-600 leading-relaxed">
                  Democratizar informações relevantes e práticas que ajudem pessoas a tomar 
                  melhores decisões em suas vidas pessoais e profissionais.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Visão</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ser a principal referência em conteúdo sobre vida urbana, carreira e 
                  oportunidades na América Latina.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Valores</h3>
                <p className="text-slate-600 leading-relaxed">
                  Transparência, qualidade da informação, acessibilidade e compromisso 
                  com o crescimento pessoal e profissional dos nossos leitores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossas Categorias */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Nossas Categorias de Conteúdo
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCapIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Vida Estudantil</h3>
                <p className="text-slate-600 text-sm">
                  Dicas sobre moradia, estudo, alimentação e como aproveitar ao máximo a vida universitária.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BriefcaseIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Carreira</h3>
                <p className="text-slate-600 text-sm">
                  Estratégias para desenvolvimento profissional, networking e oportunidades no mercado de trabalho.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Acadepol</h3>
                <p className="text-slate-600 text-sm">
                  Preparação para concursos policiais, carreira na segurança pública e dicas de estudo específicas.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold">🍽️</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Gastronomia</h3>
                <p className="text-slate-600 text-sm">
                  Guias gastronômicos, restaurantes, receitas e cultura culinária paulistana e brasileira.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPinIcon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Transporte</h3>
                <p className="text-slate-600 text-sm">
                  Mobilidade urbana, dicas de transporte público, aplicativos e como se locomover eficientemente.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="bg-cyan-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-cyan-600 font-bold">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Tecnologia</h3>
                <p className="text-slate-600 text-sm">
                  Inovação, startups, carreira tech, tendências tecnológicas e o ecossistema de inovação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-green-100 p-3 rounded-xl">
                <UserIcon className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Nossa Equipe</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">IL</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Igor Laur</h3>
                <p className="text-blue-600 font-medium mb-3">Fundador & Editor-Chefe</p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Estudante apaixonado por tecnologia, inovação e desenvolvimento pessoal. 
                  Criou o Blog Laur para compartilhar conhecimento e ajudar pessoas a 
                  navegarem melhor pela vida urbana e profissional.
                </p>
                <div className="flex gap-3">
                  <div className="bg-white p-2 rounded-lg">
                    <MailIcon className="w-4 h-4 text-slate-600" />
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <span className="text-slate-600 font-bold">📱</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-800">Colaboradores</h3>
                <p className="text-slate-600 leading-relaxed">
                  O Blog Laur conta com uma rede de colaboradores especialistas em suas respectivas áreas:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <BriefcaseIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Especialistas em carreira e RH</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">💻</span>
                    </div>
                    <span className="text-slate-700">Profissionais de tecnologia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">⚖️</span>
                    </div>
                    <span className="text-slate-700">Especialistas em concursos públicos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">🍽️</span>
                    </div>
                    <span className="text-slate-700">Experts em gastronomia local</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Nosso Impacto</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Posts Publicados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
                <div className="text-blue-100">Leitores Mensais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">8</div>
                <div className="text-blue-100">Categorias de Conteúdo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Satisfação dos Leitores</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Quer fazer parte da nossa história?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Se você tem conhecimento para compartilhar ou quer sugerir temas, 
              adoraríamos ouvir de você!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Entre em Contato
              </Link>
              <Link 
                href="/"
                className="bg-white text-slate-700 px-8 py-3 rounded-full font-semibold border-2 border-slate-200 hover:border-blue-300 transition-all"
              >
                Explorar Posts
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}