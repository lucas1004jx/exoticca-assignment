import styled from 'styled-components/macro'
import { StyledProps } from './Highlighted.model'

export const StyledMark = styled.mark<StyledProps>`
    background: ${({ theme }:StyledProps) => theme.palette.semantic.highlight.base}
`
