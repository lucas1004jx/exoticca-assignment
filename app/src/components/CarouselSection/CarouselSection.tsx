import { FC } from 'react'
import { StyledButtonDesription, StyledButtonWrapper, StyledCarouselSectionContainer, StyledHeader } from './CarouselSection.styled'
import { Props } from './CarouselSection.model'
import { Typography } from 'components/Typography'
import { Button } from 'components/Button'
import { Carousel } from 'components/Carousel/Carousel'
import { Cards } from 'components/Carousel/__stories__/data'
import { useScreen } from 'hooks/useScreen'
import { useReactQuery } from 'hooks/useReactQuery'

export const CarouselSection: FC<Props> = ({
  className = '',
  testId,
  headerProps,
  buttonProps
}) => {
  const { isMobile } = useScreen()
  const { data, isLoading } = useReactQuery('market', 'https://api-es.exoticca.com/api/home')

  console.log('data-->', data)
  console.log('isLoading-->', isLoading)
  return (
    <StyledCarouselSectionContainer className={className} data-testid={testId}>
          <StyledHeader>
            {headerProps && (
            <div>
            <Typography variant='header' fontStyle='italic'>{headerProps.text}</Typography>
            {!isMobile && <Typography>{headerProps.description}</Typography>}
            {isMobile && buttonProps && (
              <Button
                text={buttonProps?.description}
                variant='text'
                onClick={buttonProps?.onClick}
                endIcon='arrowRight2'
                />
            )}
            </div>
            )}
            {!isMobile && buttonProps && (
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
