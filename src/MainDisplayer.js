import React from 'react'
import styled from 'styled-components'

export const MainDisplayer = ({ className, currentLevel }) => {
  const isBreak = currentLevel === 'BREAK'
  return (
    <div className={className}>
      <div>{isBreak ? 'BREAK' : `Level: ${currentLevel}`}</div>
      <div>COUNTDOWN</div>
      <div>{!isBreak && 'BLINDS: sb/bb'}</div>
      <div>{isBreak ? 'Next: Break' : `Next: ${currentLevel + 1}`}</div>
    </div>
  )
}

const StyledComponent = styled(MainDisplayer) `
  display: grid;

`

export default StyledComponent
