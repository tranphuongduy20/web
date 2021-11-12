import React from 'react'

import CategoriesList from './CategoriesList'
import HomeContent from './HomeContent'
import AppLayout from '../Layout/AppLayout'

const HomePage = () => {
  return (
    <AppLayout>
      <CategoriesList />
      <HomeContent />
    </AppLayout>
  )
}

export default HomePage
