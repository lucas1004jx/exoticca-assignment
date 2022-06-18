
import {
  FontWeight,
  ColorShade,
  TypographyVariant,
  Align,
  Color,
  FontStyle
} from 'styled-components'
import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'

type TextDecoration = 'underline' | 'overline' | 'line-through'
export interface Props extends ComponentPropsBase {
  variant?: TypographyVariant
  align?: Align
  gutterBottom?: number
  color?: Color
  colorShade?: keyof ColorShade
  fontWeight?: FontWeight
  fontStyle?:FontStyle
  textDecoration?: TextDecoration
  padding?: number[]
  capitalize?: boolean
}

export interface StyledProps extends StyledPropsBase, Pick<Props,
|'colorShade'
|'variant'
|'fontWeight'
|'fontStyle'
|'align'
|'gutterBottom'
|'color'
|'textDecoration'
|'padding'
|'capitalize'
>{}
