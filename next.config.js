/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    domains: ['images.pexels.com','upload.wikimedia.org','1.bp.blogspot.com','s1.abcstatics.com','dynamic.appronet.es','programacion.net'],
  },
}

module.exports = nextConfig