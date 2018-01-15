import React from 'react'
import styled from 'styled-components'

export const Header = ({className}) => {
  return (<div className={className}>
    <span>IX WPT</span>
    <span>NL HOLDEM</span>
  </div>)
}

const StyledComponent = styled(Header)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  font-size: 80px;
`

export default StyledComponent
