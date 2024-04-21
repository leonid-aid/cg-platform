import { IconType, iconTypes } from "./IconType";
export interface RTIconProps {
  className?: string;
  type: IconType;
  onClick?: () =>void | Promise<void>
  }
