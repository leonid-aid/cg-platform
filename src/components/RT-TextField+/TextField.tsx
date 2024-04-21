

import React, {memo, useState} from "react";
import { Icon } from '../Icon/RT-Icon';
import { IconType } from '../Icon/IconType';
import  * as S from "./RT-TextField.styles";

export interface TextFieldProps{
    TopLabel:string;
    alert:boolean;
    Placeholder:string;
}

const TextFieldComponent:React.FC<TextFieldProps> = ({
    TopLabel,
    alert,
    Placeholder,
    ...rest
}:TextFieldProps)=>{

    return(
<>
<S.TextFieldComp>
 {alert?
 <S.textfielddivAlert>
  <S.topLabelAlert>
   {TopLabel}
  </S.topLabelAlert>
  <S.IconInputDisplay>
  <S.TextFieldInputStyled placeholder={Placeholder}/>
   <S.iconAlert>
    <Icon type="Attention"/>
   </S.iconAlert>
  </S.IconInputDisplay>
 </S.textfielddivAlert>
 :
 <S.textfielddiv>
  <S.topLabel>
   {TopLabel}
  </S.topLabel>
  <S.IconInputDisplay>
  <S.TextFieldInputStyled placeholder={Placeholder}/>
   <S.icon>
    <Icon type="Cancel"/>
   </S.icon>
  </S.IconInputDisplay>
 </S.textfielddiv>
 }
</S.TextFieldComp>
</>
);
};


export const TextField = memo(TextFieldComponent);