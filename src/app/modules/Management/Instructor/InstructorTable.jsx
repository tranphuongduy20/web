import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const InstructorTable = () => {
  const history = useHistory()

  const onRowClick = (data) => {
    history.push(`/instructors/edit/${data[0]}`)
  }

  const columns = [
    {
      name: 'Instructor ID', options: {
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
      name: 'Gender', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Experiences (years)', options: {
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
    ['INS-01', 'Tran Phuong', 'Duy', 'Male', 5],
    ['INS-02', 'Tran Phuong', 'Duy', 'Male', 5],
    ['INS-03', 'Tran Phuong', 'Duy', 'Male', 5],
    ['INS-04', 'Tran Phuong', 'Duy', 'Male', 5],
    ['INS-05', 'Tran Phuong', 'Duy', 'Male', 5],
    ['INS-06', 'Tran Phuong', 'Duy', 'Male', 5],
    ['INS-07', 'Tran Phuong', 'Duy', 'Male', 5],
  ]

  return (
    <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        title={'Instructors'}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  )
}

export default InstructorTable
