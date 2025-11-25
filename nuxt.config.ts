export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,

  // Auto-import de componentes desde /components sin prefijo de carpeta
  components: [{ path: '~/components', pathPrefix: false }],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:4000',
      gaId: process.env.NUXT_PUBLIC_GA_ID || ''
    },
  },

  routeRules: {
    '/**': {
      headers: {
        'x-robots-tag': 'index, follow',
        'Cache-Control': 'public, max-age=3600, must-revalidate',
      },
    },
    '/assets/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Lead Web Developer Challenge',
      meta: [
        { name: 'description', content: 'Challenge técnico con Nuxt + Tailwind' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/assets/clp.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      ],
    },
  },

  // Performance optimizations
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },

  // Optimization features
  experimental: {
    payloadExtraction: false,
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
})
