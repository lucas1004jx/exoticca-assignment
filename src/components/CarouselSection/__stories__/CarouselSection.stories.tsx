import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CarouselSection } from 'components/CarouselSection'

export default {
  title: 'Sections/CarouselSection',
  component: CarouselSection
} as ComponentMeta<typeof CarouselSection>

export const Base: ComponentStory<typeof CarouselSection> = args => <CarouselSection {...args} />

Base.args = {
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
