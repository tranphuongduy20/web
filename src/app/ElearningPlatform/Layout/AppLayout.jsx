import React from 'react'
import styled from 'styled-components'

const gap = 16

const HomeWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HomeContentWrapper = styled.div`
  min-width: 80%;
  margin-left: ${5 * gap}px;
  margin-right: ${5 * gap}px;
  margin-top: ${3 * gap}px;
`

const AppLayout = ({ children }) => {
  return (
    <HomeWrapper>
      <HomeContentWrapper>
        {children}
      </HomeContentWrapper>
    </HomeWrapper>
  )
}

export default AppLayout
