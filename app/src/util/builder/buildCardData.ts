
import { Props as CardProps } from 'components/Card'
import { Card } from 'model/serverModal/card.model'
import { displayDays } from 'util/functions/displayUnit'

export const buildCardData = (card:Card):CardProps => {
  const {
    destination,
    images,
    title,
    days,
    priceDetail: { fromPrice, discountSaved, pricingPercentage }
  } = card
  const imgAreaProps = {
    imgSrc: images[0].desktop,
    imgTitle: destination,
    imgDescription: displayDays(days),
    discountPercentage: pricingPercentage
  }
  const textAreaProps = {
    description: title,
    originalPrice: fromPrice + discountSaved,
    discountedPrice: fromPrice
  }
  return ({
    imgAreaProps,
    textAreaProps
  })
}
