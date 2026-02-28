import { config } from './config'

export async function callApi<T = unknown>(action: string, payload?: object): Promise<T> {
  const url = config.apiUrl
  const key = config.apiKey

  if (!url) {
    throw new Error('VITE_API_URL is not configured')
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(key && { 'X-API-Key': key }),
    },
    body: JSON.stringify({ action, ...payload }),
  })

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`)
  }

  const data = await res.json()
  return data as T
}
