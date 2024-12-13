import styled from "styled-components";


export const Button=styled.button`
background-color: #000;
border-radius: 5px;
color: #fff;
min-width: 220px;
padding: 10px 20px;
gap: 20px;

border: none;
font-size: 16px;
border: 1px solid transparent;
transition: 0.3s all ease;
cursor: pointer;
&:hover{background-color:#fff; color:#000; border: 1px solid #000; transition: 0.3s all ease;}
`;