import { NavLink } from 'react-router-dom'
import { ROUTES } from '../core/constants'

const links = [
  { to: ROUTES.DASHBOARD, label: 'Dashboard' },
  { to: ROUTES.HO_SO, label: 'Hồ sơ' },
  { to: ROUTES.FINANCE, label: 'Tài chính' },
]

export function Sidebar() {
  return (
    <aside className="w-56 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="font-semibold text-lg">CBV System</h1>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
