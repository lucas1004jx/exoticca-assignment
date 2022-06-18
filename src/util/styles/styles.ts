
import { Color, ColorShade, Theme, TypographyVariant } from 'styled-components'

export const calcRem = (size: number): string => `${size / 16}rem`

export const getFontSizeByVariant = (
  theme: Theme,
  variant: TypographyVariant | undefined
) => {
  const { font: { size } } = theme

  return size[variant ?? 'body']
}

export const getColor = (
  theme: Theme,
  color: Color | undefined,
  colorShade: keyof ColorShade = 'base'
) => {
  const palette = theme.palette
  if (!color) return undefined
  else if (color === 'primary' || color === 'secondary') return palette.brand[color][colorShade]
  else return palette?.semantic[color]?.[colorShade]
}
