import styled from "styled-components";

export const StCard =styled.div` 
    display: flex;
    flex-direction: column;
    width: 360px;
    height:480px;
    border: 1px solid #79747E;
    border-radius: 12px;

    @media(min-width:600px){
        margin-right: 17px;
    }
    @media(max-width:599px){
        margin-left: 16px;
        margin-right:16px;
    }
 `;
export const Header =styled.div` 
    display: flex;
    flex-direction: row;
    margin-top: 16px;
    margin-left: 16px;
    width: calc(100% - 37px);
    align-items: center;
    margin-bottom: 16px;
 `;
export const StCardIcon =styled.div` 
    position: absolute;
    margin-left: 302px;
 `;
export const StCardBody =styled.div` 
    height: 188px;
    background: #F0F0F0;
 `;
export const BotText =styled.div` 
    padding-left: 16px;
    padding-right: 16px;
 `;
export const Avatar =styled.div` 
    padding-right: 16px;
 `;
export const Descheader =styled.div` 
    margin-top: 16px;
    margin-bottom: 32px;
    height: 40px;
 `;
export const StCardDescryption =styled.div` 
    height: auto;
    margin-bottom: 16px;
    word-wrap: break-word;
    
 `;
