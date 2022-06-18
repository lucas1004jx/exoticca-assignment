import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { Color, ColorShade } from 'styled-components'

export interface Props extends ComponentPropsBase {
    color?:Color
    colorShade?:keyof ColorShade
    backgroundColor?:Color
    backgroundColorShade?:keyof ColorShade
}

export interface StyledProps extends StyledPropsBase,
Pick<Props,
| 'backgroundColor'
| 'backgroundColorShade'> {}
