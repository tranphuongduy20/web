import React from 'react'
import { Breadcrumb } from 'app/components'

import InstructorTable from './InstructorTable'

const InstructorsList = () => {
  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Instructors', path: '/instructors/list' },
            { name: 'Instructors List' },
          ]}
        />
      </div>
      <InstructorTable />
    </div>
  )
}

export default InstructorsList
