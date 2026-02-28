const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function callApi(action: string, data: Record<string, any> = {}) {
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

  const response = await fetch(`${API_URL}?${params.toString()}`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`)
  }

  return await response.json()
}
