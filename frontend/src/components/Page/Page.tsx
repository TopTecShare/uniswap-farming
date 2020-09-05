import React from 'react'
import styled from 'styled-components'

import Footer from '../Footer'
import TopBar from '../TopBar'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>
      {children}
    </StyledMain>
  </StyledPage>
)

const StyledPage = styled.div``

const StyledMain = styled.div`
  background: #fafafa;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${props => props.theme.topBarSize * 2}px);
`

export default Page
