import { ReactNode } from 'react'

interface Column<T> {
  key: keyof T | string
  label: string
  render?: (row: T) => ReactNode
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
}

export function DataTable<T extends object>({ columns, data }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-3 text-sm text-gray-700">
                  {col.render ? col.render(row) : String(row[col.key as keyof T] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
