import styled from 'styled-components/macro'
import { getColor, getFontSizeByVariant } from 'util/styles/styles'
import { StyledProps } from './Typography.model'

export const StyledTypographyContainer = styled.div<StyledProps>`
    font-size:${({ theme, variant }) => getFontSizeByVariant(theme, variant)};
    font-weight:${({ theme, fontWeight = 'regular' }) => theme.font.weight[fontWeight]};
    text-align:${({ align }) => align};
    margin:0;
    margin-bottom: ${({ theme, gutterBottom }) => theme.spacing(gutterBottom)};
    color:${({ theme, color, colorShade }:StyledProps) => getColor(theme, color, colorShade)} ;
    text-decoration:${({ textDecoration }) => textDecoration};
    padding:${({ padding, theme }: StyledProps) => padding ? theme.spacing(...padding) : 0};
    text-transform:${({ capitalize }) => capitalize ? 'capitalize' : 'none'} ;
`
