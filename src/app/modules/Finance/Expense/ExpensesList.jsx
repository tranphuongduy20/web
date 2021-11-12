import React from 'react'

import { Breadcrumb } from 'app/components'
import ExpenseTable from './ExpenseTable'

const ExpensesList = () => {
  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Expenses', path: '/expenses/list' },
            { name: 'Expenses List' },
          ]}
        />
      </div>
      <ExpenseTable />
    </div>
  )
}

export default ExpensesList
