import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button } from '../styled/Button'
import Rules from './Rules'

function GamePlay() {
    const[score, setScore]=useState(0);
        const [selectedNumber,setSelectedNumber]=useState(1);
            const[currentDice,setCurrentDice]=useState(1);
            const [error,setError]=useState("");
    const[showrules,setShowRules]=useState(false);
    const generateRandomNumber=()=>{ return Math.floor(Math.random()*6+1)};
    const rollDice=()=>{
        if(!selectedNumber)
        {
            setError("You have not selected any number")
            return;
        }

        const randomNum=generateRandomNumber();
        setCurrentDice((prev)=>randomNum);
        
        if(selectedNumber===randomNum)
        {
            setScore((prev)=> prev+ randomNum);
        }
        else{
            setScore((prev)=>prev-2)
        }
        setSelectedNumber(undefined);
    };
    const resetScore=()=>
    {
        setScore(0);
    }
    const toggleRules=()=>{setShowRules((prev)=>!prev)}
    
  return (
    <MainContainer>
    <div className='topSec'>
    <TotalScore score={score}/>
    
    <NumberSelector error={error}   setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>
    <RollDice currentDice={currentDice} rollDice={rollDice}/>
    <div className='btns'>
    <Button onClick={resetScore}>Reset Score</Button>
    <Button onClick={toggleRules}>
    {showrules?"Hide ": "Show "}Rules</Button>
    </div>
    {showrules && <Rules/> }
    </MainContainer>
  )
}

export default GamePlay
const MainContainer=styled.div`
max-width: 1180px; margin: 0 auto; padding-top: 70px;
.topSec{

    display: flex;
    align-items: end;
    justify-content: space-between;
}
.btns{display: flex; flex-direction: column; justify-content: center; max-width:220px; align-items: center; gap: 10px; margin: 0 auto;}
.btns Button:first-child{background-color:#fff; color: #000; border: 1px solid #000;}
.btns Button:first-child:hover{background-color: #000; color: #fff;}
`