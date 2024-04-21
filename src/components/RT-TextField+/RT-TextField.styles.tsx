import styled from "styled-components";







export const textfielddiv =styled.div` 
    padding: 0px 0px 0px 0px;
    height: 56px;
    border: 1px solid rgba(31, 31, 31, 0.8);
    border-radius: 16px;
    &:focus-within {
        border: 2px solid rgba(31, 31, 31, 0.8);
  }

 `;
export const IconInputDisplay =styled.div` 
    z-index: -1;
    width: 100%;
    display: flex;
    align-items: center;
 `;


export const TextFieldComp =styled.div` 
    width: 100%;
    margin-bottom: 16px;;
 `;


export const TextFieldInputStyled = styled.input`
appearance: none;
border: none;
margin: 0;
padding: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
color: inherit;
background: transparent;
outline: none;
   width: 100%;
   margin-top: 15px;
   margin-left: 10px;
`   







export const topLabel =styled.legend` 
    margin-top: -6px;
    margin-left: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.4px;
    width: auto;
    height: 16px;
    position:absolute;
    background-color: white;
 `;
export const icon =styled.div` 
    float: right;
    padding-top: 15px;
    padding-right: 14px;
 `;
export const textfielddivAlert =styled.div`  
    flex-direction: column;
    padding: 0px 0px 0px 0px;

    height: 56px;
    border: 1px solid red;
    border-radius: 16px;
    :focus-within{
        border: 2px solid red;
    }
 `;
export const topLabelAlert =styled.legend` 
    margin-top: -6px;
    margin-left: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: red;
    letter-spacing: 0.4px;
    width: auto;
    height: 16px;
    position:absolute;
    background-color: white;
 `;
export const iconAlert =styled.div` 
    float: right;
    padding-top: 15px;
    padding-right: 14px;
    fill:#ff4c5b;
 `;
