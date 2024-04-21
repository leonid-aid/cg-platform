import React, {useEffect, useRef, useState, memo} from 'react';
import { RTChipProps } from './RT-Chip.props';
import * as S from './RT-Chip.styles';
import { Icon } from '../Icon/RT-Icon';
import { IconType } from '../Icon/IconType';
const Component: React.FC<RTChipProps> = ({
  pressed,
  text, 
  iconName,
  ...rest
}: RTChipProps) => {


  return (
    
    <S.Chip>
    <S.ChipA pressedS={pressed}>
    <S.spanButton>
      <S.svgButton><Icon type={iconName}/></S.svgButton>
      <S.textButton>{text}</S.textButton>
    </S.spanButton>
    </S.ChipA>
  </S.Chip>
  );
};

export const Chip = memo(Component);

