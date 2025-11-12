<script setup lang="ts">
const signupOpen = useState('signupOpen', () => false)
</script>

<template>
  <!-- Barra fija con color #2557D6 como en Figma -->
  <header class="sticky top-0 z-50 bg-g66-blue text-white">
    <Container>
      <!-- padding horizontal 64px del Figma, altura razonable de barra -->
      <nav class="flex items-center justify-between py-4 h-16 lg:h-[181px] " role="navigation" aria-label="Principal">
        <!-- Grupo IZQUIERDA: logo + chips PERSONAS/EMPRESAS -->
        <div class="flex items-center gap-8">
          <NuxtLink to="/" class="flex items-center gap-2" aria-label="Global66">
            <img src="/assets/logo-global.png" alt="Global66" class="h-8 w-auto" />
          </NuxtLink>

          <!-- Tabs -->
        <div class="hidden md:flex items-center gap-4 text-sm">
            <NuxtLink
              to="#"
              class="font-semibold text-[#20C997] underline decoration-[#20C997] decoration-2 underline-offset-4"
            >
              PERSONAS
            </NuxtLink>
            <NuxtLink to="#" class="opacity-90 hover:opacity-100">EMPRESAS</NuxtLink>
          </div>
        </div>

       <!-- CENTRO + DERECHA: TODO junto con poco gap -->
        <div class="hidden lg:flex items-center gap-6 text-sm">
          <!-- Menú principal -->
          <button class="opacity-90 hover:opacity-100">Productos ▾</button>
          <button class="opacity-90 hover:opacity-100">Beneficios ▾</button>
          <NuxtLink to="#" class="opacity-90 hover:opacity-100">Ayuda</NuxtLink>

          <!-- Bandera + auth + CTA cerca -->
          <CountrySwitcher />
             <!-- separador sutil -->
          <span class="mx-1 h-4 w-px bg-white/30" aria-hidden="true"></span>
          <NuxtLink to="#" class="opacity-90 hover:opacity-100">Iniciar Sesión</NuxtLink>
          <Button
            variant="primary"
            as="button"
            class="!bg-white !text-g66-blue hover:!bg-white/90 px-4 py-2 rounded-pill font-semibold"
            @click="signupOpen = true"
          >
            Crear cuenta
          </Button>
        </div>

        <!-- móvil -->
        <button class="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
          <span class="sr-only">Abrir menú</span>
          <svg width="20" height="20" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-width="2" d="M3 6h14M3 10h14M3 14h14"/>
          </svg>
        </button>
      </nav>
    </Container>
  </header>
</template>