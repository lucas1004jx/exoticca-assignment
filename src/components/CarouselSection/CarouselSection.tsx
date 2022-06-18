import { FC } from 'react'
import { StyledButtonDesription, StyledButtonWrapper, StyledCarouselSectionContainer, StyledHeader } from './CarouselSection.styled'
import { Props } from './CarouselSection.model'
import { Typography } from 'components/Typography'
import { Button } from 'components/Button'
import { Carousel } from 'components/Carousel/Carousel'
import { Cards } from 'components/Carousel/__stories__/data'

export const CarouselSection: FC<Props> = ({
  className = '',
  testId,
  headerProps,
  buttonProps
}) => {
  return (
    <StyledCarouselSectionContainer className={className} data-testid={testId}>
          <StyledHeader>
            {headerProps && (
            <div>
            <Typography variant='header' fontStyle='italic'>{headerProps.text}</Typography>
            <Typography>{headerProps.description}</Typography>
            </div>
            )}
            {buttonProps && (
            <StyledButtonWrapper>
            <Button text={buttonProps.text} variant='outlined' endIcon='arrowRight' onClick={buttonProps.onClick}/>
            <StyledButtonDesription>{buttonProps.description}</StyledButtonDesription>
            </StyledButtonWrapper>
            )}
          </StyledHeader>
            <Carousel cards={Cards}/>
    </StyledCarouselSectionContainer>
  )
}
