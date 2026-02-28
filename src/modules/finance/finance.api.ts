import { callApi } from '../../core/api'
import type { FinanceRow } from './finance.types'

export function getFinance(): Promise<FinanceRow[]> {
  return callApi<FinanceRow[]>('getFinance')
}
