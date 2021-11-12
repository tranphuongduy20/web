import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { formatToVND } from 'app/utils/formatter'

const EnrollmentTable = () => {
  const history = useHistory()

  const onRowClick = (data) => {
    console.log(data)
    console.log('hello')
  }

  const columns = [
    {
      name: 'Enrollment ID', options: {
        filterOptions: { fullWidth: true },
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Student ID', options: {
        filterOptions: { fullWidth: true },
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Course ID', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Class ID', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Fee', options: {
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        },
        customBodyRender: (label) => {
          return formatToVND(label)
        }
      }
    },
    // {
    //   name: 'Status', options: {
    //     customHeadLabelRender: (columnMeta) => {
    //       return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
    //     },
    //     customBodyRender: (label) => {
    //       let colorClass
    //       if (label === 'Paid') colorClass = 'green'
    //       else if (label === 'Unpaid') colorClass = 'error'
    //       return <div className='flex'><div className={`px-3 text-11 py-3px border-radius-4 text-white bg-${colorClass} mr-3`}>{label}</div></div>
    //     }
    //   }
    // }
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
    ['APL1B15', 'STU-01', 'IE50', 'IE50.1', 2000],
    ['APL1B16', 'STU-02', 'IE50', 'IE50.1', 2000],
    ['APL1B17', 'STU-03', 'IE60', 'IE60.1', 2000],
    ['APL1B18', 'STU-04', 'IE60', 'IE60.1', 2000],
    ['APL1B19', 'STU-05', 'IE70', 'IE70.1', 2000],
    ['APL1B20', 'STU-06', 'IE70', 'IE70.1', 2000],
    ['APL1B21', 'STU-07', 'IE70', 'IE70.2', 2000],
    ['APL1B22', 'STU-08', 'IE70', 'IE70.3', 2000],
  ]

  return (
    <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        title={'Enrollments List'}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  )
}

export default EnrollmentTable
