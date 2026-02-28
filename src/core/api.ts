export async function callApi<T = any>(
  action: string,
  data: Record<string, any> = {}
): Promise<T> {
  const API_URL = import.meta.env.VITE_API_URL
  const API_KEY = import.meta.env.VITE_API_KEY
  const DEBUG = import.meta.env.VITE_DEBUG === 'true'

  if (!API_URL) {
    throw new Error('VITE_API_URL is not configured')
  }

  const params = new URLSearchParams({
    action,
    key: API_KEY,
    ...Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, String(v)])
    ),
  })

  const url = `${API_URL}?${params.toString()}`

  if (DEBUG) {
    console.log('[API] URL:', url)
  }

  const response = await fetch(url, { method: 'GET' })

  if (DEBUG) {
    console.log('[API] Status:', response.status)
  }

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`)
  }

  const result = await response.json()

  if (DEBUG) {
    console.log('[API] Response:', result)
  }

  return result as T
}
