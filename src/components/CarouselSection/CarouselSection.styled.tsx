import styled from 'styled-components/macro'
import { StyledProps } from './CarouselSection.model'
import { calcRem, flex } from 'util/styles'
import { Typography } from 'components/Typography'

export const StyledCarouselSectionContainer = styled.div<StyledProps>`
    color:currentColor;   
`

export const StyledHeader = styled.div`
    ${flex()}
    align-items:baseline ;
`

export const StyledButtonWrapper = styled.div`
    flex-shrink:0;
    ${flex('column')}
    align-items:center;
`

export const StyledButtonDesription = styled(Typography)`
 ${flex()}
 align-items:center;
   &::before, &::after {
    content: ' ';
    display:block;
    width:${calcRem(40)};
    height:${calcRem(1)};
    background: ${({ theme }) => theme.palette.semantic.background.base};
   }
`
