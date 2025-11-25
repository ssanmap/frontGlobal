<script setup lang="ts">
import { onMounted } from 'vue'
import { useTrack } from '~/composables/useTrack'

const props = defineProps<{
  headline: string        
  amountText: string
  currencyCode: string
  asOfText: string
}>()

const track = useTrack()

onMounted(() => {
  track('view_hero', {
    section: 'hero_exchange',
    currency: props.currencyCode,
  })
})
</script>

<template>
  <section
    class="relative z-10 overflow-visible bg-g66-blue text-white min-h-[520px]"
    role="banner"
  >
    <Container>
      <div class="grid md:grid-cols-2 items-center pt-12 pb-24 gap-8">
        <div class="order-2 md:order-1 max-w-[625px]">
        
          <h1 class="  tracking-tight leading-[1.05] text-[40px] sm:text-[52px] lg:text-[64px]">
            {{ headline }}
          </h1>

          <p class="mt-4  font-extrabold text-xl sm:text-2xl  sm:text-[52px]  text-[40px] lg:text-[64px]">
            1 USD =
            <span class="text-white">
              {{ amountText }}
            </span>
            {{ currencyCode }}
          </p>

          <p class="mt-5 text-white/90 text-base">
            {{ asOfText }}
          </p>
        </div>

        <div class="order-1 md:order-2 relative h-[340px] md:h-[420px]">
          <!-- Contenedor de banderas y flecha -->
          <div
            class="absolute right-[40px] md:right-[70px] top-[110px] flex items-center justify-center gap-8"
            aria-hidden="true"
          >
            <img
              src="/assets/clp.svg"
              alt="Bandera de Chile"
              width="201"
              height="201"
              class="w-[160px] md:w-[201px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,.25)]"
              loading="eager"
              decoding="async"
            />

            <img
              src="/assets/arrow.svg"
              alt=""
              width="93"
              height="16"
              class="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[70px] md:w-[93px] h-auto"
              aria-hidden="true"
              loading="eager"
              decoding="async"
            />

            <img
              src="/assets/usd.svg"
              alt="Bandera de Estados Unidos"
              width="201"
              height="201"
              class="w-[160px] md:w-[201px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,.25)]"
              loading="eager"
              decoding="async"
            />
          </div>

          <div class="absolute right-0 bottom-[-163px] w-[420px] md:w-[556px] h-[280px] md:h-[356px]" aria-hidden="true">
            <img
              src="/assets/stand.svg"
              alt=""
              width="556"
              height="356"
              class="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </Container>

    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10"
    ></div>
  </section>
</template>
