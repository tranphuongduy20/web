import MUIDataTable from 'mui-datatables'
import React from 'react'
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

const AdministratorTable = () => {

  const columns = [
    {
      name: 'Course Title', options: {
        filterOptions: { fullWidth: true },
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Course Code', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Learning Level', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Enrolled Students(s)', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Course Fee', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Description', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
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
    }
  }

  const data = [
    ['Ielts 7.0', 'APL1B15', 'Advance', 50, 2000, 'This is Best Course'],
    ['Ielts 7.0', 'APL1B16', 'Advance', 50, 2000, 'This is Best Course'],
    ['Ielts 7.0', 'APL1B17', 'Advance', 50, 2000, 'This is Best Course'],
    ['Ielts 7.0', 'APL1B18', 'Advance', 50, 2000, 'This is Best Course'],
    ['Ielts 7.0', 'APL1B19', 'Advance', 50, 2000, 'This is Best Course'],
    ['Ielts 7.0', 'APL1B20', 'Advance', 50, 2000, 'This is Best Course'],
    ['Ielts 7.0', 'APL1B21', 'Advance', 50, 2000, 'This is Best Course'],
    ['Ielts 7.0', 'APL1B22', 'Advance', 50, 2000, 'This is Best Course'],
  ]

  return (
    <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        title={'Administrators'}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  )
}

export default AdministratorTable
