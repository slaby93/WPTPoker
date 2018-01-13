import React from 'react'
import styled from 'styled-components'

const ChipList = [
  {
    img: 'http://samwell.me/wp-content/uploads/2016/09/poker-logo.png',
    value: 10
  },
  {
    img: 'http://samwell.me/wp-content/uploads/2016/09/poker-logo.png',
    value: 20
  },
  {
    img: 'http://samwell.me/wp-content/uploads/2016/09/poker-logo.png',
    value: 50
  },
  {
    img: 'http://samwell.me/wp-content/uploads/2016/09/poker-logo.png',
    value: 100
  },
  {
    img: 'http://samwell.me/wp-content/uploads/2016/09/poker-logo.png',
    value: 500
  }
]

export const ChipsList = ({className}) => {
  const mappedChips = ChipList.map(({ img, value }) => {
    return <div key={value}>
      <img src={img}/>
      <span>{value}</span>
    </div>
  })
  return (
    <div className={className}>
      {mappedChips}
    </div>
  )
}

const StyledComponent = styled(ChipsList) `
  img {
    width: 60px;
  }
`

export default StyledComponent
