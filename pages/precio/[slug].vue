<script setup lang="ts">
import { resolveCurrencyFromSlug } from '~/utils/currencies'
import { resolvePriceLocale, getPriceMessages } from '~/utils/i18nPrice'
import { formatAsOf } from '~/utils/dateFormat'
import type { PriceLocale } from '~/utils/i18nPrice'

const route = useRoute()
const config = useRuntimeConfig()
const headers = useRequestHeaders(['accept-language'])
const url = useRequestURL() 
const slug = route.params.slug as string
const currency = resolveCurrencyFromSlug(slug)

if (!currency) {
  throw createError({ statusCode: 404, statusMessage: 'Divisa no encontrada' })
}
// ----- i18n: locale + mensajes ------------------------------------
const queryLang = route.query.lang as string | undefined
const acceptLanguage = headers['accept-language'] as string | undefined

const locale = ref<PriceLocale>(
  resolvePriceLocale(queryLang, acceptLanguage)
)
const messages = computed(() => getPriceMessages(locale.value))

type RatesApi = { base: string; asOf: string; rates: Record<string, number> }

const { data, error } = await useAsyncData<RatesApi>(
  `rates:${currency.code}`,
  () =>
    $fetch<RatesApi>(`${config.public.apiBaseUrl}/api/rates`, {
      method: 'GET',
      params: { base: 'USD', target: currency.code },
    }),
  {
    server: true,
    lazy: false,
  }
)
// ----- Derivados: tasa, monto, fecha/hora --------------------------
const rate = computed<number | null>(
  () => data.value?.rates?.[currency.code] ?? null
)

const amountText = computed(() =>
  rate.value == null
    ? '—'
    : new Intl.NumberFormat(currency.locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(rate.value)
)

const asOf = computed(() =>
  formatAsOf(data.value?.asOf, currency.locale, locale.value)
)

const asOfText = computed(() =>
  messages.value.legend(asOf.value.date, asOf.value.time)
)

// ----- SEO dinámico ------------------------------------------------

const seoTitle = computed(() =>
  messages.value.seoTitle(currency.label)
)

const seoDescription = computed(() =>
  messages.value.seoDescription(
    amountText.value,
    currency.code,
    asOf.value.date,
    asOf.value.time
  )
)

const canonicalUrl = computed(() => `${url.origin}${route.fullPath}`)

useSeoMeta({
  title: () => seoTitle.value,
  description: () => seoDescription.value,
  ogTitle: () => seoTitle.value,
  ogDescription: () => seoDescription.value,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hreflang: 'es-cl', href: canonicalUrl.value },
  ],
})
</script>

<template>
  <div>
    <HeroExchange
      :headline="messages.headline"
      :amount-text="amountText"
      :currency-code="currency.code"
      :as-of-text="asOfText"
    />

    <div
      v-if="error"
      class="mx-auto max-w-[1440px] px-4 lg:px-8 text-sm text-white/80 mt-2"
    >
      {{ messages.error }}
    </div>

    <PayLikeLocal />
  </div>
</template>
