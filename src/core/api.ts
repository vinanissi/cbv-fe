const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY
const DEBUG = import.meta.env.VITE_DEBUG === 'true'

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

  const fullUrl = `${API_URL}?${params.toString()}`

  if (DEBUG) {
    console.log('[API] API_URL:', API_URL)
    console.log('[API] action:', action)
    console.log('[API] full URL:', fullUrl)
  }

  try {
    const response = await fetch(fullUrl, {
      method: 'GET',
    })

    if (DEBUG) {
      console.log('[API] response status:', response.status)
    }

    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`)
    }

    const body = await response.json()

    if (DEBUG) {
      console.log('[API] response body:', body)
    }

    return body
  } catch (err) {
    if (DEBUG) {
      console.log('[API] error:', err)
    }
    throw err
  }
}
