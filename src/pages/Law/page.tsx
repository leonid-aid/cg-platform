import React from 'react';
import { RTDropdown} from '../../components/Dropdown/RT-Dropdown'
import { Chip } from '../../components/Chips/RT-Chip'
import { IconType } from '../../components/Icon/IconType'
import { Icon } from '../../components/Icon/RT-Icon'
import {RTBotmenu} from '../../components/Botmenu/RT-Botmenu'
import { RTTopmenu } from '../../components/Topmenu/RT-Topmenu'
import { RadioButton } from '../../components/RT-RadioButton/RadioButton'
import {IHaveDropDown, INeedDropDown, RadioButtonValues, IPageProps} from './pageinfo'
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
export const PageLaw: React.FC = ({
  ...rest
}: IPageProps) => {

  const tabs = [
    { id: 1, title:<span>Краткосрочное пребывание</span>, content: 
   <div>
  <S.TabContent>
    <p>В первый рабочий день каждый приехавший в Черногорию, не имеющий ВНЖ или недвижимости,</p>
    <p>ший в Черногорию, не имеющий ВНЖ или недвижимости, должен зарегистрироваться в туристическом бюро с указанием адреса,</p>
    <p>срока пребывания и оплатить туристический сбор: 1 евро в сутки за взрослого человека, 50 евроцентов в сутки за ребенка.</p>
    <S.SepBeWhite/>
    <RTButton/>
    <S.SepBeWhite/>
    <RTButton/>
  </S.TabContent>
  <S.SepBeB/>
  <S.BackgroundWhite>
    <S.Wrapper>
      <S.TextContent>Граждане России могут находиться в Черногории без визы - 30 дней, независимо от месяца пребывания;</S.TextContent>
      <S.TextContent>с шенгенской визой - до конца срока</S.TextContent>
      <S.TextContent>После 30 дней пребывания россиянин должен либо выехать из Черногории с отметкой в загранпаспорте о пересечении границы</S.TextContent>
      <S.TextContent>(“сделать визаран”), либо успеть подать заявление на временный вид на жительство (ВНЖ, или виза D, или privrjemeni boravak).</S.TextContent>
      <p></p>
      <S.TextContent>Большок количество визаранов (выездов) в некоторых городах мешает получению ВНЖ, актуальную практику уточняйте у</S.TextContent>
      <S.TextContent> юристов по ВНЖ.</S.TextContent>
      <S.SepBeWhite/>
      <RTButton/>
      <S.SepBeWhite/>      
    </S.Wrapper>
  </S.BackgroundWhite>
   </div>},
    { id: 1, title:<span>Долгосрочное пребывание</span>, content: 
   <div>
      <S.TabContent>
    <p>В первый рабочий день каждый приехавший в Черногорию, не имеющий ВНЖ или недвижимости,</p>
    <p>ший в Черногорию, не имеющий ВНЖ или недвижимости, должен зарегистрироваться в туристическом бюро с указанием адреса,</p>
    <p>срока пребывания и оплатить туристический сбор: 1 евро в сутки за взрослого человека, 50 евроцентов в сутки за ребенка.</p>
    <S.SepBeWhite/>
    <RTButton/>
    <S.SepBeWhite/>
    <RTButton/>
  </S.TabContent>
  <S.SepBeB/>
  <S.BackgroundWhite>
    <S.Wrapper>
      <S.TextContent>Для длительного пребывания без шенгенской визы россиянину требуется за 30 дней с даты въезда успеть подать заявление</S.TextContent>
      <S.TextContent></S.TextContent>
    </S.Wrapper>
  </S.BackgroundWhite>
   </div>}  ];

  return (

    <>
    <TopPage/>

    <S.BackgroundBeidge>
    <Tabs TabsData={tabs} />
    </S.BackgroundBeidge>
    <S.SepBeB/>
    <S.BackgroundGreen>
    <RTBotmenu Isactive={true} />
    </S.BackgroundGreen>

    </>


  )}