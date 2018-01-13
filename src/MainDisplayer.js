import React from 'react'
import styled from 'styled-components'

export const MainDisplayer = ({className}) => {
  return (<div className={className}>Main Displayer</div>)
}

const StyledComponent = styled(MainDisplayer)`
`

export default StyledComponent
