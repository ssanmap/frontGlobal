<script setup lang="ts">
/* Estás usando /public/assets, así que los imports van con ruta absoluta */
import playstore from '/assets/playstore.svg'
import appstore from '/assets/appstore.svg'
import bannerImg from '/assets/banner-img.png'
</script>

<template>
  <!-- se monta sobre el hero pero compensamos con pt -->
  <section class="relative z-20 -mt-[62px] pt-[72px] mb-32 bg-white">
    <Container>
      <!-- card gris -->
      <div class="relative overflow-visible rounded-[28px] bg-[#F8F9FB] ring-1 ring-black/5">
        <div class="grid items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-10">
          <!-- Texto -->
          <div>
            <h2 class="text-[48px] leading-[1.1] font-semibold text-[#000]">Sé Global,</h2>
            <p class="mt-2 text-[40px] leading-[1.1] font-extrabold text-[#2557D6]">
              Paga como local
            </p>
            <p class="mt-5 text-[22px] leading-snug text-[#6D5D5D] max-w-md">
              Tu cuenta global para pagar, convertir, enviar dinero y más.
            </p>

            <!-- botones -->
            <div class="mt-6 flex items-center gap-4">
              <a href="#" class="transition hover:opacity-80">
                <img :src="playstore" alt="Google Play" class="h-12 w-auto" />
              </a>
              <a href="#" class="transition hover:opacity-80">
                <img :src="appstore" alt="App Store" class="h-12 w-auto" />
              </a>
            </div>
          </div>

          <!-- Lado derecho: frame de 1377×524 en Figma, aquí usamos solo la altura -->
          <div class="relative h-[524px] overflow-visible">
            <!-- rectángulo claro del fondo (opcional, si lo usas en Figma) -->
            <div
              class="absolute inset-y-6 right-6 left-6 rounded-[24px] bg-white/60"
            ></div>

            <!-- Banner: 688×601, centrado vertical => se pasa arriba y abajo -->
            <img
              :src="bannerImg"
              alt="App Global66"
              class="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[688px] h-[691px] select-none drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
