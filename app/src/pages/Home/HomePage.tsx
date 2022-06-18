import { FC } from 'react'
import { StyledHomePageWrapper } from './HomePage.styled'
import { CarouselSection } from 'components/CarouselSection'
import { useReactQuery } from 'hooks/useReactQuery'
import { Product } from 'model/serverModal/product.model'
import { buildCardData } from 'util/builder/buildCardData'

export const HomePage:FC = () => {
  const { data, isLoading } = useReactQuery<Product>('market', 'http://localhost:3001/products/uk')

  console.log('data-->', data)
  console.log('isLoading-->', isLoading)

  const cardsData = isLoading ? [] : data?.topSales.cards.map(buildCardData) ?? []

  console.log('cardsData-->', cardsData)

  const carouselSetionProps = {
    headerProps: {
      text: 'Multi-country tours',
      description: 'Explore our more than 17 nights multi-country tours. Let yourself be surprised by our extended version top sellers.'
    },
    buttonProps: {
      text: 'See more trips',
      description: '10 available trips',
      onClick: () => {}
    }
  }
  return (
        <StyledHomePageWrapper>
            <CarouselSection {...carouselSetionProps} cards={cardsData}/>
        </StyledHomePageWrapper>
  )
}
