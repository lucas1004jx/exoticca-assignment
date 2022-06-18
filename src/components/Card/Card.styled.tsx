import styled from 'styled-components/macro'
import { StyledProps } from './Card.model'
import { calcRem, flex } from 'util/styles'

export const StyledCardContainer = styled.div<StyledProps>`
    height:${calcRem(389)};
    min-width:${calcRem(285)} ;
    box-shadow:${({ theme }:StyledProps) => theme.shadows.xs};
    ${flex('column', 0)};
`

export const StyledImgWrapper = styled.div`
    height: ${calcRem(275)};
    position: relative;
    &:before{
        content:'';
        display:block;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background:${({ theme }:StyledProps) => `linear-gradient(0deg,${theme.palette.semantic.background.base}, transparent 50%)`}
    }
`

export const StyledImg = styled.img`
    height: 100%;
    width:100%;
    object-fit:cover ;
`

export const StyledTextWrapper = styled.div<StyledProps>`
    flex-grow:1;
    padding:${({ theme }:StyledProps) => theme.spacing(2)};
    ${flex('column')};
    justify-content:space-between;
`

export const StyledTagWrapper = styled.div`
    position: absolute;
    top:${calcRem(16)};
    left:${calcRem(16)};
`

export const StyledImgTitleWrapper = styled.div<StyledProps>`
 position: absolute;
 bottom:0;
 padding:${({ theme }:StyledProps) => theme.spacing(2)};
`

export const StyledPriceWrapper = styled.div<StyledProps>`
   ${flex('row', 1)}
   align-items:baseline ;
`
