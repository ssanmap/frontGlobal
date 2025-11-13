<script setup >
const signupOpen = useState('signupOpen', () => false)

const config = useRuntimeConfig()

// Inyecta GA4 en el <head> (solo si hay GA_ID)
if (process.client && config.public.gaId) {
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${config.public.gaId}`,
        async: true
      },
      {
        // Inicializa dataLayer + gtag y configura tu GA4
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.public.gaId}');
        `
      }
    ]
  })
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <SignupModal v-model="signupOpen" />
  </div>
</template>

