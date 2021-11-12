import * as React from 'react'
import { Grid, Box } from '@mui/material'

import CourseItem from './CourseItem'

const CoursesList = ({ category }) => {
  return (
    <Box sx={{ flexGrow: 1, border: '1px solid lightgray', padding: '28px' }}>
      <Grid container spacing={2}>
        {
          category.courses.map(course => (
            <Grid item xs={2} key={course.id}>
              <CourseItem course={course} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default CoursesList