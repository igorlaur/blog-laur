/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/qual-a-diferenca-entre-kitnets-studio-jk-loft-flat-republica-e-apartamento.php',
        destination: '/posts/qual-a-diferenca-entre-kitnets-studio-jk-loft-flat-republica-e-apartamento',
        permanent: true,
      },
      // Adicione outros redirecionamentos conforme necessário
      {
        source: '/blog/:path*.php',
        destination: '/posts/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig