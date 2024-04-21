import { RTDropdown} from '../../components/Dropdown/RT-Dropdown'
import { Chip } from '../../components/Chips/RT-Chip'
import { IconType } from '../../components/Icon/IconType'
import { Icon } from '../../components/Icon/RT-Icon'
import {RTBotmenu} from '../../components/Botmenu/RT-Botmenu'
import { RTTopmenu } from '../../components/Topmenu/RT-Topmenu'
import { RadioButton } from '../../components/RT-RadioButton/RadioButton'
import {IHaveDropDown, INeedDropDown, RadioButtonValues, tabs, IPageProps} from './pageinfo'
import * as S from '../../components/SmallComponents/SmallComp'
import {GlobalStyle} from '../../assets/fonts/globalStyles'
import { ThemeProvider } from 'styled-components'
import imageCardsPath from "../../assets/Cards.png";
import { useButton } from '../../components/Button/useButton'
import { RTButton } from '../../components/Button/RT-Button'
import { TopPage } from '../../components/TopPanelNavigation/BigComponents'
import { Tabs } from '../../components/Tabs/RT-Tabs'
import { StackedCard } from '../../components/RT-StackedCard+/StackedCard'
import { TextField } from '../../components/RT-TextField+/TextField'
import { Usercard } from '../../components/RT-UserCard+/Usercard'
import { BotMenu } from '../../components/Topmenu/RT-Topmenu.styles'
import React from 'react';
export const PageFun: React.FC = ({
  ...rest
}: IPageProps) => {
  return (

    <>
    <GlobalStyle/>
    <TopPage/>
    <S.BackgroundWhite>
      <S.Wrapper>
        <S.GreenMessage label='Выбрать развлечение' />
        <S.ThreeObjDisplay>
          <TextField TopLabel='В каком Городе/општине' alert={false} Placeholder='Цетине' />
          <TextField TopLabel='Категория' alert={false} Placeholder='Достопримечательности' />
          <TextField TopLabel='Даты' alert={false} Placeholder='' />
          <TextField TopLabel='Цена' alert={false} Placeholder='' />
        </S.ThreeObjDisplay>
        <S.SepBeWhite/>
        <RTButton/>
        <S.SepBeWhite/>
        <S.BlackMessage label='Найдено 2 варианта' />
        <S.StackedCardWrap>
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        <StackedCard header='header' subhead='subhead' Title='Title' SubheadTitle='SubheadTitle' text='texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext' img='' />
        </S.StackedCardWrap>
        <RTButton/>
        <S.SepBeWhite/>
      </S.Wrapper>
      <S.SepBeB/>
    </S.BackgroundWhite>
    <BotMenu/>


    </>


  )}