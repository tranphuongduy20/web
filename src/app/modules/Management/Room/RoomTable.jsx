import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const RoomTable = () => {
  const history = useHistory()

  const onRowClick = (data) => {
    console.log(data)
    console.log('hello')
  }

  const columns = [
    {
      name: 'Room ID', options: {
        filterOptions: { fullWidth: true },
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Room Name', options: {
        filterOptions: { fullWidth: true },
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Floor', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Capacity (slots)', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Room Type', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Status', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    }
  ]

  const options = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    tableBodyHeight: '100%',
    tableBodyMaxHeight: '',
    onTableChange: (action, state) => {
      console.log(action)
      console.dir(state)
    },
    onRowClick: onRowClick
  }

  const data = [
    ['ROOM-01', 'Room 1', 1, 20, 'Classroom', 'Availale'],
    ['ROOM-02', 'Room 2', 1, 20, 'Classroom', 'Availale'],
    ['ROOM-03', 'Room 3', 1, 20, 'Classroom', 'Availale'],
    ['ROOM-04', 'Room 4', 1, 20, 'Classroom', 'Not Availale'],
    ['ROOM-05', 'Room 5', 1, 20, 'Classroom', 'Availale'],
    ['ROOM-06', 'Room 6', 1, 10, 'Office', 'Availale'],
    ['ROOM-07', 'Room 7', 1, 10, 'Office', 'Availale'],
    ['ROOM-08', 'Room 8', 1, 10, 'Office', 'Availale'],
  ]

  return (
    <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        title={'Rooms List'}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  )
}

export default RoomTable
