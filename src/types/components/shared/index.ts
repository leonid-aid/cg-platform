import { RTColors } from '../../../theme/colors'
import { Leaves } from '../../../types'

export type TabsColors = Leaves<typeof RTColors>

export type TokensPropsType = {
    customColor?: TabsColors
    customBgColor?: TabsColors
    customBorderColor?: TabsColors
}
