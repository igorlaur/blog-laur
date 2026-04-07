import { Link } from '@/i18n/navigation'
import { Metadata } from 'next'
import { 
  UserIcon, 
  HeartIcon, 
  LightbulbIcon,
  MapPinIcon,
  MailIcon
} from 'lucide-react'
import { getTranslations } from 'next-intl/server'

interface SobrePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: SobrePageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations('about')
  const title = t('title')
  const description = t('description')
  const url = `https://blog.laur.com.br/${locale}/sobre`

  return {
    title,
    description,
    openGraph: { title, description, url, type: 'website' },
    alternates: {
      canonical: url,
      languages: {
        pt: 'https://blog.laur.com.br/pt/sobre',
        en: 'https://blog.laur.com.br/en/sobre',
        es: 'https://blog.laur.com.br/es/sobre',
      },
    },
  }
}

export default async function SobrePage() {
  const t = await getTranslations('about')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-2">
                <span className="text-white font-bold text-xl">🎓</span>
              </div>
              <div>
                <span className="text-xl font-bold text-slate-800">Blog Laur</span>
              </div>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">{t('backHome')}</Link>
              <Link href="/contato" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Contato</Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            {t('heading')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog Laur</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Conectando pessoas através de informação relevante sobre vida urbana, carreira, tecnologia e oportunidades em São Paulo e além.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
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
                  O <strong>Blog Laur</strong> nasceu da necessidade de democratizar informações essenciais para quem vive, estuda ou trabalha em grandes centros urbanos, especialmente São Paulo.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Fundado em 2024, começamos focando na vida estudantil no Butantã e região da USP, mas rapidamente expandimos para abranger temas como carreira profissional, tecnologia, gastronomia, transporte urbano e muito mais.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Marcos Importantes</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3"><div className="w-3 h-3 bg-blue-600 rounded-full"></div><span className="text-slate-600"><strong>2024:</strong> Lançamento do blog</span></div>
                  <div className="flex items-center gap-3"><div className="w-3 h-3 bg-purple-600 rounded-full"></div><span className="text-slate-600"><strong>2024:</strong> Expansão para múltiplas categorias</span></div>
                  <div className="flex items-center gap-3"><div className="w-3 h-3 bg-green-600 rounded-full"></div><span className="text-slate-600"><strong>2025:</strong> +10.000 leitores mensais</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-purple-100 p-3 rounded-xl">
                <LightbulbIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Missão, Visão e Valores</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightbulbIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Missão</h3>
                <p className="text-slate-600 leading-relaxed">Democratizar informações relevantes e práticas que ajudem pessoas a tomar melhores decisões.</p>
              </div>
              <div>
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Visão</h3>
                <p className="text-slate-600 leading-relaxed">Ser a principal referência em conteúdo sobre vida urbana e oportunidades no Brasil.</p>
              </div>
              <div>
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Valores</h3>
                <p className="text-slate-600 leading-relaxed">Transparência, qualidade, acessibilidade e compromisso com a comunidade.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-green-100 p-3 rounded-xl">
                <MailIcon className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Entre em Contato</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">Tem sugestões, parcerias ou quer contribuir com o Blog Laur? Adoraríamos ouvir você!</p>
                <Link href="/contato" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg">
                  <MailIcon className="w-5 h-5" />
                  Fale Conosco
                </Link>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Por que nos contatar?</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Sugestões de temas e pautas</li>
                  <li>• Parcerias e colaborações</li>
                  <li>• Anúncios e patrocínios</li>
                  <li>• Dúvidas sobre o conteúdo</li>
                  <li>• Feedback e melhorias</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
