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
      <h1>Chips:</h1>
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
  & > span { 
    display: block; 
    margin-left: 20px;
    width: 50px;
    text-align: center;
  }
`

const StyledComponent = styled(ChipsList) `
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    --size: 60px;
    width: var(--size);
    height: var(--size);
  }

  h1{
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 50px;
  }
`

export default StyledComponent
