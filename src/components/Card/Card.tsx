import { FC } from 'react'
import { StyledCardContainer, StyledImgWrapper, StyledTextWrapper } from './Card.styled'
import { Props } from './Card.model'

import { ImgArea } from './components/ImgArea'
import { TextArea } from './components/TextArea'

export const Card: FC<Props> = ({
  className = '',
  testId,
  imgAreaProps,
  textAreaProps
}) => {
  return (
    <StyledCardContainer className={className} data-testid={testId}>
      <StyledImgWrapper>
      <ImgArea {...imgAreaProps}/>
      </StyledImgWrapper>

      <StyledTextWrapper>
        <TextArea {...textAreaProps}/>
      </StyledTextWrapper>

    </StyledCardContainer>
  )
}
