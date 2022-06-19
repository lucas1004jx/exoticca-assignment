import { FC, useState } from 'react'
import { StyledHomePageWrapper } from './HomePage.styled'
import { CarouselSection } from 'components/CarouselSection'
import { useReactQuery } from 'hooks/useReactQuery'
import { Product } from 'model/serverModal/product.model'
import { buildCardData } from 'util/builder/buildCardData'
import { Dropdown } from 'components/Dropdown'
import { Option } from 'model/common'

export const HomePage:FC = () => {
  const [market, setMarket] = useState('es')

  const getUrl = (market:string) => {
    switch (market) {
      case 'es':
        return 'http://localhost:3001/products/es'

      case 'uk':
        return 'http://localhost:3001/products/uk'

      default:
        return 'http://localhost:3001/products/es'
    }
  }

  const queryName = `market-${market}`

  const { data, isLoading } = useReactQuery<Product>(queryName, getUrl(market))

  const cardsData = isLoading ? [] : data?.topSales.cards.map(buildCardData) ?? []

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
          <Dropdown
          items={markets}
           iconDescription='Select market'
           onSetSelectedItem={handleSelectMarket}
           defaultSelectedOption={markets[0]}
           />
            <CarouselSection {...carouselSetionProps} cards={cardsData}/>
        </StyledHomePageWrapper>
  )
}
