import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'

export interface ImgAreaProps{
    imgSrc: string
    tagComponent?: JSX.Element
    imgTitle?: string
    imgDescription?: string
}

export interface TextAreaProps{
    description?: string
    originalPrice?: number
    discountedPrice?: number
}
export interface Props extends ComponentPropsBase {
    imgAreaProps:ImgAreaProps
    textAreaProps:TextAreaProps
}

export interface StyledProps extends StyledPropsBase {}
