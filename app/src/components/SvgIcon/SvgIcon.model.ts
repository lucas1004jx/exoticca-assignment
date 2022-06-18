import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { Color, ColorShade, IconSize } from 'styled-components'

export type IconName = 'arrowRight' | 'arrowRight2'

export interface Props extends ComponentPropsBase, React.SVGProps<SVGSVGElement> {
    icon: IconName
    color?: Color,
    colorShade?: keyof ColorShade
    size?: IconSize
}

export interface StyledProps extends StyledPropsBase,
Pick<Props, 'color' | 'colorShade' | 'size'> {}
