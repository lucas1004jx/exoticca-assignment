import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { PickOptional } from 'util/functions/typeUtils'

export interface Props extends ComponentPropsBase {}

export interface ControlerProps {
    direction: 'left' | 'right'
}

export interface StyledProps extends StyledPropsBase,
PickOptional<ControlerProps, 'direction'> {}
