import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { TypographyVariant } from 'styled-components'

export interface Props extends ComponentPropsBase {
  fontVariant?: TypographyVariant
  onClick?: () => void
}

export interface StyledProps extends StyledPropsBase, Pick<Props, 'fontVariant' | 'onClick'> {}
