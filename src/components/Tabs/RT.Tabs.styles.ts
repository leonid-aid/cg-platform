import styled from "styled-components";

/* export const Container = styled.div`

` */

interface TabStysys{
  props:number
}

export const TabStyled = styled.div<TabStysys>`
display: flex;
  width: 100%; 
  height: 48px; 
  background-color: #FFF8E1;
  cursor: pointer;
  transition: 0.15%;
  border-bottom: ${({ props }) => (props === 1 ? '2px solid rgba(66, 66, 66, 0.65)' : 'none')};

`

export const TabLabel = styled.label`
  margin: 0 auto;
  cursor: pointer;
  color: #424242;
  opacity: 74%;
  font: roboto;
  font-weight:500;
  font-size:14px;
  line-height:320%;
  text-align:Center;


  &__selected {
    color: #424242;
    opacity: 100;
    font: roboto;
    font-weight:500;
    font-size:14px;
    text-align:Center;
  }
`

export const TabColum = styled.div`
  display: flex;
  flex-direction: column;
`

export const TabRow = styled.div`
display: flex;
flex-direction: row;
@media (min-width: 1000px) {
    margin-left:10%;
    margin-right:10%;
}
@media (max-width:999px) {
    padding-left: 16px;
    padding-right: 16px;
}
`


export const ButtonDisplay = styled.div`
background-color: white;
padding-bottom: 25px;
padding-left: 16px;
padding-right: 39px;
/* margin-bottom: 32px; */
width: auto;
`