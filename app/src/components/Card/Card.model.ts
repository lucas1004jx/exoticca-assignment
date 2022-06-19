import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'

export interface ImgAreaProps{
    imgSrc: string
    imgTitle?: string
    imgDescription?: string
    discountPercentage?: number
}

export interface TextAreaProps{
    description?: string
    originalPrice: number
    discountedPrice: number
}
export interface Props extends ComponentPropsBase {
    imgAreaProps:ImgAreaProps
    textAreaProps:TextAreaProps
    onClick?:()=>void
}

export interface StyledProps extends StyledPropsBase {}
