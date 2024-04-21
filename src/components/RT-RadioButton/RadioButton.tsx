import React, {memo} from "react";
import { Icon } from '../Icon/RT-Icon';
import { IconType } from '../Icon/IconType';
import * as S from "./RT-RadioButton.styles"
interface IRadioButtonProps {
    header:string;
    list: string[][];
}

const RadioButtonComponent: React.FC<IRadioButtonProps>=({
    header,
    list,
    ...rest
}:IRadioButtonProps)=>{
    return(
    <S.radioButtonBody>

      {list.map(lists=>
      (<S.radiockickAndradiolist><S.radiockick type="radio"/><S.radiolist>{lists.map(item=>(<S.radioitems>{item}</S.radioitems>)
      )}
    </S.radiolist></S.radiockickAndradiolist>)
      )}
    </S.radioButtonBody>
    )
}


export const RadioButton = memo(RadioButtonComponent);
