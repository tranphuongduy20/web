import React from 'react'

import { Breadcrumb } from 'app/components'
import ClassTable from './ClassTable'

const ClassesList = () => {
  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Classes', path: '/classes/list' },
            { name: 'Classes List' },
          ]}
        />
      </div>
      <ClassTable />
    </div>
  )
}

export default ClassesList
