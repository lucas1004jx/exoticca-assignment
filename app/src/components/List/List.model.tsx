import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { Option, ListOption } from 'model/common'

export interface Props extends ComponentPropsBase{
    items:Option[]
    onSelect?:(option:Option)=>void
    keyword?:string
    listOption:ListOption
}

export interface StyledProps extends StyledPropsBase, ListOption{}
