import styled, { createGlobalStyle } from "styled-components"

import { Page1 } from '../../pages/Money/page1';
import { Page2 } from '../../pages/GoHere/page2';
import { Page3 } from '../../pages/FindHouse/page3';
import { PageFindTransport } from '../../pages/FindTransport/page';
import { PageBuySell } from '../../pages/BuySell/page';
import { PageFun } from '../../pages/Fun/page';
import { PageGoWithMe } from '../../pages/GoWithMe/page';
import { PageLaw } from '../../pages/Law/page';
import * as S from '../../components/SmallComponents/SmallComp'
import { RTTopmenu } from '../../components/Topmenu/RT-Topmenu'
import { Chip } from '../../components/Chips/RT-Chip'
import { useState } from "react"

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { ChipA } from "../Chips/RT-Chip.styles"
import { TextField } from "../RT-TextField+/TextField"


export const TopPage: React.FC = ({
    ...rest
  }) => {
        
        

        const changeChipPresser = (numberChip: string) => {

                sessionStorage.setItem('ChipPressed',numberChip)

              }

        const ChipPressedcheck = sessionStorage.getItem('ChipPressed');

    const [currentRoute, setCurrentRoute] = useState<string>(''); // Состояние для текущего маршрута

    const handleRouteChange = (path: string) => {
        console.log('buttonIndex');
      setCurrentRoute(path);
    };
    
    return (
      
<S.BackgroundGreen>
<S.Wrapper>
<RTTopmenu label="Еду отдыхать" />
<S.TopWhiteMessage label="Мне нужно"/>
</S.Wrapper>


<S.ChipsWrap>


          <Link to={`/`}>
          <div onClick={()=>changeChipPresser('0')} ><Chip pressed={ChipPressedcheck=='0'? false: true} iconName="Money" text={`Узнать про финансы`} /></div>
          </Link>

          <Link to={`/GoHere`}>
          <div onClick={()=>changeChipPresser('1')} ><Chip pressed={ChipPressedcheck=='1'? false: true} iconName="Directions_car" text={`Добраться`}/></div>
          </Link>
          
          <Link to={`/FindHouse`}>
          <div onClick={()=>changeChipPresser('2')} ><Chip pressed={ChipPressedcheck=='2'? false: true} iconName="Living" text={`Найти жильё`} /></div>
          </Link>

          <Link to={`/FindTransport`}>
          <div onClick={()=>changeChipPresser('3')} ><Chip pressed={ChipPressedcheck=='3'? false: true} iconName="Directions_car" text={`Найти транспорт`} /></div>
          </Link>

          <Link to={`/Law`}>
          <div onClick={()=>changeChipPresser('4')} ><Chip pressed={ChipPressedcheck=='4'? false: true} iconName="Court" text={`Соблюсти законы`} /></div>
          </Link>

          <Link to={`/Fun`}>
          <div onClick={()=>changeChipPresser('5')} ><Chip pressed={ChipPressedcheck=='5'? false: true} iconName="Native" text={`Развлекаться`} /></div>
          </Link>

          <Link to={`/Gowithme`}>
          <div onClick={()=>changeChipPresser('6')} ><Chip pressed={ChipPressedcheck=='6'? false: true} iconName="Location" text={`Сходить со мной`} /></div>
          </Link>

          <Link to={`/Buy-sell`}>
          <div onClick={()=>changeChipPresser('7')} ><Chip pressed={ChipPressedcheck=='7'? false: true} iconName="Law" text={`Купить-продать`} /></div>
          </Link>

      
</S.ChipsWrap>

</S.BackgroundGreen>
)}


