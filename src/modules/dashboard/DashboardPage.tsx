import { useEffect, useState } from 'react'
import { getDashboard } from './dashboard.api'
import type { DashboardData } from './dashboard.types'

export function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getDashboard()
      .then(setData)
      .catch((e) => setError(e instanceof Error ? e.message : 'Unknown error'))
  }, [])

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded">
        {error}
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <div className="p-4 bg-white rounded border border-gray-200">
        {data ? (
          <pre className="text-sm">{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  )
}
