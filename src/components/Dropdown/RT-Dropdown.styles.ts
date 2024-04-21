import styled from "styled-components"


export const Button = styled.button`
  padding: 0;
  height: 56px;
  border-radius: 4px 4px 0px 0px;
  background-color:#FFD393;
  border: none;
  border-bottom: 0.5px solid black;
  width: 100%;
`;
export const Body = styled.div`
    width:100%;
  
`;
export const Headertext = styled.span`
  color:#1F1F1F;
  float: left;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: medium;
  font-size: 16px;
  line-height: 29px;
  padding-left: 14px;
`;
export const HeaderIcon = styled.span`
  padding-top:2px;
  padding-right: 21px;
  float: right;
`;
export const menu = styled.ul`
 padding: 0;
 margin: 0;
  background: #FFF3E0;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
/*   @media (max-width: 999px){
    width:100%;
  }
  @media (min-width: 600px) {
    width:100%;
  } */
`;
export const ListItems = styled.li`
  list-style-type: none;
  transition: .4s;
  &:hover {
    background-color: #FFA726;
  }
`;
export const listItemsText = styled.li`
  padding-top: 8px;
  padding-left: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: medium;
  font-size: 13px;
  height: 25%;
  margin: 0 auto;
  line-height: 32px;
`;

