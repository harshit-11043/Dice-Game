import styled from "styled-components"
// import { useState } from "react";
const NumberSelector = ({setError,error,selectedNumber, setSelectedNumber}) => {
    const arrayBox=[1,2,3,4,5,6];

    // console.log(selectedNumber);

    const handleNumberSelector=(value)=>
    {
        setSelectedNumber(value);
        setError("")
    }
  return (
    <NumberSelectorContainer>
    <p className="error">{error}</p>
    <div className="flex">
    {
        arrayBox.map((value,i)=>(<Box isSelected={value===selectedNumber} key={i} onClick={()=>handleNumberSelector(value)}>{value}</Box>))
    }
    </div>
    <p>Number Selector</p>

    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer=styled.div`
display: flex; align-items: flex-end; flex-direction: column;
.flex{display: flex; align-items: center; gap: 20px;}
p{font-size:24px; font-weight: 700; margin: 0}
.error{color:#ff0000}
`
const Box=styled.div`
height: 70px;
width: 70px;
border: 1px solid #000;
display: grid;
place-items: center;
font-weight: 700;
font-size: 24px;
background-color: ${(props)=> props.isSelected ? "black": "white"};
color: ${(props)=> props.isSelected? "#fff": "000"};
`
