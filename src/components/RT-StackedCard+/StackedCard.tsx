import React, { DOMAttributes, memo } from "react";
import * as S from './RT-Styles'
import { Icon } from '../Icon/RT-Icon';
import { IconType } from '../Icon/IconType';

interface StackedCardInterface extends DOMAttributes<HTMLDivElement> {
    header:string;
    subhead:string;
    Title:string;
    SubheadTitle:string;
    text:string;
    img:string;
}

const StackedCardComponent:React.FC<StackedCardInterface>=({
    header,
    subhead,
    Title,
    SubheadTitle,
    text,
    img,
    ...rest
})=>{
    const pathAvatar = "avatar.png"
    return(
<S.StCard>
 <S.Header>
  <S.Avatar>
   <img alt="avatar" src="{imageAvatarPath}"/>
  </S.Avatar>
  <div>
   <div>
    {header}
   </div>
   <div>
    {subhead}
   </div>
  </div>
  <div>
   <Icon type="Light_mode"/>
  </div>
 </S.Header>
 <S.BotText>
  <S.Descheader>
   <div>
    {Title}
   </div>
   <div>
    {SubheadTitle}
   </div>
  </S.Descheader>
  <S.StCardDescryption>
   {text}
  </S.StCardDescryption>
 </S.BotText>
</S.StCard>)}
export const StackedCard = memo(StackedCardComponent);