import React from 'react'
import styled from '@emotion/styled'

const StyledLogo = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  background: -webkit-linear-gradient(#11998e, #38ef7d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const NavLogo = () => {
  return (
    <div className="ml-auto mr-5">
      <StyledLogo>
        BestRunner
      </StyledLogo>
    </div>
  )
}