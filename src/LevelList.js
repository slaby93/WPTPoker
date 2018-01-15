import React from 'react'
import styled from 'styled-components'
import levels from './consts/levels'

export class LevelList extends React.PureComponent {
  mapLevelsToComponentss = (levels) => {
    return levels.map(({ type, small, big, ante }, index) => {

      if (type === 'BREAK') {
        return <li key={index}>{type}</li>
      }

      return <li key={index}>

        <span>{small}/{big} {ante > 0 && `(${ante})`}</span>
      </li>
    })
  }

  render() {
    const { className } = this.props
    const mappedLeveles = this.mapLevelsToComponentss(levels)
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
      font-size: 25px;
      margin: 20px 0;
    }
  }
`

export default StyledComponent
