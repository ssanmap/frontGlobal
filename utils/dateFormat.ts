// utils/dateFormat.ts
import type { PriceLocale } from './i18nPrice'

export interface AsOfFormatted {
  date: string
  time: string
}

/**
 * Formatea la fecha/hora de la tasa según el locale de la divisa e idioma
 */
export function formatAsOf(
  iso: string | null | undefined,
  currencyLocale: string,
  locale: PriceLocale
): AsOfFormatted {
  const base = iso ?? new Date().toISOString()
  const d = new Date(base)

  const dateLocale = locale === 'es' ? currencyLocale : 'en-US'

  const date = d.toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const time = d.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return { date, time }
}
