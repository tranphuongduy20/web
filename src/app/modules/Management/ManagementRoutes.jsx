import React from 'react'

const profilesRoutes = [
  {
    path: '/admins/list',
    exact: true,
    component: React.lazy(() => import('./Administrator/Administrator')),
  },
  {
    path: '/instructors/list',
    exact: true,
    component: React.lazy(() => import('./Instructor/InstructorsList')),
  },
  {
    path: '/instructors/add',
    exact: true,
    component: React.lazy(() => import('./Instructor/AddInstructor')),
  },
  {
    path: '/instructors/edit/:id',
    exact: true,
    component: React.lazy(() => import('./Instructor/AddInstructor')),
  },
  {
    path: '/students/list',
    exact: true,
    component: React.lazy(() => import('./Student/StudentsList')),
  },
  {
    path: '/students/add',
    exact: true,
    component: React.lazy(() => import('./Student/AddStudent/AddStudent')),
  },
  {
    path: '/courses/list',
    exact: true,
    component: React.lazy(() => import('./Course/CoursesList')),
  },
  {
    path: '/courses/add',
    exact: true,
    component: React.lazy(() => import('./Course/AddCourse')),
  },
  {
    path: '/classes/list',
    exact: true,
    component: React.lazy(() => import('./Class/ClassesList')),
  },
  {
    path: '/classes/add',
    exact: true,
    component: React.lazy(() => import('./Class/AddClass')),
  },
  {
    path: '/rooms/list',
    exact: true,
    component: React.lazy(() => import('./Room/RoomsList')),
  },
  {
    path: '/rooms/add',
    exact: true,
    component: React.lazy(() => import('../Management/Room/AddRoom')),
  },
  {
    path: '/enrollments/list',
    exact: true,
    component: React.lazy(() => import('./Enrollment/EnrollmentsList')),
  },
  {
    path: '/enrollments/first-course',
    exact: true,
    component: React.lazy(() => import('./Enrollment/EnrollmentFirstCourse')),
  },
  {
    path: '/enrollments/next-course',
    exact: true,
    component: React.lazy(() => import('./Enrollment/EnrollNextCourse')),
  }
]

export default profilesRoutes
