
import {
  ComponentPropsBase,
  StyledPropsBase
} from 'model/propsBase'
import { NavLinkProps } from 'react-router-dom'

export interface Props extends ComponentPropsBase, Omit<NavLinkProps, 'className'>{
  underline?: boolean
  newTab?: boolean
}

export interface StyledProps extends StyledPropsBase {
  $underline?: boolean
}
