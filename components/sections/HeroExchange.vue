<script setup lang="ts">
defineProps<{ amountText: string; currencyCode: string; asOfText: string }>()
</script>

<template>
  <section class="relative z-10 overflow-visible bg-g66-blue text-white min-h-[520px]">
    <Container>
      <div class="grid md:grid-cols-2 items-center pt-12 pb-24">
        <!-- Texto -->
        <div class="order-2 md:order-1 max-w-[625px]">
          <p class="text-white/90 text-[64px] leading-tight">Valor del dolar hoy</p>
          <h1 class="mt-1 font-extrabold tracking-tight leading-[1.1] text-[64px]">
            1 USD = <span class="text-white">{{ amountText }}</span> {{ currencyCode }}
          </h1>
          <p class="mt-4 text-white/90 text-base">{{ asOfText }}</p>
        </div>

        <!-- Ilustración -->
        <div class="order-1 md:order-2 relative h-[400px] md:h-[460px]">
          <!-- Contenedor de banderas y flecha -->
          <div class="absolute right-[70px] top-[130px] flex items-center justify-center gap-8">
            <!-- Bandera Chile -->
            <img
              src="/assets/clp.svg"
              alt="Chile"
              class="w-[201px] h-[166px] drop-shadow-[0_20px_40px_rgba(0,0,0,.25)]"
            />

            <!-- Flecha centrada sobre ambas banderas -->
            <img
              src="/assets/arrow.svg"
              alt=""
              class="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[93px] h-[77px]"
            />

            <!-- Bandera USA -->
            <img
              src="/assets/usd.svg"
              alt="Estados Unidos"
              class="w-[201px] h-[166px] drop-shadow-[0_20px_40px_rgba(0,0,0,.25)]"
            />
          </div>

          <!-- Bowl (plato) bajado 36px más para rozar el borde blanco) -->
          <div class="absolute right-[1px] bottom-[-110px] w-[556px] h-[356px]">
            <img src="/assets/stand.svg" alt="" class="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </Container>

    <!-- Glow de fondo -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 "
    ></div>
  </section>

  <!-- Panel siguiente: borde blanco con superposición -->
</template>
