import React from 'react'
import { useHistory } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

const ClassesInCourse = () => {
  const history = useHistory()

  const onRowClick = (data) => {
    console.log(data)
    console.log('hello')
  }

  const columns = [
    {
      name: 'Class ID', options: {
        filterOptions: { fullWidth: true },
        customHeadLabelRender: (columnMeta) => {
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        }
      }
    },
    {
      name: 'Class Name', options: {
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
      name: 'Status', options: {
        customHeadLabelRender: (columnMeta) => {
          console.log(columnMeta)
          return <div style={{ marginLeft: '-16px' }}>{columnMeta.label}</div>
        },
        customBodyRender: (label) => {
          let colorClass
          if (label === 'Available') colorClass = 'green'
          else if (label === 'Full') colorClass = 'error'
          return <div className='flex'><div className={`px-3 text-11 py-3px border-radius-4 text-white bg-${colorClass} mr-3`}>{label}</div></div>
        }
      }
    }
  ]

  const options = {
    search: false,
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    filterType: 'dropdown',
    selectableRows: true,
    rowsPerPage: 5,
    rowsPerPageOptions: [5],
    elevation: 0,
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
    ['IE70.1', 'Ielts 7.0/1', 10, 'Available'],
    ['IE70.2', 'Ielts 7.0/2', 20, 'Full'],
    ['IE70.3', 'Ielts 7.0/3', 10, 'Available']
  ]

  return (
    <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  )
}

export default ClassesInCourse
