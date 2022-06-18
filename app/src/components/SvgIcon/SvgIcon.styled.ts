import styled from 'styled-components'
import { getColor } from 'util/styles'
import { StyledProps } from './SvgIcon.model'

export const StyledIconWrapper = styled.span<StyledProps>`
 line-height:0 ;
& > svg {
    height: ${({ theme, size = 's' }) => theme.icon[size]};
    width: ${({ theme, size = 's' }) => theme.icon[size]};
    color:${({ theme, color, colorShade = 'base' }) => getColor(theme, color, colorShade)};
    fill:none;
}
 
`
