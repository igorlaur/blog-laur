'use client'

import { useState, useEffect } from 'react'
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react'
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
  pt: 'PT',
  en: 'EN',
  es: 'ES',
}

export default function Navigation({ categories = [] }: NavigationProps) {
  const [isCatOpen, setIsCatOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.nav-dd')) {
        setIsCatOpen(false)
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const switchLocale = (l: string) => {
    router.replace(pathname, { locale: l })
    setIsLangOpen(false)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-[60px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-[11px] tracking-tight">BL</span>
          </div>
          <span className="font-bold text-gray-900 text-base">Blog Laur</span>
          <span className="hidden sm:block text-gray-300 text-sm select-none">|</span>
          <span className="hidden sm:block text-gray-400 text-xs">Butantã, SP</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 flex-1">
          <div className="relative nav-dd">
            <button
              onClick={() => { setIsCatOpen(!isCatOpen); setIsLangOpen(false) }}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('categories')}
              <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform ${isCatOpen ? 'rotate-180' : ''}`} />
            </button>
            {isCatOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                <Link
                  href="/categorias"
                  onClick={() => setIsCatOpen(false)}
                  className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 border-b border-gray-100 mb-1"
                >
                  {t('allCategories')}
                </Link>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/categoria/${cat.slug}`}
                    onClick={() => setIsCatOpen(false)}
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-gray-400">{cat.count}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/sobre" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            {t('about')}
          </Link>
          <Link href="/contato" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            {t('contact')}
          </Link>
        </div>

        {/* Right: Language + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <div className="relative nav-dd">
            <button
              onClick={() => { setIsLangOpen(!isLangOpen); setIsCatOpen(false) }}
              className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg px-2.5 py-1.5 transition-colors"
            >
              {localeLabels[locale]}
              <ChevronDownIcon className="h-3 w-3" />
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-20 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50">
                {(['pt', 'en', 'es'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-gray-50 ${locale === l ? 'font-semibold text-blue-600' : 'text-gray-600'}`}
                  >
                    {localeLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="md:hidden p-1.5 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
          >
            {isMobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          <Link
            href="/categorias"
            className="block py-2 text-sm font-semibold text-gray-700 hover:text-blue-600"
            onClick={() => setIsMobileOpen(false)}
          >
            {t('allCategories')}
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="block py-1.5 pl-3 text-sm text-gray-600 hover:text-blue-600 border-l-2 border-gray-100"
              onClick={() => setIsMobileOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 mt-2 space-y-1">
            <Link href="/sobre" className="block py-2 text-sm text-gray-600 hover:text-blue-600" onClick={() => setIsMobileOpen(false)}>
              {t('about')}
            </Link>
            <Link href="/contato" className="block py-2 text-sm text-gray-600 hover:text-blue-600" onClick={() => setIsMobileOpen(false)}>
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
