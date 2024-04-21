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
import imageCardsPath from "../../assets/Cards.png";
import { useButton } from '../../components/Button/useButton'
import { RTButton } from '../../components/Button/RT-Button'
import { TopPage } from '../../components/TopPanelNavigation/BigComponents'
import { Tabs } from '../../components/Tabs/RT-Tabs'
import { StackedCard } from '../../components/RT-StackedCard+/StackedCard'
import { TextField } from '../../components/RT-TextField+/TextField'
import React from 'react';
export const PageBuySell: React.FC = ({
  ...rest
}: IPageProps) => {

  const tabs = [
    { id: 1, title:<span>Купить</span>, content: 
    <>
    <S.BackgroundWhite>
      <S.Wrapper>
        <S.GreenMessage label='Я ищу товар (услугу)' />
        <S.SepBeWhite/>
        <RTButton/>
        <S.SepBeWhite/>
      </S.Wrapper>
    </S.BackgroundWhite>
    <S.SepBeB/>
    <S.BackgroundWhite>
      <S.Wrapper>
        <S.GreenMessage label='Я ищу подержанный товар' />
        <S.TwoDropDownDisplay>
          <RTDropdown header='В городе' list={INeedDropDown} />
          <RTDropdown header='Категория' list={INeedDropDown} />
        </S.TwoDropDownDisplay>
        <S.SepBeWhite/>
        <RTButton/>
        <S.SepBeWhite/>
        <S.SepBeWhite/>
      </S.Wrapper>
    </S.BackgroundWhite>
    <S.SepBeB/>
    </>},
    { id: 2, title: <span>Продать</span>, content: 
    <div>
      <S.BackgroundWhite>
        <S.Wrapper>
          <S.GreenMessage label='Я продаю товар' />
          <S.SepBeWhite/>
          <RTButton/>
          <S.SepBeWhite/>
        </S.Wrapper>
      </S.BackgroundWhite>
      <S.SepBeB/>
      <S.BackgroundWhite>
        <S.Wrapper>
        <S.GreenMessage label='Я продаю подержанный товар' />

        <S.TwoDropDownDisplay>
          <RTDropdown header='Категория' list={INeedDropDown} />
        </S.TwoDropDownDisplay>
        <S.SepBeWhite/>
        <RTButton/>
        <S.SepBeWhite/>
        <S.SepBeWhite/>
        </S.Wrapper>
      </S.BackgroundWhite>
      <S.SepBeB/>
      <S.BackgroundWhite>
        <S.Wrapper>
        <S.GreenMessage label='Я продаю подержанный товар' />

        <S.TwoDropDownDisplay>
          <RTDropdown header='Категория' list={INeedDropDown} />
        </S.TwoDropDownDisplay>
        <S.SepBeWhite/>
        <RTButton/>
        <S.SepBeWhite/>
        <S.SepBeWhite/>
        </S.Wrapper>
      </S.BackgroundWhite>
      <S.SepBeB/>



    </div> },
  ];

  return (

    <>
    <GlobalStyle/>
    <TopPage/>
    <S.BackgroundBeidge>
    <Tabs TabsData={tabs} />
    </S.BackgroundBeidge>
    <S.BackgroundGreen>
      <RTBotmenu Isactive={true} />
    </S.BackgroundGreen>
    </>


  )}