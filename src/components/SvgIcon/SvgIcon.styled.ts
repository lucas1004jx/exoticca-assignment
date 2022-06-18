import styled from 'styled-components'
import { calcRem, getColor } from 'util/styles'
import { StyledProps } from './SvgIcon.model'

export const StyledIconWrapper = styled.span<StyledProps>`
 line-height:0 ;
& > svg {
    height: ${calcRem(16)};
    width: ${calcRem(16)};
    color:${({ theme, color, colorShade = 'base' }) => getColor(theme, color, colorShade)};
    fill:none;
}
 
`
