import React from 'react'
import styled from 'styled-components'

export const Debug = ({ className }) => {
  return (
    <div className={className}>Debug</div>
  )
}

const StyledComponent = styled(Debug) `
  position: absolute;
  left: 0px;
  bottom: 0px;
`

export default StyledComponent
