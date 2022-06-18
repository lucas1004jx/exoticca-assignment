import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Carousel } from 'components/Carousel'
import { Cards } from './data'

export default {
  title: 'Components/Carousel',
  component: Carousel
} as ComponentMeta<typeof Carousel>

export const Base: ComponentStory<typeof Carousel> = args => <Carousel {...args} />

Base.args = {
  cards: Cards
}
