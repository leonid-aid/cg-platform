import React from 'react';
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
export const PageGoWithMe: React.FC = ({
  ...rest
}: IPageProps) => {
  return (

    <>
    <GlobalStyle/>
    <TopPage/>
    <S.SepBeB/>
    <S.Wrapper>
    <S.GreenMessage label='Мне нужна помощь переводчика' />
    <S.TextContent>Мне нужно, чтобы со мной сходили и помогли поговорить и решить вопрос: в општину, полицию, больницу, банк, аптеку, и.т.д.</S.TextContent>
    <S.SepBeWhite/>
    <S.ThreeObjDisplay>
    <RTDropdown header='в городе ' list={IHaveDropDown} />
    </S.ThreeObjDisplay>
    <S.SepBeWhite/>
    <RTButton/>
    <S.SepBeWhite/>
    </S.Wrapper>
    <S.SepBeB/>
    <S.SepBeB/>   
    <S.BackgroundGreen>
    <RTBotmenu Isactive={true} />
    </S.BackgroundGreen>



    </>


  )}