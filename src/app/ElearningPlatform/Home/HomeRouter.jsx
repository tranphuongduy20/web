import React from 'react'

const homeRouter = [
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import('./HomePage')),
  }
]

export default homeRouter
