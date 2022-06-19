import { ComponentPropsBase, StyledPropsBase } from 'model/propsBase'
import { ListOption, Option } from 'model/common'

export interface Props extends ComponentPropsBase, React.ComponentPropsWithRef<'input'> {
    items:Option[]
    defaultSelectedOption?: Option
    listOption?: ListOption
    iconDescription?:string
    withIcon?:boolean
    onInputChange?:(value:string)=>void
    onSetSelectedItem?:(item:Option | undefined)=>void
}

export interface StyledProps extends StyledPropsBase {}
