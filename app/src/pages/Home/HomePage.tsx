import { FC, useState } from 'react'
import { StyledDropdown, StyledHeroImgWrapper, StyledHomePageWrapper } from './HomePage.styled'
import { CarouselSection } from 'components/CarouselSection'
import { useReactQuery } from 'hooks/useReactQuery'
import { Product } from 'model/serverModal/product.model'
import { buildCardData } from 'util/builder/buildCardData'
import { Option } from 'model/common'
import { ES_MARKET, UK_MARKET } from 'constants/api-constants'
import { Typography } from 'components/Typography'
import { useScreen } from 'hooks/useScreen'

export const HomePage:FC = () => {
  const { isMobile } = useScreen()
  const [market, setMarket] = useState('es')

  const getApiParams = (market:string) => {
    switch (market) {
      case 'es':
        return ES_MARKET

      case 'uk':
        return UK_MARKET

      default:
        return ES_MARKET
    }
  }

  const { data, isLoading } = useReactQuery<Product>(getApiParams(market))

  const cardsData = isLoading ? [] : data?.topSales.cards.map(buildCardData) ?? []

  const carouselSetionProps = {
    headerProps: {
      text: 'Multi-country tours',
      description: `Explore our more than ${cardsData.length}  multi-country tours. Let yourself be surprised by our extended version top sellers.`
    },
    buttonProps: {
      text: 'See more trips',
      description: '10 available trips',
      onClick: () => {}
    }
  }

  const markets:Option[] = [
    {
      id: 'es',
      name: 'Spain'
    },
    {
      id: 'uk',
      name: 'United Kingdom'
    }
  ]

  const handleSelectMarket = (option:Option | undefined) => {
    if (!option) return
    setMarket(option.id)
  }

  return (
        <StyledHomePageWrapper>
          <StyledHeroImgWrapper >
          <StyledDropdown
          isMobile={isMobile}
          items={markets}
           iconDescription={isMobile ? undefined : 'Select market'}
           onSetSelectedItem={handleSelectMarket}
           defaultSelectedOption={markets[0]}
           />
          </StyledHeroImgWrapper>
           {!isLoading ? <CarouselSection {...carouselSetionProps} cards={cardsData}/> : <Typography>Loading products</Typography>}
        </StyledHomePageWrapper>
  )
}
