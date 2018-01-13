import React from 'react'
import styled from 'styled-components'
import levels from './consts/levels'

export class LevelList extends React.PureComponent {
  mapLevelsToComponentss = (levels)=>{
    return levels.map(({type, small, big, ante},index) => {

      if(type === 'BREAK'){
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
      <ul className={className}>
        {mappedLeveles}
      </ul>
    )
  }
}

const StyledComponent = styled(LevelList) `
  list-style: none;
`

export default StyledComponent
