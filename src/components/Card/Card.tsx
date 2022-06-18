import { FC } from 'react'
import { StyledCardContainer, StyledImg, StyledImgWrapper } from './Card.styled'
import { Props } from './Card.model'

export const Card: FC<Props> = ({
  className = '',
  testId,
  imgSrc
}) => {
  return (
    <StyledCardContainer className={className} data-testid={testId}>
      <StyledImgWrapper>

      <StyledImg src={imgSrc}/>
      </StyledImgWrapper>

    </StyledCardContainer>
  )
}
