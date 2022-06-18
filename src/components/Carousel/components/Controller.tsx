
import { FC } from 'react'
import { ControlerProps } from '../Carousel.model'
import { StyledControllerWrapper, StyledIcon } from '../Carousel.styled'

export const Controller:FC<ControlerProps> = ({ direction, onClick }) => {
  return (
        <StyledControllerWrapper direction={direction} onClick={onClick}>
            <StyledIcon icon='arrowRight2' size='l'/>
        </StyledControllerWrapper>
  )
}
