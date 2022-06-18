import { Typography } from 'components/Typography'
import { FC } from 'react'
import { displayPrice } from 'util/functions/displayUnit'
import { TextAreaProps } from '../Card.model'
import { StyledPriceWrapper } from '../Card.styled'

export const TextArea:FC<TextAreaProps> = ({
  description,
  originalPrice,
  discountedPrice
}) => {
  const onlyHasOriginalPrice = originalPrice && !discountedPrice
  const hasDiscount = originalPrice && discountedPrice
  return (
        <>
       {description && (
        <Typography>
        {description}
        </Typography>
       )}
        {
            onlyHasOriginalPrice && (
                <StyledPriceWrapper>
                <Typography variant='bodyS'>
                    From
                </Typography>
                <Typography variant='body' fontWeight='bold'>
                     {displayPrice(originalPrice)}
                </Typography>
                </StyledPriceWrapper>
            )
        }

        {
            hasDiscount && (
                <StyledPriceWrapper>
                <Typography variant='bodyS'>
                    From
                </Typography>
                <Typography variant='body' fontWeight='bold' textDecoration='line-through'>
                     {displayPrice(originalPrice)}
                </Typography>
                <Typography variant='h4' fontWeight='bold' >
                    {displayPrice(discountedPrice)}
                </Typography>
                </StyledPriceWrapper>
            )
        }
        </>
  )
}
