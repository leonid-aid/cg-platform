import styled, { createGlobalStyle } from "styled-components"

 

export const LongMessageAndPicture = styled.div`
@media (min-width: 900px) {
        display: flex;
        flex-direction: row;}
@media (min-width:1000px) {
    margin-left: 10%;
    margin-right: 10%;
    justify-content: left;
}
`
export const LongMessage = styled.div`
background-color: #FFFFFF;
@media (max-width: 899px) {
    padding-left: 10px;}
    @media (min-width: 900px){
        width:60%;}
div{
    padding: 8px 22px 23px 0px;
}
p{padding-left:16px;}
p:first-of-type{
    display: flex;
    flex-direction: row;
}
span{padding-top: 8px}

    
`
export const Picture = styled.div`
@media (min-width: 900px) {
    background-color: white;
    width: 40%;
    height: auto;
}
@media (max-width:899px) {
    display: flex;
  align-items: center;
  justify-content: center;
  
}
`
export const HideInSmall = styled.div`
    @media (max-width:600px){
        display: none;     
    }
    @media(min-width:599px){

    }
`

export const DropDownRadioButtonDisplay = styled.div`

`
export const DropDownRadioButton = styled.div`

`


export const Pictureimg = styled.img`


`
export const VBeidge = styled.div`
    width:21px;
    height:auto;
    background-color: #FFF3E0;


`
export const ButtonDisplay = styled.div`
    margin-top: 16px;
    margin-bottom: 32px;
`