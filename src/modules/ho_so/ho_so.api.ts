import { callApi } from '../../core/api'
import type { HoSoRow } from './ho_so.types'

export function getHoSo(): Promise<HoSoRow[]> {
  return callApi<HoSoRow[]>('getHoSo')
}

export function insertHoSo(payload: Omit<HoSoRow, 'id'>): Promise<HoSoRow> {
  return callApi<HoSoRow>('insertHoSo', payload)
}
