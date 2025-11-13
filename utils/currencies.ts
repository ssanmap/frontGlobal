export type CurrencyCode = 'CLP' | 'PEN' | 'USD'

export interface CurrencyConfig {
  code: CurrencyCode
  locale: string
  country: string
  canon: string
  label: string
}

export const currencyMap: Record<string, CurrencyConfig> = {
  'peso-chileno': {
    code: 'CLP',
    locale: 'es-CL',
    country: 'CL',
    canon: '/precio/peso-chileno',
    label: 'Chile',
  },
  'sol-peruano': {
    code: 'PEN',
    locale: 'es-PE',
    country: 'PE',
    canon: '/precio/sol-peruano',
    label: 'Perú',
  },
  dolares: {
    code: 'USD',
    locale: 'es-CL',
    country: 'US',
    canon: '/precio/dolares',
    label: 'USD',
  },
}

export function resolveCurrencyFromSlug(slug?: string): CurrencyConfig | null {
  if (!slug) return null
  return currencyMap[slug] ?? null
}

export function getSlugFromCode(code: CurrencyCode): string {
  return (
    Object.entries(currencyMap).find(([, v]) => v.code === code)?.[0] ??
    'peso-chileno'
  )
}

export const currenciesList = Object.entries(currencyMap).map(([slug, v]) => ({
  slug,
  code: v.code,
  label: v.label,
}))
