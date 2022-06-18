
import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'

export interface Props extends ComponentPropsBase {
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
