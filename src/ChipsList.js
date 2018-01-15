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
    return <Chip key={value}>
      <img src={img}/>
      <span>{value}</span>
    </Chip>
  })
  return (
    <div className={className}>
      {mappedChips}
    </div>
  )
}

const Chip = styled.div`
  display: flex;
  font-size: 30px;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  & > span { display: block; margin-left: 20px;}
`

const StyledComponent = styled(ChipsList) `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    --size: 60px;
    width: var(--size);
    height: var(--size);
  }
`

export default StyledComponent
