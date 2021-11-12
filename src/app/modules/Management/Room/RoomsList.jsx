import React from 'react'

import { Breadcrumb } from 'app/components'
import RoomTable from './RoomTable'

const RoomsList = () => {

  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Rooms', path: '/rooms/list' },
            { name: 'Rooms List' }
          ]}
        />
      </div>
      <RoomTable />
    </div>
  )
}

export default RoomsList
