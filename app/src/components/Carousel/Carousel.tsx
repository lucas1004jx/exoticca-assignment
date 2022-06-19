import { FC, useState } from 'react'
import { StyledCard, StyledCardWrapper, StyledCarouselContainer, StyledCarouselInnerWrapper } from './Carousel.styled'
import { Props } from './Carousel.model'
import { Controller } from './components/Controller'
import { useScreen } from 'hooks/useScreen'

export const Carousel: FC<Props> = ({
  className = '',
  testId,
  cards = []
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const { isBigScreen, isMediumScreen, isSmallScreen, isTablet, isMobile } = useScreen()

  const getSlideOnTheScreen = () => {
    if (isBigScreen) return 5.5
    if (isMediumScreen) return 4.5
    if (isSmallScreen) return 3.5
    if (isTablet) return 2.5
    if (isMobile) return 1.5
    return 1.5
  }

  const handleSlideLeft = () => {
    setCurrentSlide(slide => slide - 1)
  }

  const handleSlideRight = () => {
    setCurrentSlide(slide => slide + 1)
  }

  return (
    <StyledCarouselContainer className={className} data-testid={testId}>
      {currentSlide > 0 && <Controller direction='left' onClick={handleSlideLeft}/>}
      {currentSlide < cards.length - getSlideOnTheScreen() && <Controller direction='right' onClick={handleSlideRight}/>}
      <StyledCarouselInnerWrapper currentSlide={currentSlide} slidesOnTheScreen={getSlideOnTheScreen()}>
        {cards.map((card) => (
        <StyledCardWrapper key={card.id} slidesOnTheScreen={getSlideOnTheScreen()}>
          <StyledCard {...card} />
          </StyledCardWrapper>
        ))}
      </StyledCarouselInnerWrapper>
    </StyledCarouselContainer>
  )
}
