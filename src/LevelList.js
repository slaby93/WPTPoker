import React from 'react'
import styled from 'styled-components'
import levels from './consts/levels'

export class LevelList extends React.PureComponent {
  mapLevelsToComponentss = (levels, currentLevel, onLevelClick) => {
    return levels.map(({ type, small, big, ante }, index) => {
      const isActive = index === currentLevel

      return <li
        onClick={() => onLevelClick(index)}
        className={isActive ? 'active' : ''}
        key={index}>
        {
          type === 'BREAK'
            ? type
            : <span>{small}/{big} {ante > 0 && `(${ante})`}</span>
        }
      </li>
    })
  }

  render() {
    const { className, currentLevel, onLevelClick } = this.props
    const mappedLeveles = this.mapLevelsToComponentss(levels, currentLevel, onLevelClick)
    return (
      <div className={className}>
        <h1>Levels:</h1>
        <ul >
          {mappedLeveles}
        </ul>
      </div>
    )
  }
}

const StyledComponent = styled(LevelList) `
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  overflow: auto;

  h1 {
    font-size: 30px;
    align-self: center;
    font-weight: bold;
  }
  
  ul {
    width: fit-content;
    align-self: center;
    text-align: center;

    li {
      cursor: pointer;
      font-size: 25px;
      margin: 20px 0;

      &.active {
        font-weight: bold;
      }
    }
  }
`

export default StyledComponent
