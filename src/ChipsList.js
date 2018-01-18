import React from 'react'
import styled from 'styled-components'

const ChipList = [
  { // BLUE
    img: 'http://www.chipsandgames.com/images/products/detail/201bl.png',
    value: 10
  },
  { // GREEN 
    img: 'http://www.chipsandgames.com/images/products/detail/201gr.png',
    value: 25
  },
  { // WHITE
    img: 'http://www.chipsandgames.com/images/products/detail/201wt.png',
    value: 50
  },
  { // BLACK
    img: 'http://www.chipsandgames.com/images/products/detail/201bk.png',
    value: 100
  },
  { // RED
    img: 'http://www.chipsandgames.com/images/products/detail/201rd.png',
    value: 250
  }
]

export const ChipsList = ({ className }) => {
  const mappedChips = ChipList.map(({ img, value }) => {
    return <Chip key={value}>
      <img src={img} />
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
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
    position: relative;
  & > span { 
    position: absolute;
    display: block; 
    text-align: center;
    font-weight: bold;
  }
`

const StyledComponent = styled(ChipsList) `
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    --size: 90px;
    width: var(--size);
    height: var(--size);
  }

  h1{
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 20px;
  }
  ${Chip}:nth-of-type(3){
      color: blue;
  }
`

export default StyledComponent
