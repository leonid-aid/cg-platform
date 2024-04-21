import { useToken } from '@chakra-ui/react'
import { RTSelectProps } from './RT-Select.props'

export function useSelect({
    customColor,
    customBgColor,
    customBorderColor,

}: Pick<RTSelectProps, 'customBgColor' | 'customBorderColor' | 'customColor'>) {
    const [color] = useToken('colors.project', [customColor || ''])
    const [bgColor] = useToken('colors.project', [customBgColor || ''])
    const [borderColor] = useToken('colors.project', [customBorderColor || ''])

    return {
        styles: [{ color }, { bgColor }, { borderColor }]
        .filter((obj) => Object.values(obj).filter(Boolean).length)
        .reduce((acc, element) => ({ ...acc, ...element }), {}),
    }
}
