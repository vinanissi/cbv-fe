import { callApi } from '../../core/api'
import type { DashboardData } from './dashboard.types'

export function getDashboard(): Promise<DashboardData> {
  return callApi<DashboardData>('getDashboard')
}
