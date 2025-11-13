export function useTrack() {
  return (event: string, params: Record<string, any> = {}): void => {
    if (process.client && typeof window !== 'undefined') {
      // Aseguramos que dataLayer existe
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event, ...params })
    }
  }
}