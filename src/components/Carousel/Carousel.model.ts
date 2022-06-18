import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { PickOptional } from 'util/functions/typeUtils'
import { Props as CardProps } from 'components/Card/Card.model'

export interface Props extends ComponentPropsBase {
    cards:CardProps[]
}

export interface ControlerProps {
    direction: 'left' | 'right',
    onClick: () => void
}

export interface StyledProps extends StyledPropsBase,
PickOptional<ControlerProps, 'direction'> {
    currentSlide?: number
    slidesOnTheScreen?: number
}
