import styled from 'styled-components/macro'
import { StyledProps } from './Card.model'
import { calcRem } from 'util/styles'

export const StyledCardContainer = styled.div<StyledProps>`
    height:${calcRem(389)};
    min-width:${calcRem(285)} ;
    box-shadow:${({ theme }:StyledProps) => theme.shadows.xs};
`

export const StyledImgWrapper = styled.div`
    height: ${calcRem(275)};
    position: relative;
 
`

export const StyledImg = styled.img`
    height: 100%;
    width:100%;
    object-fit:cover ;
`
