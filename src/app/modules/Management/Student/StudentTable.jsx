import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const StudentTable = () => {
  const history = useHistory()

  const onRowClick = (data) => {
    console.log(data)
    console.log('hello')
  }

  const columns = [
    {
      name: 'Student ID', options: {
        filterOptions: { fullWidth: true },
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'First Name', options: {
        filterOptions: { fullWidth: true },
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Last Name', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Email Address', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Phone', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Enrollment Date', options: {
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
    ['STU-01', 'Tang Khanh', 'Chuong', 'chuongtangkhanh2104@gmail.com', '012345678', '25-8-2020'],
    ['STU-02', 'Tang Khanh', 'Chuong', 'chuongtangkhanh2104@gmail.com', '012345678', '25-8-2020'],
    ['STU-03', 'Tang Khanh', 'Chuong', 'chuongtangkhanh2104@gmail.com', '012345678', '25-8-2020'],
    ['STU-04', 'Tang Khanh', 'Chuong', 'chuongtangkhanh2104@gmail.com', '012345678', '25-8-2020'],
    ['STU-05', 'Tang Khanh', 'Chuong', 'chuongtangkhanh2104@gmail.com', '012345678', '25-8-2020'],
    ['STU-06', 'Tang Khanh', 'Chuong', 'chuongtangkhanh2104@gmail.com', '012345678', '25-8-2020'],
    ['STU-07', 'Tang Khanh', 'Chuong', 'chuongtangkhanh2104@gmail.com', '012345678', '26-8-2020'],
    ['STU-08', 'Tang Khanh', 'Chuong', 'chuongtangkhanh2104@gmail.com', '012345678', '30-8-2020'],
    ['STU-09', 'Tang Khanh', 'Chuong', 'chuongtangkhanh2104@gmail.com', '012345678', '25-8-2020'],
  ]

  return (
    <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        title={'Students'}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  )
}

export default StudentTable
