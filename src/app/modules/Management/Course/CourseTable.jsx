import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const CourseTable = () => {
  const history = useHistory()

  const onRowClick = (data) => {
    console.log(data)
    console.log('hello')
  }

  const columns = [
    {
      name: 'Course ID', options: {
        filterOptions: { fullWidth: true },
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Course Name', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Program', options: {
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
      name: 'Enrolled Student(s)', options: {
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
    ['APL1B15', 'Ielts 450', 'Toeic', 'Basic', 50, 2000],
    ['APL1B16', 'Toeic 500', 'Toeic', 'Basic', 50, 2000],
    ['APL1B17', 'Toeic 600', 'Toeic', 'Intermediate', 50, 2000],
    ['APL1B18', 'Toeic 650', 'Toeic', 'Intermediate', 50, 2000],
    ['APL1B18', 'Toeic 700', 'Toeic', 'Basic', 50, 2000],
    ['APL1B19', 'Ielts 5.0', 'Ielts', 'Basic', 50, 2000],
    ['APL1B20', 'Ielts 6.0', 'Ielts', 'Intermediate', 50, 2000],
    ['APL1B21', 'Ielts 6.5', 'Ielts', 'Intermediate', 50, 2000],
    ['APL1B22', 'Ielts 7.0', 'Ielts', 'Advance', 50, 2000]
  ]

  return (
    <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        title={'Courses List'}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  )
}

export default CourseTable
