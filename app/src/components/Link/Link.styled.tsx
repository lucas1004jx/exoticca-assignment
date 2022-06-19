import styled from 'styled-components/macro'
import { StyledProps } from './Link.model'
import { NavLink } from 'react-router-dom'

export const StyledLink = styled(NavLink)<StyledProps>`
    color:currentColor;
    text-decoration: ${({ $underline }: StyledProps) => $underline ? 'underline' : 'none'};
`
