/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    IP_ENV: process.env.IP_ENV
  }
}

module.exports = nextConfig
