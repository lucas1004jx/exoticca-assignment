
import { IconName } from 'components/SvgIcon/SvgIcon.model'
import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { Color } from 'styled-components'

export interface IconOption {
  name: IconName
  color?: Color
  description?: string,
  actionHandler?: () => void
}

export interface Props extends ComponentPropsBase, React.ComponentPropsWithRef<'input'> {
  endIcon?: IconOption
}

export interface StyledProps extends StyledPropsBase {}
