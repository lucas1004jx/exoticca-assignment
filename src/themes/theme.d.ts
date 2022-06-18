
import 'styled-components'
declare module 'styled-components' {

  export interface ColorShade {
    light?: string
    base: string
    dark?: string
  }

  export type BrandColor = 'primary' | 'secondary'
  export type SemanticColor =
  | 'text'
  | 'background'
  | 'error'
  | 'border'
  | 'shadow'

  export type Color = SemanticColor | BrandColor

  export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'bodyL'
  | 'body'
  | 'bodyS'
  | 'bodyXS'

  export type FontWeight = 'light' | 'regular' | 'semibold' | 'bold'

  export type Size = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

  export type IconSizes = Extract<Size,
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  >

  export type Radius = Extract<Size,
  | 'none'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  >

export type ButtonSize = Extract<Size, 's' | 'm' | 'l' | 'xl'>
export type InputSize = Extract<Size, 's' | 'm' | 'l' >

export type ButtonVariant = 'contained' | 'outlined' | 'text'

export type Align = 'center' | 'inherit' | 'left' | 'right'

export type Shape = 'sharp' | 'soft' | 'curved' | 'softCurved' | 'rounded'

  export interface Theme {
    palette: {
      brand: Record<BrandColor, ColorShade>
      semantic: Record<SemanticColor, ColorShade>
    },
    font:{
      family: {
        main: string
      },
      weight: Record<FontWeight, number>
      size: Record<TypographyVariant, string>
    },
    spacing: (...args: number[]) => string,
    borderRadius: Record<Radius, string>,
  }

}
