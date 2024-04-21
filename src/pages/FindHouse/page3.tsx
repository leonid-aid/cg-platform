import { RTDropdown} from '../../components/Dropdown/RT-Dropdown'
import { Chip } from '../../components/Chips/RT-Chip'
import { IconType } from '../../components/Icon/IconType'
import { Icon } from '../../components/Icon/RT-Icon'
import {RTBotmenu} from '../../components/Botmenu/RT-Botmenu'
import { RTTopmenu } from '../../components/Topmenu/RT-Topmenu'
import { RadioButton } from '../../components/RT-RadioButton/RadioButton'
import {IHaveDropDown, INeedDropDown, RadioButtonValues, tabs, IPage3Props} from './page3.info'
import * as S from '../../components/SmallComponents/SmallComp'
import * as D from './page3.styles'
import {GlobalStyle} from '../../assets/fonts/globalStyles'
import { ThemeProvider } from 'styled-components'
import imageCardsPath from "../../assets/Cards.png";
import { useButton } from '../../components/Button/useButton'
import { RTButton } from '../../components/Button/RT-Button'
import { TopPage } from '../../components/TopPanelNavigation/BigComponents'
import { Tabs } from '../../components/Tabs/RT-Tabs'
import { StackedCard } from '../../components/RT-StackedCard+/StackedCard'
import { TextField } from '../../components/RT-TextField+/TextField'
import React from 'react';
export const Page3: React.FC = ({
  ...rest
}: IPage3Props) => {
  return (

    <>
    <GlobalStyle/>
      <TopPage/>
      <S.BackgroundBeidge>

      <Tabs TabsData={tabs}/>

      </S.BackgroundBeidge>
      <S.SepBeB/>
      <S.BackgroundWhite>
      <S.Wrapper>

        <S.GreenMessage label='Отели, хостелы, частное жильё' />

        <S.ThreeObjDisplay>
        <RTDropdown header='Я выбираю город'list={IHaveDropDown}/>
        <RTDropdown header='Даты'list={IHaveDropDown}/>
        <RTDropdown header='1 номер * 1взрослый * 2 ребёнка'list={IHaveDropDown}/> 
        </S.ThreeObjDisplay> 
        <S.BlackMessage label='найдено 13 вариантов' />
        </S.Wrapper>
        <S.WrapperOneSide>
        <S.StackedCardWrap>
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />  
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />  
        </S.StackedCardWrap>
        </S.WrapperOneSide>
        <S.SepBeB/>
        <S.Wrapper>

        <S.GreenMessage label='Я могу подать обьявление о поиске жилья'/>

        <S.ThreeObjDisplay>
        <TextField TopLabel='TopLabel' alert={false} Placeholder='PlaceHolder' />
        <TextField TopLabel='TopLabel' alert={true} Placeholder='PlaceHolder' />
        <TextField TopLabel='TopLabel' alert={false} Placeholder='PlaceHolder' />
        </S.ThreeObjDisplay>

        <S.ThreeObjDisplay>
        <TextField TopLabel='TopLabel' alert={false} Placeholder='PlaceHolder' />
        <TextField TopLabel='TopLabel' alert={false} Placeholder='PlaceHolder' />
        </S.ThreeObjDisplay>
        <RTButton/>
        <S.SepBeWhite/>
        </S.Wrapper>
        </S.BackgroundWhite>
        <S.SepBeB/>
        <S.BackgroundGreen>
        <RTBotmenu Isactive={true} />
        </S.BackgroundGreen>



    </>


  )}