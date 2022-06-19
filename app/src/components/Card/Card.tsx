import { FC } from 'react'
import { StyledCardContainer, StyledImgWrapper, StyledTextWrapper } from './Card.styled'
import { Props } from './Card.model'

import { ImgArea } from './components/ImgArea'
import { TextArea } from './components/TextArea'
import { Link } from 'components/Link'

const CardComponent:FC<Props> = ({
  className = '',
  testId,
  imgAreaProps,
  textAreaProps,
  onClick,
  link
}) => {
  return (
    <StyledCardContainer className={className} data-testid={testId} hasAction={!!onClick || !!link}>
      <StyledImgWrapper>
      <ImgArea {...imgAreaProps}/>
      </StyledImgWrapper>

      <StyledTextWrapper>
        <TextArea {...textAreaProps}/>
      </StyledTextWrapper>

    </StyledCardContainer>
  )
}

export const Card: FC<Props> = (props) => {
  return (
    <>
    {props.link
      ? <Link to={props.link} underline={false}><CardComponent {...props}/></Link>
      : <CardComponent {...props}/>}
    </>
  )
}
