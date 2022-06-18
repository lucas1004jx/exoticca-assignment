
import {
  FontWeight,
  ColorShade,
  TypographyVariant,
  Align,
  Color
} from 'styled-components'
import React from 'react'
import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'

type TextDecoration = 'underline' | 'overline' | 'line-through'
export interface Props extends ComponentPropsBase {
  variant?: TypographyVariant
  align?: Align
  gutterBottom?: number
  color?: Color
  colorShade?: keyof ColorShade
  fontWeight?: FontWeight
  textDecoration?: TextDecoration
  padding?: number[]
  capitalize?: boolean
  children:React.ReactNode
}

export interface StyledProps extends StyledPropsBase, Pick<Props,
|'colorShade'
|'variant'
|'fontWeight'
|'align'
|'gutterBottom'
|'color'
|'textDecoration'
|'padding'
|'capitalize'
>{}
