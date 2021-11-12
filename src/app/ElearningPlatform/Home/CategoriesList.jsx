import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Tabs, Tab, Box } from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'

import coursesDataList from './coursesDataList'
import CoursesList from './CoursesList'

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff'
  },
})

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}))

const CategoriesList = () => {
  const [tabIndex, setTabIndex] = useState('0')

  const handleTabIndexChange = (event, newIndex) => {
    setTabIndex(newIndex)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <TabContext value={tabIndex}>
          <AntTabs value={tabIndex} onChange={handleTabIndexChange}>
            {
              coursesDataList.map(category => <AntTab value={category.id.toString()} key={category.id.toString()} label={category.category} />)
            }
          </AntTabs>
          {
            coursesDataList.map(category => <TabPanel value={category.id.toString()} key={category.id.toString()}><CoursesList category={category} /></TabPanel>)
          }
        </TabContext>
      </Box>
    </Box>
  )
}

export default CategoriesList