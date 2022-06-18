import { FC } from 'react'
import { StyledCard, StyledCardWrapper, StyledCarouselContainer, StyledCarouselInnerWrapper } from './Carousel.styled'
import { Props } from './Carousel.model'
import { Controller } from './components/Controller'
import uniqid from 'uniqid'

export const Carousel: FC<Props> = ({
  className = '',
  testId,
  cards = []
}) => {
  return (
    <StyledCarouselContainer className={className} data-testid={testId}>
      <Controller direction='left'/>
      <Controller direction='right'/>
      <StyledCarouselInnerWrapper>
        {cards.map((card) => (
        <StyledCardWrapper key={uniqid()}>
          <StyledCard {...card} />
          </StyledCardWrapper>
        ))}
      </StyledCarouselInnerWrapper>
    </StyledCarouselContainer>
  )
}
