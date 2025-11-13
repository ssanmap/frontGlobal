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
        { rel: 'icon', type: 'image/svg+xml', href: 'assets/clp.svg' },         
      ],
    },
  },
})
