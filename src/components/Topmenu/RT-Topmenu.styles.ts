import styled from "styled-components"


export const TopMenu = styled.div`

@media (min-width: 220px) and (max-width: 899px) {
    width:100%;
        height: 64px;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
}
@media (min-width: 900px)  {
    height: 64px;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-between;
}
    background-color: #99D066;
`;

export const RuPlaceDisplay = styled.div`
@media (max-width: 899px) {display: none;}
`;

export const RuPlacefull = styled.div`
    background-color: #99D066;
    width:115px;
    height:45px;
    display: flex;
    flex-direction: row;
`;

export const iconMontenegro = styled.div`
    padding-top: 6px;
    height:40px;
    width:40px;
`;

export const labelRuMon = styled.div`
    padding-left: 8px;
`;
export const Ru = styled.span`
    font-family: 'Raleway';
    font-style: normal;
    color:white;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.08em;
`;

export const Place = styled.span`
    padding-left: 4px;
    font-weight: 700;
    font-size: 12px;
    line-height: 10px;
    font-family: 'Raleway';
    font-style: normal;
    color:white;
`;

export const Montenegro = styled.span`
    font-family: 'Raleway';
    font-style: normal;
    color:white;
    font-weight: 400;
    font-size: 12px;
    line-height:0 px;
`;

export const Burgerandlabel = styled.div`
@media (max-width: 899px) {

        display:flex;
        flex-direction: row;
        align-items: center;
}
@media (min-width: 900px)  {
    display:flex;
        flex-direction: row;
        align-items: center;
}
`;

export const Burger = styled.div`
@media (min-width: 900px)  {       display:none;}
`;

export const MenuSpan = styled.span`
    fill:white;
`;

export const Label = styled.div`
@media (max-width: 899px) {
    padding-bottom: 5px;
        padding-left: 16px;
        white-space: nowrap;
}
@media (min-width: 900px)  {
    padding-left: 80px;
        padding-bottom: 5px;
        white-space: nowrap;
}
font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    color:white;
`;

export const BotMenu = styled.div`
@media (max-width: 899px) {
    display:none;
}
@media (min-width: 900px)  {
    padding-left: 40px;
}
`;

export const BotMenuMessage = styled.label`
@media (min-width: 900px)  {
    padding-right:24px
}
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color:white;
`;

export const BotMenuPlasement = styled.label`
@media (min-width: 900px)  {
    padding-right:24px ;
}
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color:white;
`;

export const BotMenuChat = styled.label`
@media (min-width: 900px)  {
    padding-right:24px ;
}
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color:white;
`;

export const Icons = styled.li`
@media (max-width: 399px) {
    width:35%;    
        display: flex;
        flex-direction: row;
        justify-content: space-between;
}
@media (min-width: 220px) and (max-width: 713px){
    width:50%;    
        display: flex;
        flex-direction: row;
        justify-content: space-between;
}
@media (min-width: 714px) and (max-width: 899px) {
    display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width:70%
}
@media (min-width: 900px)  {
    display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
}
`;

export const IconsMoney = styled.span`
@media (min-width: 714px) and (max-width: 899px) {
    display:flex;
        flex-direction: row;
        white-space: nowrap;
}
@media (min-width: 900px)  {
    display:flex;
        flex-direction: row;
        white-space: nowrap;
        padding-right: 30px;
}
fill:white;
`;

export const LabelIcon = styled.label`

@media (max-width: 713px){
    display:none;
}
@media (min-width: 714px) and (max-width: 899px) {
    padding-left: 2%;
        line-height: 25px;
}
@media (min-width: 900px)  {
    display:none;
}
font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.1px;
    color:white;
`;

export const IconsShop = styled.span`
@media (min-width: 714px) and (max-width: 899px) {
    display:flex;
        flex-direction: row;
        white-space: nowrap;
}
@media (min-width: 900px)  {
    display:flex;
        flex-direction: row;
        white-space: nowrap;
        padding-right: 30px;
}
fill:none;
    stroke:white;
`;

export const IconsLive = styled.span`
@media (max-width: 713px){padding-right: 15%;}
@media (min-width: 714px) and (max-width: 899px) {
    display:flex;
        flex-direction: row;
        white-space: nowrap;
        padding-right: 1%;
}
@media (min-width: 900px)  {
    padding-right: 36px; 
}
fill:white;
`;

export const Burger2 = styled.span`
@media (max-width: 899px) {display:none;
}
fill:white;
`;
