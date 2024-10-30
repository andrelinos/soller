/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: '/sitemap.xml', destination: '/sitemap' }]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',

        // pathname: '/**/*.{jpg,jpeg,png,webp}',
      },
    ],
  },
}

export default nextConfig
