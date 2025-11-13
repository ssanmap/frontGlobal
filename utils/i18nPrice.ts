// utils/i18nPrice.ts

export type PriceLocale = 'es' | 'en'

export interface PriceMessages {
  headline: string
  legend: (date: string, time: string) => string
  error: string
  seoTitle: (label: string) => string
  seoDescription: (
    amount: string,
    code: string,
    date: string,
    time: string
  ) => string
}

/**
 * Resuelve el idioma a usar a partir de lang de la query y Accept-Language
 */
export function resolvePriceLocale(
  queryLang?: string,
  acceptLanguageHeader?: string
): PriceLocale {
  const normalizedQuery = queryLang?.toLowerCase()

  if (normalizedQuery === 'en') return 'en'
  if (normalizedQuery === 'es') return 'es'

  const accept = (acceptLanguageHeader ?? '').toLowerCase()

  if (accept.startsWith('en')) return 'en'
  return 'es'
}

/**
 * Devuelve los textos de la página de precio para el locale dado
 */
export function getPriceMessages(locale: PriceLocale): PriceMessages {
  if (locale === 'en') {
    return {
      headline: 'Today’s dollar value',
      legend: (date, time) => `Exchange rate for ${date} at ${time} UTC`,
      error:
        'We could not update the rate right now. Showing a reference value.',
      seoTitle: (label) => `Today’s dollar exchange rate in ${label}`,
      seoDescription: (amount, code, date, time) =>
        `1 USD = ${amount} ${code}. Updated exchange rate for ${date} at ${time} UTC.`,
    }
  }

  // es
  return {
    headline: 'Valor del dólar hoy',
    legend: (date, time) => `Tipo de cambio para ${date} a las ${time} UTC`,
    error:
      'No pudimos actualizar la tasa en este momento. Mostramos un valor de referencia.',
    seoTitle: (label) => `Valor del dólar hoy en ${label}`,
    seoDescription: (amount, code, date, time) =>
      `1 USD = ${amount} ${code}. Tipo de cambio actualizado para ${date} a las ${time} UTC.`,
  }
}
