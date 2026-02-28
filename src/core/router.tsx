import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { ROUTES } from './constants'
import { DashboardPage } from '../modules/dashboard/DashboardPage'
import { HoSoPage } from '../modules/ho_so/HoSoPage'
import { FinancePage } from '../modules/finance/FinancePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: ROUTES.HO_SO, element: <HoSoPage /> },
      { path: ROUTES.FINANCE, element: <FinancePage /> },
    ],
  },
])
