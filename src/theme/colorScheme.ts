import { RTColors } from './colors'
const { blue, gray, orange, green, beige, black } = RTColors
export const RTColorScheme = {
    button: {
        /**
         * @description 500 - it is an @param active color
         */
        500: green[700],
        /**
         * @description 500 - it is an @param hover color
         */
        600: orange.light,
        /**
         * @description 500 - it is an @param pressed color
         */
        700: orange.dark,
    },

    select: {
        customColor: 'black.900',
        customBgColor: 'beige.100',
        customBorderColor: 'beige.100',
    },
    input: {
        customColor: beige.dark,
    },
}
