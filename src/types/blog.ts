export interface PostMetadata {
  title: string
  description: string
  date: string
  category: PostCategory
  subcategory?: string
  tags: string[]
  author: string
  readingTime?: string
  featured?: boolean
  trending?: boolean
  difficulty?: 'Iniciante' | 'Intermediário' | 'Avançado'
  estimatedTime?: string
  image?: string
  slug: string
}

export interface Post extends PostMetadata {
  content: string
  excerpt: string
  resources?: PostResource[]
}

export interface PostResource {
  title: string
  url: string
  type: 'link' | 'download' | 'video' | 'tool'
  description?: string
}

export type PostCategory = 
  | 'Vida Estudantil'    // USP, Acadepol, São Judas, ENEM, vestibulares
  | 'Moradia'           // Kitnets, repúblicas, dicas de aluguel
  | 'Lazer'             // Lugares de lazer, entretenimento, eventos
  | 'Comércios'         // Lojas, mercados, farmácias, serviços
  | 'Alimentação'       // Restaurantes, lanchonetes, delivery
  | 'Transporte'        // Metrô, ônibus, Uber, bike
  | 'Saúde'             // Hospitais, UBS, clínicas, emergências
  | 'Serviços'          // Bancos, correios, cartório, internet
  | 'Segurança'         // Dicas de segurança, delegacias, emergências
  | 'Finanças'          // Dicas financeiras para estudantes, bolsas

export interface SearchFilters {
  query: string
  category: string
  subcategory: string
  tag: string
  author: string
  difficulty: string
  trending: boolean
  sortBy: 'date' | 'title' | 'readingTime' | 'category'
  sortOrder: 'asc' | 'desc'
}

export interface CategoryData {
  name: PostCategory
  count: number
  slug: string
  description: string
  icon: string
  color: string
  subcategories?: string[]
}

export interface TagData {
  name: string
  count: number
  slug: string
}

export interface SectionData {
  title: string
  description: string
  icon: string
  link: string
  featured?: boolean
  color?: string
}

export interface AuthorData {
  name: string
  bio: string
  avatar?: string
  role?: string
  social?: {
    twitter?: string
    linkedin?: string
    instagram?: string
    email?: string
  }
}

export interface NavigationItem {
  name: string
  href: string
  icon?: string
  children?: NavigationItem[]
}