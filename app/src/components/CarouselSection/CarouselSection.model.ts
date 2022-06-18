
import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { Props as CardProps } from 'components/Card'

export interface Props extends ComponentPropsBase {
    cards: CardProps[]
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
