import React from "react"
import styled from "styled-components";



export const TopWhiteMessageStyle = styled.div`
    width: 100%;
    font-family: 'Roboto-Medium','sans-serif';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    height: 24px;
    letter-spacing: 0.1px;
    color: #FFFFFF;
    background-color: #99D066;
    margin-bottom: 8px;
    margin-top: 16px;
/*     padding-bottom: 14px;
    padding-top: 14px; */`

export const GreenMessageStyle = styled.div`
    background-color: inherit;
    color: #387002;
    font-family: 'Roboto-Medium';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 64px;
    letter-spacing: 0.1px;
`

export const BlackMessageStyle = styled.div`
    background-color: inherit;
    color: black;
    font-family: 'Roboto-Medium';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 64px;
    letter-spacing: 0.1px;
`

export const SepBeB = styled.div`
    width: 100%;
    background-color: #FFF3E0;
    height: 40px;
`
export const SepBeWhite = styled.div`
    width: 100%;
    background-color:white;
    height: 20px;
`



interface IMessage {label:string;}
export const GreenMessage:React.FC<IMessage> = ({label})=>{
    return(
        <GreenMessageStyle>
            <label>{label}</label>
        </GreenMessageStyle>)}

export const TopWhiteMessage:React.FC<IMessage> = ({label})=>{
    return(
        <TopWhiteMessageStyle>
            <label>{label}</label>
        </TopWhiteMessageStyle>)}

export const BlackMessage:React.FC<IMessage> = ({label})=>{
    return(
        <BlackMessageStyle>
            <label>{label}</label>
        </BlackMessageStyle>)}


export const TwoDropDownDisplay = styled.div`
@media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

}
  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
  }`




export const ThreeObjDisplay = styled.div`
@media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  /* Стили для маленьких экранов */
  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
  }
`


export const ChipsWrap = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background-color: #99D066;
    justify-content: start;
    padding-bottom:24px;
    @media(max-width:999px){
        margin-left: 16px;
    }
    @media(min-width:1000px){
        margin-left: 10%;
    }


    & > *:not(:last-child) {
    margin-right: 6px;
  }`;


export const StackedCardWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
    background-color: white;

    @media(min-width:600px){
        padding-right: 17px;
        margin-bottom: 64px;
    }
    @media(max-width:599px){
        margin-bottom: 16px;
    }`


export const TitleRadioButton = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 54px;
    letter-spacing: 0.1px;
    color: #1F1F1F;
    `


export const BackgroundBeidge = styled.div`
    background-color:#FFF3E0;`
export const BackgroundWhite = styled.div`
    background-color:#FFFFFF;`

export const BackgroundGreen = styled.div`
    background-color: #99D066;`

export const Wrapper = styled.div`
@media (min-width: 1000px) {
    margin-left:10%;
    margin-right:10%;
}
@media (max-width:999px) {
    padding-left: 16px;
    padding-right: 16px;
}
`

export const WrapperOneSide = styled.div`
    margin-left:10%;`



export const TabContent = styled.div`

@media (min-width: 1000px) {
    margin-left:10%;
    margin-right:10%;
}
@media (max-width:999px) {
    padding-left: 16px;
    padding-right: 16px;
}

color: var(--Black, #1F1F1F);
background-color:white;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.5px;
padding-left: 16px;
padding-right: 39px;
padding-top: 24px;
padding-bottom: 24px;
`

export const TextContent = styled.p`
color: var(--Black, #1F1F1F);
/* Body Large */
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
letter-spacing: 0.5px;
`