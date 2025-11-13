<script setup lang="ts">
import { currenciesList, getSlugFromCode, resolveCurrencyFromSlug, type CurrencyCode } from '~/utils/currencies'
import { onClickOutside } from '@vueuse/core'

const route = useRoute()
const router = useRouter()

const currentCode = computed<CurrencyCode>(() => {
  const slug = (route.params.slug as string) ?? 'peso-chileno'
  return resolveCurrencyFromSlug(slug)?.code ?? 'CLP'
})

const open = ref(false)
function toggle() { open.value = !open.value }
function close()  { open.value = false }
function onEsc(e: KeyboardEvent) { if (e.key === 'Escape') close() }

// cerrar al navegar de ruta
watch(() => route.fullPath, close)

// click outside
const popoverRef = ref<HTMLElement | null>(null)
onClickOutside(popoverRef, () => { if (open.value) close() })

async function select(code: CurrencyCode) {
  close()
  const slug = getSlugFromCode(code)
  await router.push(`/precio/${slug}`)
}
</script>

<template>
  <div class="relative">
    <button
      type="button"
      class="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      aria-haspopup="listbox"
      :aria-expanded="open ? 'true' : 'false'"
      :aria-controls="'country-listbox'"
      @click="toggle"
      @keydown.esc="onEsc"
    >
      <FlagIcon :code="currentCode" class="h-4 w-6 rounded-[2px] ring-1 ring-white/30 hover:ring-white/60 transition" />
      <svg class="ml-1 h-3 w-3 text-white/70" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .92 1.18l-4.24 3.36a.75.75 0 0 1-.92 0L5.21 8.41a.75.75 0 0 1 .02-1.2z"/>
      </svg>
    </button>

    <div
      v-if="open"
      ref="popoverRef"
      class="absolute right-0 z-40 mt-2 w-44 overflow-hidden rounded-xl border border-white/20 bg-white text-slate-900 shadow-xl"
      role="listbox"
      id="country-listbox"
    >
      <ul class="py-1">
        <li v-for="opt in currenciesList" :key="opt.slug">
          <button
            type="button"
            role="option"
            :aria-selected="opt.code===currentCode"
            @click="select(opt.code)"
            class="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50"
            :class="{'font-semibold text-[#2557D6]': opt.code===currentCode}"
          >
            <FlagIcon :code="opt.code" class="h-4 w-6 rounded-[2px] ring-1 ring-slate-300" />
            <span class="grow text-left">{{ opt.label }}</span>
            <span class="text-xs text-slate-500">{{ opt.code }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
