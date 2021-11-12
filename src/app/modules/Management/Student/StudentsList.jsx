import React from 'react'

import { Breadcrumb } from 'app/components'
import StudentTable from './StudentTable'

const StudentsList = () => {
  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Students', path: '/students/list' },
            { name: 'Students List' },
          ]}
        />
      </div>
      <StudentTable />
    </div>
  )
}

export default StudentsList
