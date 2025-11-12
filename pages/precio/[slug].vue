<script setup lang="ts">
import { resolveCurrencyFromSlug } from '~/utils/currencies'

const route = useRoute()
const config = useRuntimeConfig()

const slug = route.params.slug as string
const currency = resolveCurrencyFromSlug(slug)
if (!currency) throw createError({ statusCode: 404, statusMessage: 'Divisa no encontrada' })

// SSR: llamará al backend cuando lo tengamos; por ahora con fallback
const { data, error } = await useFetch(() => {
  const base = 'USD'
  const target = currency.code
  return `${config.public.apiBaseUrl}/api/rates?base=${base}&target=${target}`
}, { server: true })

const rate = computed<number | null>(() =>
  data.value?.rates?.[currency.code] ?? 987.62 // fallback visual
)

const amountText = computed(() =>
  rate.value == null
    ? '—'
    : new Intl.NumberFormat(currency.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(rate.value)
)

const asOfText = computed(() => {
  const iso = data.value?.asOf ?? '2025-10-31T17:51:00Z'
  const d = new Date(iso)
  const date = d.toLocaleDateString(currency.locale, { year: 'numeric', month: 'long', day: 'numeric' })
  const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  return `Tipo de cambio para ${date} a las ${time} UTC`
})

// SEO dinámico
useSeoMeta({
  title: `Valor del dólar hoy en ${currency.code}`,
  description: `1 USD = ${amountText.value} ${currency.code}. ${asOfText.value}`,
})
useHead({
  link: [
    { rel: 'canonical', href: currency.canon },
    { rel: 'alternate', hreflang: 'es-CL', href: currency.canon },
  ],
})
</script>

<template>
  <div>
    <HeroExchange :amount-text="amountText" :currency-code="currency.code" :as-of-text="asOfText" />
    <PayLikeLocal />
  </div>
</template>
