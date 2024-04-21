import { HTMLAttributes } from 'react'
import { TokensPropsType } from '../../types/components/shared'
import { RTSelectOptionType } from './RT-Select.types'
import { SelectProps } from '@chakra-ui/react'
interface RTSelectProps extends SelectProps, TokensPropsType {
    options: Array<RTSelectOptionType>
}

export type { RTSelectProps }
