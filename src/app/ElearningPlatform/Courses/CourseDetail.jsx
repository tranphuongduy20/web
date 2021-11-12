import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Grid } from '@mui/material'

import AppLayout from '../Layout/AppLayout'
import CourseBanner from './CourseBanner'
import CourseGoal from './CourseGoal'
import CourseContent from './CourseContent'

const CourseDetail = () => {
  const location = useLocation()
  const { courseId, courseImage } = location.state

  return (
    <Box>
      <AppLayout>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <CourseBanner />
            <CourseGoal />
            <CourseContent />
          </Grid>
          <Grid item xs={3}>
            This is {courseId}
            <Grid item>
              <img style={{ width: '100%' }} src={courseImage} />
            </Grid>
          </Grid>
        </Grid>
      </AppLayout>
    </Box>
  )
}

export default CourseDetail
