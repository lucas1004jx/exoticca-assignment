import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { Color, ColorShade } from 'styled-components'

export type IconName = 'arrowRight'

export interface Props extends ComponentPropsBase, React.SVGProps<SVGSVGElement> {
    icon: IconName
    color?: Color,
    colorShade?: keyof ColorShade
}

export interface StyledProps extends StyledPropsBase,
Pick<Props, 'color' | 'colorShade'> {}
