import { IconName } from 'components/SvgIcon/SvgIcon.model'
import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { ButtonSize, ButtonVariant, Color } from 'styled-components'

export interface Props extends ComponentPropsBase, React.ComponentPropsWithoutRef<'button'> {
    size?:ButtonSize
    variant?:ButtonVariant
    text:string
    color?:Color
    endIcon?: IconName
    startIcon?: IconName
}

export interface StyledProps extends StyledPropsBase, Pick<Props, 'size'|'variant'|'color'> {}
