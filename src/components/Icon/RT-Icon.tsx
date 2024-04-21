import React, {useEffect, useRef, useState, memo} from 'react';
import { RTIconProps } from './RT-Icon.props';
import { IconType, iconTypes } from './IconType';



const getIcon = (type: IconType): JSX.Element =>
iconTypes.get(type) as JSX.Element;
const Component: React.FC<RTIconProps> = ({
  type,
  onClick,
  ...rest
}) => {
  return (
    <div
      onClick={onClick}>
      {getIcon(type)}
    </div>
  );
};
export const Icon = memo(Component);