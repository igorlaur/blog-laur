'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Calendar,
  Clock,
  Filter,
  Grid,
  List,
  Search,
  TrendingUp,
  Star
} from 'lucide-react'
import { Post } from '@/types/blog'

interface CategoryPostsClientProps {
  posts: Post[]
  categoryName: string
  categorySlug: string
  categoryColor: string
}

export default function CategoryPostsClient({ 
  posts, 
  categoryName, 
  categorySlug, 
  categoryColor 
}: CategoryPostsClientProps) {
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'readingTime'>('date')
  const [filterBy, setFilterBy] = useState<'all' | 'trending' | 'featured'>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts

    // Filtrar por termo de busca
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filtrar por tipo
    if (filterBy === 'trending') {
      filtered = filtered.filter(post => post.trending)
    } else if (filterBy === 'featured') {
      filtered = filtered.filter(post => post.featured)
    }

    // Ordenar
    filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title)
      } else if (sortBy === 'readingTime') {
        const aTime = parseInt(a.readingTime?.replace(' min', '') || '0')
        const bTime = parseInt(b.readingTime?.replace(' min', '') || '0')
        return aTime - bTime
      }
      return 0
    })

    return filtered
  }, [posts, searchTerm, filterBy, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header da categoria */}
      <div className={`bg-gradient-to-r ${categoryColor} py-16 px-4 text-white`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
              {categoryName}
            </h1>
            <p className="text-xl opacity-90 mb-6">
              {posts.length} {posts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
            </p>
          </div>
        </div>
      </div>

      {/* Controles de filtro e busca */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Busca */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filtros */}
            <div className="flex gap-4 items-center">
              {/* Filtro por tipo */}
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value as 'all' | 'trending' | 'featured')}
                className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Todos</option>
                <option value="trending">Em Alta</option>
                <option value="featured">Destaque</option>
              </select>

              {/* Ordenação */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'readingTime')}
                className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="date">Mais Recente</option>
                <option value="title">A-Z</option>
                <option value="readingTime">Tempo de Leitura</option>
              </select>

              {/* Modo de visualização */}
              <div className="flex bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : 'text-slate-500'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : 'text-slate-500'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de posts */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
          {filteredAndSortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
              }`}
            >
              {viewMode === 'grid' ? (
                // Grid view
                <>
                  {post.image && (
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      {post.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            Destaque
                          </span>
                        </div>
                      )}
                      {post.trending && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            Em Alta
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                      {post.readingTime && (
                        <>
                          <span>•</span>
                          <Clock className="h-4 w-4" />
                          {post.readingTime}
                        </>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                // List view
                <>
                  {post.image && (
                    <div className="md:w-48 h-48 md:h-auto relative overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 192px"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  )}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                        {post.readingTime && (
                          <>
                            <span>•</span>
                            <Clock className="h-4 w-4" />
                            {post.readingTime}
                          </>
                        )}
                        {post.featured && (
                          <>
                            <span>•</span>
                            <Star className="h-4 w-4 text-yellow-500" />
                          </>
                        )}
                        {post.trending && (
                          <>
                            <span>•</span>
                            <TrendingUp className="h-4 w-4 text-red-500" />
                          </>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 flex-1">
                        {post.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 4).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>

        {filteredAndSortedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">Nenhum artigo encontrado com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
  )
}