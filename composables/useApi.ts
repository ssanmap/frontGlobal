export function useApi() {
  const config = useRuntimeConfig()
  const base = config.public.apiBaseUrl

  async function post<T = any>(path: string, body: any): Promise<T> {
    return await $fetch<T>(`${base}${path}`, {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return { post }
}
