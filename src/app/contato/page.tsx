'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon,
  SendIcon,
  CheckCircleIcon,
  MessageSquareIcon,
  UserIcon,
  LightbulbIcon
} from 'lucide-react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
                href="/posts"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Posts
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Entre em <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contato</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Tem alguma dúvida, sugestão ou quer colaborar conosco? Adoraríamos ouvir de você!
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulário de Contato */}
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
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Mensagem Enviada!</h3>
                  <p className="text-slate-600 mb-6">
                    Obrigado pelo seu contato. Responderemos em breve!
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-semibold text-slate-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-semibold text-slate-700 mb-2">
                      Assunto *
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="sugestao">Sugestão de Conteúdo</option>
                      <option value="colaboracao">Colaboração/Parceria</option>
                      <option value="feedback">Feedback do Blog</option>
                      <option value="duvida">Dúvida Técnica</option>
                      <option value="imprensa">Imprensa/Mídia</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-slate-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Escreva sua mensagem aqui..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <SendIcon className="w-5 h-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            {/* Informações Diretas */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MailIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">E-mail</p>
                    <p className="text-slate-600">contato@bloglaur.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <PhoneIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">WhatsApp</p>
                    <p className="text-slate-600">(11) 9 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPinIcon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Localização</p>
                    <p className="text-slate-600">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horário de Atendimento */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">⏰ Horário de Atendimento</h3>
              <div className="space-y-2 text-slate-600">
                <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                <p><strong>Sábados:</strong> 9h às 14h</p>
                <p><strong>Domingos:</strong> Fechado</p>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                * Tempo de resposta médio: 24 horas em dias úteis
              </p>
            </div>

            {/* FAQ Rápido */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <LightbulbIcon className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Perguntas Frequentes</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Posso sugerir temas para posts?</p>
                  <p className="text-slate-600 text-sm">Claro! Adoramos sugestões dos leitores.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Vocês aceitam guest posts?</p>
                  <p className="text-slate-600 text-sm">Sim, entre em contato para discutirmos.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Como posso colaborar?</p>
                  <p className="text-slate-600 text-sm">Há várias formas! Envie uma mensagem.</p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">🚀 Siga-nos</h3>
              <p className="text-blue-100 mb-6">
                Fique por dentro das novidades e interaja conosco nas redes sociais!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="bg-white/20 p-3 rounded-lg text-center hover:bg-white/30 transition-colors">
                  <span className="block text-2xl mb-1">📘</span>
                  <span className="text-sm">Facebook</span>
                </a>
                <a href="#" className="bg-white/20 p-3 rounded-lg text-center hover:bg-white/30 transition-colors">
                  <span className="block text-2xl mb-1">📷</span>
                  <span className="text-sm">Instagram</span>
                </a>
                <a href="#" className="bg-white/20 p-3 rounded-lg text-center hover:bg-white/30 transition-colors">
                  <span className="block text-2xl mb-1">🐦</span>
                  <span className="text-sm">Twitter</span>
                </a>
                <a href="#" className="bg-white/20 p-3 rounded-lg text-center hover:bg-white/30 transition-colors">
                  <span className="block text-2xl mb-1">💼</span>
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa ou Informações Adicionais */}
        <section className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Outras Formas de Colaborar
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Guest Post</h3>
                <p className="text-slate-600">
                  Tem conhecimento para compartilhar? Envie sua proposta de artigo!
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightbulbIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Sugestões</h3>
                <p className="text-slate-600">
                  Tem uma ideia de conteúdo? Queremos ouvir suas sugestões!
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquareIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Feedback</h3>
                <p className="text-slate-600">
                  Sua opinião é importante para melhorarmos constantemente!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}