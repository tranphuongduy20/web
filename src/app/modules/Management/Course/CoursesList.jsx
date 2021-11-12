import React from 'react'

import { Breadcrumb } from 'app/components'
import CourseTable from './CourseTable'

const CoursesList = () => {

  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Courses', path: '/courses/list' },
            { name: 'Courses List' }
          ]}
        />
      </div>
      <CourseTable />
    </div>
  )
}

export default CoursesList
