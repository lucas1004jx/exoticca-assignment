import styled from 'styled-components'
import { StyledProps } from './ListItem.model'

export const StyledListItemContainer = styled.li<StyledProps>`
    cursor: ${({ onClick }:StyledProps) => onClick ? 'pointer' : 'default'};
    list-style:none;
    font-size: ${({ theme, fontVariant = 'bodyS' }:StyledProps) => theme.font.size[fontVariant]};
    padding:${({ theme }:StyledProps) => theme.spacing(2, 2)};
    &:hover{
        background: ${({ theme }:StyledProps) => theme.palette.semantic.border.light};
    }
    &:empty{
        display:none;
    }
`
