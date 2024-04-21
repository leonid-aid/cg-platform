import { RTDropdown} from '../../components/Dropdown/RT-Dropdown'
import { Chip } from '../../components/Chips/RT-Chip'
import { IconType } from '../../components/Icon/IconType'
import { Icon } from '../../components/Icon/RT-Icon'
import {RTBotmenu} from '../../components/Botmenu/RT-Botmenu'
import { RTTopmenu } from '../../components/Topmenu/RT-Topmenu'
import { RadioButton } from '../../components/RT-RadioButton/RadioButton'
import * as S from '../../components/SmallComponents/SmallComp'
import * as D from './page2.styles'
import {GlobalStyle} from '../../assets/fonts/globalStyles'
import { ThemeProvider } from 'styled-components'
import imageCardsPath from "../../assets/Cards.png";
import { useButton } from '../../components/Button/useButton'
import { RTButton } from '../../components/Button/RT-Button'
import { TopPage } from '../../components/TopPanelNavigation/BigComponents'
import { Tabs } from '../../components/Tabs/RT-Tabs'
import { TabsProps } from '../../components/Tabs/RT-Tabs'
import {IHaveDropDown, INeedDropDown, RadioButtonValues } from './page2.info'
import { Usercard } from '../../components/RT-UserCard+/Usercard'
import React from 'react';
export const Page2: React.FC = () => {

  const tabs = [
    { id: 1, title:<span>Уровень А1</span>, content: <S.TabContent><p><Icon type='Airplane'/> <p></p></p>  <p>— Не могу объясниться на языке</p> <p>— Не могу ничего написать</p> <p>— Пробую читать, получается не очень</p>  </S.TabContent> },
    { id: 2, title: <span>Уровень А2</span>, content: <S.TabContent><p>— Понимаю на слух отдельные слова, в целом угадываю тему разговора</p>  <p> — Могу объясниться парой типовых фраз</p> <p>— Не очень получается что-то написать</p> <p>— В тексте понимаю некоторые слова и общую тему прочитанного</p></S.TabContent> },
  ];


  return (
    <>
      <GlobalStyle/>
        <TopPage/>
      <S.BackgroundBeidge>

        <Tabs TabsData={tabs}/>

      </S.BackgroundBeidge>
      <S.SepBeB/>
      <S.Wrapper>
      <S.GreenMessage label="Типовые маршруты"/>
      <S.TwoDropDownDisplay>
        <RTDropdown header="У меня есть " list={IHaveDropDown} />
        <RTDropdown header="Мне нужно " list={INeedDropDown} />
      </S.TwoDropDownDisplay>
      <S.TitleRadioButton>Мои варианты</S.TitleRadioButton>
      <RadioButton header="header" list={RadioButtonValues} />
      <RTButton/>

      </S.Wrapper>
      <S.SepBeB/>
      <S.Wrapper>
      <S.GreenMessage label="Истории о дороге"/>

      <S.ThreeObjDisplay>
      <Usercard sizebig={false} avatar="path to img" userName="Алекс Иванов" rating={30} header="Из Новгорода в Тиват" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <Usercard sizebig={false} avatar="path to img" userName="Алекс Иванов" rating={30} header="Из Новгорода в Тиват" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/> 
      <Usercard sizebig={false} avatar="path to img" userName="Алекс Иванов" rating={30} header="Из Новгорода в Тиват" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>         
      </S.ThreeObjDisplay>

      </S.Wrapper>
    </>
  );
};
