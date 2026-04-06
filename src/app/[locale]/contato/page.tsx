'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { 
  MailIcon, 
  MapPinIcon,
  SendIcon,
  CheckCircleIcon,
  MessageSquareIcon,
  UserIcon,
  LightbulbIcon
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ContatoPage() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ nome: '', email: '', assunto: '', mensagem: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
              <Link href="/sobre" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Sobre</Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Tem alguma dúvida, sugestão ou quer colaborar conosco? Adoraríamos ouvir de você!
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <MessageSquareIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Envie sua Mensagem</h2>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{t('successTitle')}</h3>
                  <p className="text-slate-600 mb-6">{t('successDesc')}</p>
                  <button onClick={() => setIsSubmitted(false)} className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-semibold text-slate-700 mb-2">{t('name')} *</label>
                      <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder={t('name')} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">{t('email')} *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder={t('email')} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="assunto" className="block text-sm font-semibold text-slate-700 mb-2">{t('subject')} *</label>
                    <input type="text" id="assunto" name="assunto" value={formData.assunto} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder={t('subject')} />
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-slate-700 mb-2">{t('message')} *</label>
                    <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} required rows={6}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder={t('message')} />
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                    {isSubmitting ? (
                      <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div><span>{t('sending')}</span></>
                    ) : (
                      <><SendIcon className="w-5 h-5" /><span>{t('send')}</span></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <MailIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">E-mail</h3>
              <p className="text-blue-600 font-medium">contato@blog.laur.com.br</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <MapPinIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Localização</h3>
              <p className="text-slate-600">Butantã, São Paulo - SP</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <LightbulbIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Horário</h3>
              <p className="text-slate-600">Segunda a Sexta, 9h-18h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
