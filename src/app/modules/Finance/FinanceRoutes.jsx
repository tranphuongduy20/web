import React from 'react'

const financeRoutes = [
  {
    path: '/invoices/list',
    exact: true,
    component: React.lazy(() => import('./Invoice/InvoicesList')),
  },
  {
    path: '/invoices/add',
    exact: true,
    component: React.lazy(() => import('./Invoice/AddInvoice')),
  },
  {
    path: '/expenses/list',
    exact: true,
    component: React.lazy(() => import('./Expense/ExpensesList')),
  },
  {
    path: '/expenses/add',
    exact: true,
    component: React.lazy(() => import('./Expense/AddExpenseBill')),
  },
]

export default financeRoutes
