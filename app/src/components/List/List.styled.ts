
import styled, { css } from 'styled-components'
import { StyledProps } from './List.model'

export const StyledDropdownListWrapper = styled.div<StyledProps>`
    background:${({ theme }:StyledProps) => theme.palette.semantic.background.light} ;
    border:1px solid ${({ theme }: StyledProps) => theme.palette.semantic.border.light};
    border-radius: ${({ theme }:StyledProps) => theme.borderRadius.xs};
`

export const StyledGroupItems = styled.div<StyledProps>`
    padding:${({ theme }:StyledProps) => theme.spacing(1.5, 2)};
`
export const StyledGroupTitle = styled.div`
    display:flex ;
    align-items:center ;
    justify-content:space-between ;
`

export const StyledListContainer = styled.ul<StyledProps>`
    padding:0;
    margin:0;
    background: ${({ theme }: StyledProps) => theme.palette.semantic.background.light};
    border-radius: ${({ theme }:StyledProps) => theme.borderRadius.xs};
    display:grid;
    ${({ separator }) => separator
    ? css`
        & > :not(:last-child){
            border-bottom: 1px solid ${({ theme }:StyledProps) => theme.palette.semantic.border.light};
        };
        `
        : css`border-bottom:none`
    }
`
