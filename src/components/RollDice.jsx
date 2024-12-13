// import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, rollDice}) => {


    // console.log(currentDice)
  return (
    <DiceContainer>
    <div className='dice ' onClick={rollDice}>
      <img src={`/images/dice/dice_${currentDice}.png`} alt='dice_1'/>
    </div>
    <p>Click on to Roll the Dice</p>
    </DiceContainer>
  )
}

export default RollDice
const DiceContainer=styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 50px;
.dice{cursor:pointer;}
p{
    font-size: 24px;
    font-weight: 600;
    margin: 0;
}
`
