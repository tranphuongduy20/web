import React from 'react'

const coursesRouter = [
  {
    path: '/courses/:id',
    component: React.lazy(() => import('./CourseDetail')),
  }
]

export default coursesRouter
