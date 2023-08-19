// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  i18n,
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(',') ?? undefined
  },
  publicRuntimeConfig: {
    locales: ['en', 'vi']
  },
  experimental: {
    scrollRestoration: true
  }
})
