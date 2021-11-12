import React from 'react'

import { Breadcrumb } from 'app/components'
import EnrollmentsTable from './EnrollmentsTable'

const EnrollmentsList = () => {

  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Enrollments', path: '/enrollments/list' },
            { name: 'Enrollments List' }
          ]}
        />
      </div>
      <EnrollmentsTable />
    </div>
  )
}

export default EnrollmentsList
