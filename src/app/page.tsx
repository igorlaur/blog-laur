import Link from 'next/link'
import { getAllPosts, getFeaturedPosts, getAllCategories } from '@/lib/posts'
import { 
  ClockIcon, 
  UserIcon, 
  MapPinIcon, 
  TrainIcon, 
  UtensilsIcon, 
  GraduationCapIcon,
  ShoppingBagIcon,
  HomeIcon,
  HeartIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
  BookOpenIcon,
  WifiIcon,
  PlusIcon,
  ArrowRightIcon,
  PhoneIcon,
  MailIcon,
  ExternalLinkIcon,
  Gamepad2Icon,
  CreditCardIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
  SettingsIcon
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function HomePage() {
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts()
  const recentPosts = allPosts.slice(0, 4)
  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header com Navigation */}
      <Navigation categories={categories} />

      {/* Hero Section - Butantã */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <MapPinIcon className="h-6 w-6 text-blue-200" />
                <span className="text-blue-200 font-medium">São Paulo • Zona Oeste</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="block">Butantã</span>
                <span className="text-3xl md:text-4xl text-blue-200">Sua vida aqui</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Descubra tudo sobre o bairro universitário mais vibrante de São Paulo. 
                Guias completos sobre moradia, transporte, gastronomia, vida acadêmica e muito mais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="#guias"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all text-center"
                >
                  Explorar Guias
                </Link>
                <Link 
                  href="#sobre-butanta"
                  className="bg-blue-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border-2 border-blue-300 hover:bg-blue-500/30 transition-all text-center"
                >
                  Sobre o Bairro
                </Link>
              </div>
            </div>
            
            {/* Estatísticas rápidas */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white">{allPosts.length}</div>
                <div className="text-blue-200">Guias Completos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white">{categories.length}</div>
                <div className="text-blue-200">Categorias</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-blue-200">Gratuito</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-200">Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre o Butantã */}
      <section id="sobre-butanta" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Conheça o Butantã
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Lar da USP e ponto de encontro de milhares de estudantes, o Butantã é muito mais que um bairro universitário
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
              <GraduationCapIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Centro Universitário</h3>
              <p className="text-slate-600 text-sm">Lar da USP, Acadepol, São Judas, Bucareste e outras instituições de ensino</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
              <TrainIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Transporte</h3>
              <p className="text-slate-600 text-sm">Linha 4-Amarela do metrô e diversas linhas de ônibus</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
              <UtensilsIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Gastronomia</h3>
              <p className="text-slate-600 text-sm">Centenas de restaurantes e lanchonetes para todos os gostos</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
              <HomeIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Moradia</h3>
              <p className="text-slate-600 text-sm">Kitnets, repúblicas e apartamentos para estudantes</p>
            </div>
          </div>

          {/* Informações importantes */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2 text-blue-600" />
                Localização
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Zona Oeste de São Paulo</li>
                <li>• Próximo à Cidade Universitária</li>
                <li>• Fácil acesso ao centro</li>
                <li>• Bem conectado por transporte público</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                <UsersIcon className="h-5 w-5 mr-2 text-green-600" />
                Demografia
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>• População jovem e diversa</li>
                <li>• Muitos estudantes universitários</li>
                <li>• Ambiente multicultural</li>
                <li>• Comunidade ativa e engajada</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                <HeartIcon className="h-5 w-5 mr-2 text-red-600" />
                Qualidade de Vida
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Ambiente seguro e familiar</li>
                <li>• Muitas áreas verdes</li>
                <li>• Vida noturna vibrante</li>
                <li>• Custo de vida acessível</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guias por Categoria */}
      <section id="guias" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Guias Essenciais
            </h2>
            <p className="text-xl text-slate-600">
              Tudo que você precisa saber para viver bem no Butantã
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categories.slice(0, 6).map((category, index) => {
              // Mapeamento correto de ícones por categoria
              const getIconForCategory = (categoryName: string) => {
                const categoryMap: { [key: string]: any } = {
                  'Vida Estudantil': GraduationCapIcon,
                  'Moradia': HomeIcon,
                  'Lazer': Gamepad2Icon,
                  'Comércios': ShoppingBagIcon,
                  'Alimentação': UtensilsIcon,
                  'Transporte': TrainIcon,
                  'Saúde': StethoscopeIcon,
                  'Serviços': SettingsIcon,
                  'Segurança': ShieldCheckIcon,
                  'Finanças': CreditCardIcon
                }
                return categoryMap[categoryName] || BookOpenIcon
              }
              
              const Icon = getIconForCategory(category.name)
              
              const colorClasses = [
                { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-500', pill: 'bg-blue-100 text-blue-800' },
                { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-500', pill: 'bg-orange-100 text-orange-800' },
                { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-500', pill: 'bg-green-100 text-green-800' },
                { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-500', pill: 'bg-purple-100 text-purple-800' },
                { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-500', pill: 'bg-pink-100 text-pink-800' },
                { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-500', pill: 'bg-indigo-100 text-indigo-800' }
              ]
              
              const colorClass = colorClasses[index] || colorClasses[0]
              
              return (
                <Link 
                  key={category.slug}
                  href={`/categoria/${category.slug}`}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 ${colorClass.border}`}
                >
                  <div className={`${colorClass.bg} rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6`}>
                    <Icon className={`h-8 w-8 ${colorClass.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 capitalize group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`${colorClass.pill} px-3 py-1 rounded-full text-sm font-medium`}>
                      {category.count} guias
                    </span>
                    <ArrowRightIcon className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center">
            <Link 
              href="/categorias"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Ver Todas as Categorias</span>
              <PlusIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Posts em Destaque */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Posts em Destaque
              </h2>
              <p className="text-xl text-slate-600">
                Os guias mais populares e úteis da nossa comunidade
              </p>
            </div>
            <Link 
              href="/posts"
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1"
            >
              <span>Ver todos</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 4).map((post, index) => (
              <article key={post.slug} className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    {post.trending && (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <TrendingUpIcon className="h-3 w-3" />
                        <span>Em alta</span>
                      </span>
                    )}
                    <span className="text-slate-500 text-sm flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/posts/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/posts/${post.slug}`}
                      className="text-blue-600 hover:text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Ler guia completo
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                      <span className="flex items-center gap-1">
                        <UserIcon className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Úteis do Butantã */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Recursos Úteis
            </h2>
            <p className="text-xl text-slate-600">
              Informações essenciais para sua vida no Butantã
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <TrainIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Transporte</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Estação Butantã (Linha 4)</li>
                <li>• Terminal Butantã</li>
                <li>• Linhas de ônibus principais</li>
                <li>• Ciclovias e bike sharing</li>
              </ul>
              <Link href="/categoria/transporte" className="text-blue-600 text-sm font-medium mt-3 inline-block hover:underline">
                Ver guia completo →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <UtensilsIcon className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Alimentação</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Restaurantes universitários</li>
                <li>• Lanchonetes e bares</li>
                <li>• Mercados e padarias</li>
                <li>• Delivery e apps</li>
              </ul>
              <Link href="/categoria/gastronomia" className="text-orange-600 text-sm font-medium mt-3 inline-block hover:underline">
                Ver guia completo →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <HomeIcon className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Moradia</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Kitnets e apartamentos</li>
                <li>• Repúblicas estudantis</li>
                <li>• Dicas de aluguel</li>
                <li>• Valores e localização</li>
              </ul>
              <Link href="/categoria/moradia" className="text-purple-600 text-sm font-medium mt-3 inline-block hover:underline">
                Ver guia completo →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <WifiIcon className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Serviços</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Internet e telecom</li>
                <li>• Bancos e caixas</li>
                <li>• Farmácias 24h</li>
                <li>• Lavanderia e limpeza</li>
              </ul>
              <Link href="/categoria/dicas" className="text-green-600 text-sm font-medium mt-3 inline-block hover:underline">
                Ver guia completo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergência e Contatos */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Contatos de Emergência
            </h2>
            <p className="text-xl text-slate-600">
              Números importantes para sua segurança
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <PhoneIcon className="h-10 w-10 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Emergência</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">190</p>
              <p className="text-sm text-slate-600">Polícia Militar</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <PhoneIcon className="h-10 w-10 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Bombeiros</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">193</p>
              <p className="text-sm text-slate-600">Corpo de Bombeiros</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <PhoneIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">SAMU</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">192</p>
              <p className="text-sm text-slate-600">Atendimento Médico</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <PhoneIcon className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Defesa Civil</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">199</p>
              <p className="text-sm text-slate-600">Proteção Civil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <MailIcon className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Fique sempre atualizado
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Receba as melhores dicas sobre vida no Butantã diretamente no seu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor email"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-4 focus:ring-white/20 outline-none text-lg"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all text-lg whitespace-nowrap">
              Quero receber
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Sem spam • Cancele quando quiser • Conteúdo exclusivo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3">
                  <MapPinIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Blog Laur</span>
                  <p className="text-slate-400 text-sm">Vida no Butantã</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 text-lg">
                Seu guia completo para viver, estudar e prosperar no Butantã e região da USP.
              </p>
              <div className="flex space-x-4">
                <div className="bg-slate-800 rounded-lg p-3">
                  <MapPinIcon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-medium">Butantã, São Paulo</p>
                  <p className="text-slate-400 text-sm">Zona Oeste • Próximo à USP</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Categorias</h3>
              <ul className="space-y-3 text-slate-400">
                {categories.slice(0, 6).map((category) => (
                  <li key={category.slug}>
                    <Link href={`/categoria/${category.slug}`} className="hover:text-white transition-colors capitalize">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Links Úteis</h3>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre o Blog</Link></li>
                <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
                <li><Link href="/categorias" className="hover:text-white transition-colors">Todas as Categorias</Link></li>
                <li>
                  <a href="https://www.usp.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1">
                    <span>Site da USP</span>
                    <ExternalLinkIcon className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-center md:text-left">
                &copy; 2025 Blog Laur. Todos os direitos reservados.
              </p>
              <p className="text-slate-400 text-center md:text-right mt-4 md:mt-0">
                Feito com ❤️ para a comunidade do Butantã
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}