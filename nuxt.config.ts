// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  // Auto-import de componentes desde /components sin prefijo de carpeta
  components: [{ path: '~/components', pathPrefix: false }],

  // Variables públicas para usar en cliente/SSR
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:4000',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },                      // 👈 idioma del documento
      title: 'Lead Web Developer Challenge',
      meta: [
        { name: 'description', content: 'Challenge técnico con Nuxt + Tailwind' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }, // 👈 mobile friendly
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },         // opcional
      ],
    },
  },
})
