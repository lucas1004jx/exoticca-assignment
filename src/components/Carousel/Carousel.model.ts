import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { PickOptional } from 'util/functions/typeUtils'
import { Props as CardProps } from 'components/Card/Card.model'

export interface Props extends ComponentPropsBase {
    cards:CardProps[]
}

export interface ControlerProps {
    direction: 'left' | 'right'
}

export interface StyledProps extends StyledPropsBase,
PickOptional<ControlerProps, 'direction'> {}
