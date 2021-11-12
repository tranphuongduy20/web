import React from 'react'

import { Breadcrumb } from 'app/components'
import PaymentHistoryTable from './InvoiceTable'

const InvoicesList = () => {
  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Invoices', path: '/invoices/list' },
            { name: 'Invoices List' },
          ]}
        />
      </div>
      <PaymentHistoryTable />
    </div>
  )
}

export default InvoicesList
