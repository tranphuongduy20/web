import React from 'react'
import { Typography, Grid, Box } from '@mui/material'

import CourseItem from './CourseItem'
import coursesDataList from './coursesDataList'

const gap = 8

const BestSellerCoursesList = () => {
  console.log(coursesDataList)
  return (
    <div>
      <Typography variant='h5' style={{ fontWeight: 600, marginBottom: 2 * gap }}>Hot and new courses in English</Typography>
      <Grid container spacing={2}>
        {
          coursesDataList[0].courses.slice(0, 6).map(course => (
            <Grid item xs={2} key={course.id}>
              <CourseItem course={course} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default BestSellerCoursesList
