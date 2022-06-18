import styled, { css } from 'styled-components/macro'
import { calcRem } from 'util/styles'
import { StyledProps } from './Carousel.model'
import { SvgIcon } from 'components/SvgIcon'

export const StyledCarouselContainer = styled.div<StyledProps>`
    height:160px;
    background:lightblue ;
    position:relative ;
    overflow:hidden ;
`

export const StyledControllerWrapper = styled.div<StyledProps>`
    position:absolute;
    box-shadow:${({ theme }:StyledProps) => theme.shadows.s};
    width:${calcRem(112)};
    height:${calcRem(112)};
    border-radius:${({ theme }:StyledProps) => theme.borderRadius.xl} ${({ theme }:StyledProps) => theme.borderRadius.xl};
    cursor: pointer;
    top:50%;

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
