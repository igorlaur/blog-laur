'use client'

import { useState, useEffect } from 'react'
import { ChevronDownIcon, GlobeIcon } from 'lucide-react'
import { Link, useRouter, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'

interface Category {
  name: string
  slug: string
  count: number
  description: string
}

interface NavigationProps {
  categories?: Category[]
}

const localeLabels: Record<string, string> = {
  pt: '🇧🇷 PT',
  en: '🇺🇸 EN',
  es: '🇪🇸 ES',
}

export default function Navigation({ categories = [] }: NavigationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container') && !target.closest('.lang-container')) {
        setIsDropdownOpen(false)
        setIsLangOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setIsLangOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-2">
              <span className="text-white font-bold text-xl">🏛️</span>
            </div>
            <div>
              <span className="text-xl font-bold text-slate-800">Blog Laur</span>
              <p className="text-xs text-slate-500">{t('tagline')}</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            {/* Dropdown de Categorias */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <span>{t('categories')}</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link 
                    href="/categorias" 
                    className="block px-4 py-2 text-sm text-slate-600 hover:bg-gray-50 font-medium border-b border-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t('allCategories')}
                  </Link>
                  {categories.slice(0, 8).map((category) => (
                    <Link
                      key={category.slug}
                      href={`/categoria/${category.slug}`}
                      className="block px-4 py-2 text-sm text-slate-600 hover:bg-gray-50 capitalize"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {category.name} ({category.count})
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/sobre" className="text-slate-600 hover:text-blue-600 transition-colors">
              {t('about')}
            </Link>
            <Link href="/contato" className="text-slate-600 hover:text-blue-600 transition-colors">
              {t('contact')}
            </Link>

            {/* Seletor de idioma */}
            <div className="relative lang-container">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors border border-slate-200 rounded-full px-3 py-1 text-sm"
              >
                <GlobeIcon className="h-4 w-4" />
                <span>{localeLabels[locale]}</span>
                <ChevronDownIcon className={`h-3 w-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {Object.entries(localeLabels).map(([loc, label]) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${locale === loc ? 'text-blue-600 font-semibold' : 'text-slate-600'}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
