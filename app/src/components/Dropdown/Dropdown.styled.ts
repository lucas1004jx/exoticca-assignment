import { List } from 'components/List'
import styled from 'styled-components'
import { StyledProps } from './Dropdown.model'

export const StyledDropdownWrapper = styled.div<StyledProps>`
  position:relative ;
  width:100% ;
`

export const StyledDropdownInputArea = styled.div`
  display: flex;
  `

export const StyledDropDownList = styled(List)`
  position:absolute ;
  width:100% ;
  bottom:0 ;
  transform:translateY(calc(100% + ${({ theme }:StyledProps) => theme.spacing(0.5)}));
`
