import React, { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { RTButtonProps } from './RT-Button.props'
import { useTokens } from '../../hooks/useTokens/useTokens'

export const RTButton: FC<RTButtonProps> = ({
    children,
    customBgColor,
    customBorderColor,
    customColor,
    ...rest
}) => {
    const { styles } = useTokens({
        customColor,
        customBgColor,
        customBorderColor,
    })

    return (
        <Button colorScheme={'button'} {...styles} {...rest}>
            {children}
        </Button>
    )
}
