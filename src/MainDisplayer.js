import React from 'react'
import styled from 'styled-components'
import levels from './consts/levels'

const formatSecondsAsTime = (seconds) => {
  return `${`${Math.floor(seconds / 60)}`.padStart(2, '0')}:${(`${seconds % 60}`).padStart(2, '0')}`
}

export const MainDisplayer = ({
  className,
  time,
  currentLevel,
  currentBlinds,
  nextBlinds,
  onTimerClick
 }) => {
  const isBreak = levels[currentLevel || 0].type === 'BREAK'
  const isNextBreak = (levels[currentLevel + 1 || 0] || {}).type === 'BREAK'
  const {
    small,
    big,
    ante
  } = currentBlinds || {}
  return (
    <div className={className}>
      <Level>{isBreak ? 'BREAK' : `Level: ${`${currentLevel}`.padStart(2, '0')}`}</Level>
      <Timer onClick={onTimerClick}>{formatSecondsAsTime(time)}</Timer>
      {!isBreak && <CurrentBlinds>{`BLINDS: ${small}/${big}`}{ante ? `(${ante})` : ''}</CurrentBlinds>}
      {isNextBreak && <Next>Next: Break</Next>}
      {!isNextBreak && nextBlinds && <Next>Next: {nextBlinds.small}/{nextBlinds.big}</Next>}

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
const Timer = styled.div`
  font-size: 200px;
  margin-bottom: 50px;
  width: 600px;
  cursor: pointer;
  margin-left: 110px;

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
