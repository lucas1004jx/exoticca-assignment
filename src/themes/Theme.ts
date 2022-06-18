import { Theme } from 'styled-components'
import { calcRem } from 'util/styles/styles'

const spacingBaseUnit = 8

export const theme: Theme = {
  palette: {
    brand: {
      primary: {
        base: '#1b306f'
      },
      secondary: {
        light: '#c6f16d',
        base: '#4c878c',
        dark: '#4c878c'
      }
    },
    semantic: {
      text: {
        light: '#FFFFFF',
        base: '#1d2124',
        dark: '#c6f16d'
      },
      background: {
        light: '#fff',
        base: '#f9fafa',
        dark: '#E8E8E8'
      },
      error: {
        light: '#f44336',
        base: '#f44336',
        dark: '#f44336'
      },
      border: {
        light: '#dbe2e699',
        base: '#dbe2e6',
        dark: '#808080'
      },
      shadow: {
        base: '#101213'
      }
    }
  },
  font: {
    family: { main: 'Arial,sans-serif' },
    weight: {
      light: 300,
      regular: 400,
      semibold: 500,
      bold: 700
    },
    size: {
      h1: '32px',
      h2: '28px',
      h3: '26px',
      h4: '22px',
      h5: '20px',
      h6: '18px',
      body: '16px',
      bodyS: '14px',
      bodyXS: '12px',
      bodyL: '18px'
    }
  },
  borderRadius: {
    none: '0',
    xs: calcRem(4),
    s: calcRem(8),
    m: calcRem(20),
    l: '25%',
    xl: '100%'
  },
  spacing: (...args) => {
    const length = args.length
    if (length < 1 || length > 4) return '0px'

    return args.map(space => calcRem(space * spacingBaseUnit)).join(' ')
  }
}
