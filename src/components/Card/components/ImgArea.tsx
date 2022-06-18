import { Typography } from 'components/Typography'
import { FC } from 'react'
import { ImgAreaProps } from '../Card.model'
import { StyledImg, StyledImgTitleWrapper, StyledTagWrapper } from '../Card.styled'

export const ImgArea:FC<ImgAreaProps> = ({
  imgSrc,
  tagComponent,
  imgTitle,
  imgDescription
}) => {
  const hasImgInfo = imgTitle || imgDescription
  return (
        <>
       {tagComponent && (
       <StyledTagWrapper>
            {tagComponent}
        </StyledTagWrapper>
       )}

       {hasImgInfo && (
       <StyledImgTitleWrapper>
        {imgTitle && (
        <Typography variant='h4' fontWeight='bold' color='text' colorShade='light'>
            {imgTitle}
        </Typography>
        )}

        {imgDescription && (
        <Typography color='text' colorShade='light'>
            {imgDescription}
        </Typography>
        )}
       </StyledImgTitleWrapper>
       )}

      <StyledImg src={imgSrc}/>
      </>
  )
}
