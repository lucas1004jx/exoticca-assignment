
import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { Props as CarouselProps } from 'components/Carousel'

export interface Props extends ComponentPropsBase,
Pick<CarouselProps, 'cards'> {
    headerProps?: {
        text: string
        description: string
    }
    buttonProps?:{
        text: string,
        description: string
        onClick: () => void
    }
}

export interface StyledProps extends StyledPropsBase {}
