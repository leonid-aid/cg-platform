import { extendTheme } from '@chakra-ui/react'
import { RTColors } from './colors'
import { RTColorScheme } from './colorScheme'
import { RTComponentStyles } from './components'

export const RTTheme = extendTheme({
    components: {
        ...RTComponentStyles,
    },
    colors: {
        project: { ...RTColors },
        ...RTColorScheme,
    },
})
