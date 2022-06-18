import { FC } from 'react'
import { StyledHomePageWrapper } from './HomePage.styled'
import { CarouselSection } from 'components/CarouselSection'

export const HomePage:FC = () => {
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
            <CarouselSection {...carouselSetionProps}/>
        </StyledHomePageWrapper>
  )
}
