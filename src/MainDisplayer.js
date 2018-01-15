import React from 'react'
import styled from 'styled-components'

const formatSecondsAsTime = (seconds) => {
  return `${`${Math.floor(seconds / 60)}`.padStart(2, '0')}:${(`${seconds % 60}`).padStart(2, '0')}`
}

export const MainDisplayer = ({ className, time, currentLevel, currentBlinds, nextBlinds }) => {
  const isBreak = currentLevel === 'BREAK'
  const {
    small,
    big,
    ante
  } = currentBlinds || {}
  return (
    <div className={className}>
      <Level>{isBreak ? 'BREAK' : `Level: ${currentLevel}`}</Level>
      <Timer>{formatSecondsAsTime(time)}</Timer>
      <CurrentBlinds>{!isBreak && `BLINDS: ${small}/${big}`}</CurrentBlinds>
      {isBreak && <Next>Next: Break</Next>}
      {!isBreak && nextBlinds && <Next>Next:{nextBlinds.small}/{nextBlinds.big}</Next>}

    </div>
  )
}
const Level = styled.span`
  font-size: 60px;
  margin-bottom: 50px;
`
const Next = styled.span`
  font-size: 50px;
`
const Timer = styled.span`
  font-size: 150px;
  margin-bottom: 50px;

`
const CurrentBlinds = styled.span`
  font-size: 80px;
  margin-bottom: 50px;
`
const StyledComponent = styled(MainDisplayer) `
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  font-weight: bold;

  & > div {
    margin-bottom: 50px;
  }
`

export default StyledComponent
