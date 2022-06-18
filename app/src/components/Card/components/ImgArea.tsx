import { DiscountTag } from 'components/DiscountTag'
import { Typography } from 'components/Typography'
import { FC } from 'react'
import { ImgAreaProps } from '../Card.model'
import { StyledImg, StyledImgTitleWrapper, StyledTagWrapper } from '../Card.styled'

export const ImgArea:FC<ImgAreaProps> = ({
  imgSrc,
  imgTitle,
  imgDescription,
  discountPercentage
}) => {
  const hasImgInfo = imgTitle || imgDescription
  return (
        <>
       {discountPercentage && (
       <StyledTagWrapper>
           <DiscountTag discount={discountPercentage} />
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
