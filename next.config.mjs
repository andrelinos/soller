/** @type {import('next').NextConfig} */
const nextConfig = {
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
