import React, { FC } from 'react'
import { Select } from '@chakra-ui/react'
import { RTSelectProps } from './RT-Select.props'
import { useSelect } from './useSelect'
import { v4 } from 'uuid'

export const RTSelect: FC<RTSelectProps> = ({
    children,
    customBgColor,
    customBorderColor,
    customColor,
    options,
    ...rest
}) => {
    const { styles } = useSelect({
        customColor: 'black.900',
        customBgColor: 'beige.light',
        customBorderColor: 'beige.light',
    })

    return (
        <Select colorScheme={'select'} {...styles} {...rest}>
            {options.map(({ label, value }) => (
                <option key={v4()} value={value}>
                    {label}
                </option>
            ))}
        </Select>
    )
}
