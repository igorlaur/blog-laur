import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

interface ContatoLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ContatoLayoutProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations('contact')
  const title = t('title')
  const description = t('description')
  const url = `https://blog.laur.com.br/${locale}/contato`

  return {
    title,
    description,
    openGraph: { title, description, url, type: 'website' },
    alternates: {
      canonical: url,
      languages: {
        pt: 'https://blog.laur.com.br/pt/contato',
        en: 'https://blog.laur.com.br/en/contato',
        es: 'https://blog.laur.com.br/es/contato',
      },
    },
  }
}

export default function ContatoLayout({ children }: ContatoLayoutProps) {
  return <>{children}</>
}
