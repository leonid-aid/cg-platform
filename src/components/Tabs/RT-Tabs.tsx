import React, { useState, memo} from 'react';
import * as S from './RT.Tabs.styles'
import * as SmallComp from '../../components/SmallComponents/SmallComp'

export interface TabInterface {
  id: number;
  title: JSX.Element;
  content: JSX.Element;
}

export interface TabsProps {
  TabsData:TabInterface[];
}

const TabsComponent: React.FC<TabsProps> = ({TabsData}) => {



const []=useState()
 
const [tabSwich, usetabSwich]=useState(2);

const FusetabSwich = () => {
  if (tabSwich===1){usetabSwich(2)}}

const FusetabSwich2 = () => {
  if (tabSwich===2){usetabSwich(1)}}



  return (
    <>
      {
        <>
        <S.TabColum>
        <S.TabRow>
        <S.TabStyled props={tabSwich} onClick={FusetabSwich2}><S.TabLabel>{TabsData[0].title}</S.TabLabel></S.TabStyled>
        <S.TabStyled props={tabSwich===1? 2:1 } onClick={FusetabSwich}><S.TabLabel>{TabsData[1].title}</S.TabLabel></S.TabStyled>
        </S.TabRow>
        <div>
        {tabSwich === 1 ? (
          <>{TabsData[0].content}</>
          ) : (
           <>{TabsData[1].content}</>
        )}
        </div>
        </S.TabColum>
        
        </>
      }

    </>
  );
};

export const Tabs = memo(TabsComponent);
