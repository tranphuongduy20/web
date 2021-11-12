import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card, CardContent, CardMedia, Typography, Rating, Box, Chip } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

import { formatToVND } from 'app/utils/formatter'

const CourseTitle = styled.strong`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const CoursePrice = styled.strong`
  font-size: 18px;
`

const RatingNumber = styled.strong`
  font-size: 14px;
  color: goldenrod;
  margin-right: 8px;
`


const CourseItem = ({ course }) => {

  return (
    <Link to={{
      pathname: `/courses/${course.id}`,
      state: {
        courseId: course.id,
        courseImage: course.courseImage
      }
    }}>
      <Card sx={{ maxWidth: 345, minHeight: 325 }}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='160'
          image={course.courseImage}
          sx={{ border: '1px solid lightgray' }}
        />
        <CardContent>
          <CourseTitle>{course.title}</CourseTitle>
          <Typography variant='body1' color='text.secondary' noWrap>{course.instructor}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <RatingNumber>{course.stars}</RatingNumber>
            <Rating
              name="text-feedback"
              value={course.stars}
              readOnly
              precision={0.5}
              size='small'
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <Box sx={{ ml: 1 }}>({formatToVND(course.numberOfRating)})</Box>
          </Box>
          <CoursePrice>
            {
              course.price === 0 ? <Chip label='Free' color='success' /> : `$${course.price}.99`
            }
          </CoursePrice>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CourseItem