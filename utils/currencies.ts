export type CurrencyCode = 'CLP' | 'PEN' | 'USD'

export const currencyMap = {
  'peso-chileno': { code: 'CLP' as const, locale: 'es-CL', country: 'CL', canon: '/precio/peso-chileno', label: 'Chile' },
  'sol-peruano':  { code: 'PEN' as const, locale: 'es-PE', country: 'PE', canon: '/precio/sol-peruano',  label: 'Perú'   },
  'dolares':      { code: 'USD' as const, locale: 'es-CL', country: 'US', canon: '/precio/dolares',      label: 'USD'   },
}

export function resolveCurrencyFromSlug (slug?: string) {
  if (!slug) return null
  return (currencyMap as any)[slug] ?? null
}

export function getSlugFromCode (code: CurrencyCode) {
  return Object.entries(currencyMap).find(([, v]) => v.code === code)?.[0] ?? 'peso-chileno'
}

export const currenciesList = Object.entries(currencyMap).map(([slug, v]) => ({
  slug, code: v.code, label: v.label
}))
