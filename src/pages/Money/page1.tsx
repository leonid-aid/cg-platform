import React from 'react';
import { useState } from 'react'
import { RTDropdown} from '../../components/Dropdown/RT-Dropdown'
import { Chip } from '../../components/Chips/RT-Chip'
import { IconType } from '../../components/Icon/IconType'
import { Icon } from '../../components/Icon/RT-Icon'
import {RTBotmenu} from '../../components/Botmenu/RT-Botmenu'
import { RTTopmenu } from '../../components/Topmenu/RT-Topmenu'
import { RadioButton } from '../../components/RT-RadioButton/RadioButton'
import {IHaveDropDown, INeedDropDown, RadioButtonValues, IPage1Props} from './page1.info'
import * as S from '../../components/SmallComponents/SmallComp'
import * as D from './page1.styles'
import {GlobalStyle} from '../../assets/fonts/globalStyles'
import { ThemeProvider } from 'styled-components'
import imageCardsPath from "../../assets/Cards.png";
import { useButton } from '../../components/Button/useButton'
import { RTButton } from '../../components/Button/RT-Button'
import { TopPage } from '../../components/TopPanelNavigation/BigComponents'
import { Autorized } from './page1.info'

export const Page1: React.FC = ({
  ...rest
}: IPage1Props) => {


  return (

    <>
      <TopPage/>
      <S.SepBeB/>
      <S.BackgroundBeidge>
      <D.LongMessageAndPicture> 
        <D.LongMessage>
          <div>
            <p> <Icon type="Directions_transit_filled"/> <span>Основная валюта Черногории - евро.</span></p>
            <p>
              Банки Черногории сейчас открывают счета россиянам только с ВНЖ,
              самые лояльные банки: “Hipotekarna banka”, “Lovćen banka”.
            </p>
            <p>
              Известные мировые финансовые инструменты - Paypal, Revolut, Union
              Pay - в Черногории не работают.
            </p>
            <p>
              Оптимальный финансовый инструмент для перевода денег по миру вне
              России - wise.com.
            </p>
          </div>
        </D.LongMessage>
        <D.VBeidge/>
        <D.Picture>
          <D.Pictureimg src={imageCardsPath} alt="кредитные карты" />
        </D.Picture>
      </D.LongMessageAndPicture>
      </S.BackgroundBeidge>
      <D.HideInSmall>
      <S.SepBeB/>
      </D.HideInSmall>
      <S.Wrapper>
       <div id="DropDownRadioButtonDisplay">
      <div id="DropDownRadioButton">
      <S.GreenMessage label="Типовые маршруты"/>

      <S.TwoDropDownDisplay>
        <RTDropdown header="У меня есть " list={IHaveDropDown} />
        <RTDropdown header="Мне нужно " list={INeedDropDown} />
      </S.TwoDropDownDisplay>
      
      <S.TitleRadioButton>Мои варианты</S.TitleRadioButton>
      <RadioButton header="header" list={RadioButtonValues} />
      </div>
      </div>
      <D.ButtonDisplay>
      <RTButton />
      </D.ButtonDisplay>
      </S.Wrapper>
      <S.SepBeB/>
      <S.BackgroundGreen>
      <RTBotmenu Isactive={true}/>
      </S.BackgroundGreen>
    </>


  )}