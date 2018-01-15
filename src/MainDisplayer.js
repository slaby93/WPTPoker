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
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  font-weight: bold;

`

export default StyledComponent
