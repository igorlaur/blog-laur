import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/qual-a-diferenca-entre-kitnets-studio-jk-loft-flat-republica-e-apartamento.php',
        destination: '/pt/posts/qual-a-diferenca-entre-kitnets-studio-jk-loft-flat-republica-e-apartamento',
        permanent: true,
      },
      {
        source: '/blog/:path*.php',
        destination: '/pt/posts/:path*',
        permanent: true,
      },
    ]
  },
};

export default withNextIntl(nextConfig);
