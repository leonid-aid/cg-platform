import React, {useEffect, useRef, useState, memo} from 'react';
import { RTDropdownProps } from './RT-Dropdown.props';
import * as S from './RT-Dropdown.styles';
import { Button } from './RT-Dropdown.styles';
import { useSpring, animated } from 'react-spring';


const Component: React.FC<RTDropdownProps> = ({
  header,
    list,
  ...rest
}: RTDropdownProps) => {




    const [selectOpen, selectClose]= React.useState (false)
    const [buttonText, setButtonText] = useState(" ");

    const slideDownAnimation = useSpring({
      opacity: selectOpen ? 1 : 0,
      transform: selectOpen ? 'translateY(0%)' : 'translateY(-20%)',
    });


    const Clickli =(event:React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
    selectClose(false)
    const itemText = event.currentTarget.textContent;
    setButtonText(`${itemText}`);}
    const dropdownRef = useRef<HTMLDivElement>(null)
    const handleDropDownFocus = (state: boolean) => {
      selectClose(!state);};
      const handleClickOutsideDropdown =(e:any)=>{
        if(selectOpen && !dropdownRef.current?.contains(e.target as Node)){
          selectClose(false)}} 
    window.addEventListener("click",handleClickOutsideDropdown)
  return (
  <S.Body ref={dropdownRef}>
    <Button style={{borderRadius: selectOpen? '4px 4px 4px 4px' : '4px 4px 0px 0px', borderBottom: selectOpen? 'none' : '0.5px solid black'}} onClick={(e) => handleDropDownFocus(selectOpen)}> <S.Headertext>{header}{buttonText}</S.Headertext>  <S.HeaderIcon>{ }</S.HeaderIcon> </Button>
    {
      selectOpen?  <animated.div style={slideDownAnimation}><S.menu>{list.map(el=>(<S.ListItems  onClick={Clickli}><S.listItemsText>{el}</S.listItemsText></S.ListItems>))}</S.menu></animated.div> 
      : null
    }
  </S.Body>
  );
};

export const RTDropdown = memo(Component);

