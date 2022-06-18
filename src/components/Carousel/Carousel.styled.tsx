import styled, { css } from 'styled-components/macro'
import { calcRem } from 'util/styles'
import { StyledProps } from './Carousel.model'
import { SvgIcon } from 'components/SvgIcon'
import { Card } from 'components/Card'

export const StyledCarouselContainer = styled.div<StyledProps>`
    position:relative ;
    overflow:hidden ;
    padding:${({ theme }:StyledProps) => theme.spacing(1, 4)} ;
`

export const StyledControllerWrapper = styled.div<StyledProps>`
    position:absolute;
    box-shadow:${({ theme }:StyledProps) => theme.shadows.s};
    width:${calcRem(90)};
    height:${calcRem(90)};
    border-radius:${({ theme }:StyledProps) => theme.borderRadius.xl} ${({ theme }:StyledProps) => theme.borderRadius.xl};
    cursor: pointer;
    top:50%;
    z-index:1;
    background:${({ theme }:StyledProps) => theme.palette.semantic.background.light} ;

    ${({ direction }) => direction === 'left' && css`
        left:0;
        transform:translate(-50%,-50%) rotate(180deg);
    `}

    ${({ direction }) => direction === 'right' && css`
        right:0;
        transform:translate(50%,-50%);
    `}
`

export const StyledIcon = styled(SvgIcon)<StyledProps>`
    position:absolute;
    top:50%;
    left:25%;
    transform:translate(-25%,-50%) ;
`

export const StyledCarouselInnerWrapper = styled.div<StyledProps>`
    display:flex ;

`

export const StyledCardWrapper = styled.div<StyledProps>`
    width:calc(100% / 5.5);
    flex-shrink:0;
`

export const StyledCard = styled(Card)`
    margin-right: ${({ theme }:StyledProps) => theme.spacing(6)};
`
