import React, {DOMAttributes} from "react";
import { IconType } from "../Icon/IconType";
 export interface RTChipProps extends DOMAttributes<HTMLDivElement>{
    text: string;
    iconName: IconType;
    pressed:boolean;

}

