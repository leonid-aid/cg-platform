import styled from "styled-components"


export const Chip = styled.div`


`;

interface Chipprops{
  pressedS:boolean;
}

export const ChipA = styled.div<Chipprops>`
background-color: ${(props)=>(props.pressedS ? '#FFF3E0':'white')};
    display: inline-block;
    color: #387002;
    font-weight: 700;
    text-decoration: none;
    user-select: none;
    outline: none;
    border: 2px solid;
    border-radius: 8px;
    transition: 0.2s;
    &:hover {
  background-color: rgba(153, 208, 102, 0.20);
  }
    &:active{
      background-color: #387002;
    }
    
`;
export const spanButton = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 16px 6px 8px;
  gap: 8px;

`;
export const svgButton = styled.div`
  width: 18px;

`;
export const textButton = styled.div`
  white-space: nowrap;
  height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;


