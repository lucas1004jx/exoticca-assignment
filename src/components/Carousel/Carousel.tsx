import { FC } from 'react'
import { StyledCarouselContainer } from './Carousel.styled'
import { Props } from './Carousel.model'
import { Controller } from './components/Controller'

export const Carousel: FC<Props> = ({ className = '', testId }) => {
  return (
    <StyledCarouselContainer className={className} data-testid={testId}>
      <Controller direction='left'/>
      <Controller direction='right'/>
    </StyledCarouselContainer>
  )
}
