import styled from "styled-components";

export const radioitems =styled.div` 
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
letter-spacing: 0,5px;
 `;
export const radiolist =styled.div` 
    padding-left: 2px;
 `;
export const radiockick =styled.input` 
    appearance: none;
    width: 20px;
    height: 20px;
    margin-top: 2px;
    border-radius: 50%;
    border: 2px solid black;
    margin-right:4px;
    :checked{
    appearance: none;
    width: 20px;
    height: 20px;
    margin-top: 2px;
    border-radius: 50%;
    border: 2px solid black;
    box-shadow: inset 0 0 0 3px #fff, inset 0 0 0 10px black;
    }
 `;
export const radiockickAndradiolist =styled.div` 
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 16px;
 `;
export const radioButtonBody =styled.div`
@media (max-width: 999px){
        display:flex;
        flex-direction: column;
    } 
        @media (min-width: 1000px) {
        display:flex;
        flex-direction: row;
        justify-content: space-between;}
     `;
