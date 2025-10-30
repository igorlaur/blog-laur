'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from 'lucide-react'

interface Category {
  name: string
  slug: string
  count: number
  description: string
}

interface NavigationProps {
  categories?: Category[]
}

export default function Navigation({ categories = [] }: NavigationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
              <p className="text-xs text-slate-500">Vida no Butantã</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            {/* Dropdown de Categorias */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <span>Categorias</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link 
                    href="/categorias" 
                    className="block px-4 py-2 text-sm text-slate-600 hover:bg-gray-50 font-medium border-b border-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Ver Todas as Categorias
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
              Sobre
            </Link>
            <Link href="/contato" className="text-slate-600 hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}