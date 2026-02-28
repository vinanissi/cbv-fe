import { DataTable } from '../../components/DataTable'
import type { HoSoRow } from './ho_so.types'

const MOCK_DATA: HoSoRow[] = [
  { id: '1', ten: 'Hồ sơ A', ma: 'HS-001', trangThai: 'Hoàn thành' },
  { id: '2', ten: 'Hồ sơ B', ma: 'HS-002', trangThai: 'Đang xử lý' },
  { id: '3', ten: 'Hồ sơ C', ma: 'HS-003', trangThai: 'Chờ duyệt' },
]

const COLUMNS = [
  { key: 'ma' as const, label: 'Mã' },
  { key: 'ten' as const, label: 'Tên' },
  { key: 'trangThai' as const, label: 'Trạng thái' },
]

export function HoSoPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Hồ sơ</h2>
      <DataTable<HoSoRow> columns={COLUMNS} data={MOCK_DATA} />
    </div>
  )
}
