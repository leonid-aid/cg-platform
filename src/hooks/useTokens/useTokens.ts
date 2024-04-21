import { useToken } from '@chakra-ui/react'
import { TokensPropsType } from '../../types/components/shared'


export function useTokens({
    customColor,
    customBgColor,
    customBorderColor,
}: TokensPropsType) {
    const [color] = useToken('colors.project', [customColor || ''])
    const [bgColor] = useToken('colors.project', [customBgColor || ''])
    const [borderColor] = useToken('colors.project', [customBorderColor || ''])

    return {
        styles: [{ color }, { bgColor }, { borderColor }]
            .filter((obj) => Object.values(obj).filter(Boolean).length)
            .reduce((acc, element) => ({ ...acc, ...element }), {}),
    }
}
