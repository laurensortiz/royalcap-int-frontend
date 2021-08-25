import { DefaultTheme } from 'styled-components'

const baseSize = 32
const baseSpacing = 16
const baseFontSize = 15

export const defaultTheme = {
  borderRadius: '8px',

  breakpoints: {
    s: '600px',
    m: '1280px',
    l: '1920px',
  },

  spacings: {
    xxs: `${baseSpacing / 8}px`, // 2px
    xs: `${baseSpacing / 4}px`, // 4px
    s: `${baseSpacing / 2}px`, // 8px
    m: `${baseSpacing}px`, // 16px
    l: `${baseSpacing * 2}px`, // 32px
  },

  sizes: {
    xs: `${baseSize / 2}px`, // 16px
    s: `${baseSize}px`, // 32px
    m: `${baseSize * 2}px`, // 64px
    l: `${baseSize * 4}px`, // 128px
    xl: `${baseSize * 8}px`, // 256px
  },

  fonts: {
    headingLarge: `48px`, // 48px
    heading: `32px`, // 32px
    headingSmall: `24px`, // 24px
    extraLarge: `19px`, // 19px
    large: `17px`, // 17px
    baseSize: `15px`, // 15px
    small: `14px`, // 14px
    tiny: `12px`, // 12px
    extraTiny: `10px`, // 10px
  },

  colors: {
    // ToDO: all this colors should be migrated or deleted
    blueGray: '#1E384B',
    blueGrayHard: '#4D6373',
    blueGrayHardText: '#566E7E',
    blueGraySoft: '#577282',
    grayHard: '#607A8A',
    graySoft: '#A6BBC3',
    cleanWhite: '#ffffff',
    admiralDarkBlue: '#21145f',
    admiralBlue: '#1e22aa',
    // Secondary colors
    skyBlue: '#D6E7E7',
    coralRed: '#ff5a5a',
    mintGreen: '#3cd5af',
    apolloYellow: '#ffc72c',
    asterPurple: '#d064ce',
    // Grey swatch
    spaceGray: '#838693',
    faintGray: '#C0C2CC',
    mediumGray: '#E8E9F0',
    softGray: '#EBF3F3',
    lightGray: '#F8F8FB',
    white: '#FFF',
    lightGray1: '#EBF3F3',
    lightGray2: '#D6E7E7',
    orange4: '#E52A07',
    red3: '#710D1B',
    // Final colors
    yellowb89: '#B89841',
    gray102: '#10252e',
    gray101: '#10131B',
    gray607: '#607A8A',
    gray435: '#435363',
    gray4d6: '#4D6373',
    gray4a5: '#4A5D6D',
    gray8ea: '#8EA4AE',
    grayde6: '#D6E7E7',
    grayebf: '#EBF3F3',
    rede52: '#E52A07',
    redab3: '#AB3013',
    blue017: '#0170C7',
    blue105: '#105fcc',
  },

  shadows: {
    card: '0 2px 6px 3px #efeff5',
    toast: '0 2px 6px 3px rgba(239, 239, 245, 0.5)',
    modal: '0 2px 6px 3px rgba(239, 239, 245, 0.5)',
  },
}
