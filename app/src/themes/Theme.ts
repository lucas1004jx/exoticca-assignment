import { Theme } from 'styled-components'
import { calcRem } from 'util/styles/styles'
import { withAlphaHex } from 'with-alpha-hex'

const spacingBaseUnit = 8

export const theme: Theme = {
  palette: {
    brand: {
      primary: {
        base: '#1b306f'
      },
      secondary: {
        base: '#1b306f'
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
        base: '#2a2a2a'
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
      },
      highlight: {
        base: '#e8cb91'
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
      header: calcRem(48),
      h1: calcRem(32),
      h2: calcRem(28),
      h3: calcRem(26),
      h4: calcRem(22),
      h5: calcRem(20),
      h6: calcRem(18),
      bodyL: calcRem(18),
      body: calcRem(16),
      bodyS: calcRem(14),
      bodyXS: calcRem(12)
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
  shadows: {
    none: 'none',
    xs: `0px 1px 2px ${withAlphaHex('#000', 0.3)}`,
    s: `0px 2px 4px ${withAlphaHex('#000', 0.3)}`,
    m: `0px 4px 6px ${withAlphaHex('#000', 0.3)}`
  },
  icon: {
    s: calcRem(16),
    m: calcRem(24),
    l: calcRem(32)
  },
  spacing: (...args) => {
    const length = args.length
    if (length < 1 || length > 4) return '0px'

    return args.map(space => calcRem(space * spacingBaseUnit)).join(' ')
  }
}
