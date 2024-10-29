/** @type {import('next').NextConfig} */
const nextConfig = {
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
