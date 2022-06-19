import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { Option } from 'model/common'

export interface Props extends ComponentPropsBase{
    items:Option[]
    onSelect?:(option:Option)=>void
    keyword?:string
    separator?:boolean
}

export interface StyledProps extends StyledPropsBase, Pick<Props, 'separator'>{}
