import React from 'react'
import styled from 'styled-components'

export const Header = ({className}) => {
  return (<div className={className}>
    <h1>IX WPT</h1>
    <span>NL HOLDEM</span>
  </div>)
}

const StyledComponent = styled(Header)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 220px;
  
  h1 {
    font-size: 100px;
  }

  span {
    font-size: 35px;
  }
`

export default StyledComponent
