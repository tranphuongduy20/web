import React from 'react'

const schedulingRoutes = [
  {
    path: '/chat',
    exact: true,
    component: React.lazy(() => import('app/components/chat-box-2/Chatbox')),
  }
]

export default schedulingRoutes
